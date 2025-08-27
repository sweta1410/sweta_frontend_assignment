import React, { useState } from 'react';

function EventHandling() {
  const [text, setText] = useState('Not Clicked');

  const handleClick = () => {
    setText('Clicked!');
  };

  return (
    <button onClick={handleClick}>
        {text}
    </button>
  );
}

export default EventHandling;
