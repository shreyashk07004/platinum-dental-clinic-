// Achievements page content.
// ⚠ SAMPLE CONTENT — every entry below is a placeholder. Replace with the
// clinic's real awards, certifications and milestones before going live.
// `icon` is a @lucide/astro component name, resolved in Achievements.astro.

// Headline numbers shown in the strip at the top of the page.
export const stats = [
  { value: '10+', label: 'Years of practice' },
  { value: '5,000+', label: 'Patients treated' },
  { value: '1,200+', label: 'Implants placed' },
  { value: '4.9★', label: 'Google rating' },
];

// Awards and recognitions (cards).
export const awards = [
  {
    icon: 'Trophy',
    year: '2025',
    title: 'Best Dental Clinic in Kolhapur',
    by: 'Sample Health Awards',
    text: 'Recognised for patient care, hygiene standards and treatment outcomes.',
  },
  {
    icon: 'Award',
    year: '2024',
    title: 'Excellence in Implant Dentistry',
    by: 'Sample Dental Association',
    text: 'Awarded for consistent results in implant and smile restoration cases.',
  },
  {
    icon: 'Medal',
    year: '2023',
    title: 'Patient’s Choice Award',
    by: 'Sample Patient Forum',
    text: 'Voted by patients for gentle, painless treatment and clear explanations.',
  },
  {
    icon: 'ShieldCheck',
    year: '2022',
    title: 'Certified Sterilisation Standards',
    by: 'Sample Accreditation Body',
    text: 'Clinic audited and certified for infection control and instrument sterilisation.',
  },
  {
    icon: 'GraduationCap',
    year: '2021',
    title: 'Advanced Training in Root Canal Treatment',
    by: 'Sample Institute of Dentistry',
    text: 'Doctors completed advanced certification in rotary endodontics.',
  },
  {
    icon: 'Star',
    year: '2020',
    title: 'Top Rated Dentist on Google',
    by: 'Based on patient reviews',
    text: 'Among the highest-rated dental clinics in the Nagala Park area.',
  },
];

// Clinic milestones (timeline, oldest first).
export const milestones = [
  { year: '2014', title: 'Clinic founded', text: 'Platinum Dental Care opens its doors in Kolhapur.' },
  { year: '2017', title: 'Digital X-ray introduced', text: 'Low-dose RVG X-rays added for on-screen diagnosis.' },
  { year: '2020', title: '1,000 implants milestone', text: 'A thousand implant cases completed at the clinic.' },
  { year: '2023', title: 'New clinic at Nagala Park', text: 'Moved to a newly fitted, larger clinic with modern equipment.' },
  { year: '2025', title: '5,000 happy patients', text: 'Five thousand patients treated and counting.' },
];
