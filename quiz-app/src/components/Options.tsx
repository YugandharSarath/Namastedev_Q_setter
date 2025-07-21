// components/Options.tsx
import React from "react";

type Props = {
  options: string[];
  selectedOption: string;
  onOptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Options: React.FC<Props> = ({
  options,
  selectedOption,
  onOptionChange,
}) => {
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
