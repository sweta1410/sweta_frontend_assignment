import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? 'red' : 'blue',
    textDecoration: 'none',
    margin: '0 10px',
  });

  return (
    <nav>
      <NavLink to="/" style={linkStyle}>
        Home
      </NavLink>
      <NavLink to="/about" style={linkStyle}>
        About
      </NavLink>
      <NavLink to="/contact" style={linkStyle}>
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;
