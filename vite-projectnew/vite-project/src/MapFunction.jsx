import React from 'react';

function MapFunction() {
  const fruits = ['Apple', 'Mango', 'Banana', 'Orange'];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

export default MapFunction;
