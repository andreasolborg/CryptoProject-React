import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './bitcoinPage.css';


function BitcoinPage() {
    const [bitcoinData, setBitcoinData] = useState([]); // coins is an array of objects // map through search results and return Coin component for each coin




    
    useEffect(() => {
        const fetchData2 = async () => {
            const result2 = await axios.get("https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=100&api_key=8ae55d463e1bf8d38b4a502ca47512f9b1dec21533ad9af7acb993e8ba952bc2"); // get all coins
            setBitcoinData(result2.data.Data.Data); // set coins to the data returned from the api
            console.log(result2.data.Data.Data); // set coins to the data returned from the api
        };
        fetchData2(); // call the function
    }, []);


    return (
            <div className="coinContainer">
                {bitcoinData.map((data) =>
                    <ul className="coinBox">
                        <li className="coinName">Date: {data.time}</li>
                        <li className="coinName">Open: {data.open}</li>
                        <li className="coinName">High: {data.high}</li>
                        <li className="coinName">Low: {data.low}</li>
                        <li className="coinName">Close: {data.close}</li>
                        <li className="coinName">Volume: {data.volumefrom}</li>

                    </ul>
                )}
            </div>

    )
}

export default BitcoinPage