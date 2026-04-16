// BYU Europe Study Abroad 2026 — Trip Data
// Edit this file to update activities, days, quotes, and emergency contacts.

export const TRIP_START = '2026-04-27';
export const TRIP_END = '2026-05-19';
export const TOTAL_DAYS = 23;

export const PROFESSOR_EMAILS = ['isaacjdet@gmail.com'];

// Category color mapping
export const CATEGORY_COLORS = {
  'Company Visit': '#1E3A5F',
  'Cultural':      '#C9A84C',
  'Food':          '#2D6A4F',
  'Transport':     '#3A3A4A',
  'Free Time':     '#1A4A6B',
  'Accommodation': '#4A1A6B',
};

export const CATEGORY_TEXT = {
  'Company Visit': '#7EB3FF',
  'Cultural':      '#0A1931',
  'Food':          '#7EDBA8',
  'Transport':     '#C8C8D8',
  'Free Time':     '#7EC8FF',
  'Accommodation': '#C87EFF',
};

// Timezone for each city
export const CITY_TIMEZONES = {
  'Provo':        'America/Denver',
  'Salt Lake City': 'America/Denver',
  'Venice':       'Europe/Rome',
  'Ljubljana':    'Europe/Ljubljana',
  'Zagreb':       'Europe/Zagreb',
  'Sarajevo':     'Europe/Sarajevo',
  'Mostar':       'Europe/Sarajevo',
  'Kotor':        'Europe/Podgorica',
  'Tirana':       'Europe/Tirane',
  'Athens':       'Europe/Athens',
};

// Rick Rubin quotes — one per day
export const QUOTES = [
  "Look for what you notice but no one else sees.",
  "Zoom in and obsess. Zoom out and observe. We get to choose.",
  "All that matters is that you are making something you love, to the best of your ability, here and now.",
  "The real work of the artist is a way of being in the world.",
  "Creativity is a fundamental aspect of being human. It is our birthright, and it's for all of us.",
  "We can't force greatness to happen. All we can do is invite it in and await it actively.",
  "Failure is the information you need to get where you're going.",
  "To hone your craft is to honor creation.",
  "Beware of the assumption that the way you work is the best way simply because it's the way you've done it before.",
  "The person who makes something today isn't the same person who returns to the work tomorrow.",
  "As artists, we seek to restore our childlike perception: a more innocent state of wonder and appreciation.",
  "We are all translators for messages the universe is broadcasting.",
  "Turning something from an idea into a reality can make it seem smaller. The imagination has no limits. The physical world does.",
  "In terms of priority, inspiration comes first. You come next. The audience comes last.",
  "A river of material flows through us. When we share our works and our ideas, they are replenished.",
  "With each story we tell ourselves, we negate possibility.",
  "Being an artist means to be continually asking, 'How can it be better?' whatever it is.",
  "Sharing art is the price of making it.",
  "To live as an artist is a way of being in the world. A way of perceiving. A practice of paying attention.",
  "Awareness is not a state you force. It's something you actively allow to happen.",
  "We are all participating in a larger creative act we are not conducting. We are being conducted.",
  "Sometimes it can be the most ordinary moment that creates an extraordinary piece of art.",
  "Use what's helpful. Let go of the rest.",
];

// Fun facts — one per day
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

// Days data
export const DAYS = [
  { day: 1,  date: '2026-04-27', city: 'Provo',        country: 'USA',     phase: 'Workshop', summary: 'Kickoff Dinner at Mattson\'s House — the adventure begins' },
  { day: 2,  date: '2026-04-28', city: 'Provo',        country: 'USA',     phase: 'Workshop', summary: 'Workshop day — culture and safety briefings' },
  { day: 3,  date: '2026-04-29', city: 'Provo',        country: 'USA',     phase: 'Workshop', summary: 'Workshop + company visits to Hall Labs and Vanderhall' },
  { day: 4,  date: '2026-04-30', city: 'Provo',        country: 'USA',     phase: 'Workshop', summary: 'Final workshop day — Rocketship, Amano, and Blendtec' },
  { day: 5,  date: '2026-05-01', city: 'Salt Lake City', country: 'USA',   phase: 'Travel',   summary: 'Departure day — fly to Amsterdam via Delta DL56' },
  { day: 6,  date: '2026-05-02', city: 'Venice',       country: 'Italy',   phase: 'Europe',   summary: 'Arrival in Venice — Da Vinci Museum, gondola ride, Rialto sunset' },
  { day: 7,  date: '2026-05-03', city: 'Venice',       country: 'Italy',   phase: 'Europe',   summary: 'Church, Saint Mark\'s Basilica, Bell Tower, Vivaldi concert' },
  { day: 8,  date: '2026-05-04', city: 'Venice',       country: 'Italy',   phase: 'Europe',   summary: 'Company visits in Venice, drive to Ljubljana via Trieste' },
  { day: 9,  date: '2026-05-05', city: 'Ljubljana',    country: 'Slovenia', phase: 'Europe',  summary: 'ELAN visit, Lake Bled hike and island, Ljubljana castle and dinner' },
  { day: 10, date: '2026-05-06', city: 'Ljubljana',    country: 'Slovenia', phase: 'Europe',  summary: 'SMM company visit in Maribor, drive to Zagreb' },
  { day: 11, date: '2026-05-07', city: 'Zagreb',       country: 'Croatia', phase: 'Europe',   summary: 'Rimac and Končar visits, Museum of Illusions, group dinner' },
  { day: 12, date: '2026-05-08', city: 'Zagreb',       country: 'Croatia', phase: 'Europe',   summary: 'HSTec visit in Zadar, Split coast, drive to Sarajevo' },
  { day: 13, date: '2026-05-09', city: 'Sarajevo',     country: 'Bosnia',  phase: 'Europe',   summary: 'Cable car, Latin Bridge, War Childhood Museum, Yellow Fortress' },
  { day: 14, date: '2026-05-10', city: 'Sarajevo',     country: 'Bosnia',  phase: 'Europe',   summary: 'Church, Sacred Heart Cathedral, War Tunnel Museum, group dinner' },
  { day: 15, date: '2026-05-11', city: 'Sarajevo',     country: 'Bosnia',  phase: 'Europe',   summary: 'Kinetic and two more company visits in Sarajevo' },
  { day: 16, date: '2026-05-12', city: 'Mostar',       country: 'Bosnia',  phase: 'Europe',   summary: 'Aluminij visit, Adriatic 42 in Montenegro, arrive Kotor' },
  { day: 17, date: '2026-05-13', city: 'Tirana',       country: 'Albania', phase: 'Europe',   summary: 'Daido Metal visit, drive to Tirana, Scanderbeg Square' },
  { day: 18, date: '2026-05-14', city: 'Tirana',       country: 'Albania', phase: 'Europe',   summary: 'Timak and Everest visits, fly to Athens' },
  { day: 19, date: '2026-05-15', city: 'Athens',       country: 'Greece',  phase: 'Europe',   summary: 'Elefsis Shipyards and Askra Olive Oil visits' },
  { day: 20, date: '2026-05-16', city: 'Athens',       country: 'Greece',  phase: 'Europe',   summary: 'Acropolis, Acropolis Museum, Ancient Agora, team presentations' },
  { day: 21, date: '2026-05-17', city: 'Athens',       country: 'Greece',  phase: 'Europe',   summary: 'Church, Lycabettus Hill, Monastiraki Flea Market' },
  { day: 22, date: '2026-05-18', city: 'Athens',       country: 'Greece',  phase: 'Europe',   summary: 'Get 3D and Skaramangas Shipyards, group dinner' },
  { day: 23, date: '2026-05-19', city: 'Athens',       country: 'Greece',  phase: 'Europe',   summary: 'Fly home to Utah' },
];

