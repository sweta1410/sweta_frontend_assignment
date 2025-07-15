import React from "react";
const cardStyle = {
  border: '2px solid #ccc',
  borderRadius: '10px',
  padding: '16px',
  maxWidth: '300px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  fontFamily: 'Times of new roman',
  backgroundColor: '#ffff',
};

const titleStyle = {
  fontSize: '30px',
  marginBottom: '8px',
  
};

const textStyle = {
  margin: '4px 0',
  color: 'blue',
};

function UserCard ({name, age, location}) {
    return (
        <div style={cardStyle}>
            <div style={titleStyle}>Name: {name}</div>
            <div style={textStyle}>Age: {age}</div>
            <div style={textStyle}>Location: {location}</div>
        </div>
    );
}

export default UserCard;