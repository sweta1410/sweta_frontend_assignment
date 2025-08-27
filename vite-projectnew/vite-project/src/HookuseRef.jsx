import React, { useRef } from 'react';

function HookuseRef() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    alert(`Input value: ${inputRef.current.value}`);
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Enter text" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default HookuseRef;
