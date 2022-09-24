import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import {BrowserRouter} from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ListPage from './components/ListPage';
import axios from 'axios';
import AnimatedPage from './components/AnimatedPage';
import { GET_API_URL } from './api';
import ResponsiveAppBar from './components/ResponsiveAppBar';


function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [coins, setCoins] = useState([]); // coins is an array of objects

  /*
  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/") // get all coins
      .then(res => {
        console.log(res);
        setCoins(res.data); // set coins to the data returned from the api
        return res.data;
      }).then(data => {
        setSearchResults(data);
      })
      .catch(error => console.log(error));
  }, []);
*/


/*useeffect with async await*/
   useEffect(() => {
     const fetchData = async () => {
       const result = await axios.get("https://api.coingecko.com/api/v3/coins/"); // get all coins
       setCoins(result.data); // set coins to the data returned from the api
     };
     fetchData(); // call the function
   }, []);




  return (
    <BrowserRouter>
      <ResponsiveAppBar />
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
