import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function EndGameBanner({ results, answer }) {
  let whichAnswerCorrect = -1;
  for (let i = 0; i < results.length; i++) {
    if (results[i].good) {
      whichAnswerCorrect = i + 1;
      break;
    }
  }

  if (whichAnswerCorrect > 0) {
    return (<div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {whichAnswerCorrect} guesses</strong>.
      </p>
      <form>
        <button><strong>RESTART</strong></button>
      </form>
    </div>);
  } else if (results.length === NUM_OF_GUESSES_ALLOWED) {
    return (<div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      <form>
        <button><strong>RESTART</strong></button>
      </form>
    </div>);
  } else return (<></>);
}

export default EndGameBanner;
