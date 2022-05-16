import React, { useEffect, useState } from "react";
import ExchangeItem from "../crypto/ExchangeItem";
import { axiosInstance } from "../utils/axiosInstance";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  useEffect(() => {
    const getExchanges = async () => {
      try {
        const { data } = await axiosInstance("api/v3/exchanges")
        setExchanges(data);
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
