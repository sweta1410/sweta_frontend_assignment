import React from 'react';

function WelcomeJSX() {
  const topic = 'JSX';
  const description = `JSX allows you to write HTML-like syntax directly in your JavaScript code. 
  It makes it easier to create and visualize UI components.`;

  return (
    <div>
      <h1>Welcome to {topic}</h1>
      <p>{description}</p>
    </div>
  );
}

export default WelcomeJSX;