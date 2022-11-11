import {TopBuyTopSell} from "../Crypto_TopBuy_TopSell/TopBuyTopSell"
import {CryptoHistory} from "../CryptoHistory/CryptoHistory"
import {MainChart} from "../Crypto_Main_Chart/MainChart"
import {AllCoins} from "../CryptoAll_Coins/AllCoins"

import "./MainSection.css"

export function MainSection() {
  return (
      <>
        <div className="crypto_main_container">
          <div className="main_header">
            <h2>CryptoCurrencies</h2>
            <h2>Bitcoin-USD(BTC-USD)</h2>
          </div>
          <TopBuyTopSell/>
          <CryptoHistory/>
         <MainChart/>
         <AllCoins/>
        </div>
      </>
  );
}
