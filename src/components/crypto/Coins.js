import React, { useState } from 'react'
import axios from "axios";
import Coin from './Coin';
import Search from './Search';
import Spinner from '../layout/Spinner';

const Coins = ({ title }) => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useState(() => {
    const getCrypto = async () => {
      try {
        const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false");
        if(!loading) {
          <Spinner />
        } else {
          setLoading(false);
          setCoins(res.data)
        }
      } catch (error) {
        throw new Error(error);
      }
    }
    getCrypto();
  }, [])

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const filteredCoins = coins.filter(coin => {
    return coin.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="mt-5">
      <h1 className="h1 text-center mb-5">{title}</h1>
      <Search handleChange={handleChange} />
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Coin</th>
            <th scope="col">Symbol</th>
            <th scope="col">Price</th>
            <th scope="col">High 24h</th>
            <th scope="col">Low 24h</th>
            <th scope="col">Price Change</th>
            <th scope="col">Mkt Cap</th>
          </tr>
        </thead>
        <tbody>
          {loading ? <Spinner /> : filteredCoins.map(coin => (
            <Coin 
              key={coin.symbol}
              rank={coin.market_cap_rank}
              coin={coin.name} 
              image={coin.image}
              price={coin.current_price}
              high={coin.high_24h}
              low={coin.low_24h}
              priceChange={coin.price_change_percentage_24h}
              mktCap={coin.market_cap}
              symbol={coin.symbol}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

Coins.defaultProps = {
  title: 'Top 200 Coins'
}

export default Coins
