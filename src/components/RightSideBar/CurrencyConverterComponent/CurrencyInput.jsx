// import PropTypes from "prop-types";
import "./currencyInput.css";

function CurrencyInput({
  amount,
  currency,
  currencies,
  amountChange,
  onCurrencyChange,
}) {

  // const amountChange = (e) => {
  //   e.target.value;
  // };

  

  return (
    <div className="group">
      <input
        type="text"
        value={amount}
        onChange={amountChange}
      />
      <select
        value={currency}
        onChange={(ev) => onCurrencyChange(ev.target.value)}
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
