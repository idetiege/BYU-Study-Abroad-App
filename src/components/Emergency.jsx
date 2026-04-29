import { useState } from 'react';
import { emergencyContacts, getTodayDayNumber, getDayData } from '../data/tripData';

function PhoneIcon({ size = 22, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

function BigActionButton({ href, bg, children, style = {} }) {
  return (
    <a href={href} style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
      background: bg, borderRadius: '16px', textDecoration: 'none',
      height: '64px', width: '100%',
      color: '#FFFFFF', fontSize: '17px', fontWeight: 800,
      letterSpacing: '0.2px', boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
      ...style,
    }}>
      {children}
    </a>
  );
}

function ContactRow({ contact }) {
  const tbd = !contact.phone || contact.phone === 'TBD';
  const tel = contact.phone?.replace(/[\s\-().]/g, '');
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: '#F5F0E8', borderRadius: '12px', padding: '13px 14px',
      border: '1px solid rgba(7,60,119,0.08)',
    }}>
      <div style={{ flex: 1, marginRight: 10 }}>
        <p style={{ color: '#073C77', fontSize: '14px', fontWeight: 600, margin: '0 0 1px' }}>{contact.label}</p>
        {contact.notes ? <p style={{ color: '#A3876F', fontSize: '11px', margin: '0 0 3px', lineHeight: 1.4 }}>{contact.notes}</p> : null}
        <p style={{ color: tbd ? '#DC2626' : '#1A4A2A', fontSize: '13px', fontWeight: 700, fontVariantNumeric: 'tabular-nums', margin: 0 }}>
          {tbd ? '⚠ Number TBD — add before departure' : contact.phone}
        </p>
      </div>
      {!tbd && (
        <a href={`tel:${tel}`} style={{
          width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
          background: 'rgba(220,38,38,0.1)', border: '1px solid rgba(220,38,38,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none',
        }}>
          <PhoneIcon size={18} color="#DC2626" />
        </a>
      )}
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ paddingTop: '20px' }}>
      <p style={{ color: '#A3876F', fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px',
                  textTransform: 'uppercase', margin: '0 0 10px', paddingLeft: 2 }}>
        {title}
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {children}
      </div>
    </div>
  );
}

