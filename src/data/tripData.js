// BYU Europe Study Abroad 2026 — Trip Data
// Last updated: April 2026

export const TRIP_START = '2026-04-27';
export const TRIP_END = '2026-05-19';
export const TOTAL_DAYS = 23;

export const PROFESSOR_EMAILS = ['isaacjdet@gmail.com'];
export const PROFESSOR_PASSWORD = 'BYUEUROPE26';

export const CATEGORY_COLORS = {
  'Company Visit': '#1E3A5F',
  'Cultural':      '#C9A84C',
  'Food':          '#2D6A4F',
  'Transport':     '#3A3A4A',
  'Free Time':     '#1A4A6B',
  'Accommodation': '#4A1A6B',
};

export const days = [
  { id: 1,  date: '2026-04-27', city: 'Provo',          country: 'USA',        phase: 'Workshop', summary: 'Kickoff Dinner at Dr. Mattson\'s house — the adventure begins',                                                                                timezone: 'America/Denver' },
  { id: 2,  date: '2026-04-28', city: 'Provo',          country: 'USA',        phase: 'Workshop', summary: 'Workshop day — culture briefing with Malcolm Botto and safety briefing',                                                                       timezone: 'America/Denver' },
  { id: 3,  date: '2026-04-29', city: 'Provo',          country: 'USA',        phase: 'Workshop', summary: 'Workshop + company visits to Hall Labs and Vanderhall',                                                                                        timezone: 'America/Denver', packedLunch: false },
  { id: 4,  date: '2026-04-30', city: 'Provo',          country: 'USA',        phase: 'Workshop', summary: 'Final workshop day — Rocketship, Amano, and Blendtec visits',                                                                                  timezone: 'America/Denver', packedLunch: true },
  { id: 5,  date: '2026-05-01', city: 'Salt Lake City', country: 'USA',        phase: 'Travel',   summary: 'Departure day — fly to Amsterdam via Delta DL56. Bring your own lunch for the journey.',                                                       timezone: 'America/Denver', packedLunch: true },
  { id: 6,  date: '2026-05-02', city: 'Venice',         country: 'Italy',      phase: 'Europe',   summary: 'Arrival in Venice — Da Vinci Museum, gondola ride, Rialto Bridge sunset',                                                                      timezone: 'Europe/Rome' },
  { id: 7,  date: '2026-05-03', city: 'Venice',         country: 'Italy',      phase: 'Europe',   summary: 'Church in Mestre, Saint Mark\'s Basilica, Bell Tower, Vivaldi concert',                                                                        timezone: 'Europe/Rome' },
  { id: 8,  date: '2026-05-04', city: 'Venice',         country: 'Italy',      phase: 'Europe',   summary: 'Company visits in Venice, drive to Ljubljana via Trieste and Miramare Castle',                                                                 timezone: 'Europe/Rome' },
  { id: 9,  date: '2026-05-05', city: 'Ljubljana',      country: 'Slovenia',   phase: 'Europe',   summary: 'ELAN factory visit, Lake Bled hike and island, Ljubljana castle and bridges, dinner at Figovec',                                               timezone: 'Europe/Ljubljana' },
  { id: 10, date: '2026-05-06', city: 'Zagreb',         country: 'Croatia',    phase: 'Europe',   summary: 'SMM company visit in Maribor, Trakošćan Castle, drive to Zagreb — buy lunch for tomorrow',                                                     timezone: 'Europe/Zagreb',    packedLunch: false, buyLunchTonight: true },
  { id: 11, date: '2026-05-07', city: 'Zagreb',         country: 'Croatia',    phase: 'Europe',   summary: 'Rimac + Intis Engineering visits, Končar Group tour, Nikola Tesla Museum, group dinner — buy lunch for tomorrow',                              timezone: 'Europe/Zagreb',    packedLunch: true,  buyLunchTonight: true },
  { id: 12, date: '2026-05-08', city: 'Sarajevo',       country: 'Bosnia',     phase: 'Europe',   summary: 'HSTec visit in Zadar, Split and Diocletian\'s Palace, Kravica Waterfalls, drive to Sarajevo',                                                  timezone: 'Europe/Sarajevo',  packedLunch: true },
  { id: 13, date: '2026-05-09', city: 'Sarajevo',       country: 'Bosnia',     phase: 'Europe',   summary: 'Cable car, Assassination Site, War Childhood Museum, Baščaršija, Yellow Fortress at sunset',                                                   timezone: 'Europe/Sarajevo' },
  { id: 14, date: '2026-05-10', city: 'Sarajevo',       country: 'Bosnia',     phase: 'Europe',   summary: 'Church, Sacred Heart Cathedral, War Tunnel Museum, group dinner — buy lunch for tomorrow',                                                     timezone: 'Europe/Sarajevo',  buyLunchTonight: true },
  { id: 15, date: '2026-05-11', city: 'Sarajevo',       country: 'Bosnia',     phase: 'Europe',   summary: 'Kinetic company visit, AVDIC Violins, third company visit in Sarajevo — early to bed',                                                         timezone: 'Europe/Sarajevo',  packedLunch: true,  buyLunchTonight: true },
  { id: 16, date: '2026-05-12', city: 'Kotor',          country: 'Montenegro', phase: 'Europe',   summary: 'Aluminij visit in Mostar, cultural stop in Dubrovnik, Adriatic 42 in Bijela, St. John Fortress hike at night in Kotor',                       timezone: 'Europe/Podgorica', packedLunch: true },
  { id: 17, date: '2026-05-13', city: 'Tirana',         country: 'Albania',    phase: 'Europe',   summary: 'Daido Metal visit, drive to Tirana, Skanderbeg Square, Bunk\'Art 2, Et\'hem Bey Mosque, group dinner',                                         timezone: 'Europe/Tirane' },
  { id: 18, date: '2026-05-14', city: 'Tirana',         country: 'Albania',    phase: 'Europe',   summary: 'Timak and Everest SHPK company visits, fly to Athens',                                                                                         timezone: 'Europe/Tirane' },
  { id: 19, date: '2026-05-15', city: 'Athens',         country: 'Greece',     phase: 'Europe',   summary: 'Elefsis Shipyards and Askra Olive Oil company visits',                                                                                         timezone: 'Europe/Athens' },
  { id: 20, date: '2026-05-16', city: 'Athens',         country: 'Greece',     phase: 'Europe',   summary: 'Acropolis Museum, Acropolis, lunch, Ancient Agora, team presentations, dinner at Hill Athens',                                                 timezone: 'Europe/Athens' },
  { id: 21, date: '2026-05-17', city: 'Athens',         country: 'Greece',     phase: 'Europe',   summary: 'Church in Halandri, Lycabettus Hill, Monastiraki Flea Market',                                                                                 timezone: 'Europe/Athens' },
  { id: 22, date: '2026-05-18', city: 'Athens',         country: 'Greece',     phase: 'Europe',   summary: 'Get 3D and Skaramangas Shipyards visits, group final dinner',                                                                                  timezone: 'Europe/Athens' },
  { id: 23, date: '2026-05-19', city: 'Athens',         country: 'Greece',     phase: 'Europe',   summary: 'Fly home to Utah — safe travels!',                                                                                                             timezone: 'Europe/Athens' },
];

