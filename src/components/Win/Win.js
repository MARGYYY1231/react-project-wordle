import React from 'react';

function Win({num}) {
  return (<>
    <div className="happy banner">
    <p>
      <strong>Congratulations!</strong> Got it in
      <strong>{num} guesses</strong>.
    </p>
  </div>
  </>);
}

export default Win;
