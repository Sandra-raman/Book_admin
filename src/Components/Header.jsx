import React, { useState } from "react";
import "../Style/Header.css"

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    // Add logout functionality here
  };

  return (
    <nav className="navbar">
      <div className="navbar-left ms-4">
        <h1 className="website-name text-light">PoltPoint</h1>
      </div>
      <div className="navbar-right">
        <div
          className="profile-container"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <img
            src="https://www.svgrepo.com/show/350417/user-circle.svg"
            alt="User"
            className="profile-image me-3"
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
