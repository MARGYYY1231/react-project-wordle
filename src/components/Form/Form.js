import React from 'react';

function Form() {
  const [answer, setAnswer] = React.useState('');

  return (<>
    <form 
    className='guess-input-wrapper'
    onSubmit={
      (event) => {
        event.preventDefault();
        console.info({ answer });
        setAnswer('');
      }
    }
    >
    <label htmlfor='guess-input'>Enter guess:</label>
    <input 
    id='guess-input" type="text'
    pattern='[A-Z]{5}'
    value={answer.toUpperCase()}
    onChange={
      event => {
        setAnswer(event.target.value.toUpperCase())
      }
    }
    />
</form>
  </>);
}

export default Form;
