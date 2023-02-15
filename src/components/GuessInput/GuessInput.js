import React from "react";

function GuessInput({ submitGuess }) {
  const [guess, setGuess] = React.useState('');

  function formSubmitGuess(event) {
    event.preventDefault();
    submitGuessAndClearIf5Complete(guess);
  }

  function updateGuess(event) {
    const nextGuess = event.target.value.toUpperCase().replace(/[^a-z]+/i, '');
    if (nextGuess.length <= 5) {
      setGuess(nextGuess);
    }
    submitGuessAndClearIf5Complete(nextGuess);
  }

  return <form
    className="guess-input-wrapper"
    onSubmit={formSubmitGuess}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input id="guess-input"
      type="text"
      value={guess}
      onChange={updateGuess} />
  </form>

  function submitGuessAndClearIf5Complete(g) {
    if (g.length === 5) {
      submitGuess(g);
      setGuess('');
    }
  }
}

export default GuessInput;
