// import PropTypes from "prop-types";
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
    // e.target.value;
    setAmount(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    // e.target.value;
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

// CurrencyInput.propTypes = {
//   amount: PropTypes.number.isRequired,
//   currency: PropTypes.string.isRequired,
//   currencies: PropTypes.array,
//   onAmountChange: PropTypes.func,
//   onCurrencyChange: PropTypes.func,
// };

export default CurrencyInput;
