import React from 'react';
import './App.css';

import { store } from './redux/store';
import { Provider } from 'react-redux';

import { Route, BrowserRouter, Routes } from "react-router-dom";
import Auth from './pages/auth'
import Home from './pages/home'

const App = () => {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<Auth />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