export default function Emergency() {
  const [showOtherEmbassies, setShowOtherEmbassies] = useState(false);

  // Detect current country from today's itinerary day
  const todayDay   = getTodayDayNumber();
  const todayData  = todayDay ? getDayData(todayDay) : null;
  const country    = todayData?.country || null;

  // Split contacts by type
  const embassies  = emergencyContacts.filter(c => c.label.includes('Embassy'));
  const staff      = emergencyContacts.filter(c => !c.label.includes('Embassy') && !c.label.includes('Hospital') && !c.label.includes('Hotel'));
  const hospitals  = emergencyContacts.filter(c => c.label.includes('Hospital'));
  const hotels     = emergencyContacts.filter(c => c.label.includes('Hotel'));

  // Smart embassy: match current country, else first
  const smartEmbassy   = embassies.find(e => country && e.label.toLowerCase().includes(country.toLowerCase())) || embassies[0];
  const otherEmbassies = embassies.filter(e => e !== smartEmbassy);

  // Primary professor for quick-call (first non-TBD staff, else first staff)
  const callableStaff  = staff.find(s => s.phone && s.phone !== 'TBD') || staff[0];
  const callableTel    = callableStaff?.phone?.replace(/[\s\-().]/g, '');
  const callableLabel  = callableStaff?.label?.split('—')[1]?.trim() || callableStaff?.label || 'Professor';

  return (
    <div style={{ height: '100%', overflowY: 'auto', background: '#FFFFFF',
                  paddingBottom: 'calc(4rem + env(safe-area-inset-bottom))' }}>

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <div style={{
        background: '#1A0000', flexShrink: 0,
        paddingTop: 'calc(env(safe-area-inset-top) + 14px)',
        paddingBottom: '14px', paddingLeft: '16px', paddingRight: '16px',
        borderBottom: '1px solid rgba(220,38,38,0.3)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: 38, height: 38, borderRadius: '50%', flexShrink: 0,
            background: 'rgba(220,38,38,0.2)', border: '1px solid rgba(220,38,38,0.45)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <PhoneIcon size={18} color="#FF6B6B" />
          </div>
          <div>
            <h1 style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 800, margin: 0, lineHeight: 1.1 }}>Emergency Help</h1>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', margin: '2px 0 0' }}>Works offline · No login required</p>
          </div>
        </div>
        {country && (
          <div style={{
            marginTop: '10px', background: 'rgba(220,38,38,0.15)', borderRadius: '8px',
            padding: '6px 10px', border: '1px solid rgba(220,38,38,0.2)',
            display: 'inline-flex', alignItems: 'center', gap: '6px',
          }}>
            <span style={{ fontSize: '12px' }}>📍</span>
            <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', fontWeight: 600 }}>
              Currently in {country} — Day {todayDay}
            </span>
          </div>
        )}
      </div>

      {/* ── Action buttons ──────────────────────────────────────────────────── */}
      <div style={{ padding: '16px 16px 0' }}>

        {/* 112 — full width, biggest button */}
        <a href="tel:112" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #7F1D1D 0%, #991B1B 100%)',
          borderRadius: '18px', padding: '0 24px', height: '88px',
          textDecoration: 'none', boxShadow: '0 4px 20px rgba(220,38,38,0.4)',
          border: '1px solid rgba(255,255,255,0.1)',
          marginBottom: '10px',
        }}>
          <div>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '10px', fontWeight: 700,
                        letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 2px' }}>
              EUROPEAN EMERGENCY
            </p>
            <p style={{ color: '#FFFFFF', fontSize: '44px', fontWeight: 900, margin: 0,
                        fontVariantNumeric: 'tabular-nums', lineHeight: 1 }}>
              112
            </p>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '11px', margin: '3px 0 0' }}>
              Police · Fire · Ambulance — all countries
            </p>
          </div>
          <div style={{
            width: 56, height: 56, borderRadius: '50%', flexShrink: 0,
            background: 'rgba(255,255,255,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <PhoneIcon size={26} color="#FFFFFF" />
          </div>
        </a>

        {/* Call professor — full width */}
        <div style={{ marginBottom: '10px' }}>
          <BigActionButton
            href={callableTel ? `tel:${callableTel}` : '#'}
            bg="#073C77"
          >
            <PhoneIcon size={20} color="#FFFFFF" />
            Call {callableLabel}
          </BigActionButton>
        </div>

        {/* Smart embassy button */}
        {smartEmbassy && (
          <a href={`tel:${smartEmbassy.phone.replace(/[\s\-().]/g, '')}`} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            background: '#F5F0E8', borderRadius: '14px', padding: '14px 16px',
            border: '1px solid rgba(7,60,119,0.12)', textDecoration: 'none',
            marginBottom: '4px',
          }}>
            <div>
              <p style={{ color: '#A3876F', fontSize: '10px', fontWeight: 700,
                          letterSpacing: '1.5px', textTransform: 'uppercase', margin: '0 0 2px' }}>
                {country ? `US Embassy — ${country}` : 'US Embassy'}
              </p>
              <p style={{ color: '#073C77', fontSize: '15px', fontWeight: 700, margin: '0 0 1px' }}>
                {smartEmbassy.phone}
              </p>
              <p style={{ color: '#A3876F', fontSize: '11px', margin: 0 }}>{smartEmbassy.notes}</p>
            </div>
            <div style={{
              width: 40, height: 40, borderRadius: '50%', flexShrink: 0, marginLeft: 10,
              background: 'rgba(7,60,119,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <PhoneIcon size={18} color="#073C77" />
            </div>
          </a>
        )}

      </div>

      {/* ── Trip Staff ─────────────────────────────────────────────────────── */}
      <div style={{ padding: '0 16px' }}>
        <Section title="Trip Staff">
          {staff.map(c => <ContactRow key={c.label} contact={c} />)}
        </Section>

        {/* ── Hotels ─────────────────────────────────────────────────────── */}
        <Section title="Hotels">
          {hotels.map(c => <ContactRow key={c.label} contact={c} />)}
        </Section>

        {/* ── Hospitals ──────────────────────────────────────────────────── */}
        <Section title="Hospitals">
          {hospitals.map(c => <ContactRow key={c.label} contact={c} />)}
        </Section>

        {/* ── All Embassies ──────────────────────────────────────────────── */}
        <Section title="US Embassies">
          <ContactRow contact={smartEmbassy} />
          {showOtherEmbassies
            ? otherEmbassies.map(c => <ContactRow key={c.label} contact={c} />)
            : (
              <button
                onClick={() => setShowOtherEmbassies(true)}
                style={{
                  background: 'none', border: '1px dashed rgba(7,60,119,0.2)',
                  borderRadius: '12px', padding: '12px', width: '100%', cursor: 'pointer',
                  color: '#A3876F', fontSize: '13px', fontWeight: 600,
                }}
              >
                Show {otherEmbassies.length} more embassies
              </button>
            )
          }
        </Section>

        <div style={{ height: '8px' }} />
      </div>
    </div>
  );
}
