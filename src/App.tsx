import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { Research } from './pages/Research';
import { Publications } from './pages/Publications';
import { People } from './pages/People';
import { Community } from './pages/Community';
import { Contact } from './pages/Contact';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/people" element={<People />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;