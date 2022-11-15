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
            <div className="Investment">
            <h2>$34,5464.89  </h2>
            <h2 className="profit_loss">+$454.67</h2>
           </div>
            <h2>Bitcoin-USD(BTC-USD)</h2>
          </div>
          <TopBuyTopSell/>
          <CryptoHistory/> 
         <MainChart  />
         <AllCoins/>
        </div>
      </>
  );
}
