import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import Navbar from '@/components/Navbar';
import HomePage from '@/pages/HomePage';
import ProfilePage from '@/pages/ProfilePage';
import VisiPage from '@/pages/VisiPage';
import NilaiPage from '@/pages/NilaiPage';
import GaleriPage from '@/pages/GaleriPage';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/visi-misi" element={<VisiPage />} />
        <Route path="/nilai" element={<NilaiPage />} />
        <Route path="/galeri" element={<GaleriPage />} />
        {/* route lain */}
      </Routes>
    </>
  );
}

export default App;
