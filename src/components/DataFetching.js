import React, { useState, useEffect } from "react";
import axios from "axios";
import { GET_API_URL } from '../api';
import SearchBar from './SearchBar';

function DataFetching() {
    const [coins, setCoins] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

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
        
        <div className="App">
             <SearchBar coins={coins} setSearchResults={setSearchResults}/>
            <ul className="list">
                {coins.map(coin => (
                        <div className="box1">
                            <img className="cryptoImage" src={coin.image.large} alt={coin.name} />
                            <h1 className='header'>{coin.name}</h1>
                            <p className='coinMarketDataUSD'>{coin.market_data.current_price.usd}$</p>
                            <p className='coinMarketDataEUR'>{coin.market_data.current_price.eur}€</p>                            
                        </div>

                ))}
            </ul>
        </div>
    );
}

export default DataFetching;