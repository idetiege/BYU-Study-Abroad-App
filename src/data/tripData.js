// BYU Europe Study Abroad 2026 — Trip Data FINAL v3 with Coordinates
// Updated: April 28, 2026 — reflects latest planning spreadsheet
 
export const PROFESSOR_EMAILS = ['isaacjdet@gmail.com'];
export const TRIP_START = '2026-04-27';
export const TOTAL_DAYS = 23;
export const PROFESSOR_PASSWORD = 'BYU2026prof';
 
export const getTodayDayNumber = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const start = new Date(TRIP_START);
  start.setHours(0, 0, 0, 0);
  const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24)) + 1;
  if (diff < 1) return 1;
  if (diff > TOTAL_DAYS) return TOTAL_DAYS;
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
 
export const CATEGORY_COLORS = {
  'Company Visit': '#073C77',
  'Cultural':      '#E9B753',
  'Food':          '#2D6A4F',
  'Transport':     '#8B8B8B',
  'Free Time':     '#4F84B4',
  'Accommodation': '#6B4FA3',
};
 
export const CITY_COORDS = [
  { city: 'Provo',          lat: 40.2338,  lng: -111.6585 },
  { city: 'Salt Lake City', lat: 40.7608,  lng: -111.8910 },
  { city: 'Venice',         lat: 45.4408,  lng:   12.3155 },
  { city: 'Ljubljana',      lat: 46.0569,  lng:   14.5058 },
  { city: 'Zagreb',         lat: 45.8150,  lng:   15.9819 },
  { city: 'Sarajevo',       lat: 43.8563,  lng:   18.4131 },
  { city: 'Mostar',         lat: 43.3438,  lng:   17.8078 },
  { city: 'Kotor',          lat: 42.4247,  lng:   18.7712 },
  { city: 'Tirana',         lat: 41.3275,  lng:   19.8187 },
  { city: 'Athens',         lat: 37.9753,  lng:   23.7330 },
];
 
export const days = [
  { id: 1,  date: '2026-04-27', city: 'Provo',         country: 'USA',        lat: 40.2338,  lng: -111.6585, phase: 'Workshop', summary: 'Kickoff Dinner at Dr. Mattson\'s house — the adventure begins',                                                                    timezone: 'America/Denver' },
  { id: 2,  date: '2026-04-28', city: 'Provo',         country: 'USA',        lat: 40.2338,  lng: -111.6585, phase: 'Workshop', summary: 'Workshop day — culture briefing with Malcolm Botto and safety briefing with Benjamin Cluff',                                         timezone: 'America/Denver' },
  { id: 3,  date: '2026-04-29', city: 'Provo',         country: 'USA',        lat: 40.2338,  lng: -111.6585, phase: 'Workshop', summary: 'Workshop + company visits to Hall Labs and Vanderhall',                                                                             timezone: 'America/Denver' },
  { id: 4,  date: '2026-04-30', city: 'Provo',         country: 'USA',        lat: 40.2338,  lng: -111.6585, phase: 'Workshop', summary: 'Final workshop — Rocketship, Amano, and Blendtec visits. Bring your own lunch.',                                                   timezone: 'America/Denver', packedLunch: true },
  { id: 5,  date: '2026-05-01', city: 'Salt Lake City',country: 'USA',        lat: 40.7608,  lng: -111.8910, phase: 'Travel',   summary: 'Departure day — fly SLC to Amsterdam overnight via Delta DL56. Bring your own lunch.',                                             timezone: 'America/Denver', packedLunch: true },
  { id: 6,  date: '2026-05-02', city: 'Venice',        country: 'Italy',      lat: 45.4408,  lng:   12.3155, phase: 'Europe',   summary: 'Arrival in Venice — Da Vinci Museum, gondola ride, Rialto Bridge sunset. Curfew 10:30 PM.',                                        timezone: 'Europe/Rome' },
  { id: 7,  date: '2026-05-03', city: 'Venice',        country: 'Italy',      lat: 45.4408,  lng:   12.3155, phase: 'Europe',   summary: 'Church in Mestre, Saint Mark\'s Basilica, Bell Tower, Vivaldi concert. Curfew 10:30 PM.',                                          timezone: 'Europe/Rome' },
  { id: 8,  date: '2026-05-04', city: 'Venice',        country: 'Italy',      lat: 45.4408,  lng:   12.3155, phase: 'Europe',   summary: 'AAV Barbini + Tessitura Bevilacqua visits, drive to Ljubljana. Buy lunch for tomorrow.',                                           timezone: 'Europe/Rome',     buyLunchTonight: true },
  { id: 9,  date: '2026-05-05', city: 'Ljubljana',     country: 'Slovenia',   lat: 46.0569,  lng:   14.5058, phase: 'Europe',   summary: 'ELAN factory, Ojstrica hike at Lake Bled, Pletna boat to island, Ljubljana castle walk. Curfew 10:30 PM.',                         timezone: 'Europe/Ljubljana', packedLunch: true },
  { id: 10, date: '2026-05-06', city: 'Zagreb',        country: 'Croatia',    lat: 45.8150,  lng:   15.9819, phase: 'Europe',   summary: 'SMM Maribor visit, Trakošćan Castle, drive to Zagreb, walking tour. Buy lunch for tomorrow.',                                      timezone: 'Europe/Zagreb',   buyLunchTonight: true },
  { id: 11, date: '2026-05-07', city: 'Zagreb',        country: 'Croatia',    lat: 45.8150,  lng:   15.9819, phase: 'Europe',   summary: 'Intis Engineering + Končar Group visits, Nikola Tesla Museum, group dinner La Štruk. Buy lunch for tomorrow.',                     timezone: 'Europe/Zagreb',   buyLunchTonight: true },
  { id: 12, date: '2026-05-08', city: 'Sarajevo',      country: 'Bosnia',     lat: 43.8563,  lng:   18.4131, phase: 'Europe',   summary: 'HSTec Zadar, Split free time + beach, drive to Sarajevo. 10+ hour day.',                                                          timezone: 'Europe/Sarajevo', packedLunch: true },
  { id: 13, date: '2026-05-09', city: 'Sarajevo',      country: 'Bosnia',     lat: 43.8563,  lng:   18.4131, phase: 'Europe',   summary: 'Sarajevo excursion tour, free afternoon (laundry day!). Curfew 10:30 PM.',                                                        timezone: 'Europe/Sarajevo' },
  { id: 14, date: '2026-05-10', city: 'Sarajevo',      country: 'Bosnia',     lat: 43.8563,  lng:   18.4131, phase: 'Europe',   summary: 'Church, Assassination Site, Ars Aevi, Sacred Heart Cathedral, Planet Sarajevo, Nana Kuhinja dinner. Buy lunch.',                  timezone: 'Europe/Sarajevo', buyLunchTonight: true },
  { id: 15, date: '2026-05-11', city: 'Sarajevo',      country: 'Bosnia',     lat: 43.8563,  lng:   18.4131, phase: 'Europe',   summary: 'Kinetic visit, AVDIC Violins in Tuzla, return to hotel. Buy lunch for tomorrow. 10+ hour day.',                                   timezone: 'Europe/Sarajevo', packedLunch: true, buyLunchTonight: true },
  { id: 16, date: '2026-05-12', city: 'Kotor',         country: 'Montenegro', lat: 42.4247,  lng:   18.7712, phase: 'Europe',   summary: 'Mostar Bridge photo, Aluminij, Adriatic 42 Bijela, St. John Fortress night hike in Kotor. 10+ hour day.',                         timezone: 'Europe/Podgorica', packedLunch: true },
  { id: 17, date: '2026-05-13', city: 'Tirana',        country: 'Albania',    lat: 41.3275,  lng:   19.8187, phase: 'Europe',   summary: 'Daido Metal visit, drive to Tirana, Albanian Night dinner show.',                                                                  timezone: 'Europe/Tirane' },
  { id: 18, date: '2026-05-14', city: 'Tirana',        country: 'Albania',    lat: 41.3275,  lng:   19.8187, phase: 'Europe',   summary: 'Timak + Everest SHPK visits, Xhamia Qereke Mosque, fly to Athens.',                                                              timezone: 'Europe/Tirane' },
  { id: 19, date: '2026-05-15', city: 'Athens',        country: 'Greece',     lat: 37.9753,  lng:   23.7330, phase: 'Europe',   summary: 'Elefsis Shipyards, Askra Olive Oil, Hill Athens rooftop dinner.',                                                                 timezone: 'Europe/Athens' },
  { id: 20, date: '2026-05-16', city: 'Athens',        country: 'Greece',     lat: 37.9753,  lng:   23.7330, phase: 'Europe',   summary: 'Acropolis (8 AM), Acropolis Museum, lunch, Temple of Olympian Zeus, boat tour at Porto Rafti.',                                   timezone: 'Europe/Athens' },
  { id: 21, date: '2026-05-17', city: 'Athens',        country: 'Greece',     lat: 37.9753,  lng:   23.7330, phase: 'Europe',   summary: 'Church in Halandri, free time, Poseidon Excursion/Beach (4 PM–10 PM).',                                                          timezone: 'Europe/Athens' },
  { id: 22, date: '2026-05-18', city: 'Athens',        country: 'Greece',     lat: 37.9753,  lng:   23.7330, phase: 'Europe',   summary: 'Get 3D + Skaramangas Shipyards visits, sunset e-bike tour.',                                                                     timezone: 'Europe/Athens' },
  { id: 23, date: '2026-05-19', city: 'Athens',        country: 'Greece',     lat: 37.9753,  lng:   23.7330, phase: 'Europe',   summary: 'Transfer to airport and fly home to Utah — safe travels!',                                                                        timezone: 'Europe/Athens' },
];
 
