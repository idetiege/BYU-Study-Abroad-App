import { emergencyContacts } from '../data/tripData';

const isEuropean  = l => l.includes('European');
const isEmbassy   = l => l.includes('Embassy');
const isHospital  = l => l.includes('Hospital');
const isHotel     = l => l.includes('Hotel');
const isTripStaff = l => !isEuropean(l) && !isEmbassy(l) && !isHospital(l) && !isHotel(l);

const sections = [
  { title: 'US Embassies',  filter: isEmbassy },
  { title: 'Trip Staff',    filter: isTripStaff },
  { title: 'Hotels',        filter: isHotel },
  { title: 'Hospitals',     filter: isHospital },
];

export default function Emergency() {
  return (
    <div className="overflow-y-auto" style={{ background: '#0F0F0F', paddingBottom: 'calc(4rem + env(safe-area-inset-bottom))' }}>
      {/* Header */}
      <div className="px-4 pb-3"
           style={{ background: '#1A0000', borderBottom: '1px solid rgba(220,38,38,0.3)', paddingTop: 'calc(env(safe-area-inset-top) + 16px)' }}>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full"
               style={{ background: 'rgba(220,38,38,0.15)', border: '1px solid rgba(220,38,38,0.4)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </div>
          <div>
            <h1 style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 800, margin: 0 }}>Emergency Contacts</h1>
            <p style={{ color: '#8A8A9A', fontSize: '12px', margin: 0 }}>Tap any number to call</p>
          </div>
        </div>
      </div>

      {/* 112 Banner */}
      <a href="tel:112"
         className="flex items-center justify-between px-5 py-4 mx-4 mt-4 rounded-2xl"
         style={{ background: 'linear-gradient(135deg, #7F1D1D, #991B1B)', border: '1px solid rgba(220,38,38,0.4)', textDecoration: 'none' }}>
        <div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', margin: '0 0 2px' }}>European Emergency</p>
          <p style={{ color: '#FFFFFF', fontSize: '36px', fontWeight: 900, margin: 0, fontVariantNumeric: 'tabular-nums' }}>112</p>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px', margin: '2px 0 0' }}>Works in all EU & Balkan countries</p>
        </div>
        <div className="flex items-center justify-center w-14 h-14 rounded-full" style={{ background: 'rgba(220,38,38,0.4)' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </div>
      </a>

      {/* Sectioned contact lists */}
      {sections.map(section => {
        const contacts = emergencyContacts.filter(c => section.filter(c.label));
        if (contacts.length === 0) return null;
        return (
          <div key={section.title} className="px-4 mt-5">
            <p style={{ color: '#8A8A9A', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '10px' }}>
              {section.title}
            </p>
            <div className="flex flex-col gap-2">
              {contacts.map(contact => (
                <div key={contact.label}
                     className="rounded-xl p-4 flex items-center justify-between"
                     style={{ background: '#1A1A2E', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="flex-1 mr-3">
                    <p style={{ color: '#FFFFFF', fontSize: '15px', fontWeight: 600, margin: '0 0 2px' }}>{contact.label}</p>
                    <p style={{ color: '#8A8A9A', fontSize: '12px', margin: '0 0 4px' }}>{contact.notes}</p>
                    <p style={{ color: '#C9A84C', fontSize: '13px', fontWeight: 700, fontVariantNumeric: 'tabular-nums', margin: 0 }}>{contact.phone}</p>
                  </div>
                  <a href={`tel:${contact.phone.replace(/\s/g, '')}`}
                     className="flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0"
                     style={{ background: 'rgba(220,38,38,0.15)', border: '1px solid rgba(220,38,38,0.3)', textDecoration: 'none' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      <div style={{ height: '24px' }} />
    </div>
  );
}
