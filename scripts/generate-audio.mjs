/**
 * Generates MP3 audio files for all phrasebook phrases using Microsoft Edge TTS.
 * Neural voices — no API key required, free.
 *
 * Usage:
 *   npm install msedge-tts
 *   node scripts/generate-audio.mjs
 *
 * Output: public/audio/{language}/{index}.mp3
 * Skips files that already exist. Safe to re-run.
 */

import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts';
import { createWriteStream, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, '..', 'public', 'audio');

// Microsoft Edge TTS neural voices — best available for each language
const VOICES = {
  'Italian':     'it-IT-ElsaNeural',
  'Slovenian':   'sl-SI-PetraNeural',
  'Croatian':    'hr-HR-GabrijelaNeural',
  'Bosnian':     'bs-BA-VesnaNeural',
  'Montenegrin': 'hr-HR-GabrijelaNeural',
  'Albanian':    'sq-AL-AnilaNeural',
  'Greek':       'el-GR-AthinaNeural',
};

// Inline phrase list (mirrors src/data/tripData.js phrasebook)
const PHRASEBOOK = [
  {
    lang: 'Italian',
    phrases: [
      'Buongiorno', 'Ciao', 'Grazie mille', 'Scusi',
      'Il conto, per favore', 'Sono vegetariano',
      "Dov'è il bagno?", 'A destra / A sinistra',
      'Quanto costa?', 'Accettate carte?',
      'Aiuto!', 'Chiamate la polizia!',
      'Che meraviglia!', 'Sei gentilissimo',
    ],
  },
  {
    lang: 'Slovenian',
    phrases: [
      'Zdravo', 'Hvala', 'Prosim', 'Oprostite',
      'Račun, prosim', 'Brez mesa',
      'Kje je...?', 'Govorite angleško?',
      'Koliko stane?',
      'Na pomoč!', 'Pokličite policijo!',
      'Odlično!',
    ],
  },
  {
    lang: 'Croatian',
    phrases: [
      'Dobar dan', 'Hvala', 'Molim', 'Oprostite',
      'Račun, molim', 'Bez mesa, molim',
      'Gdje je...?', 'Govorite li engleski?',
      'Koliko košta?', 'Primate kartice?',
      'U pomoć!',
      'Predivno!',
    ],
  },
  {
    lang: 'Bosnian',
    phrases: [
      'Zdravo', 'Hvala', 'Molim', 'Izvinite',
      'Račun, molim', 'Bez mesa',
      'Gdje je...?', 'Govorite li engleski?',
      'Koliko košta?',
      'Upomoć!', 'Zovite policiju!',
      'Divno!',
    ],
  },
  {
    lang: 'Montenegrin',
    phrases: [
      'Dobro jutro', 'Hvala', 'Molim',
      'Račun, molim',
      'Gdje je...?', 'Govorite li engleski?',
      'Koliko košta?',
      'Upomoć!',
      'Predivno!',
    ],
  },
  {
    lang: 'Albanian',
    phrases: [
      'Mirëdita', 'Faleminderit', 'Ju lutem', 'Më falni',
      'Llogarinë, ju lutem', 'Pa mish',
      'Ku është...?', 'Flisni anglisht?',
      'Sa kushton?',
      'Ndihmë!', 'Thirrni policinë!',
      'Bukur!',
    ],
  },
  {
    lang: 'Greek',
    phrases: [
      'Kalimera', 'Yia sas', 'Efcharistó', 'Parakaló',
      'Ton logariasmo, parakaló', 'Choris kréas',
      'Pou einai...?', 'Miláte angliká?',
      'Póso kánei?', 'Déchetai kártes?',
      'Voítheia!', 'Kaléste tin astynomía!',
      'Thavmásio!', 'Polý ómorfo!',
    ],
  },
];

async function streamToFile(stream, filePath) {
  return new Promise((resolve, reject) => {
    const writer = createWriteStream(filePath);
    stream.pipe(writer);
    writer.on('finish', resolve);
    writer.on('error', reject);
    stream.on('error', reject);
  });
}

async function main() {
  const tts = new MsEdgeTTS();
  let generated = 0;
  let skipped = 0;
  let failed = 0;

  for (const lang of PHRASEBOOK) {
    const voice = VOICES[lang.lang];
    if (!voice) { console.warn(`No voice configured for ${lang.lang}`); continue; }

    const dir = join(OUT_DIR, lang.lang.toLowerCase());
    mkdirSync(dir, { recursive: true });

    // Pass {} as third arg to avoid a bug when switching voices
    await tts.setMetadata(voice, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3, {});

    for (let i = 0; i < lang.phrases.length; i++) {
      const phrase = lang.phrases[i];
      const outPath = join(dir, `${i}.mp3`);

      if (existsSync(outPath)) {
        skipped++;
        continue;
      }

      process.stdout.write(`  ${lang.lang}/${i}  "${phrase}" ... `);

      try {
        // toStream returns synchronously — no await
        const { audioStream } = tts.toStream(phrase);
        await streamToFile(audioStream, outPath);
        process.stdout.write('✓\n');
        generated++;
      } catch (err) {
        process.stdout.write(`✗  ${err.message}\n`);
        failed++;
      }

      // Small pause to avoid rate limiting
      await new Promise(r => setTimeout(r, 150));
    }
  }

  console.log(`\nDone — ${generated} generated, ${skipped} skipped, ${failed} failed`);
  if (generated > 0) {
    console.log('\nCommit the generated files:');
    console.log('  git add public/audio');
    console.log('  git commit -m "Add pre-recorded phrase audio"');
  }
}

main().catch(err => { console.error(err); process.exit(1); });
