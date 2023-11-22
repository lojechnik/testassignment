import React from 'react'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Auth from './pages/auth'
import { Navigate } from 'react-router-dom';
import Form from './components/form/form';
import Home from './pages/home'
import { useProtectedRoute } from './hooks/useProtectedRoute';
export default function AppWrapper() {
  const HomeProtectedRoute = useProtectedRoute(Home)
  const FormProtected = useProtectedRoute(Form)
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth" />} />
      <Route path="/auth" element={<Auth />}></Route>
      <Route path="/home" element={<HomeProtectedRoute />}>
      </Route>
      <Route path={"/form/:userId"} element={<FormProtected />}> </Route>


    </Routes>
  )
}
