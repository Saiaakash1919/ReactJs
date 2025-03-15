import React, { useState } from "react";
import './App.css';
import mainlogo from './mainlogo.png'; 



  const Header = ({ onSearch }) => {
    const [SearchText, setSearchText] = useState("");
    const [isLoggedin,setisLoggedin] = useState(false)
  
    const handleChange = (e) => {
      setSearchText(e.target.value); // Update the state with the input value
    };
  
    const handleClick = () => {
      onSearch(SearchText); // Call the onSearch function passed from App.js to update the search term
    };
  
    return (
        <>
        
      <div className="Head">
       <img  className= 'Title'src={mainlogo} alt="Logo" />
        <input
          type="text"
          placeholder="Search"
          value={SearchText}
          onChange={handleChange} // Update SearchText on input change
        />
        <button className = 'search'onClick={handleClick}>Search</button>
        <div className="Navlist">
          
          {isLoggedin ? (
             <button  className="logout" onClick={() => setisLoggedin(false)}>Logout</button>

          ):
          (
          <button  className="logout" onClick={() => setisLoggedin(true)}>Login</button>
          )}
            
             
         
        </div>
       
      </div>
      <div class="Navlist2 ">
      <ul>

     <li>Home</li>
     <li>About</li>
     <li>Contact</li>
     <li>Cart</li>
     </ul>
       </div>
      
      </>
    );
  };
  
  export default Header;
  