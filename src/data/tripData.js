// BYU Europe Study Abroad 2026 — Trip Data v2
// Updated with full schedule, curfews, transport notes, buy-lunch flags

export const PROFESSOR_EMAILS = ['isaacjdet@gmail.com'];

export const days = [
  { id: 1, date: '2026-04-27', city: 'Provo', country: 'USA', phase: 'Workshop', summary: 'Kickoff Dinner at Dr. Mattson\'s house — the adventure begins', timezone: 'America/Denver' },
  { id: 2, date: '2026-04-28', city: 'Provo', country: 'USA', phase: 'Workshop', summary: 'Workshop day — culture briefing with Malcolm Botto and safety briefing with Olivia Toone', timezone: 'America/Denver' },
  { id: 3, date: '2026-04-29', city: 'Provo', country: 'USA', phase: 'Workshop', summary: 'Workshop + company visits to Hall Labs and Vanderhall', timezone: 'America/Denver' },
  { id: 4, date: '2026-04-30', city: 'Provo', country: 'USA', phase: 'Workshop', summary: 'Final workshop day — Rocketship, Amano, and Blendtec visits. Bring your own lunch.', timezone: 'America/Denver', packedLunch: true },
  { id: 5, date: '2026-05-01', city: 'Salt Lake City', country: 'USA', phase: 'Travel', summary: 'Departure day — fly SLC to Amsterdam overnight via Delta DL56. Bring your own lunch.', timezone: 'America/Denver', packedLunch: true },
  { id: 6, date: '2026-05-02', city: 'Venice', country: 'Italy', phase: 'Europe', summary: 'Arrival in Venice — Da Vinci Museum, gondola ride, Rialto Bridge sunset. Curfew 10:30 PM.', timezone: 'Europe/Rome' },
  { id: 7, date: '2026-05-03', city: 'Venice', country: 'Italy', phase: 'Europe', summary: 'Church in Mestre, Saint Mark\'s Basilica, Bell Tower, Vivaldi concert. Curfew 10:30 PM.', timezone: 'Europe/Rome' },
  { id: 8, date: '2026-05-04', city: 'Venice', country: 'Italy', phase: 'Europe', summary: 'Company visits — AAV Barbini Mirrors + Tessitura Bevilacqua, drive to Ljubljana via Miramare Castle. Buy lunch for tomorrow.', timezone: 'Europe/Rome', buyLunchTonight: true },
  { id: 9, date: '2026-05-05', city: 'Ljubljana', country: 'Slovenia', phase: 'Europe', summary: 'ELAN factory visit, Lake Bled hike and island, Ljubljana castle walk, free time. Curfew 10:30 PM.', timezone: 'Europe/Ljubljana', packedLunch: true },
  { id: 10, date: '2026-05-06', city: 'Zagreb', country: 'Croatia', phase: 'Europe', summary: 'SMM Maribor visit, Trakošćan Castle, drive to Zagreb, evening cultural walk. Buy lunch for tomorrow.', timezone: 'Europe/Zagreb', buyLunchTonight: true },
  { id: 11, date: '2026-05-07', city: 'Zagreb', country: 'Croatia', phase: 'Europe', summary: 'Intis Engineering + Končar Group visits, Nikola Tesla Museum, group dinner at La Štruk. Buy lunch for tomorrow.', timezone: 'Europe/Zagreb', packedLunch: true, buyLunchTonight: true },
  { id: 12, date: '2026-05-08', city: 'Sarajevo', country: 'Bosnia', phase: 'Europe', summary: 'HSTec Zadar, Split beach + Diocletian\'s Palace, Kravica Waterfalls, late drive to Sarajevo. Long day 10+ hours.', timezone: 'Europe/Sarajevo', packedLunch: true },
  { id: 13, date: '2026-05-09', city: 'Sarajevo', country: 'Bosnia', phase: 'Europe', summary: 'Cable car, Assassination Site, Baščaršija bazaar, free afternoon, Yellow Fortress at sunset.', timezone: 'Europe/Sarajevo' },
  { id: 14, date: '2026-05-10', city: 'Sarajevo', country: 'Bosnia', phase: 'Europe', summary: 'Church, War Tunnel Museum, free time for museums, group dinner. Buy lunch for tomorrow.', timezone: 'Europe/Sarajevo', buyLunchTonight: true },
  { id: 15, date: '2026-05-11', city: 'Sarajevo', country: 'Bosnia', phase: 'Europe', summary: 'Kinetic visit, AVDIC Violins, third company visit. Early to bed. Buy lunch for tomorrow.', timezone: 'Europe/Sarajevo', packedLunch: true, buyLunchTonight: true },
  { id: 16, date: '2026-05-12', city: 'Kotor', country: 'Montenegro', phase: 'Europe', summary: 'Aluminij Mostar, Dubrovnik stop, Adriatic 42 Bijela, St. John Fortress night hike in Kotor. 10+ hour day.', timezone: 'Europe/Podgorica', packedLunch: true },
  { id: 17, date: '2026-05-13', city: 'Tirana', country: 'Albania', phase: 'Europe', summary: 'Daido Metal visit, drive to Tirana, Albanian Night dinner show, Skanderbeg Square.', timezone: 'Europe/Tirane' },
  { id: 18, date: '2026-05-14', city: 'Tirana', country: 'Albania', phase: 'Europe', summary: 'Timak + Everest SHPK company visits, fly to Athens.', timezone: 'Europe/Tirane' },
  { id: 19, date: '2026-05-15', city: 'Athens', country: 'Greece', phase: 'Europe', summary: 'Elefsis Shipyards, Askra Olive Oil, Hill Athens dinner.', timezone: 'Europe/Athens' },
  { id: 20, date: '2026-05-16', city: 'Athens', country: 'Greece', phase: 'Europe', summary: 'Acropolis Museum, Acropolis, lunch, boat tour, team presentations, free time.', timezone: 'Europe/Athens' },
  { id: 21, date: '2026-05-17', city: 'Athens', country: 'Greece', phase: 'Europe', summary: 'Church in Halandri, Lycabettus Hill funicular, Monastiraki Flea Market.', timezone: 'Europe/Athens' },
  { id: 22, date: '2026-05-18', city: 'Athens', country: 'Greece', phase: 'Europe', summary: 'Get 3D + Skaramangas Shipyards visits, group final dinner.', timezone: 'Europe/Athens' },
  { id: 23, date: '2026-05-19', city: 'Athens', country: 'Greece', phase: 'Europe', summary: 'Fly home to Utah — safe travels!', timezone: 'Europe/Athens' },
];

