import React from 'react';
import Guess from '../Guess';
import {NUM_OF_GUESSES_ALLOWED} from '/src/constants.js';
import {range} from '/src/utils.js';
import { checkGuess } from '../../game-helpers';
import Banner from '../Banner';
import Win from '../Win';
import Lose from '../Lose';

function Guesses({ ans, answers }) {
  let length = answers.length-1;

  function CheckAllCorrect(){
      const guessText = answers[length]?.guess || '';
      let results = checkGuess(guessText, ans) || [];
      let ctr = 0;
      results.forEach(res => {if(res.status === "correct") ctr++});
      if(ctr === 5 && answers.length <= 6){return <Win num={length} />;}
      else if(answers.length >= 6){return <Lose ans={ans} />;}
  }
  

  return (<>
    <div className='guess-results'>
    {range(0, NUM_OF_GUESSES_ALLOWED).map((num) =>
      <Guess key={num} ans={ans} answer={(num <= length) ? answers[num] : {id: crypto.randomUUID, guess: ''}}/> //fix this
    )}
  </div>
  {CheckAllCorrect()}
  </>);
}

export default Guesses;
