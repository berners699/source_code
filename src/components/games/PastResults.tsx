import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import GoldBean from '../GoldBean'

interface PastResultsProps {
  upcomingIssues: any[]
  history: any[]
  activeGame: any
  onJoinClick: () => void
}

const PastResults: React.FC<PastResultsProps> = ({
  upcomingIssues,
  history,
  activeGame,
  onJoinClick,
}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20
  const totalPages = 5

  const startIndex = (currentPage - 1) * itemsPerPage
  const currentHistory = history.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-200/50 text-slate-400">
            <tr>
              <th className="p-4 whitespace-nowrap">游戏期号</th>
              <th className="p-4 whitespace-nowrap">开奖时间</th>
              <th className="p-4 whitespace-nowrap">解谜结果</th>
              <th className="p-4 whitespace-nowrap">金豆总数</th>
              <th className="p-4 whitespace-nowrap">猜中人数</th>
              <th className="p-4 whitespace-nowrap">收入/投入</th>
              <th className="p-4 whitespace-nowrap">参与</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {/* Upcoming Issues (Only on first page) */}
            {currentPage === 1 &&
              upcomingIssues.map((record, i) => (
                <tr
                  key={`upcoming-${i}`}
                  className="hover:bg-slate-200/30 transition-colors text-slate-300"
                >
                  <td className="p-4 font-mono">{record.issue}</td>
                  <td className="p-4 font-mono text-slate-400">{record.time}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2 text-slate-500 font-medium">
                      等待解密
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1 font-mono text-blue-300">
                      {record.totalCoins}
                      <GoldBean className="w-4 h-4" />
                    </div>
                  </td>
                  <td className="p-4 font-mono text-slate-600">0</td>
                  <td className="p-4 text-slate-600">0 | 0</td>
                  <td className="p-4">
                    <button
                      onClick={onJoinClick}
                      className={`px-4 py-1 rounded-lg bg-linear-to-r ${activeGame.colors.primary} text-white text-xs font-bold shadow-lg transition-all active:scale-95`}
                    >
                      立即参与
                    </button>
                  </td>
                </tr>
              ))}
            {/* Past History */}
            {currentHistory.map((record, i) => (
              <tr key={i} className="hover:bg-slate-200/30 transition-colors text-slate-300">
                <td className="p-4 font-mono">{record.issue}</td>
                <td className="p-4 font-mono text-slate-400">{record.time}</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono">{record.numbers.join('+')}=</span>
                    <span
                      className={`w-6 h-6 rounded-full ${activeGame.colors.bg} flex items-center justify-center text-white text-xs font-bold shadow-xs`}
                    >
                      {record.sum}
                    </span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-1 font-mono text-blue-300">
                    {record.totalCoins}
                    <GoldBean className="w-4 h-4" />
                  </div>
                </td>
                <td className="p-4 font-mono">{record.winners}</td>
                <td className="p-4">
                  <div className="flex flex-col text-xs text-slate-400 gap-1">
                    <span className="flex items-center gap-1">
                      收:{record.income} <GoldBean className="w-3 h-3" />
                    </span>
                    <span className="flex items-center gap-1">
                      竞:{record.invest} <GoldBean className="w-3 h-3" />
                    </span>
                  </div>
                </td>
                <td className="p-4">
                  <span className="px-3 py-1 rounded-full bg-slate-200 text-slate-500 text-xs border border-slate-700">
                    {record.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 p-6 border-t border-slate-800">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          className="p-2 text-slate-500 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft size={20} />
        </button>

        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`w-8 h-8 rounded-lg text-sm font-bold transition-all ${
              currentPage === i + 1
                ? `bg-linear-to-r ${activeGame.colors.primary} text-white shadow-lg scale-110`
                : 'bg-slate-200 text-slate-400 hover:bg-slate-300 hover:text-slate-200'
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
          disabled={currentPage === totalPages}
          className="p-2 text-slate-500 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}

export default PastResults
