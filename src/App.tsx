import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import Admin from './pages/Admin';
import ProtectedRoute from './components/ProtectedRoute';
import './index.css';

function App() {
  const location = useLocation();
  const isSurprisePage = location.pathname === '/welcome';

  return (
    <div className="min-h-screen custom-scrollbar">
      {!isSurprisePage && <Navbar />}
      <AnimatePresence mode="wait">
        <Routes>
          {/* Public Route */}
          <Route path="/welcome" element={<Welcome />} />

          {/* Protected Routes */}
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />

          {/* Admin Route */}
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </AnimatePresence>
      {!isSurprisePage && <Footer />}
    </div>
  );
}

export default App;
