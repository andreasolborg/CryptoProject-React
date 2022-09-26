import React, { useMemo } from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './bitcoinPage.css';
import AnimatedPage from '../../components/AnimatedPage';
import Moment from 'react-moment';
import { useTable } from "react-table"
import tw from "twin.macro"
import Coin from '../../components/Coin';
import { Table } from "react-bootstrap";




function BitcoinPage() {
    const [bitcoinData, setBitcoinData] = useState([]); // coins is an array of objects // map through search results and return Coin component for each coin
    const urlDirectory = window.location.pathname.split("/")[1]; // get the url directory

    //pagination variables
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(20);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = bitcoinData.slice(indexOfFirstPost, indexOfLastPost);

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    }


    //pagination logic
    const pages = [];
    for (let i = 1; i <= Math.ceil(bitcoinData.length / postsPerPage); i++) { // for each page, push a button to the pages array
        pages.push(i);
    }

    const renderPageNumbers = pages.map(number => { // map through pages array and return a button for each page
        return (
            <li
                key={number}
                id={number}
                onClick={handleClick}
            >
                {number}
            </li>
        );
    });

    useEffect(() => {
        const fetchData2 = async () => {
            const result2 = await axios.get(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=${urlDirectory}&tsym=USD&limit=100&api_key=8ae55d463e1bf8d38b4a502ca47512f9b1dec21533ad9af7acb993e8ba952bc2`); // get all coins
            const list = result2.data.Data.Data.reverse()
            setBitcoinData(list); // set coins to the data returned from the api
            console.log(result2.data); // set coins to the data returned from the api
        };
        fetchData2(); // call the function
    }, []);


    return (
        <AnimatedPage>
            <div className="coinContainer">
                <AnimatedPage>
                    <ul className="pageNumbers">
                        {renderPageNumbers}
                    </ul>
                </AnimatedPage>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Date: </th>
                            <th onClick={() => console.log("Sorting function")}>
                                Open value ($)
                            </th>
                            <th>High: </th>
                            <th>Low: </th>
                            <th>Close: </th>
                            <th>Volume: </th>
                        </tr>
                    </thead>
                    <tbody>
                        {bitcoinData.length ? (
                            currentPosts.map((coin) => {
                                return (
                                    <tr key={coin.time}>
                                        <td><Moment unix>{coin.time}</Moment></td>
                                        <td>{coin.open}</td>
                                        <td>{coin.high}</td>
                                        <td>{coin.low}</td>
                                        <td>{coin.close}</td>
                                        <td>{coin.volumefrom}</td>
                                    </tr>
                                )
                            })
                        ) : (
                            <></>
                        )}
                    </tbody>
                </Table>

            </div>
        </AnimatedPage>

    )
}

export default BitcoinPage