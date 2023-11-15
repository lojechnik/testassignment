import React from 'react'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Auth from './pages/auth'
import Home from './pages/home'
import { useProtectedRoute } from './hooks/useProtectedRoute';
export default function AppWrapper() {
    const HomeProtectedRoute = useProtectedRoute(Home)

  return (
    <Routes>
    <Route path="/auth" element={<Auth />}></Route>
    <Route path="/home" element={<HomeProtectedRoute /> }/>
    </Routes>
  )
}
