// ─────────────────────────────────────────────────────────────
// Google reviews, fetched from the Google Places API (New) when the site is
// BUILT (not on every visit), so the cost stays inside Google's free monthly
// allowance. Rebuild the site (e.g. once a day) to pick up new reviews.
//
// Setup: put these in a `.env` file (never commit it) or in your host's
// environment variables:
//   GOOGLE_PLACES_API_KEY=...          (required for live reviews)
//   GOOGLE_PLACE_ID=ChIJ...            (optional; looked up by name if missing)
//
// No key, or the request fails?  → the saved reviews in src/data/reviews.js
// are used instead, so the site always builds.
//
// Note: Google returns at most 5 reviews (its "most relevant" ones), shown
// exactly as written, with the reviewer's name and photo, as Google requires.
// ─────────────────────────────────────────────────────────────
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { google as savedGoogle, reviews as savedReviews } from '../data/reviews';

const API = 'https://places.googleapis.com/v1';
const SEARCH_TEXT = 'Platinum Dental Care, Krystal Square, Nagala Park, Kolhapur';
const CACHE_FILE = 'node_modules/.cache/platinum/google-reviews.json';
const CACHE_HOURS = 12; // stops `npm run dev` page reloads from using up the free allowance

const env = (name) => import.meta.env[name] ?? process.env[name];

const fallback = () => ({
  live: false,
  placeId: env('GOOGLE_PLACE_ID') || null,
  rating: savedGoogle.rating,
  count: savedGoogle.count,
  link: savedGoogle.link,
  reviews: savedReviews.map((r) => ({
    name: r.name,
    photo: r.photo || null,
    profile: null,
    rating: 5,
    text: r.text,
    when: null,
  })),
});

async function findPlaceId(key) {
  // "IDs only" Text Search — Google does not charge for this request type.
  const res = await fetch(`${API}/places:searchText`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Goog-Api-Key': key, 'X-Goog-FieldMask': 'places.id' },
    body: JSON.stringify({ textQuery: SEARCH_TEXT }),
  });
  if (!res.ok) throw new Error(`Place search failed: ${res.status} ${await res.text()}`);
  const data = await res.json();
  const id = data.places?.[0]?.id;
  if (!id) throw new Error('Place search returned no result');
  console.info(`[google-reviews] Place ID: ${id} (add GOOGLE_PLACE_ID=${id} to .env to skip this lookup)`);
  return id;
}

async function fetchLive(key) {
  const placeId = env('GOOGLE_PLACE_ID') || (await findPlaceId(key));
  const res = await fetch(`${API}/places/${placeId}?languageCode=en`, {
    headers: { 'X-Goog-Api-Key': key, 'X-Goog-FieldMask': 'rating,userRatingCount,googleMapsUri,reviews' },
  });
  if (!res.ok) throw new Error(`Place details failed: ${res.status} ${await res.text()}`);
  const p = await res.json();
  const reviews = (p.reviews || [])
    .map((r) => ({
      name: r.authorAttribution?.displayName || 'Google user',
      photo: r.authorAttribution?.photoUri || null,
      profile: r.authorAttribution?.uri || null,
      rating: r.rating ?? 5,
      text: (r.text?.text || r.originalText?.text || '').trim(),
      when: r.relativePublishTimeDescription || null,
    }))
    .filter((r) => r.text);

  return {
    live: true,
    placeId,
    rating: p.rating ?? savedGoogle.rating,
    count: p.userRatingCount ?? savedGoogle.count,
    link: p.googleMapsUri || savedGoogle.link,
    // Too few written reviews from the API? Keep the saved ones too.
    reviews: reviews.length >= 3 ? reviews : [...reviews, ...fallback().reviews],
  };
}

async function readCache() {
  try {
    const c = JSON.parse(await readFile(CACHE_FILE, 'utf8'));
    if (Date.now() - c.savedAt < CACHE_HOURS * 3600_000) return c.data;
  } catch {}
  return null;
}

async function load() {
  const key = env('GOOGLE_PLACES_API_KEY');
  if (!key) return fallback();

  const cached = await readCache();
  if (cached) return cached;

  try {
    const data = await fetchLive(key);
    await mkdir(CACHE_FILE.slice(0, CACHE_FILE.lastIndexOf('/')), { recursive: true });
    await writeFile(CACHE_FILE, JSON.stringify({ savedAt: Date.now(), data }));
    console.info(`[google-reviews] Loaded ${data.reviews.length} reviews (${data.rating} from ${data.count}).`);
    return data;
  } catch (err) {
    console.warn(`[google-reviews] Using saved reviews: ${err.message}`);
    return fallback();
  }
}

// One request per build, shared by every page and component.
let pending;
export const getGoogleReviews = () => (pending ??= load());
