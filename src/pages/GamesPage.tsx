import React, { useState, useEffect } from 'react'
import {
  Clock,
  Trophy,
  History,
  AlertCircle,
  TrendingUp,
  Settings,
  List,
  PlayCircle,
  FileText,
  RotateCcw,
  Trash2,
  Layers,
  PlusCircle,
  ArrowLeft,
  X,
} from 'lucide-react'
import GoldBean from '../components/GoldBean'

// Import sub-components
import PastResults from '../components/games/PastResults'
import BettingRecords from '../components/games/BettingRecords'
import BettingMode from '../components/games/BettingMode'
import AutoBet from '../components/games/AutoBet'
import GameTrend from '../components/games/GameTrend'
import GameRules from '../components/games/GameRules'

// Game Configuration
const ALL_ODDS = [
  1000, 333.33, 166.66, 100, 66.66, 47.61, 35.71, 27.77, 22.22, 18.18, 15.87, 14.49, 13.69, 13.33,
  13.33, 13.69, 14.49, 15.87, 18.18, 22.22, 27.77, 35.71, 47.71, 66.66, 100, 166.66, 333.33, 1000,
]

const GAMES = [
  {
    id: 'js30',
    name: '急速30秒',
    duration: 30,
    colors: {
      primary: 'from-red-500 to-red-700',
      accent: 'text-red-500',
      border: 'border-red-500',
      bg: 'bg-red-500',
      lightBg: 'bg-red-500/10',
      shadow: 'shadow-red-500/20',
      button: 'bg-red-600 hover:bg-red-700',
      hex: '#ef4444',
    },
  },
  {
    id: 'bt60',
    name: '比特60秒',
    duration: 60,
    colors: {
      primary: 'from-blue-500 to-blue-700',
      accent: 'text-blue-500',
      border: 'border-blue-500',
      bg: 'bg-blue-500',
      lightBg: 'bg-blue-500/10',
      shadow: 'shadow-blue-500/20',
      button: 'bg-blue-600 hover:bg-blue-700',
      hex: '#3b82f6',
    },
  },
  {
    id: 'kr90',
    name: '韩国90秒',
    duration: 90,
    colors: {
      primary: 'from-purple-500 to-purple-700',
      accent: 'text-purple-500',
      border: 'border-purple-500',
      bg: 'bg-purple-500',
      lightBg: 'bg-purple-500/10',
      shadow: 'shadow-purple-500/20',
      button: 'bg-purple-600 hover:bg-purple-700',
      hex: '#a855f7',
    },
  },
  {
    id: 'sk120',
    name: '斯洛伐克120秒',
    duration: 120,
    colors: {
      primary: 'from-green-500 to-green-700',
      accent: 'text-green-500',
      border: 'border-green-500',
      bg: 'bg-green-500',
      lightBg: 'bg-green-500/10',
      shadow: 'shadow-green-500/20',
      button: 'bg-green-600 hover:bg-green-700',
      hex: '#22c55e',
    },
  },
  {
    id: 'ca210',
    name: '加拿大210秒',
    duration: 210,
    colors: {
      primary: 'from-orange-500 to-orange-700',
      accent: 'text-orange-500',
      border: 'border-orange-500',
      bg: 'bg-orange-500',
      lightBg: 'bg-orange-500/10',
      shadow: 'shadow-orange-500/20',
      button: 'bg-orange-600 hover:bg-orange-700',
      hex: '#f97316',
    },
  },
]

/* Updated Order: Results first */
const TABS = [
  { id: 'results', label: '往期结果', icon: History },
  { id: 'records', label: '投注记录', icon: List },
  { id: 'betting', label: '投注模式', icon: PlayCircle },
  { id: 'auto', label: '自动投注', icon: Settings },
  { id: 'trend', label: '游戏走势', icon: TrendingUp },
  { id: 'rules', label: '游戏规则', icon: FileText },
]

