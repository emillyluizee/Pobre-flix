// src/components/Header.jsx

import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Pobre-flix</div>
      <div className="icons">
        <span className="icon">🔍</span>
        <span className="icon">🏠</span>
      </div>
    </header>
  );
};

export default Header;