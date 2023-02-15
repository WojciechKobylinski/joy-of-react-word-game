import React from "react";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from "../../constants";

function GuessResults({ results }) {

  function emptyGuess() { 
    return range(0,WORD_LENGTH).map(x => (' ')).join(''); 
  }
  function emptyResult() { 
    return range(0,WORD_LENGTH).map(x => ({letter: ' ', status: 'empty'}));
  }

  function provideRealOrFakeResult(results, guessNr) {
    return results[guessNr] || {
      key: `empty${guessNr}`, 
      guess: emptyGuess(), 
      good: false,
      result: emptyResult()};
  }

  function classNameForLetter({letter, status}) {
    if (status === 'correct') {
      return "cell correct";
    } else if (status === 'incorrect') {
      return "cell incorrect";
    } else if (status === 'misplaced') {
      return "cell misplaced";
    } else {
      return "cell";
    };
  }

  return (
    <div className="guessResults">
      {range(0,NUM_OF_GUESSES_ALLOWED).map(guessNr => {
        const {key, guess, result} = provideRealOrFakeResult(results, guessNr);
        return (
        <p key={key} className="guess">
          {range(0,WORD_LENGTH).map(letterNr => (
            <span 
              key={`${key}-${letterNr}`} 
              className={classNameForLetter(result[letterNr])}>
                {result[letterNr].letter}
            </span>
          ))}
        </p>
        )
      })}
    </div>
  );
}

export default GuessResults;
