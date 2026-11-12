# Placeholders — Platinum Dental Care

Everything a real clinic would change. Content lives in `src/data/*`. No layout code needs editing.

## 1. Clinic identity — `src/data/site.js`

| Item | Current (fictional) value | Notes |
|---|---|---|
| `name` / `shortName` | Platinum Dental Care / Platinum | Also update `<title>`, meta and JSON-LD in `src/layouts/Layout.astro` |
| `marathiWord` | स्मितम् | Optional; used once in About |
| `established` | 2014 | Shown as the outline numeral |
| `phoneDisplay` / `phoneRaw` | +91 87660 36310 | LocalLeap's number in demos |
| `whatsapp` | 918766036310 | **Keep LocalLeap's number for demos** so test bookings reach us |
| `email` | hello@platinumdental.in | Fictional |
| `addressLines`, `landmark`, `parking` | Shree Complex, Rajarampuri | Fictional address |
| `mapsLink`, `mapEmbed`, `googleReviewsLink` | Generic Rajarampuri search | Replace with the clinic's Google Maps place link and embed |
| `facts` (3) | Sterilised kit · RVG X-ray · Written plan | Change only to things the clinic really does |
| `agencyUrl` | https://localleapdigital.com | ⚠ Other samples use `localleap.digital` — confirm the final agency domain |
| `isConcept` | true | Shows the Concept banner. Set false for a live client site |
| `showTestimonials` | false | Turn on only after adding real reviews in `Testimonials.astro` |

## 2. Hours — `src/data/hours.js`
Sessions per weekday (morning/evening), slot length (30 min), summary rows and the emergency note. The booking slots and the Open/Closed badge both read from this file.

## 3. Doctors — `src/data/doctors.js`
Names, degrees, **MSDC registration numbers (`A-XXXXX` placeholders)**, bio, interests, per-doctor timings and photos. Delete one entry for a solo practice.

## 4. Treatments & prices — `src/data/treatments.js`
The `from` prices (₹300 – ₹75,000) are **placeholders based on typical Tier-2 city ranges**. Confirm them with the clinic, or set `from: null` to show "Ask for estimate".

## 5. Other content
- `src/data/symptoms.js`: symptom finder text (general guidance)
- `src/data/faqs.js`: 8 FAQs (the parking answer mentions a lift; check this)
- `src/data/gallery.js`: 6 clinic photos (replace with the clinic's own)
- `src/components/sections/About.astro`: clinic story paragraph and "clinic promise" list (the free 30-day re-check is a placeholder policy)

## 6. SEO / deployment — `src/layouts/Layout.astro`, `public/`
- `<meta name="robots" content="noindex, nofollow">` and `public/robots.txt` (Disallow: /). **Remove both for a live client site.**
- JSON-LD `Dentist` schema: name, phone, address, hours
- `public/og-image.jpg`: WhatsApp link preview image
- `public/favicon.svg`: tooth outline

## 7. Home page: "Why choose us" and "Before & after"
- `src/data/whyChooseUs.js`: the six reasons are based on the topics patients mention most in the clinic's Google reviews. Edit the wording here.
- `src/data/beforeAfter.js`: the three before/after pairs are **sample illustrations** (`public/images/before-after/*.svg`). Replace them with consented patient photos (same framing for both pictures in a pair).

## 8. Patient reviews — `src/data/reviews.js`
- `google`: rating (5.0) and review count (57) from the clinic's Google Business Profile, checked 12 Nov 2026. Update them now and then.
- `reviews`: **real** Google reviews (first name + initial). They scroll in the bar fixed to the bottom of every page (`src/components/ui/ReviewsBar.astro`).
- `videos`: the home page "Patient reviews" video cards are **demo samples** (a CC0 clip and clinic photos as posters, tagged "Sample video"). For each real testimonial, set `src` (a file in `public/videos/`) or `youtubeId`, plus `poster`, `title` and `caption`, and delete `isSample`.
