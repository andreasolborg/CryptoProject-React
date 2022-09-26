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


    const Table = tw.table`
  table-fixed
  text-base
  text-gray-900
`;

    const Thead = tw.thead`
  p-2
  text-left
`;

    const Tr = tw.tr`
border
border-green-500
`;

    const Th = tw.th`
border
border-green-500
p-2`;

    const Tbody = tw.tbody`
`;

    const Td = tw.td`
border
border-green-500
p-5
`;


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
    for (let i = 1; i <= Math.ceil(bitcoinData.length / postsPerPage); i++) {
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
            setBitcoinData(result2.data.Data.Data); // set coins to the data returned from the api
            console.log(result2.data); // set coins to the data returned from the api
        };
        fetchData2(); // call the function
    }, []);

    const columns = useMemo(() => [
        {
            Header: "Date",
            accessor: "time",
            Cell: ({ value }) => <Moment unix format="MM/DD/YYYY">{value}</Moment>
        },
        {
            Header: "Open",
            accessor: "open",
        },
        {
            Header: "High",
            accessor: "high",
        },
        {
            Header: "Low",
            accessor: "low",
        },
        {
            Header: "Close",
            accessor: "close",
        },
        {
            Header: "Volume",
            accessor: "volumefrom",
        },
        {
            Header: "Market Cap",
            accessor: "volumeto",
        },
    ], [])

    const tableInstance = useTable({ columns, data: currentPosts })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

    return (
        
        <AnimatedPage>
            <div className="coinContainer">
            <AnimatedPage>
                    <ul className="pageNumbers">
                        {renderPageNumbers}
                    </ul>
                </AnimatedPage>
                <Table className="coinBox" {...getTableProps()}>
                    <Thead className='tableHead'>
                        {headerGroups.map(headerGroup => (
                            <Tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => ( // map through columns and return a header for each column
                                    <Th {...column.getHeaderProps( /*SOOOOOOOOOOOOOOOORT */)}>
                                        {column.render('Header')}
                                        </Th> // render the header for each column
                                ))}
                            </Tr>
                        ))}
                    </Thead>
                    <Tbody {...getTableBodyProps()}>
                        {rows.map(row => {
                            prepareRow(row)
                            return (
                                <Tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                                    })}
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
                {/*
                {currentPosts.map((data) =>
                    <AnimatedPage>
                        <li className="coinBox">
                            <ul className="coinName">Date: <Moment unix format="YYYY/MM/DD">{data.time}</Moment></ul>
                            <li className="coinName">Open: {data.open}</li>
                            <li className="coinName">High: {data.high}</li>
                            <li className="coinName">Low: {data.low}</li>
                            <li className="coinName">Close: {data.close}</li>
                            <li className="coinName">Volume: {data.volumefrom}</li>

                        </li>


                    </AnimatedPage>

                )}
                */}

            </div>
        </AnimatedPage>

    )
}

export default BitcoinPage