import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../App.css"; 

const Navbar = ({ tripDetails }) => { // Accept tripDetails as props
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="navbar">
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>

      {isSidebarOpen && (
        <div className="sidebar">
          <button className="close-btn" onClick={toggleSidebar}>X</button>
          <div className="sidebar-links">
            <Link className="navbar-link" to="/" onClick={toggleSidebar}>Home</Link>
            <Link 
              className="navbar-link" 
              to={{
                pathname: "/Dashboard",
                state: { tripDetails } // Pass tripDetails to Dashboard
              }} 
              onClick={toggleSidebar}
            >
              Dashboard
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
