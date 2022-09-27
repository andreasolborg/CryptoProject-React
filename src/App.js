import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { Route, Link } from 'react-router-dom';
import SearchPage from './pages/SearchPage/SearchPage';
import BitcoinPage from './pages/BitcoinPage/BitcoinPage';
import Coin from './components/Coin';


function App() {

  return (
    <BrowserRouter> 
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/home" element={<SearchPage />} />
        <Route path="/btc" element={<BitcoinPage />} />
        <Route path="/eth" element={<BitcoinPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
