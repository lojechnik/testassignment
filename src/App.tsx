import React from 'react';
import './App.css';
import { ConditionalRoute } from './router/conditional-route/conditionalroute';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Auth from './pages/auth'
import { useProtectedRoute } from './hooks/useProtectedRoute';
import { RootState } from './redux/store';
import Home from './pages/home'
import { useSelector } from 'react-redux';
const App = () => {
  const HomeProtectedRoute = useProtectedRoute(Home)
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />}></Route>
         <Route path="/home" element={<HomeProtectedRoute /> }/>
         </Routes>
      </BrowserRouter>
      </Provider>
  );
}

export default App;
