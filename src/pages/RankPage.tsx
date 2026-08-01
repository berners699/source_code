import React, { useState } from 'react'
import { Trophy, Medal, Award, Info, ChevronLeft, ChevronRight } from 'lucide-react'
import GoldBean from '../components/GoldBean'
import banner from '@/assets/default/banner.png'
import avatar1 from '../assets/avatars/avatar-1.png'
import avatar2 from '../assets/avatars/avatar-2.png'
import avatar3 from '../assets/avatars/avatar-3.png'
import avatar4 from '../assets/avatars/avatar-4.png'
import avatar5 from '../assets/avatars/avatar-5.png'
import avatar6 from '../assets/avatars/avatar-6.png'
import avatar7 from '../assets/avatars/avatar-7.png'
import avatar8 from '../assets/avatars/avatar-8.png'
import avatar9 from '../assets/avatars/avatar-9.png'
import avatar10 from '../assets/avatars/avatar-10.png'
import avatar11 from '../assets/avatars/avatar-11.png'
import avatar12 from '../assets/avatars/avatar-12.png'
import avatar13 from '../assets/avatars/avatar-13.png'
import avatar14 from '../assets/avatars/avatar-14.png'
import avatar15 from '../assets/avatars/avatar-15.png'
import avatar16 from '../assets/avatars/avatar-16.png'

const RankPage = () => {
  const [activeTab, setActiveTab] = useState<'today' | 'yesterday'>('today')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 15

  const avatars = [
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
    avatar9,
    avatar10,
    avatar11,
    avatar12,
    avatar13,
    avatar14,
    avatar15,
    avatar16,
  ]

  // Generate 30 items
  const allRankData = Array.from({ length: 30 }).map((_, i) => ({
    rank: i + 1,
    user: {
      name: `会员${Math.floor(Math.random() * 900000 + 100000)}`,
      avatar: avatars[i % avatars.length],
    },
    points: (1000000000 - i * 30000000).toLocaleString(),
    reward: (50000000 - i * 1500000).toLocaleString(),
  }))

  const totalPages = Math.ceil(allRankData.length / itemsPerPage)
  const currentData = allRankData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  )

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header Banner */}
      <div className="relative h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={banner} alt="Rank Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-100/60"></div>
        </div>
        <h1 className="text-4xl font-bold text-primary z-10 flex items-center gap-3 drop-shadow-lg">
          <Trophy className="text-yellow-400 w-10 h-10" />
          排行榜
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => {
              setActiveTab('today')
              setCurrentPage(1)
            }}
            className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all shadow-lg ${
              activeTab === 'today'
                ? 'bg-linear-to-r from-yellow-500 to-orange-500 text-white scale-105'
                : 'bg-slate-200 text-primary hover:bg-slate-300'
            }`}
          >
            今日榜单
          </button>
          <button
            onClick={() => {
              setActiveTab('yesterday')
              setCurrentPage(1)
            }}
            className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all shadow-lg ${
              activeTab === 'yesterday'
                ? 'bg-linear-to-r from-blue-500 to-cyan-500 text-white scale-105'
                : 'bg-slate-200 text-primary hover:bg-slate-300'
            }`}
          >
            昨日榜单
          </button>
        </div>

        {/* Table */}
        <div className="bg-slate-200/80 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-300 shadow-2xl mb-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-100/50 text-gray-400 border-b border-slate-300">
                  <th className="px-6 py-4 font-medium w-24 text-center">排名</th>
                  <th className="px-6 py-4 font-medium">用户</th>
                  <th className="px-6 py-4 font-medium text-right">赢豆</th>
                  <th className="px-6 py-4 font-medium text-right">奖励</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-300/50">
                {currentData.map((item) => (
                  <tr key={item.rank} className="hover:bg-slate-300/30 transition-colors">
                    <td className="px-6 py-4 text-center">
                      {item.rank === 1 && (
                        <img
                          src="https://emojicdn.elk.sh/🥇"
                          className="w-8 h-8 mx-auto"
                          alt="1st"
                        />
                      )}
                      {item.rank === 2 && (
                        <img
                          src="https://emojicdn.elk.sh/🥈"
                          className="w-8 h-8 mx-auto"
                          alt="2nd"
                        />
                      )}
                      {item.rank === 3 && (
                        <img
                          src="https://emojicdn.elk.sh/🥉"
                          className="w-8 h-8 mx-auto"
                          alt="3rd"
                        />
                      )}
                      {item.rank > 3 && (
                        <span className="text-gray-400 font-bold text-lg">{item.rank}</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-300 overflow-hidden border-2 border-yellow-500/50 shadow-[0_0_10px_rgba(234,179,8,0.3)]">
                          <img
                            src={item.user.avatar}
                            alt={item.user.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-gray-200 font-medium">{item.user.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right font-mono text-yellow-400 font-bold">
                      <div className="flex items-center justify-end gap-1">
                        {item.points}
                        <GoldBean className="w-4 h-4" />
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right font-mono text-green-400 font-bold">
                      <div className="flex items-center justify-end gap-1">
                        {item.reward}
                        <GoldBean className="w-4 h-4" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination Bar */}
        <div className="flex items-center justify-center gap-4 py-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className={`p-2 rounded-lg border border-slate-700 transition-all ${currentPage === 1 ? 'text-slate-600 cursor-not-allowed' : 'text-slate-400 hover:bg-slate-200 hover:text-white'}`}
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex items-center gap-2 text-slate-400 font-medium">
            <div className="bg-slate-200 border border-slate-700 px-4 py-1 rounded-lg text-white">
              {currentPage}
            </div>
            <span>/</span>
            <span>{totalPages}</span>
          </div>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-lg border border-slate-700 transition-all ${currentPage === totalPages ? 'text-slate-600 cursor-not-allowed' : 'text-slate-400 hover:bg-slate-200 hover:text-white'}`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default RankPage
