import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function PrintAnswer(answer){
  console.log({ answer });
}

function Game() {
  const [answer, setAnswer] = React.useState("Hello");

  return (<>
  Put a game here!
  <form 
  className='guess-input-wrapper'
  onSubmit={(event) => {
    event.preventDefault();
    PrintAnswer(answer);
    setAnswer('');
  }}
  >
    <label htmlFor='guess-input'>Enter guess:</label>
    <input id='guess-input' 
    type='text'
    pattern='[A-Z]{5}'
    value={answer.toUpperCase()}
    onChange={event => {
      setAnswer(event.target.value.toUpperCase())
    }}
    />
  </form>
  </>);
}

export default Game;
