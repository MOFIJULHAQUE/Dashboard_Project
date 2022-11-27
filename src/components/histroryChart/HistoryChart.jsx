import React from 'react'

import { HistoryHeader } from '../historyHeader/HistoryHeader'
import { OpenClose } from '../openCloseChart/OpenClose'
import { TradeHistory } from '../tradehistory/TradeHistory'

import "./HistoryChart.css"

export  function HistoryChart() {
  return (
    <div> 
       <HistoryHeader/>
      <TradeHistory/>
      <OpenClose/>
     
      </div>
  )
}

