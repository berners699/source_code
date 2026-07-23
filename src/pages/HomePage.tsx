import React, { useState } from 'react';
import Hero from '../components/Hero';
import TrialSteps from '../components/TrialSteps';
import GameGrid from '../components/GameGrid';
import NoticeBoard from '../components/NoticeBoard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [isNoticeBoardOpen, setIsNoticeBoardOpen] = useState(false);

  return (
    <>
      <Hero />
      <TrialSteps onMoreClick={() => setIsNoticeBoardOpen(true)} />
      
      {/* Preview Section for Games */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">游戏试玩</h2>
            <Link to="/games" className="text-blue-400 hover:text-blue-300 font-medium flex items-center">
              查看全部 <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          <GameGrid limit={10} />
        </div>
      </section>

      {/* Notice Board Modal */}
      <NoticeBoard 
        isOpen={isNoticeBoardOpen} 
        onClose={() => setIsNoticeBoardOpen(false)} 
      />
    </>
  );
};

export default HomePage;
