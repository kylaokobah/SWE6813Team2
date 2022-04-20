import React from 'react'
import Sidebar from './Sidebar'
import { Route,Routes } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext'
import DashboardPage from '../../pages/DashboardPage.js';
import findMatchPage from '../../pages/findMatchPage.js';
import MatchHistoryPage from '../../pages/MatchHistoryPage.js';
import ProfilePage from '../../pages/ProfilePage.js';
import OnlineUsers from '../OnlineUsers/OnlineUsers'
import ProtectedRoute from './protectedRoute';


function Main() {
 const { user, authIsReady } = useAuthContext()
  return (
    <>
     {authIsReady && (
    <ProtectedRoute>
     {user && <Sidebar />}
      <Sidebar/>
      <Routes>
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/findMatch' element={<findMatchPage/>} />
        <Route path='/match-history' element={<MatchHistoryPage />} />
        <Route path=''element={<DashboardPage />} />
      </Routes>
      {user && <OnlineUsers />}
    </ProtectedRoute>
  )}
  </>
  );
}

export default Main
