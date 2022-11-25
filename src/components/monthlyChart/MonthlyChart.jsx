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

export function MonthlyChart() {
  const [monthlyData, setMonthlyData] = useState([
   {
     name: "Prices",
     prices: 6466
  }
  ]);

  useEffect(() => {
    const monthlyData = async () => {
      await axios
        .get(
          "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=USD&days=5&interval=daily"
        )
        .then((res) => {
            //console.log("resp",res.data.prices)
          setMonthlyData([...res.data.prices]);
        });
    };
    monthlyData();
  }, []);
  // useEffect(()=>{
  //    console.log("m",monthlyData)
  // },[monthlyData])
//  {monthlyData.map((item)=>{
//   return(
//      monthlyData.push(item[1]) 
//   )
//  })}
 //console.log("monthlyD",monthlyData)
  return (
    <BarChart
      width={500}
      height={300}
      data={monthlyData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="prices" stackId="a" fill="#8884d8" />
      {/* <Bar dataKey="prices" fill="#82ca9d" /> */}
     
    </BarChart>
  );
}