export const activities = [

  // ─── DAY 1 — April 27 ───
  { id: 1, dayId: 1, time: '18:00', title: 'Kickoff Dinner', category: 'Food', location: 'Mattson\'s House, 1101 Elm Ave, Provo', mapsUrl: '', notes: 'Dress nicely. The adventure starts here!', showStudents: true },

  // ─── DAY 2 — April 28 ───
  { id: 2, dayId: 2, time: '08:00', title: 'Morning Workshop', category: 'Company Visit', location: 'EB Event Space', mapsUrl: '', notes: 'Dr. Mattson and Dr. Salmon. Runs until noon.', showStudents: true },
  { id: 3, dayId: 2, time: '12:00', title: 'Lunch', category: 'Food', location: 'EB Event Space', mapsUrl: '', notes: 'Blue Ribbon Box Lunch provided.', showStudents: true },
  { id: 4, dayId: 2, time: '12:00', title: 'Culture Briefing', category: 'Cultural', location: 'EB Event Space', mapsUrl: '', notes: 'Malcolm Botto — cultural expectations across Europe.', showStudents: true },
  { id: 5, dayId: 2, time: '13:00', title: 'Safety Briefing', category: 'Cultural', location: 'EB Event Space', mapsUrl: '', notes: 'Olivia Toone — travel safety protocols.', showStudents: true },
  { id: 6, dayId: 2, time: '14:00', title: 'Afternoon Workshop', category: 'Company Visit', location: 'EB Event Space', mapsUrl: '', notes: 'Dr. Mattson and Dr. Salmon. Runs until 5 PM.', showStudents: true },

  // ─── DAY 3 — April 29 ───
  { id: 7, dayId: 3, time: '08:00', title: 'Morning Workshop', category: 'Company Visit', location: 'EB Event Space', mapsUrl: '', notes: '', showStudents: true },
  { id: 8, dayId: 3, time: '12:15', title: 'Lunch at Sportellis', category: 'Food', location: 'Sportellis, Provo', mapsUrl: '', notes: 'Travelling by BYU vans.', showStudents: true },
  { id: 9, dayId: 3, time: '13:30', title: 'Hall Labs Visit', category: 'Company Visit', location: 'Hall Labs, Provo', mapsUrl: '', notes: '', showStudents: true },
  { id: 10, dayId: 3, time: '15:15', title: 'Vanderhall Visit', category: 'Company Visit', location: 'Vanderhall', mapsUrl: '', notes: '', showStudents: true },
  { id: 11, dayId: 3, time: '17:30', title: 'Return to BYU', category: 'Transport', location: 'EB East Parking Lot', mapsUrl: '', notes: 'BYU vans.', showStudents: false },

  // ─── DAY 4 — April 30 ───
  { id: 12, dayId: 4, time: '08:00', title: 'Workshop — The Launch', category: 'Company Visit', location: 'HBLL 3714', mapsUrl: '', notes: '', showStudents: true },
  { id: 13, dayId: 4, time: '09:40', title: 'Rocketship Visit', category: 'Company Visit', location: 'Rocketship, Provo', mapsUrl: '', notes: '', showStudents: true },
  { id: 14, dayId: 4, time: '12:00', title: 'Lunch in Pioneer Park', category: 'Food', location: 'Pioneer Park, Provo', mapsUrl: '', notes: '🥪 Bring your own lunch.', showStudents: true },
  { id: 15, dayId: 4, time: '12:45', title: 'Amano Chocolate Visit', category: 'Company Visit', location: 'Amano, Provo', mapsUrl: '', notes: '', showStudents: true },
  { id: 16, dayId: 4, time: '14:40', title: 'Blendtec Visit', category: 'Company Visit', location: 'Blendtec, Orem', mapsUrl: '', notes: '', showStudents: true },

  // ─── DAY 5 — May 1 ───
  { id: 17, dayId: 5, time: '10:00', title: 'Final Workshop', category: 'Company Visit', location: 'EB East Lawn', mapsUrl: '', notes: 'Last session before departure.', showStudents: true },
  { id: 18, dayId: 5, time: '11:10', title: 'UVX to FrontRunner', category: 'Transport', location: 'UVX South Campus', mapsUrl: '', notes: 'Departs 11:10 AM sharp. 🥪 Bring your own lunch or buy at SLC airport.', showStudents: true },
  { id: 19, dayId: 5, time: '11:46', title: 'FrontRunner to SLC Airport', category: 'Transport', location: 'Provo Central Station', mapsUrl: '', notes: 'Allow plenty of time for check-in and security.', showStudents: false },
  { id: 20, dayId: 5, time: '16:20', title: 'Fly to Amsterdam', category: 'Transport', location: 'SLC Airport', mapsUrl: '', notes: 'Delta DL56. Overnight flight — arrives Amsterdam 10:15 AM May 2.', showStudents: true },

  // ─── DAY 6 — May 2, Venice ───
  { id: 21, dayId: 6, time: '11:25', title: 'Fly AMS → Venice', category: 'Transport', location: 'Amsterdam Schiphol Airport', mapsUrl: '', notes: 'KLM/Delta flight 9223. Arrives Venice 1:10 PM.', showStudents: true },
  { id: 22, dayId: 6, time: '13:50', title: 'Alilaguna Blue Line to Hotel', category: 'Transport', location: 'VCE Airport → Hotel', mapsUrl: '', notes: 'Take 1:50 PM or 2:20 PM water bus. ~48 min journey.', showStudents: false },
  { id: 23, dayId: 6, time: '15:45', title: 'Da Vinci Museum', category: 'Cultural', location: 'Campo S. Rocco 3052, Venice', mapsUrl: 'https://maps.app.goo.gl/JFge2Yfk8RZip1HK9', notes: 'Tickets pre-purchased online (two transactions). Last entry 5:15 PM.', showStudents: true },
  { id: 24, dayId: 6, time: '18:15', title: 'Gondola Ride', category: 'Cultural', location: 'Gondola Station S. Tomà, Venice', mapsUrl: 'https://maps.app.goo.gl/a5dg5AKaJ1CHYJ2t7', notes: '4 gondolas pre-booked. 30 min ride. Pay on site.', showStudents: true },
  { id: 25, dayId: 6, time: '19:15', title: 'Rialto Bridge Sunset', category: 'Cultural', location: 'Ponte di Rialto, Venice', mapsUrl: 'https://maps.app.goo.gl/5K3UFmxmi9j8Bocw9', notes: 'Free. Sunset ~7:53 PM in May.', showStudents: true },
  { id: 26, dayId: 6, time: '20:00', title: 'Free Time + Dinner', category: 'Free Time', location: 'Venice', mapsUrl: '', notes: 'Find dinner on your own. Explore the canals.', showStudents: true },
  { id: 27, dayId: 6, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Casa Cardinal Piazza (Monastery), Cannaregio 3539/a', mapsUrl: '', notes: 'Be back at the hotel by 10:30 PM.', showStudents: true },

  // ─── DAY 7 — May 3, Venice ───
  { id: 28, dayId: 7, time: '08:15', title: 'Church — Mestre Ward', category: 'Cultural', location: 'Via Castellana 124C, Zelarino', mapsUrl: 'https://maps.app.goo.gl/z5D8Q4vySCnJM4KC8', notes: 'Bishop expecting the group. Italian language services at 9:30 AM. Take boat/bus.', showStudents: true },
  { id: 29, dayId: 7, time: '12:00', title: 'Transit to Rialto Area', category: 'Transport', location: 'Zelarino → Rialto', mapsUrl: 'https://maps.app.goo.gl/R5zn9ELUWDm9serB8', notes: 'Bus/boat back to Venice.', showStudents: false },
  { id: 30, dayId: 7, time: '13:15', title: 'Free Time + Lunch', category: 'Free Time', location: 'Bar Rialto da Lollo area, Venice', mapsUrl: 'https://maps.app.goo.gl/tNrxfjEwxhGrXzKE8', notes: 'Lunch on your own. Walk toward Saint Mark\'s.', showStudents: true },
  { id: 31, dayId: 7, time: '15:00', title: 'Saint Mark\'s Basilica', category: 'Cultural', location: 'Piazza San Marco, Venice', mapsUrl: '', notes: 'Tickets pre-purchased.', showStudents: true },
  { id: 32, dayId: 7, time: '16:00', title: 'Saint Mark\'s Bell Tower', category: 'Cultural', location: 'Saint Mark\'s Campanile, Venice', mapsUrl: '', notes: 'Tickets pre-purchased. Elevator available. Stunning 360° views.', showStudents: true },
  { id: 33, dayId: 7, time: '17:00', title: 'Free Time + Dinner', category: 'Free Time', location: 'Venice', mapsUrl: '', notes: 'Walk to Vivaldi venue by 8:00 PM.', showStudents: true },
  { id: 34, dayId: 7, time: '20:30', title: 'Vivaldi Concert', category: 'Cultural', location: 'Scuola Grande San Teodoro, Venice', mapsUrl: 'https://maps.app.goo.gl/e6TCWaiALrYAu7yQ9', notes: 'Tickets pre-purchased. Smart casual dress.', showStudents: true },
  { id: 35, dayId: 7, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Casa Cardinal Piazza (Monastery)', mapsUrl: 'https://maps.app.goo.gl/HgkAgiYbCXgU4h13A', notes: 'Be back at the hotel by 10:30 PM.', showStudents: true },

  // ─── DAY 8 — May 4, Venice → Ljubljana ───
  { id: 36, dayId: 8, time: '09:00', title: 'AAV Barbini Venetian Mirrors', category: 'Company Visit', location: 'Calle Dietro Gli Orti 7, Venice (Murano)', mapsUrl: 'https://maps.app.goo.gl/pDtKuBZhCc2yEQMFA', notes: 'Walking/Ferry. Historic Venetian mirror makers.', showStudents: true },
  { id: 37, dayId: 8, time: '12:00', title: 'Return to Venice + Lunch + Groceries', category: 'Food', location: 'Venice', mapsUrl: '', notes: 'Public transport back. Buy groceries/lunch items for tomorrow.', showStudents: true },
  { id: 38, dayId: 8, time: '13:30', title: 'Tessitura Bevilacqua', category: 'Company Visit', location: 'Santa Croce 1320, Venice', mapsUrl: '', notes: 'Historic handwoven velvet manufacturer since 1875. Pay on site.', showStudents: true },
  { id: 39, dayId: 8, time: '15:00', title: 'Return to Hotel + Luggage', category: 'Transport', location: 'Hotel → Tronchetto Bus Station', mapsUrl: 'https://maps.app.goo.gl/aNozdHfzHKp9xSrp7', notes: 'Collect bags and transfer to Tronchetto by water ferry.', showStudents: false },
  { id: 40, dayId: 8, time: '16:00', title: 'Drive to Miramare Castle, Trieste', category: 'Transport', location: 'Tronchetto → Miramare Castle, Trieste', mapsUrl: 'https://maps.app.goo.gl/m1rqf8TDUpAGWtq4A', notes: 'Coach. ~3 hour drive. Sunset stop at the castle.', showStudents: true },
  { id: 41, dayId: 8, time: '20:30', title: 'Drive to Ljubljana', category: 'Transport', location: 'Trieste → Ljubljana', mapsUrl: 'https://maps.app.goo.gl/EMz3qZQ7ARbN6Tci6', notes: 'Coach. ~1.5 hour drive. Arrive ~10 PM. 🛒 Buy lunch for tomorrow.', showStudents: false },

  // ─── DAY 9 — May 5, Ljubljana / Lake Bled ───
  { id: 42, dayId: 9, time: '07:30', title: 'Depart for ELAN', category: 'Transport', location: 'Hotel, Ljubljana → Begunje', mapsUrl: 'https://maps.app.goo.gl/U5qotfvDyMQBf17o7', notes: '~34 min drive by coach.', showStudents: false },
  { id: 43, dayId: 9, time: '09:00', title: 'ELAN Company Visit', category: 'Company Visit', location: 'ELAN, Begunje na Gorenjskem', mapsUrl: 'https://maps.app.goo.gl/U5qotfvDyMQBf17o7', notes: '2.5 hour visit to the world-famous ski factory. Ends 11:30 AM.', showStudents: true },
  { id: 44, dayId: 9, time: '11:45', title: 'Drive to Lake Bled', category: 'Transport', location: 'Begunje → Ojstrica Trailhead, Lake Bled', mapsUrl: 'https://maps.app.goo.gl/aJMJt963m1XmNAFS7', notes: '~14 min drive. 🥪 Lunch on bus/during hike.', showStudents: false },
  { id: 45, dayId: 9, time: '12:20', title: 'Ojstrica Hike', category: 'Cultural', location: 'Ojstrica Trailhead, Lake Bled', mapsUrl: 'https://maps.app.goo.gl/4Q5hCRnvVJFbvR6s7', notes: 'The iconic postcard viewpoint of Lake Bled. ~1 hour roundtrip. Rocky and steep — wear proper shoes.', showStudents: true },
  { id: 46, dayId: 9, time: '13:20', title: 'Pletna Boat to Bled Island', category: 'Cultural', location: 'Velika Zaka Pletna Dock, Lake Bled', mapsUrl: '', notes: 'Buy church ticket on site or online. Ring the wishing bell! Must leave on the 3:10 PM boat. Two transactions.', showStudents: true },
  { id: 47, dayId: 9, time: '15:50', title: 'Drive to Ljubljana', category: 'Transport', location: 'Bled → Ljubljana', mapsUrl: 'https://maps.app.goo.gl/YiubxcZQeoGhpmhR8', notes: 'Coach. ~1 hr 20 min. Arrive ~5:10 PM. Bus done by 5:30 PM.', showStudents: false },
  { id: 48, dayId: 9, time: '17:25', title: 'Triple Bridge + Dragon Bridge + Castle Walk', category: 'Cultural', location: 'Triple Bridge, Ljubljana', mapsUrl: 'https://maps.app.goo.gl/jHEKS6cJjmyUFLjy9', notes: 'Walking tour. Depart hotel at 5:30 PM. All three free to walk.', showStudents: true },
  { id: 49, dayId: 9, time: '18:10', title: 'Ljubljana Castle', category: 'Cultural', location: 'Ljubljana Castle', mapsUrl: '', notes: 'Buy tickets online (3 transactions). Tower, History Exhibition, Puppetry Museum.', showStudents: true },
  { id: 50, dayId: 9, time: '20:10', title: 'Funicular Down', category: 'Transport', location: 'Ljubljana Castle Funicular', mapsUrl: '', notes: 'Included in return ticket.', showStudents: false },
  { id: 51, dayId: 9, time: '20:30', title: 'Free Time', category: 'Free Time', location: 'Ljubljana Old Town', mapsUrl: '', notes: 'Explore on your own.', showStudents: true },
  { id: 52, dayId: 9, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Ibis Styles Ljubljana', mapsUrl: 'https://maps.app.goo.gl/zzHjv8wmq7kkAhni9', notes: 'Be back by 10:30 PM.', showStudents: true },

  // ─── DAY 10 — May 6, Ljubljana → Zagreb ───
  { id: 53, dayId: 10, time: '07:30', title: 'SMM Company Visit — Maribor', category: 'Company Visit', location: 'Perhavčeva 17, Maribor, Slovenia', mapsUrl: 'https://maps.app.goo.gl/MAoMU4ZUZWS7mS328', notes: '', showStudents: true },
  { id: 54, dayId: 10, time: '12:30', title: 'Trakošćan Castle', category: 'Cultural', location: 'Trakošćan 4, Lepoglava, Croatia', mapsUrl: 'https://maps.app.goo.gl/gF61pFqrLaK839zHA', notes: 'Buy tickets on site — 5-10 euros. Medieval castle with beautiful lake walk. Some people walk around the lake first.', showStudents: true },
  { id: 55, dayId: 10, time: '15:00', title: 'Drive to Zagreb', category: 'Transport', location: 'Trakošćan → Hotel Dubrovnik, Zagreb', mapsUrl: 'https://maps.app.goo.gl/bQZAaBbf92Wj2Ayx6', notes: 'Coach. ~1.5 hour drive. 🥪 Lunch on bus.', showStudents: false },
  { id: 56, dayId: 10, time: '16:30', title: 'Check In — Hotel Dubrovnik', category: 'Accommodation', location: 'Hotel Dubrovnik, Ljudevita Gaja 1, Zagreb', mapsUrl: '', notes: '', showStudents: false },
  { id: 57, dayId: 10, time: '18:00', title: 'Zagreb Cathedral', category: 'Cultural', location: 'Cathedral of Zagreb, Kaptol 31', mapsUrl: 'https://maps.app.goo.gl/6WQeCJUbBKNigfDL6', notes: 'Possibly inside before 7 PM (may be under repair post-earthquake). Then St. Mark\'s Church.', showStudents: true },
  { id: 58, dayId: 10, time: '19:00', title: 'Free Time — Tkalčićeva Street', category: 'Free Time', location: 'Tkalčićeva Street + Chocolate Museum, Zagreb', mapsUrl: '', notes: '🛒 Buy lunch for tomorrow before bed.', showStudents: true },
  { id: 59, dayId: 10, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Hotel Dubrovnik, Zagreb', mapsUrl: '', notes: 'Be back by 10:30 PM.', showStudents: true },

  // ─── DAY 11 — May 7, Zagreb ───
  { id: 60, dayId: 11, time: '08:30', title: 'Intis Engineering Visit', category: 'Company Visit', location: 'Velika Cesta 97, Odra, Zagreb', mapsUrl: 'https://maps.app.goo.gl/xpwcPphLVKrdCGXVA', notes: '', showStudents: true },
  { id: 61, dayId: 11, time: '12:00', title: 'Grocery Stop — Konzum', category: 'Food', location: 'Konzum, Odranska zavrtnica 19, Odra', mapsUrl: 'https://maps.app.goo.gl/gLHWmdqH3yMymawPA', notes: 'Buy grocery store lunch here.', showStudents: true },
  { id: 62, dayId: 11, time: '12:40', title: 'Končar Group Visit', category: 'Company Visit', location: 'KONČAR Electric Vehicles, Zagreb', mapsUrl: 'https://maps.app.goo.gl/XSKJuYLLEW3SSkgHA', notes: '1.5 hour tour.', showStudents: true },
  { id: 63, dayId: 11, time: '15:00', title: 'Nikola Tesla Technical Museum', category: 'Cultural', location: 'Savska cesta 18, Zagreb', mapsUrl: 'https://maps.app.goo.gl/VefxoUWpSvQLh3cJ7', notes: 'Buy tickets at tmnt.hr. ~1 hour visit. Closes 5 PM.', showStudents: true },
  { id: 64, dayId: 11, time: '17:15', title: 'Group Dinner — La Štruk', category: 'Food', location: 'La Štruk, Skalinska ul. 5, Zagreb', mapsUrl: 'https://maps.app.goo.gl/WdZiSm2sEBT9LRMXA', notes: 'Reservation confirmed.', showStudents: true },
  { id: 65, dayId: 11, time: '20:00', title: 'Free Time', category: 'Free Time', location: 'Zagreb', mapsUrl: '', notes: '🛒 Buy packed lunch for tomorrow before bed.', showStudents: true },
  { id: 66, dayId: 11, time: '22:30', title: 'Curfew', category: 'Accommodation', location: 'Hotel Dubrovnik, Zagreb', mapsUrl: '', notes: 'Be back by 10:30 PM.', showStudents: true },

  // ─── DAY 12 — May 8, Zagreb → Sarajevo ───
  { id: 67, dayId: 12, time: '06:00', title: 'HSTec Visit — Zadar', category: 'Company Visit', location: 'Zagrebačka 100, Zadar, Croatia', mapsUrl: 'https://maps.app.goo.gl/xR7Rqg1z7uvxRxQn7', notes: '⚠️ Very early departure. Pack bags the night before.', showStudents: true },
  { id: 68, dayId: 12, time: '12:30', title: 'Drive to Split', category: 'Transport', location: 'Zadar → Split', mapsUrl: 'https://maps.app.goo.gl/PTkJ2dfnTFAUp2Mh9', notes: '🥪 Lunch on bus. ~2 hour drive.', showStudents: false },
  { id: 69, dayId: 12, time: '14:30', title: 'Split — Beach + Diocletian\'s Palace + Riva', category: 'Cultural', location: 'Split, Croatia', mapsUrl: '', notes: 'Free time for a few hours — swim, walk, explore.', showStudents: true },
  { id: 70, dayId: 12, time: '17:00', title: 'Kravica Waterfalls', category: 'Cultural', location: 'Kravica Waterfall, Bosnia', mapsUrl: 'https://maps.app.goo.gl/r6fEioJixVqENWMT8', notes: 'Buy on site — 10 euros per person. Bring swimwear if desired.', showStudents: true },
  { id: 71, dayId: 12, time: '20:00', title: 'Drive to Sarajevo', category: 'Transport', location: 'Kravica → Hotel Holiday Europa, Sarajevo', mapsUrl: '', notes: 'Coach. ~3 hour drive. Arrive ~11 PM. Very long day — 10+ hours total.', showStudents: false },

  // ─── DAY 13 — May 9, Sarajevo ───
  { id: 72, dayId: 13, time: '09:00', title: 'Sarajevo Cable Car', category: 'Cultural', location: 'Sarajevska žičara, Sarajevo', mapsUrl: 'https://maps.app.goo.gl/M7kBMhY3wbAhPDCV9', notes: 'Morning cable car up Mount Trebević for city views.', showStudents: true },
  { id: 73, dayId: 13, time: '11:30', title: 'Latin Bridge — Assassination Site', category: 'Cultural', location: 'Latin Bridge, Sarajevo', mapsUrl: 'https://maps.app.goo.gl/dnU44MQnF6f423yr8', notes: 'Site of the 1914 assassination that triggered WWI.', showStudents: true },
  { id: 74, dayId: 13, time: '12:30', title: 'Baščaršija Old Bazaar', category: 'Cultural', location: 'Baščaršija, Sarajevo', mapsUrl: 'https://maps.app.goo.gl/UcLcKjoR8brKunsc8', notes: 'Historic Ottoman bazaar — explore and find lunch on your own.', showStudents: true },
  { id: 75, dayId: 13, time: '13:00', title: 'Free Afternoon', category: 'Free Time', location: 'Sarajevo', mapsUrl: '', notes: 'Half day free. War Childhood Museum is highly recommended if you want to visit.', showStudents: true },
  { id: 76, dayId: 13, time: '19:00', title: 'Yellow Fortress at Sunset', category: 'Cultural', location: 'Yellow Fortress, Sarajevo', mapsUrl: '', notes: 'Arrive 30 min before sunset for best views over the city.', showStudents: true },

  // ─── DAY 14 — May 10, Sarajevo ───
  { id: 77, dayId: 14, time: '09:35', title: 'Church — Sarajevo Branch', category: 'Cultural', location: 'Mehmeda Spahe 24, Sarajevo', mapsUrl: 'https://maps.app.goo.gl/r2L6vKCF53vxEPLD8', notes: 'Croatian language services at 10:00 AM.', showStudents: true },
  { id: 78, dayId: 14, time: '12:30', title: 'Students Buy Lunch', category: 'Food', location: 'Sarajevo', mapsUrl: '', notes: 'Find lunch on your own.', showStudents: true },
  { id: 79, dayId: 14, time: '13:30', title: 'War Tunnel Museum', category: 'Cultural', location: 'Sarajevo', mapsUrl: '', notes: 'The tunnel used to supply the besieged city in the 1990s. Deeply powerful.', showStudents: true },
  { id: 80, dayId: 14, time: '15:00', title: 'Free Time — Museums', category: 'Free Time', location: 'Sarajevo', mapsUrl: '', notes: 'Options: War Childhood Museum, Museum of Crimes Against Humanity, Ars Aevi modern art, Siege of Sarajevo Museum.', showStudents: true },
  { id: 81, dayId: 14, time: '19:00', title: 'Group Dinner', category: 'Food', location: 'Sarajevo', mapsUrl: '', notes: '🛒 Buy packed lunch for tomorrow before bed.', showStudents: true },

  // ─── DAY 15 — May 11, Sarajevo ───
  { id: 82, dayId: 15, time: '08:00', title: 'Kinetic Company Visit', category: 'Company Visit', location: 'Tvornička 3, Sarajevo', mapsUrl: 'https://maps.app.goo.gl/VMyy7rxGzmkfgLMX6', notes: '', showStudents: true },
  { id: 83, dayId: 15, time: '11:00', title: 'AVDIC Violins', category: 'Company Visit', location: 'Tuzla, Bosnia', mapsUrl: 'https://maps.app.goo.gl/3qUZe98G1uyXtBkc7', notes: 'Handcrafted string instrument workshop — a truly unique visit. 🥪 Lunch on bus.', showStudents: true },
  { id: 84, dayId: 15, time: '16:00', title: 'Third Company Visit', category: 'Company Visit', location: 'Sarajevo', mapsUrl: '', notes: 'Details TBC.', showStudents: true },
  { id: 85, dayId: 15, time: '20:00', title: 'Free Time + Early to Bed', category: 'Free Time', location: 'Sarajevo', mapsUrl: '', notes: '🛒 Buy packed lunch for tomorrow. Early night — very long travel day tomorrow.', showStudents: true },

  // ─── DAY 16 — May 12, Mostar → Dubrovnik → Kotor ───
  { id: 86, dayId: 16, time: '06:30', title: 'Aluminij Visit + Mostar Bridge', category: 'Company Visit', location: 'Bačevići, Mostar, Bosnia', mapsUrl: 'https://maps.app.goo.gl/SoGtb9SFsFh8Sdci9', notes: '🥪 Packed lunch. See the iconic Stari Most (Old Bridge) — do not skip this.', showStudents: true },
  { id: 87, dayId: 16, time: '10:30', title: 'Cultural Stop — Dubrovnik', category: 'Cultural', location: 'Ul. od Tabakarije 29, Dubrovnik', mapsUrl: '', notes: 'Brief stop in the famous walled city on the Adriatic.', showStudents: true },
  { id: 88, dayId: 16, time: '12:00', title: 'Adriatic 42 — Bijela', category: 'Company Visit', location: 'Bijela, Montenegro', mapsUrl: 'https://maps.app.goo.gl/dWug6YbHkK2JUQ6f8', notes: 'Boat manufacturer visit.', showStudents: true },
  { id: 89, dayId: 16, time: '17:30', title: 'Drive to Kotor', category: 'Transport', location: 'Bijela → Kotor', mapsUrl: 'https://maps.app.goo.gl/qETQig1aAcgJCw5NA', notes: '~1 hour along the Bay of Kotor.', showStudents: false },
  { id: 90, dayId: 16, time: '19:00', title: 'St. John Fortress Night Hike', category: 'Cultural', location: 'Kotor Fortress, Montenegro', mapsUrl: 'https://maps.app.goo.gl/TBRRYCkTPjjZHP6z8', notes: '⚠️ BRING FLASHLIGHTS. Buy tickets on site. Meet first at Rooftop Terrace Hippocampus. Spectacular night views.', showStudents: true },
  { id: 91, dayId: 16, time: '21:30', title: 'Dinner on Your Own', category: 'Free Time', location: 'Kotor Old Town', mapsUrl: '', notes: 'Plenty of restaurants in the medieval Old Town. Long day — 10+ hours total.', showStudents: true },

  // ─── DAY 17 — May 13, Tirana ───
  { id: 92, dayId: 17, time: '08:30', title: 'Daido Metal Visit', category: 'Company Visit', location: 'DAIDO METAL, Kotor, Montenegro', mapsUrl: 'https://maps.app.goo.gl/7XnC3AQE7jyrbKfY6', notes: '⚠️ 7-day contact warning required.', showStudents: true },
  { id: 93, dayId: 17, time: '11:30', title: 'Drive to Tirana', category: 'Transport', location: 'Montenegro → Tirana, Albania', mapsUrl: 'https://maps.app.goo.gl/wU2jd3UNezdDpBmU6', notes: 'Coach. Long drive — arrive ~5 PM. Fast food for lunch en route.', showStudents: false },
  { id: 94, dayId: 17, time: '17:00', title: 'Check In + Skanderbeg Square', category: 'Cultural', location: 'Skanderbeg Square + Et\'hem Bey Mosque, Tirana', mapsUrl: '', notes: '', showStudents: true },
  { id: 95, dayId: 17, time: '18:00', title: 'Albanian Night — Dinner Show', category: 'Food', location: 'Albanian Night, Tirana', mapsUrl: '', notes: 'Traditional Albanian dinner and cultural show. Tickets pre-purchased at albaniannight.com', showStudents: true },

  // ─── DAY 18 — May 14, Tirana → Athens ───
  { id: 96, dayId: 18, time: '07:30', title: 'Timak Company Visit', category: 'Company Visit', location: 'Tirana Industrial Park, Albania', mapsUrl: 'https://maps.app.goo.gl/NFG1vvVU98ivojReA', notes: '', showStudents: true },
  { id: 97, dayId: 18, time: '13:00', title: 'Everest SHPK Visit', category: 'Company Visit', location: 'Kamëz, Albania', mapsUrl: 'https://maps.app.goo.gl/gkUogpfgSvZ1fwyu7', notes: '⚠️ Shoe sizes needed in advance.', showStudents: true },
  { id: 98, dayId: 18, time: '17:30', title: 'Airport Logistics', category: 'Transport', location: 'Tirana Airport', mapsUrl: '', notes: 'Arrive at airport by 5:30 PM.', showStudents: true },
  { id: 99, dayId: 18, time: '19:25', title: 'Fly to Athens', category: 'Transport', location: 'Tirana Airport', mapsUrl: '', notes: 'Flight at 7:25 PM.', showStudents: true },

  // ─── DAY 19 — May 15, Athens ───
  { id: 100, dayId: 19, time: '09:30', title: 'Elefsis Shipyards Visit', category: 'Company Visit', location: 'Elefsina, Greece', mapsUrl: 'https://maps.app.goo.gl/LRqNDk2dYda7wyxH9', notes: '~1 hour visit.', showStudents: true },
  { id: 101, dayId: 19, time: '13:00', title: 'Askra Olive Oil Visit', category: 'Company Visit', location: 'Nea Ionia, Athens', mapsUrl: '', notes: '1.5 hour visit.', showStudents: true },
  { id: 102, dayId: 19, time: '18:00', title: 'Dinner at Hill Athens', category: 'Food', location: 'Hill Athens, Athens', mapsUrl: '', notes: 'Reservation at hillathens.gr/en/reservation/', showStudents: true },

  // ─── DAY 20 — May 16, Athens ───
  { id: 103, dayId: 20, time: '09:40', title: 'Acropolis Museum', category: 'Cultural', location: 'Acropolis Museum, Athens', mapsUrl: 'https://maps.app.goo.gl/QWn84JsXgnxDMhAP9', notes: 'Group tickets booked at theacropolismuseum.gr', showStudents: true },
  { id: 104, dayId: 20, time: '11:00', title: 'Acropolis', category: 'Cultural', location: 'Acropolis, Athens', mapsUrl: 'https://maps.app.goo.gl/wFECYrDQRUZ13KS37', notes: 'Registration required. The Parthenon, Erechtheion, Temple of Athena Nike.', showStudents: true },
  { id: 105, dayId: 20, time: '12:00', title: 'Lunch — O Gyros Pou Gyrevis', category: 'Food', location: 'Athens', mapsUrl: 'https://maps.app.goo.gl/v7wNtLzSpfBv7niz6', notes: 'Students buy own lunch.', showStudents: true },
  { id: 106, dayId: 20, time: '13:00', title: 'Temple of Olympian Zeus', category: 'Cultural', location: 'Athens', mapsUrl: 'https://maps.app.goo.gl/4dnv8ZVtBr7z1xQp8', notes: '', showStudents: true },
  { id: 107, dayId: 20, time: '14:00', title: 'Boat Tour', category: 'Cultural', location: 'Athens', mapsUrl: 'https://maps.app.goo.gl/XdccKcopK7eU1dD67', notes: 'Registration pending.', showStudents: true },
  { id: 108, dayId: 20, time: '16:30', title: 'Team Presentations', category: 'Company Visit', location: 'Athens', mapsUrl: '', notes: 'Share what you learned from the trip.', showStudents: true },
  { id: 109, dayId: 20, time: '20:00', title: 'Free Time', category: 'Free Time', location: 'Athens', mapsUrl: 'https://hillathens.gr/en/reservation/', notes: '', showStudents: true },

  // ─── DAY 21 — May 17, Athens ───
  { id: 110, dayId: 21, time: '09:15', title: 'Church — Halandri Branch', category: 'Cultural', location: 'Erifilis 16, Halandri, Athens', mapsUrl: 'https://maps.app.goo.gl/U93zQUXGe65Bu6iC7', notes: 'Greek language services at 10:00 AM.', showStudents: true },
  { id: 111, dayId: 21, time: '12:10', title: 'Students Buy Lunch', category: 'Food', location: 'Athens', mapsUrl: '', notes: 'Sky Bar or Mpirmpilo — options TBC.', showStudents: true },
  { id: 112, dayId: 21, time: '12:30', title: 'Lycabettus Hill Funicular', category: 'Cultural', location: 'Lycabettus Hill, Athens', mapsUrl: 'https://maps.app.goo.gl/dBzEwdzTw7TMo6aB6', notes: '360° views over Athens and the Acropolis. Funicular available.', showStudents: true },
  { id: 113, dayId: 21, time: '14:30', title: 'Monastiraki Flea Market', category: 'Free Time', location: 'Monastiraki, Athens', mapsUrl: 'https://maps.app.goo.gl/DWSe23trKFpQpUgC8', notes: 'Great for last-minute souvenirs. In the shadow of the Acropolis.', showStudents: true },

  // ─── DAY 22 — May 18, Athens ───
  { id: 114, dayId: 22, time: '08:15', title: 'Get 3D Visit', category: 'Company Visit', location: 'Aghioi Anargiroi, Athens', mapsUrl: '', notes: '45 min visit.', showStudents: true },
  { id: 115, dayId: 22, time: '12:00', title: 'Skaramangas Shipyards Visit', category: 'Company Visit', location: 'Skaramangas, Athens', mapsUrl: '', notes: '30 min visit.', showStudents: true },
  { id: 116, dayId: 22, time: '19:00', title: 'Final Group Dinner', category: 'Food', location: 'Athens', mapsUrl: '', notes: 'Last dinner together. Celebrate the journey!', showStudents: true },
  { id: 117, dayId: 22, time: '21:00', title: 'Free Time — Last Night', category: 'Free Time', location: 'Athens', mapsUrl: '', notes: 'Final evening in Europe.', showStudents: true },

  // ─── DAY 23 — May 19, Athens ───
  { id: 118, dayId: 23, time: '06:00', title: 'Fly Home to Utah', category: 'Transport', location: 'Athens Airport', mapsUrl: '', notes: 'Check flight details with professors. Safe travels!', showStudents: true },
];

export const quotes = [
  { dayId: 1, text: 'Look for what you notice but no one else sees.' },
  { dayId: 2, text: 'Zoom in and obsess. Zoom out and observe. We get to choose.' },
  { dayId: 3, text: 'All that matters is that you are making something you love, to the best of your ability, here and now.' },
  { dayId: 4, text: 'The real work of the artist is a way of being in the world.' },
  { dayId: 5, text: 'Creativity is a fundamental aspect of being human. It is our birthright, and it\'s for all of us.' },
  { dayId: 6, text: 'We can\'t force greatness to happen. All we can do is invite it in and await it actively.' },
  { dayId: 7, text: 'Failure is the information you need to get where you\'re going.' },
  { dayId: 8, text: 'To hone your craft is to honor creation.' },
  { dayId: 9, text: 'Beware of the assumption that the way you work is the best way simply because it\'s the way you\'ve done it before.' },
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
  { dayId: 1, text: 'BYU was founded in 1875 as Brigham Young Academy. It became a university in 1903 and is now one of the largest religious universities in the world with over 33,000 students.' },
  { dayId: 2, text: 'Provo is nicknamed "Silicon Slopes" — Utah\'s tech industry has grown so fast it now rivals Silicon Valley in startup density per capita.' },
  { dayId: 3, text: 'The Y on the mountain above Provo is 380 feet tall and 130 feet wide. Students hike up annually to whitewash it — a BYU tradition since 1906.' },
  { dayId: 4, text: 'Blendtec\'s "Will It Blend?" YouTube series, which started as an internal test, became one of the first viral marketing campaigns in history with over 300 million views.' },
  { dayId: 5, text: 'The flight from Salt Lake City to Amsterdam crosses Greenland and the Arctic Ocean — you\'ll fly over some of the most remote and spectacular ice landscapes on Earth.' },
  { dayId: 6, text: 'Venice is built on 118 small islands connected by 400 bridges. The city has no roads — every journey is made by boat or on foot. The whole city is slowly sinking at about 1-2mm per year.' },
  { dayId: 7, text: 'The Vivaldi concert venue, Scuola Grande di San Teodoro, was built in 1552. Antonio Vivaldi himself performed in Venice churches just like this one in the early 1700s.' },
  { dayId: 8, text: 'Miramare Castle was built in 1860 for Austrian Archduke Maximilian. He lived there for only 6 years before becoming Emperor of Mexico, where he was executed in 1867.' },
  { dayId: 9, text: 'Lake Bled\'s turquoise color comes from glacial sediment. The water is so clear you can see the bottom in many places. The island church has been a pilgrimage site for over 1,000 years.' },
  { dayId: 10, text: 'Trakošćan Castle has been continuously inhabited since the 13th century. It was owned by the same Croatian noble family, the Drašković family, for over 400 years.' },
  { dayId: 11, text: 'Nikola Tesla was born in Croatia in 1856. His AC electrical system powers virtually every home and building in the world today — his inventions literally light up civilization.' },
  { dayId: 12, text: 'Diocletian\'s Palace in Split is one of the best-preserved Roman ruins in the world. About 3,000 people actually live and work inside the ancient palace walls today.' },
  { dayId: 13, text: 'Sarajevo is nicknamed "the Jerusalem of Europe" because a mosque, Catholic cathedral, Orthodox church, and Jewish synagogue all stand within a few hundred meters of each other.' },
  { dayId: 14, text: 'The Sarajevo War Tunnel, built in 1993, was only 1 meter wide and 1.6 meters tall. Over a million tons of food, weapons, and supplies were carried through it by hand during the siege.' },
  { dayId: 15, text: 'The AVDIC family has been making violins in Bosnia for three generations. A handcrafted AVDIC violin can take up to 200 hours to make and is played by professional musicians worldwide.' },
  { dayId: 16, text: 'The Stari Most (Old Bridge) in Mostar was built by the Ottomans in 1566 and stood for 427 years. It was deliberately destroyed in 1993 during the war and painstakingly reconstructed, reopening in 2004.' },
  { dayId: 17, text: 'Albania was the most isolated country in the world during communism (1944-1991). It built over 170,000 concrete bunkers — one for every 4 citizens — that still dot the landscape today.' },
  { dayId: 18, text: 'Albania only opened its borders to tourism in 1990. Before that, it was illegal for Albanians to own a car, practice religion, or have contact with foreigners.' },
  { dayId: 19, text: 'Athens has been continuously inhabited for over 5,000 years, making it one of the world\'s oldest cities. The name "Athens" is older than written history — its origin is unknown.' },
  { dayId: 20, text: 'The Parthenon was built between 447 and 432 BC without mortar — every stone was precisely cut to fit together using iron clamps. It has survived for nearly 2,500 years.' },
  { dayId: 21, text: 'The Monastiraki Flea Market has been running since the Ottoman era. On Sundays it expands dramatically — locals joke that if something is stolen in Athens on Saturday, you can buy it back here on Sunday.' },
  { dayId: 22, text: 'Greece has more archaeological museums than any other country in the world. It is estimated that 70% of all ancient artifacts in existence are Greek.' },
  { dayId: 23, text: 'You have now traveled through 8 countries, 15+ cities, visited 20+ companies, and covered roughly 6,000 miles across Europe. The world looks different now than it did 23 days ago.' },
];

export const emergencyContacts = [
  { label: 'European Emergency', phone: '112', notes: 'Works in all EU and Balkan countries for police, fire, ambulance' },
  { label: 'US Embassy Italy (Rome)', phone: '+39 06 46741', notes: 'Passport loss or emergency in Italy' },
  { label: 'US Embassy Slovenia (Ljubljana)', phone: '+386 1 200 5500', notes: 'Passport loss or emergency in Slovenia' },
  { label: 'US Embassy Croatia (Zagreb)', phone: '+385 1 661 2200', notes: 'Passport loss or emergency in Croatia' },
  { label: 'US Embassy Bosnia (Sarajevo)', phone: '+387 33 704 000', notes: 'Passport loss or emergency in Bosnia' },
  { label: 'US Embassy Montenegro (Podgorica)', phone: '+382 20 410 500', notes: 'Passport loss or emergency in Montenegro' },
  { label: 'US Embassy Albania (Tirana)', phone: '+355 4 224 7285', notes: 'Passport loss or emergency in Albania' },
  { label: 'US Embassy Greece (Athens)', phone: '+30 210 720 2490', notes: 'Passport loss or emergency in Greece' },
  { label: 'Trip Leader — Isaac', phone: 'TBD', notes: 'Add before departure' },
  { label: 'Bus Driver', phone: 'TBD', notes: 'Add before departure' },
  { label: 'Dr. Mattson', phone: 'TBD', notes: 'Add before departure' },
  { label: 'Dr. Salmon', phone: 'TBD', notes: 'Add before departure' },
  { label: 'Venice Hotel — Casa Cardinal Piazza', phone: 'TBD', notes: 'Sestiere Cannaregio 3539/a, Venice' },
  { label: 'Ljubljana Hotel — Ibis Styles', phone: 'TBD', notes: 'Miklošičeva cesta 9, Ljubljana' },
  { label: 'Zagreb Hotel — Hotel Dubrovnik', phone: 'TBD', notes: 'Ljudevita Gaja 1, Zagreb' },
  { label: 'Sarajevo Hotel — Holiday Europa', phone: 'TBD', notes: 'Vladislava Skarića 5, Sarajevo' },
  { label: 'Tirana Hotel', phone: 'TBD', notes: 'Ambasador 1, Tirana' },
  { label: 'Athens Hotel', phone: 'TBD', notes: 'Add before departure' },
  { label: 'Hospital Venice', phone: '+39 041 529 4111', notes: 'Ospedale Civile SS. Giovanni e Paolo' },
  { label: 'Hospital Ljubljana', phone: '+386 1 522 5050', notes: 'UKC Ljubljana' },
  { label: 'Hospital Zagreb', phone: '+385 1 238 8888', notes: 'KBC Zagreb' },
  { label: 'Hospital Sarajevo', phone: '+387 33 297 000', notes: 'KCUS Sarajevo' },
  { label: 'Hospital Athens', phone: '+30 210 777 8901', notes: 'Evangelismos Hospital' },
];

export const announcements = [
  { id: 1, message: 'Welcome to the BYU Europe Trip app! Check the Itinerary tab each morning for the day\'s schedule.', emoji: '👋', active: false, createdAt: '2026-04-27' },
];
