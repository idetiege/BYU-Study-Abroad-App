import { useState, createContext, useContext } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Itinerary from './components/Itinerary';
import ActivityDetail from './components/ActivityDetail';
import MapView from './components/MapView';
import Emergency from './components/Emergency';
import BottomNav from './components/BottomNav';
import Login from './components/Login';

export const AppContext = createContext({ professorMode: false, setProfessorMode: () => {} });
export const useAppContext = () => useContext(AppContext);

function AppShell() {
  const location = useLocation();
  const hideNav = location.pathname.startsWith('/activity/');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh', background: '#0F0F0F', overflow: 'hidden', position: 'relative' }}>
      <Routes>
        <Route path="/"             element={<Home />} />
        <Route path="/itinerary"    element={<Itinerary />} />
        <Route path="/activity/:id" element={<ActivityDetail />} />
        <Route path="/map"          element={<MapView />} />
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

  const setProfessorMode = (val) => {
    localStorage.setItem('byu_professor', val ? 'true' : 'false');
    setProfessorModeState(val);
  };

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
    <AppContext.Provider value={{ professorMode, setProfessorMode }}>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </AppContext.Provider>
  );
}
