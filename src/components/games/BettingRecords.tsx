import React, { useState } from 'react'
import { AlertCircle, ChevronLeft, ChevronRight, X } from 'lucide-react'

interface BettingRecordsProps {
  activeGame: any
}

const BettingRecords: React.FC<BettingRecordsProps> = ({ activeGame }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [showDetails, setShowDetails] = useState(false)
  const [selectedRecord, setSelectedRecord] = useState<any>(null)

  // Mock data
  const records = [
    {
      issue: '88198223',
      time: '2026-01-25 10:03:42',
      result: 16,
      consumed: 11000,
      earned: 0,
      profit: -11000,
      details: {
        numbers: [
          { num: 1, val: 30 },
          { num: 3, val: 100 },
          { num: 5, val: 210 },
          { num: 7, val: 360 },
          { num: 9, val: 550 },
          { num: 11, val: 690 },
          { num: 13, val: 750 },
          { num: 15, val: 730 },
          { num: 17, val: 630 },
          { num: 19, val: 450 },
          { num: 21, val: 280 },
          { num: 23, val: 150 },
          { num: 25, val: 60 },
          { num: 27, val: 10 },
        ],
        totalNumbers: 14,
        totalBet: 11000,
        totalProfit: -11000,
      },
    },
    {
      issue: '88198212',
      time: '2026-01-25 09:41:10',
      result: 15,
      consumed: 5000,
      earned: 9796,
      profit: 4796,
      details: {
        numbers: [
          { num: 1, val: 30 },
          { num: 3, val: 100 },
          { num: 5, val: 210 },
          { num: 7, val: 360 },
          { num: 9, val: 550 },
          { num: 11, val: 690 },
          { num: 13, val: 750 },
          { num: 15, val: 730, extra: [9796] },
          { num: 17, val: 630 },
          { num: 19, val: 450 },
          { num: 21, val: 280 },
          { num: 23, val: 150 },
          { num: 25, val: 60 },
          { num: 27, val: 10 },
        ],
        totalNumbers: 14,
        totalBet: 5000,
        totalProfit: 4796,
      },
    },
  ]

  const handleViewDetails = (record: any) => {
    setSelectedRecord(record)
    setShowDetails(true)
  }

  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-200/50 text-slate-400">
            <tr>
              <th className="p-4 whitespace-nowrap text-center">游戏期号</th>
              <th className="p-4 whitespace-nowrap text-center">解密时间</th>
              <th className="p-4 whitespace-nowrap text-center">参与结果</th>
              <th className="p-4 whitespace-nowrap text-center">消耗金豆</th>
              <th className="p-4 whitespace-nowrap text-center">获得金豆</th>
              <th className="p-4 whitespace-nowrap text-center">盈亏</th>
              <th className="p-4 whitespace-nowrap text-center">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {records.map((record, i) => (
              <tr key={i} className="hover:bg-slate-200/30 transition-colors text-slate-300">
                <td className="p-4 text-center font-mono">{record.issue}</td>
                <td className="p-4 text-center font-mono text-slate-400">{record.time}</td>
                <td className="p-4 text-center">
                  <div className="flex justify-center">
                    <span
                      className={`w-8 h-8 rounded-full ${activeGame.colors.bg} flex items-center justify-center text-white text-sm font-bold shadow-xs`}
                    >
                      {record.result}
                    </span>
                  </div>
                </td>
                <td className="p-4 text-center font-mono">{record.consumed.toLocaleString()}</td>
                <td className="p-4 text-center font-mono">{record.earned.toLocaleString()}</td>
                <td
                  className={`p-4 text-center font-mono font-bold ${record.profit >= 0 ? 'text-red-500' : 'text-slate-400'}`}
                >
                  {record.profit >= 0
                    ? `+${record.profit.toLocaleString()}`
                    : record.profit.toLocaleString()}
                </td>
                <td className="p-4 text-center">
                  <button
                    onClick={() => handleViewDetails(record)}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    查看详情
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-4 p-6 border-t border-slate-800">
        <button className="p-1 text-slate-600 hover:text-slate-400 transition-colors">
          <ChevronLeft size={20} />
        </button>
        <div className="w-8 h-8 flex items-center justify-center rounded-sm border border-blue-500 text-blue-500 font-bold">
          1
        </div>
        <button className="p-1 text-slate-600 hover:text-slate-400 transition-colors">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Details Modal */}
      {showDetails && selectedRecord && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-slate-100 border border-slate-800 rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl animate-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="relative p-6 flex flex-col items-center border-b border-slate-800 bg-slate-200/50">
              <button
                onClick={() => setShowDetails(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div
                className={`px-12 py-3 rounded-full mb-6 bg-linear-to-r ${activeGame.colors.primary} shadow-lg`}
              >
                <span className="text-white font-bold text-xl">{activeGame.name}</span>
              </div>

              <div className="flex items-center gap-4 w-full">
                <div className="flex-1 h-px bg-slate-200"></div>
                <span className="text-blue-400 font-medium">第 {selectedRecord.issue} 期</span>
                <div className="flex-1 h-px bg-slate-200"></div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 bg-slate-100/50 text-[15px]">
              <div className="grid grid-cols-5 lg:grid-cols-10 gap-3 mb-8">
                {selectedRecord.details.numbers.map((item: any, idx: number) => (
                  <div
                    key={idx}
                    className={`flex flex-col rounded-lg border overflow-hidden transition-all ${
                      item.num === selectedRecord.result
                        ? `border-blue-500 bg-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.3)]`
                        : 'border-slate-800 bg-slate-200/30 text-slate-400'
                    }`}
                  >
                    <div
                      className={`py-1 text-center font-bold border-b ${
                        item.num === selectedRecord.result
                          ? 'border-blue-400 bg-blue-500 text-white'
                          : 'border-slate-800 bg-slate-200/50'
                      }`}
                    >
                      {item.num}
                    </div>
                    <div
                      className={`py-2 text-center font-mono ${item.num === selectedRecord.result ? 'text-white' : ''}`}
                    >
                      {item.val}
                    </div>
                    {item.extra && item.num === selectedRecord.result && (
                      <div className="flex flex-col gap-1 py-2 border-t border-blue-400/30 bg-blue-400/10">
                        {item.extra.map((ex: number, i: number) => (
                          <div
                            key={i}
                            className="text-center font-mono leading-tight text-blue-300"
                          >
                            {ex.toLocaleString()}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="text-center text-slate-400 bg-slate-200/30 py-4 rounded-xl border border-slate-800">
                共{' '}
                <span className="text-blue-400 font-bold">
                  {selectedRecord.details.totalNumbers}
                </span>{' '}
                个数字， 投注{' '}
                <span className="text-blue-400 font-bold">
                  {selectedRecord.details.totalBet.toLocaleString()}
                </span>{' '}
                金豆， 盈亏{' '}
                <span
                  className={`font-bold ${selectedRecord.details.totalProfit >= 0 ? 'text-red-500' : 'text-slate-400'}`}
                >
                  {selectedRecord.details.totalProfit >= 0
                    ? `+${selectedRecord.details.totalProfit.toLocaleString()}`
                    : selectedRecord.details.totalProfit.toLocaleString()}
                </span>{' '}
                金豆
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BettingRecords
