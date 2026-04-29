// BYU Europe Study Abroad 2026 — Trip Data FINAL
// Updated: April 28, 2026 — RESTORED ALL EXPORTS

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
  { id: 2,  date: '2026-04-28', city: 'Provo',       country: 'USA',        phase: 'Workshop', summary: 'Workshop day — Culture & Safety briefings', timezone: 'America/Denver' },
  { id: 3,  date: '2026-04-29', city: 'Provo',       country: 'USA',        phase: 'Workshop', summary: 'Workshop + Hall Labs and Vanderhall', timezone: 'America/Denver' },
  { id: 4,  date: '2026-04-30', city: 'Provo',       country: 'USA',        phase: 'Workshop', summary: 'Final workshop — Rocketship, Amano, and Blendtec visits.', timezone: 'America/Denver', packedLunch: true },
  { id: 5,  date: '2026-05-01', city: 'Salt Lake City', country: 'USA',     phase: 'Travel',   summary: 'Departure day — fly SLC to Amsterdam.', timezone: 'America/Denver', packedLunch: true },
  { id: 6,  date: '2026-05-02', city: 'Venice',      country: 'Italy',      phase: 'Europe',   summary: 'Arrival in Venice — Da Vinci Museum, Gondola.', timezone: 'Europe/Rome' },
  { id: 7,  date: '2026-05-03', city: 'Venice',      country: 'Italy',      phase: 'Europe',   summary: "Church, Saint Mark's Basilica, Vivaldi concert.", timezone: 'Europe/Rome' },
  { id: 8,  date: '2026-05-04', city: 'Venice',      country: 'Italy',      phase: 'Europe',   summary: 'AAV Barbini + Bevilacqua, drive to Ljubljana.', timezone: 'Europe/Rome', buyLunchTonight: true },
  { id: 9,  date: '2026-05-05', city: 'Ljubljana',   country: 'Slovenia',   phase: 'Europe',   summary: 'ELAN factory, Lake Bled Hike, Ljubljana castle.', timezone: 'Europe/Ljubljana', packedLunch: true },
  { id: 10, date: '2026-05-06', city: 'Zagreb',      country: 'Croatia',    phase: 'Europe',   summary: 'SMM Maribor, Trakošćan Castle, drive to Zagreb.', timezone: 'Europe/Zagreb', buyLunchTonight: true },
  { id: 11, date: '2026-05-07', city: 'Zagreb',      country: 'Croatia',    phase: 'Europe',   summary: 'Intis + Končar visits, Nikola Tesla Museum.', timezone: 'Europe/Zagreb', buyLunchTonight: true },
  { id: 12, date: '2026-05-08', city: 'Sarajevo',    country: 'Bosnia',     phase: 'Europe',   summary: "Split + Diocletian's Palace, late drive to Sarajevo.", timezone: 'Europe/Sarajevo', packedLunch: true },
  { id: 13, date: '2026-05-09', city: 'Sarajevo',    country: 'Bosnia',     phase: 'Europe',   summary: 'War excursion morning, laundry afternoon.', timezone: 'Europe/Sarajevo' },
  { id: 14, date: '2026-05-10', city: 'Sarajevo',    country: 'Bosnia',     phase: 'Europe',   summary: 'Church, Assassination Site, Planet Sarajevo.', timezone: 'Europe/Sarajevo', buyLunchTonight: true },
  { id: 15, date: '2026-05-11', city: 'Sarajevo',    country: 'Bosnia',     phase: 'Europe',   summary: 'Kinetic visit, AVDIC Violins in Tuzla.', timezone: 'Europe/Sarajevo', packedLunch: true, buyLunchTonight: true },
  { id: 16, date: '2026-05-12', city: 'Kotor',       country: 'Montenegro', phase: 'Europe',   summary: 'Mostar Bridge, Adriatic 42, St. John Fortress Hike.', timezone: 'Europe/Podgorica', packedLunch: true },
  { id: 17, date: '2026-05-13', city: 'Tirana',      country: 'Albania',    phase: 'Europe',   summary: 'Daido Metal, Tirana, Albanian Night show.', timezone: 'Europe/Tirane' },
  { id: 18, date: '2026-05-14', city: 'Tirana',      country: 'Albania',    phase: 'Europe',   summary: 'Timak + Everest visits, fly to Athens.', timezone: 'Europe/Tirane' },
  { id: 19, date: '2026-05-15', city: 'Athens',      country: 'Greece',     phase: 'Europe',   summary: 'Elefsis Shipyards, Askra Olive Oil.', timezone: 'Europe/Athens' },
  { id: 20, date: '2026-05-16', city: 'Athens',      country: 'Greece',     phase: 'Europe',   summary: 'Acropolis, Museum, Boat tour & presentations.', timezone: 'Europe/Athens' },
  { id: 21, date: '2026-05-17', city: 'Athens',      country: 'Greece',     phase: 'Europe',   summary: 'Church, Lycabettus Hill, Poseidon Beach.', timezone: 'Europe/Athens' },
  { id: 22, date: '2026-05-18', city: 'Athens',      country: 'Greece',     phase: 'Europe',   summary: 'Get 3D + Skaramangas, E-bike tour, Final Dinner.', timezone: 'Europe/Athens' },
  { id: 23, date: '2026-05-19', city: 'Athens',      country: 'Greece',     phase: 'Europe',   summary: 'Transfer to airport and fly home.', timezone: 'Europe/Athens' },
];

