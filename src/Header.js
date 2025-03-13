import React, { useState } from "react";
import './App.css';
import { Router,Link } from "react-router-dom";


  const Header = ({ onSearch }) => {
    const [SearchText, setSearchText] = useState("");
    const [Search, setSearch] = useState("");
    const [LoggedIn ,setLoggedIn] =  useState (false);
  
    const handleChange = (e) => {
      setSearchText(e.target.value); // Update the state with the input value
    };

    const handleClick = () => {
      onSearch(SearchText); // Call the onSearch function passed from App.js to update the search term
    };
  
    return(
        <>
        
      <div className="Head">
       <img  className= 'Title'src="/mainlogo.png" alt="Logo" />
        <input
          type="text"
          placeholder="Search"
          value={SearchText}
          onChange={handleChange} // Update SearchText on input change
        />
        <button className = 'search'onClick={handleClick}>Search</button>

        <div className="Navlist">
          
            {LoggedIn ?(
             <button  className="logout" onClick={() =>  setLoggedIn (false)}>Logout</button>
            ) : (
             <button  className="logout" onClick={() =>  setLoggedIn (true)}>Login</button>
            )
            }
         
        </div>
       
      </div>
      <div class="Navlist2 ">
      <ul>

      <Link to = '/'><li>Home</li> </Link>
      <Link to = '/about'> <li>About</li> </Link>
      <Link to = '/contact'><li>Contact</li> </Link>
      <Link to = '/cart'> <li>Cart</li> </Link>
     </ul>
       </div>
      
      </>
    );
  };
  
  export default Header;
  