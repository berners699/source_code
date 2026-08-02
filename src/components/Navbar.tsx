import React, { useState } from 'react'
import {
  Menu,
  X,
  Home,
  Gamepad2,
  ShoppingBag,
  Trophy,
  Crown,
  Share2,
  UserCircle,
  RefreshCw,
  LogOut,
  Coins,
  Phone,
  Lock,
  Shield,
  Eye,
  EyeOff,
} from 'lucide-react'
import navBg from '@/assets/default/nav-bg.png'
import avatar1 from '../assets/avatars/avatar-1.png'
import GoldBean from './GoldBean'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login')
  const [showPassword, setShowPassword] = useState(false)
  const location = useLocation()

  const NAV_ITEMS = [
    { path: '/', label: '首页', icon: Home },
    { path: '/games', label: '娱乐游戏', icon: Gamepad2 },
    { path: '/mall', label: '商城兑换', icon: ShoppingBag },
    { path: '/leaderboard', label: '排行榜', icon: Trophy },
    { path: '/vip', label: 'VIP会员', icon: Crown },
    { path: '/invite', label: '福利活动', icon: Share2 },
    { path: '/profile', label: '个人中心', icon: UserCircle },
  ]

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/home') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="sticky top-0 z-50 shadow-lg">
      {/* Top Bar: Logo and Actions */}
      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <span className="text-xl font-bold bg-linear-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                云游 YunYou
              </span>
            </Link>

            {/* Right Side Icons (Desktop) */}
            <div className="md:flex items-center space-x-4">
              {location.pathname === '/games' ? (
                <div className="flex items-center space-x-4 text-sm text-primary">
                  <div className="flex items-center space-x-2">
                    <img
                      src={avatar1}
                      alt="Avatar"
                      className="w-8 h-8 rounded-full border border-gray-600"
                    />
                    <span className="text-primary font-medium">苍井空</span>
                  </div>
                  <span>ID: 123456</span>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <span>金豆: 888,888</span>
                    <GoldBean className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <span>保险柜: 0</span>
                    <GoldBean className="w-3.5 h-3.5" />
                  </div>
                  <button className="text-tip-red hover:text-red-400 font-medium">充值</button>
                  <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                    <RefreshCw size={14} />
                    <span>刷新</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                    <LogOut size={14} />
                    <span>退出</span>
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-4 mr-[25px]">
                  <button
                    onClick={() => {
                      setAuthMode('login')
                      setIsAuthModalOpen(true)
                    }}
                    className="text-primary hover:text-black text-sm font-medium transition-colors"
                  >
                    请登录
                  </button>
                  <div className="w-px h-4 bg-slate-700"></div>
                  <button
                    onClick={() => {
                      setAuthMode('register')
                      setIsAuthModalOpen(true)
                    }}
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                  >
                    免费注册
                  </button>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white p-2 rounded-md"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Main Navigation Bar (Desktop Only) */}
      <nav className="bg-slate-100 md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-14 space-x-2">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.path)
              const Icon = item.icon
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    active
                      ? `bg-[#6366f1] text-white shadow-lg shadow-[#6366f1]/50 scale-105`
                      : 'text-primary hover:text-tip-blue'
                  }`}
                >
                  <Icon size={16} />
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-100 border-b border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.path)
              const Icon = item.icon
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium flex items-center gap-3 ${
                    active
                      ? `bg-[#6366f1] text-white`
                      : 'text-gray-300 hover:text-white hover:bg-slate-200'
                  }`}
                >
                  <Icon size={20} />
                  {item.label}
                </Link>
              )
            })}
            <div className="pt-4 pb-2 border-t border-slate-800 flex flex-col gap-2 px-3">
              <button
                onClick={() => {
                  setAuthMode('login')
                  setIsAuthModalOpen(true)
                  setIsOpen(false)
                }}
                className="w-full py-2 text-center text-gray-300 hover:text-white font-medium"
              >
                请登录
              </button>
              <button
                onClick={() => {
                  setAuthMode('register')
                  setIsAuthModalOpen(true)
                  setIsOpen(false)
                }}
                className="w-full py-2 text-center bg-blue-600 text-white rounded-md font-medium"
              >
                免费注册
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Auth Modal */}
      {isAuthModalOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-xs"
            onClick={() => setIsAuthModalOpen(false)}
          ></div>
          <div className="relative bg-slate-100 border border-slate-800 rounded-2xl w-full max-w-[320px] p-6 shadow-2xl animate-in fade-in zoom-in duration-200 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl"></div>

            <button
              onClick={() => setIsAuthModalOpen(false)}
              className="absolute right-4 top-4 text-slate-500 hover:text-white transition-colors z-10"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-6 relative z-10">
              <h2 className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                {authMode === 'login' ? '账号登录' : '免费注册'}
              </h2>
              <p className="text-slate-500 text-xs mt-1">
                {authMode === 'login' ? '欢迎回来，开启您的云端之旅' : '加入我们，探索无限可能'}
              </p>
            </div>

            <div className="space-y-4 relative z-10">
              {/* Phone Input */}
              <div className="space-y-1">
                <label className="text-[10px] font-medium text-slate-400 ml-1">手机号码</label>
                <div className="relative group">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors">
                    <Phone size={16} />
                  </div>
                  <input
                    type="text"
                    placeholder="请输入手机号"
                    className="w-full bg-slate-200/50 border border-slate-700 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-slate-600 focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-1">
                <label className="text-[10px] font-medium text-slate-400 ml-1">登录密码</label>
                <div className="relative group">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors">
                    <Lock size={16} />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder={authMode === 'login' ? '请输入登录密码' : '请设置登录密码'}
                    className="w-full bg-slate-200/50 border border-slate-700 rounded-xl py-2.5 pl-10 pr-10 text-sm text-white placeholder:text-slate-600 focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Captcha Input */}
              <div className="space-y-1">
                <label className="text-[10px] font-medium text-slate-400 ml-1">验证码</label>
                <div className="flex gap-2">
                  <div className="relative flex-1 group">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors">
                      <Shield size={16} />
                    </div>
                    <input
                      type="text"
                      placeholder="图形验证码"
                      className="w-full bg-slate-200/50 border border-slate-700 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-slate-600 focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    />
                  </div>
                  <div className="w-24 h-[42px] bg-slate-200 border border-slate-700 rounded-xl flex items-center justify-center overflow-hidden cursor-pointer hover:bg-slate-700 transition-colors group">
                    <span className="text-lg font-bold italic text-blue-400 tracking-tighter group-hover:scale-110 transition-transform">
                      5639
                    </span>
                  </div>
                </div>
              </div>

              {authMode === 'login' && (
                <p className="text-[10px] text-red-400/80 text-center px-2">
                  提示：初始支付密码和登录密码一致，可在个人中心修改
                </p>
              )}

              <div className="pt-1 space-y-3">
                <button className="w-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98]">
                  {authMode === 'login' ? '立即登录' : '注册账号'}
                </button>

                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-slate-200"></div>
                  <span className="text-[10px] text-slate-600 uppercase tracking-widest">或者</span>
                  <div className="h-px flex-1 bg-slate-200"></div>
                </div>

                <button
                  onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
                  className="w-full bg-slate-200/50 border border-slate-700 text-slate-300 text-sm font-medium py-2.5 rounded-xl hover:bg-slate-200 hover:text-white transition-all"
                >
                  {authMode === 'login' ? '还没有账号？免费注册' : '已有账号？立即登录'}
                </button>
              </div>

              {authMode === 'login' && (
                <div className="text-center">
                  <button className="text-[10px] text-slate-500 hover:text-blue-400 transition-colors">
                    忘记密码？
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
