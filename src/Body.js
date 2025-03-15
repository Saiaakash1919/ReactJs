import React, { useState, useEffect } from "react";
import './App.css';
import Card from "./Item"; // Card component for displaying each product

const Body = ({ searchTerm }) => {
  const [products, setProducts] = useState([]); // State to store the products from the API
  const [loading, setLoading] = useState(true); // Loading state to show a loader while data is fetched
  const [error, setError] = useState(null); // Error state to catch any errors during the API call

  // Fetch products data from the API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // Store the fetched products in state
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        setError(error); // If there's an error, store it in the error state
        setLoading(false); // Stop loading
      });
  }, []); // Empty dependency array ensures this runs once when the component mounts
     

    //  useEffect (() =>{
    //     products()
    //  },[]);

    //  async function products() {
    //     const data = await fetch ("https://fakestoreapi.com/products")
    //     setProducts(data)
    //  }

  // Filter the products based on the search term
  const filteredItems = products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) // Case-insensitive search
  );

  if (loading) {
    return <h4 className="loading">Loading...</h4>; // Show loading message while data is being fetched
  }

  if (error) {
    return <p>Error: {error.message}</p>; // Show error message if there's an error
  }

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