export const activities = [
 
  // ─── DAY 1 — April 27, Provo ───
  { id: 1, dayId: 1, time: '18:00', title: 'Kickoff Dinner', category: 'Food', lat: 40.2537, lng: -111.6397, location: 'Mattson\'s House, 1101 Elm Ave, Provo', mapsUrl: 'https://www.google.com/maps/place/1101+Elm+Ave,+Provo,+UT+84604', notes: 'Dress nicely. The adventure officially starts here!', showStudents: true },
 
  // ─── DAY 2 — April 28, Provo ───
  { id: 2, dayId: 2, time: '08:00', title: 'Morning Workshop', category: 'Company Visit', lat: 40.2474, lng: -111.6488, location: 'EB Event Space, BYU', mapsUrl: '', notes: 'Dr. Mattson and Dr. Salmon. Runs until noon.', showStudents: true },
  { id: 3, dayId: 2, time: '12:00', title: 'Lunch', category: 'Food', lat: 40.2474, lng: -111.6488, location: 'EB Event Space, BYU', mapsUrl: '', notes: 'Blue Ribbon Box Lunch provided.', showStudents: true },
  { id: 4, dayId: 2, time: '12:00', title: 'Culture Briefing', category: 'Cultural', lat: 40.2474, lng: -111.6488, location: 'EB Event Space, BYU', mapsUrl: '', notes: 'Malcolm Botto. Lunch purchased for Malcolm.', showStudents: true },
  { id: 5, dayId: 2, time: '13:00', title: 'Safety Briefing', category: 'Cultural', lat: 40.2474, lng: -111.6488, location: 'EB Event Space, BYU', mapsUrl: '', notes: 'Benjamin Cluff. Lunch purchased.', showStudents: true },
  { id: 6, dayId: 2, time: '14:00', title: 'Afternoon Workshop', category: 'Company Visit', lat: 40.2474, lng: -111.6488, location: 'EB Event Space, BYU', mapsUrl: '', notes: 'Runs until 5 PM.', showStudents: true },
 
  // ─── DAY 3 — April 29, Provo ───
  { id: 7, dayId: 3, time: '08:00', title: 'Morning Workshop', category: 'Company Visit', lat: 40.2474, lng: -111.6488, location: 'EB Event Space, BYU', mapsUrl: '', notes: '', showStudents: true },
  { id: 8, dayId: 3, time: '10:00', title: 'Pick Up Vans', category: 'Transport', lat: 40.2432, lng: -111.6467, location: 'BYU Motor Pool', mapsUrl: '', notes: 'Professors only.', showStudents: false },
  { id: 9, dayId: 3, time: '12:15', title: 'Lunch at Sportellis', category: 'Food', lat: 40.2393, lng: -111.6584, location: 'Sportellis Artisan Pasta, Provo', mapsUrl: 'https://www.google.com/maps/place/Sportellis+Artisan+Pasta', notes: 'BYU vans.', showStudents: true },
  { id: 10, dayId: 3, time: '13:30', title: 'Hall Labs Visit', category: 'Company Visit', lat: 40.1977, lng: -111.6208, location: 'Hall Logic, Provo', mapsUrl: 'https://www.google.com/maps/place/Hall+Logic', notes: 'BYU vans.', showStudents: true },
  { id: 11, dayId: 3, time: '15:15', title: 'Vanderhall Visit', category: 'Company Visit', lat: 40.1921, lng: -111.6210, location: 'Vanderhall Motor Works, Provo', mapsUrl: 'https://www.google.com/maps/place/Vanderhall+Motor+Works', notes: 'BYU vans.', showStudents: true },
  { id: 12, dayId: 3, time: '17:30', title: 'Return to BYU', category: 'Transport', lat: 40.2474, lng: -111.6488, location: 'EB East Parking Lot', mapsUrl: '', notes: '', showStudents: false },
 
  // ─── DAY 4 — April 30, Provo ───
  { id: 13, dayId: 4, time: '08:00', title: 'Workshop — The Launch', category: 'Company Visit', lat: 40.2469, lng: -111.6491, location: 'HBLL 3714, BYU', mapsUrl: '', notes: '', showStudents: true },
  { id: 14, dayId: 4, time: '09:40', title: 'Rocketship Visit', category: 'Company Visit', lat: 40.2321, lng: -111.6643, location: 'Rocketship Inc., Provo', mapsUrl: 'https://www.google.com/maps/place/Rocketship,+Inc.', notes: 'BYU vans.', showStudents: true },
  { id: 15, dayId: 4, time: '12:00', title: 'Lunch in Pioneer Park', category: 'Food', lat: 40.2331, lng: -111.6683, location: 'Pioneer Park, Provo', mapsUrl: 'https://www.google.com/maps/place/Pioneer+Park', notes: '🥪 Bring your own lunch.', showStudents: true },
  { id: 16, dayId: 4, time: '12:45', title: 'Amano Chocolate Visit', category: 'Company Visit', lat: 40.2320, lng: -111.6537, location: '1078 S 250 E, Provo', mapsUrl: 'https://maps.app.goo.gl/yYWVTeGz3LceJ8Qr6', notes: 'BYU vans.', showStudents: true },
  { id: 17, dayId: 4, time: '14:40', title: 'Blendtec Visit', category: 'Company Visit', lat: 40.2760, lng: -111.6939, location: 'Blendtec, Orem', mapsUrl: 'https://maps.app.goo.gl/HiiN4KEfdNvFNgtQ6', notes: 'BYU vans.', showStudents: true },
  { id: 18, dayId: 4, time: '17:30', title: 'Return to BYU + Drop Off Vans', category: 'Transport', lat: 40.2432, lng: -111.6467, location: 'BYU Motor Pool', mapsUrl: '', notes: '', showStudents: false },
 
  // ─── DAY 5 — May 1, SLC ───
  { id: 19, dayId: 5, time: '10:00', title: 'Final Workshop', category: 'Company Visit', lat: 40.2474, lng: -111.6488, location: 'EB East Lawn, BYU', mapsUrl: '', notes: 'Luggage left on lawn with professors.', showStudents: true },
  { id: 20, dayId: 5, time: '11:10', title: 'UVX to FrontRunner', category: 'Transport', lat: 40.2459, lng: -111.6499, location: 'UVX South Campus, BYU', mapsUrl: '', notes: 'Departs 11:10 AM sharp. 🥪 Bring lunch or buy at SLC.', showStudents: true },
  { id: 21, dayId: 5, time: '11:46', title: 'FrontRunner to SLC Airport', category: 'Transport', lat: 40.2338, lng: -111.6585, location: 'Provo Central Station', mapsUrl: '', notes: '', showStudents: false },
  { id: 22, dayId: 5, time: '16:20', title: 'Fly to Amsterdam', category: 'Transport', lat: 40.7899, lng: -111.9791, location: 'Salt Lake City International Airport', mapsUrl: '', notes: 'Delta DL56. Overnight — arrives Amsterdam 10:15 AM May 2.', showStudents: true },
 
  // ─── DAY 6 — May 2, Venice ───
  { id: 23, dayId: 6, time: '11:25', title: 'Fly AMS → Venice', category: 'Transport', lat: 52.3105, lng: 4.7683, location: 'Amsterdam Schiphol Airport', mapsUrl: '', notes: 'KLM/Delta 9223. Arrives Venice 1:10 PM.', showStudents: true },
  { id: 24, dayId: 6, time: '13:50', title: 'Alilaguna Blue Line to Hotel', category: 'Transport', lat: 45.5053, lng: 12.3519, location: 'VCE Airport', mapsUrl: '', notes: '€18 per person. ~48 min journey.', showStudents: false },
  { id: 25, dayId: 6, time: '15:45', title: 'Da Vinci Museum', category: 'Cultural', lat: 45.4340, lng: 12.3275, location: 'Campo S. Rocco 3052, Venice', mapsUrl: 'https://maps.app.goo.gl/JFge2Yfk8RZip1HK9', notes: 'Buy tickets in person.', showStudents: true },
  { id: 26, dayId: 6, time: '18:15', title: 'Gondola Ride', category: 'Cultural', lat: 45.4337, lng: 12.3236, location: 'Gondola Station S. Tomà, Venice', mapsUrl: 'https://maps.app.goo.gl/a5dg5AKaJ1CHYJ2t7', notes: '4 gondolas. Pay on site. ~30 min.', showStudents: true },
  { id: 27, dayId: 6, time: '19:15', title: 'Rialto Bridge Sunset', category: 'Cultural', lat: 45.4380, lng: 12.3359, location: 'Ponte di Rialto, Venice', mapsUrl: 'https://maps.app.goo.gl/5K3UFmxmi9j8Bocw9', notes: 'Free. Sunset ~7:53 PM.', showStudents: true },
  { id: 28, dayId: 6, time: '20:00', title: 'Free Time + Dinner', category: 'Free Time', lat: 45.4408, lng: 12.3155, location: 'Venice', mapsUrl: '', notes: 'Stay in pairs (at least).', showStudents: true },
  { id: 29, dayId: 6, time: '22:30', title: 'Curfew', category: 'Accommodation', lat: 45.4469, lng: 12.3278, location: 'Casa Cardinal Piazza, Cannaregio 3539/a', mapsUrl: 'https://maps.app.goo.gl/c5rWyie5XAMj3zR5A', notes: 'Be back by 10:30 PM.', showStudents: true },
 
  // ─── DAY 7 — May 3, Venice ───
  { id: 30, dayId: 7, time: '08:15', title: 'Church — Mestre Ward', category: 'Cultural', lat: 45.4897, lng: 12.2286, location: 'Via Castellana 124C, Zelarino', mapsUrl: 'https://maps.app.goo.gl/jmxhgjqBAs92aYoh8', notes: 'Bishop expecting group. Italian services 9:30 AM.', showStudents: true },
  { id: 31, dayId: 7, time: '12:00', title: 'Transit to Rialto Area', category: 'Transport', lat: 45.4378, lng: 12.3354, location: 'Ruga dei Spezieri, Venice', mapsUrl: 'https://maps.app.goo.gl/pQXsNSasi7Uf7vh98', notes: '', showStudents: false },
  { id: 32, dayId: 7, time: '13:00', title: 'Free Time + Lunch', category: 'Free Time', lat: 45.4378, lng: 12.3354, location: 'Bar Rialto da Lollo area, Venice', mapsUrl: 'https://maps.app.goo.gl/tNrxfjEwxhGrXzKE8', notes: 'Lunch on your own. Stay in pairs.', showStudents: true },
  { id: 33, dayId: 7, time: '15:00', title: 'Saint Mark\'s Basilica', category: 'Cultural', lat: 45.4346, lng: 12.3397, location: 'Piazza San Marco, Venice', mapsUrl: 'https://www.google.com/maps/place/Saint+Mark\'s+Basilica', notes: 'Tickets pre-purchased.', showStudents: true },
  { id: 34, dayId: 7, time: '16:00', title: 'Saint Mark\'s Bell Tower', category: 'Cultural', lat: 45.4343, lng: 12.3388, location: 'Saint Mark\'s Campanile, Venice', mapsUrl: '', notes: 'Tickets pre-purchased. 360° views.', showStudents: true },
  { id: 35, dayId: 7, time: '17:00', title: 'Free Time + Dinner', category: 'Free Time', lat: 45.4408, lng: 12.3155, location: 'Venice', mapsUrl: '', notes: 'Walk toward Vivaldi venue by 8 PM. Stay in pairs.', showStudents: true },
  { id: 36, dayId: 7, time: '20:30', title: 'Vivaldi Concert', category: 'Cultural', lat: 45.4356, lng: 12.3364, location: 'Scuola Grande San Teodoro, Venice', mapsUrl: 'https://maps.app.goo.gl/e6TCWaiALrYAu7yQ9', notes: 'Tickets pre-purchased. Smart casual.', showStudents: true },
  { id: 37, dayId: 7, time: '22:30', title: 'Curfew', category: 'Accommodation', lat: 45.4469, lng: 12.3278, location: 'Casa Cardinal Piazza, Venice', mapsUrl: 'https://maps.app.goo.gl/HgkAgiYbCXgU4h13A', notes: 'Be back by 10:30 PM.', showStudents: true },
 
  // ─── DAY 8 — May 4, Venice → Ljubljana ───
  { id: 38, dayId: 8, time: '09:00', title: 'AAV Barbini Venetian Mirrors', category: 'Company Visit', lat: 45.4588, lng: 12.3533, location: 'Calle Dietro Gli Orti 7, Murano', mapsUrl: 'https://maps.app.goo.gl/pDtKuBZhCc2yEQMFA', notes: 'Ferry to Murano. Keep luggage at hotel until 3 PM.', showStudents: true },
  { id: 39, dayId: 8, time: '12:30', title: 'Return to Venice + Lunch', category: 'Food', lat: 45.4392, lng: 12.3245, location: 'Campo S. Giacomo dell\'Orio, Venice', mapsUrl: 'https://maps.app.goo.gl/fUJVkTLGzpts2aBn9', notes: 'Grocery store lunch. 40 min walk.', showStudents: true },
  { id: 40, dayId: 8, time: '13:45', title: 'Tessitura Bevilacqua', category: 'Company Visit', lat: 45.4399, lng: 12.3247, location: 'Santa Croce 1320, Venice', mapsUrl: 'https://maps.app.goo.gl/kXzAdr21KNMmSpVs9', notes: 'Historic handwoven velvet since 1875. Pay on site.', showStudents: true },
  { id: 41, dayId: 8, time: '15:10', title: 'Return to Hotel — Pick Up Luggage', category: 'Transport', lat: 45.4469, lng: 12.3278, location: 'Hotel → Tronchetto', mapsUrl: 'https://maps.app.goo.gl/aNozdHfzHKp9xSrp7', notes: '20 min walk.', showStudents: false },
  { id: 42, dayId: 8, time: '15:40', title: 'Transport to Bus Station (Tronchetto)', category: 'Transport', lat: 45.4453, lng: 12.3031, location: 'Tronchetto, Venice', mapsUrl: 'https://maps.app.goo.gl/LPfgGv9dXc1Tfbq78', notes: '30 min walk/ferry.', showStudents: false },
  { id: 43, dayId: 8, time: '16:30', title: 'Drive to Ljubljana', category: 'Transport', lat: 46.0569, lng: 14.5058, location: 'Tronchetto → Ljubljana', mapsUrl: 'https://maps.app.goo.gl/izwnfnFG6tsN8ekT9', notes: 'Coach. Arrive ~7:30 PM.', showStudents: false },
  { id: 44, dayId: 8, time: '20:00', title: '🛒 Buy Lunch for Tomorrow', category: 'Free Time', lat: 46.0550, lng: 14.5057, location: 'Mercador or Spar, Slovenska cesta 55, Ljubljana', mapsUrl: 'https://maps.app.goo.gl/W554vJW4nFV5B9vf6', notes: '3 min walk from hotel. Stores close 9-10 PM!', showStudents: true },
  { id: 45, dayId: 8, time: '20:30', title: 'Dinner at Figovec', category: 'Food', lat: 46.0555, lng: 14.5042, location: 'Figovec, Gosposvetska cesta 1, Ljubljana', mapsUrl: 'https://maps.app.goo.gl/7mAk9sYBZi6oTc84A', notes: 'Awaiting reply. Traditional Slovenian dinner.', showStudents: true },
  { id: 46, dayId: 8, time: '22:30', title: 'Curfew', category: 'Accommodation', lat: 46.0557, lng: 14.5074, location: 'Ibis Styles Ljubljana, Miklošičeva 9', mapsUrl: 'https://www.google.com/maps/place/Miklošičeva+cesta+9', notes: 'Be back by 10:30 PM.', showStudents: true },
 
  // ─── DAY 9 — May 5, Ljubljana / Lake Bled ───
  { id: 47, dayId: 9, time: '07:30', title: 'Depart for ELAN', category: 'Transport', lat: 46.0557, lng: 14.5074, location: 'Hotel Ljubljana → Begunje', mapsUrl: '', notes: 'Snack/lunch in coach.', showStudents: false },
  { id: 48, dayId: 9, time: '09:00', title: 'ELAN Company Visit', category: 'Company Visit', lat: 46.3887, lng: 14.1783, location: 'ELAN, Begunje na Gorenjskem', mapsUrl: 'https://maps.app.goo.gl/U5qotfvDyMQBf17o7', notes: '2.5 hour visit to the world-famous ski factory. Ends ~11:30 AM.', showStudents: true },
  { id: 49, dayId: 9, time: '11:45', title: 'Ojstrica Hike at Lake Bled', category: 'Cultural', lat: 46.3631, lng: 14.0925, location: 'Ojstrica Trailhead, Kidričeva cesta, Bled', mapsUrl: 'https://maps.app.goo.gl/aJMJt963m1XmNAFS7', notes: '🥪 Lunch on bus or during hike. ~1 hr roundtrip up to lookout. Wear proper shoes.', showStudents: true },
  { id: 50, dayId: 9, time: '13:20', title: 'Pletna Boat to Bled Island', category: 'Cultural', lat: 46.3612, lng: 14.0788, location: 'Velika Zaka Pletna Dock, Lake Bled', mapsUrl: '', notes: 'Church ticket pre-purchased. Buy Pletna boat from locals on-site. Must leave on 3:10 PM boat. ~1 hour on island.', showStudents: true },
  { id: 51, dayId: 9, time: '15:50', title: 'Drive to Ljubljana', category: 'Transport', lat: 46.0557, lng: 14.5074, location: 'Bled → Ljubljana', mapsUrl: 'https://maps.app.goo.gl/YiubxcZQeoGhpmhR8', notes: '~1 hr 20 min. Bus done at 5:30 PM.', showStudents: false },
  { id: 52, dayId: 9, time: '17:25', title: 'Walk to Triple Bridge + Dragon Bridge + Funicular', category: 'Cultural', lat: 46.0514, lng: 14.5060, location: 'Triple Bridge, Ljubljana', mapsUrl: 'https://maps.app.goo.gl/jHEKS6cJjmyUFLjy9', notes: 'Depart hotel 5:25 PM. 15 min transit. Walking tour.', showStudents: true },
  { id: 53, dayId: 9, time: '18:00', title: 'Ljubljana Castle', category: 'Cultural', lat: 46.0489, lng: 14.5084, location: 'Ljubljana Castle, Grajska planota 1', mapsUrl: 'https://www.google.com/maps/place/Ljubljana+Castle', notes: 'Buy tickets online — 3 transactions. Purchase #271068. Take funicular up.', showStudents: true },
  { id: 54, dayId: 9, time: '20:10', title: 'Funicular Down', category: 'Transport', lat: 46.0490, lng: 14.5082, location: 'Ljubljana Castle Funicular, Krekov trg 4', mapsUrl: '', notes: '', showStudents: false },
  { id: 55, dayId: 9, time: '20:30', title: 'Free Time', category: 'Free Time', lat: 46.0557, lng: 14.5074, location: 'Ljubljana', mapsUrl: '', notes: 'Stay in pairs. Buy lunch for tomorrow.', showStudents: true },
  { id: 56, dayId: 9, time: '22:30', title: 'Curfew', category: 'Accommodation', lat: 46.0557, lng: 14.5074, location: 'Ibis Styles Ljubljana', mapsUrl: '', notes: 'Be back by 10:30 PM.', showStudents: true },
 
  // ─── DAY 10 — May 6, Zagreb ───
  { id: 57, dayId: 10, time: '07:30', title: 'SMM Company Visit — Maribor', category: 'Company Visit', lat: 46.5547, lng: 15.6459, location: 'Perhavčeva 17, Maribor, Slovenia', mapsUrl: 'https://maps.app.goo.gl/Vp2SrELYAhMM71kD8', notes: '', showStudents: true },
  { id: 58, dayId: 10, time: '12:30', title: 'Trakošćan Castle', category: 'Cultural', lat: 46.2514, lng: 15.8783, location: 'Trakošćan 4, Lepoglava, Croatia', mapsUrl: 'https://maps.app.goo.gl/AY1RZWzYt41E6ZfR7', notes: 'Lunch on coach. Buy tickets on site — 5-10 euros. Audiotour free. Lake walk available.', showStudents: true },
  { id: 59, dayId: 10, time: '15:00', title: 'Drive to Zagreb', category: 'Transport', lat: 45.8122, lng: 15.9765, location: 'Trakošćan → Hotel Dubrovnik', mapsUrl: 'https://maps.app.goo.gl/JA2W71b27JaiqKp98', notes: '~2 hour drive.', showStudents: false },
  { id: 60, dayId: 10, time: '17:30', title: 'Free Time + Check In', category: 'Free Time', lat: 45.8122, lng: 15.9765, location: 'Hotel Dubrovnik, Zagreb', mapsUrl: '', notes: '60 min free time after check in. Buy lunch for tomorrow.', showStudents: true },
  { id: 61, dayId: 10, time: '18:25', title: 'Walking Tour — Zagreb Cathedral + St. Mark\'s + Lotrščak Tower', category: 'Cultural', lat: 45.8144, lng: 15.9786, location: 'Cathedral of Zagreb, Kaptol 31', mapsUrl: 'https://maps.app.goo.gl/VycAQswE1i7aYFh46', notes: 'Meet at hotel lobby 6:25 PM. 30 min walking tour.', showStudents: true },
  { id: 62, dayId: 10, time: '19:00', title: 'Zagreb Cathedral (Interior if Open)', category: 'Cultural', lat: 45.8144, lng: 15.9786, location: 'Cathedral of Zagreb, Kaptol 31', mapsUrl: 'https://maps.app.goo.gl/xaiXagDS7TttDjcq9', notes: 'May be under repair post-earthquake.', showStudents: true },
  { id: 63, dayId: 10, time: '19:30', title: 'Free Time', category: 'Free Time', lat: 45.8158, lng: 15.9778, location: 'Tkalčićeva Street / Chocolate Museum, Zagreb', mapsUrl: '', notes: '🛒 Buy lunch for tomorrow. Stay in pairs.', showStudents: true },
  { id: 64, dayId: 10, time: '22:30', title: 'Curfew', category: 'Accommodation', lat: 45.8122, lng: 15.9765, location: 'Hotel Dubrovnik, Ljudevita Gaja 1, Zagreb', mapsUrl: 'https://www.google.com/maps/place/Hotel+Dubrovnik', notes: 'Be back by 10:30 PM.', showStudents: true },
 
  // ─── DAY 11 — May 7, Zagreb ───
  { id: 65, dayId: 11, time: '08:30', title: 'Intis Engineering Visit', category: 'Company Visit', lat: 45.7614, lng: 15.9217, location: 'Velika Cesta 97, Odra, Zagreb', mapsUrl: 'https://maps.app.goo.gl/fP2tZWXTP4CMxsYo8', notes: '', showStudents: true },
  { id: 66, dayId: 11, time: '12:00', title: 'Končar Group Visit', category: 'Company Visit', lat: 45.7894, lng: 15.8967, location: 'KONČAR Electric Vehicles, Ul. Ante Babaje 1', mapsUrl: 'https://maps.app.goo.gl/WBXT2CoCKGUqAFDt7', notes: '1.5 hour tour. Eat lunch quickly on bus.', showStudents: true },
  { id: 67, dayId: 11, time: '15:00', title: 'Nikola Tesla Technical Museum', category: 'Cultural', lat: 45.8031, lng: 15.9647, location: 'Savska cesta 18, Zagreb', mapsUrl: 'https://maps.app.goo.gl/Phy3S4pfFAKMvS7s7', notes: 'Buy tickets on site — group rate. tmnt.hr. ~1 hour. Closes 5 PM.', showStudents: true },
  { id: 68, dayId: 11, time: '17:15', title: 'Group Dinner — La Štruk', category: 'Food', lat: 45.8147, lng: 15.9775, location: 'La Štruk, Skalinska ul. 5, Zagreb', mapsUrl: 'https://maps.app.goo.gl/Sn7LnBYY3Rx19qcWA', notes: 'Reservation confirmed. Coach leaving after.', showStudents: true },
  { id: 69, dayId: 11, time: '20:00', title: 'Free Time', category: 'Free Time', lat: 45.8150, lng: 15.9819, location: 'Zagreb', mapsUrl: '', notes: '🛒 Buy breakfast and lunch for tomorrow!', showStudents: true },
  { id: 70, dayId: 11, time: '22:30', title: 'Curfew', category: 'Accommodation', lat: 45.8122, lng: 15.9765, location: 'Hotel Dubrovnik, Zagreb', mapsUrl: '', notes: 'Be back by 10:30 PM.', showStudents: true },
 
  // ─── DAY 12 — May 8, Sarajevo ───
  { id: 71, dayId: 12, time: '06:00', title: 'HSTec Visit — Zadar', category: 'Company Visit', lat: 44.1194, lng: 15.2314, location: 'Zagrebačka 100, Zadar, Croatia', mapsUrl: 'https://maps.app.goo.gl/Ba89cso95PSvLQoV7', notes: '⚠️ Very early departure. Pack bags the night before.', showStudents: true },
  { id: 72, dayId: 12, time: '12:30', title: 'Drive to Split — Lunch on Bus', category: 'Food', lat: 43.5081, lng: 16.4402, location: 'Split, Croatia', mapsUrl: 'https://maps.app.goo.gl/KMQXtKokwujNEKRJA', notes: '🥪 Lunch on bus. ~2 hour drive.', showStudents: true },
  { id: 73, dayId: 12, time: '14:30', title: 'Split — Free Time (Beach/Palace/Riva)', category: 'Cultural', lat: 43.5087, lng: 16.4402, location: 'Diocletian\'s Palace, Split', mapsUrl: '', notes: '~4 hours free. Swim, walk palace, eat early dinner or bring on coach.', showStudents: true },
  { id: 74, dayId: 12, time: '18:30', title: 'Drive to Sarajevo', category: 'Transport', lat: 43.8585, lng: 18.4273, location: 'Split → Hotel Holiday Europa, Sarajevo', mapsUrl: 'https://maps.app.goo.gl/4uEDvPJagccKE5HT9', notes: 'Coach. ~4 hour drive. Arrive ~10:30 PM. 10+ hour day.', showStudents: false },
 
  // ─── DAY 13 — May 9, Sarajevo ───
  { id: 75, dayId: 13, time: '08:45', title: 'Sarajevo Excursion', category: 'Cultural', lat: 43.8585, lng: 18.4273, location: 'Meet in Hotel Lobby — Info Bosnia Tours', mapsUrl: 'https://maps.app.goo.gl/TQACo16bhXwFQ17G9', notes: 'Booking ref: GYGMX4LVZRX7. Excursion vehicle. ~4 hours, various locations.', showStudents: true },
  { id: 76, dayId: 13, time: '13:30', title: 'Free Time (Laundry Day!)', category: 'Free Time', lat: 43.8589, lng: 18.4251, location: 'Sarajevo', mapsUrl: 'https://www.google.com/maps/search/laundromat/@43.8589656,18.4250541', notes: 'Laundromats nearby — see map for locations. Rest of day free.', showStudents: true },
  { id: 77, dayId: 13, time: '22:30', title: 'Curfew', category: 'Accommodation', lat: 43.8585, lng: 18.4273, location: 'Hotel Holiday Europa, Vladislava Skarića 5', mapsUrl: 'https://www.google.com/maps/place/Vladislava+Skarića+5', notes: 'Be back by 10:30 PM.', showStudents: true },
 
  // ─── DAY 14 — May 10, Sarajevo ───
  { id: 78, dayId: 14, time: '09:30', title: 'Church — Sarajevo Branch', category: 'Cultural', lat: 43.8597, lng: 18.4228, location: 'Mehmeda Spahe 24, Sarajevo', mapsUrl: 'https://maps.app.goo.gl/r2L6vKCF53vxEPLD8', notes: 'President Lamb expecting group. 15 min walk. Croatian language services 10:00 AM.', showStudents: true },
  { id: 79, dayId: 14, time: '12:30', title: 'Free Time + Lunch', category: 'Free Time', lat: 43.8563, lng: 18.4131, location: 'Sarajevo', mapsUrl: '', notes: '~1 hour free time.', showStudents: true },
  { id: 80, dayId: 14, time: '13:45', title: 'Assassination Site — Latin Bridge', category: 'Cultural', lat: 43.8581, lng: 18.4322, location: 'Latin Bridge, Zelenih beretki 30, Sarajevo', mapsUrl: 'https://maps.app.goo.gl/4afJPrriXqgiyPoN8', notes: 'Meet at hotel lobby 1:35 PM. Site of the 1914 assassination that triggered WWI.', showStudents: true },
  { id: 81, dayId: 14, time: '14:20', title: 'Ars Aevi Modern Art Museum', category: 'Cultural', lat: 43.8567, lng: 18.4178, location: 'Ars Aevi, Brodac 1, Sarajevo', mapsUrl: 'https://maps.app.goo.gl/nyDbibAmQyxc5iaw9', notes: 'arsaevi.ba', showStudents: true },
  { id: 82, dayId: 14, time: '15:45', title: 'Sacred Heart Cathedral', category: 'Cultural', lat: 43.8578, lng: 18.4164, location: 'Trg Fra Grge Martića 2, Sarajevo', mapsUrl: 'https://maps.app.goo.gl/aCAnGRh3GZDme9zj7', notes: '', showStudents: true },
  { id: 83, dayId: 14, time: '16:30', title: 'Planet Sarajevo Multimedia Museum', category: 'Cultural', lat: 43.8561, lng: 18.4136, location: 'Maršala Tita 56, Sarajevo', mapsUrl: 'https://maps.app.goo.gl/Rks8m41tmnLPFiLr6', notes: '', showStudents: true },
  { id: 84, dayId: 14, time: '18:40', title: 'Group Dinner — Nana Kuhinja', category: 'Food', lat: 43.8594, lng: 18.4328, location: 'Kundurdžiluk 35, Sarajevo', mapsUrl: 'https://maps.app.goo.gl/Uu95QUn6gFC3krEk7', notes: 'naninakuhinja.ba. Arrive ~7:00 PM.', showStudents: true },
  { id: 85, dayId: 14, time: '21:00', title: 'Buy Lunch for Tomorrow', category: 'Free Time', lat: 43.8592, lng: 18.4317, location: 'Mercador Minute, Mula Mustafe Bašeskije 26', mapsUrl: 'https://maps.app.goo.gl/nqsLXJLmiyjwEe6m6', notes: '🛒 Buy lunch AND breakfast for tomorrow.', showStudents: true },
  { id: 86, dayId: 14, time: '22:30', title: 'Curfew', category: 'Accommodation', lat: 43.8585, lng: 18.4273, location: 'Hotel Holiday Europa', mapsUrl: '', notes: 'Be back by 10:30 PM.', showStudents: true },
 
  // ─── DAY 15 — May 11, Sarajevo ───
  { id: 87, dayId: 15, time: '08:00', title: 'Kinetic Company Visit', category: 'Company Visit', lat: 43.8456, lng: 18.3789, location: 'Tvornička 3, Sarajevo', mapsUrl: 'https://maps.app.goo.gl/FGfdYFRpFWbm4YFN7', notes: '', showStudents: true },
  { id: 88, dayId: 15, time: '11:15', title: 'AVDIC Violins — Tuzla', category: 'Company Visit', lat: 44.5342, lng: 18.6734, location: 'Pavla Goranina Ilije 108, Tuzla', mapsUrl: 'https://maps.app.goo.gl/4LtGmV73RvyccKFu5', notes: 'Lunch in coach. Arrive ~2:30 PM.', showStudents: true },
  { id: 89, dayId: 15, time: '16:45', title: 'Return to Hotel', category: 'Transport', lat: 43.8585, lng: 18.4273, location: 'Tuzla → Hotel Holiday Europa, Sarajevo', mapsUrl: 'https://maps.app.goo.gl/KRq8jj3HJP1V8fWp6', notes: 'Coach. Arrive ~7:30 PM.', showStudents: false },
  { id: 90, dayId: 15, time: '19:30', title: 'Free Time + Buy Lunch', category: 'Free Time', lat: 43.8563, lng: 18.4131, location: 'Sarajevo', mapsUrl: '', notes: '🛒 Buy lunch AND breakfast for tomorrow. Early night recommended.', showStudents: true },
  { id: 91, dayId: 15, time: '22:30', title: 'Curfew', category: 'Accommodation', lat: 43.8585, lng: 18.4273, location: 'Hotel Holiday Europa', mapsUrl: '', notes: 'Be back by 10:30 PM.', showStudents: true },
 
  // ─── DAY 16 — May 12, Mostar → Kotor ───
  { id: 92, dayId: 16, time: '06:00', title: 'Mostar Bridge — Photo Stop', category: 'Cultural', lat: 43.3372, lng: 17.8155, location: 'Stari Most (Old Bridge), Mostar', mapsUrl: 'https://maps.app.goo.gl/LTETDXfyEwyvcwSP7', notes: '🥪 Meals in coach. Quick photo stop at the iconic bridge.', showStudents: true },
  { id: 93, dayId: 16, time: '09:00', title: 'Aluminij Visit', category: 'Company Visit', lat: 43.3368, lng: 17.8042, location: 'Bačevići, Mostar, Bosnia', mapsUrl: 'https://maps.app.goo.gl/RGnLp9WHvCW1B6haA', notes: '', showStudents: true },
  { id: 94, dayId: 16, time: '11:45', title: 'Adriatic 42 — Bijela', category: 'Company Visit', lat: 42.4611, lng: 18.6747, location: 'Bijela, Montenegro', mapsUrl: 'https://maps.app.goo.gl/c1oic3uXM8yHXDM99', notes: 'Possibly arriving late. Arrive ~3:00 PM.', showStudents: true },
  { id: 95, dayId: 16, time: '17:30', title: 'Drive to Kotor', category: 'Transport', lat: 42.4247, lng: 18.7712, location: 'Bijela → Kotor', mapsUrl: 'https://maps.app.goo.gl/XBnNNtoE92yqoHZJ7', notes: '~1 hour along the Bay of Kotor.', showStudents: false },
  { id: 96, dayId: 16, time: '19:00', title: 'St. John Fortress Night Hike', category: 'Cultural', lat: 42.4247, lng: 18.7747, location: 'Kotor Fortress, Montenegro', mapsUrl: 'https://maps.app.goo.gl/TBRRYCkTPjjZHP6z8', notes: '⚠️ BRING FLASHLIGHTS + WATER + SNACKS. Cash only on site. Sunset 7:58 PM. Meet at Rooftop Terrace Hippocampus first.', showStudents: true },
  { id: 97, dayId: 16, time: '20:35', title: 'Free Time + Dinner + Buy Lunch', category: 'Free Time', lat: 42.4234, lng: 18.7706, location: 'Kotor Old Town', mapsUrl: '', notes: '🛒 Buy lunch for tomorrow.', showStudents: true },
  { id: 98, dayId: 16, time: '22:30', title: 'Curfew', category: 'Accommodation', lat: 42.4247, lng: 18.7712, location: 'Hotel Hippocampus + Hotel Rendez Vous, Kotor', mapsUrl: 'https://www.google.com/maps/search/Kotor+489', notes: 'Be back by 10:30 PM. Two hotels: Kotor 489 + Pjaca od mlijeka 485.', showStudents: true },
 
  // ─── DAY 17 — May 13, Tirana ───
  { id: 99, dayId: 17, time: '08:30', title: 'Daido Metal Visit', category: 'Company Visit', lat: 42.4311, lng: 18.7561, location: 'DAIDO METAL KOTOR, Montenegro', mapsUrl: 'https://maps.app.goo.gl/FiUsMKdxZJG6vPcn7', notes: '⚠️ 7-day contact warning required.', showStudents: true },
  { id: 100, dayId: 17, time: '11:30', title: 'Drive to Tirana', category: 'Transport', lat: 41.3204, lng: 19.8167, location: 'Montenegro → Grand Hotel & Spa Tirana', mapsUrl: 'https://maps.app.goo.gl/ey9LvAPhTayxK8Hq7', notes: 'Coach. Lunch in coach. If arrive early: Skanderbeg Square/Et\'hem Bey Mosque.', showStudents: false },
  { id: 101, dayId: 17, time: '18:15', title: 'Albanian Night — Dinner Show', category: 'Food', lat: 41.3278, lng: 19.8183, location: 'Levels -1 & -2, Kavaja St, Tirana', mapsUrl: 'https://maps.app.goo.gl/z2wwSt5x1269uqrx9', notes: 'albaniannight.com. Traditional dinner and cultural show. Pre-purchased. ~2.5 hours.', showStudents: true },
  { id: 102, dayId: 17, time: '22:30', title: 'Curfew', category: 'Accommodation', lat: 41.3204, lng: 19.8167, location: 'Grand Hotel & Spa Tirana, Rruga Ismail Qemali', mapsUrl: 'https://www.google.com/maps/place/Grand+Hotel+&+SPA+Tirana', notes: 'Be back by 10:30 PM.', showStudents: true },
 
  // ─── DAY 18 — May 14, Tirana → Athens ───
  { id: 103, dayId: 18, time: '08:00', title: 'Timak Company Visit', category: 'Company Visit', lat: 41.3781, lng: 19.8033, location: 'Tirana Industrial Park, Albania', mapsUrl: 'https://maps.app.goo.gl/mk42Y2NprQHkGo2m8', notes: 'Depart slightly later than 7:30. Arrive ~9:00 AM.', showStudents: true },
  { id: 104, dayId: 18, time: '11:30', title: 'Lunch — King Pils', category: 'Food', lat: 41.3850, lng: 19.7778, location: 'King Pils Restaurant, Frashnjet', mapsUrl: 'https://maps.app.goo.gl/uSUgndydX5BrRrmn9', notes: 'Coach. Arrive ~11:40 AM.', showStudents: true },
  { id: 105, dayId: 18, time: '13:00', title: 'Everest SHPK Visit', category: 'Company Visit', lat: 41.3928, lng: 19.7758, location: 'Kamëz, Albania', mapsUrl: 'https://maps.app.goo.gl/Swi33RpuGJwwzNGS8', notes: '', showStudents: true },
  { id: 106, dayId: 18, time: '16:30', title: 'Xhamia Qereke Mosque', category: 'Cultural', lat: 41.5086, lng: 19.9631, location: 'Qereke nikel, Krujë 1500, Albania', mapsUrl: 'https://maps.app.goo.gl/75y3pqTZTfHTcrzj7', notes: 'Quick visit. Should contact ahead. Arriving ~4:14-4:45 PM.', showStudents: true },
  { id: 107, dayId: 18, time: '17:15', title: 'Drive to Airport', category: 'Transport', lat: 41.4147, lng: 19.7206, location: 'Tirana International Airport, Rinas', mapsUrl: 'https://maps.app.goo.gl/K9utwmYbFRAY8i477', notes: '~15 min drive. Dinner at the airport.', showStudents: true },
  { id: 108, dayId: 18, time: '19:25', title: 'Fly to Athens', category: 'Transport', lat: 41.4147, lng: 19.7206, location: 'Tirana Airport', mapsUrl: '', notes: 'Aegean Airlines A3 973. Confirmation: AWR9CK.', showStudents: true },
  { id: 109, dayId: 18, time: '21:25', title: 'Transfer to Hotel Athens', category: 'Transport', lat: 37.9753, lng: 23.7330, location: 'Athens Airport → Arethusa Hotel, Mitropoleos 6-8', mapsUrl: 'https://maps.app.goo.gl/V7GCd3xaUuceAqax8', notes: 'Uber-like transport.', showStudents: false },
 
  // ─── DAY 19 — May 15, Athens ───
  { id: 110, dayId: 19, time: '08:15', title: 'Pick Up Lunch — Bazaar Supermarket', category: 'Food', lat: 37.9753, lng: 23.7295, location: 'BAZAAR SUPERMARKET, Mitropoleos 45', mapsUrl: 'https://maps.app.goo.gl/mPy1NvHKfnwM16YW6', notes: '3 min walk from hotel.', showStudents: true },
  { id: 111, dayId: 19, time: '09:00', title: 'Elefsis Shipyards Visit', category: 'Company Visit', lat: 38.0417, lng: 23.5472, location: 'Elefsina, Greece', mapsUrl: 'https://maps.app.goo.gl/3zsH8pQk2pBareEM9', notes: 'Coach. Arrive ~10:30 AM.', showStudents: true },
  { id: 112, dayId: 19, time: '13:00', title: 'Askra Olive Oil Visit', category: 'Company Visit', lat: 38.3614, lng: 22.9103, location: 'Lymperis Estate, Askra Olive Oil, Askri', mapsUrl: 'https://maps.app.goo.gl/2fAfYhY9YR8DsaQP7', notes: 'Coach. ~1.5 hour visit.', showStudents: true },
  { id: 113, dayId: 19, time: '16:45', title: 'Drive to Hill Athens', category: 'Transport', lat: 37.9711, lng: 23.7200, location: 'Askra → Hill Athens', mapsUrl: '', notes: 'Coach drop off at 7 PM. Need to be done with coach by 7 PM.', showStudents: false },
  { id: 114, dayId: 19, time: '19:30', title: 'Dinner — Hill Athens Rooftop', category: 'Food', lat: 37.9711, lng: 23.7200, location: 'Hill Athens, Apostolou Pavlou 27', mapsUrl: 'https://maps.app.goo.gl/YPcw7orU8tg34GpU9', notes: 'Awaiting reply. Reservation at hillathens.gr. Acropolis views.', showStudents: true },
  { id: 115, dayId: 19, time: '22:30', title: 'Curfew', category: 'Accommodation', lat: 37.9753, lng: 23.7330, location: 'Arethusa Hotel, Mitropoleos 6-8, Athens', mapsUrl: 'https://www.google.com/maps/place/Mitropoleos+6-8', notes: 'Be back by 10:30 PM.', showStudents: true },
 
  // ─── DAY 20 — May 16, Athens ───
  { id: 116, dayId: 20, time: '07:30', title: 'Walk to Acropolis', category: 'Transport', lat: 37.9715, lng: 23.7267, location: 'Arethusa Hotel → Acropolis', mapsUrl: '', notes: '', showStudents: false },
  { id: 117, dayId: 20, time: '08:00', title: 'Acropolis', category: 'Cultural', lat: 37.9715, lng: 23.7267, location: 'Acropolis, Athens 105 58', mapsUrl: 'https://maps.app.goo.gl/wFECYrDQRUZ13KS37', notes: 'Pre-registered: 20619USER, GpD2026!. Parthenon, Erechtheion, Temple of Athena Nike.', showStudents: true },
  { id: 118, dayId: 20, time: '09:40', title: 'Acropolis Museum', category: 'Cultural', lat: 37.9684, lng: 23.7258, location: 'Acropolis Museum, Dionysiou Areopagitou 15', mapsUrl: 'https://maps.app.goo.gl/QWn84JsXgnxDMhAP9', notes: 'Buy tickets on site.', showStudents: true },
  { id: 119, dayId: 20, time: '12:15', title: 'Lunch — O Gyros Pou Gyrevis', category: 'Food', lat: 37.9685, lng: 23.7273, location: 'Athanasiou Diakou 1, Athens', mapsUrl: 'https://maps.app.goo.gl/v7wNtLzSpfBv7niz6', notes: 'Finish in <50 min.', showStudents: true },
  { id: 120, dayId: 20, time: '13:10', title: 'Temple of Olympian Zeus', category: 'Cultural', lat: 37.9693, lng: 23.7331, location: 'Temple of Olympian Zeus, Athens', mapsUrl: 'https://maps.app.goo.gl/4dnv8ZVtBr7z1xQp8', notes: '~10 min visit.', showStudents: true },
  { id: 121, dayId: 20, time: '13:30', title: 'Return to Hotel', category: 'Transport', lat: 37.9753, lng: 23.7330, location: 'Temple of Zeus → Arethusa Hotel', mapsUrl: 'https://maps.app.goo.gl/5SPUanbvxbrwMg8EA', notes: '15 min walk. Prepare for boat tour.', showStudents: false },
  { id: 122, dayId: 20, time: '14:00', title: 'Transfer to Porto Rafti', category: 'Transport', lat: 37.8869, lng: 24.0143, location: 'Porto Rafti 190 03, Greece', mapsUrl: 'https://maps.app.goo.gl/JfcodNJdqeot7DZL9', notes: 'Uber-like bus. Arrive ~3:30 PM.', showStudents: false },
  { id: 123, dayId: 20, time: '16:00', title: 'Boat Tour + Team Presentations', category: 'Cultural', lat: 37.8869, lng: 24.0143, location: 'Porto Rafti Marina', mapsUrl: '', notes: 'Booking ref: GYGMX4LVZXYQ. Team presentations on the boat!', showStudents: true },
  { id: 124, dayId: 20, time: '20:30', title: 'Transfer Back to Athens', category: 'Transport', lat: 37.9753, lng: 23.7330, location: 'Porto Rafti → Arethusa Hotel', mapsUrl: '', notes: 'Uber-like bus. Arrive ~10 PM.', showStudents: false },
  { id: 125, dayId: 20, time: '22:30', title: 'Curfew', category: 'Accommodation', lat: 37.9753, lng: 23.7330, location: 'Arethusa Hotel, Athens', mapsUrl: '', notes: 'Be back by 10:30 PM.', showStudents: true },
 
  // ─── DAY 21 — May 17, Athens ───
  { id: 126, dayId: 21, time: '09:00', title: 'Church — Halandri Branch', category: 'Cultural', lat: 38.0211, lng: 23.7994, location: 'Erifilis 16, Halandri, Athens', mapsUrl: 'https://maps.app.goo.gl/FypB9kTYQc7QsogS8', notes: 'President Stimagkiotis contacted. Public transit. Greek services 10:00 AM.', showStudents: true },
  { id: 127, dayId: 21, time: '12:10', title: 'Return from Church', category: 'Transport', lat: 37.9753, lng: 23.7330, location: 'Halandri → Arethusa Hotel', mapsUrl: 'https://maps.app.goo.gl/4oeQxd6nPEYeRx3fA', notes: 'Public transit. Arrive ~12:40 PM.', showStudents: false },
  { id: 128, dayId: 21, time: '12:40', title: 'Free Time', category: 'Free Time', lat: 37.9753, lng: 23.7330, location: 'Athens', mapsUrl: '', notes: 'Suggestions: Mpirmpilo lunch, Lycabettus Hill Funicular, Sky Bar.', showStudents: true },
  { id: 129, dayId: 21, time: '15:55', title: 'Poseidon Excursion / Beach', category: 'Cultural', lat: 37.6503, lng: 24.0261, location: 'Cape Sounion / Temple of Poseidon', mapsUrl: 'https://maps.app.goo.gl/DWSe23trKFpQpUgC8', notes: 'Meet at lobby 3:55 PM. Booking ref: BR-1389530075. Excursion bus. ~5-6 hours. Returns ~10 PM.', showStudents: true },
  { id: 130, dayId: 21, time: '22:30', title: 'Curfew', category: 'Accommodation', lat: 37.9753, lng: 23.7330, location: 'Arethusa Hotel, Athens', mapsUrl: '', notes: 'Be back by 10:30 PM.', showStudents: true },
 
  // ─── DAY 22 — May 18, Athens ───
  { id: 131, dayId: 22, time: '07:30', title: 'Buy Food for Lunch on Bus', category: 'Food', lat: 37.9753, lng: 23.7330, location: 'Near Hotel, Athens', mapsUrl: '', notes: '🥪 Lunch on bus today.', showStudents: true },
  { id: 132, dayId: 22, time: '08:15', title: 'Get 3D Visit', category: 'Company Visit', lat: 38.0267, lng: 23.7378, location: 'Nea Ethniki Odos 2, Aghioi Anargiroi', mapsUrl: 'https://maps.app.goo.gl/pfXdQRzQEnN5TmJq6', notes: 'Coach. 45 min visit. Arrive ~9:00 AM.', showStudents: true },
  { id: 133, dayId: 22, time: '11:30', title: 'Skaramangas Shipyards Visit', category: 'Company Visit', lat: 37.9858, lng: 23.6408, location: '3 Palaska Str, Skaramangas', mapsUrl: 'https://maps.app.goo.gl/B6LLrtFfke9VtMP5A', notes: 'Coach. Arrive ~1:00 PM.', showStudents: true },
  { id: 134, dayId: 22, time: '19:00', title: 'Sunset E-Bike Tour', category: 'Cultural', lat: 37.9711, lng: 23.7200, location: 'Apostolou Pavlou 53, Athens', mapsUrl: '', notes: 'Booking ref: BR-1389567221. Meet at lobby 7 PM. Tour starts 8 PM.', showStudents: true },
  { id: 135, dayId: 22, time: '22:30', title: 'Curfew', category: 'Accommodation', lat: 37.9753, lng: 23.7330, location: 'Arethusa Hotel, Athens', mapsUrl: '', notes: 'Be back by 10:30 PM.', showStudents: true },
 
  // ─── DAY 23 — May 19, Athens → Home ───
  { id: 136, dayId: 23, time: '06:00', title: 'Transfer to Athens Airport', category: 'Transport', lat: 37.9365, lng: 23.9475, location: 'Arethusa Hotel → Athens International Airport', mapsUrl: '', notes: 'Check flight details with professors. Allow plenty of time.', showStudents: true },
  { id: 137, dayId: 23, time: '09:00', title: 'Fly Home to Utah', category: 'Transport', lat: 37.9365, lng: 23.9475, location: 'Athens International Airport "Eleftherios Venizelos"', mapsUrl: '', notes: 'Safe travels! You did it. 23 days, 8 countries, 6,000 miles.', showStudents: true },
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
