import { FC } from 'react'
import { Image, NoticeBar } from 'antd-mobile'
import { CheckOutline, LocationOutline } from 'antd-mobile-icons'
import BottomBar from '@/components/mobile/BottomBar'
const MobileIndex: FC = () => {
  const demoLongText =
    'wrewqrwerwerwqksakfsafmsmdfsjfewkkwefkwejjfweifwefkeiewfokmmfamsdfnasdnfsandfnsnfvsndn'
  const list = [
    { text: '网站公告', icon: LocationOutline },
    { text: 'VIP', icon: CheckOutline },
    { text: '使用豆卡', icon: CheckOutline },
    { text: '联系客服', icon: CheckOutline },
    { text: '猜猜210', icon: CheckOutline },
    { text: '哈希100秒', icon: CheckOutline },
    { text: '猜猜台湾', icon: CheckOutline },
    { text: 'WMD5-70秒', icon: CheckOutline },
    { text: '娱乐争霸', icon: CheckOutline },
    { text: '牛人榜', icon: CheckOutline },
    { text: '切换线路1', icon: CheckOutline },
    { text: '切换线路2', icon: CheckOutline },
    { text: '安卓APP下载', icon: CheckOutline },
    { text: '苹果APP下载', icon: CheckOutline },
  ]
  return (
    <div className="flex flex-col w-full bg-color text-sm text-primary h-full">
      <Image
        src="https://pcdd-app.oss-cn-hangzhou.aliyuncs.com/advimg/20231205/2023120515210573249046.jpg"
        width="fit"
      ></Image>
      <NoticeBar content={demoLongText} color="alert" />
      <div className="p-2.5 bg-white mt-2 mb-1">
        <div>
          <span>辉煌腾达</span>
          返奖金额：
          <span>80,963,366</span>
        </div>
        <div>
          <span>2026-08-05 天选中奖用户</span>
          <span>查看活动说明</span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-[2px]">
        {list.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.text}
              className="h-[85px] flex flex-1 flex-col justify-center items-center bg-white"
            >
              <Icon className="text-2xl text-blue-500" />

              <span className="mt-2">{item.text}</span>
            </div>
          )
        })}
      </div>
      <BottomBar />
    </div>
  )
}

export default MobileIndex
