import React from "react";
import { NavLink } from "react-router-dom";

import img1 from '../../Assets/LossChart.png'
import img2 from '../../Assets/HighChart2.png'
import img3 from '../../Assets/Coins2.jpg'

import "./TopCoins.css";

export function TopCoinsData({
  image,
  symbol,
  price_change_percentage_24h,
  price_change_24h,
  total_volume,
  current_price,
}) {
  return (
    <>
      <div className="top_coins_container">
        <div className="coin_box">
          <div className="top_coin_data">
            <img src={image} width={50} height={50} />
            <div className="coin_symbol">
              <p className="coins_symbol">{symbol.toUpperCase()}/USD</p>
              {price_change_percentage_24h < 0 ? (
                <p className="coin-percent red  coins_symbol">
                  {price_change_percentage_24h.toFixed(2)}%
                </p>
              ) : (
                <p className="coin-percent green coins_symbol">
                  {price_change_percentage_24h.toFixed(2)}%
                </p>
              )}
            </div>
          </div>
          <div className="CoinProfitLossChart">
            <div className="coin_price">
              <div className="chart_profit_loss">
                {price_change_24h < 0 ? (
                  <p className="coin-percent red  ProfitLoss comman">
                    {price_change_24h.toFixed(3)}
                  </p>
                ) : (
                  <p
                    className="coin-percent green ProfitLoss comman"
                    color={(11, 240, 72)}
                  >
                    +{price_change_24h.toFixed(3)}
                  </p>
                )}
                {price_change_24h < 0 ? (
                  <img
                    src={img1}
                    alt="Chart"
                  />
                ) : (
                  <img
                    src={img2}
                    alt="Chart"
                  />
                )}
              </div>
              <p className=" comman">{total_volume}</p>
              <p className="Price comman">${current_price.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="all_coins coin_box">
        <img className="all_coins_logo" src={img3} alt="coins" />
        <h3 className="ExploreCoin">Crypto Exchange</h3>
        <p className="ExploreCoin">
          Trusted by millions, fees and fast traders
        </p>
        <div className="explore_coins_btn">
          <NavLink to="/coins" className="ExploreCoins">
            Explore Coins
          </NavLink>
        </div>
      </div>
    </>
  );
}
