import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';
import EndGameBanner from '../EndGameBanner/EndGameBanner';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [results, setResults] = React.useState([]);

  function submitGuess(guess) {
    console.log(`new guess: ${guess}`);
    let nextResults = [...results];
    if (results.length < NUM_OF_GUESSES_ALLOWED) {
      let newAnswer = {
        key: crypto.randomUUID(),
        guess: guess,
        result: checkGuess(guess, answer)
      };
      newAnswer.good = newAnswer.result.every(letter => letter.status === 'correct');
      nextResults.push(newAnswer);
      setResults(nextResults);
    }
  }

  return <>
    <EndGameBanner results={results} answer={answer} />
    <GuessResults results={results} />
    <GuessInput submitGuess={submitGuess} />
  </>;
}

export default Game;
