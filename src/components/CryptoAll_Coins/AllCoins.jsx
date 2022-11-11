import "./AllCoins.css"

export  function AllCoins() {
  return (
    <div className='coins_container'>
      <div className="Bitcoin">BTC/USD</div>
      <div className="Ethereum">ETH/USD</div>
      <div className="DogeCoin">DEG/USD</div>
      <div className="all_coins">
      <img className='all_coins_logo' src="Assets/coins.jpg" alt="coins"/>
      <h3>Crypto Exchange</h3>
      </div>
      </div>
  )
}

