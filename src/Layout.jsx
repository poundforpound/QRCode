import React from 'react';
import { Navigation } from './components/Navigation/Navigation';
import { QrCodeGenerator } from './components/Generate/QrCodeGenerator';
import { QrCodeScanner } from './components/Scan/QrCodeScanner';
import { Routes, Route } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/generate" element={<QrCodeGenerator />} />
        <Route path="/scan" element={<QrCodeScanner />} />
      </Routes>
    </div>
  );
};
