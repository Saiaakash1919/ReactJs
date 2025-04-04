

import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const Loginpage = () => {

  const [isLoggedin, setIsLoggedin] = useState(false);
  const navigate = useNavigate(true ); 

  return (
      <>     
          <div className='Logindiv'>

          <input className= 'Loginpage' type="text"  placeholder = "UserName" />
           <input className= 'Loginpage' type="password" placeholder = "Password" />
      <button className='Submit-Button' onClick={() => {setIsLoggedin(true); navigate('/'); }}>Submit</button>

      </div>
          </>

  );
};

export default Loginpage;

