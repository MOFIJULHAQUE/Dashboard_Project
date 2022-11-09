import React from 'react'
import {CaretLeftOutlined}  from  "@ant-design/icons"
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';

const Demo = () => {

  return (
    <>
      <Button type="primary" icon={<SearchOutlined />}>
      Search
    </Button>
    <Button icon={<SearchOutlined />}>Search</Button>
      <h1> Demo by Rajesh check branch </h1>
     
      <CaretLeftOutlined />
    </>
  )
}

export default Demo  
