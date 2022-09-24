import React from 'react'
import AnimatedPage from './AnimatedPage'

const Coin = ({ coin }) => { // coin is an object
  return (
    <AnimatedPage>
    <article>
      <div className="box1">
        <img className="cryptoImage" src={coin.image.large} alt={coin.name} /> {/*image is a property of coin*/}
        <h1 className='header'>{coin.name}</h1>
        <p className='coinMarketDataUSD'>{coin.market_data.current_price.usd}$</p>
        <p className='coinMarketDataEUR'>{coin.market_data.current_price.eur}€</p>
      </div>
    </article>
    </AnimatedPage>
  )
}

export default Coin