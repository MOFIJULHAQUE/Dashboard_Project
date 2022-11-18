import { CryptoHistory } from "../cryptoHistory/CryptoHistory";
import { MainChart } from "../mainChart/MainChart";
import { TopChart } from "../topCharts/TopChart";
import { TopCoins } from "../topCoins/TopCoins";

import "./MainSection.css";

export function MainSection() {
  return (
    <>
      <div className="crypto_main_container">
        <div className="main_header">
          <div className="Investment">
            <span className="rate">$34,5464.89 </span>
            <span className="profit_loss">+$454.67</span>
          </div>
          <h2>Bitcoin-USD(BTC-USD)</h2>
        </div>
        <TopChart />
        <CryptoHistory />
        <MainChart />
        <TopCoins />
      </div>
    </>
  );
}