// showStudents: true = visible to all, false = professor/admin only
export const activities = [

  // ─── DAY 1 — April 27, Provo ───
  { id: 1,   dayId: 1,  time: '6:00 PM',   title: 'Kickoff Dinner',                          category: 'Food',         location: 'Mattson\'s House',                         mapsUrl: '',                                                                  cost: 0,  notes: 'Dress nicely. The adventure starts here!',                                                                                                         showStudents: true },

  // ─── DAY 2 — April 28, Provo ───
  { id: 2,   dayId: 2,  time: '8:00 AM',   title: 'Morning Workshop',                        category: 'Company Visit', location: 'EB Event Space',                          mapsUrl: '',                                                                  cost: 0,  notes: 'Dr. Mattson and Dr. Salmon. Runs until noon.',                                                                                                      showStudents: true },
  { id: 3,   dayId: 2,  time: '12:00 PM',  title: 'Lunch',                                   category: 'Food',         location: 'EB Event Space',                          mapsUrl: '',                                                                  cost: 0,  notes: 'Blue Ribbon Box Lunch provided.',                                                                                                                   showStudents: true },
  { id: 4,   dayId: 2,  time: '12:00 PM',  title: 'Culture Briefing',                        category: 'Cultural',     location: 'EB Event Space',                          mapsUrl: '',                                                                  cost: 0,  notes: 'Malcolm Botto — what to expect across Europe.',                                                                                                     showStudents: true },
  { id: 5,   dayId: 2,  time: '1:00 PM',   title: 'Safety Briefing',                         category: 'Cultural',     location: 'EB Event Space',                          mapsUrl: '',                                                                  cost: 0,  notes: 'Olivia Toone — travel safety protocols.',                                                                                                           showStudents: true },
  { id: 6,   dayId: 2,  time: '2:00 PM',   title: 'Afternoon Workshop',                      category: 'Company Visit', location: 'EB Event Space',                          mapsUrl: '',                                                                  cost: 0,  notes: 'Dr. Mattson and Dr. Salmon. Runs until 5 PM.',                                                                                                      showStudents: true },

  // ─── DAY 3 — April 29, Provo ───
  { id: 7,   dayId: 3,  time: '8:00 AM',   title: 'Morning Workshop',                        category: 'Company Visit', location: 'EB Event Space',                          mapsUrl: '',                                                                  cost: 0,  notes: '',                                                                                                                                                  showStudents: true },
  { id: 8,   dayId: 3,  time: '12:15 PM',  title: 'Lunch at Sportellis',                     category: 'Food',         location: 'Sportellis, Provo',                        mapsUrl: '',                                                                  cost: 0,  notes: '',                                                                                                                                                  showStudents: true },
  { id: 9,   dayId: 3,  time: '1:30 PM',   title: 'Hall Labs Visit',                         category: 'Company Visit', location: 'Hall Labs, Provo',                         mapsUrl: '',                                                                  cost: 0,  notes: '',                                                                                                                                                  showStudents: true },
  { id: 10,  dayId: 3,  time: '3:30 PM',   title: 'Vanderhall Visit',                        category: 'Company Visit', location: 'Vanderhall',                               mapsUrl: '',                                                                  cost: 0,  notes: '',                                                                                                                                                  showStudents: true },

  // ─── DAY 4 — April 30, Provo ───
  { id: 11,  dayId: 4,  time: '8:00 AM',   title: 'Workshop — The Launch',                   category: 'Company Visit', location: 'HBLL 3714',                                mapsUrl: '',                                                                  cost: 0,  notes: '',                                                                                                                                                  showStudents: true },
  { id: 12,  dayId: 4,  time: '9:40 AM',   title: 'Rocketship Visit',                        category: 'Company Visit', location: 'Rocketship, Provo',                         mapsUrl: '',                                                                  cost: 0,  notes: '',                                                                                                                                                  showStudents: true },
  { id: 13,  dayId: 4,  time: '12:00 PM',  title: 'Lunch in Pioneer Park',                   category: 'Food',         location: 'Pioneer Park, Provo',                      mapsUrl: '',                                                                  cost: 0,  notes: 'Bring your own lunch.',                                                                                                                             showStudents: true },
  { id: 14,  dayId: 4,  time: '12:45 PM',  title: 'Amano Chocolate Visit',                   category: 'Company Visit', location: 'Amano, Provo',                              mapsUrl: '',                                                                  cost: 0,  notes: '',                                                                                                                                                  showStudents: true },
  { id: 15,  dayId: 4,  time: '2:40 PM',   title: 'Blendtec Visit',                          category: 'Company Visit', location: 'Blendtec, Orem',                            mapsUrl: '',                                                                  cost: 0,  notes: '',                                                                                                                                                  showStudents: true },

  // ─── DAY 5 — May 1, Salt Lake City ───
  { id: 16,  dayId: 5,  time: '10:00 AM',  title: 'Final Workshop',                          category: 'Company Visit', location: 'EB East Lawn',                              mapsUrl: '',                                                                  cost: 0,  notes: 'Last session before departure.',                                                                                                                    showStudents: true },
  { id: 17,  dayId: 5,  time: '11:10 AM',  title: 'UVX to FrontRunner',                      category: 'Transport',    location: 'UVX South Campus',                         mapsUrl: '',                                                                  cost: 0,  notes: 'Departs 11:10 AM sharp — do not be late. Bring your own lunch for the journey.',                                                                    showStudents: true },
  { id: 18,  dayId: 5,  time: '11:46 AM',  title: 'FrontRunner to SLC Airport',              category: 'Transport',    location: 'Provo Central Station',                    mapsUrl: '',                                                                  cost: 0,  notes: 'Allow time for check-in and security.',                                                                                                             showStudents: false },
  { id: 19,  dayId: 5,  time: '4:20 PM',   title: 'Fly to Amsterdam',                        category: 'Transport',    location: 'SLC Airport',                              mapsUrl: '',                                                                  cost: 0,  notes: 'Delta flight DL56. Overnight flight — arrives Amsterdam 10:15 AM May 2.',                                                                           showStudents: true },

  // ─── DAY 6 — May 2, Venice ───
  { id: 20,  dayId: 6,  time: '11:25 AM',  title: 'Fly AMS → Venice',                        category: 'Transport',    location: 'Amsterdam Schiphol Airport',               mapsUrl: '',                                                                  cost: 0,  notes: 'KLM/Delta flight 9223. Arrives Venice 1:10 PM.',                                                                                                    showStudents: true },
  { id: 21,  dayId: 6,  time: '1:50 PM',   title: 'Transfer to Hotel',                       category: 'Transport',    location: 'VCE Airport',                              mapsUrl: '',                                                                  cost: 0,  notes: 'Take 1:50 PM or 2:20 PM water bus. ~48 min journey.',                                                                                               showStudents: false },
  { id: 22,  dayId: 6,  time: '3:45 PM',   title: 'Da Vinci Museum',                         category: 'Cultural',     location: 'Campo San Rocco, Venice',                  mapsUrl: 'https://maps.app.goo.gl/teRGpKUw6XaWA7ey6',                         cost: 8,  notes: 'Interactive museum with working replicas of Leonardo\'s machines. Last entry 5:15 PM. Book in advance for group.', lat: 45.4340, lng: 12.3275,                                      showStudents: true },
  { id: 23,  dayId: 6,  time: '6:15 PM',   title: 'Gondola Ride',                            category: 'Cultural',     location: 'Gondola Station S. Tomà, Venice',           mapsUrl: '',                                                                  cost: 18, notes: '4 gondolas for 17 people. Pre-booked. Daytime rate before 7 PM. ~30 minutes.', lat: 45.4337, lng: 12.3236,                                                                       showStudents: true },
  { id: 24,  dayId: 6,  time: '7:00 PM',   title: 'Rialto Bridge Sunset',                    category: 'Cultural',     location: 'Ponte di Rialto, Venice',                  mapsUrl: 'https://maps.app.goo.gl/5K3UFmxmi9j8Bocw9',                         cost: 0,  notes: 'Free. Sunset ~7:53 PM in May. Golden hour views over the Grand Canal.', lat: 45.4380, lng: 12.3359,                                                                              showStudents: true },
  { id: 25,  dayId: 6,  time: '7:30 PM',   title: 'Free Time + Dinner',                      category: 'Free Time',    location: 'Venice',                                   mapsUrl: '',                                                                  cost: 0,  notes: 'Explore the city and find dinner on your own.',                                                                                                     showStudents: true },

  // ─── DAY 7 — May 3, Venice ───
  { id: 26,  dayId: 7,  time: '8:15 AM',   title: 'Church — Mestre Ward',                    category: 'Cultural',     location: 'Via Castellana 124C, Zelarino, Italy',     mapsUrl: 'https://maps.app.goo.gl/z5D8Q4vySCnJM4KC8',                         cost: 0,  notes: 'Italian language services begin 9:30 AM. Allow travel time.',                                                                                        showStudents: true },
  { id: 27,  dayId: 7,  time: '1:15 PM',   title: 'Lunch + Free Time',                       category: 'Food',         location: 'Bar Rialto da Lollo, Venice',               mapsUrl: 'https://maps.app.goo.gl/tNrxfjEwxhGrXzKE8',                         cost: 15, notes: '',                                                                                                                                                  showStudents: true },
  { id: 28,  dayId: 7,  time: '3:00 PM',   title: 'Saint Mark\'s Basilica',                  category: 'Cultural',     location: 'Piazza San Marco, Venice',                 mapsUrl: '',                                                                  cost: 0,  notes: 'Book timed entry in advance — lines can be 2+ hours without booking.', lat: 45.4345, lng: 12.3390,                                                                              showStudents: true },
  { id: 29,  dayId: 7,  time: '4:00 PM',   title: 'Saint Mark\'s Bell Tower',                category: 'Cultural',     location: 'Saint Mark\'s Campanile, Venice',           mapsUrl: '',                                                                  cost: 5,  notes: 'Elevator available. Stunning 360° views over Venice.', lat: 45.4343, lng: 12.3388,                                                                                             showStudents: true },
  { id: 30,  dayId: 7,  time: '5:00 PM',   title: 'Free Time',                               category: 'Free Time',    location: 'Venice',                                   mapsUrl: '',                                                                  cost: 0,  notes: 'Wander the streets, find gelato, explore hidden canals.',                                                                                          showStudents: true },
  { id: 31,  dayId: 7,  time: '8:30 PM',   title: 'Vivaldi Concert',                         category: 'Cultural',     location: 'Scuola Grande San Teodoro, Venice',         mapsUrl: 'https://maps.app.goo.gl/e6TCWaiALrYAu7yQ9',                         cost: 30, notes: 'Live Vivaldi in period costume. Book tickets in advance. Smart casual dress.', lat: 45.4356, lng: 12.3364,                                                                        showStudents: true },

  // ─── DAY 8 — May 4, Venice → Ljubljana ───
  { id: 32,  dayId: 8,  time: '9:00 AM',   title: 'Company Visit Venice — AM',               category: 'Company Visit', location: 'Venice',                                   mapsUrl: '',                                                                  cost: 0,  notes: 'John coordinating. Details TBC.',                                                                                                                   showStudents: true },
  { id: 33,  dayId: 8,  time: '2:00 PM',   title: 'Tessitura Bevilacqua',                    category: 'Company Visit', location: 'Tessitura Bevilacqua, Venice',               mapsUrl: '',                                                                  cost: 0,  notes: 'Historic Venetian textile manufacturer — handwoven velvets on looms since 1875. John coordinating.',                                                  showStudents: true },
  { id: 34,  dayId: 8,  time: '3:00 PM',   title: 'Drive to Ljubljana via Trieste',          category: 'Transport',    location: 'Venice → Trieste → Ljubljana',              mapsUrl: '',                                                                  cost: 0,  notes: 'Stop at Miramare Castle on the Trieste coast. John coordinating route.',                                                                            showStudents: true },

  // ─── DAY 9 — May 5, Ljubljana / Lake Bled ───
  { id: 35,  dayId: 9,  time: '7:30 AM',   title: 'Depart for ELAN',                         category: 'Transport',    location: 'Hotel, Ljubljana',                         mapsUrl: '',                                                                  cost: 0,  notes: '~34 min drive to Begunje.',                                                                                                                         showStudents: false },
  { id: 36,  dayId: 9,  time: '9:00 AM',   title: 'ELAN Company Visit',                      category: 'Company Visit', location: 'ELAN, Begunje na Gorenjskem',                mapsUrl: 'https://maps.app.goo.gl/U5qotfvDyMQBf17o7',                         cost: 0,  notes: '2.5 hour visit to the world-famous ski and sports equipment factory. Ends 11:30 AM.', lat: 46.3833, lng: 14.2167,                                                                   showStudents: true },
  { id: 37,  dayId: 9,  time: '11:45 AM',  title: 'Drive to Lake Bled',                      category: 'Transport',    location: 'Begunje → Velika Zaka, Lake Bled',          mapsUrl: 'https://maps.app.goo.gl/HhPvMTsmmaFBwQRk9',                         cost: 0,  notes: '~14 min drive.',                                                                                                                                    showStudents: false },
  { id: 38,  dayId: 9,  time: '12:15 PM',  title: 'Ojstrica Hike',                           category: 'Cultural',     location: 'Ojstrica Trailhead, Lake Bled',             mapsUrl: 'https://maps.app.goo.gl/4Q5hCRnvVJFbvR6s7',                         cost: 0,  notes: 'Steep but short hike to the most iconic viewpoint of Lake Bled. ~1 hour roundtrip. Wear proper shoes.', lat: 46.3631, lng: 14.0925,                                                 showStudents: true },
  { id: 39,  dayId: 9,  time: '1:25 PM',   title: 'Pletna Boat to Bled Island',              category: 'Cultural',     location: 'Velika Zaka Pletna Dock, Lake Bled',        mapsUrl: '',                                                                  cost: 26, notes: '€20 boat + €6 church entry. Pay cash to pletnar. Ring the wishing bell — legend says your wish comes true. ~1 hour total.', lat: 46.3612, lng: 14.0788,                         showStudents: true },
  { id: 40,  dayId: 9,  time: '2:30 PM',   title: 'Bled Cream Cake',                         category: 'Food',         location: 'Slaščičarna Zima, Bled',                   mapsUrl: 'https://maps.app.goo.gl/dN71gBpPETcAa4XL8',                         cost: 5,  notes: 'The iconic kremšnita — Bled\'s famous cream cake since 1953. Order takeaway, boxed individually. Eat on the bus. Bring napkins!',                       showStudents: true },
  { id: 41,  dayId: 9,  time: '3:50 PM',   title: 'Drive to Ljubljana',                      category: 'Transport',    location: 'Bled → Ljubljana',                         mapsUrl: 'https://maps.app.goo.gl/YiubxcZQeoGhpmhR8',                         cost: 0,  notes: '~1 hour 20 min drive. Arrive ~5:10 PM.',                                                                                                            showStudents: false },
  { id: 42,  dayId: 9,  time: '5:25 PM',   title: 'Triple Bridge + Dragon Bridge',           category: 'Cultural',     location: 'Triple Bridge, Ljubljana',                  mapsUrl: 'https://maps.app.goo.gl/jHEKS6cJjmyUFLjy9',                         cost: 0,  notes: 'Walk along the Ljubljanica River to both iconic bridges — 5-10 min apart. Free and open 24/7.', lat: 46.0514, lng: 14.5060,                                                        showStudents: true },
  { id: 43,  dayId: 9,  time: '5:30 PM',   title: 'Funicular to Ljubljana Castle',           category: 'Cultural',     location: 'Krekov trg, Ljubljana',                    mapsUrl: '',                                                                  cost: 6,  notes: '2-min funicular ride. Buy return ticket. Runs until 7 PM in May.',                                                                                  showStudents: true },
  { id: 44,  dayId: 9,  time: '5:35 PM',   title: 'Ljubljana Castle',                        category: 'Cultural',     location: 'Ljubljana Castle',                         mapsUrl: '',                                                                  cost: 10, notes: 'Viewing Tower, Slovenian History Exhibition, Museum of Puppetry. Allow ~1 hr. Courtyard is free.', lat: 46.0490, lng: 14.5082,                                                   showStudents: true },
  { id: 45,  dayId: 9,  time: '6:20 PM',   title: 'Funicular Down',                          category: 'Transport',    location: 'Ljubljana Castle Funicular',                mapsUrl: '',                                                                  cost: 0,  notes: 'Included in return ticket.',                                                                                                                        showStudents: false },
  { id: 46,  dayId: 9,  time: '6:40 PM',   title: 'Dinner at Figovec',                       category: 'Food',         location: 'Figovec, Gosposvetska cesta 1, Ljubljana',  mapsUrl: 'https://maps.app.goo.gl/NneJiJR2bW9KLbAQ7',                         cost: 25, notes: 'Traditional Slovenian dinner. À la carte menu. Reservation confirmed. Email: info@figovec.si.', lat: 46.0551, lng: 14.5042,                                                        showStudents: true },

  // ─── DAY 10 — May 6, Ljubljana → Zagreb ───
  { id: 47,  dayId: 10, time: '7:30 AM',   title: 'SMM Company Visit',                       category: 'Company Visit', location: 'SMM, Maribor, Slovenia',                    mapsUrl: 'https://maps.app.goo.gl/MAoMU4ZUZWS7mS328',                         cost: 0,  notes: '',                                                                                                                                                  showStudents: true },
  { id: 48,  dayId: 10, time: '12:00 PM',  title: 'Drive to Trakošćan Castle',               category: 'Transport',    location: 'Maribor → Trakošćan, Croatia',              mapsUrl: 'https://maps.app.goo.gl/gF61pFqrLaK839zHA',                         cost: 0,  notes: '~1 hour drive.',                                                                                                                                    showStudents: false },
  { id: 49,  dayId: 10, time: '1:00 PM',   title: 'Trakošćan Castle',                        category: 'Cultural',     location: 'Trakošćan 4, Lepoglava, Croatia',           mapsUrl: 'https://maps.app.goo.gl/gF61pFqrLaK839zHA',                         cost: 0,  notes: 'Medieval castle in the Croatian highlands with a beautiful lake walk.',                                                                               showStudents: true },
  { id: 50,  dayId: 10, time: '3:00 PM',   title: 'Drive to Zagreb',                         category: 'Transport',    location: 'Trakošćan → Zagreb',                       mapsUrl: 'https://maps.app.goo.gl/bQZAaBbf92Wj2Ayx6',                         cost: 0,  notes: '~2.5 hour drive. Arrive ~5:30 PM.',                                                                                                                 showStudents: false },
  { id: 51,  dayId: 10, time: '5:30 PM',   title: 'Zagreb Cathedral + St. Mark\'s Church',   category: 'Cultural',     location: 'Zagreb Old Town',                           mapsUrl: 'https://maps.app.goo.gl/6WQeCJUbBKNigfDL6',                         cost: 0,  notes: 'Evening walk through Zagreb\'s historic center. Also explore Tkalčićeva Street and the Chocolate Museum.',                                             showStudents: true },
  { id: 52,  dayId: 10, time: '8:00 PM',   title: 'Free Time',                               category: 'Free Time',    location: 'Zagreb',                                   mapsUrl: '',                                                                  cost: 0,  notes: '⚠️ Buy packed lunch for tomorrow before bed.',                                                                                                      showStudents: true },

  // ─── DAY 11 — May 7, Zagreb ───
  { id: 53,  dayId: 11, time: '8:30 AM',   title: 'Intis Engineering Visit',                 category: 'Company Visit', location: 'Velika Cesta 97, Odra, Zagreb',              mapsUrl: 'https://maps.app.goo.gl/xpwcPphLVKrdCGXVA',                         cost: 0,  notes: '',                                                                                                                                                  showStudents: true },
  { id: 54,  dayId: 11, time: '8:45 AM',   title: 'Rimac Company Visit',                     category: 'Company Visit', location: 'Kerestinečka cesta 54, Kerestinec',          mapsUrl: 'https://maps.app.goo.gl/ET1urH4b4tocZLq39',                         cost: 0,  notes: 'Croatian electric hypercar manufacturer — one of Europe\'s most exciting companies. Pre-registered.',                                                   showStudents: true },
  { id: 55,  dayId: 11, time: '12:30 PM',  title: 'Lunch on Bus',                            category: 'Food',         location: 'Bus',                                       mapsUrl: '',                                                                  cost: 0,  notes: 'Packed lunch from last night.',                                                                                                                     showStudents: true },
  { id: 56,  dayId: 11, time: '1:00 PM',   title: 'Končar Group Visit',                      category: 'Company Visit', location: 'KONČAR Electric Vehicles, Zagreb',           mapsUrl: 'https://maps.app.goo.gl/SSeviwmkDX4HjErN6',                         cost: 0,  notes: '1.5 hour tour of major Croatian electrical engineering company.',                                                                                    showStudents: true },
  { id: 57,  dayId: 11, time: '3:00 PM',   title: 'Nikola Tesla Technical Museum',           category: 'Cultural',     location: 'Nikola Tesla Technical Museum, Zagreb',     mapsUrl: 'https://maps.app.goo.gl/VD7LDeQigQkekBJr8',                         cost: 0,  notes: 'Closes 5 PM. Contact: marijo.zrna@tmnt.hr. Website: tmnt.hr',                                                                                       showStudents: true },
  { id: 58,  dayId: 11, time: '7:00 PM',   title: 'Group Dinner',                            category: 'Food',         location: 'Zagreb',                                    mapsUrl: '',                                                                  cost: 25, notes: '⚠️ Buy packed lunch for tomorrow before bed.',                                                                                                      showStudents: true },

  // ─── DAY 12 — May 8, Zagreb → Sarajevo ───
  { id: 59,  dayId: 12, time: '6:00 AM',   title: 'HSTec Visit — Zadar',                     category: 'Company Visit', location: 'Zagrebačka 100, Zadar, Croatia',             mapsUrl: 'https://maps.app.goo.gl/xR7Rqg1z7uvxRxQn7',                         cost: 0,  notes: 'Early departure from hotel. Pack bags the night before.',                                                                                           showStudents: true },
  { id: 60,  dayId: 12, time: '12:30 PM',  title: 'Lunch on Bus — Drive to Split',           category: 'Food',         location: 'Bus → Split',                               mapsUrl: 'https://maps.app.goo.gl/PTkJ2dfnTFAUp2Mh9',                         cost: 0,  notes: 'Packed lunch from last night. ~2 hour drive to Split.',                                                                                             showStudents: true },
  { id: 61,  dayId: 12, time: '2:30 PM',   title: 'Split — Diocletian\'s Palace',            category: 'Cultural',     location: 'Split, Croatia',                            mapsUrl: '',                                                                  cost: 0,  notes: 'One of the best-preserved Roman palaces in the world. Walk the Riva promenade along the waterfront.',                                                 showStudents: true },
  { id: 62,  dayId: 12, time: '5:00 PM',   title: 'Kravica Waterfalls',                      category: 'Cultural',     location: 'Kravica, Bosnia & Herzegovina',              mapsUrl: 'https://maps.app.goo.gl/r6fEioJixVqENWMT8',                         cost: 0,  notes: 'Stunning natural waterfall in a lush canyon. Bring swimwear if desired — swimming allowed seasonally.',                                                showStudents: true },
  { id: 63,  dayId: 12, time: '8:00 PM',   title: 'Arrive Sarajevo',                         category: 'Accommodation', location: 'Sarajevo',                                  mapsUrl: '',                                                                  cost: 0,  notes: 'Long travel day — more than 10 hours total. Get good rest.',                                                                                        showStudents: true },

  // ─── DAY 13 — May 9, Sarajevo ───
  { id: 64,  dayId: 13, time: '9:00 AM',   title: 'Sarajevo Cable Car',                      category: 'Cultural',     location: 'Sarajevo Cable Car',                        mapsUrl: 'https://maps.app.goo.gl/UuafuJofwhSyurfa8',                         cost: 0,  notes: 'Morning ride up Mount Trebević for views over the city.',                                                                                           showStudents: true },
  { id: 65,  dayId: 13, time: '11:00 AM',  title: 'Latin Bridge + Assassination Site',       category: 'Cultural',     location: 'Latin Bridge, Sarajevo',                    mapsUrl: 'https://maps.app.goo.gl/dnU44MQnF6f423yr8',                         cost: 0,  notes: 'Site of the 1914 assassination of Archduke Franz Ferdinand — the event that triggered WWI.',                                                         showStudents: true },
  { id: 66,  dayId: 13, time: '12:00 PM',  title: 'War Childhood Museum + Baščaršija',       category: 'Cultural',     location: 'Sarajevo',                                  mapsUrl: '',                                                                  cost: 5,  notes: 'Deeply moving museum. Contact: visit@warchildhood.org. Then explore Baščaršija old bazaar.',                                                        showStudents: true },
  { id: 67,  dayId: 13, time: '2:00 PM',   title: 'Free Time',                               category: 'Free Time',    location: 'Sarajevo',                                  mapsUrl: '',                                                                  cost: 0,  notes: 'Half day free — explore on your own.',                                                                                                              showStudents: true },
  { id: 68,  dayId: 13, time: '7:00 PM',   title: 'Yellow Fortress at Sunset',               category: 'Cultural',     location: 'Yellow Fortress, Sarajevo',                 mapsUrl: '',                                                                  cost: 0,  notes: 'Arrive 30 min before sunset for the best views over the city. One of Sarajevo\'s most beautiful spots.',                                            showStudents: true },

  // ─── DAY 14 — May 10, Sarajevo ───
  { id: 69,  dayId: 14, time: '9:35 AM',   title: 'Church — Sarajevo Branch',                category: 'Cultural',     location: 'Mehmeda Spahe 24, Sarajevo',                mapsUrl: 'https://maps.app.goo.gl/2Fx3ia1P8hC5j3nT7',                         cost: 0,  notes: 'Croatian language services at 10:00 AM.',                                                                                                           showStudents: true },
  { id: 70,  dayId: 14, time: '1:00 PM',   title: 'Sacred Heart Cathedral + War Tunnel Museum', category: 'Cultural',  location: 'Sarajevo',                                  mapsUrl: '',                                                                  cost: 5,  notes: 'The War Tunnel was used to supply the besieged city during the 1990s siege — a deeply powerful experience.',                                         showStudents: true },
  { id: 71,  dayId: 14, time: '7:00 PM',   title: 'Group Dinner',                            category: 'Food',         location: 'Sarajevo',                                  mapsUrl: '',                                                                  cost: 20, notes: '⚠️ Buy packed lunch for tomorrow before bed.',                                                                                                      showStudents: true },

  // ─── DAY 15 — May 11, Sarajevo ───
  { id: 72,  dayId: 15, time: '8:00 AM',   title: 'Kinetic Company Visit',                   category: 'Company Visit', location: 'Tvornička 3, Sarajevo',                     mapsUrl: 'https://maps.app.goo.gl/VMyy7rxGzmkfgLMX6',                         cost: 0,  notes: '',                                                                                                                                                  showStudents: true },
  { id: 73,  dayId: 15, time: '11:00 AM',  title: 'AVDIC Violins',                           category: 'Company Visit', location: 'Tuzla, Bosnia',                             mapsUrl: 'https://maps.app.goo.gl/3qUZe98G1uyXtBkc7',                         cost: 0,  notes: 'Handcrafted string instrument workshop — a truly unique visit.',                                                                                    showStudents: true },
  { id: 74,  dayId: 15, time: '11:30 AM',  title: 'Lunch on Bus',                            category: 'Food',         location: 'Bus',                                       mapsUrl: '',                                                                  cost: 0,  notes: 'Packed lunch from last night.',                                                                                                                     showStudents: true },
  { id: 75,  dayId: 15, time: '4:00 PM',   title: 'Third Company Visit',                     category: 'Company Visit', location: 'Sarajevo',                                  mapsUrl: '',                                                                  cost: 0,  notes: 'Details TBC.',                                                                                                                                      showStudents: true },
  { id: 76,  dayId: 15, time: '8:00 PM',   title: 'Free Time + Early to Bed',                category: 'Free Time',    location: 'Sarajevo',                                  mapsUrl: '',                                                                  cost: 0,  notes: '⚠️ Buy packed lunch for tomorrow. Early to bed — long travel day tomorrow.',                                                                        showStudents: true },

  // ─── DAY 16 — May 12, Mostar → Dubrovnik → Montenegro ───
  { id: 77,  dayId: 16, time: '6:30 AM',   title: 'Aluminij Visit + Mostar Bridge',          category: 'Company Visit', location: 'Bačevići, Mostar, Bosnia',                  mapsUrl: 'https://maps.app.goo.gl/SoGtb9SFsFh8Sdci9',                         cost: 0,  notes: 'See the iconic Stari Most (Old Bridge) while in Mostar — do not skip this.',                                                                        showStudents: true },
  { id: 78,  dayId: 16, time: '10:30 AM',  title: 'Cultural Stop in Dubrovnik',              category: 'Cultural',     location: 'Dubrovnik, Croatia',                        mapsUrl: '',                                                                  cost: 0,  notes: 'Brief stop in the famous walled city on the Adriatic coast.',                                                                                       showStudents: true },
  { id: 79,  dayId: 16, time: '12:00 PM',  title: 'Adriatic 42 — Bijela',                    category: 'Company Visit', location: 'Bijela, Montenegro',                        mapsUrl: 'https://maps.app.goo.gl/dWug6YbHkK2JUQ6f8',                         cost: 0,  notes: 'Boat manufacturer visit in Montenegro.',                                                                                                            showStudents: true },
  { id: 80,  dayId: 16, time: '5:30 PM',   title: 'Drive to Kotor',                          category: 'Transport',    location: 'Bijela → Kotor',                            mapsUrl: 'https://maps.app.goo.gl/qETQig1aAcgJCw5NA',                         cost: 0,  notes: '~1 hour drive along the stunning Bay of Kotor.',                                                                                                    showStudents: false },
  { id: 81,  dayId: 16, time: '7:15 PM',   title: 'St. John Fortress Night Hike',            category: 'Cultural',     location: 'Kotor Fortress, Montenegro',                mapsUrl: 'https://maps.app.goo.gl/TBRRYCkTPjjZHP6z8',                         cost: 0,  notes: '⚠️ BRING FLASHLIGHTS. Night hike up the fortress walls above Kotor\'s Old Town. Spectacular views. Meet at Rooftop Terrace Hippocampus first.',       showStudents: true },
  { id: 82,  dayId: 16, time: '9:30 PM',   title: 'Dinner on Your Own',                      category: 'Free Time',    location: 'Kotor Old Town',                            mapsUrl: '',                                                                  cost: 0,  notes: 'Plenty of restaurants in the Old Town. Long day — more than 10 hours of travel.',                                                                   showStudents: true },

  // ─── DAY 17 — May 13, Kotor → Tirana ───
  { id: 83,  dayId: 17, time: '8:30 AM',   title: 'Daido Metal Visit',                       category: 'Company Visit', location: 'DAIDO METAL KOTOR, Montenegro',              mapsUrl: 'https://maps.app.goo.gl/7XnC3AQE7jyrbKfY6',                         cost: 0,  notes: '⚠️ 7-day warning contact required. Chris coordinating.',                                                                                            showStudents: true },
  { id: 84,  dayId: 17, time: '11:30 AM',  title: 'Drive to Tirana',                         category: 'Transport',    location: 'Montenegro → Tirana, Albania',              mapsUrl: 'https://maps.app.goo.gl/wU2jd3UNezdDpBmU6',                         cost: 0,  notes: 'Long drive — arrive ~5:00 PM.',                                                                                                                     showStudents: false },
  { id: 85,  dayId: 17, time: '5:00 PM',   title: 'Check In — Tirana',                       category: 'Accommodation', location: 'Ambasador 1, Tirana, Albania',               mapsUrl: '',                                                                  cost: 0,  notes: '',                                                                                                                                                  showStudents: false },
  { id: 86,  dayId: 17, time: '6:00 PM',   title: 'Skanderbeg Square + Bunk\'Art 2 + Et\'hem Bey Mosque', category: 'Cultural', location: 'Skanderbeg Square, Tirana',         mapsUrl: '',                                                                  cost: 5,  notes: 'Bunk\'Art 2 is a Cold War-era nuclear bunker turned museum — a must. Et\'hem Bey Mosque is stunning.',                                              showStudents: true },
  { id: 87,  dayId: 17, time: '8:00 PM',   title: 'Group Dinner',                            category: 'Food',         location: 'Tirana',                                    mapsUrl: '',                                                                  cost: 20, notes: '',                                                                                                                                                  showStudents: true },

  // ─── DAY 18 — May 14, Tirana → Athens ───
  { id: 88,  dayId: 18, time: '7:30 AM',   title: 'Timak Company Visit',                     category: 'Company Visit', location: 'Tirana Industrial Park, Albania',            mapsUrl: 'https://maps.app.goo.gl/NFG1vvVU98ivojReA',                         cost: 0,  notes: '',                                                                                                                                                  showStudents: true },
  { id: 89,  dayId: 18, time: '1:00 PM',   title: 'Everest SHPK Visit',                      category: 'Company Visit', location: 'Kamëz, Albania',                             mapsUrl: 'https://maps.app.goo.gl/gkUogpfgSvZ1fwyu7',                         cost: 0,  notes: '⚠️ Shoe sizes needed in advance — confirm with professors.',                                                                                         showStudents: true },
  { id: 90,  dayId: 18, time: '7:25 PM',   title: 'Fly to Athens',                           category: 'Transport',    location: 'Tirana Airport',                            mapsUrl: '',                                                                  cost: 0,  notes: 'John coordinating airport logistics.',                                                                                                              showStudents: true },

  // ─── DAY 19 — May 15, Athens ───
  { id: 91,  dayId: 19, time: '9:30 AM',   title: 'Elefsis Shipyards Visit',                 category: 'Company Visit', location: 'Elefsina, Greece',                          mapsUrl: 'https://maps.app.goo.gl/LRqNDk2dYda7wyxH9',                         cost: 0,  notes: '~1 hour visit.',                                                                                                                                    showStudents: true },
  { id: 92,  dayId: 19, time: '1:00 PM',   title: 'Askra Olive Oil Visit',                   category: 'Company Visit', location: 'Nea Ionia, Athens',                         mapsUrl: '',                                                                  cost: 0,  notes: '1.5 hour visit.',                                                                                                                                   showStudents: true },
  { id: 93,  dayId: 19, time: '4:00 PM',   title: 'Cultural Visit Athens',                   category: 'Cultural',     location: 'Athens',                                    mapsUrl: '',                                                                  cost: 0,  notes: 'Details TBC.',                                                                                                                                      showStudents: true },

  // ─── DAY 20 — May 16, Athens ───
  { id: 94,  dayId: 20, time: '9:40 AM',   title: 'Acropolis Museum',                        category: 'Cultural',     location: 'Acropolis Museum, Athens',                  mapsUrl: 'https://maps.app.goo.gl/QWn84JsXgnxDMhAP9',                         cost: 15, notes: 'World-class museum. Book group tickets in advance at theacropolismuseum.gr', lat: 37.9684, lng: 23.7257,                                                                        showStudents: true },
  { id: 95,  dayId: 20, time: '11:00 AM',  title: 'Acropolis',                               category: 'Cultural',     location: 'Acropolis, Athens',                         mapsUrl: 'https://maps.app.goo.gl/wFECYrDQRUZ13KS37',                         cost: 20, notes: 'The Parthenon, Erechtheion, and Temple of Athena Nike. Need to register in advance.', lat: 37.9715, lng: 23.7267,                                                                 showStudents: true },
  { id: 96,  dayId: 20, time: '12:00 PM',  title: 'Lunch — O Gyros Pou Gyrevis',             category: 'Food',         location: 'Athens',                                    mapsUrl: 'https://maps.app.goo.gl/v7wNtLzSpfBv7niz6',                         cost: 10, notes: '',                                                                                                                                                  showStudents: true },
  { id: 97,  dayId: 20, time: '1:30 PM',   title: 'Temple of Olympian Zeus',                 category: 'Cultural',     location: 'Athens',                                    mapsUrl: 'https://maps.app.goo.gl/4dnv8ZVtBr7z1xQp8',                         cost: 0,  notes: '',                                                                                                                                                  showStudents: true },
  { id: 98,  dayId: 20, time: '2:30 PM',   title: 'Ancient Agora',                           category: 'Cultural',     location: 'Ancient Agora, Athens',                     mapsUrl: 'https://maps.app.goo.gl/XdccKcopK7eU1dD67',                         cost: 10, notes: 'Where Socrates walked and Athenian democracy was born. Registration pending.', lat: 37.9753, lng: 23.7219,                                                                       showStudents: true },
  { id: 99,  dayId: 20, time: '4:30 PM',   title: 'Team Presentations',                      category: 'Company Visit', location: 'Athens',                                    mapsUrl: '',                                                                  cost: 0,  notes: 'Share what you learned from the trip.',                                                                                                             showStudents: true },
  { id: 100, dayId: 20, time: '8:00 PM',   title: 'Dinner at Hill Athens',                   category: 'Food',         location: 'Hill Athens, Athens',                       mapsUrl: '',                                                                  cost: 60, notes: 'Reservation at hillathens.gr/en/reservation/ — special group dinner to celebrate the journey.',                                                    showStudents: true },

  // ─── DAY 21 — May 17, Athens ───
  { id: 101, dayId: 21, time: '9:15 AM',   title: 'Church — Halandri Branch',                category: 'Cultural',     location: 'Erifilis 16, Halandri, Athens',              mapsUrl: 'https://maps.app.goo.gl/U93zQUXGe65Bu6iC7',                         cost: 0,  notes: 'Greek language services at 10:00 AM.',                                                                                                              showStudents: true },
  { id: 102, dayId: 21, time: '12:10 PM',  title: 'Lunch',                                   category: 'Food',         location: 'Athens',                                    mapsUrl: '',                                                                  cost: 15, notes: 'Sky Bar or Mpirmpilo — TBC.',                                                                                                                    showStudents: true },
  { id: 103, dayId: 21, time: '2:00 PM',   title: 'Lycabettus Hill',                         category: 'Cultural',     location: 'Lycabettus Hill, Athens',                   mapsUrl: 'https://maps.app.goo.gl/dBzEwdzTw7TMo6aB6',                         cost: 5,  notes: 'Highest point in Athens — stunning 360° views of the city and the Acropolis. Funicular or hike.',                                                     showStudents: true },
  { id: 104, dayId: 21, time: '4:00 PM',   title: 'Monastiraki Flea Market',                 category: 'Free Time',    location: 'Monastiraki, Athens',                       mapsUrl: 'https://maps.app.goo.gl/DWSe23trKFpQpUgC8',                         cost: 0,  notes: 'Famous flea market in the shadow of the Acropolis. Great for last-minute souvenirs.',                                                                showStudents: true },

  // ─── DAY 22 — May 18, Athens ───
  { id: 105, dayId: 22, time: '8:15 AM',   title: 'Get 3D Visit',                            category: 'Company Visit', location: 'Aghioi Anargiroi, Athens',                  mapsUrl: '',                                                                  cost: 0,  notes: '45 min visit.',                                                                                                                                     showStudents: true },
  { id: 106, dayId: 22, time: '12:00 PM',  title: 'Skaramangas Shipyards Visit',             category: 'Company Visit', location: 'Skaramangas, Athens',                       mapsUrl: '',                                                                  cost: 0,  notes: '30 min visit.',                                                                                                                                     showStudents: true },
  { id: 107, dayId: 22, time: '7:00 PM',   title: 'Final Group Dinner',                      category: 'Food',         location: 'Athens',                                    mapsUrl: '',                                                                  cost: 30, notes: 'Last dinner together as a group. Celebrate the journey!',                                                                                         showStudents: true },
  { id: 108, dayId: 22, time: '9:00 PM',   title: 'Free Time — Last Night',                  category: 'Free Time',    location: 'Athens',                                    mapsUrl: '',                                                                  cost: 0,  notes: 'Final evening in Europe. Explore the Plaka neighborhood, sip coffee, watch the city lights.',                                                       showStudents: true },

  // ─── DAY 23 — May 19, Athens → Home ───
  { id: 109, dayId: 23, time: '6:00 AM',   title: 'Fly Home to Utah',                        category: 'Transport',    location: 'Athens Airport',                            mapsUrl: '',                                                                  cost: 0,  notes: 'Check flight details with professors. Long travel day home. Safe travels!',                                                                        showStudents: true },
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

export const emergencyContacts = [
  { label: 'European Emergency',              phone: '112',              notes: 'Works in all EU and Balkan countries for police, fire, ambulance' },
  { label: 'US Embassy Italy (Rome)',         phone: '+39 06 46741',     notes: 'Passport loss or emergency assistance in Italy' },
  { label: 'US Embassy Slovenia (Ljubljana)', phone: '+386 1 200 5500',  notes: 'Passport loss or emergency assistance in Slovenia' },
  { label: 'US Embassy Croatia (Zagreb)',     phone: '+385 1 661 2200',  notes: 'Passport loss or emergency assistance in Croatia' },
  { label: 'US Embassy Bosnia (Sarajevo)',    phone: '+387 33 704 000',  notes: 'Passport loss or emergency assistance in Bosnia' },
  { label: 'US Embassy Montenegro (Podgorica)', phone: '+382 20 410 500', notes: 'Passport loss or emergency assistance in Montenegro' },
  { label: 'US Embassy Albania (Tirana)',     phone: '+355 4 224 7285',  notes: 'Passport loss or emergency assistance in Albania' },
  { label: 'US Embassy Greece (Athens)',      phone: '+30 210 720 2490', notes: 'Passport loss or emergency assistance in Greece' },
  { label: 'Trip Leader — Isaac',             phone: 'TBD',              notes: 'Add before departure' },
  { label: 'Bus Driver',                      phone: 'TBD',              notes: 'Add before departure' },
  { label: 'Dr. Mattson',                     phone: 'TBD',              notes: 'Add before departure' },
  { label: 'Dr. Salmon',                      phone: 'TBD',              notes: 'Add before departure' },
  { label: 'Venice Hotel',                    phone: 'TBD',              notes: 'Sestiere Cannaregio 3539/a, Venice' },
  { label: 'Ljubljana Hotel',                 phone: 'TBD',              notes: 'Miklošičeva cesta 9, Ljubljana' },
  { label: 'Zagreb Hotel',                    phone: 'TBD',              notes: 'Hotel Dubrovnik, Ljudevita Gaja 1, Zagreb' },
  { label: 'Sarajevo Hotel',                  phone: 'TBD',              notes: 'Vladislava Skarića 5, Sarajevo' },
  { label: 'Tirana Hotel',                    phone: 'TBD',              notes: 'Ambasador 1, Tirana' },
  { label: 'Athens Hotel',                    phone: 'TBD',              notes: 'Add before departure' },
  { label: 'Hospital Venice',                 phone: '+39 041 529 4111', notes: 'Ospedale Civile SS. Giovanni e Paolo' },
  { label: 'Hospital Ljubljana',              phone: '+386 1 522 5050',  notes: 'UKC Ljubljana' },
  { label: 'Hospital Zagreb',                 phone: '+385 1 238 8888',  notes: 'KBC Zagreb' },
  { label: 'Hospital Sarajevo',               phone: '+387 33 297 000',  notes: 'KCUS Sarajevo' },
  { label: 'Hospital Athens',                 phone: '+30 210 777 8901', notes: 'Evangelismos Hospital' },
];

// Fun facts — one per day (kept from original, not in new data)
export const FUN_FACTS = [
  "BYU's Marriott School has sent students to Europe for over 20 years of study abroad programs.",
  "The average European works 258 fewer hours per year than the average American.",
  "Venice is built on 118 small islands connected by 400+ bridges — there are no cars in the city center.",
  "Venetian glassblowers have guarded their craft secrets since the 13th century, once exiled to Murano Island by decree.",
  "Delta's transatlantic flights burn roughly 5 gallons of fuel per mile — at 5,500 miles, that's 27,500 gallons for our flight.",
  "Venice's ACTV water buses (vaporetti) carry 180,000 passengers daily — more than many city subway systems.",
  "The Vivaldi concertos you'll hear tonight were composed by a Venetian priest who taught at a girls' orphanage.",
  "Murano glass artisans can work with molten glass at 1,000°C — the average human can withstand only 48°C air temperature.",
  "ELAN, based in Begunje, Slovenia, has been making skis since 1945 and supplied equipment to multiple Olympic champions.",
  "Slovenia has more caves per square kilometer than almost any country on Earth — over 11,000 registered caves.",
  "Rimac's Nevera hypercar accelerates 0–100 km/h in 1.85 seconds, making it the world's fastest production car.",
  "Zadar's Sea Organ — organ pipes built into marble steps — plays music using only wave energy from the Adriatic.",
  "Sarajevo hosted the 1984 Winter Olympics and was the site of the assassination that triggered World War I.",
  "The War Tunnel (Tunnel of Hope) was built in 4 months in 1993 and was 800m long — keeping Sarajevo alive during the siege.",
  "Bosnia has the highest ratio of minefields remaining in Europe — de-mining efforts are still ongoing.",
  "Mostar's Stari Most bridge was destroyed in 1993 and rebuilt in 2004 using the same Ottoman technique from 1566.",
  "Albania's Bunk'Art museums are built inside actual Cold War nuclear bunkers — Hoxha built 173,000 bunkers total.",
  "Tirana's streets were named after days of the week under communism — 'Monday Street,' 'Tuesday Street,' etc.",
  "Greece produces 20% of the world's olive oil — about 130 million olive trees grow across the country.",
  "The Acropolis has survived Persian invasion, Ottoman occupation, a Venetian cannon explosion, and an earthquake.",
  "Athens is the oldest capital city in Europe, continuously inhabited for over 5,000 years.",
  "The Skaramangas Shipyard has built some of the largest tankers in the world — each can carry 2 million barrels of oil.",
  "You've now visited 9 countries and logged roughly 6,200 miles of travel. Safe skies home.",
];

// ─── Helper functions ────────────────────────────────────────────────────────

// Convert "6:00 PM" / "11:46 AM" to total minutes since midnight for comparison
function timeStrToMinutes(timeStr) {
  const parts = timeStr.trim().split(' ');
  const [h, m] = parts[0].split(':').map(Number);
  const ampm = parts[1];
  let hours = h;
  if (ampm === 'PM' && h !== 12) hours += 12;
  if (ampm === 'AM' && h === 12) hours = 0;
  return hours * 60 + m;
}

export function getTodayDayNumber() {
  const today = new Date();
  const start = new Date(TRIP_START);
  today.setHours(0, 0, 0, 0);
  start.setHours(0, 0, 0, 0);
  const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24));
  if (diff < 0 || diff >= TOTAL_DAYS) return null;
  return diff + 1;
}

export function getDayData(dayId) {
  return days.find(d => d.id === dayId) || null;
}

export function getActivitiesForDay(dayId) {
  return activities
    .filter(a => a.dayId === dayId)
    .sort((a, b) => timeStrToMinutes(a.time) - timeStrToMinutes(b.time));
}

export function getNextActivity(dayId) {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const dayActivities = getActivitiesForDay(dayId);
  return (
    dayActivities.find(a => timeStrToMinutes(a.time) >= currentMinutes) ||
    dayActivities[dayActivities.length - 1] ||
    null
  );
}

export function getQuoteForDay(dayId) {
  return quotes.find(q => q.dayId === dayId)?.text || quotes[0].text;
}

// time is already human-readable ("6:00 PM") — kept for any legacy callers
export function formatTime(time) {
  return time;
}

export function formatDate(dateStr) {
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
}

export function formatShortDate(dateStr) {
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}
