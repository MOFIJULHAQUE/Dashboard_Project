import "./currencyInput.css";

const CurrencyInput=({
  amount,
  setAmount,
  currency,
  setCurrency,
  currencies,
  amountChange,
  onCurrencyChange,
}) =>{
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <div className="group">
      <input type="text" value={amount} onChange={handleAmountChange} />
      <select
        value={currency}
        onChange={ handleCurrencyChange}
      >
        {currencies.map((currency) => (
          <option value={currency}>{currency}</option>
        ))}
      </select>
    </div>
  );
}

export default CurrencyInput;
