import { useState, createContext, useContext } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Itinerary from './components/Itinerary';
import ActivityDetail from './components/ActivityDetail';
import MapView from './components/MapView';
import Emergency from './components/Emergency';
import Phrases from './components/Phrases';
import BottomNav from './components/BottomNav';
import Login from './components/Login';
import OfflineBanner from './components/OfflineBanner';
import AnnouncementBanner from './components/AnnouncementBanner';

export const AppContext = createContext({
  professorMode: false,
  setProfessorMode: () => {},
  visibilityOverrides: {},
  setVisibilityOverride: () => {},
  isActivityVisible: () => true,
});
export const useAppContext = () => useContext(AppContext);

function AppShell() {
  const location = useLocation();
  const hideNav = location.pathname.startsWith('/activity/');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh', background: '#FFFFFF', position: 'relative', touchAction: 'pan-y' }}>
      <OfflineBanner />
      <AnnouncementBanner />
      <Routes>
        <Route path="/"             element={<Home />} />
        <Route path="/itinerary"    element={<Itinerary />} />
        <Route path="/activity/:id" element={<ActivityDetail />} />
        <Route path="/map"          element={<MapView />} />
        <Route path="/phrases"      element={<Phrases />} />
        <Route path="/emergency"    element={<Emergency />} />
      </Routes>
      {!hideNav && <BottomNav />}
    </div>
  );
}

export default function App() {
  const [user, setUser] = useState(() => {
    const email = localStorage.getItem('byu_trip_email');
    const role  = localStorage.getItem('byu_trip_role');
    return email ? { email, role } : null;
  });

  const [professorMode, setProfessorModeState] = useState(
    () => localStorage.getItem('byu_professor') === 'true'
  );

  const [visibilityOverrides, setVisibilityOverridesState] = useState(() => {
    try { return JSON.parse(localStorage.getItem('byu_visibility') || '{}'); }
    catch { return {}; }
  });

  const setProfessorMode = (val) => {
    localStorage.setItem('byu_professor', val ? 'true' : 'false');
    setProfessorModeState(val);
  };

  const setVisibilityOverride = (activityId, visible) => {
    const next = { ...visibilityOverrides, [activityId]: visible };
    localStorage.setItem('byu_visibility', JSON.stringify(next));
    setVisibilityOverridesState(next);
  };

  // Effective visibility: override wins, then showStudents default
  const isActivityVisible = (activity) =>
    visibilityOverrides[activity.id] ?? activity.showStudents;

  const handleLogin = (userData) => {
    localStorage.setItem('byu_trip_email', userData.email);
    localStorage.setItem('byu_trip_role',  userData.role);
    if (userData.role === 'professor') {
      localStorage.setItem('byu_professor', 'true');
      setProfessorModeState(true);
    }
    setUser(userData);
  };

  if (!user) return <Login onLogin={handleLogin} />;

  return (
    <AppContext.Provider value={{ professorMode, setProfessorMode, visibilityOverrides, setVisibilityOverride, isActivityVisible }}>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </AppContext.Provider>
  );
}
