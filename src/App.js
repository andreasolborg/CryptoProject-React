import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import {BrowserRouter, Routes} from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ListPage from './components/ListPage';
import axios from 'axios';
import AnimatedPage from './components/AnimatedPage';
import { GET_API_URL } from './api';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { Route, Link } from 'react-router-dom';


function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [coins, setCoins] = useState([]); // coins is an array of objects

  
  useEffect(() => {
    axios.get("https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=100&api_key=8ae55d463e1bf8d38b4a502ca47512f9b1dec21533ad9af7acb993e8ba952bc2") // get all coins
      .then(res => {
        console.log(res);
        //setCoins(res.data); // set coins to the data returned from the api
        return res.data;
      })
      .catch(error => console.log(error));
  }, []);



/*useeffect with async await*/
   useEffect(() => {
     const fetchData = async () => {
       const result = await axios.get("https://api.coingecko.com/api/v3/coins/"); // get all coins
       setCoins(result.data); // set coins to the data returned from the api
     };
     fetchData(); // call the function
   }, []);

/*
   useEffect(() => {
      const fetchData2 = async () => {
        const result2 = await axios.get("https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=100&api_key=8ae55d463e1bf8d38b4a502ca47512f9b1dec21533ad9af7acb993e8ba952bc2"); // get all coins
        console.log(result2.data); // set coins to the data returned from the api
      };
      fetchData2(); // call the function
    }, []);
  */


  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes></Routes>
      <div className="App">
        <AnimatedPage>
          <SearchBar coins={coins} setSearchResults={setSearchResults} />
          <ListPage searchResults={searchResults} />
        </AnimatedPage>
      </div>
    </BrowserRouter>
  )
}

export default App;
