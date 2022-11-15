import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Symbols } from "recharts";

import "./AllCoins.css";

export function AllCoins() {
  const [topCoin, setTopCoin] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
      )
      .then((response) => {
        setTopCoin([...response.data]);
      });
  }, []);

  return (
    <div className="top_coin_card">
      {topCoin.map((coin, i) => {
        if (i < 3) {
          return (
            <>
              <div className="top_coins_container">
                <div className="coin_box">
                  <div className="top_coin_data">
                    <img src={coin.image} width={50} height={50} />
                    <div className="coin_symbol">
                      <p className="coins_symbol">
                        {coin.symbol.toUpperCase()}/USD
                      </p>
                      {coin.price_change_percentage_24h < 0 ? (
                        <p className="coin-percent red  coins_symbol">
                          {coin.price_change_percentage_24h.toFixed(2)}%
                        </p>
                      ) : (
                        <p className="coin-percent green coins_symbol">
                          {coin.price_change_percentage_24h.toFixed(2)}%
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="coin_price">
                    {/* <p className="ProfitLoss comman">Market_Rank {coin.market_cap_rank}</p> */}
                    {coin.price_change_24h < 0 ? (
                      <p className="coin-percent red  ProfitLoss comman">
                        {coin.price_change_24h.toFixed(5)}
                      </p>
                    ) : (
                      <p className="coin-percent green ProfitLoss comman">
                        +{coin.price_change_24h.toFixed(3)}
                      </p>
                    )}
                    <p className=" comman">{coin.total_volume}</p>
                    <p className="Price comman">${coin.current_price}</p>
                  </div>
                </div>
              </div>
            </>
          );
        }
      })}
      <div className="all_coins coin_box">
        <img className="all_coins_logo" src="Assets/Coins2.jpg" alt="coins" />
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
    </div>
  );
}
