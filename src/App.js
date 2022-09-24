import './App.css';
import { useState, useEffect } from 'react';
import DataFetching from './components/DataFetching';
import Navbar from './components/navbar';
import { Routes, Route, BrowserRouter, useLocation, Navigate } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ListPage from './components/ListPage';
import Coin from './components/Coin';
import axios from 'axios';
import AnimatedPage from './components/AnimatedPage';


function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [coins, setCoins] = useState([]); // coins is an array of objects

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/')
      .then(res => {
        console.log(res);
        setCoins(res.data);
        return res.data;
      }).then(data => {
        setSearchResults(data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <BrowserRouter>
      {<Navbar />}
      <div className="App">
        <AnimatedPage>
          <SearchBar coins={coins} setSearchResults={setSearchResults} />
          <ListPage searchResults={searchResults} />
        </AnimatedPage>
        
      </div>
    </BrowserRouter>
  )
}


/*
  return (
    <div>
      
      <div className="box1">

        <img className="cryptoImage" src={coin.image.large} alt={coin.name} />
        <h1 className='header'>{coin.name}</h1>
        <p className='coinMarketDataUSD'>{coin.market_data.current_price.usd}$</p>
        <p className='coinMarketDataEUR'>{coin.market_data.current_price.eur}€</p>
      </div>
      <div className="box1">
        <img className="cryptoImage" src={coin.image.large} alt={coin.name} />
        <h1 className='header'>{coin.name}</h1>
        <p className='coinMarketDataUSD'>{coin.market_data.current_price.usd}$</p>
        <p className='coinMarketDataEUR'>{coin.market_data.current_price.eur}€</p>
      </div>
      <div className="box1">
        <img className="cryptoImage" src={coin.image.large} alt={coin.name} />
        <h1 className='header'>{coin.name}</h1>
        <p className='coinMarketDataUSD'>{coin.market_data.current_price.usd}$</p>
        <p className='coinMarketDataEUR'>{coin.market_data.current_price.eur}€</p>
      </div>
      <div className="box1">
        <img className="cryptoImage" src={coin.image.large} alt={coin.name} />
        <h1 className='header'>{coin.name}</h1>
        <p className='coinMarketDataUSD'>{coin.market_data.current_price.usd}$</p>
        <p className='coinMarketDataEUR'>{coin.market_data.current_price.eur}€</p>
      </div>
    </div>



  );
}*/

export default App;
