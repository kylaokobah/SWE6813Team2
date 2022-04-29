import React from 'react'
import Sidebar from './Sidebar'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext'
import DashboardPage from '../../pages/DashboardPage.js';
//import findMatchPage from '../../pages/findMatchPage';
import MatchHistoryPage from '../../pages/MatchHistoryPage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage.js';
import ProtectedRoute from './protectedRoute';


function Main() {
const { user, authIsReady } = useAuthContext()
  return (
    <>
     {authIsReady && (
    <ProtectedRoute>
      <Routes>
        <Route path='/profile' element={
        <>

        <ProfilePage />
        </>
        } />
        <Route path='/findMatch' element={
        <>

        <findMatchPage/>
        </>
        } />
        <Route path='/match-history' element={
        <>

        <MatchHistoryPage />
        </>
        } />

        <Route path='/dashboard' element={
        <>
         <DashboardPage />

        </>
        } />
      </Routes>
    </ProtectedRoute>
    )}
 </>
  );
}

export default Main
