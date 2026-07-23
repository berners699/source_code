import React from 'react';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import game1 from '../assets/games/game1.png';
import game2 from '../assets/games/game2.png';
import game3 from '../assets/games/game3.png';
import game4 from '../assets/games/game4.png';
import game5 from '../assets/games/game5.png';
import game6 from '../assets/games/game6.png';
import game7 from '../assets/games/game7.png';
import game8 from '../assets/games/game8.png';
import game9 from '../assets/games/game9.png';
import game10 from '../assets/games/game10.png';

const games = [
  {
    id: 1,
    title: "飞车音速",
    image: game1,
    link: "/games"
  },
  {
    id: 2,
    title: "魔界塔Demon Tower",
    image: game2,
    link: "/games"
  },
  {
    id: 3,
    title: "暴走骑士团",
    image: game3,
    link: "/games"
  },
  {
    id: 4,
    title: "划时代·卡牌手游",
    image: game4,
    link: "/games"
  },
  {
    id: 5,
    title: "逗趣主公",
    image: game5,
    link: "/games"
  },
  {
    id: 6,
    title: "诸神征伐·守护雅典娜",
    image: game6,
    link: "/games"
  },
  {
    id: 7,
    title: "小小突击队",
    image: game7,
    link: "/games"
  },
  {
    id: 8,
    title: "太古妖皇决",
    image: game8,
    link: "/games"
  },
  {
    id: 9,
    title: "万灵公主",
    image: game9,
    link: "/games"
  },
  {
    id: 10,
    title: "万灵之王",
    image: game10,
    link: "/games"
  }
];

interface GameGridProps {
  limit?: number;
}

const GameGrid = ({ limit }: GameGridProps) => {
  const displayGames = limit ? games.slice(0, limit) : games;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {displayGames.map((game) => (
        <div key={game.id} className="bg-slate-800 rounded-lg overflow-hidden shadow-lg flex flex-col group hover:shadow-blue-500/20 transition-all duration-300">
          {/* Image */}
          <div className="aspect-[3/4] relative overflow-hidden">
             <img 
               src={game.image} 
               alt={game.title} 
               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
             
             {/* Hover Overlay */}
             <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
               <Link 
                 to={game.link}
                 className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2"
               >
                 <Play size={16} fill="currentColor" />
                 开始试玩
               </Link>
             </div>
          </div>
          
          {/* Content */}
          <div className="p-3">
            <h3 className="text-sm font-bold text-white truncate group-hover:text-blue-400 transition-colors">{game.title}</h3>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs text-gray-400 bg-slate-700 px-2 py-0.5 rounded">RPG</span>
              <span className="text-xs text-yellow-500 flex items-center gap-1">
                ★ 4.9
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameGrid;
