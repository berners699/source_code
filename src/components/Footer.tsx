import React from 'react'
import { Github, Twitter, Facebook, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-50 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-black mb-4">云游 YunYou</h3>
            <p className="text-sm mb-4">
              次世代云游戏平台，随时随地开启你的数字冒险。无需下载，点击即玩。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">平台</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  浏览游戏
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  最新资讯
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">支持</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  帮助中心
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  联系客服
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  服务条款
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  隐私政策
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">订阅更新</h4>
            <p className="text-sm mb-4">获取最新游戏发布和独家优惠。</p>
            <div className="flex">
              <input
                type="email"
                placeholder="输入你的邮箱"
                className="bg-slate-200 text-white px-4 py-2 rounded-l-md focus:outline-hidden focus:ring-1 focus:ring-blue-500 w-full"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors">
                订阅
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 text-center text-sm">
          <p>&copy; 2026 云游 YunYou. All rights reserved. 沪ICP备12345678号</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
