import { useEffect, useState } from "react";
import "./styles.css";
import { HiStar, HiArrowsExpand } from "react-icons/hi";
import { AiOutlineStar } from "react-icons/ai";

const CurrencyDropdown = ({
  currencies,
  currency,
  setCurrency,
  favorites,
  handleFavorite,
  title = "",
}) => {
  const isFavorite = (curr) => favorites.includes(curr);

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
        >
          {favorites.map((currency) => (
            <option className="favorite-option" value={currency} key={currency}>
              {currency}
            </option>
          ))}
          {currencies
            .filter((c) => !favorites.includes(c))
            .map((currency) => (
              <option value={currency} key={currency}>
                {currency}
              </option>
            ))}
        </select>

        <button
          onClick={() => handleFavorite(currency)}
          className="favorite-button"
        >
          {isFavorite(currency) ? <HiStar /> : <AiOutlineStar />}
        </button>
      </div>
    </div>
  );
};

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [converting, setConverting] = useState(false);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || ["INR", "EUR"]
  );

  const fetchCurrencies = async () => {
    try {
      const res = await fetch("https://api.frankfurter.app/currencies");
      const data = await res.json();
      setCurrencies(Object.keys(data));
    } catch (error) {
      console.error("Error Fetching", error);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  const convertCurrency = async () => {
    if (!amount) return;
    setConverting(true);
    try {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      );
      const data = await res.json();
      setConvertedAmount(data.rates[toCurrency] + " " + toCurrency);
    } catch (error) {
      console.error("Error Fetching", error);
    } finally {
      setConverting(false);
    }
  };

  const handleFavorite = (currency) => {
    let updatedFavorites = [...favorites];
    if (favorites.includes(currency)) {
      updatedFavorites = updatedFavorites.filter((fav) => fav !== currency);
    } else {
      updatedFavorites.push(currency);
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="converter-container">
      <h2 className="converter-title">Currency Converter</h2>

      <div className="grid-row">
        <CurrencyDropdown
          favorites={favorites}
          currencies={currencies}
          title="From:"
          currency={fromCurrency}
          setCurrency={setFromCurrency}
          handleFavorite={handleFavorite}
        />
        <div className="swap-button-wrapper">
          <button onClick={swapCurrencies} className="swap-button">
            <HiArrowsExpand />
          </button>
        </div>
        <CurrencyDropdown
          favorites={favorites}
          currencies={currencies}
          currency={toCurrency}
          setCurrency={setToCurrency}
          title="To:"
          handleFavorite={handleFavorite}
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
