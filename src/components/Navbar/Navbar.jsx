import { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

import logo from "../../assets/Logo.svg";
import dropdownIcon from "../../assets/DropDown.svg";
import searchIcon from "../../assets/search.svg";
import heartIcon from "../../assets/Wishlist.svg";
import cartIcon from "../../assets/Cart.svg";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="navbar">
      {/* Top Black Bar */}
      <div className="top-bar">
        <div className="container">
          <p className="sale-text">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <div className="lang">
            <span>English</span>
            <img src={dropdownIcon} alt="dropdown" className="icon1" />
          </div>
        </div>
      </div>

      {/* Main White Navbar */}
      <div className="main-navbar">
        <div className="container">
          {/* Left - Logo */}
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>

          {/* Center - Links */}
          <nav className="nav-links">
            <Link to="/" className="active">
              Home
            </Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/signup">Sign Up</Link>
          </nav>

          {/* Right - Actions */}
          <div className="nav-actions">
            <div className="search-bar">
              <input type="text" placeholder="What are you looking for?" />
              <img src={searchIcon} alt="search" className="icon1" />
            </div>
            <img src={heartIcon} alt="heart" className="icon" />
            <img src={cartIcon} alt="cart" className="icon" />

            {/* Hamburger menu (Unicode ☰) */}
            <span className="hamburger" onClick={() => setIsSidebarOpen(true)}>
              &#9776;
            </span>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      {/* <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <span className="close-btn" onClick={() => setIsSidebarOpen(false)}>
          &times;
        </span>
        <a href="/" onClick={() => setIsSidebarOpen(false)}>
          Home
        </a>
        <a href="/contact" onClick={() => setIsSidebarOpen(false)}>
          Contact
        </a>
        <a href="/about" onClick={() => setIsSidebarOpen(false)}>
          About
        </a>
        <a href="/signup" onClick={() => setIsSidebarOpen(false)}>
          Sign Up
        </a>
      </div> */}

      {/* Overlay */}
      {isSidebarOpen && (
        <div className="overlay" onClick={() => setIsSidebarOpen(false)}></div>
      )}
    </header>
  );
};

export default Navbar;
