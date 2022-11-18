import axios from "axios";
import { useEffect, useState } from "react";

import { HighPriceChart } from "./HighPriceChart";
import { TopChartsData } from "./TopChartsData";

import "./TopChart.css";

export function TopChart() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get(`https://alpha-vantage.p.rapidapi.com/query`, {
        params: {
          interval: "5min",
          function: "TIME_SERIES_INTRADAY",
          symbol: "MSFT",
          datatype: "json",
          output_size: "compact",
        },
        headers: {
          "X-RapidAPI-Key":
            "82a76f8ad3mshe05dc70539423d5p18ba88jsndb26b70a6c41",
          "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
        },
      })
      .then((response) => {
         setPost([...response.data["Time Series (5min)"]["2022-11-17 20:00:00"]["1. open"]]);
      });
  }, []);  
  return (
    <>
      <div className="top_buySell_container">
        <div className="current_balance">
          <TopChartsData/>
          <h2>Volume</h2>
        <HighPriceChart />
        </div>
        <div className="top_buy">
          <h2>Top Buy</h2>
          <HighPriceChart/>
        </div>
        <div className="top_sell">
          <h2>Top Sell</h2>
          <HighPriceChart/>
        </div>
      </div>
    </>
  );
}
