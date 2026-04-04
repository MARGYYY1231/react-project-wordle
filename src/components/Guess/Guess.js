import React from 'react';
import {range} from '/src/utils.js';
import { checkGuess } from '../../game-helpers';

function Guess({ ans, answer }) {
  const guessText = answer?.guess || '';
  console.log(ans);
  let results = checkGuess(guessText, ans);
  //console.info({answer});
  //console.info(answer.guess);
  return (<>
  <p className='guess' key={answer.id}>
    {
    range(0, 5).map(
      (num) => (
      <span key={num} className={(guessText.length > 0) ? `cell ${results[num].status}` : 'cell'}>{(guessText.length > 0) ? results[num].letter : ''}</span>
      )
      )}
  </p>
  </>);
}

export default Guess;
