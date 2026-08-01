import React, { useState } from 'react'
import { Crown, Check, Star, Zap, Shield, Gem, Coins, X, MessageCircle } from 'lucide-react'
import GoldBean from '../components/GoldBean'

const VIPPage = () => {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null)
  const [showContactModal, setShowContactModal] = useState(false)

  const benefits = [
    {
      level: 1,
      name: '青铜会员',
      price: '100¥',
      reward: '1000万金豆',
      color: 'text-orange-400',
      borderColor: 'border-orange-500/30',
      bgGradient: 'from-orange-900/40 to-slate-900',
      features: ['每日抽奖 3次', '好友动力 0次', '有效期 3天'],
    },
    {
      level: 2,
      name: '白银会员',
      price: '300¥',
      reward: '3000万金豆',
      color: 'text-slate-300',
      borderColor: 'border-slate-400/30',
      bgGradient: 'from-slate-700/40 to-slate-900',
      features: ['每日抽奖 3次', '好友动力 0次', '有效期 3天'],
    },
    {
      level: 3,
      name: '黄金会员',
      price: '500¥',
      reward: '5000万金豆',
      color: 'text-yellow-400',
      borderColor: 'border-yellow-500/30',
      bgGradient: 'from-yellow-900/40 to-slate-900',
      features: ['每日抽奖 4次', '好友动力 0次', '有效期 3天'],
      recommended: true,
    },
    {
      level: 4,
      name: '铂金会员',
      price: '800¥',
      reward: '8000万金豆',
      color: 'text-blue-300',
      borderColor: 'border-blue-400/30',
      bgGradient: 'from-blue-900/40 to-slate-900',
      features: ['每日抽奖 4次', '好友动力 1次', '有效期 3天'],
    },
    {
      level: 5,
      name: '钻石会员',
      price: '1200¥',
      reward: '1.2亿金豆',
      color: 'text-blue-500',
      borderColor: 'border-blue-600/30',
      bgGradient: 'from-blue-800/40 to-slate-900',
      features: ['每日抽奖 5次', '好友动力 2次', '有效期 3天'],
    },
    {
      level: 6,
      name: '至尊会员',
      price: '1500¥',
      reward: '1.5亿金豆',
      color: 'text-purple-400',
      borderColor: 'border-purple-500/30',
      bgGradient: 'from-purple-900/40 to-slate-900',
      features: ['每日抽奖 5次', '好友动力 3次', '有效期 3天'],
    },
  ]

  return (
    <div className="pt-20 pb-12 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center justify-center gap-2">
            <Crown className="text-yellow-500 w-8 h-8" />
            <span className="bg-linear-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">
              尊贵 VIP 会员
            </span>
          </h1>
          <p className="text-sm text-gray-500 max-w-xl mx-auto">
            加入云游 VIP，享受超值特权，开启您的至尊游戏体验
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {benefits.map((plan) => (
            <div
              key={plan.level}
              onClick={() => {
                setSelectedLevel(plan.level)
                setShowContactModal(true)
              }}
              className={`relative bg-linear-to-br ${plan.bgGradient} rounded-2xl border p-4 overflow-hidden group hover:transform hover:-translate-y-1 transition-all duration-300 shadow-xl cursor-pointer ${
                selectedLevel === plan.level
                  ? `border-yellow-500 ring-2 ring-yellow-500/50 shadow-[0_0_20px_rgba(234,179,8,0.3)] scale-[1.02]`
                  : plan.borderColor
              }`}
            >
              {selectedLevel === plan.level && (
                <div className="absolute top-2 right-2 bg-yellow-500 text-slate-900 rounded-full p-1 z-20 animate-in zoom-in duration-300">
                  <Check size={12} strokeWidth={4} />
                </div>
              )}
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-yellow-500 text-slate-900 text-[8px] font-bold px-2 py-0.5 rounded-bl-lg z-10 shadow-lg">
                  推荐
                </div>
              )}

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className={`text-sm font-bold ${plan.color} mb-0.5`}>{plan.name}</h3>
                    <div className="text-xl font-black text-white">{plan.price}</div>
                  </div>
                  <div
                    className={`p-1.5 rounded-lg bg-white/5 border border-white/10 ${plan.color}`}
                  >
                    <Crown size={16} />
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-2 mb-4 border border-white/5">
                  <div className="text-[8px] text-slate-500 uppercase tracking-widest mb-1">
                    赠送
                  </div>
                  <div className="text-xs font-bold text-yellow-400 flex items-center gap-1">
                    <GoldBean className="w-3 h-3" />
                    {plan.reward}
                  </div>
                </div>

                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-[10px] text-slate-400">
                      <div
                        className={`w-1 h-1 rounded-full ${plan.color.replace('text-', 'bg-')}`}
                      />
                      <span className="truncate">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full py-2 rounded-xl text-xs font-bold transition-all active:scale-95 bg-white/10 hover:bg-white/20 text-white border border-white/10">
                  立即开通
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Modal */}
        {showContactModal && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-slate-100 border border-slate-800 rounded-3xl w-full max-w-md p-8 shadow-2xl animate-in zoom-in duration-200">
              <button
                onClick={() => setShowContactModal(false)}
                className="absolute right-6 top-6 text-slate-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-6 border border-blue-500/30">
                  <MessageCircle className="text-blue-400 w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">开通会员</h3>
                <p className="text-slate-400 mb-8 text-lg">联系客服QQ: 88888888</p>

                <div className="w-full bg-slate-200/50 border border-slate-700 rounded-2xl p-6 mb-8">
                  <div className="text-sm text-slate-500 mb-1 uppercase tracking-widest">
                    客服 QQ
                  </div>
                  <div className="text-3xl font-black text-blue-400 font-mono tracking-tighter">
                    88888888
                  </div>
                </div>

                <button
                  onClick={() => setShowContactModal(false)}
                  className="w-full py-4 rounded-2xl bg-linear-to-r from-blue-500 to-blue-600 text-white font-bold shadow-lg shadow-blue-500/20 transition-all active:scale-95"
                >
                  我知道了
                </button>
              </div>
            </div>
          </div>
        )}

        {/* VIP Comparison Table */}
        <div className="bg-slate-100/50 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
          <div className="p-4 border-b border-slate-800">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Shield className="text-blue-400" size={20} /> VIP 特权对比
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[11px]">
              <thead className="bg-slate-200/50 text-slate-500">
                <tr>
                  <th className="p-3">会员权益</th>
                  {benefits.map((b) => (
                    <th key={b.level} className={`p-3 font-bold ${b.color}`}>
                      {b.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-3 text-slate-400">单价</td>
                  {benefits.map((b) => (
                    <td key={b.level} className="p-3 text-white font-mono">
                      {b.price}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-3 text-slate-400">开通赠送</td>
                  {benefits.map((b) => (
                    <td key={b.level} className="p-3 text-yellow-500 font-bold">
                      {b.reward}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-3 text-slate-400">有效期</td>
                  {benefits.map((b) => (
                    <td key={b.level} className="p-3 text-white">
                      3天
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-3 text-slate-400">抽奖次数</td>
                  {benefits.map((b) => (
                    <td key={b.level} className="p-3 text-red-400 font-bold">
                      {b.features[0].split(' ')[1]}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-3 text-slate-400">好友动力</td>
                  {benefits.map((b) => (
                    <td key={b.level} className="p-3 text-green-400 font-bold">
                      {b.features[1].split(' ')[1]}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VIPPage
