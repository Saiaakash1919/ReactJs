// Header.js (Child Component)
import React, { useState } from "react";
import './App.css';
import mainlogo from './mainlogo.png';
import { Link } from "react-router-dom";

const Header = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);

  const handleChange = (e) => {
    setSearchText(e.target.value); // Update the state with the input value
  };

  const handleClick = () => {
    if (onSearch) {
      onSearch(searchText); // Call the onSearch function passed from App.js
    } else {
      console.error("onSearch is not a function");
    }
  };

  return (
    <>
      <div className="Head">
        <img className="Title" src={mainlogo} alt="Logo" />
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={handleChange} // Update searchText on input change
        />
        <button className="search" onClick={handleClick}>Search</button>
        <div className="Navlist">
          {isLoggedin ? (
            <button className="logout" onClick={() => setIsLoggedin(false)}>Logout</button>
          ) : (
            <button className="logout" onClick={() => setIsLoggedin(true)}>Login</button>
          )}
        </div>
      </div>
      <div className="Navlist2">
        <ul>
          <Link to="/" className="link"><li>Home</li></Link>
          <Link to="/About" className="link"><li>About</li></Link>
          <Link to="/contact" className="link"><li>Contact</li></Link>
          <Link to="/cart" className="link"><li>Cart</li></Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
