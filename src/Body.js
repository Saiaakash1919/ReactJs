import React, { useState, useEffect } from "react";
import './App.css';
import Card from "./Item"; // Card component for displaying each product
import { clear } from "@testing-library/user-event/dist/clear";

const Body = ({ searchTerm }) => {
 const [products, setProducts] = useState([]); // State to store the products from the API
 
  // Fetch products data from the API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // Store the fetched products in state
       
      })
      
  }, []); // Empty dependency array ensures this runs once when the component mounts
     

    //  useEffect (() =>{
    //     getproducts()
    //  },[]);

    //  async function getproducts() {
    //     const data = await fetch ("https://fakestoreapi.com/products")  
    //       const  json = await data.json();
    //     setProducts(json.data)
    //  }

  // Filter the products based on the search term
  const filteredItems = products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) // Case-insensitive search
  );

    
  return (
    <div className="body">
      {filteredItems.length > 0 ? (
        filteredItems.map((item, index) => (
          <Card key={index} item={item} />
        ))
      ) : (
        <p>No items found.</p> // Show a message if no items match the search term
      )}
    </div>
  );
};

export default Body; 
