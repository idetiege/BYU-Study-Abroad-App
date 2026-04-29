// BYU Europe Study Abroad 2026 — Trip Data FINAL
// Updated: April 28, 2026 — Includes all 130+ spreadsheet activities

export const PROFESSOR_EMAILS = ['isaacjdet@gmail.com'];
export const TRIP_START = '2026-04-27';
export const TOTAL_DAYS = 23;
export const PROFESSOR_PASSWORD = 'BYU2026prof';

// --- Helper Functions ---

export const getTodayDayNumber = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const [y, m, d] = TRIP_START.split('-').map(Number);
  const start = new Date(y, m - 1, d);
  const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24)) + 1;
  if (diff < 1) return null;
  if (diff > TOTAL_DAYS) return null;
  return diff;
};

export const getDayData = (dayId) => days.find(d => d.id === dayId) || days[0];

export const getActivitiesForDay = (dayId, isProf = false) => {
  const acts = activities.filter(a => a.dayId === dayId);
  return isProf ? acts : acts.filter(a => a.showStudents !== false);
};

export const getNextActivity = (dayId, isProf = false) => {
  const now = new Date();
  const todayActs = getActivitiesForDay(dayId, isProf);
  return todayActs.find(a => {
    const [h, m] = a.time.split(':').map(Number);
    const actTime = new Date();
    actTime.setHours(h, m, 0, 0);
    return actTime > now;
  }) || todayActs[todayActs.length - 1];
};

export const getQuoteForDay = (dayId) => {
  const q = quotes.find(q => q.dayId === dayId);
  return q ? q.text : '';
};

export const getFunFactForDay = (dayId) => {
  const f = funFacts.find(f => f.dayId === dayId);
  return f ? f.text : '';
};

export const formatDate = (dateStr) => {
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
};

