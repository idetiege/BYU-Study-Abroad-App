// BYU Europe Study Abroad 2026 — Trip Data FINAL
// Updated: April 26, 2026 — reflects latest planning spreadsheet

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

export const days = [
  { id: 1,  date: '2026-04-27', city: 'Provo',       country: 'USA',        phase: 'Workshop', summary: 'Kickoff Dinner at Dr. Mattson\'s house — the adventure begins',                                                                timezone: 'America/Denver' },
  { id: 2,  date: '2026-04-28', city: 'Provo',       country: 'USA',        phase: 'Workshop', summary: 'Workshop day — culture briefing with Malcolm Botto and safety briefing with Olivia Toone',                                      timezone: 'America/Denver' },
  { id: 3,  date: '2026-04-29', city: 'Provo',       country: 'USA',        phase: 'Workshop', summary: 'Workshop + company visits to Hall Labs and Vanderhall',                                                                         timezone: 'America/Denver' },
  { id: 4,  date: '2026-04-30', city: 'Provo',       country: 'USA',        phase: 'Workshop', summary: 'Final workshop — Rocketship, Amano, and Blendtec visits. Bring your own lunch.',                                               timezone: 'America/Denver', packedLunch: true },
  { id: 5,  date: '2026-05-01', city: 'Salt Lake City', country: 'USA',     phase: 'Travel',   summary: 'Departure day — fly SLC to Amsterdam overnight via Delta DL56. Bring your own lunch.',                                         timezone: 'America/Denver', packedLunch: true },
  { id: 6,  date: '2026-05-02', city: 'Venice',      country: 'Italy',      phase: 'Europe',   summary: 'Arrival in Venice — Da Vinci Museum, gondola ride, Rialto Bridge sunset. Curfew 10:30 PM.',                                    timezone: 'Europe/Rome' },
  { id: 7,  date: '2026-05-03', city: 'Venice',      country: 'Italy',      phase: 'Europe',   summary: 'Church in Mestre, Saint Mark\'s Basilica, Bell Tower, Vivaldi concert. Curfew 10:30 PM.',                                      timezone: 'Europe/Rome' },
  { id: 8,  date: '2026-05-04', city: 'Venice',      country: 'Italy',      phase: 'Europe',   summary: 'AAV Barbini + Tessitura Bevilacqua visits, drive to Ljubljana via Miramare Castle. Buy lunch for tomorrow.',                    timezone: 'Europe/Rome',     buyLunchTonight: true },
  { id: 9,  date: '2026-05-05', city: 'Ljubljana',   country: 'Slovenia',   phase: 'Europe',   summary: 'ELAN factory, Ojstrica hike at Lake Bled, Pletna boat to island, Ljubljana castle walk. Curfew 10:30 PM.',                     timezone: 'Europe/Ljubljana', packedLunch: true },
  { id: 10, date: '2026-05-06', city: 'Zagreb',      country: 'Croatia',    phase: 'Europe',   summary: 'SMM Maribor visit, Trakošćan Castle, drive to Zagreb, evening cultural walk. Buy lunch for tomorrow.',                         timezone: 'Europe/Zagreb',   buyLunchTonight: true },
  { id: 11, date: '2026-05-07', city: 'Zagreb',      country: 'Croatia',    phase: 'Europe',   summary: 'Intis Engineering + Končar Group visits, Nikola Tesla Museum, group dinner La Štruk. Buy lunch for tomorrow.',                  timezone: 'Europe/Zagreb',   buyLunchTonight: true },
  { id: 12, date: '2026-05-08', city: 'Sarajevo',    country: 'Bosnia',     phase: 'Europe',   summary: 'HSTec Zadar, Split + Diocletian\'s Palace + beach, Kravica Waterfalls, late drive to Sarajevo. 10+ hour day.',                timezone: 'Europe/Sarajevo', packedLunch: true },
  { id: 13, date: '2026-05-09', city: 'Sarajevo',    country: 'Bosnia',     phase: 'Europe',   summary: 'War excursion morning, free afternoon (laundry day!), Yellow Fortress at sunset.',                                             timezone: 'Europe/Sarajevo' },
  { id: 14, date: '2026-05-10', city: 'Sarajevo',    country: 'Bosnia',     phase: 'Europe',   summary: 'Church, Assassination Site, Ars Aevi museum, Sacred Heart Cathedral, Planet Sarajevo, group dinner Nana Kuhinja. Buy lunch.', timezone: 'Europe/Sarajevo', buyLunchTonight: true },
  { id: 15, date: '2026-05-11', city: 'Sarajevo',    country: 'Bosnia',     phase: 'Europe',   summary: 'Kinetic visit, AVDIC Violins in Tuzla, return to hotel. Buy lunch for tomorrow.',                                              timezone: 'Europe/Sarajevo', packedLunch: true, buyLunchTonight: true },
  { id: 16, date: '2026-05-12', city: 'Kotor',       country: 'Montenegro', phase: 'Europe',   summary: 'Aluminij Mostar, Dubrovnik stop, Adriatic 42 Bijela, St. John Fortress night hike in Kotor. 10+ hour day.',                   timezone: 'Europe/Podgorica', packedLunch: true },
  { id: 17, date: '2026-05-13', city: 'Tirana',      country: 'Albania',    phase: 'Europe',   summary: 'Daido Metal visit, drive to Tirana, Albanian Night dinner show, Skanderbeg Square + Et\'hem Bey Mosque.',                      timezone: 'Europe/Tirane' },
  { id: 18, date: '2026-05-14', city: 'Tirana',      country: 'Albania',    phase: 'Europe',   summary: 'Timak + Everest SHPK company visits, fly to Athens.',                                                                          timezone: 'Europe/Tirane' },
  { id: 19, date: '2026-05-15', city: 'Athens',      country: 'Greece',     phase: 'Europe',   summary: 'Elefsis Shipyards, Askra Olive Oil, dinner at Hill Athens rooftop.',                                                           timezone: 'Europe/Athens' },
  { id: 20, date: '2026-05-16', city: 'Athens',      country: 'Greece',     phase: 'Europe',   summary: 'Acropolis (8 AM), Acropolis Museum, lunch, Temple of Olympian Zeus, boat tour, team presentations.',                           timezone: 'Europe/Athens' },
  { id: 21, date: '2026-05-17', city: 'Athens',      country: 'Greece',     phase: 'Europe',   summary: 'Church in Halandri, lunch, Lycabettus Hill funicular, Poseidon Excursion/Beach.',                                              timezone: 'Europe/Athens' },
  { id: 22, date: '2026-05-18', city: 'Athens',      country: 'Greece',     phase: 'Europe',   summary: 'Get 3D + Skaramangas Shipyards visits, e-bike tour, group final dinner.',                                                      timezone: 'Europe/Athens' },
  { id: 23, date: '2026-05-19', city: 'Athens',      country: 'Greece',     phase: 'Europe',   summary: 'Transfer to airport and fly home to Utah — safe travels!',                                                                     timezone: 'Europe/Athens' },
];

