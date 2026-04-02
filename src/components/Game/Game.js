import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [answers, setAnswers] = React.useState([]);
  const [ans, setAns] = React.useState('');

  function handleAddAnswer(answer) {
    const newAns = {
      answer,
      id: Math.random(),
    };

    const nextItems = [...answers, newAns];
    setAnswers(nextItems);
  }

  return (<>
  <div className='game-results'>
    {answers.map(({ id, answer }) => (
            <p key={id}>{answer}</p>
          ))}
  </div>

  <form 
  className='guess-input-wrapper'
  onSubmit={(event) => {
    event.preventDefault();
    handleAddAnswer(ans);
    setAns('');
  }}
  >
    <label htmlFor='guess-input'>Enter guess:</label>
    <input id='guess-input' 
    type='text'
    pattern='[A-Z]{5}'
    value={ans.toUpperCase()}
    onChange={event => {
      setAns(event.target.value.toUpperCase())
    }}
    />
  </form>
  </>);
}

export default Game;
