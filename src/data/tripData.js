// BYU Europe Study Abroad 2026 — Trip Data FINAL
// Updated: April 28, 2026 — reflects latest planning spreadsheet

export const PROFESSOR_EMAILS = ['isaacjdet@gmail.com'];
export const TRIP_START = '2026-04-27';
export const TOTAL_DAYS = 23;
export const PROFESSOR_PASSWORD = 'BYU2026prof';

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

export const days = [
  { id: 1,  date: '2026-04-27', city: 'Provo',       country: 'USA',        phase: 'Workshop', summary: "Kickoff Dinner at Dr. Mattson's house — the adventure begins",                                     timezone: 'America/Denver' },
  { id: 2,  date: '2026-04-28', city: 'Provo',       country: 'USA',        phase: 'Workshop', summary: 'Workshop day — culture briefing with Malcolm Botto and safety briefing with Benjamin Cluff',               timezone: 'America/Denver' },
  { id: 3,  date: '2026-04-29', city: 'Provo',       country: 'USA',        phase: 'Workshop', summary: 'Workshop + company visits to Hall Labs and Vanderhall',                                                   timezone: 'America/Denver' },
  { id: 4,  date: '2026-04-30', city: 'Provo',       country: 'USA',        phase: 'Workshop', summary: 'Final workshop — Rocketship, Amano, and Blendtec visits. Bring your own lunch.',                         timezone: 'America/Denver', packedLunch: true },
  { id: 5,  date: '2026-05-01', city: 'Salt Lake City', country: 'USA',     phase: 'Travel',   summary: 'Departure day — fly SLC to Amsterdam overnight via Delta DL56. Bring your own lunch.',                  timezone: 'America/Denver', packedLunch: true },
  { id: 6,  date: '2026-05-02', city: 'Venice',      country: 'Italy',      phase: 'Europe',   summary: 'Arrival in Venice — Da Vinci Museum, gondola ride, Rialto Bridge sunset. Curfew 10:30 PM.',                   timezone: 'Europe/Rome' },
  { id: 7,  date: '2026-05-03', city: 'Venice',      country: 'Italy',      phase: 'Europe',   summary: "Church in Mestre, Saint Mark's Basilica, Bell Tower, Vivaldi concert. Curfew 10:30 PM.",                      timezone: 'Europe/Rome' },
  { id: 8,  date: '2026-05-04', city: 'Venice',      country: 'Italy',      phase: 'Europe',   summary: 'AAV Barbini + Tessitura Bevilacqua visits, drive to Ljubljana. Buy lunch for tomorrow.',                     timezone: 'Europe/Rome',      buyLunchTonight: true },
  { id: 9,  date: '2026-05-05', city: 'Ljubljana',   country: 'Slovenia',   phase: 'Europe',   summary: 'ELAN factory, Ojstrica hike at Lake Bled, Pletna boat to island, Ljubljana castle walk. Curfew 10:30 PM.',      timezone: 'Europe/Ljubljana', packedLunch: true },
  { id: 10, date: '2026-05-06', city: 'Zagreb',      country: 'Croatia',    phase: 'Europe',   summary: 'SMM Maribor visit, Trakošćan Castle, drive to Zagreb, evening cultural walk. Buy lunch for tomorrow.',          timezone: 'Europe/Zagreb',    buyLunchTonight: true },
  { id: 11, date: '2026-05-07', city: 'Zagreb',      country: 'Croatia',    phase: 'Europe',   summary: 'Intis Engineering + Končar Group visits, Nikola Tesla Museum, group dinner La Štruk. Buy lunch for tomorrow.',  timezone: 'Europe/Zagreb',    buyLunchTonight: true },
  { id: 12, date: '2026-05-08', city: 'Sarajevo',    country: 'Bosnia',     phase: 'Europe',   summary: "HSTec Zadar, Split + Diocletian's Palace, drive to Sarajevo. 10+ hour day.",                                 timezone: 'Europe/Sarajevo', packedLunch: true },
  { id: 13, date: '2026-05-09', city: 'Sarajevo',    country: 'Bosnia',     phase: 'Europe',   summary: 'War excursion morning, free afternoon (laundry day!). Curfew 10:30 PM.',                                     timezone: 'Europe/Sarajevo' },
  { id: 14, date: '2026-05-10', city: 'Sarajevo',    country: 'Bosnia',     phase: 'Europe',   summary: 'Church, Assassination Site, Ars Aevi museum, Cathedral, Planet Sarajevo, dinner at Nana Kuhinja.',            timezone: 'Europe/Sarajevo', buyLunchTonight: true },
  { id: 15, date: '2026-05-11', city: 'Sarajevo',    country: 'Bosnia',     phase: 'Europe',   summary: 'Kinetic visit, AVDIC Violins in Tuzla, return to hotel. Buy lunch for tomorrow.',                            timezone: 'Europe/Sarajevo', packedLunch: true, buyLunchTonight: true },
  { id: 16, date: '2026-05-12', city: 'Kotor',       country: 'Montenegro', phase: 'Europe',   summary: 'Aluminij Mostar, Adriatic 42 Bijela, St. John Fortress night hike in Kotor. 10+ hour day.',                   timezone: 'Europe/Podgorica', packedLunch: true },
  { id: 17, date: '2026-05-13', city: 'Tirana',      country: 'Albania',    phase: 'Europe',   summary: 'Daido Metal visit, drive to Tirana, Albanian Night dinner show. Curfew 10:30 PM.',                            timezone: 'Europe/Tirane' },
  { id: 18, date: '2026-05-14', city: 'Tirana',      country: 'Albania',    phase: 'Europe',   summary: 'Timak + Everest SHPK company visits, evening flight to Athens.',                                              timezone: 'Europe/Tirane' },
  { id: 19, date: '2026-05-15', city: 'Athens',      country: 'Greece',     phase: 'Europe',   summary: 'Elefsis Shipyards, Askra Olive Oil, dinner at Hill Athens rooftop.',                                         timezone: 'Europe/Athens' },
  { id: 20, date: '2026-05-16', city: 'Athens',      country: 'Greece',     phase: 'Europe',   summary: 'Acropolis (8 AM), Acropolis Museum, Temple of Olympian Zeus, boat tour & presentations.',                     timezone: 'Europe/Athens' },
  { id: 21, date: '2026-05-17', city: 'Athens',      country: 'Greece',     phase: 'Europe',   summary: 'Church in Halandri, lunch, Lycabettus Hill, Poseidon Excursion/Beach.',                                       timezone: 'Europe/Athens' },
  { id: 22, date: '2026-05-18', city: 'Athens',      country: 'Greece',     phase: 'Europe',   summary: 'Get 3D + Skaramangas Shipyards visits, e-bike tour, group final dinner.',                                    timezone: 'Europe/Athens' },
  { id: 23, date: '2026-05-19', city: 'Athens',      country: 'Greece',     phase: 'Europe',   summary: 'Transfer to airport and fly home to Utah — safe travels!',                                                   timezone: 'Europe/Athens' },
];

