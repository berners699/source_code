import { FC, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const MobileLayout: FC = () => {
  return (
    <div className="sm:text-2xl md:text-2xl lg:text-4xl xl:text-2xl 2xl:text-3xl h-full">
      <Outlet />
    </div>
  )
}

export default MobileLayout
