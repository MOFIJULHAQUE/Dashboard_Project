import "./AllCoins.css";
import { NavLink } from "react-router-dom";

export function AllCoins() {
  return (
    <div className="top_coins_container">
      <div className="Bitcoin coin_box">BTC/USD</div>
      <div className="Ethereum coin_box">ETH/USD</div>
      <div className="DogeCoin coin_box">DEG/USD</div>
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
