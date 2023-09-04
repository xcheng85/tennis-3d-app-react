import React from 'react';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { Header } from './core/Header';
function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
