import axios from "axios";
import React, { useState, useEffect } from "react";


export function TopChartsData() {
  const [topCoin, setTopCoin] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const Crypto = async () => {
  //     const response = await axios.get(
  //       "https://appi.coingecko.com/ai/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline"
  //     );
  //     console.log(response.data)
  //     setTopCoin(response.data);
  //   };
  //   Crypto();
  // }, []);

  return (
    <div>
      <h3>Circulating Supply</h3>
    </div>
  );
}
