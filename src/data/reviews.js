// ─────────────────────────────────────────────────────────────
// Patient reviews
//
// `google`  — the clinic's Google Business Profile summary.
// `reviews` — REAL reviews copied word-for-word from the clinic's Google
//             profile (checked 12 Nov 2026; only spacing/punctuation
//             tidied, long ones trimmed). `photo` is the reviewer's own
//             Google profile picture (saved in /public/images/reviewers/).
//             Shown in the scrolling bar
//             at the bottom of every page. Names are shortened to first
//             name + initial. Update the rating/count when they change.
// `videos`  — video testimonials on the home page. These are DEMO
//             SAMPLES for now. To add a real one, either:
//               • put the file in /public/videos/ and set `src`, or
//               • upload to YouTube and set `youtubeId` (the part after
//                 "watch?v=" or "youtu.be/").
//             Remove `isSample` once the video is real.
// ─────────────────────────────────────────────────────────────

export const google = {
  rating: 5.0,
  count: 57,
  // Opens the clinic's own Google Maps listing (reviews tab is one tap away).
  link: 'https://www.google.com/maps?cid=14307867245017570191',
};

export const reviews = [
  {
    name: 'Shruti D.',
    photo: '/images/reviewers/shruti.png',
    text: 'Dr sakib is very knowledgeable. He patiently listened to my issues, he not only gave me solutions for my tooth but also informed and educated me about other problems that needs attention. He made sure I was comfortable and painfree during the procedure.',
  },
  {
    name: 'Raviraj M.',
    photo: '/images/reviewers/raviraj.png',
    text: 'Got my root canal treatment done.. It was completely painless and my experience was totally comfortable',
  },
  {
    name: 'Anam K.',
    photo: '/images/reviewers/anam.png',
    text: 'I recently got some fillings done at the clinic. Dr Sakib was forbearing and gave me the best painless treatment experience. The clinic was clean and beautiful, which gave an overall comfortable environment.',
  },
  {
    name: 'Nisar M.',
    photo: '/images/reviewers/nisar.png',
    text: 'Very good service by platinum dental care, Neat and clean hospital, reasonable charges and promt and painless tratment',
  },
  {
    name: 'Darshana K.',
    photo: '/images/reviewers/darshana.png',
    text: 'Dr. Sakib treats every patient with great care and full attention. He was very courteous about my doubts and helped me understand the whole procedure very patiently.',
  },
  {
    name: 'Tabrez M.',
    photo: '/images/reviewers/tabrez.png',
    text: 'Very polite and skilled dentist with advanced setup and techniques. Highly recommended for any dental issues',
  },
  {
    name: 'Snehal J.',
    photo: '/images/reviewers/snehal.png',
    text: 'Platinum dental care is one of the best places to get ur dental treatment done in Kolhapur. Dr Sakib is Vry polite towards his patients, makes the patients understand what is the treatment to be done and what is exactly required.',
  },
  {
    name: 'Saeed M.',
    photo: '/images/reviewers/saeed.png',
    text: 'Best Service ever. Very hygiene clinic with all advanced equipments and treatment. Doctor’s behaviour is very professional well mannered.',
  },
  {
    name: 'Gulab M.',
    photo: '/images/reviewers/gulab.png',
    text: 'Got my treatment done here.. new painless injection is there and my experience was fluent',
  },
  {
    name: 'Sol A.',
    photo: '/images/reviewers/sol.png',
    text: 'Well experienced young doctor, comfortable treatment, very affordable and well equipped and hygienic. Recommend for dental implants and crown',
  },
  {
    name: 'Sharayu J.',
    photo: '/images/reviewers/sharayu.png',
    text: 'New infrastructure and equipments with a quality dental treatment. Dr Sakib gives good guidance about dental health.',
  },
];

// Demo clip: a short CC0 sample video (MDN). Replace with the clinic's own.
const SAMPLE_CLIP = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';

export const videos = [
  {
    title: 'Dental implants',
    caption: 'A patient talks about getting two missing teeth replaced.',
    poster: '/images/implant-model.jpg',
    src: SAMPLE_CLIP,
    isSample: true,
  },
  {
    title: 'Root canal treatment',
    caption: 'What a “painless” root canal actually felt like.',
    poster: '/images/clinic-operatory.jpg',
    src: SAMPLE_CLIP,
    isSample: true,
  },
  {
    title: 'Clear aligners',
    caption: 'Straightening teeth without metal braces.',
    poster: '/images/aligner-smile.jpg',
    src: SAMPLE_CLIP,
    isSample: true,
  },
  {
    title: 'Kids’ dentistry',
    caption: 'A parent on their child’s first dental visit.',
    poster: '/images/kids-checkup.jpg',
    src: SAMPLE_CLIP,
    isSample: true,
  },
  {
    title: 'First visit',
    caption: 'Why one family chose the clinic for regular check-ups.',
    poster: '/images/doctor-explaining.jpg',
    src: SAMPLE_CLIP,
    isSample: true,
  },
];
