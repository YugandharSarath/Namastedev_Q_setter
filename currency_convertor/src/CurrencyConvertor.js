import { useEffect, useState } from "react";
import "./styles.css";
import { HiArrowsExpand } from "react-icons/hi";

const CurrencyDropdown = ({ currencies, currency, setCurrency, title = "", disabled = false }) => {
  return (
    <div>
      <label
        htmlFor={`dropdown-${title.replace(/[^a-zA-Z]/g, "")}`}
        className="dropdown-label"
      >
        {title}
      </label>

      <div className="dropdown-wrapper">
        <select
          id={`dropdown-${title.replace(/[^a-zA-Z]/g, "")}`}
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="select-field"
          disabled={disabled}
        >
          {currencies.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [converting, setConverting] = useState(false);

  const TO_CURRENCY = "INR"; 

  const fetchCurrencies = async () => {
    try {
      const res = await fetch("https://api.frankfurter.app/currencies");
      const data = await res.json();
      setCurrencies(Object.keys(data));
    } catch (error) {
      console.error("Error fetching currencies", error);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  const convertCurrency = async () => {
    if (!amount) return;
    if (fromCurrency === "INR") {
      setConvertedAmount(`${amount}`);
      return;
    }

    setConverting(true);
    try {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${TO_CURRENCY}`
      );
      const data = await res.json();
      setConvertedAmount(`₹${data.rates[TO_CURRENCY]}`);
    } catch (error) {
      console.error("Error converting", error);
    } finally {
      setConverting(false);
    }
  };

  const swapCurrencies = () => {
    if (fromCurrency !== "INR") {
      setFromCurrency("INR");
    } else {
      setFromCurrency("USD"); 
    }
  };

  return (
    <div className="converter-container">
      <h2 className="converter-title">Currency Converter</h2>

      <div className="grid-row">
        <CurrencyDropdown
          currencies={currencies}
          title="From:"
          currency={fromCurrency}
          setCurrency={setFromCurrency}
        />
        <div className="swap-button-wrapper">
          <button onClick={swapCurrencies} className="swap-button" aria-label="Swap Currencies">
            <HiArrowsExpand />
          </button>
        </div>
        <CurrencyDropdown
          currencies={["INR"]}
          currency="INR"
          setCurrency={() => {}}
          title="To:"
          disabled
        />
      </div>

      <div className="amount-section">
        <label htmlFor="amount" className="input-label">
          Amount:
        </label>
        <input
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="input-field"
        />
      </div>

      <div className="convert-button-wrapper">
        <button
          onClick={convertCurrency}
          className={`convert-button ${converting ? "converting" : ""}`}
        >
          Convert
        </button>
      </div>

      {convertedAmount && (
        <div className="converted-result">
          Converted Amount: {convertedAmount}
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;
