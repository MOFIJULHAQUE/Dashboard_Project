import "./CryptoHistory.css";

export function CryptoHistory() {
  return (
    <div className="crypto_history_container">
      <div className="chart_history">
        <h4>Summary</h4>
        <h4>Chart</h4>
        <h4>Conversation</h4>
        <h4>Historical Chart</h4>
      </div>

      <div className="time_history">
        <h4>1H</h4>
        <h4>24H</h4>
        <h4>1W</h4>
        <h4>1M</h4>
        <h4>1Y</h4>
      </div>
    </div>
  );
}