// Activities — format: { id, day, title, startTime, category, location, mapsUrl, costEur, description, notes }
export const ACTIVITIES = [
  // DAY 1
  { id: 1,  day: 1,  title: 'Kickoff Dinner',            startTime: '18:00', category: 'Food',         location: '1101 Elm Ave, Provo, UT',       mapsUrl: 'https://maps.google.com/?q=1101+Elm+Ave+Provo+UT',                  costEur: 0,  description: 'Welcome dinner at Mattson\'s house. The adventure officially begins tonight — meet your fellow travelers and get excited for what\'s ahead.',  notes: 'Dress nicely. Bring your excitement!' },

  // DAY 2
  { id: 2,  day: 2,  title: 'Morning Workshop',           startTime: '08:00', category: 'Company Visit', location: 'EB Event Space, BYU',            mapsUrl: '',                                                                    costEur: 0,  description: 'Opening workshop session covering program goals, expectations, and team dynamics.',                                                            notes: '' },
  { id: 3,  day: 2,  title: 'Lunch',                      startTime: '12:00', category: 'Food',         location: 'EB Event Space, BYU',            mapsUrl: '',                                                                    costEur: 0,  description: 'Lunch provided during workshop day.',                                                                                                         notes: '' },
  { id: 4,  day: 2,  title: 'Culture Briefing',           startTime: '12:00', category: 'Cultural',     location: 'EB Event Space, BYU',            mapsUrl: '',                                                                    costEur: 0,  description: 'Essential cultural briefing covering etiquette, customs, and expectations across the nine countries we\'ll visit.',                           notes: 'Malcolm Botto presenting' },
  { id: 5,  day: 2,  title: 'Safety Briefing',            startTime: '13:00', category: 'Cultural',     location: 'EB Event Space, BYU',            mapsUrl: '',                                                                    costEur: 0,  description: 'Safety protocols, travel insurance, health guidelines, and emergency procedures for the trip.',                                              notes: 'Olivia Toone presenting' },
  { id: 6,  day: 2,  title: 'Afternoon Workshop',         startTime: '14:00', category: 'Company Visit', location: 'EB Event Space, BYU',            mapsUrl: '',                                                                    costEur: 0,  description: 'Afternoon session — presentations, team assignments, and preparation materials.',                                                              notes: '' },

  // DAY 3
  { id: 7,  day: 3,  title: 'Morning Workshop',           startTime: '08:00', category: 'Company Visit', location: 'EB Event Space, BYU',            mapsUrl: '',                                                                    costEur: 0,  description: 'Workshop continues with deeper dives into company research and presentation prep.',                                                            notes: '' },
  { id: 8,  day: 3,  title: 'Pick Up Vans',               startTime: '10:00', category: 'Transport',    location: 'BYU Motor Pool',                 mapsUrl: '',                                                                    costEur: 0,  description: 'Professors collect the vans from BYU Motor Pool for the afternoon company visits.',                                                            notes: 'Professors only' },
  { id: 9,  day: 3,  title: 'Lunch at Sportellis',        startTime: '12:15', category: 'Food',         location: 'Sportellis, Provo',              mapsUrl: 'https://maps.google.com/?q=Sportellis+Provo+UT',                    costEur: 0,  description: 'Group lunch at Sportellis in Provo before afternoon visits.',                                                                                 notes: '' },
  { id: 10, day: 3,  title: 'Hall Labs Visit',            startTime: '13:30', category: 'Company Visit', location: 'Hall Labs, Provo',               mapsUrl: 'https://maps.google.com/?q=Hall+Labs+Provo+UT',                     costEur: 0,  description: 'Tour and presentation at Hall Labs — innovative engineering and R&D company based in Provo.',                                                   notes: '' },
  { id: 11, day: 3,  title: 'Vanderhall Visit',           startTime: '15:30', category: 'Company Visit', location: 'Vanderhall, Provo',              mapsUrl: 'https://maps.google.com/?q=Vanderhall+Provo+UT',                    costEur: 0,  description: 'Visit to Vanderhall — makers of open-cockpit three-wheeled autocycles. See their manufacturing process and meet the team.',                    notes: '' },
  { id: 12, day: 3,  title: 'Return to BYU',              startTime: '17:30', category: 'Transport',    location: 'EB East Parking Lot, BYU',       mapsUrl: '',                                                                    costEur: 0,  description: 'Return vans to BYU East Parking Lot.',                                                                                                        notes: '' },

  // DAY 4
  { id: 13, day: 4,  title: 'Workshop — The Launch',      startTime: '08:00', category: 'Company Visit', location: 'HBLL 3714, BYU',                mapsUrl: '',                                                                    costEur: 0,  description: 'Final workshop session in the HBLL. Prepare your company analysis presentations for Europe.',                                                  notes: '' },
  { id: 14, day: 4,  title: 'Rocketship Visit',           startTime: '09:40', category: 'Company Visit', location: 'Rocketship, Provo',              mapsUrl: 'https://maps.google.com/?q=Rocketship+Provo+UT',                    costEur: 0,  description: 'Visit to Rocketship — a Provo-based startup accelerating growth companies. Learn about their model and portfolio.',                            notes: '' },
  { id: 15, day: 4,  title: 'Lunch in Pioneer Park',      startTime: '12:00', category: 'Food',         location: 'Pioneer Park, Provo',            mapsUrl: 'https://maps.google.com/?q=Pioneer+Park+Provo+UT',                  costEur: 0,  description: 'Lunch break at Pioneer Park.',                                                                                                                notes: 'Bring your own lunch' },
  { id: 16, day: 4,  title: 'Amano Visit',                startTime: '12:45', category: 'Company Visit', location: 'Amano, Provo',                   mapsUrl: 'https://maps.google.com/?q=Amano+Chocolate+Provo+UT',               costEur: 0,  description: 'Tour Amano Artisan Chocolate — a world-class chocolate maker headquartered in Provo, known for single-origin bars and ethical sourcing.',       notes: '' },
  { id: 17, day: 4,  title: 'Blendtec Visit',             startTime: '14:40', category: 'Company Visit', location: 'Blendtec, Orem',                 mapsUrl: 'https://maps.google.com/?q=Blendtec+Orem+UT',                       costEur: 0,  description: 'Visit to Blendtec — makers of the famous "Will It Blend?" blenders. Tour their manufacturing facility and see product testing.',               notes: '' },
  { id: 18, day: 4,  title: 'Drop Off Vans',              startTime: '18:00', category: 'Transport',    location: 'BYU Motor Pool',                 mapsUrl: '',                                                                    costEur: 0,  description: 'Return vans to BYU Motor Pool.',                                                                                                              notes: 'Professors only' },

  // DAY 5
  { id: 19, day: 5,  title: 'Final Workshop',             startTime: '10:00', category: 'Company Visit', location: 'EB East Lawn, BYU',             mapsUrl: '',                                                                    costEur: 0,  description: 'Final send-off session and last-minute travel prep.',                                                                                         notes: '' },
  { id: 20, day: 5,  title: 'UVX to FrontRunner',         startTime: '11:10', category: 'Transport',    location: 'UVX South Campus Stop',          mapsUrl: 'https://maps.google.com/?q=UVX+South+Campus+BYU',                   costEur: 0,  description: 'Board the UVX bus to connect to FrontRunner at Provo Central Station.',                                                                       notes: 'Departs 11:10 AM sharp — do not be late' },
  { id: 21, day: 5,  title: 'FrontRunner to SLC Airport', startTime: '11:46', category: 'Transport',    location: 'Provo Central Station',          mapsUrl: '',                                                                    costEur: 0,  description: 'FrontRunner commuter rail north to Salt Lake City Airport. Roughly 1 hour journey.',                                                           notes: '' },
  { id: 22, day: 5,  title: 'Fly to Amsterdam',           startTime: '16:20', category: 'Transport',    location: 'Salt Lake City International Airport', mapsUrl: 'https://maps.google.com/?q=SLC+Airport',                       costEur: 0,  description: 'Delta flight DL56 departs SLC at 4:20 PM. Estimated arrival at Amsterdam Schiphol (AMS) is 10:15 AM on May 2.',                              notes: 'Delta DL56. Arrive AMS 10:15 AM May 2. Sleep on the plane!' },

  // DAY 6
  { id: 23, day: 6,  title: 'Fly AMS to Venice',          startTime: '11:25', category: 'Transport',    location: 'Amsterdam Schiphol Airport',     mapsUrl: '',                                                                    costEur: 0,  description: 'Connecting flight from Amsterdam to Venice Marco Polo Airport (VCE). Arrive ~1:10 PM.',                                                       notes: 'Flight 9223. Arrive VCE 1:10 PM' },
  { id: 24, day: 6,  title: 'Transfer to Hotel',          startTime: '13:50', category: 'Transport',    location: 'VCE Airport',                    mapsUrl: '',                                                                    costEur: 0,  description: 'Take the ACTV Alilaguna boat service into central Venice. Boats depart at 1:50 PM and 2:20 PM.',                                              notes: 'Take 1:50 or 2:20 PM service. 48 min journey.' },
  { id: 25, day: 6,  title: 'Da Vinci Museum',            startTime: '15:30', category: 'Cultural',     location: 'Campo San Rocco, Venice',        mapsUrl: 'https://maps.app.goo.gl/teRGpKUw6XaWA7ey6',                         costEur: 8,  description: 'Interactive Leonardo da Vinci exhibit with working models of his inventions. A fascinating look at Renaissance genius.',                      notes: 'Last entry 5:15 PM. Book in advance for group of 17.' },
  { id: 26, day: 6,  title: 'Gondola Ride',               startTime: '18:15', category: 'Cultural',     location: 'Gondola Station S. Tomà, Venice',mapsUrl: '',                                                                    costEur: 18, description: 'Classic Venetian gondola ride through the canals. We\'ve booked 4 gondolas for the group.',                                                    notes: 'Must pre-book all 4 gondolas. Daytime rate applies before 7 PM.' },
  { id: 27, day: 6,  title: 'Rialto Bridge Sunset',       startTime: '19:00', category: 'Cultural',     location: 'Ponte di Rialto, Venice',        mapsUrl: 'https://maps.app.goo.gl/5K3UFmxmi9j8Bocw9',                         costEur: 0,  description: 'Watch the sunset from the Rialto Bridge — Venice\'s most iconic bridge and a beloved photo spot. Sunset is around 7:53 PM in May.',            notes: 'Sunset ~7:53 PM in May' },

  // DAY 7
  { id: 28, day: 7,  title: 'Church — Mestre Ward',       startTime: '08:15', category: 'Cultural',     location: 'Via Castellana 124C, Zelarino', mapsUrl: 'https://maps.app.goo.gl/z5D8Q4vySCnJM4KC8',                         costEur: 0,  description: 'Sunday services at the Mestre Ward. Services begin at 9:30 AM — meet at hotel by 8:15 AM for transit.',                                        notes: 'Services begin 9:30 AM' },
  { id: 29, day: 7,  title: 'Lunch + Free Time',          startTime: '13:15', category: 'Food',         location: 'Bar Rialto da Lollo, Venice',    mapsUrl: '',                                                                    costEur: 15, description: 'Relaxed lunch near the Rialto followed by free exploration time in Venice.',                                                                  notes: '' },
  { id: 30, day: 7,  title: 'Saint Mark\'s Basilica',     startTime: '15:00', category: 'Cultural',     location: 'Saint Mark\'s Basilica, Venice', mapsUrl: 'https://maps.google.com/?q=Saint+Marks+Basilica+Venice',            costEur: 0,  description: 'Tour one of the world\'s most beautiful cathedrals — the golden Byzantine mosaics are breathtaking. Free entry but timed entry required.',      notes: 'Book timed entry in advance' },
  { id: 31, day: 7,  title: 'Bell Tower',                 startTime: '16:00', category: 'Cultural',     location: 'Saint Mark\'s Campanile, Venice',mapsUrl: '',                                                                    costEur: 5,  description: 'Ride the elevator to the top of Venice\'s tallest structure for a panoramic view of the city, lagoon, and Dolomites on clear days.',           notes: '' },
  { id: 32, day: 7,  title: 'Free Time',                  startTime: '17:00', category: 'Free Time',    location: 'Venice',                         mapsUrl: '',                                                                    costEur: 0,  description: 'Free time to explore Venice on your own — get lost in the calli, find a gelato, or discover a hidden campo.',                                    notes: '' },
  { id: 33, day: 7,  title: 'Vivaldi Concert',            startTime: '20:30', category: 'Cultural',     location: 'Scuola Grande San Teodoro, Venice', mapsUrl: 'https://maps.app.goo.gl/e6TCWaiALrYAu7yQ9',                      costEur: 30, description: 'Live performance of Vivaldi\'s Four Seasons and other Baroque masterpieces in a stunning historic venue. One of Venice\'s finest concert experiences.', notes: 'Book tickets in advance. Smart casual dress required.' },

  // DAY 8
  { id: 34, day: 8,  title: 'Company Visit Venice AM',    startTime: '09:00', category: 'Company Visit', location: 'Venice',                         mapsUrl: '',                                                                    costEur: 0,  description: 'Morning company visit in Venice. Details being coordinated by John.',                                                                          notes: 'John coordinating' },
  { id: 35, day: 8,  title: 'Tessitura Bevilacqua',       startTime: '14:00', category: 'Company Visit', location: 'Tessitura Bevilacqua, Venice',   mapsUrl: '',                                                                    costEur: 0,  description: 'Visit to Tessitura Bevilacqua — a legendary Venetian silk weaving house operating since 1875. See master weavers at work on historic looms.',  notes: 'John coordinating' },
  { id: 36, day: 8,  title: 'Drive to Ljubljana',         startTime: '15:00', category: 'Transport',    location: 'Venice',                         mapsUrl: '',                                                                    costEur: 0,  description: 'Depart Venice and drive northeast through Italy toward Ljubljana. Optional stop at Miramare Castle above Trieste.',                             notes: 'Via Trieste / Miramare Castle — worth a stop' },

  // DAY 9
  { id: 37, day: 9,  title: 'Depart for ELAN',            startTime: '07:30', category: 'Transport',    location: 'Miklošičeva cesta 9, Ljubljana',  mapsUrl: '',                                                                    costEur: 0,  description: 'Early departure from hotel toward Begunje na Gorenjskem, ~34 minute drive.',                                                                    notes: '~34 min drive' },
  { id: 38, day: 9,  title: 'ELAN Company Visit',         startTime: '09:00', category: 'Company Visit', location: 'ELAN, Begunje na Gorenjskem',     mapsUrl: 'https://maps.app.goo.gl/U5qotfvDyMQBf17o7',                         costEur: 0,  description: 'Tour ELAN — Slovenia\'s iconic ski and boat manufacturer. Founded in 1945, ELAN has supplied Olympic champions and sailors worldwide.',            notes: 'Ends 11:30 AM. Isaac coordinating.' },
  { id: 39, day: 9,  title: 'Drive to Lake Bled',         startTime: '11:30', category: 'Transport',    location: 'Begunje na Gorenjskem',           mapsUrl: '',                                                                    costEur: 0,  description: 'Short drive from ELAN factory to Lake Bled.',                                                                                                  notes: '~14 min drive' },
  { id: 40, day: 9,  title: 'Walk to Ojstrica Trailhead', startTime: '11:55', category: 'Cultural',     location: 'Velika Zaka, Lake Bled',          mapsUrl: 'https://maps.app.goo.gl/4Q5hCRnvVJFbvR6s7',                         costEur: 0,  description: 'Walk from the parking area to the Ojstrica trailhead. Look for the green trail sign past Camping Bled.',                                         notes: 'Look for green sign past Camping Bled' },
  { id: 41, day: 9,  title: 'Ojstrica Hike',              startTime: '12:05', category: 'Cultural',     location: 'Ojstrica Viewpoint, Lake Bled',   mapsUrl: '',                                                                    costEur: 0,  description: 'Rocky and steep 1-hour roundtrip hike to the best viewpoint of Lake Bled and its island church. Worth every step.',                             notes: '~1 hour roundtrip. Rocky and steep. Wear proper shoes.' },
  { id: 42, day: 9,  title: 'Pletna Boat to Bled Island', startTime: '13:20', category: 'Cultural',     location: 'Velika Zaka Pletna Dock',         mapsUrl: '',                                                                    costEur: 26, description: 'Traditional wooden Pletna boat rowed by local oarsmen to the island church. Ring the church bell for good luck.',                             notes: '€20 boat + €6 church. Pay cash. ~1 hour total.' },
  { id: 43, day: 9,  title: 'Bled Cream Cake',            startTime: '14:30', category: 'Food',         location: 'Slaščičarna Zima, Bled',          mapsUrl: 'https://maps.app.goo.gl/dN71gBpPETcAa4XL8',                         costEur: 5,  description: 'Kremna rezina (cream cake) is Bled\'s most famous dessert — layers of vanilla custard and whipped cream in a flaky pastry. Do not skip this.',   notes: 'Order boxed individually. Bring napkins!' },
  { id: 44, day: 9,  title: 'Depart for Ljubljana',       startTime: '15:00', category: 'Transport',    location: 'Slaščičarna Zima, Bled',          mapsUrl: '',                                                                    costEur: 0,  description: 'Drive from Bled back to Ljubljana, approximately 1 hour.',                                                                                     notes: '~1 hour drive' },
  { id: 45, day: 9,  title: 'Triple Bridge + Dragon Bridge', startTime: '16:30', category: 'Cultural', location: 'Triple Bridge, Ljubljana',         mapsUrl: 'https://maps.app.goo.gl/jHEKS6cJjmyUFLjy9',                         costEur: 0,  description: 'Walk Ljubljana\'s iconic Triple Bridge (Tromostovje) and stroll east along the Ljubljanica River to see the Dragon Bridge — Ljubljana\'s symbol.', notes: 'Free. Dragon Bridge 10 min east along river.' },
  { id: 46, day: 9,  title: 'Funicular to Ljubljana Castle', startTime: '17:00', category: 'Transport', location: 'Krekov trg 4, Ljubljana',         mapsUrl: '',                                                                    costEur: 6,  description: 'Take the funicular railway up to Ljubljana Castle for panoramic views of the city.',                                                             notes: 'Buy return ticket. Runs until 7 PM.' },
  { id: 47, day: 9,  title: 'Ljubljana Castle',           startTime: '17:05', category: 'Cultural',     location: 'Ljubljana Castle',               mapsUrl: '',                                                                    costEur: 10, description: 'Explore the medieval Ljubljana Castle — tower climb, Slovenian History exhibit, and sweeping views across the city and Julian Alps.',           notes: 'Tower + museums. Allow ~1 hr.' },
  { id: 48, day: 9,  title: 'Funicular Down',             startTime: '18:20', category: 'Transport',    location: 'Ljubljana Castle Funicular',      mapsUrl: '',                                                                    costEur: 0,  description: 'Return funicular ride back down to the old town.',                                                                                             notes: '' },
  { id: 49, day: 9,  title: 'Group Dinner — Figovec',     startTime: '18:40', category: 'Food',         location: 'Figovec, Gosposvetska cesta 1, Ljubljana', mapsUrl: 'https://maps.app.goo.gl/NneJiJR2bW9KLbAQ7',                costEur: 25, description: 'Group dinner at Figovec, one of Ljubljana\'s most beloved traditional restaurants. A perfect Slovenian dining experience.',                    notes: 'Contact: info@figovec.si. Mention group of 17.' },

  // DAY 10
  { id: 50, day: 10, title: 'Depart for SMM Maribor',     startTime: '07:30', category: 'Transport',    location: 'Miklošičeva cesta 9, Ljubljana',  mapsUrl: '',                                                                    costEur: 0,  description: 'Early departure from Ljubljana toward Maribor for the SMM company visit.',                                                                     notes: '' },
  { id: 51, day: 10, title: 'SMM Company Visit',          startTime: '10:00', category: 'Company Visit', location: 'Perhavčeva 17, Maribor',          mapsUrl: 'https://maps.app.goo.gl/MAoMU4ZUZWS7mS328',                         costEur: 0,  description: 'Visit to SMM in Maribor — a Slovenian precision manufacturing company. Tour their facility and hear from leadership.',                          notes: '' },
  { id: 52, day: 10, title: 'Drive to Zagreb',            startTime: '15:00', category: 'Transport',    location: 'Maribor, Slovenia',              mapsUrl: '',                                                                    costEur: 0,  description: 'Drive from Maribor south across the border into Croatia toward Zagreb. Consider stopping at Trakoscan Castle.',                                 notes: 'Consider Trakošćan Castle stop' },
  { id: 53, day: 10, title: 'Zagreb Cultural Visit',      startTime: '18:00', category: 'Cultural',     location: 'Zagreb Old Town',                mapsUrl: 'https://maps.google.com/?q=Zagreb+Cathedral+Croatia',               costEur: 0,  description: 'Evening walk through Zagreb\'s historic upper town — Zagreb Cathedral, St. Mark\'s Church, and the lively Tkalčićeva Street.',                  notes: 'Zagreb Cathedral / St. Mark\'s Church / Tkalčićeva Street' },

  // DAY 11
  { id: 54, day: 11, title: 'Rimac Company Visit',        startTime: '08:45', category: 'Company Visit', location: 'Kerestinečka cesta 54, Kerestinec', mapsUrl: 'https://maps.app.goo.gl/ET1urH4b4tocZLq39',                     costEur: 0,  description: 'Visit to Rimac Automobili — the Croatian electric hypercar company behind the world\'s fastest production car. Meet engineers and see their tech.', notes: '' },
  { id: 55, day: 11, title: 'Končar Group Visit',         startTime: '13:00', category: 'Company Visit', location: 'KONČAR, Zagreb',                 mapsUrl: 'https://maps.app.goo.gl/YBsaXkASXhWQMuNYA',                         costEur: 0,  description: 'Tour Končar Group — one of Croatia\'s largest industrial companies, making transformers, trains, and power equipment.',                         notes: '1.5 hour tour' },
  { id: 56, day: 11, title: 'Museum of Illusions',        startTime: '15:00', category: 'Cultural',     location: 'Zagreb',                         mapsUrl: 'https://maps.google.com/?q=Museum+of+Illusions+Zagreb',             costEur: 0,  description: 'Explore the original Museum of Illusions — optical illusions, holograms, and mind-bending interactive exhibits.',                              notes: 'Isaac coordinating' },
  { id: 57, day: 11, title: 'Group Dinner',               startTime: '19:00', category: 'Food',         location: 'Zagreb',                         mapsUrl: '',                                                                    costEur: 25, description: 'Group dinner in Zagreb. Venue TBC.',                                                                                                         notes: '' },

  // DAY 12
  { id: 58, day: 12, title: 'Early Departure for Zadar',  startTime: '06:00', category: 'Transport',    location: 'Hotel Dubrovnik, Zagreb',        mapsUrl: '',                                                                    costEur: 0,  description: 'Very early departure from Zagreb to reach Zadar in time for the company visit. Pack bags the night before.',                                    notes: 'Early start — pack bags the night before' },
  { id: 59, day: 12, title: 'HSTec Visit — Zadar',        startTime: '10:00', category: 'Company Visit', location: 'Zagrebačka 100, Zadar',           mapsUrl: 'https://maps.app.goo.gl/xR7Rqg1z7uvxRxQn7',                         costEur: 0,  description: 'Company visit to HSTec in Zadar — Croatian tech and engineering firm.',                                                                        notes: '' },
  { id: 60, day: 12, title: 'Split — Diocletian\'s Palace', startTime: '14:00', category: 'Cultural',   location: 'Split, Croatia',                 mapsUrl: 'https://maps.google.com/?q=Diocletians+Palace+Split',               costEur: 0,  description: 'Walk through Diocletian\'s Palace — a Roman emperor\'s retirement palace that became a living city. Now a UNESCO World Heritage Site.',          notes: '' },
  { id: 61, day: 12, title: 'Kravica Waterfalls',         startTime: '17:00', category: 'Cultural',     location: 'Kravica, Bosnia',                mapsUrl: 'https://maps.google.com/?q=Kravica+Waterfalls+Bosnia',              costEur: 0,  description: 'Short stop at the stunning Kravica Waterfalls on the way to Sarajevo. A beautiful natural canyon with turquoise pools.',                       notes: 'Bring swimwear if desired' },

  // DAY 13
  { id: 62, day: 13, title: 'Cable Car',                  startTime: '09:00', category: 'Cultural',     location: 'Sarajevo',                       mapsUrl: 'https://maps.google.com/?q=Sarajevo+Cable+Car',                     costEur: 0,  description: 'Ride the newly rebuilt Sarajevo cable car up Trebević mountain for panoramic views over the city.',                                             notes: '' },
  { id: 63, day: 13, title: 'Latin Bridge + War Childhood Museum', startTime: '12:00', category: 'Cultural', location: 'Latin Bridge, Sarajevo',    mapsUrl: 'https://maps.google.com/?q=Latin+Bridge+Sarajevo',                  costEur: 5,  description: 'Visit the Latin Bridge where Archduke Franz Ferdinand was assassinated in 1914 — the spark of WWI. Then the War Childhood Museum, a powerful testimony to those who grew up during the 1990s siege.', notes: 'Powerful and moving historical sites' },
  { id: 64, day: 13, title: 'Yellow Fortress at Sunset',  startTime: '17:00', category: 'Cultural',     location: 'Yellow Fortress, Sarajevo',      mapsUrl: 'https://maps.google.com/?q=Yellow+Fortress+Sarajevo',              costEur: 0,  description: 'Hike up to the Yellow Fortress for the best view of Sarajevo at golden hour — mosques, minarets, and the valley glowing in the evening light.', notes: 'Arrive 30 min before sunset' },

  // DAY 14
  { id: 65, day: 14, title: 'Church — Sarajevo Branch',   startTime: '10:00', category: 'Cultural',     location: 'Mehmeda Spahe 24, Sarajevo',     mapsUrl: 'https://maps.google.com/?q=Mehmeda+Spahe+24+Sarajevo',             costEur: 0,  description: 'Sunday services at the Sarajevo Branch.',                                                                                                     notes: '' },
  { id: 66, day: 14, title: 'Sacred Heart Cathedral + War Tunnel', startTime: '13:00', category: 'Cultural', location: 'Sarajevo',                  mapsUrl: 'https://maps.google.com/?q=War+Tunnel+Museum+Sarajevo',             costEur: 5,  description: 'Visit the Sacred Heart Cathedral — a stunning neo-Gothic landmark in the heart of Sarajevo. Then the War Tunnel Museum — the 800-meter lifeline dug under the airport during the 1990s siege.', notes: '' },
  { id: 67, day: 14, title: 'Group Dinner',               startTime: '19:00', category: 'Food',         location: 'Sarajevo',                       mapsUrl: '',                                                                    costEur: 20, description: 'Group dinner in Sarajevo. Try ćevapi — the national dish of Bosnia.',                                                                        notes: '' },

  // DAY 15
  { id: 68, day: 15, title: 'Kinetic Company Visit',      startTime: '08:00', category: 'Company Visit', location: 'Tvornička 3, Sarajevo',          mapsUrl: 'https://maps.app.goo.gl/VMyy7rxGzmkfgLMX6',                         costEur: 0,  description: 'Visit to Kinetic in Sarajevo — engineering and manufacturing firm.',                                                                          notes: '' },
  { id: 69, day: 15, title: 'VW Company Visit',           startTime: '12:00', category: 'Company Visit', location: 'Sarajevo',                       mapsUrl: '',                                                                    costEur: 0,  description: 'Company visit in Sarajevo. Details TBC.',                                                                                                     notes: '' },
  { id: 70, day: 15, title: 'Third Company Visit',        startTime: '15:00', category: 'Company Visit', location: 'Sarajevo',                       mapsUrl: '',                                                                    costEur: 0,  description: 'Third company visit in Sarajevo. Details TBC.',                                                                                               notes: '' },

  // DAY 16
  { id: 71, day: 16, title: 'Aluminij Visit — Mostar',    startTime: '06:30', category: 'Company Visit', location: 'Bačevići 88000, Bosnia',         mapsUrl: 'https://maps.app.goo.gl/SoGtb9SFsFh8Sdci9',                         costEur: 0,  description: 'Early morning visit to Aluminij, one of Bosnia\'s largest industrial employers. Also see the famous Stari Most (Old Bridge) in Mostar — rebuilt in 2004 after its 1993 destruction.', notes: 'See Mostar Bridge — do not skip' },
  { id: 72, day: 16, title: 'Adriatic 42 — Bijela',       startTime: '12:00', category: 'Company Visit', location: 'Bijela, Montenegro',             mapsUrl: 'https://maps.app.goo.gl/dWug6YbHkK2JUQ6f8',                         costEur: 0,  description: 'Visit Adriatic 42 shipyard in Bijela, Montenegro. See large vessel construction and repair operations along the Adriatic coast.',               notes: '' },
  { id: 73, day: 16, title: 'Old Town Kotor + Fortress',  startTime: '19:30', category: 'Cultural',     location: 'Kotor Old Town, Montenegro',     mapsUrl: 'https://maps.google.com/?q=Kotor+Old+Town+Montenegro',             costEur: 0,  description: 'Explore Kotor\'s stunning medieval old town — completely enclosed by ancient Venetian walls. Hike up to San Giovanni Fortress for breathtaking views of the bay.', notes: '' },

  // DAY 17
  { id: 74, day: 17, title: 'Daido Metal Visit',          startTime: '08:30', category: 'Company Visit', location: 'DAIDO METAL, Montenegro',        mapsUrl: 'https://maps.app.goo.gl/7XnC3AQE7jyrbKfY6',                         costEur: 0,  description: 'Visit to Daido Metal — a Japanese precision bearing manufacturer with operations in Montenegro.',                                             notes: '' },
  { id: 75, day: 17, title: 'Drive to Tirana',            startTime: '11:30', category: 'Transport',    location: 'Montenegro',                     mapsUrl: '',                                                                    costEur: 0,  description: 'Drive from Montenegro into Albania toward Tirana. Arrive approximately 5 PM.',                                                                 notes: 'Arrive ~5 PM' },
  { id: 76, day: 17, title: 'Scanderbeg Square + Bunk\'Art 2', startTime: '18:00', category: 'Cultural', location: 'Scanderbeg Square, Tirana',      mapsUrl: 'https://maps.google.com/?q=Scanderbeg+Square+Tirana',              costEur: 5,  description: 'Visit Scanderbeg Square — Tirana\'s grand central square — and then Bunk\'Art 2, a Cold War nuclear bunker turned museum documenting Albania\'s communist secret police.', notes: 'Bunk\'Art 2 is a must' },
  { id: 77, day: 17, title: 'Group Dinner',               startTime: '20:00', category: 'Food',         location: 'Tirana',                         mapsUrl: '',                                                                    costEur: 20, description: 'Group dinner in Tirana. Albanian cuisine features lots of grilled meats, fresh vegetables, and fërgesa.',                                      notes: '' },

  // DAY 18
  { id: 78, day: 18, title: 'Timak Company Visit',        startTime: '07:30', category: 'Company Visit', location: 'Tirana Industrial Park',         mapsUrl: 'https://maps.app.goo.gl/NFG1vvVU98ivojReA',                         costEur: 0,  description: 'Early morning visit to Timak in Tirana\'s industrial park.',                                                                                   notes: '' },
  { id: 79, day: 18, title: 'Everest SHPK Visit',         startTime: '13:00', category: 'Company Visit', location: 'Kamëz, Albania',                 mapsUrl: 'https://maps.app.goo.gl/gkUogpfgSvZ1fwyu7',                         costEur: 0,  description: 'Visit to Everest SHPK — a major Albanian shoe manufacturer. They need shoe sizes in advance to prepare product samples.',                      notes: 'Shoe sizes needed in advance' },
  { id: 80, day: 18, title: 'Fly to Athens',              startTime: '19:25', category: 'Transport',    location: 'Tirana Airport',                 mapsUrl: '',                                                                    costEur: 0,  description: 'Evening flight from Tirana (TIA) to Athens (ATH).',                                                                                           notes: '' },

  // DAY 19
  { id: 81, day: 19, title: 'Elefsis Shipyards',          startTime: '09:30', category: 'Company Visit', location: 'Elefsina, Greece',               mapsUrl: 'https://maps.app.goo.gl/LRqNDk2dYda7wyxH9',                         costEur: 0,  description: 'Visit Elefsis Shipyards — one of Greece\'s largest ship repair and conversion facilities. A fascinating look at heavy maritime industry.',      notes: '' },
  { id: 82, day: 19, title: 'Askra Olive Oil',            startTime: '13:00', category: 'Company Visit', location: 'Nea Ionia, Athens',              mapsUrl: '',                                                                    costEur: 0,  description: 'Visit to Askra Olive Oil — learn about Greek olive oil production, tasting, and the industry behind one of Greece\'s most important exports.',   notes: '1.5 hour visit' },

  // DAY 20
  { id: 83, day: 20, title: 'Acropolis Museum',           startTime: '10:00', category: 'Cultural',     location: 'Acropolis Museum, Athens',       mapsUrl: 'https://www.theacropolismuseum.gr/en/group-visits',                  costEur: 15, description: 'World-class museum housing sculptures, friezes, and artifacts from the Acropolis. The best way to understand what you\'re about to see.',      notes: 'Book group tickets in advance' },
  { id: 84, day: 20, title: 'Acropolis',                  startTime: '12:00', category: 'Cultural',     location: 'Acropolis, Athens',              mapsUrl: 'https://maps.google.com/?q=Acropolis+Athens',                       costEur: 20, description: 'Climb to the Parthenon, the Erechtheion, and the Temple of Athena Nike — the pinnacle of ancient Greek civilization and one of the world\'s most iconic sites.', notes: 'Book well in advance — sells out!' },
  { id: 85, day: 20, title: 'Ancient Agora',              startTime: '14:00', category: 'Cultural',     location: 'Ancient Agora, Athens',          mapsUrl: 'https://maps.google.com/?q=Ancient+Agora+Athens',                   costEur: 10, description: 'Walk through the Ancient Agora — the civic heart of ancient Athens where Socrates taught and democracy was born.',                             notes: '' },
  { id: 86, day: 20, title: 'Team Presentations',         startTime: '16:00', category: 'Company Visit', location: 'Athens',                         mapsUrl: '',                                                                    costEur: 0,  description: 'Final team presentations summarizing learnings from company visits across the trip. Celebrate what you\'ve built.',                              notes: '' },
  { id: 87, day: 20, title: 'Group Dinner',               startTime: '19:00', category: 'Food',         location: 'Athens',                         mapsUrl: '',                                                                    costEur: 60, description: 'Special celebratory dinner in Athens. Details TBC — Dinner in the Sky experience being explored.',                                           notes: 'Dinner in the Sky — details TBC' },

  // DAY 21
  { id: 88, day: 21, title: 'Church — Halandri Branch',   startTime: '10:00', category: 'Cultural',     location: 'Erifilis 16, Halandri, Athens',  mapsUrl: 'https://maps.google.com/?q=Erifilis+16+Halandri+Athens',            costEur: 0,  description: 'Sunday services at the Halandri Branch in Athens.',                                                                                           notes: '' },
  { id: 89, day: 21, title: 'Lycabettus Hill',            startTime: '12:00', category: 'Cultural',     location: 'Lycabettus Hill, Athens',        mapsUrl: 'https://maps.google.com/?q=Lycabettus+Hill+Athens',                 costEur: 5,  description: 'Hike or take the funicular to the top of Lycabettus Hill — the highest point in Athens — for 360° views including the Acropolis and Aegean Sea.', notes: '' },
  { id: 90, day: 21, title: 'Monastiraki Flea Market',    startTime: '15:00', category: 'Free Time',    location: 'Monastiraki, Athens',            mapsUrl: 'https://maps.google.com/?q=Monastiraki+Athens',                     costEur: 0,  description: 'Browse the Monastiraki Flea Market — Athens\' most famous open-air market with antiques, leather goods, souvenirs, and street food.',           notes: '' },

  // DAY 22
  { id: 91, day: 22, title: 'Get 3D Visit',               startTime: '08:15', category: 'Company Visit', location: 'Aghioi Anargiroi, Athens',       mapsUrl: '',                                                                    costEur: 0,  description: 'Visit Get 3D — a Greek additive manufacturing and 3D printing company. 45 minute visit.',                                                       notes: '45 min visit' },
  { id: 92, day: 22, title: 'Skaramangas Shipyards',      startTime: '12:00', category: 'Company Visit', location: 'Skaramangas, Athens',            mapsUrl: '',                                                                    costEur: 0,  description: 'Visit to Skaramangas Shipyards — formerly a major defense shipyard, now one of the largest commercial ship repair yards in the Mediterranean.', notes: '30 min visit' },
  { id: 93, day: 22, title: 'Group Dinner — Final Night', startTime: '19:00', category: 'Food',         location: 'Athens',                         mapsUrl: '',                                                                    costEur: 30, description: 'The last dinner together as a group. A chance to reflect, celebrate friendships, and toast to an unforgettable journey.',                     notes: 'Last dinner together' },

  // DAY 23
  { id: 94, day: 23, title: 'Fly Home',                   startTime: '06:00', category: 'Transport',    location: 'Athens International Airport',   mapsUrl: 'https://maps.google.com/?q=Athens+International+Airport',           costEur: 0,  description: 'Final departure day. Early morning flight home to Utah. Carry memories, friendships, and a transformed perspective back with you.',             notes: 'Safe travels! See you back home.' },
];

