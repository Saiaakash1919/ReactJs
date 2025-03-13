import React, { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { BrowserRouter,Route,Switch } from "react-router-dom";
import './App.css'; // Assuming you still want to keep the styles

const App = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term

  // Function to update the search term when the user clicks search
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="App">
      <BrowserRouter>
      <Header onSearch={handleSearch} /> {/* Pass search handler to Header */}
      </BrowserRouter>
      <Body searchTerm={searchTerm} /> {/* Pass searchTerm to Body */}
      <Footer />   
    </div>
  );
};

export default App;
