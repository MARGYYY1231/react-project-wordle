import React from 'react';
import Guess from '../Guess';
import {NUM_OF_GUESSES_ALLOWED} from '/src/constants.js';
import {range} from '/src/utils.js';

function Guesses({ answers }) {
  let length = answers.length-1;
  return (<>
    <div className='guess-results'>
    {range(0, NUM_OF_GUESSES_ALLOWED).map((num) =>
      <Guess key={num} answer={(num <= length) ? answers[num] : {id: crypto.randomUUID, guess: ''}}/> //fix this
    )}
  </div>
  </>);
}

export default Guesses;
