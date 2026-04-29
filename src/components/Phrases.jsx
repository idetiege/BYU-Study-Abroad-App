import { useState, useEffect, useRef } from 'react';
import { phrasebook, getTodayDayNumber } from '../data/tripData';

const CATEGORY_ORDER = ['Greetings', 'Dining', 'Navigation', 'Emergency', 'Shopping', 'Compliments'];
const GOOGLE_TTS_CODES = {
  'it-IT': 'it', 'sl-SI': 'sl', 'hr-HR': 'hr',
  'bs-BA': 'bs', 'sq-AL': 'sq', 'el-GR': 'el',
};

function SpeakerIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
    </svg>
  );
}

function PhraseCard({ phrase, langCode, speakingId, onSpeak }) {
  const id = `${langCode}-${phrase.phrase}`;
  const isSpeaking = speakingId === id;

  return (
    <div style={{
      background: '#FFFFFF',
      border: '1px solid rgba(7,60,119,0.1)',
      borderRadius: '14px',
      padding: '14px 14px 14px 16px',
      display: 'flex', alignItems: 'center', gap: '12px',
      boxShadow: '0 1px 4px rgba(7,60,119,0.05)',
    }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ color: '#073C77', fontSize: '19px', fontWeight: 800, margin: '0 0 3px', lineHeight: 1.2 }}>
          {phrase.phrase}
        </p>
        <p style={{ color: '#5A6A7A', fontSize: '13px', margin: '0 0 4px', lineHeight: 1.3 }}>
          {phrase.english}
        </p>
        <p style={{ color: '#A3876F', fontSize: '12px', fontStyle: 'italic', margin: 0, letterSpacing: '0.2px' }}>
          {phrase.phonetic}
        </p>
      </div>

      <button
        onClick={() => onSpeak(phrase.phrase, id)}
        className={isSpeaking ? 'speaking-pulse' : ''}
        aria-label={`Speak: ${phrase.phrase}`}
        style={{
          width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
          border: 'none', cursor: 'pointer',
          background: isSpeaking ? '#E9B753' : 'rgba(7,60,119,0.08)',
          color: '#073C77',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.2s',
        }}
      >
        <SpeakerIcon />
      </button>
    </div>
  );
}

