import { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar';
import ListPage from '../../components/ListPage';
import axios from 'axios';
import AnimatedPage from '../../components/AnimatedPage';



//
export default function SearchPage() {
    
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


    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get("https://api.coingecko.com/api/v3/coins/"); // get all coins
            setCoins(result.data); // set coins to the data returned from the api
            setSearchResults(result.data); // set search results to the data returned from the api
        };
        fetchData(); // call the function
    }, []);
    

    

    return (
        <div>
            <AnimatedPage>
                <SearchBar coins={coins} setSearchResults={setSearchResults} />
                <ListPage searchResults={searchResults} /> 
            </AnimatedPage>
        </div>
    )
}