export const activities = [

  // ─── DAY 1 — April 27, Provo ───
  { id: 1, dayId: 1, time: '18:00', title: 'Kickoff Dinner', category: 'Food', location: 'Mattson\'s House, 1101 Elm Ave, Provo', mapsUrl: '', notes: 'Dress nicely. The adventure officially starts here!', showStudents: true },

  // ─── DAY 2 — April 28, Provo ───
  { id: 2, dayId: 2, time: '08:00', title: 'Morning Workshop', category: 'Company Visit', location: 'EB Event Space', mapsUrl: '', notes: 'Dr. Mattson and Dr. Salmon. Runs until noon.', showStudents: true },
  { id: 3, dayId: 2, time: '12:00', title: 'Lunch', category: 'Food', location: 'EB Event Space', mapsUrl: '', notes: 'Blue Ribbon Box Lunch — ordered and paid for.', showStudents: true },
  { id: 4, dayId: 2, time: '12:00', title: 'Culture Briefing', category: 'Cultural', location: 'EB Event Space', mapsUrl: '', notes: 'Malcolm Botto — what to expect culturally across Europe. Lunch purchased for Malcolm.', showStudents: true },
  { id: 5, dayId: 2, time: '13:00', title: 'Safety Briefing', category: 'Cultural', location: 'EB Event Space', mapsUrl: '', notes: 'Olivia Toone — travel safety protocols. Lunch purchased for Olivia.', showStudents: true },
  { id: 6, dayId: 2, time: '14:00', title: 'Afternoon Workshop', category: 'Company Visit', location: 'EB Event Space', mapsUrl: '', notes: 'Dr. Mattson and Dr. Salmon. Runs until 5 PM.', showStudents: true },

  // ─── DAY 3 — April 29, Provo ───
  { id: 7, dayId: 3, time: '08:00', title: 'Morning Workshop', category: 'Company Visit', location: 'EB Event Space', mapsUrl: '', notes: '', showStudents: true },
  { id: 8, dayId: 3, time: '10:00', title: 'Pick Up Vans', category: 'Transport', location: 'BYU Motor Pool', mapsUrl: '', notes: 'Professors only.', showStudents: false },
  { id: 9, dayId: 3, time: '12:15', title: 'Lunch at Sportellis', category: 'Food', location: 'Sportellis, Provo', mapsUrl: '', notes: 'BYU vans. Arrive ~12:30 PM.', showStudents: true },
  { id: 10, dayId: 3, time: '13:30', title: 'Hall Labs Visit', category: 'Company Visit', location: 'Hall Labs, Provo', mapsUrl: '', notes: 'BYU vans.', showStudents: true },
  { id: 11, dayId: 3, time: '15:15', title: 'Vanderhall Visit', category: 'Company Visit', location: 'Vanderhall', mapsUrl: '', notes: 'BYU vans. Arrive ~3:30 PM.', showStudents: true },
  { id: 12, dayId: 3, time: '17:30', title: 'Return to BYU', category: 'Transport', location: 'EB East Parking Lot', mapsUrl: '', notes: 'BYU vans.', showStudents: false },

  // ─── DAY 4 — April 30, Provo ───
  { id: 13, dayId: 4, time: '08:00', title: 'Workshop — The Launch', category: 'Company Visit', location: 'HBLL 3714', mapsUrl: '', notes: '', showStudents: true },
  { id: 14, dayId: 4, time: '09:40', title: 'Rocketship Visit', category: 'Company Visit', location: 'Rocketship, Provo', mapsUrl: '', notes: 'BYU vans. Arrive ~10:00 AM.', showStudents: true },
  { id: 15, dayId: 4, time: '12:00', title: 'Lunch in Pioneer Park', category: 'Food', location: 'Pioneer Park, Provo', mapsUrl: '', notes: '🥪 Bring your own lunch. BYU vans.', showStudents: true },
  { id: 16, dayId: 4, time: '12:45', title: 'Amano Chocolate Visit', category: 'Company Visit', location: '1078 S 250 E, Provo, UT 84601', mapsUrl: '', notes: 'BYU vans. Arrive ~1:00 PM.', showStudents: true },
  { id: 17, dayId: 4, time: '14:40', title: 'Blendtec Visit', category: 'Company Visit', location: 'Blendtec, Orem', mapsUrl: '', notes: 'BYU vans. Arrive ~3:00 PM.', showStudents: true },
  { id: 18, dayId: 4, time: '17:30', title: 'Return to BYU + Drop Off Vans', category: 'Transport', location: 'BYU Motor Pool', mapsUrl: '', notes: 'Professors drop off vans at Motor Pool.', showStudents: false },

  // ─── DAY 5 — May 1, SLC ───
  { id: 19, dayId: 5, time: '10:00', title: 'Final Workshop', category: 'Company Visit', location: 'EB East Lawn', mapsUrl: '', notes: 'Last session before departure.', showStudents: true },
  { id: 20, dayId: 5, time: '11:10', title: 'UVX to FrontRunner', category: 'Transport', location: 'UVX South Campus', mapsUrl: '', notes: 'Walk from EB East Lawn. Departs 11:10 AM — do not be late. 🥪 Bring lunch or buy at SLC airport.', showStudents: true },
  { id: 21, dayId: 5, time: '11:46', title: 'FrontRunner to SLC Airport', category: 'Transport', location: 'Provo Central Station', mapsUrl: '', notes: 'Allow plenty of time for check-in and security.', showStudents: false },
  { id: 22, dayId: 5, time: '16:20', title: 'Fly to Amsterdam', category: 'Transport', location: 'SLC Airport', mapsUrl: '', notes: 'Delta DL56. Overnight flight — arrives Amsterdam 10:15 AM May 2.', showStudents: true },

  // ─── DAY 6 — May 2, Venice ───
  { id: 23, dayId: 6, time: '11:25', title: 'Fly AMS → Venice', category: 'Transport', location: 'Amsterdam Schiphol Airport', mapsUrl: '', notes: 'KLM/Delta flight 9223. Arrives Venice 1:10 PM.', showStudents: true },
  { id: 24, dayId: 6, time: '13:50', title: 'Alilaguna Blue Line to Hotel', category: 'Transport', location: 'VCE Airport', mapsUrl: '', notes: 'Take 1:50 PM or 2:20 PM water bus. €18 per person. ~48 min journey.', showStudents: false },
  { id: 25, dayId: 6, time: '15:45', title: 'Da Vinci Museum', category: 'Cultural', location: 'Campo S. Rocco 3052, Venice', mapsUrl: 'https://maps.app.goo.gl/JFge2Yfk8RZip1HK9', notes: 'Buy tickets in person at the venue. Arrive ~4:15 PM.', showStudents: true },
  { id: 26, dayId: 6, time: '18:15', title: 'Gondola Ride', category: 'Cultural', location: 'Gondola Station S. Tomà, Venice', mapsUrl: 'https://maps.app.goo.gl/a5dg5AKaJ1CHYJ2t7', notes: '4 gondolas for the group. Pay on site. ~30 min ride.', showStudents: true },
  { id: 27, dayId: 6, time: '19:15', title: 'Rialto Bridge Sunset', category: 'Cultural', location: 'Ponte di Rialto, Venice', mapsUrl: 'https://maps.app.goo.gl/5K3UFmxmi9j8Bocw9', notes: 'Free. Sunset ~7:53 PM in May. Golden hour views over the Grand Canal.', showStudents: true },
  { id: 28, dayId: 6, time: '20:00', title: 'Free Time + Dinner', category: 'Free Time', location: 'Venice', mapsUrl: '', notes: 'Find dinner on your own. Explore the canals.', showStudents: true },
  { id: 29, dayId: 6, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Casa Cardinal Piazza (Monastery), Cannaregio 3539/a', mapsUrl: '', notes: 'Be back by 10:30 PM.', showStudents: true },

  // ─── DAY 7 — May 3, Venice ───
  { id: 30, dayId: 7, time: '08:15', title: 'Church — Mestre Ward', category: 'Cultural', location: 'Via Castellana 124C, Zelarino', mapsUrl: 'https://maps.app.goo.gl/z5D8Q4vySCnJM4KC8', notes: 'Bishop expecting the group. Italian language services at 9:30 AM. Take boat/bus.', showStudents: true },
  { id: 31, dayId: 7, time: '12:00', title: 'Transit to Rialto Area', category: 'Transport', location: 'Zelarino → Ruga dei Spezieri, Venice', mapsUrl: 'https://maps.app.goo.gl/R5zn9ELUWDm9serB8', notes: 'Bus/boat back to Venice. Good lunch area near Rialto.', showStudents: false },
  { id: 32, dayId: 7, time: '13:00', title: 'Free Time + Lunch', category: 'Free Time', location: 'Bar Rialto da Lollo area, Venice', mapsUrl: 'https://maps.app.goo.gl/tNrxfjEwxhGrXzKE8', notes: 'Lunch on your own. Walk toward Saint Mark\'s.', showStudents: true },
  { id: 33, dayId: 7, time: '15:00', title: 'Saint Mark\'s Basilica', category: 'Cultural', location: 'Piazza San Marco, Venice', mapsUrl: '', notes: 'Tickets pre-purchased.', showStudents: true },
  { id: 34, dayId: 7, time: '16:00', title: 'Saint Mark\'s Bell Tower', category: 'Cultural', location: 'Saint Mark\'s Campanile, Venice', mapsUrl: '', notes: 'Tickets pre-purchased. Elevator available. Stunning 360° views over Venice.', showStudents: true },
  { id: 35, dayId: 7, time: '17:00', title: 'Free Time + Dinner', category: 'Free Time', location: 'Venice', mapsUrl: '', notes: 'Walk toward the Vivaldi venue by 8 PM.', showStudents: true },
  { id: 36, dayId: 7, time: '20:30', title: 'Vivaldi Concert', category: 'Cultural', location: 'Scuola Grande San Teodoro, Venice', mapsUrl: 'https://maps.app.goo.gl/e6TCWaiALrYAu7yQ9', notes: 'Tickets pre-purchased. Smart casual dress.', showStudents: true },
  { id: 37, dayId: 7, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Casa Cardinal Piazza (Monastery)', mapsUrl: 'https://maps.app.goo.gl/HgkAgiYbCXgU4h13A', notes: 'Be back by 10:30 PM.', showStudents: true },

  // ─── DAY 8 — May 4, Venice → Ljubljana ───
  { id: 38, dayId: 8, time: '09:00', title: 'AAV Barbini Venetian Mirrors', category: 'Company Visit', location: 'Calle Dietro Gli Orti 7, Murano', mapsUrl: 'https://maps.app.goo.gl/pDtKuBZhCc2yEQMFA', notes: 'Walking/Ferry. Keep luggage at hotel until 3 PM.', showStudents: true },
  { id: 39, dayId: 8, time: '12:30', title: 'Return to Venice + Lunch', category: 'Food', location: 'Campo S. Giacomo dell\'Orio, Venice', mapsUrl: '', notes: 'Grocery store lunch. Public transport back.', showStudents: true },
  { id: 40, dayId: 8, time: '13:30', title: 'Tessitura Bevilacqua', category: 'Company Visit', location: 'Santa Croce 1320, Venice', mapsUrl: '', notes: 'Historic handwoven velvet manufacturer since 1875. Pay on site.', showStudents: true },
  { id: 41, dayId: 8, time: '15:15', title: 'Return to Hotel — Pick Up Luggage', category: 'Transport', location: 'Hotel → Tronchetto', mapsUrl: 'https://maps.app.goo.gl/aNozdHfzHKp9xSrp7', notes: 'Collect bags then take water ferry to Tronchetto bus station.', showStudents: false },
  { id: 42, dayId: 8, time: '16:30', title: 'Drive to Ljubljana', category: 'Transport', location: 'Tronchetto → Ljubljana', mapsUrl: 'https://maps.app.goo.gl/izwnfnFG6tsN8ekT9', notes: 'Coach. Arrive ~7:30 PM. Note: early 4:30 AM departure listed in itinerary may reflect bus time zone.', showStudents: false },
  { id: 43, dayId: 8, time: '20:00', title: '🛒 Buy Lunch for Tomorrow', category: 'Free Time', location: 'Ljubljana — various grocery stores', mapsUrl: '', notes: 'Grocery stores close at 9 or 10 PM. Buy packed lunch for tomorrow now!', showStudents: true },
  { id: 44, dayId: 8, time: '20:30', title: 'Dinner at Figovec', category: 'Food', location: 'Figovec, Ljubljana', mapsUrl: '', notes: 'Optional — John coordinating. Traditional Slovenian dinner.', showStudents: true },
  { id: 45, dayId: 8, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Ibis Styles Ljubljana, Miklošičeva cesta 9', mapsUrl: '', notes: 'Be back by 10:30 PM.', showStudents: true },

  // ─── DAY 9 — May 5, Ljubljana / Lake Bled ───
  { id: 46, dayId: 9, time: '07:30', title: 'Depart for ELAN', category: 'Transport', location: 'Hotel → ELAN, Begunje', mapsUrl: 'https://maps.app.goo.gl/U5qotfvDyMQBf17o7', notes: 'Coach. ~34 min drive.', showStudents: false },
  { id: 47, dayId: 9, time: '09:00', title: 'ELAN Company Visit', category: 'Company Visit', location: 'ELAN, Begunje na Gorenjskem', mapsUrl: 'https://maps.app.goo.gl/U5qotfvDyMQBf17o7', notes: '2.5 hour visit to the world-famous ski factory. Ends ~11:30 AM.', showStudents: true },
  { id: 48, dayId: 9, time: '11:45', title: 'Drive to Lake Bled + Ojstrica Hike', category: 'Cultural', location: 'Ojstrica Trailhead, Lake Bled', mapsUrl: 'https://maps.app.goo.gl/aJMJt963m1XmNAFS7', notes: 'Coach to trailhead. 🥪 Lunch on bus or during hike. Arrive ~12:20 PM. Steep but short — the most iconic view of Bled. Wear proper shoes.', showStudents: true },
  { id: 49, dayId: 9, time: '13:20', title: 'Pletna Boat to Bled Island', category: 'Cultural', location: 'Velika Zaka Pletna Dock, Lake Bled', mapsUrl: '', notes: 'Church ticket pre-purchased. Purchase individual Pletna boats from locals on-site. Must leave on the 3:10 PM boat. Ring the wishing bell! ~1 hour total.', showStudents: true },
  { id: 50, dayId: 9, time: '15:50', title: 'Drive to Ljubljana', category: 'Transport', location: 'Bled → Ljubljana', mapsUrl: 'https://maps.app.goo.gl/YiubxcZQeoGhpmhR8', notes: 'Coach. ~1 hr 20 min. Arrive ~5:10 PM. Bus done at 5:30 PM.', showStudents: false },
  { id: 51, dayId: 9, time: '17:25', title: 'Triple Bridge + Dragon Bridge + Funicular', category: 'Cultural', location: 'Triple Bridge, Ljubljana', mapsUrl: 'https://maps.app.goo.gl/jHEKS6cJjmyUFLjy9', notes: 'Depart hotel at 5:30 PM. Walking tour of Ljubljana\'s iconic bridges.', showStudents: true },
  { id: 52, dayId: 9, time: '18:10', title: 'Ljubljana Castle', category: 'Cultural', location: 'Ljubljana Castle', mapsUrl: '', notes: 'Buy tickets online — 3 transactions. Purchase number: 271068. Tower, History Exhibition, Puppetry Museum.', showStudents: true },
  { id: 53, dayId: 9, time: '20:10', title: 'Funicular Down', category: 'Transport', location: 'Ljubljana Castle Funicular', mapsUrl: '', notes: 'Included in return ticket.', showStudents: false },
  { id: 54, dayId: 9, time: '20:30', title: 'Free Time — Metelkova', category: 'Free Time', location: 'Metelkova, Ljubljana', mapsUrl: 'https://maps.app.goo.gl/aaWrWg9MpwRgTLeh7', notes: 'Explore Ljubljana\'s vibrant arts district.', showStudents: true },
  { id: 55, dayId: 9, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Ibis Styles Ljubljana', mapsUrl: 'https://maps.app.goo.gl/zzHjv8wmq7kkAhni9', notes: 'Be back by 10:30 PM.', showStudents: true },

  // ─── DAY 10 — May 6, Zagreb ───
  { id: 56, dayId: 10, time: '07:30', title: 'SMM Company Visit — Maribor', category: 'Company Visit', location: 'Perhavčeva 17, Maribor, Slovenia', mapsUrl: 'https://maps.app.goo.gl/MAoMU4ZUZWS7mS328', notes: 'Coach. Arrive ~10:00 AM.', showStudents: true },
  { id: 57, dayId: 10, time: '12:30', title: 'Trakošćan Castle', category: 'Cultural', location: 'Trakošćan 4, Lepoglava, Croatia', mapsUrl: 'https://maps.app.goo.gl/gF61pFqrLaK839zHA', notes: 'Buy tickets on site — 5-10 euros. Audiotour is free. Medieval castle with beautiful lake walk. Some people walk around the lake first. Arrive ~1:30 PM.', showStudents: true },
  { id: 58, dayId: 10, time: '15:00', title: 'Drive to Zagreb', category: 'Transport', location: 'Trakošćan → Hotel Dubrovnik, Zagreb', mapsUrl: 'https://maps.app.goo.gl/bQZAaBbf92Wj2Ayx6', notes: 'Coach. Lunch on bus. Arrive ~4:30 PM.', showStudents: false },
  { id: 59, dayId: 10, time: '18:00', title: 'Zagreb Cathedral', category: 'Cultural', location: 'Cathedral of Zagreb, Kaptol 31', mapsUrl: 'https://maps.app.goo.gl/6WQeCJUbBKNigfDL6', notes: 'Possibly inside before 7 PM — may be under repair post-earthquake. Then St. Mark\'s Church nearby.', showStudents: true },
  { id: 60, dayId: 10, time: '19:00', title: 'Free Time — Tkalčićeva Street', category: 'Free Time', location: 'Tkalčićeva Street + Chocolate Museum, Zagreb', mapsUrl: '', notes: '🛒 Buy lunch for tomorrow before bed. Grocery stores close early.', showStudents: true },
  { id: 61, dayId: 10, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Hotel Dubrovnik, Ljudevita Gaja 1, Zagreb', mapsUrl: '', notes: 'Be back by 10:30 PM.', showStudents: true },

  // ─── DAY 11 — May 7, Zagreb ───
  { id: 62, dayId: 11, time: '08:30', title: 'Intis Engineering Visit', category: 'Company Visit', location: 'Velika Cesta 97, Odra, Zagreb', mapsUrl: 'https://maps.app.goo.gl/xpwcPphLVKrdCGXVA', notes: 'Coach. Arrive ~9:30 AM.', showStudents: true },
  { id: 63, dayId: 11, time: '12:00', title: 'Grocery Stop — Konzum', category: 'Food', location: 'Konzum, Odranska zavrtnica 19, Odra', mapsUrl: 'https://maps.app.goo.gl/gLHWmdqH3yMymawPA', notes: 'Buy grocery store lunch here. ~10 min stop.', showStudents: true },
  { id: 64, dayId: 11, time: '12:40', title: 'Končar Group Visit', category: 'Company Visit', location: 'KONČAR Electric Vehicles, Zagreb', mapsUrl: 'https://maps.app.goo.gl/XSKJuYLLEW3SSkgHA', notes: '1.5 hour tour. Arrive ~1:00 PM.', showStudents: true },
  { id: 65, dayId: 11, time: '15:00', title: 'Nikola Tesla Technical Museum', category: 'Cultural', location: 'Savska cesta 18, Zagreb', mapsUrl: 'https://maps.app.goo.gl/VefxoUWpSvQLh3cJ7', notes: 'Buy tickets on site — group rate. tmnt.hr. Short ~1 hour visit. Closes 5 PM. Arrive ~4:00 PM.', showStudents: true },
  { id: 66, dayId: 11, time: '17:15', title: 'Group Dinner — La Štruk', category: 'Food', location: 'La Štruk, Skalinska ul. 5, Zagreb', mapsUrl: 'https://maps.app.goo.gl/WdZiSm2sEBT9LRMXA', notes: 'Reservation confirmed. Arrive ~6:00 PM.', showStudents: true },
  { id: 67, dayId: 11, time: '20:00', title: 'Free Time', category: 'Free Time', location: 'Zagreb', mapsUrl: '', notes: '🛒 Buy packed lunch for tomorrow before bed!', showStudents: true },
  { id: 68, dayId: 11, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Hotel Dubrovnik, Zagreb', mapsUrl: '', notes: 'Be back by 10:30 PM.', showStudents: true },

  // ─── DAY 12 — May 8, Sarajevo (10+ hours) ───
  { id: 69, dayId: 12, time: '06:00', title: 'HSTec Visit — Zadar', category: 'Company Visit', location: 'Zagrebačka 100, Zadar, Croatia', mapsUrl: 'https://maps.app.goo.gl/xR7Rqg1z7uvxRxQn7', notes: '⚠️ Very early departure. Pack bags the night before. Coach. Arrive ~10:00 AM.', showStudents: true },
  { id: 70, dayId: 12, time: '12:30', title: 'Drive to Split — Lunch on Bus', category: 'Food', location: 'Zadar → Split', mapsUrl: 'https://maps.app.goo.gl/PTkJ2dfnTFAUp2Mh9', notes: '🥪 Lunch on bus. Coach. Arrive Split ~2:30 PM.', showStudents: true },
  { id: 71, dayId: 12, time: '14:30', title: 'Split — Beach + Diocletian\'s Palace + Riva', category: 'Cultural', location: 'Split, Croatia', mapsUrl: '', notes: 'Free time for a few hours — swim, walk Diocletian\'s Palace and the Riva promenade.', showStudents: true },
  { id: 72, dayId: 12, time: '17:00', title: 'Kravica Waterfalls', category: 'Cultural', location: 'Kravica Waterfall, Bosnia', mapsUrl: 'https://maps.app.goo.gl/r6fEioJixVqENWMT8', notes: 'Buy tickets on site — €10 per person. Stunning natural waterfall. Bring swimwear. Arrive ~6:30 PM.', showStudents: true },
  { id: 73, dayId: 12, time: '20:00', title: 'Drive to Sarajevo', category: 'Transport', location: 'Kravica → Hotel Holiday Europa, Sarajevo', mapsUrl: '', notes: 'Coach. ~3 hour drive. Arrive ~11:00 PM. Very long day — 10+ hours total. Curfew 10:30 PM (flexible due to travel).', showStudents: false },

  // ─── DAY 13 — May 9, Sarajevo ───
  { id: 74, dayId: 13, time: '08:45', title: 'War Excursion', category: 'Cultural', location: 'Meet in Hotel Lobby', mapsUrl: '', notes: 'Meet in hotel lobby at 8:45 AM. Excursion vehicle provided. Departs ~9:00 AM.', showStudents: true },
  { id: 75, dayId: 13, time: '13:30', title: 'Free Time (Laundry Day!)', category: 'Free Time', location: 'Sarajevo', mapsUrl: '', notes: 'Great opportunity to do laundry. Ask hotel about laundry services.', showStudents: true },
  { id: 76, dayId: 13, time: '19:10', title: 'Yellow Fortress at Sunset', category: 'Cultural', location: 'Yellow Fortress, Sarajevo', mapsUrl: 'https://maps.app.goo.gl/6ftPRygDk8CX4efa8', notes: 'Sunset 7:57 PM. If leaving from hotel, 20 min walk. Arrive ~7:30 PM. One of Sarajevo\'s most beautiful spots.', showStudents: true },
  { id: 77, dayId: 13, time: '20:30', title: 'Free Time', category: 'Free Time', location: 'Sarajevo', mapsUrl: '', notes: '', showStudents: true },
  { id: 78, dayId: 13, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Hotel Holiday Europa, Vladislava Skarića 5', mapsUrl: '', notes: 'Be back by 10:30 PM.', showStudents: true },

  // ─── DAY 14 — May 10, Sarajevo ───
  { id: 79, dayId: 14, time: '09:35', title: 'Church — Sarajevo Branch', category: 'Cultural', location: 'Mehmeda Spahe 24, Sarajevo', mapsUrl: 'https://maps.app.goo.gl/r2L6vKCF53vxEPLD8', notes: 'Croatian language services at 10:00 AM. Walk from hotel.', showStudents: true },
  { id: 80, dayId: 14, time: '12:30', title: 'Free Time + Lunch', category: 'Free Time', location: 'Sarajevo', mapsUrl: '', notes: 'Lunch on your own in Sarajevo.', showStudents: true },
  { id: 81, dayId: 14, time: '13:45', title: 'Assassination Site', category: 'Cultural', location: 'Latin Bridge, Sarajevo', mapsUrl: 'https://maps.app.goo.gl/4afJPrriXqgiyPoN8', notes: 'Meet at hotel lobby 1:35 PM. Walk together. Site of the 1914 assassination of Archduke Franz Ferdinand — the event that triggered WWI.', showStudents: true },
  { id: 82, dayId: 14, time: '14:20', title: 'Ars Aevi Modern Art Museum', category: 'Cultural', location: 'Ars Aevi, Brodac 1, Sarajevo', mapsUrl: 'https://maps.app.goo.gl/nyDbibAmQyxc5iaw9', notes: 'Walk from Assassination Site. Arrive ~2:30 PM.', showStudents: true },
  { id: 83, dayId: 14, time: '15:45', title: 'Sacred Heart Cathedral', category: 'Cultural', location: 'Trg Fra Grge Martića 2, Sarajevo', mapsUrl: 'https://maps.app.goo.gl/aCAnGRh3GZDme9zj7', notes: 'Quick visit and photo stop. Walk from Ars Aevi. Arrive ~4:00 PM.', showStudents: true },
  { id: 84, dayId: 14, time: '16:30', title: 'Planet Sarajevo Multimedia Museum', category: 'Cultural', location: 'Maršala Tita 56, Sarajevo', mapsUrl: 'https://maps.app.goo.gl/Rks8m41tmnLPFiLr6', notes: 'Walk from Cathedral. Arrive ~4:40 PM.', showStudents: true },
  { id: 85, dayId: 14, time: '18:40', title: 'Group Dinner — Nana Kuhinja', category: 'Food', location: 'Kundurdžiluk 35, Sarajevo', mapsUrl: 'https://maps.app.goo.gl/Uu95QUn6gFC3krEk7', notes: '⚠️ Reservation needed. Arrive ~7:00 PM.', showStudents: true },
  { id: 86, dayId: 14, time: '21:00', title: 'Free Time + Buy Lunch', category: 'Free Time', location: 'Mula Mustafe Bašeskije 26, Sarajevo', mapsUrl: 'https://maps.app.goo.gl/nqsLXJLmiyjwEe6m6', notes: '🛒 Buy packed lunch for tomorrow before stores close.', showStudents: true },
  { id: 87, dayId: 14, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Hotel Holiday Europa', mapsUrl: '', notes: 'Be back by 10:30 PM.', showStudents: true },

  // ─── DAY 15 — May 11, Sarajevo ───
  { id: 88, dayId: 15, time: '08:00', title: 'Kinetic Company Visit', category: 'Company Visit', location: 'Tvornička 3, Sarajevo', mapsUrl: 'https://maps.app.goo.gl/VMyy7rxGzmkfgLMX6', notes: 'Coach. Arrive ~9:00 AM.', showStudents: true },
  { id: 89, dayId: 15, time: '11:30', title: 'Lunch on Bus', category: 'Food', location: 'Bus', mapsUrl: '', notes: '🥪 Packed lunch from last night.', showStudents: true },
  { id: 90, dayId: 15, time: '11:30', title: 'AVDIC Violins — Tuzla', category: 'Company Visit', location: 'Pavla Goranina Ilije 108, Tuzla', mapsUrl: 'https://maps.app.goo.gl/3qUZe98G1uyXtBkc7', notes: 'Coach. Handcrafted string instrument workshop — a truly unique visit. Arrive ~1:30 PM.', showStudents: true },
  { id: 91, dayId: 15, time: '15:30', title: 'Return to Hotel', category: 'Transport', location: 'Sarajevo Hotel', mapsUrl: '', notes: 'Coach. Arrive ~5:30 PM.', showStudents: false },
  { id: 92, dayId: 15, time: '18:00', title: 'Free Time + Buy Lunch', category: 'Free Time', location: 'Sarajevo', mapsUrl: '', notes: '🛒 Buy packed lunch for tomorrow before bed.', showStudents: true },

  // ─── DAY 16 — May 12, Kotor (10+ hours) ───
  { id: 93, dayId: 16, time: '06:30', title: 'Aluminij Visit + Mostar Bridge', category: 'Company Visit', location: 'Bačevići, Mostar, Bosnia', mapsUrl: 'https://maps.app.goo.gl/SoGtb9SFsFh8Sdci9', notes: '🥪 Packed lunch. See the iconic Stari Most (Old Bridge) while in Mostar — do not skip this. Arrive ~9:30 AM.', showStudents: true },
  { id: 94, dayId: 16, time: '10:30', title: 'Cultural Stop — Dubrovnik', category: 'Cultural', location: 'Ul. od Tabakarije 29, Dubrovnik', mapsUrl: '', notes: 'Brief stop in the famous walled city on the Adriatic coast.', showStudents: true },
  { id: 95, dayId: 16, time: '12:00', title: 'Adriatic 42 — Bijela', category: 'Company Visit', location: 'Bijela, Montenegro', mapsUrl: 'https://maps.app.goo.gl/dWug6YbHkK2JUQ6f8', notes: 'Boat manufacturer visit. Arrive ~3:00 PM.', showStudents: true },
  { id: 96, dayId: 16, time: '17:30', title: 'Drive to Kotor', category: 'Transport', location: 'Bijela → Kotor', mapsUrl: 'https://maps.app.goo.gl/qETQig1aAcgJCw5NA', notes: 'Coach. ~1 hour along the stunning Bay of Kotor. Arrive ~6:30 PM.', showStudents: false },
  { id: 97, dayId: 16, time: '19:00', title: 'St. John Fortress Night Hike', category: 'Cultural', location: 'Kotor Fortress, Montenegro', mapsUrl: 'https://maps.app.goo.gl/TBRRYCkTPjjZHP6z8', notes: '⚠️ BRING FLASHLIGHTS. Buy tickets on site. Meet first at Rooftop Terrace Hippocampus. Spectacular night views over the Bay of Kotor. Arrive ~7:15 PM.', showStudents: true },
  { id: 98, dayId: 16, time: '21:00', title: 'Free Time + Dinner', category: 'Free Time', location: 'Kotor Old Town', mapsUrl: '', notes: 'Plenty of restaurants in the medieval Old Town. Long day — 10+ hours total.', showStudents: true },
  { id: 99, dayId: 16, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Hotel Hippocampus + Hotel Rendez Vous, Kotor', mapsUrl: '', notes: 'Be back by 10:30 PM. Two hotels: Kotor 489 + Pjaca od mlijeka 485.', showStudents: true },

  // ─── DAY 17 — May 13, Tirana ───
  { id: 100, dayId: 17, time: '08:30', title: 'Daido Metal Visit', category: 'Company Visit', location: 'DAIDO METAL KOTOR, Montenegro', mapsUrl: 'https://maps.app.goo.gl/7XnC3AQE7jyrbKfY6', notes: '⚠️ 7-day contact warning required before visit. Arrive ~9:00 AM.', showStudents: true },
  { id: 101, dayId: 17, time: '11:30', title: 'Drive to Tirana', category: 'Transport', location: 'Montenegro → Tirana, Albania', mapsUrl: 'https://maps.app.goo.gl/wU2jd3UNezdDpBmU6', notes: 'Coach. Long drive — arrive ~5:00 PM. Buy lunch en route.', showStudents: false },
  { id: 102, dayId: 17, time: '18:00', title: 'Albanian Night — Dinner Show', category: 'Food', location: 'Albanian Night, Tirana', mapsUrl: '', notes: 'Traditional Albanian dinner and cultural show. Pre-purchased at albaniannight.com. $62.86 with dinner. Arrive ~7:00 PM.', showStudents: true },
  { id: 103, dayId: 17, time: '20:00', title: 'Skanderbeg Square + Et\'hem Bey Mosque', category: 'Cultural', location: 'Skanderbeg Square, Tirana', mapsUrl: '', notes: 'Evening walk around Tirana\'s main square and the beautiful Et\'hem Bey Mosque.', showStudents: true },

  // ─── DAY 18 — May 14, Tirana → Athens ───
  { id: 104, dayId: 18, time: '07:30', title: 'Timak Company Visit', category: 'Company Visit', location: 'Tirana Industrial Park, Albania', mapsUrl: 'https://maps.app.goo.gl/NFG1vvVU98ivojReA', notes: 'Coach. Arrive ~9:00 AM.', showStudents: true },
  { id: 105, dayId: 18, time: '13:00', title: 'Everest SHPK Visit', category: 'Company Visit', location: 'Kamëz, Albania', mapsUrl: 'https://maps.app.goo.gl/gkUogpfgSvZ1fwyu7', notes: '⚠️ Shoe sizes needed in advance — confirm with professors. Coach. Arrive ~2:00 PM.', showStudents: true },
  { id: 106, dayId: 18, time: '16:30', title: 'Food + Airport Logistics', category: 'Food', location: 'Tirana', mapsUrl: '', notes: 'Food ~4:30 PM. Arrive at airport by 5:30 PM.', showStudents: true },
  { id: 107, dayId: 18, time: '17:30', title: 'Airport — Tirana', category: 'Transport', location: 'Tirana Airport', mapsUrl: '', notes: 'Arrive by 5:30 PM for 7:25 PM flight.', showStudents: true },
  { id: 108, dayId: 18, time: '19:25', title: 'Fly to Athens', category: 'Transport', location: 'Tirana Airport', mapsUrl: '', notes: 'Flight at 7:25 PM.', showStudents: true },
  { id: 109, dayId: 18, time: '21:30', title: 'Transfer to Hotel Athens', category: 'Transport', location: 'Athens Airport → Mitropoleos 6-8, Athens', mapsUrl: 'https://maps.app.goo.gl/V7GCd3xaUuceAqax8', notes: 'Coach from airport. Curfew 10:30 PM.', showStudents: false },

  // ─── DAY 19 — May 15, Athens ───
  { id: 110, dayId: 19, time: '09:30', title: 'Elefsis Shipyards Visit', category: 'Company Visit', location: 'Elefsina, Greece', mapsUrl: 'https://maps.app.goo.gl/LRqNDk2dYda7wyxH9', notes: '~1 hour visit. Arrive ~10:30 AM.', showStudents: true },
  { id: 111, dayId: 19, time: '11:30', title: 'Grocery Stop for Lunch', category: 'Food', location: 'Athens', mapsUrl: '', notes: 'John coordinating grocery stop.', showStudents: true },
  { id: 112, dayId: 19, time: '13:00', title: 'Askra Olive Oil Visit', category: 'Company Visit', location: 'Agias Foteinis 120, Nea Ionia, Athens', mapsUrl: 'https://maps.app.goo.gl/JkzMRdcTfpUKN9Yw6', notes: '~1.5 hour visit. Arrive ~3:00 PM.', showStudents: true },
  { id: 113, dayId: 19, time: '17:00', title: 'Dinner — Hill Athens Rooftop', category: 'Food', location: 'Hill Athens, Apostolou Pavlou 27, Athens', mapsUrl: 'https://maps.app.goo.gl/YPcw7orU8tg34GpU9', notes: 'Awaiting approval. Reservation at hillathens.gr/en/reservation/ Arrive ~7:00 PM. Spectacular views of the Acropolis.', showStudents: true },

  // ─── DAY 20 — May 16, Athens ───
  { id: 114, dayId: 20, time: '08:00', title: 'Acropolis', category: 'Cultural', location: 'Acropolis, Athens', mapsUrl: 'https://maps.app.goo.gl/wFECYrDQRUZ13KS37', notes: 'Registration required in advance. The Parthenon, Erechtheion, Temple of Athena Nike.', showStudents: true },
  { id: 115, dayId: 20, time: '09:40', title: 'Acropolis Museum', category: 'Cultural', location: 'Acropolis Museum, Athens', mapsUrl: 'https://maps.app.goo.gl/QWn84JsXgnxDMhAP9', notes: 'Buy tickets on site. Group tickets at theacropolismuseum.gr. Arrive ~10:00 AM.', showStudents: true },
  { id: 116, dayId: 20, time: '12:00', title: 'Lunch — O Gyros Pou Gyrevis', category: 'Food', location: 'Athens', mapsUrl: 'https://maps.app.goo.gl/v7wNtLzSpfBv7niz6', notes: 'Students buy own lunch.', showStudents: true },
  { id: 117, dayId: 20, time: '13:00', title: 'Temple of Olympian Zeus', category: 'Cultural', location: 'Athens', mapsUrl: 'https://maps.app.goo.gl/4dnv8ZVtBr7z1xQp8', notes: '', showStudents: true },
  { id: 118, dayId: 20, time: '14:30', title: 'Boat Tour', category: 'Cultural', location: 'Athens', mapsUrl: 'https://maps.app.goo.gl/XdccKcopK7eU1dD67', notes: 'Needs planning. Registration pending.', showStudents: true },
  { id: 119, dayId: 20, time: '16:30', title: 'Team Presentations', category: 'Company Visit', location: 'Athens', mapsUrl: '', notes: 'Share what you learned from the trip.', showStudents: true },

  // ─── DAY 21 — May 17, Athens ───
  { id: 120, dayId: 21, time: '09:15', title: 'Church — Halandri Branch', category: 'Cultural', location: 'Erifilis 16, Halandri, Athens', mapsUrl: 'https://maps.app.goo.gl/U93zQUXGe65Bu6iC7', notes: 'Greek language services at 10:00 AM.', showStudents: true },
  { id: 121, dayId: 21, time: '12:10', title: 'Students Buy Lunch', category: 'Food', location: 'Athens', mapsUrl: '', notes: 'Sky Bar or Mpirmpilo — awaiting confirmation.', showStudents: true },
  { id: 122, dayId: 21, time: '12:30', title: 'Lycabettus Hill Funicular', category: 'Cultural', location: 'Lycabettus Hill, Athens', mapsUrl: 'https://maps.app.goo.gl/dBzEwdzTw7TMo6aB6', notes: '360° views over Athens and the Acropolis. Funicular available. 12:30 PM or 1:00 PM.', showStudents: true },
  { id: 123, dayId: 21, time: '14:30', title: 'Poseidon Excursion / Beach', category: 'Cultural', location: 'Athens coast', mapsUrl: 'https://maps.app.goo.gl/DWSe23trKFpQpUgC8', notes: 'Needs planning. Cape Sounion / Temple of Poseidon excursion or beach day.', showStudents: true },

  // ─── DAY 22 — May 18, Athens ───
  { id: 124, dayId: 22, time: '08:15', title: 'Get 3D Visit', category: 'Company Visit', location: 'Nea Ethniki Odos 2, Aghioi Anargiroi, Athens', mapsUrl: 'https://maps.app.goo.gl/pfXdQRzQEnN5TmJq6', notes: '45 min visit. Arrive ~9:00 AM.', showStudents: true },
  { id: 125, dayId: 22, time: '12:00', title: 'Skaramangas Shipyards Visit', category: 'Company Visit', location: '3 Palaska Str, Skaramangas', mapsUrl: 'https://maps.app.goo.gl/B6LLrtFfke9VtMP5A', notes: '30 min visit. Lunch on bus. Arrive ~1:00 PM.', showStudents: true },
  { id: 126, dayId: 22, time: '14:00', title: 'E-Bike Tour', category: 'Cultural', location: 'Athens', mapsUrl: '', notes: 'Needs planning — details TBC.', showStudents: true },
  { id: 127, dayId: 22, time: '19:00', title: 'Final Group Dinner', category: 'Food', location: 'Athens', mapsUrl: '', notes: 'Needs planning. Last dinner together — celebrate the journey!', showStudents: true },
  { id: 128, dayId: 22, time: '21:00', title: 'Free Time — Last Night in Europe', category: 'Free Time', location: 'Athens', mapsUrl: '', notes: 'Final evening. Explore the Plaka neighborhood, sip coffee, watch the city lights.', showStudents: true },

  // ─── DAY 23 — May 19, Athens → Home ───
  { id: 129, dayId: 23, time: '06:00', title: 'Transfer to Athens Airport', category: 'Transport', location: 'Hotel → Athens International Airport', mapsUrl: '', notes: 'Check flight details with professors. Allow plenty of time.', showStudents: true },
  { id: 130, dayId: 23, time: '09:00', title: 'Fly Home to Utah', category: 'Transport', location: 'Athens Airport', mapsUrl: '', notes: 'Safe travels! You did it.', showStudents: true },
];

export const quotes = [
  { dayId: 1,  text: 'Look for what you notice but no one else sees.' },
  { dayId: 2,  text: 'Zoom in and obsess. Zoom out and observe. We get to choose.' },
  { dayId: 3,  text: 'All that matters is that you are making something you love, to the best of your ability, here and now.' },
  { dayId: 4,  text: 'The real work of the artist is a way of being in the world.' },
  { dayId: 5,  text: 'Creativity is a fundamental aspect of being human. It is our birthright, and it\'s for all of us.' },
  { dayId: 6,  text: 'We can\'t force greatness to happen. All we can do is invite it in and await it actively.' },
  { dayId: 7,  text: 'Failure is the information you need to get where you\'re going.' },
  { dayId: 8,  text: 'To hone your craft is to honor creation.' },
  { dayId: 9,  text: 'Beware of the assumption that the way you work is the best way simply because it\'s the way you\'ve done it before.' },
  { dayId: 10, text: 'The person who makes something today isn\'t the same person who returns to the work tomorrow.' },
  { dayId: 11, text: 'As artists, we seek to restore our childlike perception: a more innocent state of wonder and appreciation.' },
  { dayId: 12, text: 'We are all translators for messages the universe is broadcasting.' },
  { dayId: 13, text: 'Turning something from an idea into a reality can make it seem smaller. The imagination has no limits. The physical world does.' },
  { dayId: 14, text: 'In terms of priority, inspiration comes first. You come next. The audience comes last.' },
  { dayId: 15, text: 'A river of material flows through us. When we share our works and our ideas, they are replenished.' },
  { dayId: 16, text: 'With each story we tell ourselves, we negate possibility.' },
  { dayId: 17, text: 'Being an artist means to be continually asking, \'How can it be better?\' whatever it is.' },
  { dayId: 18, text: 'Sharing art is the price of making it.' },
  { dayId: 19, text: 'To live as an artist is a way of being in the world. A way of perceiving. A practice of paying attention.' },
  { dayId: 20, text: 'Awareness is not a state you force. It\'s something you actively allow to happen.' },
  { dayId: 21, text: 'We are all participating in a larger creative act we are not conducting. We are being conducted.' },
  { dayId: 22, text: 'Sometimes it can be the most ordinary moment that creates an extraordinary piece of art.' },
  { dayId: 23, text: 'Use what\'s helpful. Let go of the rest.' },
];

export const funFacts = [
  { dayId: 1,  text: 'BYU was founded in 1875 as Brigham Young Academy. It became a university in 1903 and is now one of the largest religious universities in the world with over 33,000 students.' },
  { dayId: 2,  text: 'Provo is nicknamed "Silicon Slopes" — Utah\'s tech industry has grown so fast it now rivals Silicon Valley in startup density per capita.' },
  { dayId: 3,  text: 'The Y on the mountain above Provo is 380 feet tall and 130 feet wide. Students hike up annually to whitewash it — a tradition since 1906.' },
  { dayId: 4,  text: 'Blendtec\'s "Will It Blend?" YouTube series started as an internal test and became one of the first viral marketing campaigns in history with over 300 million views.' },
  { dayId: 5,  text: 'The flight from Salt Lake City to Amsterdam crosses Greenland and the Arctic Ocean. You\'ll fly over some of the most remote and spectacular ice landscapes on Earth.' },
  { dayId: 6,  text: 'Venice is built on 118 small islands connected by 400 bridges. The city has no roads — every journey is made by boat or on foot. The whole city is slowly sinking about 1-2mm per year.' },
  { dayId: 7,  text: 'The Vivaldi concert venue, Scuola Grande di San Teodoro, was built in 1552. Antonio Vivaldi himself performed in Venice churches just like this one in the early 1700s.' },
  { dayId: 8,  text: 'Miramare Castle was built in 1860 for Austrian Archduke Maximilian. He lived there only 6 years before becoming Emperor of Mexico, where he was executed in 1867.' },
  { dayId: 9,  text: 'Lake Bled\'s turquoise color comes from glacial sediment. The island church has been a pilgrimage site for over 1,000 years. The wishing bell in the church tower is said to grant wishes.' },
  { dayId: 10, text: 'Trakošćan Castle has been continuously inhabited since the 13th century and was owned by the same Croatian noble family, the Drašković family, for over 400 years.' },
  { dayId: 11, text: 'Nikola Tesla was born in Croatia in 1856. His AC electrical system powers virtually every home and building in the world today — his inventions literally light up civilization.' },
  { dayId: 12, text: 'Diocletian\'s Palace in Split is one of the best-preserved Roman ruins in the world. About 3,000 people actually live and work inside the ancient palace walls today.' },
  { dayId: 13, text: 'Sarajevo is nicknamed "the Jerusalem of Europe" because a mosque, Catholic cathedral, Orthodox church, and Jewish synagogue all stand within a few hundred meters of each other.' },
  { dayId: 14, text: 'The Latin Bridge in Sarajevo is where Archduke Franz Ferdinand was assassinated in 1914, triggering a chain of events that led to World War I and the deaths of over 20 million people.' },
  { dayId: 15, text: 'The AVDIC family has been making violins in Bosnia for three generations. A handcrafted AVDIC violin can take up to 200 hours to make and is played by professional musicians worldwide.' },
  { dayId: 16, text: 'The Stari Most (Old Bridge) in Mostar was built by the Ottomans in 1566 and stood for 427 years. It was deliberately destroyed in 1993 during the war and reopened in 2004 after reconstruction.' },
  { dayId: 17, text: 'Albania was the most isolated country in the world during communism (1944–1991). It built over 170,000 concrete bunkers — one for every 4 citizens — that still dot the landscape today.' },
  { dayId: 18, text: 'Albania only opened its borders to tourism in 1990. Before that, it was illegal for Albanians to own a car, practice religion, or have contact with foreigners.' },
  { dayId: 19, text: 'Athens has been continuously inhabited for over 5,000 years, making it one of the world\'s oldest cities. The name "Athens" is older than written history — its origin is unknown.' },
  { dayId: 20, text: 'The Parthenon was built between 447 and 432 BC without mortar — every stone was precisely cut to fit together using iron clamps. It has survived for nearly 2,500 years.' },
  { dayId: 21, text: 'The Temple of Poseidon at Cape Sounion sits on a cliff 60 meters above the sea. Lord Byron carved his name into one of the columns during his visit in 1810 — it\'s still there.' },
  { dayId: 22, text: 'Greece has more archaeological museums than any other country in the world. It is estimated that 70% of all ancient artifacts in existence are Greek.' },
  { dayId: 23, text: 'You have now traveled through 8 countries, 15+ cities, visited 20+ companies, and covered roughly 6,000 miles across Europe. The world looks different now than it did 23 days ago.' },
];

export const emergencyContacts = [
  { label: 'European Emergency', phone: '112', notes: 'Works in all EU and Balkan countries for police, fire, and ambulance' },
  { label: 'US Embassy Italy (Rome)', phone: '+39 06 46741', notes: 'Passport loss or emergency in Italy' },
  { label: 'US Embassy Slovenia (Ljubljana)', phone: '+386 1 200 5500', notes: 'Passport loss or emergency in Slovenia' },
  { label: 'US Embassy Croatia (Zagreb)', phone: '+385 1 661 2200', notes: 'Passport loss or emergency in Croatia' },
  { label: 'US Embassy Bosnia (Sarajevo)', phone: '+387 33 704 000', notes: 'Passport loss or emergency in Bosnia' },
  { label: 'US Embassy Montenegro (Podgorica)', phone: '+382 20 410 500', notes: 'Passport loss or emergency in Montenegro' },
  { label: 'US Embassy Albania (Tirana)', phone: '+355 4 224 7285', notes: 'Passport loss or emergency in Albania' },
  { label: 'US Embassy Greece (Athens)', phone: '+30 210 720 2490', notes: 'Passport loss or emergency in Greece' },
  { label: 'State Dept Overseas Hotline', phone: '+1 202 501 4444', notes: '24-hour emergency line for US citizens abroad' },
  { label: 'Trip Leader — Isaac', phone: 'TBD', notes: 'Add before departure' },
  { label: 'Bus Driver', phone: 'TBD', notes: 'Add before departure' },
  { label: 'Dr. Mattson', phone: 'TBD', notes: 'Add before departure' },
  { label: 'Dr. Salmon', phone: 'TBD', notes: 'Add before departure' },
  { label: 'Venice Hotel — Casa Cardinal Piazza', phone: 'TBD', notes: 'Sestiere Cannaregio 3539/a, Venice' },
  { label: 'Ljubljana Hotel — Ibis Styles', phone: 'TBD', notes: 'Miklošičeva cesta 9, Ljubljana' },
  { label: 'Zagreb Hotel — Hotel Dubrovnik', phone: 'TBD', notes: 'Ljudevita Gaja 1, Zagreb' },
  { label: 'Sarajevo Hotel — Holiday Europa', phone: 'TBD', notes: 'Vladislava Skarića 5, Sarajevo' },
  { label: 'Kotor Hotel — Hippocampus + Rendez Vous', phone: 'TBD', notes: 'Kotor 489 + Pjaca od mlijeka 485' },
  { label: 'Tirana Hotel', phone: 'TBD', notes: 'Ambasador 1, Rruga Ismail Qemali, Tirana' },
  { label: 'Athens Hotel', phone: 'TBD', notes: 'Mitropoleos 6-8, Athens' },
  { label: 'Hospital Venice', phone: '+39 041 529 4111', notes: 'Ospedale Civile SS. Giovanni e Paolo' },
  { label: 'Hospital Ljubljana', phone: '+386 1 522 5050', notes: 'UKC Ljubljana' },
  { label: 'Hospital Zagreb', phone: '+385 1 238 8888', notes: 'KBC Zagreb' },
  { label: 'Hospital Sarajevo', phone: '+387 33 297 000', notes: 'KCUS Sarajevo' },
  { label: 'Hospital Kotor', phone: '+382 32 325 222', notes: 'Dom Zdravlja Kotor' },
  { label: 'Hospital Tirana', phone: '+355 4 2234 105', notes: 'QSUT University Hospital' },
  { label: 'Hospital Athens', phone: '+30 210 777 8901', notes: 'Evangelismos Hospital' },
];

export const announcements = [
  { id: 1, message: 'Welcome to the BYU Europe Study Abroad 2026 app! Check the Itinerary tab each morning for today\'s schedule.', emoji: '👋', active: false, createdAt: '2026-04-27' },
];
