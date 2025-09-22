import React from 'react';

const Header = ({ onSearchClick, onHomeClick }) => {
  return (
    <header className="header">
      <div className="logo" onClick={onHomeClick}>Pobre-flix</div>
      <div className="icons">
        <i className="fas fa-search icon" onClick={onSearchClick}></i>
        <i className="fas fa-home icon" onClick={onHomeClick}></i>
      </div>
    </header>
  );
};

export default Header;