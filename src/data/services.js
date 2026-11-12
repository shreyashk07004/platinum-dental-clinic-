// Services shown in the "Not sure what you need?" finder on the home page.
// `href` (optional) replaces the Book button's booking hook with a plain link.
export const services = [
  {
    id: 'whitening',
    label: 'Teeth whitening',
    likely: 'For yellowing from age, tea, coffee or tobacco.',
    advice: 'In-clinic whitening gel lightens natural teeth by a few shades in about an hour. It does not change the colour of crowns or fillings, so we check those first.',
  },
  {
    id: 'checkup',
    label: 'Check-ups',
    likely: 'A full look at teeth and gums, every 6–12 months.',
    advice: 'We check every tooth, your gums and your bite, and take a digital X-ray only if something needs a closer look. You leave with a written note of what we found.',
  },
  {
    id: 'cosmetic',
    label: 'Cosmetic procedures',
    likely: 'For a smile you’re not happy with: colour, shape, gaps or chips.',
    advice: 'Whitening, bonding, reshaping, veneers and crowns — we show you what each option looks like and costs, and only suggest what your teeth actually need.',
  },
  {
    id: 'implants',
    label: 'Dental implants',
    likely: 'A fixed replacement for one or more missing teeth.',
    advice: 'A titanium post is placed in the jawbone and, once it has bonded (about 3 months), a crown is fixed on top. It does not depend on the neighbouring teeth. We check the bone with an X-ray first.',
  },
  {
    id: 'dentures-bridges',
    label: 'Dentures & bridges',
    likely: 'For one, several or all missing teeth.',
    advice: 'A bridge uses the teeth on both sides to hold a replacement tooth. Complete or partial dentures are made from impressions of your mouth and adjusted until they sit comfortably.',
  },
  {
    id: 'emergency',
    label: 'Emergency care',
    likely: 'Severe pain, swelling, a knocked-out or broken tooth.',
    advice: 'Call or WhatsApp us straight away — we fit emergencies in the same day wherever we can. If a tooth is knocked out, keep it in milk and come in within the hour.',
    urgent: true,
  },
  {
    id: 'extractions',
    label: 'Extractions',
    likely: 'Badly broken teeth or painful, stuck wisdom teeth.',
    advice: 'Simple extractions take a few minutes under local anaesthesia. Impacted wisdom teeth need a minor procedure; we take an X-ray first and tell you plainly how difficult yours looks.',
  },
  {
    id: 'fillings',
    label: 'Fillings and sealants',
    likely: 'Cavities, small chips, food getting stuck.',
    advice: 'Decay is removed and the tooth rebuilt with tooth-coloured composite. Sealants coat the grooves of new back teeth to help stop cavities before they start.',
  },
  {
    id: 'online-booking',
    label: 'Online dentist booking',
    likely: 'Book your visit without calling.',
    advice: 'Pick a treatment and a time slot on our booking page, or send us a message on WhatsApp. We confirm your appointment the same day.',
    href: '/book',
  },
  {
    id: 'oral-surgery',
    label: 'Oral surgery',
    likely: 'Wisdom teeth, cysts, implant placement and other minor surgery.',
    advice: 'Minor oral surgery is done in the clinic under local anaesthesia. We explain each step, the recovery and the cost in writing before the day.',
  },
  {
    id: 'paediatrics',
    label: 'Paediatrics',
    likely: 'Dental care for children, from the first tooth.',
    advice: 'Short, friendly visits with the parent in the room. We check for early cavities, apply fluoride and sealants, and talk about brushing, sweets and bottle habits.',
  },
  {
    id: 'root-canals',
    label: 'Root canals',
    likely: 'Throbbing pain, pain at night, an infected tooth.',
    advice: 'The infected pulp is cleaned out, disinfected and sealed under local anaesthesia — most patients say it feels like a long filling. A crown is usually advised afterwards on back teeth.',
  },
  {
    id: 'cleaning',
    label: 'Teeth cleaning',
    likely: 'Tartar, stains, bleeding gums, bad breath.',
    advice: 'An ultrasonic scaler removes hardened tartar above and just below the gum line, then a polish takes off tea and coffee stains. Recommended every 6–12 months.',
  },
  {
    id: 'reshaping',
    label: 'Teeth reshaping',
    likely: 'Uneven edges, small chips or slightly long teeth.',
    advice: 'A small amount of enamel is gently smoothed and polished to even out the shape of your teeth. It’s quick, painless and usually done in one visit.',
  },
  {
    id: 'veneers-crowns',
    label: 'Veneers & crowns',
    likely: 'Weak, broken, discoloured or misshapen teeth.',
    advice: 'A veneer is a thin shell bonded to the front of a tooth; a crown is a cap that covers and protects the whole tooth. Options include metal-ceramic and full zirconia (metal-free).',
  },
  {
    id: 'xray',
    label: 'X-ray',
    likely: 'To see what can’t be seen from the outside.',
    advice: 'Our digital RVG X-rays use a low dose and appear on screen in seconds, so we can show you exactly what we see. We take one only when it’s needed.',
  },
];