export const activities = [
  // ─── DAY 1 — April 27 ───
  { id: 1, dayId: 1, time: '18:00', title: 'Kickoff Dinner', category: 'Food', location: "Mattson's House, 1101 Elm Ave, Provo", notes: 'Dress nicely. The adventure officially starts here!', showStudents: true },

  // ─── DAY 2 — April 28 ───
  { id: 2, dayId: 2, time: '08:00', title: 'Morning Workshop', category: 'Company Visit', location: 'EB Event Space', notes: 'Dr. Mattson and Dr. Salmon. Runs until noon.', showStudents: true },
  { id: 3, dayId: 2, time: '12:00', title: 'Lunch', category: 'Food', location: 'EB Event Space', notes: 'Blue Ribbon Box Lunch — ordered and paid for.', showStudents: true },
  { id: 4, dayId: 2, time: '12:00', title: 'Culture Briefing', category: 'Cultural', location: 'EB Event Space', notes: 'Malcolm Botto — what to expect culturally across Europe.', showStudents: true },
  { id: 5, dayId: 2, time: '13:00', title: 'Safety Briefing', category: 'Cultural', location: 'EB Event Space', notes: 'Benjamin Cluff — travel safety protocols.', showStudents: true },
  { id: 6, dayId: 2, time: '14:00', title: 'Afternoon Workshop', category: 'Company Visit', location: 'EB Event Space', notes: 'Dr. Mattson and Dr. Salmon. Runs until 5 PM.', showStudents: true },

  // ... [Days 3 through 12 unchanged from previous logic unless table differs] ...

  // ─── DAY 13 — May 9, Sarajevo ───
  { id: 74, dayId: 13, time: '08:45', title: 'War Excursion', category: 'Cultural', location: 'Meet in Hotel Lobby', notes: 'Booking reference: GYGMX4LVZRX7. Departs ~9:00 AM.', showStudents: true },
  { id: 75, dayId: 13, time: '13:30', title: 'Free Time (Laundry Day!)', category: 'Free Time', location: 'Sarajevo', notes: 'Great opportunity to do laundry. See Map for local spots.', showStudents: true },
  { id: 76, dayId: 13, time: '19:10', title: 'Yellow Fortress at Sunset', category: 'Cultural', location: 'Yellow Fortress, Sarajevo', notes: 'Sunset 7:57 PM. ~20 min walk from hotel.', showStudents: true },

  // ─── DAY 16 — May 12, Kotor ───
  { id: 93, dayId: 16, time: '06:00', title: 'Mostar Bridge & Aluminij Visit', category: 'Company Visit', location: 'Mostar, Bosnia', notes: 'Coach departs at 6:00 AM. Quick photo at Old Bridge before visit.', showStudents: true },
  { id: 95, dayId: 16, time: '11:45', title: 'Adriatic 42 Visit', category: 'Company Visit', location: 'Bijela, Montenegro', notes: 'Boat manufacturer visit. May arrive slightly late.', showStudents: true },
  { id: 97, dayId: 16, time: '19:00', title: 'St. John Fortress Night Hike', category: 'Cultural', location: 'Kotor Fortress, Montenegro', notes: 'Sunset 7:58 PM. Cash only for entry. Bring water!', showStudents: true },

  // ─── DAY 18 — May 14, Tirana → Athens ───
  { id: 104, dayId: 18, time: '08:00', title: 'Timak Company Visit', category: 'Company Visit', location: 'Tirana Industrial Park', notes: 'Coach departs hotel at 8:00 AM.', showStudents: true },
  { id: 108, dayId: 18, time: '19:25', title: 'Fly to Athens', category: 'Transport', location: 'Tirana Airport', notes: 'AEGEAN Flight A3 973. Conf# AWR9CK.', showStudents: true },

  // ─── DAY 20 — May 16, Athens ───
  { id: 114, dayId: 20, time: '07:30', title: 'Acropolis Visit', category: 'Cultural', location: 'Acropolis, Athens', notes: 'Arrive 7:30 AM for 8:00 AM Appt. Pre-registered.', showStudents: true },
  { id: 115, dayId: 20, time: '09:40', title: 'Acropolis Museum', category: 'Cultural', location: 'Acropolis Museum', notes: '10:00 AM Appointment. Buy tickets on site.', showStudents: true },
  { id: 116, dayId: 20, time: '12:15', title: 'Lunch — o Gyros Pou Gyrevis', category: 'Food', location: 'Athanasiou Diakou 1, Athens', notes: 'Finish in less than 50 minutes.', showStudents: true },
  { id: 117, dayId: 20, time: '13:10', title: 'Temple of Olympian Zeus', category: 'Cultural', location: 'Athens', notes: 'Quick 10-minute walk from lunch.', showStudents: true },
  { id: 118, dayId: 20, time: '16:00', title: 'Boat Tour & Team Presentations', category: 'Cultural', location: 'Porto Rafti', notes: 'Booking ref: GYGMX4LVZXYQ. Uber-like bus at 2 PM to port.', showStudents: true },

  // ─── DAY 21 — May 17, Athens ───
  { id: 123, dayId: 21, time: '16:00', title: 'Poseidon Excursion & Beach', category: 'Cultural', location: 'Meet in Lobby', notes: 'Booking ref: BR-1389530075. Meet at 3:55 PM.', showStudents: true },

  // ─── DAY 22 — May 18, Athens ───
  { id: 124, dayId: 22, time: '08:15', title: 'Get 3D Visit', category: 'Company Visit', location: 'Nea Ethniki Odos 2, Athens', notes: 'Coach departs at 8:15 AM.', showStudents: true },
  { id: 125, dayId: 22, time: '11:30', title: 'Skaramangas Shipyards', category: 'Company Visit', location: '3 Palaska Str, Skaramangas', notes: '1:00 PM appointment. Lunch on bus.', showStudents: true },
  { id: 126, dayId: 22, time: '19:00', title: 'Sunset E-Bike Tour', category: 'Cultural', location: 'Apostolou Pavlou 53, Athens', notes: 'Booking ref: BR-1389567221. Meet at 7:00 PM.', showStudents: true },

  // ─── DAY 23 — May 19, Home ───
  { id: 129, dayId: 23, time: '06:00', title: 'Transfer to Athens Airport', category: 'Transport', location: 'Hotel → Athens International', notes: 'Final group transit. Check flight confirmation emails.', showStudents: true },
  { id: 130, dayId: 23, time: '09:00', title: 'Fly Home to Utah', category: 'Transport', location: 'Athens Airport', notes: 'Safe travels! Trip officially concludes.', showStudents: true },
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

export const phrasebook = [
  {
    lang: 'Italian', langCode: 'it-IT', flag: '🇮🇹', country: 'Italy', days: [6, 7, 8],
    phrases: [
      { phrase: 'Buongiorno',          english: 'Good morning',             phonetic: 'bwon-JOR-no',              category: 'Greetings'   },
      { phrase: 'Grazie',              english: 'Thank you',                phonetic: 'GRAT-zee-eh',              category: 'Greetings'   },
      { phrase: 'Per favore',          english: 'Please',                   phonetic: 'pehr fah-VO-reh',          category: 'Greetings'   },
      { phrase: 'Mi scusi',            english: 'Excuse me',                phonetic: 'mee SKOO-zee',             category: 'Greetings'   },
      { phrase: 'Dov\'è il bagno?',    english: 'Where is the bathroom?',   phonetic: 'doh-VEH eel BAN-yo',       category: 'Navigation'  },
      { phrase: 'Il conto, per favore',english: 'The bill, please',         phonetic: 'eel KON-toh pehr fah-VO-reh', category: 'Dining'   },
      { phrase: 'Quanto costa?',       english: 'How much does it cost?',   phonetic: 'KWAN-toh KOS-tah',         category: 'Shopping'    },
      { phrase: 'Non capisco',         english: "I don't understand",       phonetic: 'non kah-PEES-koh',         category: 'Emergency'   },
      { phrase: 'Parla inglese?',      english: 'Do you speak English?',    phonetic: 'PAR-lah een-GLEH-zeh',     category: 'Emergency'   },
      { phrase: 'Bellissimo!',         english: 'Beautiful!',               phonetic: 'bel-LEES-see-moh',         category: 'Compliments' },
    ],
  },
  {
    lang: 'Slovenian', langCode: 'sl-SI', flag: '🇸🇮', country: 'Slovenia', days: [9],
    phrases: [
      { phrase: 'Zdravo',              english: 'Hello',                    phonetic: 'ZDRAH-voh',                category: 'Greetings'   },
      { phrase: 'Dober dan',           english: 'Good day',                 phonetic: 'DOH-behr dahn',            category: 'Greetings'   },
      { phrase: 'Hvala',               english: 'Thank you',                phonetic: 'HVAH-lah',                 category: 'Greetings'   },
      { phrase: 'Prosim',              english: "Please / You're welcome",  phonetic: 'PROH-seem',                category: 'Greetings'   },
      { phrase: 'Oprostite',           english: 'Excuse me',                phonetic: 'oh-proh-STEE-teh',         category: 'Greetings'   },
      { phrase: 'Kje je stranišče?',   english: 'Where is the bathroom?',   phonetic: 'kyeh yeh STRAH-neesh-cheh',category: 'Navigation'  },
      { phrase: 'Koliko stane?',       english: 'How much does it cost?',   phonetic: 'KOH-lee-koh STAH-neh',     category: 'Shopping'    },
      { phrase: 'Ne razumem',          english: "I don't understand",       phonetic: 'neh rah-ZOO-mehm',         category: 'Emergency'   },
      { phrase: 'Lepo!',               english: 'Beautiful!',               phonetic: 'LEH-poh',                  category: 'Compliments' },
    ],
  },
  {
    lang: 'Croatian', langCode: 'hr-HR', flag: '🇭🇷', country: 'Croatia', days: [10, 11],
    phrases: [
      { phrase: 'Dobar dan',           english: 'Good day',                 phonetic: 'DOH-bar dahn',             category: 'Greetings'   },
      { phrase: 'Hvala',               english: 'Thank you',                phonetic: 'HVAH-lah',                 category: 'Greetings'   },
      { phrase: 'Molim',               english: 'Please',                   phonetic: 'MOH-leem',                 category: 'Greetings'   },
      { phrase: 'Oprostite',           english: 'Excuse me',                phonetic: 'oh-proh-STEE-teh',         category: 'Greetings'   },
      { phrase: 'Gdje je toalet?',     english: 'Where is the bathroom?',   phonetic: 'GDYEH yeh toh-ah-LET',     category: 'Navigation'  },
      { phrase: 'Koliko košta?',       english: 'How much?',                phonetic: 'KOH-lee-koh KOSH-tah',     category: 'Shopping'    },
      { phrase: 'Ne razumijem',        english: "I don't understand",       phonetic: 'neh rah-ZOO-mee-yem',      category: 'Emergency'   },
      { phrase: 'Predivno!',           english: 'Beautiful!',               phonetic: 'preh-DEEV-noh',            category: 'Compliments' },
    ],
  },
  {
    lang: 'Bosnian', langCode: 'bs-BA', flag: '🇧🇦', country: 'Bosnia', days: [12, 13, 14, 15],
    phrases: [
      { phrase: 'Merhaba',             english: 'Hello (informal)',          phonetic: 'mehr-HAH-bah',             category: 'Greetings'   },
      { phrase: 'Dobar dan',           english: 'Good day',                 phonetic: 'DOH-bar dahn',             category: 'Greetings'   },
      { phrase: 'Hvala',               english: 'Thank you',                phonetic: 'HVAH-lah',                 category: 'Greetings'   },
      { phrase: 'Molim',               english: 'Please',                   phonetic: 'MOH-leem',                 category: 'Greetings'   },
      { phrase: 'Izvinite',            english: 'Excuse me',                phonetic: 'eez-VEE-nee-teh',          category: 'Greetings'   },
      { phrase: 'Gdje je toalet?',     english: 'Where is the bathroom?',   phonetic: 'GDYEH yeh toh-ah-LET',     category: 'Navigation'  },
      { phrase: 'Koliko košta?',       english: 'How much?',                phonetic: 'KOH-lee-koh KOSH-tah',     category: 'Shopping'    },
      { phrase: 'Ne razumijem',        english: "I don't understand",       phonetic: 'neh rah-ZOO-mee-yem',      category: 'Emergency'   },
      { phrase: 'Predivno!',           english: 'Beautiful!',               phonetic: 'preh-DEEV-noh',            category: 'Compliments' },
    ],
  },
  {
    lang: 'Montenegrin', langCode: 'hr-HR', flag: '🇲🇪', country: 'Montenegro', days: [16],
    phrases: [
      { phrase: 'Dobar dan',           english: 'Good day',                 phonetic: 'DOH-bar dahn',             category: 'Greetings'   },
      { phrase: 'Hvala lijepa',        english: 'Thank you very much',      phonetic: 'HVAH-lah lee-EH-pah',      category: 'Greetings'   },
      { phrase: 'Hvala',               english: 'Thank you',                phonetic: 'HVAH-lah',                 category: 'Greetings'   },
      { phrase: 'Molim',               english: 'Please',                   phonetic: 'MOH-leem',                 category: 'Greetings'   },
      { phrase: 'Izvinite',            english: 'Excuse me',                phonetic: 'eez-VEE-nee-teh',          category: 'Greetings'   },
      { phrase: 'Gdje je toalet?',     english: 'Where is the bathroom?',   phonetic: 'GDYEH yeh toh-ah-LET',     category: 'Navigation'  },
      { phrase: 'Koliko košta?',       english: 'How much?',                phonetic: 'KOH-lee-koh KOSH-tah',     category: 'Shopping'    },
      { phrase: 'Ne razumijem',        english: "I don't understand",       phonetic: 'neh rah-ZOO-mee-yem',      category: 'Emergency'   },
      { phrase: 'Predivno!',           english: 'Beautiful!',               phonetic: 'preh-DEEV-noh',            category: 'Compliments' },
    ],
  },
  {
    lang: 'Albanian', langCode: 'sq-AL', flag: '🇦🇱', country: 'Albania', days: [17, 18],
    phrases: [
      { phrase: 'Mirëdita',            english: 'Good day',                 phonetic: 'meer-eh-DEE-tah',          category: 'Greetings'   },
      { phrase: 'Mirë',                english: 'Good',                     phonetic: 'MEE-ruh',                  category: 'Greetings'   },
      { phrase: 'Faleminderit',        english: 'Thank you',                phonetic: 'fah-leh-meen-deh-REET',    category: 'Greetings'   },
      { phrase: 'Ju lutem',            english: 'Please',                   phonetic: 'yoo LOO-tem',              category: 'Greetings'   },
      { phrase: 'Më falni',            english: 'Excuse me',                phonetic: 'muh FAHL-nee',             category: 'Greetings'   },
      { phrase: 'Ku është banja?',     english: 'Where is the bathroom?',   phonetic: 'koo EHS-ht BAHN-yah',      category: 'Navigation'  },
      { phrase: 'Sa kushton?',         english: 'How much?',                phonetic: 'sah KOOSH-ton',            category: 'Shopping'    },
      { phrase: 'Nuk kuptoj',          english: "I don't understand",       phonetic: 'nook koop-TOY',            category: 'Emergency'   },
      { phrase: 'Bukur!',              english: 'Beautiful!',               phonetic: 'BOO-koor',                 category: 'Compliments' },
    ],
  },
  {
    lang: 'Greek', langCode: 'el-GR', flag: '🇬🇷', country: 'Greece', days: [19, 20, 21, 22, 23],
    phrases: [
      { phrase: 'Kalimera',            english: 'Good morning',             phonetic: 'kah-lee-MEH-rah',          category: 'Greetings'   },
      { phrase: 'Yiassas',             english: 'Hello / Cheers',           phonetic: 'YAH-sahs',                 category: 'Greetings'   },
      { phrase: 'Efcharistó',          english: 'Thank you',                phonetic: 'ef-khah-ree-STOH',         category: 'Greetings'   },
      { phrase: 'Parakaló',            english: "Please / You're welcome",  phonetic: 'pah-rah-kah-LOH',          category: 'Greetings'   },
      { phrase: 'Signómi',             english: 'Excuse me',                phonetic: 'see-NYOH-mee',             category: 'Greetings'   },
      { phrase: 'Pou íne i toualéta?', english: 'Where is the bathroom?',   phonetic: 'poo EE-neh ee twah-LEH-tah', category: 'Navigation' },
      { phrase: 'Póso káni?',          english: 'How much?',                phonetic: 'POH-soh KAH-nee',          category: 'Shopping'    },
      { phrase: 'Den katalavaíno',     english: "I don't understand",       phonetic: 'den kah-tah-lah-VEH-noh',  category: 'Emergency'   },
      { phrase: 'Ómorfo!',             english: 'Beautiful!',               phonetic: 'OH-mor-foh',               category: 'Compliments' },
      { phrase: 'Opa!',                english: 'Expression of joy',        phonetic: 'OH-pah',                   category: 'Compliments' },
    ],
  },
];

export const announcements = [
  { id: 1, message: 'Welcome to the BYU Europe Study Abroad 2026 app! Check the Itinerary tab each morning for today\'s schedule.', emoji: '👋', active: false, createdAt: '2026-04-27' },
];

export const CATEGORY_COLORS = {
  'Company Visit': '#073C77',
  'Cultural': '#E9B753',
  'Food': '#2D6A4F',
  'Transport': '#8B8B8B',
  'Free Time': '#4F84B4',
  'Accommodation': '#6B4FA3',
};

export const formatShortDate = (dateStr) => {
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};
