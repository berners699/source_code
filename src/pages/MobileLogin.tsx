import { FC } from 'react'
import { NavBar, Space, Toast } from 'antd-mobile'
const back = () => {}

const MobileLogin: FC = () => {
  return (
    <div className="flex justify-center items-center">
      <NavBar onBack={back}>登录</NavBar>
    </div>
  )
}

export default MobileLogin
