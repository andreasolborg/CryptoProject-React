import React from 'react'
import AnimatedPage from './AnimatedPage'
import './coin.css'
import { useState } from 'react'

const Coin = ({ coin }) => { // coin is an object

  return (
    <AnimatedPage>
      <a href={`/${coin.symbol.toLowerCase()}`} style={{ textDecoration: 'none' }}>
        <div className="box1">
          <div className="cryptoImageBox">
            <img className="cryptoImage" src={coin.image.large} alt={coin.name} /> {/*image is a property of coin*/}
          </div>
          <div className="coinName">
            <h1>{coin.name}</h1>
          </div>
          <div className="currentUSDPrice">
            <p>{coin.market_data.current_price.usd}$</p>
          </div>
          <div className="volumeUSD">
            <p>Market cap</p>
            <p>{coin.market_data.total_volume.usd}$</p>
          </div>
          <div className="dailyChange"> 
            {coin.market_data.price_change_percentage_24h < 0 ? ( // if price change is negative, return red text
              <p className="red">{coin.market_data.price_change_percentage_24h.toFixed(2)}%</p>
            ) : (
              <p className="green">{coin.market_data.price_change_percentage_24h.toFixed(2)}%</p>
            )}
          </div>
        </div>
      </a>
    </AnimatedPage>

  )
}

export default Coin