// Emergency contacts
export const EMERGENCY_CONTACTS = [
  { id: 1,  label: 'European Emergency',         phone: '112',            notes: 'Works in all EU and Balkan countries' },
  { id: 2,  label: 'US Embassy — Italy (Rome)',  phone: '+390646741',     notes: 'For passport loss in Italy' },
  { id: 3,  label: 'US Embassy — Slovenia',      phone: '+38612005500',   notes: 'For passport loss in Slovenia' },
  { id: 4,  label: 'US Embassy — Croatia',       phone: '+38516612200',   notes: 'For passport loss in Croatia' },
  { id: 5,  label: 'US Embassy — Bosnia',        phone: '+38733704000',   notes: 'For passport loss in Bosnia' },
  { id: 6,  label: 'US Embassy — Montenegro',    phone: '+38220410500',   notes: 'For passport loss in Montenegro' },
  { id: 7,  label: 'US Embassy — Albania',       phone: '+35542247285',   notes: 'For passport loss in Albania' },
  { id: 8,  label: 'US Embassy — Greece',        phone: '+302107202490',  notes: 'For passport loss in Greece' },
  { id: 9,  label: 'Hospital — Venice',          phone: '+39041529411',   notes: 'Ospedale Civile SS. Giovanni e Paolo' },
  { id: 10, label: 'Hospital — Ljubljana',       phone: '+38615225050',   notes: 'UKC Ljubljana' },
  { id: 11, label: 'Hospital — Zagreb',          phone: '+38512388888',   notes: 'KBC Zagreb' },
  { id: 12, label: 'Hospital — Sarajevo',        phone: '+38733297000',   notes: 'KCUS Sarajevo' },
  { id: 13, label: 'Hospital — Athens',          phone: '+302107778901',  notes: 'Evangelismos Hospital' },
];

// Helper: get day number from today's date (1-23, or null if outside trip)
export function getTodayDayNumber() {
  const today = new Date();
  const start = new Date(TRIP_START);
  today.setHours(0, 0, 0, 0);
  start.setHours(0, 0, 0, 0);
  const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24));
  if (diff < 0 || diff >= TOTAL_DAYS) return null;
  return diff + 1;
}

export function getDayData(dayNumber) {
  return DAYS.find(d => d.day === dayNumber) || null;
}

export function getActivitiesForDay(dayNumber) {
  return ACTIVITIES.filter(a => a.day === dayNumber).sort((a, b) => a.startTime.localeCompare(b.startTime));
}

export function getNextActivity(dayNumber) {
  const now = new Date();
  const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  const dayActivities = getActivitiesForDay(dayNumber);
  return dayActivities.find(a => a.startTime >= currentTime) || dayActivities[dayActivities.length - 1] || null;
}

export function formatTime(time24) {
  const [h, m] = time24.split(':').map(Number);
  const ampm = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 || 12;
  return `${h12}:${String(m).padStart(2, '0')} ${ampm}`;
}

export function formatDate(dateStr) {
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
}

export function formatShortDate(dateStr) {
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}