export const formatShortDate = (dateStr) => {
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

// --- Trip Data ---

export const days = [
  { id: 1,  date: '2026-04-27', city: 'Provo',       country: 'USA',        phase: 'Workshop', summary: "Kickoff Dinner at Dr. Mattson's house — the adventure begins", timezone: 'America/Denver' },
  { id: 2,  date: '2026-04-28', city: 'Provo',       country: 'USA',        phase: 'Workshop', summary: 'Workshop day — culture briefing with Malcolm Botto and safety briefing with Benjamin Cluff', timezone: 'America/Denver' },
  { id: 3,  date: '2026-04-29', city: 'Provo',       country: 'USA',        phase: 'Workshop', summary: 'Workshop + company visits to Hall Labs and Vanderhall', timezone: 'America/Denver' },
  { id: 4,  date: '2026-04-30', city: 'Provo',       country: 'USA',        phase: 'Workshop', summary: 'Final workshop — Rocketship, Amano, and Blendtec visits. Bring your own lunch.', timezone: 'America/Denver', packedLunch: true },
  { id: 5,  date: '2026-05-01', city: 'Salt Lake City', country: 'USA',     phase: 'Travel',   summary: 'Departure day — fly SLC to Amsterdam overnight via Delta DL56.', timezone: 'America/Denver', packedLunch: true },
  { id: 6,  date: '2026-05-02', city: 'Venice',      country: 'Italy',      phase: 'Europe',   summary: 'Arrival in Venice — Da Vinci Museum, gondola ride, Rialto Bridge sunset. Curfew 10:30 PM.', timezone: 'Europe/Rome' },
  { id: 7,  date: '2026-05-03', city: 'Venice',      country: 'Italy',      phase: 'Europe',   summary: "Church in Mestre, Saint Mark's Basilica, Bell Tower, Vivaldi concert. Curfew 10:30 PM.", timezone: 'Europe/Rome' },
  { id: 8,  date: '2026-05-04', city: 'Venice',      country: 'Italy',      phase: 'Europe',   summary: 'AAV Barbini + Tessitura Bevilacqua visits, drive to Ljubljana via Miramare Castle.', timezone: 'Europe/Rome', buyLunchTonight: true },
  { id: 9,  date: '2026-05-05', city: 'Ljubljana',   country: 'Slovenia',   phase: 'Europe',   summary: 'ELAN factory, Ojstrica hike at Lake Bled, Pletna boat to island, Ljubljana castle walk.', timezone: 'Europe/Ljubljana', packedLunch: true },
  { id: 10, date: '2026-05-06', city: 'Zagreb',      country: 'Croatia',    phase: 'Europe',   summary: 'SMM Maribor visit, Trakošćan Castle, drive to Zagreb, evening cultural walk.', timezone: 'Europe/Zagreb', buyLunchTonight: true },
  { id: 11, date: '2026-05-07', city: 'Zagreb',      country: 'Croatia',    phase: 'Europe',   summary: 'Intis Engineering + Končar Group visits, Nikola Tesla Museum, group dinner La Štruk.', timezone: 'Europe/Zagreb', buyLunchTonight: true },
  { id: 12, date: '2026-05-08', city: 'Sarajevo',    country: 'Bosnia',     phase: 'Europe',   summary: "HSTec Zadar, Split + Diocletian's Palace + beach, Kravica Waterfalls, late drive to Sarajevo.", timezone: 'Europe/Sarajevo', packedLunch: true },
  { id: 13, date: '2026-05-09', city: 'Sarajevo',    country: 'Bosnia',     phase: 'Europe',   summary: 'War excursion morning, free afternoon (laundry day!), Yellow Fortress at sunset.', timezone: 'Europe/Sarajevo' },
  { id: 14, date: '2026-05-10', city: 'Sarajevo',    country: 'Bosnia',     phase: 'Europe',   summary: 'Church, Assassination Site, Ars Aevi museum, Cathedral, Planet Sarajevo, group dinner Nana Kuhinja.', timezone: 'Europe/Sarajevo', buyLunchTonight: true },
  { id: 15, date: '2026-05-11', city: 'Sarajevo',    country: 'Bosnia',     phase: 'Europe',   summary: 'Kinetic visit, AVDIC Violins in Tuzla, return to hotel.', timezone: 'Europe/Sarajevo', packedLunch: true, buyLunchTonight: true },
  { id: 16, date: '2026-05-12', city: 'Kotor',       country: 'Montenegro', phase: 'Europe',   summary: 'Aluminij Mostar, Dubrovnik stop, Adriatic 42 Bijela, St. John Fortress night hike in Kotor.', timezone: 'Europe/Podgorica', packedLunch: true },
  { id: 17, date: '2026-05-13', city: 'Tirana',      country: 'Albania',    phase: 'Europe',   summary: 'Daido Metal visit, drive to Tirana, Albanian Night dinner show.', timezone: 'Europe/Tirane' },
  { id: 18, date: '2026-05-14', city: 'Tirana',      country: 'Albania',    phase: 'Europe',   summary: 'Timak + Everest SHPK company visits, fly to Athens.', timezone: 'Europe/Tirane' },
  { id: 19, date: '2026-05-15', city: 'Athens',      country: 'Greece',     phase: 'Europe',   summary: 'Elefsis Shipyards, Askra Olive Oil, dinner at Hill Athens rooftop.', timezone: 'Europe/Athens' },
  { id: 20, date: '2026-05-16', city: 'Athens',      country: 'Greece',     phase: 'Europe',   summary: 'Acropolis (8 AM), Acropolis Museum, Temple of Olympian Zeus, boat tour, team presentations.', timezone: 'Europe/Athens' },
  { id: 21, date: '2026-05-17', city: 'Athens',      country: 'Greece',     phase: 'Europe',   summary: 'Church in Halandri, lunch, Lycabettus Hill funicular, Poseidon Excursion/Beach.', timezone: 'Europe/Athens' },
  { id: 22, date: '2026-05-18', city: 'Athens',      country: 'Greece',     phase: 'Europe',   summary: 'Get 3D + Skaramangas Shipyards visits, e-bike tour, group final dinner.', timezone: 'Europe/Athens' },
  { id: 23, date: '2026-05-19', city: 'Athens',      country: 'Greece',     phase: 'Europe',   summary: 'Transfer to airport and fly home to Utah — safe travels!', timezone: 'Europe/Athens' },
];

export const activities = [
  // --- Day 1 ---
  { id: 1, dayId: 1, time: '18:00', title: 'Kickoff Dinner', category: 'Food', location: "Mattson's House, 1101 Elm Ave Provo, UT", mapsUrl: '', notes: 'Dress nicely. Adventure starts here!', showStudents: true },

  // --- Day 2 ---
  { id: 2, dayId: 2, time: '08:00', title: 'Morning Workshop', category: 'Company Visit', location: 'EB Event Space', notes: 'Dr. Mattson/Dr. Salmon (8am -- Noon)', showStudents: true },
  { id: 3, dayId: 2, time: '12:00', title: 'Lunch', category: 'Food', location: 'EB Event Space', notes: 'Blue Ribbon Box Lunch (Ordered 23 Apr)', showStudents: true },
  { id: 4, dayId: 2, time: '12:00', title: 'Culture Briefing', category: 'Cultural', location: 'EB Event Space', notes: 'Malcolm Botto (During Lunch)', showStudents: true },
  { id: 5, dayId: 2, time: '13:00', title: 'Safety Briefing', category: 'Cultural', location: 'EB Event Space', notes: 'Benjamin Cluff', showStudents: true },
  { id: 6, dayId: 2, time: '14:00', title: 'Workshop (2-5 pm)', category: 'Company Visit', location: 'EB Event Space', notes: 'Dr. Mattson/Dr. Salmon', showStudents: true },

  // --- Day 3 ---
  { id: 7, dayId: 3, time: '08:00', title: 'Morning Workshop', category: 'Company Visit', location: 'EB Event Space', notes: '', showStudents: true },
  { id: 8, dayId: 3, time: '10:00', title: 'Pick up Vans', category: 'Transport', location: 'BYU Motor Pool', notes: 'Profs. only.', showStudents: false },
  { id: 9, dayId: 3, time: '12:15', title: 'Lunch at Sportellis', category: 'Food', location: 'Sportellis, Provo', notes: 'BYU Vans.', showStudents: true },
  { id: 10, dayId: 3, time: '13:30', title: 'Hall Labs Visit', category: 'Company Visit', location: 'Hall Labs', notes: 'BYU Vans.', showStudents: true },
  { id: 11, dayId: 3, time: '15:15', title: 'Vanderhall Visit', category: 'Company Visit', location: 'Vanderhall', notes: 'BYU Vans.', showStudents: true },
  { id: 12, dayId: 3, time: '17:30', title: 'Return to BYU', category: 'Transport', location: 'EB East Parking Lot', notes: '', showStudents: false },

  // --- Day 4 ---
  { id: 13, dayId: 4, time: '08:00', title: 'Workshop — The Launch', category: 'Company Visit', location: 'HBLL 3714', notes: '', showStudents: true },
  { id: 14, dayId: 4, time: '09:40', title: 'Rocketship Visit', category: 'Company Visit', location: 'Rocketship, Provo', notes: 'BYU Vans.', showStudents: true },
  { id: 15, dayId: 4, time: '12:00', title: 'Lunch in Pioneer Park', category: 'Food', location: 'Pioneer Park, Provo', notes: '🥪 Bring your own lunch.', showStudents: true },
  { id: 16, dayId: 4, time: '12:45', title: 'Amano Chocolate Visit', category: 'Company Visit', location: '1078 S 250 E, Provo, UT', notes: 'BYU Vans.', showStudents: true },
  { id: 17, dayId: 4, time: '14:40', title: 'Blendtec Visit', category: 'Company Visit', location: 'Blendtec, Orem', notes: 'BYU Vans.', showStudents: true },
  { id: 18, dayId: 4, time: '17:30', title: 'Drop off Vans', category: 'Transport', location: 'BYU Motor Pool', notes: 'Profs. only.', showStudents: false },

  // --- Day 5 ---
  { id: 19, dayId: 5, time: '10:00', title: 'Final Workshop', category: 'Company Visit', location: 'EB East Lawn', notes: 'Luggage in lawn with Profs.', showStudents: true },
  { id: 20, dayId: 5, time: '11:10', title: 'UVX to Front Runner', category: 'Transport', location: 'UVX South Campus', notes: 'Walk from lawn. Do not miss the 11:15 UVX.', showStudents: true },
  { id: 21, dayId: 5, time: '11:46', title: 'Front Runner to SLC Airport', category: 'Transport', location: 'Provo Central', notes: 'Lunch on the go.', showStudents: false },
  { id: 22, dayId: 5, time: '16:20', title: 'Flight to Amsterdam', category: 'Transport', location: 'SLC Airport', notes: 'Delta flight DL56 (4:20 pm flight)', showStudents: true },

  // --- Day 6 ---
  { id: 23, dayId: 6, time: '11:25', title: 'Flight AMS → Venice', category: 'Transport', location: 'Amsterdam Airport', notes: 'KLM/DL flight 9223', showStudents: true },
  { id: 24, dayId: 6, time: '13:50', title: 'Water Bus to Hotel', category: 'Transport', location: 'VCE Airport', notes: 'Alilaguna Blue Line. €18 each.', showStudents: false },
  { id: 25, dayId: 6, time: '15:45', title: 'Da Vinci Museum', category: 'Cultural', location: 'Campo S. Rocco, Venice', notes: 'Buy tickets in person.', showStudents: true },
  { id: 26, dayId: 6, time: '18:15', title: 'Gondola Ride', category: 'Cultural', location: 'Gondola Station - S. Tomà', notes: '4 boats needed. Pay on site.', showStudents: true },
  { id: 27, dayId: 6, time: '19:15', title: 'Rialto Bridge Sunset', category: 'Cultural', location: 'Ponte di Rialto, Venice', notes: 'Sunset view.', showStudents: true },
  { id: 28, dayId: 6, time: '20:00', title: 'Free Time + Dinner', category: 'Free Time', location: 'Venice', notes: 'Stay in pairs.', showStudents: true },
  { id: 29, dayId: 6, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Casa Cardinal Piazza (Monastery)', notes: 'Sestiere Cannaregio, 3539/a', showStudents: true },

  // --- Day 7 ---
  { id: 30, dayId: 7, time: '08:15', title: 'Church — Mestre Ward', category: 'Cultural', location: 'Via Castellana 124 C, Zelarino', notes: 'Bishop Expecting Group (9:30 AM Service)', showStudents: true },
  { id: 31, dayId: 7, time: '12:00', title: 'Transit to Rialto', category: 'Transport', location: 'Ruga dei Spezieri, Venice', notes: 'Good lunch location.', showStudents: false },
  { id: 32, dayId: 7, time: '13:00', title: 'Free Time + Lunch', category: 'Free Time', location: 'Rialto Area', notes: 'Lunch on your own.', showStudents: true },
  { id: 33, dayId: 7, time: '15:00', title: "Saint Mark's Basilica", category: 'Cultural', location: 'Piazza San Marco', notes: 'Tickets Pre-Purchased.', showStudents: true },
  { id: 34, dayId: 7, time: '16:00', title: "Saint Mark's Bell Tower", category: 'Cultural', location: 'San Marco', notes: 'Tickets Pre-Purchased.', showStudents: true },
  { id: 35, dayId: 7, time: '17:00', title: 'Free Time + Dinner', category: 'Free Time', location: 'Venice', notes: 'Walk to Vivaldi by 8 PM.', showStudents: true },
  { id: 36, dayId: 7, time: '20:30', title: 'Vivaldi Concert', category: 'Cultural', location: 'Scuola Grande di San Teodoro', notes: 'Tickets Pre-Purchased.', showStudents: true },
  { id: 37, dayId: 7, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Casa Cardinal Piazza', notes: '', showStudents: true },

  // --- Day 8 ---
  { id: 38, dayId: 8, time: '09:00', title: 'AAV Barbini Venetian Mirrors', category: 'Company Visit', location: 'Calle Dietro Gli Orti, 7, Murano', notes: 'Walking/Ferry. Luggage at hotel until 3 pm.', showStudents: true },
  { id: 39, dayId: 8, time: '12:30', title: 'Lunch + Groceries', category: 'Food', location: 'Campo S. Giacomo dell\'Orio', notes: '40 min walk/transit.', showStudents: true },
  { id: 40, dayId: 8, time: '13:45', title: 'Tessitura Bevilacqua', category: 'Company Visit', location: 'Santa Croce, 1320, Venice', notes: '5 min walk, pay on site.', showStudents: true },
  { id: 41, dayId: 8, time: '15:10', title: 'Pick up Luggage', category: 'Transport', location: 'Hotel → Tronchetto', notes: 'Transit to bus station.', showStudents: false },
  { id: 42, dayId: 8, time: '16:30', title: 'Coach to Ljubljana', category: 'Transport', location: 'Tronchetto → Ljubljana', notes: 'Drive to Hotel.', showStudents: false },
  { id: 43, dayId: 8, time: '20:00', title: '🛒 Buy Lunch for Tomorrow', category: 'Free Time', location: 'Mercador or Spar', notes: 'Stores close at 9 or 10 PM.', showStudents: true },
  { id: 44, dayId: 8, time: '20:30', title: 'Dinner at Figovec', category: 'Food', location: 'Gosposvetska cesta 1, Ljubljana', notes: 'Optional traditional dinner.', showStudents: true },
  { id: 45, dayId: 8, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Ibis Styles Ljubljana', notes: 'Miklošičeva cesta 9', showStudents: true },

  // --- Day 9 ---
  { id: 46, dayId: 9, time: '07:30', title: 'Depart for Begunje', category: 'Transport', location: 'Hotel → ELAN', notes: 'Snack/lunch in coach.', showStudents: false },
  { id: 47, dayId: 9, time: '09:00', title: 'ELAN Company Visit', category: 'Company Visit', location: 'Begunje 1, Begunje', notes: '2.5 hour visit.', showStudents: true },
  { id: 48, dayId: 9, time: '11:45', title: 'Ojstrica Hike', category: 'Cultural', location: 'Lake Bled', notes: '1 hour hike up to lookout. Lunch on bus/hike.', showStudents: true },
  { id: 49, dayId: 9, time: '13:20', title: 'Pletna Boat to Island', category: 'Cultural', location: 'Lake Bled Island', notes: 'Ring the Bell + Church. Individual boats from locals.', showStudents: true },
  { id: 50, dayId: 9, time: '15:50', title: 'Drive to Ljubljana', category: 'Transport', location: 'Bled → Ljubljana', notes: 'Done with bus at 5:30.', showStudents: false },
  { id: 51, dayId: 9, time: '17:25', title: 'Ljubljana Walking Tour', category: 'Cultural', location: 'Triple Bridge/Dragon Bridge', notes: 'Depart hotel 5:25 PM.', showStudents: true },
  { id: 52, dayId: 9, time: '18:00', title: 'Ljubljana Castle', category: 'Cultural', location: 'Grajska planota 1', notes: 'Tower, History Exhibition, Puppetry Museum.', showStudents: true },
  { id: 53, dayId: 9, time: '20:10', title: 'Funicular Down', category: 'Transport', location: 'Castle Funicular', notes: '', showStudents: false },
  { id: 54, dayId: 9, time: '20:30', title: 'Free Time', category: 'Free Time', location: 'Ljubljana', notes: '🛒 Buy lunch for tomorrow.', showStudents: true },
  { id: 55, dayId: 9, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Ibis Styles Ljubljana', notes: '', showStudents: true },

  // --- Day 10 ---
  { id: 56, dayId: 10, time: '07:30', title: 'SMM Maribor Visit', category: 'Company Visit', location: 'Perhavčeva 17, Maribor', notes: 'Coach arrives 10:00 AM.', showStudents: true },
  { id: 57, dayId: 10, time: '12:30', title: 'Trakošćan Castle', category: 'Cultural', location: 'Trakošćan 4, Croatia', notes: 'Lake walk/Castle. Tickets on-site.', showStudents: true },
  { id: 58, dayId: 10, time: '15:00', title: 'Drive to Zagreb', category: 'Transport', location: 'Trakošćan → Hotel Dubrovnik', notes: 'Lunch on coach.', showStudents: false },
  { id: 59, dayId: 10, time: '18:25', title: 'Zagreb Walking Tour', category: 'Cultural', location: 'Zagreb Cathedral', notes: 'Meet at lobby 6:25 pm.', showStudents: true },
  { id: 60, dayId: 10, time: '19:30', title: 'Free Time — Tkalciceva St.', category: 'Free Time', location: 'Zagreb', notes: '🛒 Buy lunch for tomorrow.', showStudents: true },
  { id: 61, dayId: 10, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Hotel Dubrovnik, Zagreb', notes: 'Ljudevita Gaja 1', showStudents: true },

  // --- Day 11 ---
  { id: 62, dayId: 11, time: '08:30', title: 'Intis Engineering Visit', category: 'Company Visit', location: 'Velika Cesta 97, Odra', notes: 'Arrive 9:30 AM.', showStudents: true },
  { id: 63, dayId: 11, time: '12:00', title: 'Končar Group Tour', category: 'Company Visit', location: 'Ul. Ante Babaje 1, Zagreb', notes: '1.5 hour tour. Eat lunch quickly on bus.', showStudents: true },
  { id: 64, dayId: 11, time: '15:00', title: 'Nikola Tesla Tech Museum', category: 'Cultural', location: 'Savska cesta 18, Zagreb', notes: 'Group Rate on-site. Short 1 hr visit.', showStudents: true },
  { id: 65, dayId: 11, time: '17:15', title: 'Dinner at La Štruk', category: 'Food', location: 'Skalinska ul. 5, Zagreb', notes: 'Reserved. Coach drops us off.', showStudents: true },
  { id: 66, dayId: 11, time: '20:00', title: 'Free Time', category: 'Free Time', location: 'Zagreb', notes: '🛒 Buy lunch/breakfast for tomorrow.', showStudents: true },
  { id: 67, dayId: 11, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Hotel Dubrovnik', notes: '', showStudents: true },

  // --- Day 12 ---
  { id: 68, dayId: 12, time: '06:00', title: 'HSTec Visit — Zadar', category: 'Company Visit', location: 'Zagrebačka 100, Zadar', notes: 'CHIRON visit. Very early start.', showStudents: true },
  { id: 69, dayId: 12, time: '12:30', title: 'Drive to Split', category: 'Transport', location: 'Zadar → Split', notes: 'Lunch in coach.', showStudents: false },
  { id: 70, dayId: 12, time: '14:30', title: 'Split Free Time', category: 'Free Time', location: 'Diocletian\'s Palace/Riva', notes: 'Swim, walk, eat early dinner.', showStudents: true },
  { id: 71, dayId: 12, time: '18:30', title: 'Drive to Sarajevo', category: 'Transport', location: 'Split → Sarajevo', notes: '4 hour drive. Long day.', showStudents: false },
  { id: 72, dayId: 12, time: '22:30', title: 'Curfew / Hotel Check-in', category: 'Accommodation', location: 'Hotel Holiday Europa', notes: 'Vladislava Skarića 5', showStudents: true },

  // --- Day 13 ---
  { id: 73, dayId: 13, time: '08:45', title: 'Sarajevo Excursion', category: 'Cultural', location: 'Meet in Lobby', notes: 'Ref: GYGMX4LVZRX7. 4 hours.', showStudents: true },
  { id: 74, dayId: 13, time: '13:30', title: 'Free Time (Laundry Day!)', category: 'Free Time', location: 'Sarajevo', notes: 'Great day to catch up on laundry.', showStudents: true },
  { id: 75, dayId: 13, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Holiday Europa', notes: '', showStudents: true },

  // --- Day 14 ---
  { id: 76, dayId: 14, time: '09:30', title: 'Church — Sarajevo Branch', category: 'Cultural', location: 'Mehmeda Spahe 24', notes: 'President Lamb Expecting Group. 15 min walk.', showStudents: true },
  { id: 77, dayId: 14, time: '12:30', title: 'Free Time + Lunch', category: 'Free Time', location: 'Sarajevo', notes: '1 hour free time.', showStudents: true },
  { id: 78, dayId: 14, time: '13:45', title: 'Assassination Site', category: 'Cultural', location: 'Latin Bridge', notes: 'Meet at lobby 1:35 PM.', showStudents: true },
  { id: 79, dayId: 14, time: '14:20', title: 'Ars Aevi Art Museum', category: 'Cultural', location: 'Brodac 1, Sarajevo', notes: 'Modern art visit.', showStudents: true },
  { id: 80, dayId: 14, time: '15:45', title: 'Sacred Heart Cathedral', category: 'Cultural', location: 'Trg Fra Grge Martića 2', notes: 'Quick visit.', showStudents: true },
  { id: 81, dayId: 14, time: '16:30', title: 'Planet Sarajevo Museum', category: 'Cultural', location: 'Maršala Tita 56', notes: 'Multimedia museum.', showStudents: true },
  { id: 82, dayId: 14, time: '18:40', title: 'Group Dinner — Nana Kuhinja', category: 'Food', location: 'Kundurdžiluk 35', notes: 'Bosnian traditional food.', showStudents: true },
  { id: 83, dayId: 14, time: '21:00', title: '🛒 Buy Lunch for Tomorrow', category: 'Free Time', location: 'Mercador Minute', notes: 'Need lunch for on the bus.', showStudents: true },
  { id: 84, dayId: 14, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Holiday Europa', notes: '', showStudents: true },

  // --- Day 15 ---
  { id: 85, dayId: 15, time: '08:00', title: 'Kinetic Company Visit', category: 'Company Visit', location: 'Tvornička 3, Sarajevo', notes: 'Arrive 9:00 AM.', showStudents: true },
  { id: 86, dayId: 15, time: '11:15', title: 'AVDIC Violins', category: 'Company Visit', location: 'Tuzla Grad 75000', notes: 'Lunch in Coach. Instrument workshop.', showStudents: true },
  { id: 87, dayId: 15, time: '16:45', title: 'Return to Sarajevo', category: 'Transport', location: 'Hotel', notes: 'Arrive 7:30 PM.', showStudents: false },
  { id: 88, dayId: 15, time: '19:30', title: 'Free Time', category: 'Free Time', location: 'Sarajevo', notes: '🛒 Buy lunch/breakfast for tomorrow.', showStudents: true },
  { id: 89, dayId: 15, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Holiday Europa', notes: '', showStudents: true },

  // --- Day 16 ---
  { id: 90, dayId: 16, time: '06:00', title: 'Mostar Bridge & Aluminij', category: 'Company Visit', location: 'Mostar, Bosnia', notes: 'Quick photo at bridge. Meals/lunch in coach.', showStudents: true },
  { id: 91, dayId: 16, time: '11:45', title: 'Adriatic 42 Visit', category: 'Company Visit', location: 'Bijela, Montenegro', notes: 'Boat manufacturer.', showStudents: true },
  { id: 92, dayId: 16, time: '17:30', title: 'Drive to Kotor', category: 'Transport', location: 'Kotor 489', notes: 'Arrive ~6:30 PM.', showStudents: false },
  { id: 93, dayId: 16, time: '19:00', title: 'St. John Fortress Hike', category: 'Cultural', location: 'Kotor Fortress', notes: 'Buy on-site Cash Only. Sunset 7:58 PM.', showStudents: true },
  { id: 94, dayId: 16, time: '20:35', title: 'Free Time / Dinner', category: 'Free Time', location: 'Kotor', notes: '🛒 Buy lunch.', showStudents: true },
  { id: 95, dayId: 16, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Hotel Hippocampus', notes: '', showStudents: true },

  // --- Day 17 ---
  { id: 96, dayId: 17, time: '08:30', title: 'Daido Metal Visit', category: 'Company Visit', location: 'Industrijska zona b.b, Kotor', notes: 'Warning contact critical.', showStudents: true },
  { id: 97, dayId: 17, time: '11:30', title: 'Coach to Tirana', category: 'Transport', location: 'Kotor → Tirana', notes: 'Arrive 5:00 PM. Lunch in coach.', showStudents: false },
  { id: 98, dayId: 17, time: '18:15', title: 'Albanian Night Dinner Show', category: 'Food', location: 'Kavaja St, Tirana', notes: 'Dinner and show starts at 7 PM.', showStudents: true },
  { id: 99, dayId: 17, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Hotel & Spa Tirana', notes: 'Rruga Ismail Qemali', showStudents: true },

  // --- Day 18 ---
  { id: 100, dayId: 18, time: '08:00', title: 'Timak Visit', category: 'Company Visit', location: 'Tirana Industrial Park', notes: 'Arrive 9:00 AM.', showStudents: true },
  { id: 101, dayId: 18, time: '11:30', title: 'King Pils Stop', category: 'Food', location: 'Frashnjet, Albania', notes: 'Quick stop.', showStudents: true },
  { id: 102, dayId: 18, time: '13:00', title: 'Everest SHPK Visit', category: 'Company Visit', location: 'Kamëz 1030, Albania', notes: 'Arrive 2:00 PM.', showStudents: true },
  { id: 103, dayId: 18, time: '16:30', title: 'Xhamia Qereke Mosque', category: 'Cultural', location: 'Krujë 1500', notes: 'Quick photo stop.', showStudents: true },
  { id: 104, dayId: 18, time: '17:15', title: 'Coach to Airport', category: 'Transport', location: 'Tirana Airport', notes: 'Dinner at the airport.', showStudents: true },
  { id: 105, dayId: 18, time: '19:25', title: 'Flight to Athens', category: 'Transport', location: 'Tirana Airport', notes: 'AEGEAN A3 973. Conf# AWR9CK.', showStudents: true },
  { id: 106, dayId: 18, time: '21:25', title: 'Transfer to Hotel', category: 'Transport', location: 'Athens Airport → Mitropoleos 6-8', notes: 'Curfew 10:30.', showStudents: false },

  // --- Day 19 ---
  { id: 107, dayId: 19, time: '08:15', title: '🛒 Buy Lunch Groceries', category: 'Food', location: 'Bazaar Supermarket', notes: 'Mitropoleos 45.', showStudents: true },
  { id: 108, dayId: 19, time: '09:00', title: 'Elefsis Shipyards', category: 'Company Visit', location: 'Elefsina 192 00', notes: 'Arrive 10:30 AM.', showStudents: true },
  { id: 109, dayId: 19, time: '13:00', title: 'Askra Olive Oil Visit', category: 'Company Visit', location: 'Askri 320 02', notes: 'Lymperis Estate.', showStudents: true },
  { id: 110, dayId: 19, time: '16:45', title: 'Dinner at Hill Athens', category: 'Food', location: 'Apostolou Pavlou 27', notes: 'Rooftop restaurant. Done with coach at 7 PM.', showStudents: true },
  { id: 111, dayId: 19, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Arethusa Hotel, Athens', notes: '', showStudents: true },

  // --- Day 20 ---
  { id: 112, dayId: 20, time: '07:30', title: 'Acropolis Visit', category: 'Cultural', location: 'Acropolis, Athens', notes: 'Pre-Registered. Appt at 8:00 AM.', showStudents: true },
  { id: 113, dayId: 20, time: '09:40', title: 'Acropolis Museum', category: 'Cultural', location: 'Dionysiou Areopagitou 15', notes: 'Need to buy tickets on site.', showStudents: true },
  { id: 114, dayId: 20, time: '12:15', title: 'Lunch — o Gyros Pou Gyrevis', category: 'Food', location: 'Athanasiou Diakou 1', notes: 'Finish in less than 50 min.', showStudents: true },
  { id: 115, dayId: 20, time: '13:10', title: 'Temple of Olympian Zeus', category: 'Cultural', location: 'Athens', notes: '10 minute walk.', showStudents: true },
  { id: 116, dayId: 20, time: '14:00', title: 'From Hotel to Port', category: 'Transport', location: 'Porto Rafti', notes: 'Bus transfer.', showStudents: false },
  { id: 117, dayId: 20, time: '16:00', title: 'Boat Tour & Presentations', category: 'Cultural', location: 'Athens Port', notes: 'Ref: GYGMX4LVZXYQ', showStudents: true },
  { id: 118, dayId: 20, time: '20:30', title: 'Transfer to Athens', category: 'Transport', location: 'Hotel', notes: 'Arrive 10:00 PM.', showStudents: false },
  { id: 119, dayId: 20, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Arethusa Hotel', notes: '', showStudents: true },

  // --- Day 21 ---
  { id: 120, dayId: 21, time: '09:00', title: 'Church — Halandri Branch', category: 'Cultural', location: 'Erifilis 16, Athens', notes: 'Greek Service (10:00 AM). President Stimagkiotis Contacted.', showStudents: true },
  { id: 121, dayId: 21, time: '12:10', title: 'Transit from Church', category: 'Transport', location: 'Mitropoleos 6-8', notes: 'Public Transit.', showStudents: false },
  { id: 122, dayId: 21, time: '12:40', title: 'Free Time / Lunch', category: 'Free Time', location: 'Athens', notes: 'Sky bar or Lycabettus Hill Funicular.', showStudents: true },
  { id: 123, dayId: 21, time: '16:00', title: 'Poseidon Excursion & Beach', category: 'Cultural', location: 'Meet in Lobby 3:55 pm', notes: 'Ref: BR-1389530075. 5-6 hours.', showStudents: true },
  { id: 124, dayId: 21, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Arethusa Hotel', notes: '', showStudents: true },

  // --- Day 22 ---
  { id: 125, dayId: 22, time: '07:30', title: '🛒 Buy Lunch for Bus', category: 'Food', location: 'Athens', notes: '', showStudents: true },
  { id: 126, dayId: 22, time: '08:15', title: 'Get 3D Visit', category: 'Company Visit', location: 'Nea Ethniki Odos 2', notes: 'Arrive 9:00 AM.', showStudents: true },
  { id: 127, dayId: 22, time: '11:30', title: 'Skaramangas Shipyards', category: 'Company Visit', location: '3 Palaska Str, Skaramangas', notes: 'Lunch on bus. Arrive 1:00 PM.', showStudents: true },
  { id: 128, dayId: 22, time: '19:00', title: 'Sunset E-Bike Tour', category: 'Cultural', location: 'Apostolou Pavlou 53', notes: 'Ref: BR-1389567221.', showStudents: true },
  { id: 129, dayId: 22, time: '22:30', title: 'Final Dinner / Curfew', category: 'Accommodation', location: 'Arethusa Hotel', notes: '', showStudents: true },

  // --- Day 23 ---
  { id: 130, dayId: 23, time: '06:00', title: 'Transfer to Athens Airport', category: 'Transport', location: 'Athens Airport', notes: 'Final transit.', showStudents: true },
  { id: 131, dayId: 23, time: '09:00', title: 'Fly Home to Utah', category: 'Transport', location: 'Athens Airport', notes: 'Safe travels! You made it.', showStudents: true },
];

export const quotes = [
  { dayId: 1,  text: 'Look for what you notice but no one else sees.' },
  { dayId: 2,  text: 'Zoom in and obsess. Zoom out and observe. We get to choose.' },
  { dayId: 3,  text: 'All that matters is that you are making something you love, to the best of your ability, here and now.' },
  { dayId: 4,  text: 'The real work of the artist is a way of being in the world.' },
  { dayId: 5,  text: 'Creativity is a fundamental aspect of being human.' },
  { dayId: 6,  text: 'We can\'t force greatness to happen. All we can do is invite it in.' },
  { dayId: 7,  text: 'Failure is the information you need to get where you\'re going.' },
  { dayId: 8,  text: 'To hone your craft is to honor creation.' },
  { dayId: 9,  text: 'Beware of the assumption that the way you work is the best way.' },
  { dayId: 10, text: 'The person who makes something today isn\'t the same person who returns to it tomorrow.' },
  { dayId: 11, text: 'As artists, we seek to restore our childlike perception.' },
  { dayId: 12, text: 'We are all translators for messages the universe is broadcasting.' },
  { dayId: 13, text: 'Turning an idea into reality can make it seem smaller. Imagination has no limits.' },
  { dayId: 14, text: 'Inspiration comes first. You come next. The audience comes last.' },
  { dayId: 15, text: 'A river of material flows through us. When we share ideas, they are replenished.' },
  { dayId: 16, text: 'With each story we tell ourselves, we negate possibility.' },
  { dayId: 17, text: 'Being an artist means to be continually asking, \'How can it be better?\'' },
  { dayId: 18, text: 'Sharing art is the price of making it.' },
  { dayId: 19, text: 'To live as an artist is a way of perceiving. A practice of paying attention.' },
  { dayId: 20, text: 'Awareness is not a state you force. It\'s something you actively allow to happen.' },
  { dayId: 21, text: 'We are all participating in a larger creative act we are not conducting.' },
  { dayId: 22, text: 'Sometimes it can be the most ordinary moment that creates extraordinary art.' },
  { dayId: 23, text: 'Use what\'s helpful. Let go of the rest.' },
];

export const funFacts = [
  { dayId: 1,  text: 'BYU was founded in 1875 as Brigham Young Academy.' },
  { dayId: 2,  text: 'Provo is nicknamed "Silicon Slopes" due to its tech density.' },
  { dayId: 3,  text: 'The "Y" on the mountain is 380 feet tall.' },
  { dayId: 4,  text: 'Blendtec\'s "Will It Blend?" was one of the first viral marketing hits.' },
  { dayId: 5,  text: 'The flight from SLC to AMS crosses Greenland and the Arctic Ocean.' },
  { dayId: 6,  text: 'Venice has no roads — every journey is by boat or foot.' },
  { dayId: 7,  text: 'Vivaldi performed in Venice churches just like our venue in the 1700s.' },
  { dayId: 8,  text: 'Miramare Castle was built for Archduke Maximilian in 1860.' },
  { dayId: 9,  text: 'Lake Bled\'s turquoise color comes from glacial sediment.' },
  { dayId: 10, text: 'Trakošćan Castle was owned by the same family for over 400 years.' },
  { dayId: 11, text: 'Nikola Tesla was born in Croatia in 1856.' },
  { dayId: 12, text: 'Diocletian\'s Palace in Split still has 3,000 people living inside it.' },
  { dayId: 13, text: 'Sarajevo is known as the "Jerusalem of Europe".' },
  { dayId: 14, text: 'The Latin Bridge is where WWI was essentially triggered.' },
  { dayId: 15, text: 'An AVDIC violin can take up to 200 hours to handcraft.' },
  { dayId: 16, text: 'Mostar\'s Stari Most stood for 427 years before its destruction in 1993.' },
  { dayId: 17, text: 'Albania has over 170,000 concrete bunkers from the communist era.' },
  { dayId: 18, text: 'Before 1990, it was illegal for Albanians to own a car.' },
  { dayId: 19, text: 'Athens has been inhabited for over 5,000 years.' },
  { dayId: 20, text: 'The Parthenon was built without mortar using iron clamps.' },
  { dayId: 21, text: 'Lord Byron carved his name into the Temple of Poseidon in 1810.' },
  { dayId: 22, text: 'Greece has more archaeological museums than any other country.' },
  { dayId: 23, text: 'You have covered roughly 6,000 miles across 8 countries!' },
];

export const emergencyContacts = [
  { label: 'US Embassy Italy', phone: '+39 06 46741', notes: 'Venice/Rome' },
  { label: 'US Embassy Slovenia', phone: '+386 1 200 5500', notes: 'Ljubljana' },
  { label: 'US Embassy Croatia', phone: '+385 1 661 2200', notes: 'Zagreb' },
  { label: 'US Embassy Bosnia', phone: '+387 33 704 000', notes: 'Sarajevo' },
  { label: 'US Embassy Montenegro', phone: '+382 20 410 500', notes: 'Kotor' },
  { label: 'US Embassy Albania', phone: '+355 4 224 7285', notes: 'Tirana' },
  { label: 'US Embassy Greece', phone: '+30 210 720 2490', notes: 'Athens' },
  { label: 'Trip Leader — Isaac', phone: 'TBD', notes: 'Update before departure' },
];

export const announcements = [
  { id: 1, message: 'Welcome to the BYU Europe Study Abroad 2026 app!', emoji: '👋', active: true, createdAt: '2026-04-27' },
];

export const CATEGORY_COLORS = {
  'Company Visit': '#073C77',
  'Cultural': '#E9B753',
  'Food': '#2D6A4F',
  'Transport': '#8B8B8B',
  'Free Time': '#4F84B4',
  'Accommodation': '#6B4FA3',
};
