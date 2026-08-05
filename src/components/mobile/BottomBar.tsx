import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { AntOutline } from 'antd-mobile-icons'
const BottomBar: FC = () => {
  const navigate = useNavigate()
  const jumpPage = (path: string) => {
    navigate('/m/' + path)
  }
  return (
    <footer className="flex justify-between mt-auto h-[50px] bg-white">
      <div
        onClick={() => jumpPage('index')}
        className="flex-1 flex flex-col items-center justify-center"
      >
        <AntOutline className="text-fuchsia-700 text-2xl" />
        <span>首页</span>
      </div>
      <div
        onClick={() => jumpPage('shop')}
        className="flex-1 flex justify-center items-center flex-col"
      >
        <AntOutline className="text-amber-950 text-2xl" />
        <span>商城</span>
      </div>
      <div
        onClick={() => jumpPage('me')}
        className="flex-1 flex justify-center items-center flex-col align-middle"
      >
        <AntOutline className="text-2xl" />
        <span>我的</span>
      </div>
    </footer>
  )
}

export default BottomBar