export const activities = [
  // Day 1
  { id: 1, dayId: 1, time: '18:00', title: 'Kickoff Dinner', category: 'Food', location: "Mattson's House, Provo", notes: 'Dress nicely.', showStudents: true },
  // Day 2
  { id: 2, dayId: 2, time: '08:00', title: 'Morning Workshop', category: 'Company Visit', location: 'EB Event Space', notes: 'Dr. Mattson/Dr. Salmon', showStudents: true },
  { id: 3, dayId: 2, time: '12:00', title: 'Lunch', category: 'Food', location: 'EB Event Space', notes: 'Blue Ribbon Box Lunch', showStudents: true },
  { id: 4, dayId: 2, time: '12:00', title: 'Culture Briefing', category: 'Cultural', location: 'EB Event Space', notes: 'Malcolm Botto', showStudents: true },
  { id: 5, dayId: 2, time: '13:00', title: 'Safety Briefing', category: 'Cultural', location: 'EB Event Space', notes: 'Benjamin Cluff', showStudents: true },
  { id: 6, dayId: 2, time: '14:00', title: 'Workshop (2-5 pm)', category: 'Company Visit', location: 'EB Event Space', notes: 'Dr. Mattson/Dr. Salmon', showStudents: true },
  // Day 3
  { id: 7, dayId: 3, time: '08:00', title: 'Morning Workshop', category: 'Company Visit', location: 'EB Event Space', showStudents: true },
  { id: 8, dayId: 3, time: '10:00', title: 'Pick up Vans', category: 'Transport', location: 'BYU Motor Pool', notes: 'Profs. only.', showStudents: false },
  { id: 9, dayId: 3, time: '12:15', title: 'Lunch at Sportellis', category: 'Food', location: 'Sportellis, Provo', notes: 'BYU Vans.', showStudents: true },
  { id: 10, dayId: 3, time: '13:30', title: 'Hall Labs Visit', category: 'Company Visit', location: 'Hall Labs', notes: 'BYU Vans.', showStudents: true },
  { id: 11, dayId: 3, time: '15:15', title: 'Vanderhall Visit', category: 'Company Visit', location: 'Vanderhall', notes: 'BYU Vans.', showStudents: true },
  { id: 12, dayId: 3, time: '17:30', title: 'Return to BYU', category: 'Transport', location: 'EB East Parking Lot', showStudents: false },
  // Day 4
  { id: 13, dayId: 4, time: '08:00', title: 'Workshop — The Launch', category: 'Company Visit', location: 'HBLL 3714', showStudents: true },
  { id: 14, dayId: 4, time: '09:40', title: 'Rocketship Visit', category: 'Company Visit', location: 'Rocketship, Provo', notes: 'BYU Vans.', showStudents: true },
  { id: 15, dayId: 4, time: '12:00', title: 'Lunch in Pioneer Park', category: 'Food', location: 'Pioneer Park, Provo', notes: '🥪 BYO Lunch.', showStudents: true },
  { id: 16, dayId: 4, time: '12:45', title: 'Amano Chocolate Visit', category: 'Company Visit', location: '1078 S 250 E, Provo', notes: 'BYU Vans.', showStudents: true },
  { id: 17, dayId: 4, time: '14:40', title: 'Blendtec Visit', category: 'Company Visit', location: 'Blendtec, Orem', notes: 'BYU Vans.', showStudents: true },
  { id: 18, dayId: 4, time: '17:30', title: 'Drop off Vans', category: 'Transport', location: 'BYU Motor Pool', showStudents: false },
  // Day 5
  { id: 19, dayId: 5, time: '10:00', title: 'Final Workshop', category: 'Company Visit', location: 'EB East Lawn', showStudents: true },
  { id: 20, dayId: 5, time: '11:10', title: 'UVX to Front Runner', category: 'Transport', location: 'UVX South Campus', showStudents: true },
  { id: 21, dayId: 5, time: '11:46', title: 'Front Runner to SLC', category: 'Transport', location: 'Provo Central', showStudents: false },
  { id: 22, dayId: 5, time: '16:20', title: 'Flight to Amsterdam', category: 'Transport', location: 'SLC Airport', notes: 'DL56', showStudents: true },
  // Day 6
  { id: 23, dayId: 6, time: '11:25', title: 'Flight AMS → Venice', category: 'Transport', location: 'Amsterdam Airport', notes: 'KLM 9223', showStudents: true },
  { id: 24, dayId: 6, time: '13:50', title: 'Water Bus to Hotel', category: 'Transport', location: 'VCE Airport', notes: 'Alilaguna (€18)', showStudents: false },
  { id: 25, dayId: 6, time: '15:45', title: 'Da Vinci Museum', category: 'Cultural', location: 'Venice', notes: 'Arrive ~4:15.', showStudents: true },
  { id: 26, dayId: 6, time: '18:15', title: 'Gondola Ride', category: 'Cultural', location: 'Gondola Station - S. Tomà', showStudents: true },
  { id: 27, dayId: 6, time: '19:15', title: 'Rialto Bridge Sunset', category: 'Cultural', location: 'Ponte di Rialto', showStudents: true },
  { id: 28, dayId: 6, time: '20:00', title: 'Free Time + Dinner', category: 'Free Time', location: 'Venice', showStudents: true },
  { id: 29, dayId: 6, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Casa Cardinal Piazza', showStudents: true },
  // Day 7
  { id: 30, dayId: 7, time: '08:15', title: 'Church — Mestre Ward', category: 'Cultural', location: 'Via Castellana 124 C', showStudents: true },
  { id: 31, dayId: 7, time: '12:00', title: 'Transit to Rialto', category: 'Transport', location: 'Ruga dei Spezieri', showStudents: false },
  { id: 32, dayId: 7, time: '13:00', title: 'Free Time + Lunch', category: 'Free Time', location: 'Rialto Area', showStudents: true },
  { id: 33, dayId: 7, time: '15:00', title: "Saint Mark's Basilica", category: 'Cultural', location: 'San Marco', showStudents: true },
  { id: 34, dayId: 7, time: '16:00', title: "Saint Mark's Bell Tower", category: 'Cultural', location: 'San Marco', showStudents: true },
  { id: 35, dayId: 7, time: '17:00', title: 'Free Time + Dinner', category: 'Free Time', location: 'Venice', showStudents: true },
  { id: 36, dayId: 7, time: '20:30', title: 'Vivaldi Concert', category: 'Cultural', location: 'Scuola Grande San Teodoro', showStudents: true },
  { id: 37, dayId: 7, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Casa Cardinal Piazza', showStudents: true },
  // Day 8
  { id: 38, dayId: 8, time: '09:00', title: 'AAV Barbini Mirrors', category: 'Company Visit', location: 'Murano', notes: 'Walking/Ferry.', showStudents: true },
  { id: 39, dayId: 8, time: '12:30', title: 'Lunch + Groceries', category: 'Food', location: 'Campo S. Giacomo', showStudents: true },
  { id: 40, dayId: 8, time: '13:45', title: 'Tessitura Bevilacqua', category: 'Company Visit', location: 'Santa Croce 1320', showStudents: true },
  { id: 41, dayId: 8, time: '15:10', title: 'Pick up Luggage', category: 'Transport', location: 'Hotel → Tronchetto', showStudents: false },
  { id: 42, dayId: 8, time: '16:30', title: 'Coach to Ljubljana', category: 'Transport', location: 'Tronchetto → Ljubljana', showStudents: false },
  { id: 43, dayId: 8, time: '20:00', title: '🛒 Buy Tomorrow\'s Lunch', category: 'Free Time', location: 'Mercador/Spar', showStudents: true },
  { id: 44, dayId: 8, time: '20:30', title: 'Dinner at Figovec', category: 'Food', location: 'Ljubljana', showStudents: true },
  { id: 45, dayId: 8, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Ibis Styles Ljubljana', showStudents: true },
  // Day 9
  { id: 46, dayId: 9, time: '07:30', title: 'Depart for Begunje', category: 'Transport', location: 'Hotel → ELAN', showStudents: false },
  { id: 47, dayId: 9, time: '09:00', title: 'ELAN Visit', category: 'Company Visit', location: 'Begunje na Gorenjskem', showStudents: true },
  { id: 48, dayId: 9, time: '11:45', title: 'Ojstrica Hike', category: 'Cultural', location: 'Lake Bled', notes: 'BYO Lunch.', showStudents: true },
  { id: 49, dayId: 9, time: '13:20', title: 'Pletna Boat to Island', category: 'Cultural', location: 'Lake Bled Island', showStudents: true },
  { id: 50, dayId: 9, time: '15:50', title: 'Drive to Ljubljana', category: 'Transport', location: 'Bled → Ljubljana', showStudents: false },
  { id: 51, dayId: 9, time: '17:25', title: 'Ljubljana Walk', category: 'Cultural', location: 'Triple Bridge', showStudents: true },
  { id: 52, dayId: 9, time: '18:00', title: 'Ljubljana Castle', category: 'Cultural', location: 'Ljubljana Castle', showStudents: true },
  { id: 53, dayId: 9, time: '20:30', title: 'Free Time', category: 'Free Time', location: 'Ljubljana', notes: '🛒 Buy Lunch.', showStudents: true },
  { id: 54, dayId: 9, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Ibis Styles', showStudents: true },
  // Day 10
  { id: 55, dayId: 10, time: '07:30', title: 'SMM Maribor Visit', category: 'Company Visit', location: 'Maribor', notes: 'Arrive 10:00 AM.', showStudents: true },
  { id: 56, dayId: 10, time: '12:30', title: 'Trakošćan Castle', category: 'Cultural', location: 'Lepoglava, Croatia', notes: 'Arrive ~1:30 PM.', showStudents: true },
  { id: 57, dayId: 10, time: '15:00', title: 'Drive to Zagreb', category: 'Transport', location: 'Trakošćan → Hotel', showStudents: false },
  { id: 58, dayId: 10, time: '18:25', title: 'Zagreb Walking Tour', category: 'Cultural', location: 'Zagreb Cathedral', showStudents: true },
  { id: 59, dayId: 10, time: '19:30', title: 'Free Time', category: 'Free Time', location: 'Tkalciceva St.', notes: '🛒 Buy Lunch.', showStudents: true },
  { id: 60, dayId: 10, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Hotel Dubrovnik', showStudents: true },
  // Day 11
  { id: 61, dayId: 11, time: '08:30', title: 'Intis Engineering', category: 'Company Visit', location: 'Odra, Zagreb', notes: 'Arrive 9:30 AM.', showStudents: true },
  { id: 62, dayId: 11, time: '12:00', title: 'Končar Group Tour', category: 'Company Visit', location: 'Zagreb', notes: 'Arrive 1:00 PM.', showStudents: true },
  { id: 63, dayId: 11, time: '15:00', title: 'Nikola Tesla Museum', category: 'Cultural', location: 'Savska cesta 18', notes: 'Arrive 4:00 PM.', showStudents: true },
  { id: 64, dayId: 11, time: '17:15', title: 'Dinner at La Štruk', category: 'Food', location: 'Skalinska ul. 5', showStudents: true },
  { id: 65, dayId: 11, time: '20:00', title: 'Free Time', category: 'Free Time', location: 'Zagreb', notes: '🛒 Buy Lunch.', showStudents: true },
  { id: 66, dayId: 11, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Hotel Dubrovnik', showStudents: true },
  // Day 12
  { id: 67, dayId: 12, time: '06:00', title: 'HSTec Visit — Zadar', category: 'Company Visit', location: 'Zadar', notes: 'Arrive 10:00 AM.', showStudents: true },
  { id: 68, dayId: 12, time: '12:30', title: 'Drive to Split', category: 'Transport', location: 'Zadar → Split', showStudents: false },
  { id: 69, dayId: 12, time: '14:30', title: 'Split Free Time', category: 'Free Time', location: 'Diocletian\'s Palace', showStudents: true },
  { id: 70, dayId: 12, time: '18:30', title: 'Drive to Sarajevo', category: 'Transport', location: 'Split → Sarajevo', notes: 'Long day.', showStudents: false },
  { id: 71, dayId: 12, time: '22:30', title: 'Curfew / Hotel', category: 'Accommodation', location: 'Holiday Europa', showStudents: true },
  // Day 13
  { id: 72, dayId: 13, time: '08:45', title: 'War Excursion', category: 'Cultural', location: 'Lobby', notes: 'Ref: GYGMX4LVZRX7', showStudents: true },
  { id: 73, dayId: 13, time: '13:30', title: 'Free Time (Laundry)', category: 'Free Time', location: 'Sarajevo', showStudents: true },
  { id: 74, dayId: 13, time: '19:10', title: 'Yellow Fortress Sunset', category: 'Cultural', location: 'Sarajevo', showStudents: true },
  { id: 75, dayId: 13, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Holiday Europa', showStudents: true },
  // Day 14
  { id: 76, dayId: 14, time: '09:30', title: 'Church — Sarajevo Branch', category: 'Cultural', location: 'Mehmeda Spahe 24', showStudents: true },
  { id: 77, dayId: 14, time: '12:30', title: 'Free Time + Lunch', category: 'Free Time', location: 'Sarajevo', showStudents: true },
  { id: 81, dayId: 14, time: '13:45', title: 'Assassination Site', category: 'Cultural', location: 'Latin Bridge', showStudents: true },
  { id: 82, dayId: 14, time: '14:20', title: 'Ars Aevi Museum', category: 'Cultural', location: 'Sarajevo', showStudents: true },
  { id: 83, dayId: 14, time: '15:45', title: 'Sacred Heart Cathedral', category: 'Cultural', location: 'Sarajevo', showStudents: true },
  { id: 84, dayId: 14, time: '16:30', title: 'Planet Sarajevo', category: 'Cultural', location: 'Sarajevo', showStudents: true },
  { id: 85, dayId: 14, time: '18:40', title: 'Dinner at Nana Kuhinja', category: 'Food', location: 'Sarajevo', showStudents: true },
  { id: 86, dayId: 14, time: '21:00', title: '🛒 Buy Lunch', category: 'Free Time', location: 'Mercador Minute', showStudents: true },
  { id: 87, dayId: 14, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Holiday Europa', showStudents: true },
  // Day 15
  { id: 88, dayId: 15, time: '08:00', title: 'Kinetic Visit', category: 'Company Visit', location: 'Sarajevo', notes: 'Arrive 9:00 AM.', showStudents: true },
  { id: 89, dayId: 15, time: '11:15', title: 'AVDIC Violins', category: 'Company Visit', location: 'Tuzla', notes: 'Arrive 1:30 PM.', showStudents: true },
  { id: 91, dayId: 15, time: '16:45', title: 'Return to Sarajevo', category: 'Transport', location: 'Hotel', showStudents: false },
  { id: 92, dayId: 15, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Holiday Europa', showStudents: true },
  // Day 16
  { id: 93, dayId: 16, time: '06:00', title: 'Mostar Bridge & Aluminij', category: 'Company Visit', location: 'Mostar', notes: 'Early departure.', showStudents: true },
  { id: 94, dayId: 16, time: '11:45', title: 'Adriatic 42 Visit', category: 'Company Visit', location: 'Bijela, Montenegro', notes: 'Arrive 3:00 PM.', showStudents: true },
  { id: 95, dayId: 16, time: '17:30', title: 'Drive to Kotor', category: 'Transport', location: 'Kotor', notes: 'Arrive 6:30 PM.', showStudents: false },
  { id: 96, dayId: 16, time: '19:00', title: 'St. John Fortress Hike', category: 'Cultural', location: 'Kotor Fortress', notes: 'Sunset 7:58 PM.', showStudents: true },
  { id: 97, dayId: 16, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Hotel Hippocampus', showStudents: true },
  // Day 17
  { id: 98, dayId: 17, time: '08:30', title: 'Daido Metal Visit', category: 'Company Visit', location: 'Kotor', notes: 'Arrive 9:00 AM.', showStudents: true },
  { id: 99, dayId: 17, time: '11:30', title: 'Coach to Tirana', category: 'Transport', location: 'Kotor → Tirana', notes: 'Arrive 5:00 PM.', showStudents: false },
  { id: 100, dayId: 17, time: '18:15', title: 'Albanian Night Show', category: 'Food', location: 'Tirana', showStudents: true },
  { id: 101, dayId: 17, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Hotel Tirana', showStudents: true },
  // Day 18
  { id: 102, dayId: 18, time: '08:00', title: 'Timak Visit', category: 'Company Visit', location: 'Tirana', notes: 'Arrive 9:00 AM.', showStudents: true },
  { id: 103, dayId: 18, time: '13:00', title: 'Everest SHPK Visit', category: 'Company Visit', location: 'Kamëz', notes: 'Arrive 2:00 PM.', showStudents: true },
  { id: 104, dayId: 18, time: '17:15', title: 'Coach to Airport', category: 'Transport', location: 'Tirana Airport', showStudents: true },
  { id: 105, dayId: 18, time: '19:25', title: 'Fly to Athens', category: 'Transport', location: 'Tirana Airport', notes: 'Flight A3 973. Conf# AWR9CK.', showStudents: true },
  { id: 106, dayId: 18, time: '21:25', title: 'Transfer to Hotel', category: 'Transport', location: 'Athens Hotel', showStudents: false },
  // Day 19
  { id: 107, dayId: 19, time: '09:00', title: 'Elefsis Shipyards', category: 'Company Visit', location: 'Elefsina', notes: 'Arrive 10:30 AM.', showStudents: true },
  { id: 108, dayId: 19, time: '13:00', title: 'Askra Olive Oil', category: 'Company Visit', location: 'Askri', notes: 'Arrive 3:00 PM.', showStudents: true },
  { id: 109, dayId: 19, time: '16:45', title: 'Dinner at Hill Athens', category: 'Food', location: 'Athens Rooftop', showStudents: true },
  { id: 110, dayId: 19, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Arethusa Hotel', showStudents: true },
  // Day 20
  { id: 111, dayId: 20, time: '07:30', title: 'Acropolis Visit', category: 'Cultural', location: 'Acropolis', notes: 'Appt at 8:00 AM.', showStudents: true },
  { id: 112, dayId: 20, time: '09:40', title: 'Acropolis Museum', category: 'Cultural', location: 'Museum', notes: 'Arrive 10:00 AM.', showStudents: true },
  { id: 113, dayId: 20, time: '12:15', title: 'Lunch — Gyros', category: 'Food', location: 'Athens', showStudents: true },
  { id: 114, dayId: 20, time: '13:10', title: 'Temple of Zeus', category: 'Cultural', location: 'Athens', showStudents: true },
  { id: 115, dayId: 20, time: '16:00', title: 'Boat Tour', category: 'Cultural', location: 'Porto Rafti', notes: 'Ref: GYGMX4LVZXYQ', showStudents: true },
  { id: 116, dayId: 20, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Arethusa Hotel', showStudents: true },
  // Day 21
  { id: 117, dayId: 21, time: '09:00', title: 'Church — Halandri', category: 'Cultural', location: 'Halandri, Athens', showStudents: true },
  { id: 118, dayId: 21, time: '12:40', title: 'Free Time / Lunch', category: 'Free Time', location: 'Athens', showStudents: true },
  { id: 119, dayId: 21, time: '16:00', title: 'Poseidon Excursion', category: 'Cultural', location: 'Meet in Lobby', notes: 'Ref: BR-1389530075', showStudents: true },
  { id: 120, dayId: 21, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Arethusa Hotel', showStudents: true },
  // Day 22
  { id: 121, dayId: 22, time: '08:15', title: 'Get 3D Visit', category: 'Company Visit', location: 'Athens', notes: 'Arrive 9:00 AM.', showStudents: true },
  { id: 122, dayId: 22, time: '11:30', title: 'Skaramangas Shipyards', category: 'Company Visit', location: 'Skaramangas', notes: 'Arrive 1:00 PM.', showStudents: true },
  { id: 123, dayId: 22, time: '19:00', title: 'E-Bike Tour', category: 'Cultural', location: 'Athens', notes: 'Ref: BR-1389567221', showStudents: true },
  { id: 124, dayId: 22, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Arethusa Hotel', showStudents: true },
  // Day 23
  { id: 125, dayId: 23, time: '06:00', title: 'Transfer to Airport', category: 'Transport', location: 'Athens Airport', showStudents: true },
  { id: 126, dayId: 23, time: '09:00', title: 'Fly Home to Utah', category: 'Transport', location: 'Athens Airport', notes: 'Safe travels!', showStudents: true }
];

export const quotes = [
  { dayId: 1,  text: 'Look for what you notice but no one else sees.' },
  { dayId: 2,  text: 'Zoom in and obsess. Zoom out and observe. We get to choose.' },
  { dayId: 3,  text: 'All that matters is that you are making something you love.' },
  { dayId: 4,  text: 'The real work of the artist is a way of being in the world.' },
  { dayId: 5,  text: 'Creativity is a fundamental aspect of being human.' },
  { dayId: 6,  text: 'We can\'t force greatness. All we can do is invite it in.' },
  { dayId: 7,  text: 'Failure is the information you need to get where you\'re going.' },
  { dayId: 8,  text: 'To hone your craft is to honor creation.' },
  { dayId: 9,  text: 'Beware of the assumption that your way is the best way.' },
  { dayId: 10, text: 'The person who makes something today isn\'t who returns tomorrow.' },
  { dayId: 11, text: 'As artists, we seek to restore our childlike perception.' },
  { dayId: 12, text: 'We are all translators for messages the universe is broadcasting.' },
  { dayId: 13, text: 'Imagination has no limits. The physical world does.' },
  { dayId: 14, text: 'Inspiration first. You next. The audience last.' },
  { dayId: 15, text: 'When we share our ideas, they are replenished.' },
  { dayId: 16, text: 'With each story we tell ourselves, we negate possibility.' },
  { dayId: 17, text: 'Being an artist means asking, \'How can it be better?\'' },
  { dayId: 18, text: 'Sharing art is the price of making it.' },
  { dayId: 19, text: 'To live as an artist is a practice of paying attention.' },
  { dayId: 20, text: 'Awareness is something you actively allow to happen.' },
  { dayId: 21, text: 'We are all participating in a larger creative act.' },
  { dayId: 22, text: 'The ordinary moment can create extraordinary art.' },
  { dayId: 23, text: 'Use what\'s helpful. Let go of the rest.' },
];

export const funFacts = [
  { dayId: 1,  text: 'BYU was founded in 1875 as Brigham Young Academy.' },
  { dayId: 2,  text: 'Provo is nicknamed "Silicon Slopes".' },
  { dayId: 3,  text: 'The "Y" on the mountain is 380 feet tall.' },
  { dayId: 4,  text: 'Blendtec\'s viral series started as an internal test.' },
  { dayId: 5,  text: 'The flight from SLC to AMS crosses Greenland.' },
  { dayId: 6,  text: 'Venice has no roads — every journey is by boat or foot.' },
  { dayId: 7,  text: 'Vivaldi performed in Venice churches in the 1700s.' },
  { dayId: 8,  text: 'Miramare Castle was built for an Austrian Archduke.' },
  { dayId: 9,  text: 'Lake Bled\'s color comes from glacial sediment.' },
  { dayId: 10, text: 'Trakošćan Castle has been lived in since the 13th century.' },
  { dayId: 11, text: 'Nikola Tesla was born in Croatia in 1856.' },
  { dayId: 12, text: '3,000 people live inside Diocletian\'s Palace today.' },
  { dayId: 13, text: 'Sarajevo is the "Jerusalem of Europe".' },
  { dayId: 14, text: 'The Latin Bridge is where WWI essentially began.' },
  { dayId: 15, text: 'AVDIC violins are played by professionals worldwide.' },
  { dayId: 16, text: 'Stari Most stood for 427 years before its destruction.' },
  { dayId: 17, text: 'Albania has over 170,000 bunkers.' },
  { dayId: 18, text: 'Before 1990, it was illegal for Albanians to own cars.' },
  { dayId: 19, text: 'Athens has been inhabited for 5,000+ years.' },
  { dayId: 20, text: 'The Parthenon has survived for nearly 2,500 years.' },
  { dayId: 21, text: 'Lord Byron carved his name into a column at Sounion.' },
  { dayId: 22, text: 'Greece has more archaeological museums than any other country.' },
  { dayId: 23, text: 'You have traveled through 8 countries!' },
];

export const emergencyContacts = [
  { label: 'US Embassy Italy (Rome)', phone: '+39 06 46741', notes: 'Passport loss or emergency in Italy' },
  { label: 'US Embassy Slovenia (Ljubljana)', phone: '+386 1 200 5500', notes: 'Passport loss or emergency in Slovenia' },
  { label: 'US Embassy Croatia (Zagreb)', phone: '+385 1 661 2200', notes: 'Passport loss or emergency in Croatia' },
  { label: 'US Embassy Bosnia (Sarajevo)', phone: '+387 33 704 000', notes: 'Passport loss or emergency in Bosnia' },
  { label: 'US Embassy Montenegro (Podgorica)', phone: '+382 (0)20 410 500', notes: 'Passport loss or emergency in Montenegro' },
  { label: 'US Embassy Albania (Tirana)', phone: '+355 4 224 7285', notes: 'Passport loss or emergency in Albania' },
  { label: 'US Embassy Greece (Athens)', phone: '+30 210 721 2951', notes: 'Passport loss or emergency in Greece' },
  { label: 'State Dept Overseas Hotline', phone: '+1 202 501 4444', notes: '24-hour emergency line for US citizens' },
  { label: 'Chris Mattson', phone: '801-879-8131'},
  { label: 'John Salmon', phone: '678-522-9601'},
  { label: 'Melissa Mattson', phone: '801-879-7860'},
  { label: 'BCBS', phone: '1-610-263-2847'},
  { label: 'Venice Hotel — Casa Cardinal Piazza', phone: '+39 041 721388', notes: 'Sestiere Cannaregio 3539/a, Venice' },
  { label: 'Ljubljana Hotel — Ibis Styles', phone: '+386 31 395 869', notes: 'Miklošičeva cesta 9, Ljubljana' },
  { label: 'Zagreb Hotel — Hotel Dubrovnik', phone: '+385 1 4863 503', notes: 'Ljudevita Gaja 1, Zagreb' },
  { label: 'Sarajevo Hotel — Holiday Europa', phone: '+387 33 580-400', notes: 'Vladislava Skarića 5, Sarajevo' },
  { label: 'Kotor Hotel — Hippocampus + Rendez Vous', phone: '+382 69 043 377', notes: 'Kotor 489 + Pjaca od mlijeka 485' },
  { label: 'Tirana Hotel - Grand Hotel & Spa Tirana', phone: '+355 69 609 5399', notes: 'Ambasador 1, Rruga Ismail Qemali, Tirana' },
  { label: 'Athens Hotel', phone: '+30 21 0322 9431', notes: 'Mitropoleos 6-8, Athens' },
  { label: 'Hospital Venice', phone: '+39 041 529 4111', notes: 'Ospedale SS. Giovanni e Paolo Pronto Soccorso' },
  { label: 'Hospital Ljubljana', phone: '+386 1 522 5050', notes: 'UKC Ljubljana' },
  { label: 'Hospital Zagreb', phone: '+385 1 238 8888', notes: 'KBC Zagreb' },
  { label: 'Hospital Sarajevo', phone: '+387 33 297 000', notes: 'KCUS Sarajevo' },
  { label: 'Hospital Kotor', phone: '+382 32 325 222', notes: 'Dom Zdravlja Kotor' },
  { label: 'Hospital Tirana', phone: '+355 4 2234 105', notes: 'QSUT University Hospital' },
  { label: 'Hospital Athens', phone: '+30 210 777 8901', notes: 'Evangelismos Hospital' },
];

export const phrasebook = [
  {
    lang: 'Italian', langCode: 'it-IT', flag: '🇮🇹', country: 'Italy', days: [6, 7, 8],
    phrases: [
      { phrase: 'Buongiorno', english: 'Good morning', phonetic: 'bwon-JOR-no', category: 'Greetings' },
      { phrase: 'Ciao', english: 'Hi / Bye', phonetic: 'chow', category: 'Greetings' },
      { phrase: 'Grazie mille', english: 'Thank you very much', phonetic: 'GRAT-zee-eh MIL-leh', category: 'Greetings' },
      { phrase: 'Scusi', english: 'Excuse me', phonetic: 'SKOO-zee', category: 'Greetings' },
      { phrase: 'Il conto, per favore', english: 'The bill, please', phonetic: 'eel KON-toh pehr fah-VO-reh', category: 'Dining' },
      { phrase: 'Sono vegetariano', english: "I'm vegetarian", phonetic: 'SO-no veh-jeh-tah-RYAH-no', category: 'Dining' },
      { phrase: 'Dov\'è il bagno?', english: 'Where is the bathroom?', phonetic: 'doh-VEH eel BAH-nyoh', category: 'Navigation' },
      { phrase: 'A destra / A sinistra', english: 'Right / Left', phonetic: 'ah DES-trah / ah see-NEES-trah', category: 'Navigation' },
      { phrase: 'Quanto costa?', english: 'How much is it?', phonetic: 'KWAN-toh KOS-tah', category: 'Shopping' },
      { phrase: 'Accettate carte?', english: 'Do you accept cards?', phonetic: 'ah-chet-TAH-teh KAR-teh', category: 'Shopping' },
      { phrase: 'Aiuto!', english: 'Help!', phonetic: 'ah-YOO-toh', category: 'Emergency' },
      { phrase: 'Chiamate la polizia!', english: 'Call the police!', phonetic: 'kyah-MAH-teh lah poh-LEET-syah', category: 'Emergency' },
      { phrase: 'Che meraviglia!', english: 'How wonderful!', phonetic: 'keh meh-rah-VEEL-yah', category: 'Compliments' },
      { phrase: 'Sei gentilissimo', english: "You're very kind", phonetic: 'say jen-tee-LEES-see-moh', category: 'Compliments' },
    ],
  },
  {
    lang: 'Slovenian', langCode: 'sl-SI', flag: '🇸🇮', country: 'Slovenia', days: [9],
    phrases: [
      { phrase: 'Zdravo', english: 'Hello', phonetic: 'ZDRAH-voh', category: 'Greetings' },
      { phrase: 'Hvala', english: 'Thank you', phonetic: 'HVAH-lah', category: 'Greetings' },
      { phrase: 'Prosim', english: 'Please / You\'re welcome', phonetic: 'PROH-seem', category: 'Greetings' },
      { phrase: 'Oprostite', english: 'Excuse me', phonetic: 'oh-PROHS-tee-teh', category: 'Greetings' },
      { phrase: 'Račun, prosim', english: 'The bill, please', phonetic: 'RAH-choon PROH-seem', category: 'Dining' },
      { phrase: 'Brez mesa', english: 'Without meat', phonetic: 'brehz MEH-sah', category: 'Dining' },
      { phrase: 'Kje je...?', english: 'Where is...?', phonetic: 'kyeh yeh', category: 'Navigation' },
      { phrase: 'Govorite angleško?', english: 'Do you speak English?', phonetic: 'goh-VOH-ree-teh ahng-GLESH-koh', category: 'Navigation' },
      { phrase: 'Koliko stane?', english: 'How much is it?', phonetic: 'KOH-lee-koh STAH-neh', category: 'Shopping' },
      { phrase: 'Na pomoč!', english: 'Help!', phonetic: 'nah POH-moch', category: 'Emergency' },
      { phrase: 'Pokličite policijo!', english: 'Call the police!', phonetic: 'poh-KLEE-chee-teh poh-LEE-tsee-yoh', category: 'Emergency' },
      { phrase: 'Odlično!', english: 'Excellent!', phonetic: 'ohd-LEECH-noh', category: 'Compliments' },
    ],
  },
  {
    lang: 'Croatian', langCode: 'hr-HR', flag: '🇭🇷', country: 'Croatia', days: [10, 11],
    phrases: [
      { phrase: 'Dobar dan', english: 'Good day', phonetic: 'DOH-bar dahn', category: 'Greetings' },
      { phrase: 'Hvala', english: 'Thank you', phonetic: 'HVAH-lah', category: 'Greetings' },
      { phrase: 'Molim', english: 'Please / You\'re welcome', phonetic: 'MOH-leem', category: 'Greetings' },
      { phrase: 'Oprostite', english: 'Excuse me', phonetic: 'oh-PROHS-tee-teh', category: 'Greetings' },
      { phrase: 'Račun, molim', english: 'The bill, please', phonetic: 'RAH-choon MOH-leem', category: 'Dining' },
      { phrase: 'Bez mesa, molim', english: 'Without meat, please', phonetic: 'behz MEH-sah MOH-leem', category: 'Dining' },
      { phrase: 'Gdje je...?', english: 'Where is...?', phonetic: 'GDYEH yeh', category: 'Navigation' },
      { phrase: 'Govorite li engleski?', english: 'Do you speak English?', phonetic: 'goh-VOH-ree-teh lee eng-LES-kee', category: 'Navigation' },
      { phrase: 'Koliko košta?', english: 'How much is it?', phonetic: 'KOH-lee-koh KOSH-tah', category: 'Shopping' },
      { phrase: 'Primate kartice?', english: 'Do you accept cards?', phonetic: 'PREE-mah-teh KAR-tee-tseh', category: 'Shopping' },
      { phrase: 'U pomoć!', english: 'Help!', phonetic: 'oo POH-moch', category: 'Emergency' },
      { phrase: 'Predivno!', english: 'Wonderful!', phonetic: 'preh-DEEV-noh', category: 'Compliments' },
    ],
  },
  {
    lang: 'Bosnian', langCode: 'bs-BA', flag: '🇧🇦', country: 'Bosnia', days: [12, 13, 14, 15],
    phrases: [
      { phrase: 'Zdravo', english: 'Hello', phonetic: 'ZDRAH-voh', category: 'Greetings' },
      { phrase: 'Hvala', english: 'Thank you', phonetic: 'HVAH-lah', category: 'Greetings' },
      { phrase: 'Molim', english: 'Please / You\'re welcome', phonetic: 'MOH-leem', category: 'Greetings' },
      { phrase: 'Izvinite', english: 'Excuse me', phonetic: 'eez-VEE-nee-teh', category: 'Greetings' },
      { phrase: 'Račun, molim', english: 'The bill, please', phonetic: 'RAH-choon MOH-leem', category: 'Dining' },
      { phrase: 'Bez mesa', english: 'Without meat', phonetic: 'behz MEH-sah', category: 'Dining' },
      { phrase: 'Gdje je...?', english: 'Where is...?', phonetic: 'GDYEH yeh', category: 'Navigation' },
      { phrase: 'Govorite li engleski?', english: 'Do you speak English?', phonetic: 'goh-VOH-ree-teh lee eng-LES-kee', category: 'Navigation' },
      { phrase: 'Koliko košta?', english: 'How much is it?', phonetic: 'KOH-lee-koh KOSH-tah', category: 'Shopping' },
      { phrase: 'Upomoć!', english: 'Help!', phonetic: 'OO-poh-moch', category: 'Emergency' },
      { phrase: 'Zovite policiju!', english: 'Call the police!', phonetic: 'ZOH-vee-teh poh-LEE-tsee-yoo', category: 'Emergency' },
      { phrase: 'Divno!', english: 'Wonderful!', phonetic: 'DEEV-noh', category: 'Compliments' },
    ],
  },
  {
    lang: 'Montenegrin', langCode: 'hr-HR', flag: '🇲🇪', country: 'Montenegro', days: [16],
    phrases: [
      { phrase: 'Dobro jutro', english: 'Good morning', phonetic: 'DOH-broh YOO-troh', category: 'Greetings' },
      { phrase: 'Hvala', english: 'Thank you', phonetic: 'HVAH-lah', category: 'Greetings' },
      { phrase: 'Molim', english: 'Please / You\'re welcome', phonetic: 'MOH-leem', category: 'Greetings' },
      { phrase: 'Račun, molim', english: 'The bill, please', phonetic: 'RAH-choon MOH-leem', category: 'Dining' },
      { phrase: 'Gdje je...?', english: 'Where is...?', phonetic: 'GDYEH yeh', category: 'Navigation' },
      { phrase: 'Govorite li engleski?', english: 'Do you speak English?', phonetic: 'goh-VOH-ree-teh lee eng-LES-kee', category: 'Navigation' },
      { phrase: 'Koliko košta?', english: 'How much is it?', phonetic: 'KOH-lee-koh KOSH-tah', category: 'Shopping' },
      { phrase: 'Upomoć!', english: 'Help!', phonetic: 'OO-poh-moch', category: 'Emergency' },
      { phrase: 'Predivno!', english: 'Wonderful!', phonetic: 'preh-DEEV-noh', category: 'Compliments' },
    ],
  },
  {
    lang: 'Albanian', langCode: 'sq-AL', flag: '🇦🇱', country: 'Albania', days: [17, 18],
    phrases: [
      { phrase: 'Mirëdita', english: 'Good day', phonetic: 'meer-EH-dee-tah', category: 'Greetings' },
      { phrase: 'Faleminderit', english: 'Thank you', phonetic: 'fah-leh-meen-deh-REET', category: 'Greetings' },
      { phrase: 'Ju lutem', english: 'Please', phonetic: 'yoo LOO-tem', category: 'Greetings' },
      { phrase: 'Më falni', english: 'Excuse me', phonetic: 'meh FAHL-nee', category: 'Greetings' },
      { phrase: 'Llogarinë, ju lutem', english: 'The bill, please', phonetic: 'lloh-gah-REE-neh yoo LOO-tem', category: 'Dining' },
      { phrase: 'Pa mish', english: 'Without meat', phonetic: 'pah meesh', category: 'Dining' },
      { phrase: 'Ku është...?', english: 'Where is...?', phonetic: 'koo ESH-teh', category: 'Navigation' },
      { phrase: 'Flisni anglisht?', english: 'Do you speak English?', phonetic: 'FLEE-snee ahng-LEESHT', category: 'Navigation' },
      { phrase: 'Sa kushton?', english: 'How much is it?', phonetic: 'sah KOOSH-ton', category: 'Shopping' },
      { phrase: 'Ndihmë!', english: 'Help!', phonetic: 'NDEE-hmeh', category: 'Emergency' },
      { phrase: 'Thirrni policinë!', english: 'Call the police!', phonetic: 'THEER-nee poh-LEE-tsee-neh', category: 'Emergency' },
      { phrase: 'Bukur!', english: 'Beautiful!', phonetic: 'BOO-koor', category: 'Compliments' },
    ],
  },
  {
    lang: 'Greek', langCode: 'el-GR', flag: '🇬🇷', country: 'Greece', days: [19, 20, 21, 22, 23],
    phrases: [
      { phrase: 'Kalimera', english: 'Good morning', phonetic: 'kah-lee-MEH-rah', category: 'Greetings' },
      { phrase: 'Yia sas', english: 'Hello / Goodbye (formal)', phonetic: 'YAH sahs', category: 'Greetings' },
      { phrase: 'Efcharistó', english: 'Thank you', phonetic: 'ef-khah-ree-STOH', category: 'Greetings' },
      { phrase: 'Parakaló', english: 'Please / You\'re welcome', phonetic: 'pah-rah-kah-LOH', category: 'Greetings' },
      { phrase: 'Ton logariasmo, parakaló', english: 'The bill, please', phonetic: 'ton loh-ghahr-YAHS-moh pah-rah-kah-LOH', category: 'Dining' },
      { phrase: 'Choris kréas', english: 'Without meat', phonetic: 'KHO-rees KREH-ahs', category: 'Dining' },
      { phrase: 'Pou einai...?', english: 'Where is...?', phonetic: 'poo EE-neh', category: 'Navigation' },
      { phrase: 'Miláte angliká?', english: 'Do you speak English?', phonetic: 'mee-LAH-teh ahng-lee-KAH', category: 'Navigation' },
      { phrase: 'Póso kánei?', english: 'How much is it?', phonetic: 'POH-soh KAH-nee', category: 'Shopping' },
      { phrase: 'Déchetai kártes?', english: 'Do you accept cards?', phonetic: 'DEH-kheh-teh KAR-tes', category: 'Shopping' },
      { phrase: 'Voítheia!', english: 'Help!', phonetic: 'voh-EE-thee-ah', category: 'Emergency' },
      { phrase: 'Kaléste tin astynomía!', english: 'Call the police!', phonetic: 'kah-LES-teh teen ah-stee-noh-MEE-ah', category: 'Emergency' },
      { phrase: 'Thavmásio!', english: 'Wonderful!', phonetic: 'thahv-MAH-syoh', category: 'Compliments' },
      { phrase: 'Polý ómorfo!', english: 'Very beautiful!', phonetic: 'poh-LEE OH-mor-foh', category: 'Compliments' },
    ],
  },
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
