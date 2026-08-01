import React from 'react'

interface GameRulesProps {
  activeGame: any
}

const GameRules: React.FC<GameRulesProps> = ({ activeGame }) => {
  return (
    <div className="p-8 text-slate-400 space-y-4">
      <h3 className="text-lg font-bold text-primary">游戏规则说明</h3>
      <p>
        1. {activeGame.name}每{activeGame.duration}秒开奖一次，全天24小时不间断。
      </p>
      <p>2. 开奖号码为0-9的5个数字，根据这5个数字的和值判断大小单双。</p>
      <p>3. 和值大于等于23为"大"，小于等于22为"小"。</p>
      <p>4. 和值为奇数时为"单"，偶数时为"双"。</p>
      <p>5. 玩家可选择大小单双或直接选择数字进行投注。</p>
    </div>
  )
}

export default GameRules
