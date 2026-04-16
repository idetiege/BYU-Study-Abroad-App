import { useState } from 'react';
import { PROFESSOR_EMAILS } from '../data/tripData';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const trimmed = email.trim().toLowerCase();
    if (!trimmed) { setError('Please enter your email.'); return; }
    const role = PROFESSOR_EMAILS.includes(trimmed) ? 'professor' : 'student';
    localStorage.setItem('byu_trip_email', trimmed);
    localStorage.setItem('byu_trip_role', role);
    onLogin({ email: trimmed, role });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6" style={{ background: '#0F0F0F' }}>
      {/* Logo / branding */}
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center w-20 h-20 rounded-2xl mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #0A1931, #1A1A2E)', border: '2px solid rgba(201,168,76,0.4)' }}>
          <span style={{ fontSize: '36px' }}>✈️</span>
        </div>
        <h1 style={{ color: '#FFFFFF', fontSize: '26px', fontWeight: 800, margin: '0 0 4px' }}>BYU Europe Trip</h1>
        <p style={{ color: '#C9A84C', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', margin: 0 }}>2026 Study Abroad</p>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="mb-4">
          <label style={{ display: 'block', color: '#8A8A9A', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '8px' }}>
            Your BYU Email
          </label>
          <input
            type="email"
            value={email}
            onChange={e => { setEmail(e.target.value); setError(''); }}
            placeholder="you@byu.edu"
            autoComplete="email"
            className="w-full px-4 py-3 rounded-xl outline-none"
            style={{ background: '#1A1A2E', border: '1px solid rgba(255,255,255,0.1)', color: '#FFFFFF', fontSize: '16px', caretColor: '#C9A84C' }}
          />
          {error && <p style={{ color: '#DC2626', fontSize: '12px', marginTop: '6px' }}>{error}</p>}
        </div>

        <button type="submit" className="w-full py-4 rounded-2xl font-bold text-base"
                style={{ background: 'linear-gradient(135deg, #C9A84C, #F0D080)', color: '#0A1931', fontSize: '16px', fontWeight: 700, letterSpacing: '0.5px' }}>
          Enter App →
        </button>

        <p style={{ color: '#8A8A9A', fontSize: '12px', textAlign: 'center', marginTop: '16px', lineHeight: 1.5 }}>
          Your email is used only to determine your access level. No data is sent to any server.
        </p>
      </form>
    </div>
  );
}
