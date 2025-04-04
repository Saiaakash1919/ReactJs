import React, { useState, useEffect } from "react";
import './App.css';
import Card from "./Item"; // Card component for displaying each product
import Shimmer from "./components/Shimmer"; // Shimmer component for loading state

const Body = ({ searchTerm }) => {
  const [products, setProducts] = useState([]); // State to store the products from the API
  const [loading, setLoading] = useState(true);
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

  // Filter the products based on the search term
  const filteredItems = products.filter((item) =>
    item.title && item.title.toLowerCase().includes(searchTerm?.toLowerCase() || '') // Case-insensitive search
  );
  
  // If there's an error, display the error message
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Display shimmer during loading state, or No Item Found when no items match the search term
  return (
    <div className="body">
      {loading ? (
        <Shimmer /> // Show shimmer while loading
      ) : filteredItems.length === 0 ? (
        <h3>No Item Found</h3> // Show this message when no items are found after filtering
      ) : (
        filteredItems.map((item, index) => (
          <Card key={index} item={item} /> // Display the filtered items in Cards
        ))
      )}
    </div>
  );
};

export default Body;
