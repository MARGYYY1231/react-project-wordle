import React from 'react';
import {range} from '/src/utils.js';

function Guess({ answer }) {
  const guessText = answer?.guess || '';
  //console.info({answer});
  console.info(answer.guess);
  return (<>
  <p className='guess' key={answer.id}>
    {
    range(0, 5).map(
      (num) => (
      <span key={num} className='cell'>{(guessText.length > 0) ? guessText.at(num) : ''}</span>
      )
      )}
  </p>
  </>);
}

export default Guess;
