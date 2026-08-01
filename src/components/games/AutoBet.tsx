import React from 'react'

interface AutoBetProps {
  activeGame: any
  autoBetSubTab: 'bet' | 'chase'
  setAutoBetSubTab: (tab: 'bet' | 'chase') => void
  savedModes: any[]
}

const AutoBet: React.FC<AutoBetProps> = ({
  activeGame,
  autoBetSubTab,
  setAutoBetSubTab,
  savedModes,
}) => {
  return (
    <div className="p-4 lg:p-6 space-y-6">
      {/* Sub Tabs */}
      <div className="flex gap-2 border-b border-slate-800 pb-4">
        <button
          onClick={() => setAutoBetSubTab('bet')}
          className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${autoBetSubTab === 'bet' ? `bg-linear-to-r ${activeGame.colors.primary} text-white shadow-lg` : 'bg-slate-200 text-slate-400 hover:bg-slate-300'}`}
        >
          自助投注
        </button>
        <button
          onClick={() => setAutoBetSubTab('chase')}
          className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${autoBetSubTab === 'chase' ? `bg-linear-to-r ${activeGame.colors.primary} text-white shadow-lg` : 'bg-slate-200 text-slate-400 hover:bg-slate-300'}`}
        >
          自动追号
        </button>
      </div>

      {/* Configuration Form */}
      <div className="bg-slate-200/30 p-6 rounded-2xl border border-slate-700/50 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <label className="text-sm text-slate-400 w-24">起始模式:</label>
              <select className="flex-1 bg-slate-100 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white focus:outline-hidden focus:border-blue-500">
                <option>请选择模式</option>
                {savedModes.map((m) => (
                  <option key={m.id}>{m.name}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-4">
              <label className="text-sm text-slate-400 w-24">开始期数:</label>
              <input
                type="text"
                placeholder="请输入开始期数"
                className="flex-1 bg-slate-100 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white focus:outline-hidden focus:border-blue-500"
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="text-sm text-slate-400 w-24">投入期数:</label>
              <input
                type="text"
                placeholder="请输入投入期数"
                className="flex-1 bg-slate-100 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white focus:outline-hidden focus:border-blue-500"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <label className="text-sm text-slate-400 w-24">金豆最小值:</label>
                <input
                  type="text"
                  className="flex-1 bg-slate-100 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white focus:outline-hidden focus:border-blue-500"
                />
              </div>
              <p className="text-[10px] text-slate-500 ml-28">金豆余额小于该值即停止自动参与</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <label className="text-sm text-slate-400 w-24">金豆最大值:</label>
                <input
                  type="text"
                  className="flex-1 bg-slate-100 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white focus:outline-hidden focus:border-blue-500"
                />
              </div>
              <p className="text-[10px] text-slate-500 ml-28">金豆余额大于该值即停止自动参与</p>
            </div>
          </div>
        </div>

        {autoBetSubTab === 'chase' && (
          <div className="pt-4 border-t border-slate-800 space-y-4">
            <div className="flex items-center gap-4">
              <label className="text-sm text-slate-400 w-24">追加倍数:</label>
              <input
                type="text"
                placeholder="最高10倍"
                className="w-48 bg-slate-100 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white focus:outline-hidden focus:border-blue-500"
              />
              <span className="text-xs text-slate-500">单期投入上限2亿金豆</span>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded-sm border-slate-700 bg-slate-200 text-blue-500"
                />
                <span className="text-sm text-slate-300">停止自动追号</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded-sm border-slate-700 bg-slate-200 text-blue-500"
                />
                <span className="text-sm text-slate-300">从开始模式重新开始追号</span>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center pt-4">
          <button
            className={`px-12 py-3 rounded-xl bg-linear-to-r ${activeGame.colors.primary} text-white font-bold shadow-lg transition-all active:scale-[0.98]`}
          >
            开始自动投注
          </button>
        </div>
      </div>

      {/* Task Table */}
      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-100/50">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-200/50 text-slate-400">
            <tr>
              <th className="p-4">参与模式</th>
              <th className="p-4">参与消耗</th>
              <th className="p-4">赢后使用模式</th>
              <th className="p-4">输后使用模式</th>
              <th className="p-4">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            <tr className="text-slate-500 italic">
              <td colSpan={5} className="p-8 text-center">
                暂无自动投注任务
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AutoBet
