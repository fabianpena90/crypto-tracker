import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Coin = ({ rank, coin, image, price, high, low, priceChange,mktCap, symbol }) => {
  return (
    <tr key={symbol}>
      <td>{rank}</td>
      <td><Link to="/charts" className="links"> <img src={image} alt={coin} style={{width: '20px'}} />{' '}{coin}</Link></td>
      <td>{symbol.toUpperCase()}</td>
      <td>${price.toLocaleString()}</td>
      <td>${high.toLocaleString()}</td>
      <td>${low.toLocaleString()}</td>
      {priceChange < 0 ? ( <td className="red">${priceChange.toFixed(2)}</td> ) : ( <td className="green">${priceChange.toFixed(2)}</td> )}
      <td>${mktCap.toLocaleString()}</td>
    </tr>
  )
}

Coin.propTypes = {
  rank: PropTypes.number.isRequired,
  coin: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  high: PropTypes.number.isRequired,
  low: PropTypes.number.isRequired,
  priceChange: PropTypes.number.isRequired,
  mktCap: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired
}

export default Coin
