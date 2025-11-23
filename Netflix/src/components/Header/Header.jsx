import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      {/* Left: Logo */}
      <div className="header__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
      </div>

      {/* Center: Navigation Links */}
      <nav className="header__nav">
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>My List</li>
        </ul>
      </nav>

      {/* Right: Icons */}
      <div className="header__icons">
        <i className="fas fa-search"></i>
        <i className="fas fa-bell"></i>
        <img
          className="header__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="User Avatar"
        />
      </div>
    </header>
  );
};

export default Header;
