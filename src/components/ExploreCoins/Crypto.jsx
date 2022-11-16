import React, { useState, useEffect } from "react";
import Coin from "./Coin";
import axios from "axios";

import "./Crypto.css";

export function Crypto() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`
      )
      .then((response) => {
        console.log(response.data);
        setCoins([...response.data]);
      });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="coins_container">
        <div className="coin-search">
          <form>
            <input
              className="coin-input"
              type="text"
              onChange={handleChange}
              placeholder="Search"
            />
            <button className="Search_Btn">Search Currency</button>
          </form>
        </div>
        <div className="explore_coins_header">
        <h3>NAME</h3>
        <h3>SYMBOL</h3>
        <h3>PRICE</h3> 
        <h3>VOLUM</h3>
        <h3>24H CHANCE</h3>
        <h3>M. CAP</h3>
        </div>
        {filteredCoins.map((coin) => {
          const {id,name,current_price,symbol,total_volume,market_cap,image, price_change_percentage_24h} = coin;
          return ( 
            <Coin
              key={id}
              name={name}
              price={current_price}
              symbol={symbol}
              marketcap={total_volume}
              volume={market_cap}
              image={image}
              priceChange={price_change_percentage_24h}
            />
          );
        })}
      </div>
    </>
  );
}
