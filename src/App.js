import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { Route, Link } from 'react-router-dom';
import SearchPage from './pages/SearchPage/SearchPage';
import BitcoinPage from './pages/BitcoinPage/BitcoinPage';


function App() {

  return (
    <BrowserRouter> 
      <ResponsiveAppBar />
      <Routes>
        <Route path="/home" element={<SearchPage />} />
        <Route path="/bitcoin" element={<BitcoinPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
