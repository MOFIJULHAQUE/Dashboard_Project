import axios from "axios";
import { useEffect, useState } from "react";

import "./TopBuyTopSell.css";

export function TopBuyTopSell() {
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
        console.log(response) ;
         console.log(response.data[Object.keys(response.data)[1]][Object.keys(response.data[Object.keys(response.data)[1]])[0]]["1. open"]);
        // setPost([response.data[Object.keys(response.data)[1]][Object.keys(response.data[Object.keys(response.data)[1]])[0]]["1. open"]])
        //  console.log(setPost)
         setPost([...response.data]);
      });
  }, []);  //Time Series (5min)   2022-11-11 10:50:00 open:



  return (
    <>
    
      {/* <p>{post["Meta Data"]["1. Information"]}</p> */}
      <div className="top_buySell_container">
        <div className="current_balance">
          Current Investment
          <h2>$45,665</h2>
        </div>
        <div className="top_buy">
          Top Buy
          <h2>$12,543</h2>
        </div>
        <div className="top_sell">
          Top Sell
          <h2>$40,876</h2>
        </div>
      </div>
    </>
  );
}
