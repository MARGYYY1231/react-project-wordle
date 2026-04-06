import React from 'react';

function Lose({ans}) {
  return (<>
    <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{ans}</strong>.</p>
    </div>
  </>);
}

export default Lose;
