import React, { useEffect, useState } from "react";
import "./wordle.css";

const Wordle = () => {
  const [solution, setSolution] = useState(null);
  const [wordList, setWordList] = useState([]);
  const [guesses, setGuesses] = useState([...Array(6)]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [turn, setTurn] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({});
  const [error, setError] = useState(null);
  const [showHint, setShowHint] = useState(false);

  const fetchWords = async () => {
    const res = await fetch(
      "https://random-word-api.herokuapp.com/word?length=5&number=1000"
    );
    const words = await res.json();
    const upperWords = words.map((w) => w.toUpperCase());
    const randomWord =
      upperWords[Math.floor(Math.random() * upperWords.length)];

    setWordList(upperWords);
    setSolution(randomWord);
    setGuesses([...Array(6)]);
    setCurrentGuess("");
    setTurn(0);
    setIsCorrect(false);
    setUsedKeys({});
    setError(null);
    setShowHint(false);
  };

  useEffect(() => {
    fetchWords();
  }, []);

  useEffect(() => {
    const handleKeyup = ({ key }) => {
      if (isCorrect || turn >= 6) return;

      if (/^[A-Za-z]$/.test(key) && currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key.toUpperCase());
      }

      if (key === "Backspace") {
        setCurrentGuess((prev) => prev.slice(0, -1));
      }

      if (key === "Enter") {
        if (currentGuess.length !== 5) {
          showError("Guess must be 5 letters");
          return;
        }

        if (!wordList.includes(currentGuess)) {
          showError("Not a valid word");
          return;
        }

        const formatted = formatGuess();
        setGuesses((prev) => {
          const newGuesses = [...prev];
          newGuesses[turn] = formatted;
          return newGuesses;
        });

        setTurn((prev) => prev + 1);
        setUsedKeys((prev) => {
          const updated = { ...prev };
          formatted.forEach((l) => {
            updated[l.key] = l.color;
          });
          return updated;
        });

        if (currentGuess === solution) {
          setIsCorrect(true);
        }

        if (turn === 2 && currentGuess !== solution) {
          setShowHint(true);
        }

        setCurrentGuess("");
      }
    };

    window.addEventListener("keyup", handleKeyup);
    return () => window.removeEventListener("keyup", handleKeyup);
  }, [currentGuess, turn, isCorrect, wordList]);

  const showError = (msg) => {
    setError(msg);
    setTimeout(() => setError(null), 2000);
  };

  const formatGuess = () => {
    const solutionArr = [...solution];
    const guessArr = [...currentGuess];

    return guessArr.map((l, i) => {
      if (solution[i] === l) return { key: l, color: "green" };
      if (solutionArr.includes(l)) return { key: l, color: "yellow" };
      return { key: l, color: "gray" };
    });
  };

  const handleKeyClick = (key) => {
    if (key === "ENTER") {
      const event = new KeyboardEvent("keyup", { key: "Enter" });
      window.dispatchEvent(event);
    } else if (key === "DEL") {
      const event = new KeyboardEvent("keyup", { key: "Backspace" });
      window.dispatchEvent(event);
    } else {
      const event = new KeyboardEvent("keyup", { key });
      window.dispatchEvent(event);
    }
  };

  const keys = [
    ..."QWERTYUIOP",
    ..."ASDFGHJKL",
    ...["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DEL"],
  ];

  return (
    <>
      <h1>React Wordle</h1>

      {solution ? (
        <>
          <div className="board">
            {guesses.map((guess, i) => (
              <div key={i} className="row">
                {guess
                  ? guess.map((l, j) => (
                      <div key={j} className={`tile ${l.color}`}>
                        {l.key}
                      </div>
                    ))
                  : [...Array(5)].map((_, j) => (
                      <div key={j} className="tile">
                        {i === turn && currentGuess[j] ? currentGuess[j] : ""}
                      </div>
                    ))}
              </div>
            ))}
          </div>

          {showHint && !isCorrect && turn < 6 && (
            <div className="result">
              💡 Hint: Word starts with {solution[0]}
            </div>
          )}

          {error && <div className="error">{error}</div>}

          <div className="keyboard">
            {keys.map((k) => (
              <button
                key={k}
                className={`key ${usedKeys[k] || ""}`}
                onClick={() => handleKeyClick(k)}
              >
                {k}
              </button>
            ))}
          </div>

          {isCorrect && (
            <div className="result">🎉 Congratulations! You guessed it!</div>
          )}
          {!isCorrect && turn === 6 && (
            <div className="result">❌ Game Over! Word was: {solution}</div>
          )}

          <button
            className="new-game"
            onClick={fetchWords}
            data-testid="new-game-btn"
          >
            🔄 New Game
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Wordle;
