import React, { useState } from 'react'
import {
  User,
  Wallet,
  History,
  Settings,
  LogOut,
  ChevronRight,
  CreditCard,
  Shield,
  Bell,
  Coins,
  Eye,
  CalendarCheck,
  Camera,
  Crown,
} from 'lucide-react'
import GoldBean from '../components/GoldBean'

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [transferTab, setTransferTab] = useState<'deposit' | 'withdraw'>('deposit')
  const [hasCheckedIn, setHasCheckedIn] = useState(false)

  // Mock User Data
  const user = {
    name: '云游大侠',
    id: '88888888',
    avatar: '/assets/avatars/avatar-1.png', // Assuming this exists or use a placeholder
    balance: 12580,
    vipLevel: 3,
    joinDate: '2023-10-01',
  }

  return (
    <div className="pt-24 pb-12 min-h-screen bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header / User Card */}
        <div className="bg-slate-100/50 rounded-2xl p-8 mb-8 flex flex-col md:flex-row items-center gap-8 backdrop-blur-xs relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-slate-200 border-2 border-yellow-500/50 overflow-hidden p-1">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                alt="User Avatar"
                className="w-full h-full rounded-full bg-slate-300"
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl font-bold text-black mb-2">{user.name}</h1>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-400 mb-4">
              <span className="bg-slate-200 px-3 py-1 rounded-full text-xs">ID: {user.id}</span>
              <span className="text-xs">注册时间: {user.joinDate}</span>
              <button
                onClick={() => setHasCheckedIn(true)}
                disabled={hasCheckedIn}
                className={`flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-bold transition-all ${
                  hasCheckedIn
                    ? 'bg-slate-200 text-slate-500 cursor-not-allowed'
                    : 'bg-linear-to-r from-yellow-500 to-orange-500 text-slate-900 hover:shadow-lg hover:shadow-yellow-500/20 active:scale-95'
                }`}
              >
                <CalendarCheck size={14} />
                {hasCheckedIn ? '今日已签到' : '每日签到'}
              </button>
            </div>

            {/* VIP Icons Row */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              {['青铜', '白银', '黄金', '铂金', '钻石', '至尊'].map((name, i) => {
                const level = i + 1
                const isActive = level <= user.vipLevel
                return (
                  <div
                    key={level}
                    className={`flex flex-col items-center gap-1 transition-all duration-500 ${isActive ? 'scale-110' : 'opacity-30 grayscale'}`}
                  >
                    <div
                      className={`p-1.5 rounded-lg ${isActive ? 'bg-linear-to-br from-yellow-400 to-orange-600 shadow-lg shadow-orange-500/20' : 'bg-slate-200'}`}
                    >
                      <Crown size={12} className={isActive ? 'text-slate-900' : 'text-slate-500'} />
                    </div>
                    <span
                      className={`text-[8px] font-bold ${isActive ? 'text-yellow-500' : 'text-slate-600'}`}
                    >
                      {name}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-center px-6 py-3 bg-slate-200/50 rounded-xl ">
              <div className="text-xs text-gray-400 mb-1">账户余额</div>
              <div className="text-xl font-bold text-yellow-400 flex items-center justify-center gap-1.5">
                {user.balance.toLocaleString()}
                <GoldBean className="w-5 h-5" />
              </div>
            </div>
            <div className="text-center px-6 py-3 bg-slate-200/50 rounded-xl ">
              <div className="text-xs text-gray-400 mb-1">保险柜</div>
              <div className="text-xl font-bold text-blue-400 flex items-center justify-center gap-1.5">
                2,214,529
                <GoldBean className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <nav className="bg-slate-100/50 rounded-xl overflow-hidden">
              {[
                { id: 'overview', icon: User, label: '个人战绩' },
                { id: 'wallet', icon: CreditCard, label: '我的钱包' },
                { id: 'beancard', icon: CreditCard, label: '豆卡管理' },
                { id: 'history', icon: History, label: '金豆记录' },
                { id: 'security', icon: Shield, label: '账号安全' },
                { id: 'settings', icon: Settings, label: '系统设置' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between p-4 text-left transition-colors ${
                    activeTab === item.id
                      ? 'bg-yellow-500/10 text-yellow-400 border-l-4 border-yellow-500'
                      : 'text-gray-400 hover:bg-slate-200 hover:text-black border-l-4 border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={18} />
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight
                    size={16}
                    className={`opacity-0 ${activeTab === item.id ? 'opacity-100' : ''}`}
                  />
                </button>
              ))}
              <div className="border-t border-slate-800 mt-2 pt-2">
                <button className="w-full flex items-center gap-3 p-4 text-left text-red-400 hover:bg-slate-200 transition-colors">
                  <LogOut size={18} />
                  <span>退出登录</span>
                </button>
              </div>
            </nav>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-slate-100/50 rounded-xl p-6 min-h-[400px]">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                    <User className="text-yellow-500" /> 个人战绩
                  </h2>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-slate-200/50 p-4 rounded-xl  text-center">
                      <div className="text-slate-500 text-xs mb-1">今日流水</div>
                      <div className="text-xl font-bold text-black flex items-center justify-center gap-1">
                        12,500 <GoldBean className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="bg-slate-200/50 p-4 rounded-xl  text-center">
                      <div className="text-slate-500 text-xs mb-1">今日胜率</div>
                      <div className="text-xl font-bold text-black">68.5%</div>
                    </div>
                    <div className="bg-slate-200/50 p-4 rounded-xl  text-center">
                      <div className="text-slate-500 text-xs mb-1">今日盈亏</div>
                      <div className="text-xl font-bold text-black flex items-center justify-center gap-1">
                        +2,580 <GoldBean className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="bg-slate-200/50 p-4 rounded-xl  text-center">
                      <div className="text-slate-500 text-xs mb-1">昨日盈亏</div>
                      <div className="text-xl font-bold text-black flex items-center justify-center gap-1">
                        -1,200 <GoldBean className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'wallet' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-lg font-bold text-black flex items-center gap-2">
                      <Shield className="text-yellow-500" size={20} /> 保险柜
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Balances Summary */}
                    <div className="space-y-4">
                      <div className="bg-slate-200/30 rounded-2xl p-4 space-y-4">
                        <h3 className="text-xs font-bold text-slate-300 border-l-4 border-yellow-500 pl-2">
                          资产概览
                        </h3>
                        <div className="grid grid-cols-1 gap-3">
                          <div className="bg-slate-100/50 rounded-xl p-3 text-center">
                            <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">
                              账户余额
                            </div>
                            <div className="text-lg font-bold text-yellow-400 flex items-center justify-center gap-1">
                              2,214,529 <GoldBean className="w-4 h-4" />
                            </div>
                          </div>
                          <div className="bg-slate-100/50 rounded-xl p-3 text-center">
                            <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">
                              保险柜
                            </div>
                            <div className="text-lg font-bold text-yellow-400 flex items-center justify-center gap-1">
                              0 <GoldBean className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Transfer Action Card */}
                    <div className="bg-slate-100 rounded-2xl overflow-hidden shadow-2xl">
                      <div className="flex">
                        <button
                          onClick={() => setTransferTab('deposit')}
                          className={`flex-1 py-2.5 text-xs font-bold transition-all ${transferTab === 'deposit' ? 'text-black bg-orange-600/20 border-b-2 border-orange-500' : 'text-slate-500 hover:text-slate-300'}`}
                        >
                          存入保险柜
                        </button>
                        <button
                          onClick={() => setTransferTab('withdraw')}
                          className={`flex-1 py-2.5 text-xs font-bold transition-all ${transferTab === 'withdraw' ? 'text-black bg-orange-600/20 border-b-2 border-orange-500' : 'text-slate-500 hover:text-slate-300'}`}
                        >
                          取出到账户
                        </button>
                      </div>

                      <div className="p-4 space-y-4">
                        <div className="space-y-1.5">
                          <div className="flex justify-between items-end">
                            <label className="text-[10px] font-medium text-slate-400 ml-1">
                              划转数量
                            </label>
                            <span className="text-[9px] text-slate-500">
                              可用: {transferTab === 'deposit' ? '2,214,529' : '0'}
                            </span>
                          </div>
                          <input
                            type="text"
                            placeholder="请输入数量"
                            className="w-full bg-slate-200/50  rounded-xl py-2 px-3 text-xs text-black placeholder:text-slate-600 focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                          />
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {['全部', '1/2', '1/3', '1/4', '1/10'].map((label) => (
                              <button
                                key={label}
                                className="px-2 py-0.5 rounded-md bg-slate-200 hover:bg-slate-300 text-slate-400 text-[9px]  transition-all"
                              >
                                {label}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-medium text-slate-400 ml-1">
                            安全密码
                          </label>
                          <div className="relative group">
                            <input
                              type="password"
                              placeholder="请输入安全密码"
                              className="w-full bg-slate-200/50  rounded-xl py-2 px-3 text-xs text-black placeholder:text-slate-600 focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                            />
                            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-black transition-colors">
                              <Eye size={14} />
                            </button>
                          </div>
                        </div>

                        <button className="w-full bg-linear-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-black font-bold py-2.5 rounded-xl shadow-lg shadow-orange-500/20 transition-all active:scale-[0.98]">
                          {transferTab === 'deposit' ? '立即存入' : '立即取出'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'beancard' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-black flex items-center gap-2">
                      <CreditCard className="text-blue-400" size={20} /> 豆卡管理
                    </h2>
                  </div>

                  <div className="bg-slate-200/30 rounded-2xl p-6 space-y-6">
                    {/* Search & Action Bar */}
                    <div className="flex flex-wrap gap-3 items-center">
                      <input
                        type="text"
                        placeholder="输入卡密查询"
                        className="bg-slate-100  rounded-xl px-4 py-2 text-sm text-black focus:outline-hidden focus:border-blue-500 w-48"
                      />
                      <input
                        type="text"
                        placeholder="输入用户ID查询"
                        className="bg-slate-100  rounded-xl px-4 py-2 text-sm text-black focus:outline-hidden focus:border-blue-500 w-48"
                      />
                      <select className="bg-slate-100  rounded-xl px-4 py-2 text-sm text-black focus:outline-hidden focus:border-blue-500">
                        <option>全部状态</option>
                        <option>未使用</option>
                        <option>已使用</option>
                      </select>
                      <button className="px-6 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-black text-sm font-bold transition-all">
                        查询
                      </button>
                      <button className="px-4 py-2 rounded-xl border border-blue-500/50 text-blue-400 text-sm font-medium hover:bg-blue-500/10 transition-all">
                        复制未使用卡密
                      </button>
                      <button className="px-6 py-2 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-slate-900 text-sm font-bold transition-all ml-auto">
                        使用豆卡
                      </button>
                    </div>

                    {/* Card Table */}
                    <div className="overflow-hidden rounded-xl bg-slate-100/50">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                          <thead className="bg-slate-200/50 text-slate-500 uppercase tracking-wider">
                            <tr>
                              <th className="p-2 w-8 text-center">ID</th>
                              <th className="p-2 whitespace-nowrap">卡密</th>
                              <th className="p-2 whitespace-nowrap">金豆</th>
                              <th className="p-2 whitespace-nowrap">卡状态</th>
                              <th className="p-2 whitespace-nowrap">使用人ID</th>
                              <th className="p-2 whitespace-nowrap">获取时间</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              {
                                secret: '093160782516203',
                                beans: '1千万金豆卡',
                                status: '未使用',
                                userId: '0',
                                getTime: '01-20 15:15:03',
                              },
                              {
                                secret: '780252156079515',
                                beans: '1千万金豆卡',
                                status: '未使用',
                                userId: '0',
                                getTime: '01-20 15:15:03',
                              },
                              {
                                secret: '713061907215507',
                                beans: '1千万金豆卡',
                                status: '未使用',
                                userId: '0',
                                getTime: '01-20 15:15:03',
                              },
                            ].map((card, i) => (
                              <tr
                                key={i}
                                className="hover:bg-slate-200/30 transition-colors text-slate-400"
                              >
                                <td className="p-2 text-center font-mono text-slate-600">
                                  {i + 1}
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                  <div className="flex items-center gap-2">
                                    <span className="font-mono text-slate-300">{card.secret}</span>
                                    <button className="text-orange-500 hover:text-orange-400 transition-colors">
                                      复制
                                    </button>
                                  </div>
                                </td>
                                <td className="p-2 whitespace-nowrap text-slate-300">
                                  {card.beans}
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                  <span
                                    className={
                                      card.status === '未使用' ? 'text-green-500' : 'text-slate-600'
                                    }
                                  >
                                    {card.status}
                                  </span>
                                </td>
                                <td className="p-2 whitespace-nowrap font-mono">{card.userId}</td>
                                <td className="p-2 whitespace-nowrap font-mono text-slate-500">
                                  {card.getTime}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'history' && (
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                    <h2 className="text-lg font-bold text-black flex items-center gap-2">
                      <History className="text-yellow-500" size={20} /> 金豆记录
                    </h2>
                    <div className="flex items-center gap-3">
                      <select className="bg-slate-200  rounded-lg px-3 py-1.5 text-xs text-black focus:outline-hidden focus:border-yellow-500">
                        <option>所有类别</option>
                        <option>开通会员</option>
                        <option>使用豆卡</option>
                        <option>兑换商品</option>
                        <option>活动奖励</option>
                        <option>急速30</option>
                        <option>比特60</option>
                        <option>韩国90</option>
                        <option>斯洛伐克120</option>
                        <option>加拿大210</option>
                        <option>保险柜</option>
                        <option>其他类别</option>
                      </select>
                      <span className="text-[10px] text-slate-500 italic">
                        * 明细仅展示最近1个月的记录
                      </span>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-2xl bg-slate-100/50">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-slate-200/50 text-slate-500 uppercase tracking-wider">
                          <tr>
                            <th className="p-4 whitespace-nowrap">记录时间</th>
                            <th className="p-4 whitespace-nowrap">记录类型</th>
                            <th className="p-4 whitespace-nowrap">描述说明</th>
                            <th className="p-4 whitespace-nowrap">金豆变化</th>
                            <th className="p-4 whitespace-nowrap">变化后金豆</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            {
                              time: '2026-01-21 15:20:13',
                              type: '签到奖励',
                              desc: '签到获得金豆',
                              change: '+1,000',
                              balance: '891,000',
                            },
                            {
                              time: '2026-01-01 09:53:12',
                              type: '新年礼遇',
                              desc: '新年礼遇',
                              change: '+880,000',
                              balance: '890,000',
                            },
                            {
                              time: '2025-11-01 18:38:36',
                              type: '使用豆卡',
                              desc: '核销金豆卡x1',
                              change: '+10,000,000',
                              balance: '489,885,200',
                            },
                            {
                              time: '2025-10-20 15:15:03',
                              type: '兑换商品',
                              desc: '兑换金豆卡x3',
                              change: '-30,000,000',
                              balance: '2,214,529',
                            },
                          ].map((record, i) => (
                            <tr
                              key={i}
                              className="hover:bg-slate-200/30 transition-colors text-slate-400"
                            >
                              <td className="p-4 font-mono text-slate-500">{record.time}</td>
                              <td className="p-2">
                                <span className="px-2 py-0.5 rounded-full bg-slate-200  text-slate-300">
                                  {record.type}
                                </span>
                              </td>
                              <td className="p-4 text-slate-300">{record.desc}</td>
                              <td className="p-4 font-bold text-black">{record.change}</td>
                              <td className="p-4 font-mono text-black flex items-center gap-1">
                                {record.balance} <GoldBean className="w-3 h-3" />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="flex justify-center gap-4 pt-2">
                    <button className="px-6 py-1.5 rounded-lg bg-slate-200 text-slate-500  text-xs font-medium hover:bg-slate-300 transition-all">
                      上一页
                    </button>
                    <button className="px-6 py-1.5 rounded-lg bg-slate-200 text-slate-500  text-xs font-medium hover:bg-slate-300 transition-all">
                      下一页
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-lg font-bold text-black flex items-center gap-2">
                      <Shield className="text-yellow-500" size={20} /> 账号安全
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Login Password */}
                    <div className="bg-slate-200/30 rounded-2xl p-4 space-y-4">
                      <h3 className="text-xs font-bold text-slate-300 border-l-4 border-yellow-500 pl-2">
                        修改登录密码
                      </h3>
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-500 ml-1">当前密码</label>
                          <input
                            type="password"
                            placeholder="请输入当前密码"
                            className="w-full bg-slate-100  rounded-lg px-3 py-1.5 text-xs text-black focus:outline-hidden focus:border-yellow-500"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="space-y-1">
                            <label className="text-[10px] text-slate-500 ml-1">新密码</label>
                            <input
                              type="password"
                              placeholder="新密码"
                              className="w-full bg-slate-100  rounded-lg px-3 py-1.5 text-xs text-black focus:outline-hidden focus:border-yellow-500"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] text-slate-500 ml-1">确认新密码</label>
                            <input
                              type="password"
                              placeholder="确认新密码"
                              className="w-full bg-slate-100  rounded-lg px-3 py-1.5 text-xs text-black focus:outline-hidden focus:border-yellow-500"
                            />
                          </div>
                        </div>
                        <button className="w-full py-2 bg-yellow-500 text-slate-900 rounded-lg text-[10px] font-bold hover:bg-yellow-400 transition-colors">
                          更新登录密码
                        </button>
                      </div>
                    </div>

                    {/* Transaction Password */}
                    <div className="bg-slate-200/30 rounded-2xl p-4 space-y-4">
                      <h3 className="text-xs font-bold text-slate-300 border-l-4 border-yellow-500 pl-2">
                        设置交易密码
                      </h3>
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="space-y-1">
                            <label className="text-[10px] text-slate-500 ml-1">手机号</label>
                            <div className="bg-slate-100/50 rounded-lg px-3 py-1.5 text-xs text-slate-400 font-mono">
                              138****8888
                            </div>
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] text-slate-500 ml-1">设置密码</label>
                            <div className="relative group">
                              <input
                                type="password"
                                placeholder="6位数字"
                                className="w-full bg-slate-100  rounded-lg px-3 py-1.5 text-xs text-black focus:outline-hidden focus:border-yellow-500"
                              />
                              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-black">
                                <Eye size={14} />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-500 ml-1">验证码</label>
                          <div className="flex gap-2">
                            <input
                              type="text"
                              placeholder="短信验证码"
                              className="flex-1 bg-slate-100  rounded-lg px-3 py-1.5 text-xs text-black focus:outline-hidden focus:border-yellow-500"
                            />
                            <button className="px-3 py-1.5 bg-slate-200  rounded-lg text-[10px] text-slate-300 hover:text-black transition-colors whitespace-nowrap">
                              获取验证码
                            </button>
                          </div>
                        </div>
                        <button className="w-full py-2 bg-blue-600 text-black rounded-lg text-[10px] font-bold hover:bg-blue-500 transition-all active:scale-[0.98] shadow-lg shadow-blue-500/20">
                          确认设置交易密码
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-lg font-bold text-black flex items-center gap-2">
                      <Settings className="text-yellow-500" size={20} /> 系统设置
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Profile Settings */}
                    <div className="bg-slate-200/30 rounded-2xl p-4 space-y-4">
                      <h3 className="text-xs font-bold text-slate-300 border-l-4 border-yellow-500 pl-2">
                        个人资料
                      </h3>
                      <div className="flex items-start gap-4">
                        <div className="flex-1 space-y-3">
                          <div className="space-y-1">
                            <label className="text-[10px] text-slate-500 ml-1">用户名称</label>
                            <div className="flex gap-2">
                              <input
                                type="text"
                                defaultValue={user.name}
                                className="flex-1 bg-slate-100  rounded-lg px-3 py-1.5 text-xs text-black focus:outline-hidden focus:border-yellow-500"
                              />
                              <button className="px-3 py-1.5 bg-slate-200  rounded-lg text-[10px] text-slate-300 hover:text-black transition-colors">
                                修改
                              </button>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] text-slate-500 ml-1">绑定手机</label>
                            <div className="bg-slate-100/50 rounded-lg px-3 py-1.5 text-xs text-slate-400 font-mono">
                              138****8888
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                          <div className="relative group cursor-pointer">
                            <div className="w-16 h-16 rounded-full bg-slate-200 border-2 border-slate-700 overflow-hidden p-1 group-hover:border-yellow-500/50 transition-colors">
                              <img
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                                alt="Avatar"
                                className="w-full h-full rounded-full"
                              />
                            </div>
                            <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <Camera size={16} className="text-black" />
                            </div>
                          </div>
                          <span className="text-[10px] text-slate-500">更换头像</span>
                        </div>
                      </div>
                    </div>

                    {/* Identity Verification */}
                    <div className="bg-slate-200/30 rounded-2xl p-4 space-y-4">
                      <h3 className="text-xs font-bold text-slate-300 border-l-4 border-yellow-500 pl-2">
                        实名认证
                      </h3>
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-500 ml-1">真实姓名</label>
                          <input
                            type="text"
                            placeholder="请输入您的真实姓名"
                            className="w-full bg-slate-100  rounded-lg px-3 py-1.5 text-xs text-black focus:outline-hidden focus:border-yellow-500"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-500 ml-1">身份证号</label>
                          <div className="flex gap-2">
                            <input
                              type="text"
                              placeholder="请输入18位身份证号码"
                              className="flex-1 bg-slate-100  rounded-lg px-3 py-1.5 text-xs text-black focus:outline-hidden focus:border-yellow-500"
                            />
                            <button className="px-4 py-1.5 bg-blue-600 text-black rounded-lg text-[10px] font-bold hover:bg-blue-500 transition-colors">
                              提交
                            </button>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-[9px] text-slate-500 bg-blue-500/5 p-2 rounded-lg border border-blue-500/10">
                          <Shield size={12} className="text-blue-500" />
                          身份信息已加密保护
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
