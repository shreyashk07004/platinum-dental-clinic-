// Two-doctor setup (common in Kolhapur clinics). Remove one entry for a solo practice.
export const doctors = [
  {
    id: 'rohan',
    name: 'Dr. Rohan Kulkarni',
    degrees: 'BDS, MDS (Prosthodontics)',
    role: 'Prosthodontist · Implants, crowns & dentures',
    regNo: 'MSDC Reg. No. A-XXXXX',
    image: '/images/doctor-rohan.jpg',
    imagePosition: '50% 15%',
    bio: 'Rohan replaces and rebuilds teeth — implants, crowns, bridges and dentures — and handles most root canal treatments. He started the clinic in 2014 after six years in practice in Pune.',
    interests: ['Dental implants', 'Root canal treatment', 'Full-mouth rehabilitation'],
    timings: [
      { days: 'Mon – Sat', time: '10:00 am – 1:30 pm' },
      { days: 'Mon, Thu', time: '5:00 pm – 8:30 pm' },
      { days: 'Sunday', time: '10:00 am – 1:00 pm' },
    ],
  },
  {
    id: 'aditi',
    name: 'Dr. Aditi Kulkarni',
    degrees: 'BDS, MDS (Paediatric Dentistry)',
    role: 'Paediatric dentist · Children’s & cosmetic dentistry',
    regNo: 'MSDC Reg. No. A-XXXXX',
    image: '/images/doctor-aditi.jpg',
    imagePosition: '50% 20%',
    bio: 'Aditi sees most of the clinic’s young patients, from a first check-up to fillings and sealants in milk teeth. She also looks after smile treatments for adults: whitening, teeth reshaping and veneers.',
    interests: ['Paediatrics', 'Teeth whitening & cosmetic procedures', 'Teeth reshaping'],
    timings: [
      { days: 'Mon, Wed, Fri', time: '10:00 am – 1:30 pm' },
      { days: 'Tue – Sat', time: '5:00 pm – 8:30 pm' },
    ],
  }
];
