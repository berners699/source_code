import { createBrowserRouter, Navigate } from 'react-router-dom'
import MainLayout from '@/components/MainLayout'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from '@/pages/HomePage'
import GamesPage from '@/pages/GamesPage'
import MallPage from '@/pages/MallPage'
import RankPage from '@/pages/RankPage'
import ProfilePage from '@/pages/ProfilePage'
import VIPPage from '@/pages/VIPPage'

import InvitePage from '@/pages/InvitePage'
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
])

export default router
