import React, { useState } from 'react'
import { X, Volume2, ChevronRight, Clock, User, Eye, ArrowLeft } from 'lucide-react'

interface Notice {
  id: number
  title: string
  date: string
  content: string
  views: string
  source: string
}

const NOTICES: Notice[] = [
  {
    id: 1,
    title: '石头岛全新机制-开年巨献',
    date: '2026-01-24 22:08',
    views: '1200+',
    source: '官方',
    content:
      '开年巨献！石头岛全新机制正式上线。我们引入了全新的算法和更公平的开奖逻辑，确保每一位玩家都能在公平公正的环境下体验游戏的乐趣。同时，新机制还带来了更高的返利比例和更丰富的活动奖励。快来体验吧！',
  },
  {
    id: 2,
    title: '石头岛周年庆狂欢！',
    date: '2026-01-24 22:08',
    views: '3500+',
    source: '官方',
    content:
      '石头岛一周年啦！为了回馈广大玩家的支持，我们准备了丰厚的周年庆大礼包。活动期间，所有游戏的金豆产出翻倍，更有机会抽取限量版金豆卡和实物大奖。感谢有你，一路同行！',
  },
  {
    id: 3,
    title: '石头岛维护升级完成',
    date: '2026-01-24 22:08',
    views: '999+',
    source: '系统',
    content:
      '更新内容 1：完善站内信功能 更新收发信件 站内信功能可以直接联系我们管理 有合作意见或者想法可以跟我们沟通 2：更新红包雨功能，每日首充都可以触发一次红包雨特效 根据您的充值金额等比例 也有几率抽到 8888w 金豆的特殊奖励！ 3：更新 pc 版走势图展示页面，添加了连线展示 把走势更加具体化，方便玩家更好的判断以及分析！ 4：更新了手机版个人中心的细节页面 例如我的团队 我的 vip 等页面的优化 5：更新手机版自动参与 自动追号功能优化以及页面优化',
  },
  {
    id: 4,
    title: '石头岛暖心福利升级',
    date: '2026-01-24 22:08',
    views: '800+',
    source: '官方',
    content:
      '暖心福利再升级！现在每日签到奖励提升至 2000 金豆，连续签到更有额外惊喜。同时，我们优化了邀请返利系统，您的下级好友每参与一局游戏，您都能获得更高比例的佣金分成。',
  },
  {
    id: 5,
    title: '关于京东e卡',
    date: '2026-01-24 22:08',
    views: '2100+',
    source: '商城',
    content:
      '商城已上架 100 元面值京东 e 卡，兑换价格为 10,000,000 金豆。兑换后卡密将通过站内信发送，请注意查收。京东 e 卡可用于京东商城全场通用，无门槛限制。',
  },
  {
    id: 6,
    title: '石头岛双 11 活动',
    date: '2026-01-24 22:08',
    views: '4500+',
    source: '活动',
    content:
      '双 11 狂欢开启！全场商品兑换 8 折优惠，游戏投注返利提升 50%。活动仅限 11 月 11 日当天，错过再等一年！',
  },
  {
    id: 7,
    title: '账号首冲限制（新人必看）',
    date: '2026-01-24 22:08',
    views: '6000+',
    source: '安全',
    content:
      '为了保障平台资金安全和防止恶意刷号，新注册账号的首笔充值金额限制在 100-5000 元之间。完成首充并参与游戏后，限制将自动解除。请各位新玩家知悉。',
  },
  {
    id: 8,
    title: '石头岛国庆活动预热',
    date: '2026-01-24 22:08',
    views: '1500+',
    source: '官方',
    content:
      '国庆佳节将至，石头岛准备了为期 7 天的狂欢活动。每日登录即领金豆，参与特定游戏更有机会赢取国庆专属勋章和海量奖励。活动详情请关注后续公告。',
  },
  {
    id: 9,
    title: '切勿相信兼职赚钱！',
    date: '2026-01-24 22:08',
    views: '8000+',
    source: '安全',
    content:
      '近期发现有不法分子冒充平台客服，以“兼职赚钱”、“高额回报”为诱饵进行诈骗。请广大玩家提高警惕，切勿私下转账或泄露账号密码。平台唯一官方联系方式请认准官网公示。',
  },
  {
    id: 10,
    title: '新导航页以及备用域名',
    date: '2026-01-24 22:08',
    views: '3000+',
    source: '系统',
    content:
      '为了应对网络波动，我们启用了全新的导航页和多个备用域名。建议玩家收藏导航页地址，以便在主域名无法访问时快速切换。新导航页地址：https://yunyou.nav',
  },
]

interface NoticeBoardProps {
  isOpen: boolean
  onClose: () => void
}

const NoticeBoard: React.FC<NoticeBoardProps> = ({ isOpen, onClose }) => {
  const [view, setView] = useState<'list' | 'detail'>('list')
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null)

  if (!isOpen) return null

  const handleShowDetail = (notice: Notice) => {
    setSelectedNotice(notice)
    setView('detail')
  }

  const handleBackToList = () => {
    setView('list')
    setSelectedNotice(null)
  }

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-slate-100 border border-slate-800 rounded-2xl w-full max-w-6xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-200/50">
          <div className="flex items-center gap-2">
            <div className="w-1 h-5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            <h2 className="text-lg font-bold text-white">
              {view === 'list' ? '公告中心' : '公告详情'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-200 text-slate-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 bg-slate-100/50">
          {view === 'list' ? (
            <div className="space-y-2">
              {NOTICES.map((notice) => (
                <div
                  key={notice.id}
                  onClick={() => handleShowDetail(notice)}
                  className="group flex items-center justify-between p-4 rounded-xl hover:bg-slate-200/50 cursor-pointer transition-all border border-transparent hover:border-slate-700"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors"></div>
                    <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                      {notice.title}
                    </span>
                  </div>
                  <span className="text-sm text-slate-500 font-mono">{notice.date}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-4xl mx-auto py-8 px-4">
              <h1 className="text-3xl font-bold text-white text-center mb-6">
                {selectedNotice?.title}
              </h1>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400 mb-10 border-b border-slate-800 pb-6">
                <div className="flex items-center gap-1.5">
                  <Clock size={14} className="text-blue-400" />
                  <span>发布时间: {selectedNotice?.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <User size={14} className="text-blue-400" />
                  <span>来源: {selectedNotice?.source}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Eye size={14} className="text-blue-400" />
                  <span>阅读人数: {selectedNotice?.views}</span>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 leading-relaxed text-lg whitespace-pre-wrap">
                  {selectedNotice?.content}
                </p>
              </div>

              <div className="mt-16 flex justify-center">
                <button
                  onClick={handleBackToList}
                  className="flex items-center gap-2 px-8 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-white font-bold border border-slate-700 transition-all active:scale-95"
                >
                  <ArrowLeft size={18} />
                  返回公告列表
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NoticeBoard
