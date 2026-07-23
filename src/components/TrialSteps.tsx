import React from 'react';
import { UserPlus, Gamepad2, Gift, Wallet, ChevronRight, Volume2 } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: '注册账号',
    desc: '创建个人账号，登录平台',
    icon: UserPlus,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20'
  },
  {
    id: '02',
    title: '试玩体验',
    desc: '选择游戏或产品，体验内容',
    icon: Gamepad2,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/20'
  },
  {
    id: '03',
    title: '领取奖励',
    desc: '根据试玩结果领取试玩奖励',
    icon: Gift,
    color: 'text-pink-400',
    bg: 'bg-pink-400/10',
    border: 'border-pink-400/20'
  },
  {
    id: '04',
    title: '完成提现',
    desc: '积累奖励，申请提现',
    icon: Wallet,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/20'
  }
];

interface TrialStepsProps {
  onMoreClick: () => void;
}

const TrialSteps: React.FC<TrialStepsProps> = ({ onMoreClick }) => {
  return (
    <div className="bg-slate-900 py-6 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Steps Container */}
        <div className="bg-slate-800/50 rounded-2xl p-6 backdrop-blur-sm border border-slate-700">
          <div className="flex flex-col xl:flex-row items-center gap-6">
            
            {/* Title/Logo Area */}
            <div className="flex-shrink-0 text-center xl:text-left">
               <div className="text-3xl font-bold text-white italic tracking-wider">
                 <span className="text-yellow-500">试玩</span>步骤
               </div>
               <div className="h-1 w-16 bg-gradient-to-r from-yellow-500 to-transparent mt-2 rounded-full mx-auto xl:mx-0"></div>
            </div>

            {/* Steps Grid */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              {steps.map((step, index) => (
                <div key={step.id} className={`relative group p-4 rounded-xl border ${step.border} ${step.bg} hover:bg-opacity-20 transition-all duration-300`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className={`text-2xl font-bold ${step.color} mb-1`}>{step.id} <span className="text-white text-base font-medium ml-1">{step.title}</span></div>
                      <p className="text-xs text-gray-400">{step.desc}</p>
                    </div>
                    <step.icon className={`w-8 h-8 ${step.color} opacity-80 group-hover:scale-110 transition-transform`} />
                  </div>
                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                      <ChevronRight size={20} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notice Bar */}
        <div className="mt-4 flex items-center bg-slate-800/30 rounded-lg px-4 py-2 text-sm text-gray-300 border border-slate-700/50">
          <Volume2 size={16} className="text-yellow-500 mr-2 flex-shrink-0" />
          <span className="text-yellow-500 mr-2">公告:</span>
          <span className="truncate flex-1">客户端更新：修复了部分已知BUG，优化了游戏加载速度。</span>
          <button 
            onClick={onMoreClick}
            className="text-blue-400 hover:text-blue-300 ml-4 flex-shrink-0 text-sm font-medium"
          >
            更多 &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrialSteps;
