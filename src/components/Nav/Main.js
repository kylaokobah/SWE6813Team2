import React from 'react'
import Sidebar from './Sidebar'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext'
import DashboardPage from '../../pages/DashboardPage.js';
import findMatchPage from '../../pages/findMatchPage';
import MatchHistoryPage from '../../pages/MatchHistoryPage.js';
import ProfilePage from '../../pages/ProfilePage.js';
import ProtectedRoute from './protectedRoute';


function Main() {
const { user, authIsReady } = useAuthContext()
  return (
    <>
    <ProtectedRoute>
      <Routes>
        <Route path='/profile' element={
        <>
         {user && <Sidebar />}
        <ProfilePage />
        </>
        } />
        <Route path='/findMatch' element={
        <>
        {user && <Sidebar />}
        <findMatchPage/>
        </>
        } />
        <Route path='/match-history' element={
        <>
         {user && <Sidebar />}
        <MatchHistoryPage />
        </>
        } />

        <Route path='/dashboard' element={
        <>
        user ? <DashboardPage /> : <Navigate to='' />}
         {user && <Sidebar />}
        </>
        } />
      </Routes>
    </ProtectedRoute>
 </>
  );
}

export default Main
