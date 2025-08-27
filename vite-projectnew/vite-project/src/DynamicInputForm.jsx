import React, { useState } from 'react';

function DynamicInputForm() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <form>
        <label htmlFor="userInput">Enter text:</label>
        <input
          id="userInput"
          type="text"
          value={inputValue}
          onChange={handleChange}
          style={{ marginLeft: '10px' }}
        />
      </form>
      <p>Current Input: {inputValue}</p>
    </div>
  );
}

export default DynamicInputForm;
