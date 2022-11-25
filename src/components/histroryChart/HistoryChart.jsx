import axios from "axios";
import React, { useState, useEffect } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export function HistoryChart() {
  const [historyData, setHistoryData] = useState([
    {
    "Time Series (5min)":"2022-11-23 20:00:00",
    "1. open": "16354",
    "2. high": "16853",
    "3. low": "15363",
    "4. close": "15667"
    },
  ]);
 
  useEffect(() => {
    axios
      .get(
        `https://alpha-vantage.p.rapidapi.com/query`,{
          params: {
            interval: '5min',
            function: 'TIME_SERIES_INTRADAY',
            symbol: 'MSFT',
            datatype: 'json',
            output_size: 'compact'
          },
   headers: {
    'X-RapidAPI-Key': '82a76f8ad3mshe05dc70539423d5p18ba88jsndb26b70a6c41',
    'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
   }
        })
      .then((response) => {
        const result = (response.data["Time Series (5min)"]["2022-11-23 20:00:00"])
        //console.log("result",result)
         //console.log("Response",response.data["Time Series (5min)"]["2022-11-23 20:00:00"]);
         setHistoryData([historyData, ...result])
      });
  }, []);
//   useEffect(()=>{
// console.log("historyData",historyData)
//   },[historyData])

// {
//   historyData.map((item)=>{
//     console.log("item",item)
//   })
// }

  return (
    <BarChart
      width={500}
      height={300}
      data={historyData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Time Series (5min)" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="1. open" stackId="a" fill="#8884d8" />
      <Bar dataKey="2. high" fill="#82ca9d" />
      <Bar dataKey="3. low" fill="#ffc658" />
      <Bar dataKey="4. close" fill="#ffc658" />
    </BarChart>
  );
}
