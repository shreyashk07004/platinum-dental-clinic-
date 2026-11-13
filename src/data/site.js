// ─────────────────────────────────────────────────────────────
// Clinic identity — edit this file first when personalising the
// demo for a new dentist (see README → "30-minute rebrand").
// ─────────────────────────────────────────────────────────────
export const site = {
  name: 'Platinum Dental Care',
  shortName: 'Platinum',
  tagline: 'Family & specialist dentistry, Nagala Park',
  established: 2014,

  // From the clinic's Google Business Profile.
  phoneDisplay: '+91 97642 41177',
  phoneRaw: '+919764241177',
  whatsapp: '919764241177',
  email: 'hello@platinumdental.in',

  addressLines: ['3rd Floor, Krystal Square, 100 Ft Road', 'Nagala Park, Kolhapur 416002'],
  landmark: 'Near Khanvilkar petrol pump',
  geo: { lat: 16.70773186636489, lng: 74.22902899814996 }, // exact clinic pin from Google Maps
  parking: 'Two-wheeler parking in front; cars on the 4th Lane side road.', // TODO: confirm with clinic
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=Platinum+Dental+Care,+Krystal+Square,+Nagala+Park,+Kolhapur',
  mapEmbed: 'https://www.google.com/maps?q=Platinum+Dental+Care,+Krystal+Square,+Nagala+Park,+Kolhapur&t=k&z=18&output=embed', // t=k = satellite view
  googleReviewsLink: 'https://www.google.com/maps?cid=14307867245017570191', // the clinic's own Google listing

  // Real facts shown in the hero strip (no counters, no invented numbers).
  facts: [
    { title: 'New sterilised kit', text: 'Every patient, opened in front of you' },
    { title: 'Digital RVG X-ray', text: 'Low-dose, shown to you on screen' },
    { title: 'Written treatment plan', text: 'Before any treatment begins' },
  ],

  showTestimonials: false, // switch on only once real patient reviews exist
};

export const nav = [
  { label: 'Treatments', href: '/treatments' },
  { label: 'Doctors', href: '/doctors' },
  { label: 'Clinic', href: '/clinic' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Contact', href: '/contact' },
];
