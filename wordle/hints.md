
---

### ✅ `hints.md`

````md
# Hints for React Wordle Game

## 1. Fetch and Store Words
```js
const fetchWords = async () => {
  const res = await fetch("https://random-word-api.herokuapp.com/word?length=5&number=1000");
  const words = await res.json();
  const upperWords = words.map((w) => w.toUpperCase());
  setWordList(upperWords);
  setSolution(upperWords[Math.floor(Math.random() * upperWords.length)]);
};
````

## 2. Handle Key Input

* Accept only A–Z, Enter, and Backspace.
* Prevent input if game is over or word is guessed.

```js
if (/^[A-Za-z]$/.test(key) && currentGuess.length < 5) {
  setCurrentGuess((prev) => prev + key.toUpperCase());
}
if (key === "Enter") handleSubmit();
if (key === "Backspace") {
  setCurrentGuess((prev) => prev.slice(0, -1));
}
```

## 3. Format Guess Result

* Green: correct letter & position.
* Yellow: in word but wrong position.
* Gray: not in word.

```js
const formatGuess = () => {
  return [...currentGuess].map((l, i) => {
    if (solution[i] === l) return { key: l, color: "green" };
    if (solution.includes(l)) return { key: l, color: "yellow" };
    return { key: l, color: "gray" };
  });
};
```

## 4. Hint System

* Show first letter of solution after 3 failed guesses.

```js
if (turn === 2 && currentGuess !== solution) {
  setShowHint(true);
}
```

## 5. Error Handling

* Guess must be 5 letters.
* Word must be in word list.

```js
if (currentGuess.length !== 5) {
  showError("Guess must be 5 letters");
  return;
}
if (!wordList.includes(currentGuess)) {
  showError("Not a valid word");
  return;
}
```

## 6. Reset Game on New Game Button

* Re-fetch word list and reset all state.

```js
<button className="new-game" data-testid="new-game-btn" onClick={fetchWords}>
  🔄 New Game
</button>
```





Let me know if you want all of these in a ZIP file or GitHub-ready format.
