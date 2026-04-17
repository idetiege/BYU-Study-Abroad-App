import { useState } from 'react';
import { PROFESSOR_EMAILS } from '../data/tripData';

const LOGIN_PROF_PASSWORD = 'BYU2026prof';

export default function Login({ onLogin }) {
  const [screen, setScreen] = useState('main'); // 'main' | 'professor'
  const [email, setEmail] = useState('');
  const [profPw, setProfPw] = useState('');
  const [emailError, setEmailError] = useState('');
  const [pwError, setPwError] = useState('');

  const handleStudentLogin = () => {
    const trimmed = email.trim().toLowerCase();
    if (!trimmed.includes('@') || !trimmed.includes('.')) {
      setEmailError('Enter a valid email address.');
      return;
    }
    const isProfEmail = PROFESSOR_EMAILS.map(e => e.toLowerCase()).includes(trimmed);
    onLogin({ email: trimmed, role: isProfEmail ? 'professor' : 'student' });
  };

  const handleProfPassword = () => {
    if (profPw === LOGIN_PROF_PASSWORD) {
      onLogin({ email: 'professor', role: 'professor' });
    } else {
      setPwError('Incorrect password.');
      setProfPw('');
    }
  };

  return (
    <div style={{
      height: '100dvh',
      background: '#0F0F0F',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      paddingTop: 'calc(env(safe-area-inset-top) + 24px)',
      paddingBottom: 'calc(env(safe-area-inset-bottom) + 24px)',
      boxSizing: 'border-box',
    }}>
      {/* Branding */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{
          width: '72px', height: '72px', borderRadius: '20px',
          background: 'linear-gradient(135deg, #0A1931, #1A1A4E)',
          border: '2px solid rgba(201,168,76,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 16px',
        }}>
          <span style={{ fontSize: '32px' }}>✈️</span>
        </div>
        <h1 style={{ color: '#FFFFFF', fontSize: '24px', fontWeight: 800, margin: '0 0 4px' }}>BYU Europe Trip</h1>
        <p style={{ color: '#C9A84C', fontSize: '12px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', margin: 0 }}>2026 Study Abroad</p>
      </div>

      {screen === 'main' ? (
        <div style={{ width: '100%', maxWidth: '360px' }}>
          <label style={{ display: 'block', color: '#8A8A9A', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '8px' }}>
            Your BYU Email
          </label>
          <input
            type="email"
            value={email}
            onChange={e => { setEmail(e.target.value); setEmailError(''); }}
            onKeyDown={e => e.key === 'Enter' && handleStudentLogin()}
            placeholder="you@byu.edu"
            autoComplete="email"
            autoFocus
            style={{
              width: '100%', boxSizing: 'border-box',
              padding: '14px 16px',
              borderRadius: '14px',
              background: '#1A1A2E',
              border: `1px solid ${emailError ? '#DC2626' : 'rgba(255,255,255,0.1)'}`,
              color: '#FFFFFF', fontSize: '16px', caretColor: '#C9A84C',
              outline: 'none', marginBottom: '6px',
            }}
          />
          {emailError && <p style={{ color: '#DC2626', fontSize: '12px', margin: '0 0 8px' }}>{emailError}</p>}

          <button
            onClick={handleStudentLogin}
            style={{
              width: '100%', padding: '14px', borderRadius: '14px',
              background: 'linear-gradient(135deg, #C9A84C, #F0D080)',
              color: '#0A1931', fontSize: '15px', fontWeight: 700,
              border: 'none', cursor: 'pointer',
              marginTop: '10px', marginBottom: '20px',
            }}
          >
            Enter App →
          </button>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
            <span style={{ color: '#8A8A9A', fontSize: '11px' }}>or</span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
          </div>

          <button
            onClick={() => setScreen('professor')}
            style={{
              width: '100%', padding: '14px', borderRadius: '14px',
              background: 'transparent',
              border: '1px solid rgba(201,168,76,0.35)',
              color: '#C9A84C', fontSize: '15px', fontWeight: 600,
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            Professor Access
          </button>

          <p style={{ color: '#8A8A9A', fontSize: '11px', textAlign: 'center', marginTop: '24px', lineHeight: 1.6 }}>
            Your email is saved on this device only. You won't need to enter it again.
          </p>
        </div>
      ) : (
        <div style={{ width: '100%', maxWidth: '360px' }}>
          <button
            onClick={() => { setScreen('main'); setPwError(''); setProfPw(''); }}
            style={{ background: 'none', border: 'none', color: '#8A8A9A', fontSize: '13px', cursor: 'pointer', padding: '0 0 20px', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
            Back
          </button>

          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <div style={{
              width: '56px', height: '56px', borderRadius: '16px',
              background: 'rgba(201,168,76,0.12)',
              border: '1px solid rgba(201,168,76,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 14px',
            }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <p style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: 700, margin: '0 0 4px' }}>Professor Access</p>
            <p style={{ color: '#8A8A9A', fontSize: '13px', margin: 0 }}>Enter your professor password</p>
          </div>

          <input
            type="password"
            value={profPw}
            onChange={e => { setProfPw(e.target.value); setPwError(''); }}
            onKeyDown={e => e.key === 'Enter' && handleProfPassword()}
            placeholder="••••••••••"
            autoFocus
            style={{
              width: '100%', boxSizing: 'border-box',
              padding: '14px 16px', borderRadius: '14px',
              background: '#1A1A2E',
              border: `1px solid ${pwError ? '#DC2626' : 'rgba(255,255,255,0.1)'}`,
              color: '#FFFFFF', fontSize: '16px', caretColor: '#C9A84C',
              outline: 'none', marginBottom: '6px',
            }}
          />
          {pwError && <p style={{ color: '#DC2626', fontSize: '12px', margin: '0 0 8px' }}>{pwError}</p>}

          <button
            onClick={handleProfPassword}
            style={{
              width: '100%', padding: '14px', borderRadius: '14px',
              background: '#C9A84C', color: '#0A1931',
              fontSize: '15px', fontWeight: 700,
              border: 'none', cursor: 'pointer', marginTop: '10px',
            }}
          >
            Unlock Professor Mode
          </button>
        </div>
      )}
    </div>
  );
}
