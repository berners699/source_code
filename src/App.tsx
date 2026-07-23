import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GamesPage from './pages/GamesPage';
import MallPage from './pages/MallPage';
import RankPage from './pages/RankPage';
import ProfilePage from './pages/ProfilePage';
import VIPPage from './pages/VIPPage';

import InvitePage from './pages/InvitePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-500 selection:text-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/mall" element={<MallPage />} />
            <Route path="/leaderboard" element={<RankPage />} />
            <Route path="/invite" element={<InvitePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/vip" element={<VIPPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
