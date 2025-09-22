import React from 'react';
import './Header.css';

// Recebe as funções de clique como props
const Header = ({ onSearchClick, onHomeClick }) => {
  return (
    <header className="header">
      <div className="logo">Pobre-flix</div>
      <div className="icons">
        <span className="icon" onClick={onSearchClick}>🔍</span>
        <span className="icon" onClick={onHomeClick}>🏠</span>
      </div>
    </header>
  );
};

export default Header;