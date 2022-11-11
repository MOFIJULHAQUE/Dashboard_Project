import React, { useState, useEffect } from 'react'
import {CaretLeftOutlined}  from  "@ant-design/icons"
import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import axios from "axios";
export const Demo = () => {
  const [post, setPost] =useState([])

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
         console.log("Response",response.data);
         setPost([post, ...response.data])
        // console.log(response.data);
        // setPost([...response.data]);
      });
  }, []);


  return (
    <>
<h1>Data:-{Symbol}</h1>
      <Button type="primary" icon={<SearchOutlined />}>
      Search
    </Button>
    <Button icon={<SearchOutlined />}>Search</Button>
      <h1> Demo by Rajesh check branch </h1>
     
      <CaretLeftOutlined />
    </>
  )
}











