import React, { useState } from "react";
import "../Style/Header.css"

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    // Add logout functionality here
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="website-name">PoltPoint</h1>
      </div>
      <div className="navbar-right">
        <div
          className="profile-container"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <img
            src="https://via.placeholder.com/40" // Replace with your image URL
            alt="User"
            className="profile-image"
          />
        </div>
        {showDropdown && (
          <div className="dropdown">
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
