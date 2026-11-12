// "Real results" before/after cases: the three treatments patients mention
// most in the clinic's Google reviews (implants, root canals, crowns / FMR).
// The pictures are SAMPLE illustrations for now. Replace `before` / `after`
// with the clinic's own consented patient photos (same framing for both
// pictures in a pair).
export const cases = [
  {
    id: 'implants',
    label: 'Dental Implants',
    note: 'Two missing upper teeth replaced with implant crowns.',
    before: '/images/before-after/implants-before.svg',
    after: '/images/before-after/implants-after.svg',
    beforeAlt: 'Before: smile with two missing upper teeth',
    afterAlt: 'After: the same smile with both gaps filled by implant crowns',
  },
  {
    id: 'root-canal',
    label: 'Root Canal Treatment',
    note: 'A darkened front tooth and two decayed teeth treated and restored.',
    before: '/images/before-after/root-canal-before.svg',
    after: '/images/before-after/root-canal-after.svg',
    beforeAlt: 'Before: a darkened front tooth and two teeth with decay',
    afterAlt: 'After: the same teeth after root canal treatment and fillings',
  },
  {
    id: 'crowns',
    label: 'Crowns & Smile Restoration',
    note: 'Worn, chipped and uneven front teeth rebuilt with crowns.',
    before: '/images/before-after/crowns-before.svg',
    after: '/images/before-after/crowns-after.svg',
    beforeAlt: 'Before: worn, chipped and uneven front teeth',
    afterAlt: 'After: the same smile restored with crowns',
  },
];
