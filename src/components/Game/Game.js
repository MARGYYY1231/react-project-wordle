import React from 'react';
import Form from '../../components/Form';
import Guesses from '../Guesses';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
//const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
//console.info({ answer });

function Game() {
  const [answers, setAnswers] = React.useState([]);

  function handleAddGuess(guess) {
    const newGuess = {
      guess,
      id: crypto.randomUUID,
    };

    const nextGuess = [...answers, newGuess];
    setAnswers(nextGuess);
  }

  return (<>
    <Guesses answers={answers}></Guesses>
    <Form handleAddGuess={handleAddGuess}></Form>
  </>);
}

export default Game;
