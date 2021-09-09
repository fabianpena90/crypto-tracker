import React, { useEffect, useState } from "react";
import axios from "axios";
import ExchangeItem from "../crypto/ExchangeItem";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  useEffect(() => {
    const getExchanges = async () => {
      try {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/exchanges"
        );
        setExchanges(res.data);
      } catch (err) {
        throw new Error(err);
      }
    };
    getExchanges();
  }, []);

  return (
    <div className="pt-5">
      {exchanges.map((exchange) => (
        <ExchangeItem
          key={exchange.id}
          image={exchange.image}
          name={exchange.name}
          website={exchange.url}
          trustCompany={exchange.trust_score}
          yearEstablished={exchange.year_established}
        />
      ))}
    </div>
  );
};

export default Exchanges;
