import React, { useState } from 'react'
import {
  Copy,
  Share2,
  Users,
  Coins,
  Gift,
  CheckCircle2,
  UserPlus,
  Megaphone,
  UserPlus2,
  Activity,
  ShieldAlert,
  Trophy,
  ChevronRight,
} from 'lucide-react'
import banner from '@/assets/default/banner.png'
import GoldBean from '../components/GoldBean'

const InvitePage = () => {
  const [activeMenu, setActiveMenu] = useState('invite')
  const [copied, setCopied] = useState(false)
  const inviteLink = 'https://yunyou.vip/register?code=888888'

  const menuItems = [
    { id: 'daily', label: '每日推广奖励', icon: Megaphone, color: 'from-blue-500 to-cyan-500' },
    { id: 'newbie', label: '新人注册奖励', icon: UserPlus2, color: 'from-purple-500 to-pink-500' },
    {
      id: 'first_deposit',
      label: '每日首充返利',
      icon: Coins,
      color: 'from-orange-500 to-yellow-500',
    },
    {
      id: 'turnover',
      label: '娱乐流水返利',
      icon: Activity,
      color: 'from-green-500 to-emerald-500',
    },
    { id: 'loss', label: '娱乐亏损返利', icon: ShieldAlert, color: 'from-red-500 to-orange-500' },
    { id: 'invite', label: '邀请下级返利', icon: Users, color: 'from-yellow-500 to-orange-500' },
    { id: 'rank', label: '排行榜奖励', icon: Trophy, color: 'from-indigo-500 to-purple-500' },
  ]

  // Mock Subordinates Data
  const subordinates = [
    {
      id: 1,
      userId: '888***001',
      name: '云游小侠',
      registerTime: '2023-10-20 14:30',
      commission: 1200,
    },
    {
      id: 2,
      userId: '888***002',
      name: '游戏达人',
      registerTime: '2023-10-21 09:15',
      commission: 850,
    },
    {
      id: 3,
      userId: '888***003',
      name: '快乐风男',
      registerTime: '2023-10-22 18:45',
      commission: 500,
    },
    {
      id: 4,
      userId: '888***004',
      name: '至尊宝',
      registerTime: '2023-10-23 11:20',
      commission: 2000,
    },
    {
      id: 5,
      userId: '888***005',
      name: '紫霞仙子',
      registerTime: '2023-10-24 16:10',
      commission: 150,
    },
  ]

  const handleCopy = () => {
    navigator.clipboard.writeText(inviteLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const renderContent = () => {
    switch (activeMenu) {
      case 'invite':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Combined Invite & Rules Card */}
            <div className="bg-slate-200/80 backdrop-blur-md rounded-2xl border border-slate-700 shadow-xl overflow-hidden">
              {/* Invite Link Section */}
              <div className="p-6 border-b border-slate-700/50 relative overflow-hidden group">
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl group-hover:bg-yellow-500/20 transition-all duration-500"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex-1 w-full">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-500">
                        <Share2 size={18} />
                      </div>
                      <h3 className="text-lg font-bold text-white">您的专属邀请链接</h3>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-100/80 p-2 rounded-xl border border-slate-700 group-hover:border-yellow-500/30 transition-colors">
                      <input
                        type="text"
                        value={inviteLink}
                        readOnly
                        className="bg-transparent border-none text-gray-200 flex-1 focus:ring-0 text-xs md:text-base font-mono"
                      />
                    </div>
                  </div>
                  <button
                    onClick={handleCopy}
                    className={`
                      w-full md:w-auto px-6 py-3 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2 active:scale-95
                      ${
                        copied
                          ? 'bg-green-600 text-white shadow-lg shadow-green-500/20'
                          : 'bg-linear-to-r from-yellow-400 via-yellow-500 to-orange-500 text-slate-900 shadow-[0_5px_15px_rgba(234,179,8,0.2)] hover:shadow-[0_10px_20px_rgba(234,179,8,0.3)] hover:-translate-y-0.5'
                      }
                    `}
                  >
                    {copied ? <CheckCircle2 size={20} /> : <Copy size={20} />}
                    {copied ? '已复制' : '立即复制'}
                  </button>
                </div>
              </div>

              {/* Rebate Rules Section */}
              <div className="p-6 bg-slate-100/30">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-500">
                    <Gift size={18} />
                  </div>
                  <h3 className="text-lg font-bold text-white">返利规则</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-200/50 rounded-xl p-4 border border-slate-700 text-center">
                    <div className="text-slate-500 text-xs mb-2 uppercase tracking-wider">
                      开通会员返利
                    </div>
                    <div className="text-2xl font-black text-orange-500">5%</div>
                  </div>
                  <div className="bg-slate-200/50 rounded-xl p-4 border border-slate-700 text-center">
                    <div className="text-slate-500 text-xs mb-2 uppercase tracking-wider">
                      流水返利
                    </div>
                    <div className="text-2xl font-black text-blue-500">4%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subordinates List */}
            <div className="bg-slate-200/50 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-700 shadow-xl">
              <div className="p-6 border-b border-slate-700 flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-100/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <UserPlus size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">我的下级好友</h3>
                    <p className="text-xs text-gray-500">查看您的邀请成果与收益明细</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-slate-200/50 border border-slate-700 rounded-xl px-4 py-2 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                      <Users size={16} />
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-500 uppercase">累计邀请人数</div>
                      <div className="text-sm font-bold text-white">{subordinates.length} 人</div>
                    </div>
                  </div>
                  <div className="bg-slate-200/50 border border-slate-700 rounded-xl px-4 py-2 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-400">
                      <GoldBean className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-500 uppercase">累计获得佣金</div>
                      <div className="text-sm font-bold text-yellow-400 flex items-center gap-1">
                        4,700 <GoldBean className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-100/80 text-gray-400 text-[10px] uppercase tracking-widest">
                      <th className="px-6 py-4 font-bold">好友ID</th>
                      <th className="px-6 py-4 font-bold">昵称</th>
                      <th className="px-6 py-4 font-bold">注册时间</th>
                      <th className="px-6 py-4 font-bold text-right">贡献佣金</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/50 text-gray-300">
                    {subordinates.map((sub) => (
                      <tr key={sub.id} className="hover:bg-white/5 transition-colors group">
                        <td className="px-6 py-4 font-mono text-blue-300 text-base">
                          {sub.userId}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-linear-to-br from-slate-700 to-slate-800 flex items-center justify-center text-xs font-bold border border-slate-600 group-hover:border-blue-500/50 transition-colors">
                              {sub.name[0]}
                            </div>
                            <span className="font-bold text-white text-base">{sub.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-400 text-xs">{sub.registerTime}</td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-1 text-white font-bold text-base">
                            +{sub.commission}
                            <GoldBean className="w-4 h-4" />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {subordinates.length === 0 && (
                <div className="p-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center mx-auto mb-4 text-gray-600">
                    <Users size={28} />
                  </div>
                  <p className="text-base text-gray-500 font-medium">暂无下级好友，快去邀请吧！</p>
                </div>
              )}
            </div>
          </div>
        )
      case 'rank':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-slate-200/50 backdrop-blur-md rounded-2xl p-8 border border-slate-700 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-indigo-500 to-purple-500"></div>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Trophy size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">排行榜奖励</h3>
              </div>

              <div className="space-y-8">
                <section>
                  <h4 className="text-lg font-bold text-indigo-400 mb-3 flex items-center gap-2">
                    <div className="w-1.5 h-5 bg-indigo-500 rounded-full"></div>
                    活动介绍
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-base">
                    在活动时间内，根据玩家在欢乐解迷专区净盈利进行每日排名，前30名可获得排名奖励；严禁对刷数据，违者重罚；排行榜更新间隔5分钟；
                  </p>
                </section>

                <section>
                  <h4 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2">
                    <div className="w-1.5 h-5 bg-purple-500 rounded-full"></div>
                    奖励发放
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-base">
                    每日凌晨0:30发放前一天日排名奖励；
                  </p>
                </section>
              </div>
            </div>
          </div>
        )
      default:
        const currentItem = menuItems.find((item) => item.id === activeMenu)
        return (
          <div className="bg-slate-200/50 backdrop-blur-md rounded-3xl p-20 border border-slate-700 text-center animate-in fade-in slide-in-from-bottom-4 duration-500 relative overflow-hidden">
            <div
              className={`absolute top-0 left-0 w-full h-1 bg-linear-to-r ${currentItem?.color}`}
            ></div>
            <div
              className={`w-32 h-32 rounded-3xl bg-linear-to-br ${currentItem?.color} flex items-center justify-center mx-auto mb-10 text-white shadow-2xl shadow-current/20 rotate-3 hover:rotate-0 transition-transform duration-500`}
            >
              {currentItem && <currentItem.icon size={64} />}
            </div>
            <h3 className="text-4xl font-black text-white mb-6">{currentItem?.label}</h3>
            <p className="text-xl text-gray-400 max-w-lg mx-auto leading-relaxed">
              该板块内容正在火热筹备中！我们将为您带来更丰厚的福利与奖励，敬请期待。
            </p>
            <div className="mt-12 flex justify-center gap-4">
              <div className="px-6 py-3 rounded-2xl bg-slate-100/50 border border-slate-700 text-sm font-bold text-gray-500 uppercase tracking-widest">
                Coming Soon
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header Banner */}
      <div className="relative h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={banner} alt="Invite Banner" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-linear-to-b from-slate-900/60 to-slate-950"></div>
        </div>
        <div className="relative z-10 text-center px-4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar Menu */}
          <div className="w-full lg:w-80 shrink-0">
            <div className="bg-slate-200/80 backdrop-blur-md rounded-3xl border border-slate-700 overflow-hidden sticky top-24 shadow-2xl">
              <div className="p-6 border-b border-slate-700 bg-linear-to-r from-slate-900 to-slate-800">
                <h2 className="text-lg font-black text-white uppercase tracking-widest flex items-center gap-2">
                  <Gift className="text-yellow-500" /> 奖励中心
                </h2>
              </div>
              <nav className="p-4 space-y-3">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveMenu(item.id)}
                    className={`
                      w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all group relative overflow-hidden
                      ${
                        activeMenu === item.id
                          ? 'bg-slate-100 text-white border border-slate-700 shadow-xl'
                          : 'text-gray-400 hover:bg-slate-300/30 hover:text-gray-200'
                      }
                    `}
                  >
                    {activeMenu === item.id && (
                      <div
                        className={`absolute inset-y-0 left-0 w-1.5 bg-linear-to-b ${item.color}`}
                      ></div>
                    )}
                    <div className="flex items-center gap-4">
                      <div
                        className={`
                        w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300
                        ${
                          activeMenu === item.id
                            ? `bg-linear-to-br ${item.color} text-white shadow-lg shadow-current/20 scale-110`
                            : 'bg-slate-300/50 text-gray-500 group-hover:bg-slate-300 group-hover:text-gray-400'
                        }
                      `}
                      >
                        <item.icon size={20} />
                      </div>
                      <span
                        className={`font-bold transition-colors ${activeMenu === item.id ? 'text-white' : 'group-hover:text-gray-200'}`}
                      >
                        {item.label}
                      </span>
                    </div>
                    <ChevronRight
                      size={18}
                      className={`transition-all duration-300 ${activeMenu === item.id ? 'translate-x-0 opacity-100 text-yellow-500' : '-translate-x-2 opacity-0 group-hover:opacity-50'}`}
                    />
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-1 min-w-0">{renderContent()}</div>
        </div>
      </div>
    </div>
  )
}

export default InvitePage
