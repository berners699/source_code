import { FC } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
const MainLayout: FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-white font-sans  selection:text-white flex flex-col">
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
