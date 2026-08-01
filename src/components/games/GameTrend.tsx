import React from 'react'

interface GameTrendProps {
  activeGame: any
  trendIssues: number
  setTrendIssues: (count: number) => void
  history: any[]
  isNumberHighlighted: (num: number) => boolean
}

const GameTrend: React.FC<GameTrendProps> = ({
  activeGame,
  trendIssues,
  setTrendIssues,
  history,
  isNumberHighlighted,
}) => {
  return (
    <div className="p-4 lg:p-6 space-y-6">
      {/* Issue Selector */}
      <div className="flex justify-center gap-4">
        {[100, 200, 300, 500, 1000].map((count) => (
          <button
            key={count}
            onClick={() => setTrendIssues(count)}
            className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${trendIssues === count ? `bg-linear-to-r ${activeGame.colors.primary} text-white shadow-lg` : 'bg-slate-200 text-slate-400 hover:bg-slate-300'}`}
          >
            {count}期
          </button>
        ))}
      </div>

      {/* Trend Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-100/50">
        <div className="min-w-274.5">
          <table className="w-full text-center text-[10px] border-collapse">
            <thead className="bg-slate-200/50 text-slate-500">
              <tr className="h-14">
                <th className="p-2 border border-slate-800" rowSpan={2}>
                  期号
                </th>
                <th className="p-2 border border-slate-800" colSpan={28}>
                  号码分布
                </th>
                <th className="p-2 border border-slate-800" colSpan={2}>
                  单双
                </th>
                <th className="p-2 border border-slate-800" colSpan={2}>
                  中边
                </th>
                <th className="p-2 border border-slate-800" colSpan={2}>
                  大小
                </th>
                <th className="p-2 border border-slate-800" rowSpan={2}>
                  尾数
                </th>
                <th className="p-2 border border-slate-800" colSpan={3}>
                  余数
                </th>
              </tr>
              <tr className="h-14">
                {Array.from({ length: 28 }).map((_, i) => (
                  <th
                    key={i}
                    className={`p-1 border border-slate-800 w-6 transition-colors duration-300 ${isNumberHighlighted(i) ? 'bg-yellow-500/20 text-yellow-400 font-bold' : ''}`}
                  >
                    {i}
                  </th>
                ))}
                <th className="p-1 border border-slate-800 w-6">单</th>
                <th className="p-1 border border-slate-800 w-6">双</th>
                <th className="p-1 border border-slate-800 w-6">中</th>
                <th className="p-1 border border-slate-800 w-6">边</th>
                <th className="p-1 border border-slate-800 w-6">大</th>
                <th className="p-1 border border-slate-800 w-6">小</th>
                <th className="p-1 border border-slate-800 w-6">/3</th>
                <th className="p-1 border border-slate-800 w-6">/4</th>
                <th className="p-1 border border-slate-800 w-6">/5</th>
              </tr>
            </thead>
            <tbody>
              {history.slice(0, 20).map((record, i) => {
                const winNum = record.sum % 28
                return (
                  <tr key={i} className="hover:bg-slate-200/30 transition-colors">
                    <td className="p-2 border border-slate-800 text-slate-400 font-mono">
                      {record.issue.split('-')[1]}
                    </td>
                    {Array.from({ length: 28 }).map((_, n) => {
                      const highlighted = isNumberHighlighted(n)
                      return (
                        <td
                          key={n}
                          className={`p-0 border border-slate-800 relative transition-colors duration-300 ${highlighted ? 'bg-yellow-500/5' : ''}`}
                        >
                          {n === winNum ? (
                            <div
                              className={`w-5 h-5 rounded-full mx-auto flex items-center justify-center text-white font-bold shadow-xs ${activeGame.colors.bg} ${highlighted ? 'ring-2 ring-yellow-400 ring-offset-1 ring-offset-slate-900' : ''}`}
                            >
                              {n}
                            </div>
                          ) : (
                            <span
                              className={`transition-colors ${highlighted ? 'text-yellow-500/50' : 'text-slate-700'}`}
                            >
                              .
                            </span>
                          )}
                        </td>
                      )
                    })}
                    <td className="p-1 border border-slate-800">
                      {record.parity === '单' ? (
                        <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto">
                          单
                        </span>
                      ) : (
                        ''
                      )}
                    </td>
                    <td className="p-1 border border-slate-800">
                      {record.parity === '双' ? (
                        <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center mx-auto">
                          双
                        </span>
                      ) : (
                        ''
                      )}
                    </td>
                    <td className="p-1 border border-slate-800">
                      {winNum >= 10 && winNum <= 17 ? (
                        <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mx-auto">
                          中
                        </span>
                      ) : (
                        ''
                      )}
                    </td>
                    <td className="p-1 border border-slate-800">
                      {!(winNum >= 10 && winNum <= 17) ? (
                        <span className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center mx-auto">
                          边
                        </span>
                      ) : (
                        ''
                      )}
                    </td>
                    <td className="p-1 border border-slate-800">
                      {record.size === '大' ? (
                        <span className="w-5 h-5 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center mx-auto">
                          大
                        </span>
                      ) : (
                        ''
                      )}
                    </td>
                    <td className="p-1 border border-slate-800">
                      {record.size === '小' ? (
                        <span className="w-5 h-5 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto">
                          小
                        </span>
                      ) : (
                        ''
                      )}
                    </td>
                    <td className="p-1 border border-slate-800 text-slate-400">{winNum % 10}</td>
                    <td className="p-1 border border-slate-800 text-slate-500">{winNum % 3}</td>
                    <td className="p-1 border border-slate-800 text-slate-500">{winNum % 4}</td>
                    <td className="p-1 border border-slate-800 text-slate-500">{winNum % 5}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default GameTrend
