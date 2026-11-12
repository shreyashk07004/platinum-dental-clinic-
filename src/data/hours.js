// OPD timings, as listed on the clinic's Google Business Profile.
// Days use JS numbering: 0 = Sunday … 6 = Saturday.
// Each day can have several sessions if the clinic ever adds a lunch break. Times are 24h "HH:MM".
export const clinicHours = {
  timezone: 'Asia/Kolkata',
  slotMinutes: 30,
  sessions: {
    0: [{ from: '10:00', to: '14:00' }], // Sunday — short day
    1: [{ from: '10:00', to: '22:00' }],
    2: [{ from: '10:00', to: '22:00' }],
    3: [{ from: '10:00', to: '22:00' }],
    4: [{ from: '10:00', to: '22:00' }],
    5: [{ from: '10:00', to: '22:00' }],
    6: [{ from: '10:00', to: '20:00' }], // Saturday — closes earlier
  },
  // Short rows shown in the hours card and footer
  summary: [
    { days: 'Mon – Fri', time: '10:00 am – 10:00 pm', on: [1, 2, 3, 4, 5] },
    { days: 'Saturday', time: '10:00 am – 8:00 pm', on: [6] },
    { days: 'Sunday', time: '10:00 am – 2:00 pm', on: [0] },
  ],
  emergencyNote: 'Severe pain or swelling? Call — we fit emergencies in the same day, until 10 pm on weekdays.',
};
