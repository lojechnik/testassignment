import React from 'react';
import './App.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import AppWrapper from './AppWrapper';
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppWrapper />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
