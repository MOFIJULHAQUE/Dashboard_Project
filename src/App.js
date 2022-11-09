import './App.css';
import 'antd/dist/antd.css';
import Demo from "./components/Demo"
import { TopBuyTopSell } from './components/Crypto_TopBuy_TopSell/TopBuyTopSell';
import { MainChart } from './components/Crypto_Main_Chart/MainChart';
import { AllCoins } from './components/CryptoAll_Coins/AllCoins';
function App() {
  return (
    <>
      {/* <Demo/> */}
      <div className='crypto_main_container'>
        <h1>Main_Container</h1>
        <TopBuyTopSell />
        <MainChart />
        <AllCoins />
      </div>
    </>
  );
}

export default App;