export default function Phrases() {
  const todayDay = getTodayDayNumber();

  const defaultIdx = (() => {
    if (!todayDay || todayDay < 6) return 0;
    const idx = phrasebook.findIndex(l => l.days.includes(todayDay));
    return idx >= 0 ? idx : 0;
  })();

  const [selectedLangIdx, setSelectedLangIdx] = useState(defaultIdx);
  const [selectedCategory, setSelectedCategory]  = useState('All');
  const [speakingId, setSpeakingId]              = useState(null);
  const audioRef = useRef(null);

  const lang = phrasebook[selectedLangIdx];

  const presentCategories = CATEGORY_ORDER.filter(cat =>
    lang.phrases.some(p => p.category === cat)
  );
  const categories = ['All', ...presentCategories];

  const isToday = todayDay && lang.days.includes(todayDay);

  const stopAudio = () => {
    if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; }
    setSpeakingId(null);
  };

  // Stop audio and reset category when language changes
  useEffect(() => {
    if (selectedCategory !== 'All' && !lang.phrases.some(p => p.category === selectedCategory)) {
      setSelectedCategory('All');
    }
    stopAudio();
  }, [selectedLangIdx]); // eslint-disable-line react-hooks/exhaustive-deps

  // Stop audio on unmount
  useEffect(() => () => stopAudio(), []); // eslint-disable-line react-hooks/exhaustive-deps

  const speak = (text, id) => {
    if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; }
    if (speakingId === id) { setSpeakingId(null); return; }
    const tl = GOOGLE_TTS_CODES[lang.langCode] || lang.langCode.split('-')[0];
    const url = `https://translate.googleapis.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=${tl}&client=tw-ob`;
    const audio = new Audio(url);
    audio.onended = () => setSpeakingId(null);
    audio.onerror = () => setSpeakingId(null);
    audioRef.current = audio;
    setSpeakingId(id);
    audio.play();
  };

  // Build display: grouped when "All", flat when filtered
  const renderCards = () => {
    if (selectedCategory !== 'All') {
      return lang.phrases
        .filter(p => p.category === selectedCategory)
        .map(p => (
          <PhraseCard key={p.phrase} phrase={p} langCode={lang.langCode}
                      speakingId={speakingId} onSpeak={speak} />
        ));
    }
    return presentCategories.map(cat => {
      const catPhrases = lang.phrases.filter(p => p.category === cat);
      if (!catPhrases.length) return null;
      return (
        <div key={cat}>
          <p style={{
            color: '#A3876F', fontSize: '10px', fontWeight: 700,
            letterSpacing: '1.5px', textTransform: 'uppercase',
            margin: '16px 0 8px 2px',
          }}>
            {cat}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {catPhrases.map(p => (
              <PhraseCard key={p.phrase} phrase={p} langCode={lang.langCode}
                          speakingId={speakingId} onSpeak={speak} />
            ))}
          </div>
        </div>
      );
    });
  };

  return (
    <div style={{ height: '100dvh', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#F8F5F0' }}>

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <div style={{
        background: '#073C77', flexShrink: 0,
        paddingTop: 'calc(env(safe-area-inset-top) + 14px)',
        paddingBottom: '14px', paddingLeft: '16px', paddingRight: '16px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '38px', lineHeight: 1 }}>{lang.flag}</span>
          <div>
            <h1 style={{ color: '#FFFFFF', fontSize: '22px', fontWeight: 800, margin: 0, lineHeight: 1.1 }}>
              {lang.lang}
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '12px', margin: '3px 0 0' }}>
              {isToday
                ? `Today's language — Day ${todayDay}`
                : `${lang.country} · Day${lang.days.length > 1 ? 's' : ''} ${lang.days[0]}${lang.days.length > 1 ? `–${lang.days[lang.days.length - 1]}` : ''}`
              }
            </p>
          </div>
        </div>
      </div>

      {/* ── Language chips ──────────────────────────────────────────────────── */}
      <div
        className="hide-scrollbar"
        style={{
          display: 'flex', gap: '8px', padding: '10px 16px',
          overflowX: 'auto', flexShrink: 0,
          background: '#FFFFFF', borderBottom: '1px solid rgba(7,60,119,0.08)',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {phrasebook.map((l, i) => {
          const sel = i === selectedLangIdx;
          return (
            <button
              key={l.lang}
              onClick={() => setSelectedLangIdx(i)}
              style={{
                display: 'flex', alignItems: 'center', gap: '5px',
                padding: '6px 12px', borderRadius: '999px', flexShrink: 0,
                border: sel ? '1.5px solid #073C77' : '1.5px solid rgba(7,60,119,0.15)',
                background: sel ? '#073C77' : '#F5F0E8',
                color: sel ? '#FFFFFF' : '#A3876F',
                fontSize: '13px', fontWeight: 600, cursor: 'pointer',
              }}
            >
              <span style={{ fontSize: '15px' }}>{l.flag}</span>
              {l.lang}
            </button>
          );
        })}
      </div>

      {/* ── Category filter ─────────────────────────────────────────────────── */}
      <div
        className="hide-scrollbar"
        style={{
          display: 'flex', gap: '6px', padding: '8px 16px',
          overflowX: 'auto', flexShrink: 0,
          background: '#FFFFFF', borderBottom: '1px solid rgba(7,60,119,0.06)',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {categories.map(cat => {
          const sel = cat === selectedCategory;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '4px 12px', borderRadius: '999px', border: 'none',
                background: sel ? '#E9B753' : 'rgba(7,60,119,0.06)',
                color: sel ? '#073C77' : '#A3876F',
                fontSize: '11px', fontWeight: 700, cursor: 'pointer',
                whiteSpace: 'nowrap', flexShrink: 0,
                letterSpacing: '0.3px', textTransform: 'uppercase',
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* ── Phrase cards ────────────────────────────────────────────────────── */}
      <div
        className="hide-scrollbar"
        style={{
          flex: 1, minHeight: 0,
          overflowY: 'scroll', WebkitOverflowScrolling: 'touch',
          padding: '4px 16px',
          paddingBottom: 'calc(4rem + env(safe-area-inset-bottom))',
        }}
      >
        {renderCards()}

        <div style={{ height: '8px' }} />
      </div>
    </div>
  );
}
