import React from 'react'
import { RotateCcw, Trash2, Layers, X, List, History, ArrowLeft, PlusCircle } from 'lucide-react'
import GoldBean from '../GoldBean'

interface BettingModeProps {
  activeGame: any
  selectedQuickItems: string[]
  toggleQuickItem: (item: string) => void
  setSelectedQuickItems: (items: string[]) => void
  selectedNumbers: number[]
  setSelectedNumbers: (nums: number[]) => void
  toggleNumber: (num: number) => void
  isNumberHighlighted: (num: number) => boolean
  getBallColor: (num: number) => string
  savedModes: any[]
  selectedMode: any
  setSelectedMode: (mode: any) => void
  betAmounts: Record<number, number>
  applyMultiplier: (multiplier: number, targetNum?: number) => void
  applyBaseAmount: (amount: number) => void
  clearAll: () => void
  invertSelection: () => void
  goBackToList: () => void
  saveMode: (name: string) => void
  loadMode: (mode: any) => void
  deleteMode: (id: number) => void
  isParticipation?: boolean
}

const BettingMode: React.FC<BettingModeProps> = ({
  activeGame,
  selectedQuickItems,
  toggleQuickItem,
  setSelectedQuickItems,
  selectedNumbers,
  setSelectedNumbers,
  toggleNumber,
  isNumberHighlighted,
  getBallColor,
  savedModes,
  selectedMode,
  setSelectedMode,
  betAmounts,
  applyMultiplier,
  applyBaseAmount,
  clearAll,
  invertSelection,
  goBackToList,
  saveMode,
  loadMode,
  deleteMode,
  isParticipation = false,
}) => {
  const [viewMode, setViewMode] = React.useState<'list' | 'edit'>(isParticipation ? 'edit' : 'list')
  const [customBaseAmount, setCustomBaseAmount] = React.useState<string>('')
  const [toast, setToast] = React.useState<{ message: string; visible: boolean }>({
    message: '',
    visible: false,
  })
  const [showSaveModal, setShowSaveModal] = React.useState(false)
  const [showLastRoundModal, setShowLastRoundModal] = React.useState(false)
  const [newModeName, setNewModeName] = React.useState('')

  const showToast = (message: string) => {
    setToast({ message, visible: true })
    setTimeout(() => setToast({ message: '', visible: false }), 3000)
  }

  const allOdds = [
    1000, 333.33, 166.66, 100, 66.66, 47.61, 35.71, 27.77, 22.22, 18.18, 15.87, 14.49, 13.69, 13.33,
    13.33, 13.69, 14.49, 15.87, 18.18, 22.22, 27.77, 35.71, 47.71, 66.66, 100, 166.66, 333.33, 1000,
  ]

  const totalAmount = Object.values(betAmounts).reduce((sum, val) => sum + val, 0)

  const parseAmount = (str: string) => {
    if (str.endsWith('万')) return parseInt(str) * 10000
    if (str.endsWith('亿')) return parseInt(str) * 100000000
    return parseInt(str)
  }

  if (viewMode === 'list') {
    return (
      <div className="p-4 lg:p-6 space-y-6">
        <div className="flex justify-start mb-6">
          <button
            onClick={() => setViewMode('edit')}
            className={`px-6 py-2 rounded-lg bg-linear-to-r ${activeGame.colors.primary} text-white text-sm font-bold shadow-lg transition-all active:scale-95 flex items-center gap-2`}
          >
            <PlusCircle size={16} />
            添加模式
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-100/50">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-200/50 text-slate-400">
              <tr>
                <th className="p-4 font-medium text-center border-r border-slate-800/50">
                  模式名称
                </th>
                <th className="p-4 font-medium text-center border-r border-slate-800/50">
                  投注数量
                </th>
                <th className="p-4 font-medium text-center border-r border-slate-800/50">
                  合计金豆
                </th>
                <th className="p-4 font-medium text-center border-r border-slate-800/50">详情</th>
                <th className="p-4 font-medium text-center">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {savedModes.map((mode, idx) => (
                <tr key={idx} className="hover:bg-slate-200/30 transition-colors text-slate-300">
                  <td className="p-4 text-center border-r border-slate-800/30">{mode.name}</td>
                  <td className="p-4 text-center border-r border-slate-800/30">
                    {mode.count || 0}
                  </td>
                  <td className="p-4 text-center border-r border-slate-800/30">
                    {mode.total?.toLocaleString() || 0}
                  </td>
                  <td className="p-4 text-center border-r border-slate-800/30">
                    <button className="text-blue-400 hover:text-blue-300 transition-colors">
                      查看详情
                    </button>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={() => {
                          loadMode(mode)
                          setViewMode('edit')
                        }}
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        编辑
                      </button>
                      <button
                        onClick={() => {
                          deleteMode(mode.id)
                          showToast('删除成功')
                        }}
                        className="text-red-400 hover:text-red-300 transition-colors"
                      >
                        删除
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  return (
    <div className="p-4 lg:p-6 space-y-6">
      <div className="relative flex items-center p-4 lg:px-6 border-b border-slate-800 bg-slate-100/50 -mx-4 lg:-mx-6 -mt-4 lg:-mt-6 mb-6">
        <button
          onClick={() => (isParticipation ? goBackToList() : setViewMode('list'))}
          className="absolute left-4 lg:left-6 flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium z-10"
        >
          <ArrowLeft size={16} />
          返回列表
        </button>
        <div className="flex-1 text-center">
          <span className="text-slate-200 font-bold text-lg">{activeGame.name} 第3161904期</span>
        </div>
      </div>
      {/* Quick Select Sections */}
      <div className="space-y-4 bg-slate-200/30 p-4 rounded-2xl border border-slate-700/50">
        {/* Row 1: Categories */}
        <div className="flex flex-wrap gap-2">
          {[
            '单',
            '大单',
            '小单',
            '单边',
            '双',
            '大双',
            '小双',
            '双边',
            '大',
            '小',
            '中',
            '边',
            '大边',
            '小边',
          ].map((item) => (
            <button
              key={item}
              onClick={() => toggleQuickItem(item)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all active:scale-95 ${
                selectedQuickItems.includes(item)
                  ? `bg-linear-to-r ${activeGame.colors.primary} border-transparent text-white shadow-lg`
                  : 'bg-slate-200 hover:bg-slate-300 text-slate-300 border-slate-700'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        {/* Row 2: Last Digits */}
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs text-slate-500 mr-2">尾数:</span>
          {[
            '0尾',
            '1尾',
            '2尾',
            '3尾',
            '4尾',
            '5尾',
            '6尾',
            '7尾',
            '8尾',
            '9尾',
            '大尾',
            '小尾',
          ].map((item) => (
            <button
              key={item}
              onClick={() => toggleQuickItem(item)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all active:scale-95 ${
                selectedQuickItems.includes(item)
                  ? `bg-linear-to-r ${activeGame.colors.primary} border-transparent text-white shadow-lg`
                  : 'bg-slate-200 hover:bg-slate-300 text-slate-300 border-slate-700'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        {/* Row 3: Remainders */}
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs text-slate-500 mr-2">余数:</span>
          {[
            '3余0',
            '3余1',
            '3余2',
            '4余0',
            '4余1',
            '4余2',
            '4余3',
            '5余0',
            '5余1',
            '5余2',
            '5余3',
            '5余4',
          ].map((item) => (
            <button
              key={item}
              onClick={() => toggleQuickItem(item)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all active:scale-95 ${
                selectedQuickItems.includes(item)
                  ? `bg-linear-to-r ${activeGame.colors.primary} border-transparent text-white shadow-lg`
                  : 'bg-slate-200 hover:bg-slate-300 text-slate-300 border-slate-700'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        {/* Row 4: Multipliers */}
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs text-slate-500 mr-2">倍数:</span>
          {[0.1, 0.5, 0.8, 1.2, 1.5, 2, 5, 10, 100].map((item) => (
            <button
              key={item}
              onClick={() => applyMultiplier(item)}
              className="px-3 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-300 text-xs font-medium border border-slate-700 transition-all active:scale-95"
            >
              {item}倍
            </button>
          ))}
        </div>
        {/* Row 5: Amounts */}
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs text-slate-500 mr-2">定额:</span>
          {['5万', '50万', '100万', '500万', '1000万', '2000万', '5000万', '1亿', '2亿'].map(
            (item) => (
              <button
                key={item}
                onClick={() => applyBaseAmount(parseAmount(item))}
                className="px-3 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-300 text-xs font-medium border border-slate-700 transition-all active:scale-95"
              >
                {item}
              </button>
            ),
          )}
          <div className="flex gap-2 ml-2">
            <input
              type="text"
              placeholder="自定义金额"
              value={customBaseAmount}
              onChange={(e) => setCustomBaseAmount(e.target.value)}
              className="bg-slate-100 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-hidden focus:border-blue-500 w-32"
            />
            <button
              onClick={() => {
                const amt = parseInt(customBaseAmount)
                if (!isNaN(amt)) applyBaseAmount(amt)
              }}
              className="px-3 py-1.5 rounded-lg bg-slate-300 hover:bg-slate-400 text-white text-xs font-medium border border-slate-600 transition-all"
            >
              定额梭哈
            </button>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex flex-wrap gap-3 items-center justify-between">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex gap-2">
            <button
              onClick={invertSelection}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-300 text-sm font-medium border border-slate-700 transition-all"
            >
              <RotateCcw size={16} /> 反选
            </button>
            <button
              onClick={() => {
                clearAll()
                setCustomBaseAmount('')
              }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-300 text-sm font-medium border border-slate-700 transition-all"
            >
              <Trash2 size={16} /> 清空
            </button>
            {!isParticipation && (
              <button
                onClick={() => {
                  if (totalAmount === 0) {
                    showToast('请填写金额')
                    return
                  }
                  if (totalAmount < 500) {
                    showToast('最低500金豆')
                    return
                  }
                  setShowSaveModal(true)
                }}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl bg-linear-to-r ${activeGame.colors.primary} text-white text-sm font-bold shadow-lg transition-all active:scale-[0.98]`}
              >
                添加模式
              </button>
            )}
          </div>

          <div className="h-6 w-px bg-slate-300 hidden lg:block"></div>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="自定义金额"
                value={totalAmount > 0 ? totalAmount : '0'}
                readOnly
                className="bg-slate-100 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-hidden focus:border-blue-500 w-32"
              />
              {isParticipation && (
                <button
                  onClick={() => {
                    if (totalAmount === 0) {
                      showToast('请填写金额')
                      return
                    }
                    if (totalAmount < 500) {
                      showToast('最低500金豆')
                      return
                    }
                  }}
                  className={`px-6 py-1.5 rounded-lg bg-linear-to-r ${activeGame.colors.primary} text-white text-xs font-bold shadow-lg transition-all active:scale-[0.98]`}
                >
                  确定参与
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setShowLastRoundModal(true)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-300 text-sm font-medium border border-slate-700 transition-all"
          >
            <History size={16} /> 上期投注
          </button>
        </div>
      </div>

      {/* Last Round Modal */}
      {showLastRoundModal && (
        <div className="fixed inset-0 z-110 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-slate-100 border border-slate-800 rounded-3xl w-full max-w-md p-8 shadow-2xl animate-in zoom-in duration-200 relative">
            <button
              onClick={() => setShowLastRoundModal(false)}
              className="absolute right-6 top-6 text-slate-500 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-6 border border-blue-500/30">
                <History className="text-blue-400 w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">上期投注</h3>
              <p className="text-slate-400 mb-8">第 3161903 期 投注详情</p>

              <div className="w-full space-y-4 mb-8">
                <div className="bg-slate-200/50 border border-slate-700 rounded-2xl p-6">
                  <div className="flex justify-between text-sm mb-4">
                    <span className="text-slate-500">投注号码</span>
                    <span className="text-slate-200 font-mono">1, 3, 5, 7, 9, 11, 13</span>
                  </div>
                  <div className="flex justify-between text-sm mb-4">
                    <span className="text-slate-500">投注总额</span>
                    <div className="flex items-center gap-1 text-yellow-400 font-bold">
                      5,000 <GoldBean className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">中奖金额</span>
                    <div className="flex items-center gap-1 text-green-400 font-bold">
                      9,796 <GoldBean className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowLastRoundModal(false)}
                className="w-full py-4 rounded-2xl bg-linear-to-r from-blue-500 to-blue-600 text-white font-bold shadow-lg shadow-blue-500/20 transition-all active:scale-95"
              >
                我知道了
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toast.visible && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-200 animate-in fade-in zoom-in duration-200">
          <div className="bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl px-6 py-3 shadow-2xl flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold">
              !
            </div>
            <span className="text-slate-800 font-bold">{toast.message}</span>
          </div>
        </div>
      )}

      {/* Save Mode Modal */}
      {showSaveModal && (
        <div className="fixed inset-0 z-150 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-slate-100 border border-slate-800 rounded-3xl w-full max-w-md p-8 shadow-2xl animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setShowSaveModal(false)}
              className="absolute right-6 top-6 text-slate-500 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold text-white mb-6">保存模式</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">模式名称</label>
                <input
                  type="text"
                  value={newModeName}
                  onChange={(e) => setNewModeName(e.target.value)}
                  placeholder="请输入模式名称"
                  className="w-full bg-slate-200 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-hidden focus:border-blue-500 transition-all"
                />
              </div>
              <div className="bg-slate-200/50 p-4 rounded-xl border border-slate-700 text-slate-400 text-sm">
                <p>当前投注: {Object.keys(betAmounts).length} 个号码</p>
                <p>合计金额: {totalAmount.toLocaleString()} 金豆</p>
              </div>
            </div>
            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setShowSaveModal(false)}
                className="flex-1 py-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-300 font-bold transition-all"
              >
                取消
              </button>
              <button
                onClick={() => {
                  if (!newModeName.trim()) {
                    showToast('请输入名称')
                    return
                  }
                  saveMode(newModeName)
                  setShowSaveModal(false)
                  setNewModeName('')
                  setViewMode('list')
                  showToast('保存成功')
                }}
                className={`flex-1 py-3 rounded-xl bg-linear-to-r ${activeGame.colors.primary} text-white font-bold shadow-lg transition-all active:scale-95`}
              >
                保存
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Betting Table */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[0, 1].map((colIndex) => (
          <div
            key={colIndex}
            className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-100/50"
          >
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-200/50 text-slate-400">
                <tr>
                  <th className="p-3 font-medium">号码</th>
                  <th className="p-3 font-medium">赔率</th>
                  <th className="p-3 font-medium">投注</th>
                  <th className="p-3 font-medium">倍数</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {Array.from({ length: 14 }).map((_, i) => {
                  const num = colIndex * 14 + i
                  const allOdds = [
                    1000, 333.33, 166.66, 100, 66.66, 47.61, 35.71, 27.77, 22.22, 18.18, 15.87,
                    14.49, 13.69, 13.33, 13.33, 13.69, 14.49, 15.87, 18.18, 22.22, 27.77, 35.71,
                    47.71, 66.66, 100, 166.66, 333.33, 1000,
                  ]
                  const odds = allOdds[num]
                  const highlighted = isNumberHighlighted(num)
                  return (
                    <tr
                      key={num}
                      onClick={() => toggleNumber(num)}
                      className={`transition-colors group cursor-pointer ${highlighted ? 'bg-slate-200/50' : 'hover:bg-slate-200/30'}`}
                    >
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white shadow-xs transition-all duration-300 ${
                              highlighted ? `${activeGame.colors.bg} scale-110` : 'bg-slate-300'
                            }`}
                          >
                            {num}
                          </div>
                          <input
                            type="checkbox"
                            checked={highlighted}
                            onChange={(e) => {
                              e.stopPropagation()
                              toggleNumber(num)
                            }}
                            className={`w-4 h-4 rounded-sm border-slate-700 bg-slate-200 focus:ring-0 transition-colors`}
                            style={{ accentColor: highlighted ? activeGame.colors.hex : undefined }}
                          />
                        </div>
                      </td>
                      <td
                        className={`p-3 font-mono transition-colors ${highlighted ? `${activeGame.colors.accent} font-bold` : 'text-slate-400'}`}
                      >
                        {odds}
                      </td>
                      <td className="p-3" onClick={(e) => e.stopPropagation()}>
                        <input
                          type="text"
                          value={betAmounts[num] || 0}
                          readOnly
                          className={`w-24 bg-slate-200 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-hidden border-2 transition-all ${
                            highlighted
                              ? `${activeGame.colors.border}`
                              : 'border-slate-700 focus:border-blue-500'
                          }`}
                        />
                      </td>
                      <td className="p-3" onClick={(e) => e.stopPropagation()}>
                        <div className="flex gap-1">
                          {[0.5, 1.5, 2, 10].map((m) => (
                            <button
                              key={m}
                              onClick={() => applyMultiplier(m, num)}
                              className="px-2 py-1 rounded-sm bg-slate-200 hover:bg-slate-300 text-slate-400 text-[10px] border border-slate-700 transition-all active:scale-95"
                            >
                              {m}倍
                            </button>
                          ))}
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BettingMode
