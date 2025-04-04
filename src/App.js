import React, { useState } from "react";
import Footer from "./Footer";
import './App.css'; // Assuming you still want to keep the styles
import Outlet from "./components/Outlet"; // Import Outlet


const App = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term

  // Function to update the search term when the user clicks search
  const handleSearch = (term) => {
    setSearchTerm(term); // Update the search term state
  };
  return (
    
    <div className="App">
      
      {/* Pass handleSearch as onSearch prop to Outlet */}
      <Outlet onSearch={handleSearch} searchTerm={searchTerm} />
     

      {/* Footer Component */}
      <Footer />
    </div>
  
  );
};

export default App;
