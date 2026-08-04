import { createBrowserRouter, Navigate } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import MobileLayout from '@/layouts/MobileLayout'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from '@/pages/HomePage'
import GamesPage from '@/pages/GamesPage'
import MallPage from '@/pages/MallPage'
import RankPage from '@/pages/RankPage'
import ProfilePage from '@/pages/ProfilePage'
import VIPPage from '@/pages/VIPPage'
import InvitePage from '@/pages/InvitePage'
import MobileLogin from '@/pages/MobileLogin'
import MobileReg from '@/pages/MobileReg'
import GoForgetPass from '@/pages/GoForgetPass'
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: '/home',
        element: <HomePage />,
      },
      {
        path: '/games',
        element: <GamesPage />,
      },
      {
        path: '/mall',
        element: <MallPage />,
      },
      {
        path: '/leaderboard',
        element: <RankPage />,
      },
      {
        path: '/invite',
        element: <InvitePage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
      {
        path: '/vip',
        element: <VIPPage />,
      },
    ],
  },
  {
    path: '/m',
    element: <MobileLayout />,
    children: [
      {
        path: 'login',
        element: <MobileLogin />,
      },
      {
        path: 'reg',
        element: <MobileReg />,
      },
      {
        path: 'goforgetpass',
        element: <GoForgetPass />,
      },
    ],
  },
])

export default router
