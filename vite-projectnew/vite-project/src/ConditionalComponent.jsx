import React, { useState } from 'react';

function ConditionalComponent() {
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');

  const checkEligibility = () => {
    const numericAge = parseInt(age, 10);
    if (isNaN(numericAge) || numericAge < 0) {
      setMessage('Please enter a valid age.');
    } else if (numericAge >= 18) {
      setMessage('You are eligible to vote.');
    } else {
      setMessage('You are not eligible to vote.');
    }
  };

  return (
    <div>
      <h2>Voting Eligibility Checker</h2>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter your age"
      />
      <button onClick={checkEligibility}>Check Eligibility</button>
      <p>{message}</p>
    </div>
  );
}

export default ConditionalComponent;
