import React from "react";

const Options = ({ options, selectedOption, onOptionChange }) => {
  return (
    <div className="options">
      {options.map((opt, idx) => (
        <label key={idx} className="option">
          <input
            type="radio"
            name="option"
            value={opt}
            checked={selectedOption === opt}
            onChange={onOptionChange}
          />
          {opt}
        </label>
      ))}
    </div>
  );
};

export default Options;
