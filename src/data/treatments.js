// Treatments page — one entry per service listed on the clinic's Google
// Business Profile (checked 13 Nov 2026). Names match Google's labels exactly,
// which keeps the website and the Google listing consistent for local SEO.
// ("Online dentist booking" is also on the profile; it's the /book page.)
// The client wants NO prices or costs anywhere on the site.
export const treatmentGroups = [
  { id: 'everyday', label: 'Everyday & family care' },
  { id: 'restore', label: 'Saving & replacing teeth' },
  { id: 'smile', label: 'Smile & appearance' },
];

export const treatments = [
  // ── Everyday & family care ─────────────────────────────────
  {
    id: 'checkup',
    group: 'everyday',
    name: 'Check-ups',
    fixes: 'A full look at teeth, gums and bite, every 6–12 months',
    visits: '1 visit · 20–30 min',
    detail:
      'We check every tooth, your gums and your bite, and take a digital X-ray only if something needs a closer look. You leave with a written note of what we found and what (if anything) needs doing.',
    recovery: 'Nothing to recover from.',
  },
  {
    id: 'cleaning',
    group: 'everyday',
    name: 'Teeth cleaning',
    fixes: 'Tartar, stains, bleeding gums, bad breath',
    visits: '1 visit · 40 min',
    detail:
      'An ultrasonic scaler removes hardened tartar above and just below the gum line, then a polish takes off tea and coffee stains. Recommended every 6–12 months.',
    recovery: 'Mild sensitivity for a day or two in some people.',
  },
  {
    id: 'fillings',
    group: 'everyday',
    name: 'Fillings and sealants',
    fixes: 'Cavities, small chips, food getting stuck, deep grooves in new teeth',
    visits: '1 visit · 30–45 min',
    detail:
      'Decay is removed and the tooth is rebuilt with composite resin matched to your tooth shade. Sealants are a thin coating painted into the grooves of back teeth to stop cavities starting there.',
    recovery: 'Eat normally once the numbness wears off.',
  },
  {
    id: 'xray',
    group: 'everyday',
    name: 'X-ray',
    fixes: 'Hidden cavities, infection at the root, wisdom teeth, bone level',
    visits: 'A few minutes, during your visit',
    detail:
      'Our digital RVG X-ray uses a low dose and appears on screen in seconds, so the doctor can show you exactly what they see. We take one only when it’s needed, and you can have a copy.',
    recovery: 'None.',
  },
  {
    id: 'paediatrics',
    group: 'everyday',
    name: 'Paediatrics',
    fixes: 'First check-up, cavities in milk teeth, fluoride, habits like thumb-sucking',
    visits: 'Short visits · 15–30 min',
    detail:
      'Children’s visits are kept short, with a parent in the room. We show every instrument first, check for early cavities, apply fluoride and sealants, and talk to parents about brushing, sweets and bottle habits.',
    recovery: 'None — most children go straight back to school.',
  },
  {
    id: 'emergency',
    group: 'everyday',
    name: 'Emergency care',
    fixes: 'Severe pain, swelling, a broken or knocked-out tooth',
    visits: 'Seen the same day',
    detail:
      'Call or WhatsApp us straight away and we’ll fit you in the same day during clinic hours. We first get you out of pain, then explain the proper treatment. If a tooth is knocked out, keep it in milk and come in within the hour.',
    recovery: 'Depends on the problem; we tell you before you leave.',
  },

  // ── Saving & replacing teeth ───────────────────────────────
  {
    id: 'rct',
    group: 'restore',
    name: 'Root canals',
    fixes: 'Throbbing pain, pain at night, an infected or abscessed tooth',
    visits: '1–2 visits · 45–60 min each',
    detail:
      'The infected pulp inside the tooth is cleaned out with rotary files, shaped, disinfected and sealed. Done under local anaesthesia — most patients say it feels like a long filling. A crown is usually advised afterwards on back teeth.',
    recovery: 'Tenderness when biting for 2–3 days.',
  },
  {
    id: 'extractions',
    group: 'restore',
    name: 'Extractions',
    fixes: 'Badly broken teeth, loose teeth, teeth that can’t be saved',
    visits: '1 visit · 20–30 min',
    detail:
      'The tooth is fully numbed and gently removed, usually in a few minutes. We only advise taking a tooth out when it genuinely can’t be saved, and talk you through replacement options first.',
    recovery: 'Soft food for 24 hours; bleeding stops within a few hours.',
  },
  {
    id: 'oral-surgery',
    group: 'restore',
    name: 'Oral surgery',
    fixes: 'Impacted wisdom teeth, cysts, implant placement, minor gum surgery',
    visits: '1 visit · 45–90 min, plus a review',
    detail:
      'Minor oral surgery is done in the clinic under local anaesthesia. We take an X-ray first, tell you plainly how difficult your case looks, and explain the steps and recovery before the day.',
    recovery: 'Swelling for 2–4 days; stitches (if any) out in a week.',
  },
  {
    id: 'implants',
    group: 'restore',
    name: 'Dental implants',
    fixes: 'One or more missing teeth, a loose bridge or denture',
    visits: '2–3 stages over 3–4 months',
    detail:
      'A titanium post is placed in the jawbone and, once it has bonded (about 3 months), a crown is fixed on top. It does not depend on neighbouring teeth. We check bone with an X-ray (or CBCT scan at a partner centre) before advising you.',
    recovery: 'Mild swelling for 2–3 days after placement.',
  },
  {
    id: 'dentures-bridges',
    group: 'restore',
    name: 'Dentures & bridges',
    fixes: 'One, several or all teeth missing, loose old dentures',
    visits: 'Bridges 2 visits · dentures 4–5 short visits',
    detail:
      'A bridge uses the teeth on both sides of a gap to hold a fixed replacement tooth. Complete or partial dentures are made from impressions of your mouth and adjusted until they sit comfortably. Implant-supported dentures are available for a firmer fit.',
    recovery: 'A week or two to get used to speaking and eating with dentures.',
  },

  // ── Smile & appearance ─────────────────────────────────────
  {
    id: 'whitening',
    group: 'smile',
    name: 'Teeth whitening',
    fixes: 'Yellowing from age, tea, coffee or tobacco',
    visits: '1 visit · 60 min',
    detail:
      'In-clinic whitening gel lightens natural teeth by a few shades. It does not change the colour of crowns or fillings, so we check those first.',
    recovery: 'Some sensitivity for 24–48 hours; avoid tea and coffee for a day.',
  },
  {
    id: 'veneers-crowns',
    group: 'smile',
    name: 'Veneers & crowns',
    fixes: 'Weak, broken, discoloured or misshapen teeth; teeth after a root canal',
    visits: '2 visits · about a week apart',
    detail:
      'A veneer is a thin shell bonded to the front of a tooth to change its colour or shape. A crown is a cap that covers and protects the whole tooth. Options include metal-ceramic and full zirconia (metal-free).',
    recovery: 'Avoid very sticky food for the first day.',
  },
  {
    id: 'reshaping',
    group: 'smile',
    name: 'Teeth reshaping',
    fixes: 'Uneven edges, small chips, slightly long or pointed teeth',
    visits: '1 visit · 30–45 min',
    detail:
      'A very small amount of enamel is gently smoothed and polished to even out the shape of your teeth. It’s quick, painless and needs no injection. Often combined with bonding to fill small chips.',
    recovery: 'None.',
  },
  {
    id: 'cosmetic',
    group: 'smile',
    name: 'Cosmetic procedures',
    fixes: 'A smile you’re not happy with: colour, shape, gaps or chips',
    visits: 'Planned over 1–3 visits',
    detail:
      'Whitening, bonding, reshaping, veneers and crowns, used alone or together. We show you what each option will look like and only suggest what your teeth actually need.',
    recovery: 'Depends on the plan; most procedures need no time off.',
  },
];