// Mock data generator
const generateHistory = (count: number, duration: number) => {
  const history = []
  const now = new Date()

  for (let i = 0; i < count; i++) {
    const time = new Date(now.getTime() - i * duration * 1000)
    const issue = String(6724397 - i)
    const numbers = Array.from({ length: 3 }, () => Math.floor(Math.random() * 10))
    const sum = numbers.reduce((a, b) => a + b, 0)

    history.push({
      issue,
      time: time.toLocaleString('zh-CN', { hour12: false }).replace(/\//g, '-'),
      numbers,
      sum,
      totalCoins: (60000000000 + Math.floor(Math.random() * 5000000000)).toLocaleString(),
      winners: Math.floor(Math.random() * 1000),
      income: 0,
      invest: 0,
      status: '已解谜',
      parity: sum % 2 === 0 ? '双' : '单',
      size: sum >= 14 ? '大' : '小',
    })
  }
  return history
}

const generateUpcomingIssues = (count: number, lastIssue: string, duration: number) => {
  const upcoming = []
  const lastIssueNum = parseInt(lastIssue)
  const now = new Date()

  for (let i = 1; i <= count; i++) {
    const time = new Date(now.getTime() + i * duration * 1000)
    upcoming.push({
      issue: String(lastIssueNum + i),
      time: time.toLocaleTimeString('zh-CN', { hour12: false }),
      numbers: [],
      sum: null,
      totalCoins: (10000000000 + Math.floor(Math.random() * 5000000000)).toLocaleString(),
      winners: 0,
      income: 0,
      invest: 0,
      status: '立即投注',
      isUpcoming: true,
    })
  }
  return upcoming.reverse()
}

const GamesPage = () => {
  const [activeGameId, setActiveGameId] = useState('js30')
  const [activeTab, setActiveTab] = useState('results')
  const [history, setHistory] = useState<any[]>([])
  const [upcomingIssues, setUpcomingIssues] = useState<any[]>([])
  const [timeLeft, setTimeLeft] = useState(30)
  const [currentIssue, setCurrentIssue] = useState('20240120-1001')
  const [savedModes, setSavedModes] = useState<any[]>([
    { id: 1, name: '稳健模式 A', details: '投注 0-9 号码，每注 100 金豆' },
    { id: 2, name: '激进模式 B', details: '投注 10-27 号码，每注 500 金豆' },
  ])
  const [selectedMode, setSelectedMode] = useState<any | null>(null)
  const [autoBetSubTab, setAutoBetSubTab] = useState<'bet' | 'chase'>('bet')
  const [trendIssues, setTrendIssues] = useState(100)
  const [selectedQuickItems, setSelectedQuickItems] = useState<string[]>([])
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([])
  const [betAmounts, setBetAmounts] = useState<Record<number, number>>({})
  const [showBettingOverlay, setShowBettingOverlay] = useState(false)
  const gameSectionRef = React.useRef<HTMLDivElement>(null)

  const activeGame = GAMES.find((g) => g.id === activeGameId) || GAMES[0]

  useEffect(() => {
    // Reset state when game changes
    setHistory(generateHistory(100, activeGame.duration))
    setUpcomingIssues(generateUpcomingIssues(4, '6724397', activeGame.duration))
    setTimeLeft(activeGame.duration)
    setCurrentIssue('20240120-1001')
    setSelectedNumbers([])
    setSelectedQuickItems([])
    setBetAmounts({})
    setShowBettingOverlay(false)
  }, [activeGameId])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // New round
          const newIssue = `20240120-${String(parseInt(currentIssue.split('-')[1]) + 1).padStart(4, '0')}`
          setCurrentIssue(newIssue)
          setHistory((prevHistory) => {
            const newRecord = generateHistory(1, activeGame.duration)[0]
            newRecord.issue = currentIssue
            return [newRecord, ...prevHistory.slice(0, 49)]
          })
          return activeGame.duration
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [currentIssue, activeGame.duration])

  const getBallColor = (num: number) => {
    const colors = [
      'bg-red-500',
      'bg-green-500',
      'bg-blue-500',
      'bg-yellow-500',
      'bg-purple-500',
      'bg-pink-500',
      'bg-indigo-500',
      'bg-orange-500',
      'bg-teal-500',
      'bg-cyan-500',
    ]
    return colors[num] || 'bg-gray-500'
  }

  const toggleQuickItem = (item: string) => {
    const isSelected = selectedQuickItems.includes(item)
    const newQuickItems = isSelected ? [] : [item]
    setSelectedQuickItems(newQuickItems)
    setSelectedNumbers([])

    if (!isSelected) {
      // Initialize amounts for numbers that match the quick select
      const newAmounts: Record<number, number> = {}
      for (let i = 0; i < 28; i++) {
        if (checkNumberMatch(i, item)) {
          newAmounts[i] = Math.round(1000 / ALL_ODDS[i])
        }
      }
      setBetAmounts(newAmounts)
    } else {
      setBetAmounts({})
    }
  }

  const toggleNumber = (num: number) => {
    setSelectedQuickItems([])
    const isSelected = selectedNumbers.includes(num)
    if (isSelected) {
      setSelectedNumbers((prev) => prev.filter((n) => n !== num))
      setBetAmounts((prev) => {
        const next = { ...prev }
        delete next[num]
        return next
      })
    } else {
      setSelectedNumbers((prev) => [...prev, num])
      setBetAmounts((prev) => ({
        ...prev,
        [num]: Math.round(1000 / ALL_ODDS[num]),
      }))
    }
  }

  const applyMultiplier = (multiplier: number, targetNum?: number) => {
    setBetAmounts((prev) => {
      const next = { ...prev }
      if (targetNum !== undefined) {
        if (next[targetNum]) {
          next[targetNum] = Math.round(next[targetNum] * multiplier)
        }
      } else {
        // Apply to all selected numbers
        Object.keys(next).forEach((key) => {
          const num = parseInt(key)
          next[num] = Math.round(next[num] * multiplier)
        })
      }
      return next
    })
  }

  const applyBaseAmount = (amount: number) => {
    setBetAmounts((prev) => {
      const next = { ...prev }
      const selectedNums = Object.keys(next).map((k) => parseInt(k))
      if (selectedNums.length === 0) return next

      // Calculate Sum(1 / Odds_i)
      const sumInverseOdds = selectedNums.reduce((sum, num) => sum + 1 / ALL_ODDS[num], 0)

      // Calculate constant winning amount W
      const winningAmount = amount / sumInverseOdds

      selectedNums.forEach((num) => {
        next[num] = Math.round(winningAmount / ALL_ODDS[num])
      })

      return next
    })
  }

  const clearAll = () => {
    setSelectedQuickItems([])
    setSelectedNumbers([])
    setBetAmounts({})
  }

  const invertSelection = () => {
    const currentHighlighted = Array.from({ length: 28 }, (_, i) => isNumberHighlighted(i))

    setSelectedQuickItems([])
    const newSelectedNumbers: number[] = []
    const newBetAmounts: Record<number, number> = {}

    for (let i = 0; i < 28; i++) {
      if (!currentHighlighted[i]) {
        newSelectedNumbers.push(i)
        newBetAmounts[i] = Math.round(1000 / ALL_ODDS[i])
      }
    }

    setSelectedNumbers(newSelectedNumbers)
    setBetAmounts(newBetAmounts)
  }

  const goBackToList = () => {
    setActiveTab('results')
    setShowBettingOverlay(false)
    if (gameSectionRef.current) {
      gameSectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const saveMode = (name: string) => {
    const count = Object.keys(betAmounts).length
    const total = Object.values(betAmounts).reduce((a, b) => a + b, 0)
    const newMode = {
      id: Date.now(),
      name,
      count,
      total,
      details: `投注 ${count} 个号码，总额 ${total} 金豆`,
      betAmounts: { ...betAmounts },
      selectedNumbers: [...selectedNumbers],
      selectedQuickItems: [...selectedQuickItems],
    }
    setSavedModes((prev) => [...prev, newMode])
  }

  const loadMode = (mode: any) => {
    setSelectedNumbers(mode.selectedNumbers || [])
    setSelectedQuickItems(mode.selectedQuickItems || [])
    setBetAmounts(mode.betAmounts || {})
  }

  const deleteMode = (id: number) => {
    setSavedModes((prev) => prev.filter((m) => m.id !== id))
  }

  const checkNumberMatch = (num: number, item: string) => {
    if (item === '单') return num % 2 !== 0
    if (item === '双') return num % 2 === 0
    if (item === '大') return num >= 14
    if (item === '小') return num < 14
    if (item === '中') return num >= 10 && num <= 17
    if (item === '边') return num < 10 || num > 17
    if (item === '大单') return num >= 14 && num % 2 !== 0
    if (item === '小单') return num < 14 && num % 2 !== 0
    if (item === '大双') return num >= 14 && num % 2 === 0
    if (item === '小双') return num < 14 && num % 2 === 0
    if (item === '单边') return (num < 10 || num > 17) && num % 2 !== 0
    if (item === '双边') return (num < 10 || num > 17) && num % 2 === 0
    if (item === '大边') return num > 17
    if (item === '小边') return num < 10
    if (item.endsWith('尾')) {
      const tailChar = item[0]
      const tail = parseInt(tailChar)
      if (!isNaN(tail)) return num % 10 === tail
      if (item === '大尾') return num % 10 >= 5
      if (item === '小尾') return num % 10 < 5
    }
    if (item.includes('余')) {
      const parts = item.split('余')
      const div = parseInt(parts[0])
      const rem = parseInt(parts[1])
      return num % div === rem
    }
    return false
  }

  const isNumberHighlighted = (num: number) => {
    if (selectedNumbers.includes(num)) return true
    if (selectedQuickItems.length === 0) return false
    return selectedQuickItems.some((item) => checkNumberMatch(num, item))
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Game Selection Bar */}
      <div className="bg-slate-100 border-b border-slate-800 sticky top-16 z-20 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-2 py-3 min-w-max">
          {GAMES.map((game) => (
            <button
              key={game.id}
              onClick={() => {
                setActiveGameId(game.id)
                setActiveTab('results')
              }}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 border flex-1 justify-center ${
                activeGameId === game.id
                  ? `bg-linear-to-r ${game.colors.primary} border-transparent text-white shadow-lg scale-105`
                  : 'bg-transparent border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200 hover:bg-slate-200'
              }`}
            >
              <Clock size={16} />
              {game.name}
            </button>
          ))}
        </div>
      </div>
      {/* Game Header Info */}
      <div ref={gameSectionRef} className="bg-slate-100 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start justify-between">
            {/* Left Side: Results */}
            <div className="flex-1 w-full">
              <div className="flex flex-wrap justify-center text-sm text-slate-400 mb-6 gap-8">
                <div className="flex items-center gap-2">
                  <span className={`font-bold ${activeGame.colors.accent}`}>
                    【{activeGame.name}】
                  </span>
                  <span>
                    第 <span className="text-white font-mono">3161903</span> 期 结果
                  </span>
                </div>
                <div className="font-mono text-slate-500">服务器时间: 2026-01-20 15:51:51</div>
              </div>
              <div className="flex items-center justify-center gap-6 mb-8">
                {[0, 4, 6].map((num, i) => (
                  <React.Fragment key={i}>
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold text-yellow-300 shadow-lg transform hover:scale-110 transition-transform duration-200
                      ${
                        i === 0
                          ? 'bg-linear-to-br from-blue-500 to-blue-600'
                          : i === 1
                            ? 'bg-linear-to-br from-purple-500 to-purple-600'
                            : 'bg-linear-to-br from-pink-500 to-pink-600'
                      }`}
                    >
                      {num}
                    </div>
                    {i < 2 && <span className="text-slate-500 text-2xl font-bold">+</span>}
                  </React.Fragment>
                ))}
                <span className="text-slate-500 text-2xl font-bold">=</span>
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg bg-linear-to-br from-red-500 to-red-700 transform hover:scale-110 transition-transform duration-200">
                  10
                </div>
              </div>
            </div>

            {/* Right Side: Timer */}
            <div className="shrink-0 w-full lg:w-auto flex flex-col items-center lg:items-end">
              <div className="text-slate-400 mb-4 text-sm">
                距离 第{' '}
                <span className={`font-mono font-bold text-lg ${activeGame.colors.accent}`}>
                  3161904
                </span>{' '}
                期 开奖剩
              </div>

              <div className="flex gap-2 mb-4">
                {['0', '0', ':', '0', '0', ':', '0', '9'].map((char, i) =>
                  char === ':' ? (
                    <div
                      key={i}
                      className="text-2xl font-bold text-orange-500/50 flex items-center pb-1 animate-pulse"
                    >
                      :
                    </div>
                  ) : (
                    <div
                      key={i}
                      className="w-10 h-12 bg-slate-200 border border-orange-500/50 rounded-lg flex items-center justify-center text-2xl font-bold text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.2)] backdrop-blur-xs"
                    >
                      {char}
                    </div>
                  ),
                )}
              </div>

              <div className="flex items-center gap-2 text-orange-500 font-bold animate-pulse">
                <span>🔥</span>
                <span>火热投注中</span>
                <span>🔥</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 border-b border-slate-800">
          {TABS.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id)
                  setShowBettingOverlay(false)
                  clearAll()
                }}
                className={`px-4 py-2 rounded-t-lg text-sm font-medium transition-all flex items-center gap-2 whitespace-nowrap relative top-px ${
                  activeTab === tab.id
                    ? `text-white border-b-2 ${activeGame.colors.border} ${activeGame.colors.lightBg}`
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Tab Content */}
        <div className="bg-slate-100 rounded-2xl border border-slate-800 overflow-hidden shadow-xl min-h-[400px]">
          {/* Past Results */}
          {activeTab === 'results' &&
            (showBettingOverlay ? (
              <div className="relative">
                <BettingMode
                  activeGame={activeGame}
                  selectedQuickItems={selectedQuickItems}
                  toggleQuickItem={toggleQuickItem}
                  setSelectedQuickItems={setSelectedQuickItems}
                  selectedNumbers={selectedNumbers}
                  setSelectedNumbers={setSelectedNumbers}
                  toggleNumber={toggleNumber}
                  isNumberHighlighted={isNumberHighlighted}
                  getBallColor={getBallColor}
                  savedModes={savedModes}
                  selectedMode={selectedMode}
                  setSelectedMode={setSelectedMode}
                  betAmounts={betAmounts}
                  applyMultiplier={applyMultiplier}
                  applyBaseAmount={applyBaseAmount}
                  clearAll={clearAll}
                  invertSelection={invertSelection}
                  goBackToList={goBackToList}
                  saveMode={saveMode}
                  loadMode={loadMode}
                  deleteMode={deleteMode}
                  isParticipation={true}
                />
              </div>
            ) : (
              <PastResults
                upcomingIssues={upcomingIssues}
                history={history}
                activeGame={activeGame}
                onJoinClick={() => setShowBettingOverlay(true)}
              />
            ))}

          {/* Betting Records */}
          {activeTab === 'records' && <BettingRecords activeGame={activeGame} />}

          {/* Betting Mode */}
          {activeTab === 'betting' && (
            <BettingMode
              activeGame={activeGame}
              selectedQuickItems={selectedQuickItems}
              toggleQuickItem={toggleQuickItem}
              setSelectedQuickItems={setSelectedQuickItems}
              selectedNumbers={selectedNumbers}
              setSelectedNumbers={setSelectedNumbers}
              toggleNumber={toggleNumber}
              isNumberHighlighted={isNumberHighlighted}
              getBallColor={getBallColor}
              savedModes={savedModes}
              selectedMode={selectedMode}
              setSelectedMode={setSelectedMode}
              betAmounts={betAmounts}
              applyMultiplier={applyMultiplier}
              applyBaseAmount={applyBaseAmount}
              clearAll={clearAll}
              invertSelection={invertSelection}
              goBackToList={goBackToList}
              saveMode={saveMode}
              loadMode={loadMode}
              deleteMode={deleteMode}
            />
          )}

          {/* Auto Bet */}
          {activeTab === 'auto' && (
            <AutoBet
              activeGame={activeGame}
              autoBetSubTab={autoBetSubTab}
              setAutoBetSubTab={setAutoBetSubTab}
              savedModes={savedModes}
            />
          )}

          {/* Game Trend */}
          {activeTab === 'trend' && (
            <GameTrend
              activeGame={activeGame}
              trendIssues={trendIssues}
              setTrendIssues={setTrendIssues}
              history={history}
              isNumberHighlighted={isNumberHighlighted}
            />
          )}

          {/* Game Rules */}
          {activeTab === 'rules' && <GameRules activeGame={activeGame} />}
        </div>
      </div>
    </div>
  )
}

export default GamesPage
