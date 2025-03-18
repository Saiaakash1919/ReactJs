import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Cart from "./Cart";
import Body from "../Body";
import Header from "../Header";
import Product from "./Product";
const Outlet = ({ onSearch, searchTerm }) => {
  return (
    <>
      <BrowserRouter>
        {/* Pass the onSearch function as a prop to Header */}
        <Header onSearch={onSearch} />
        
        {/* Define routes */}
        <Routes>
          {/* Use element prop to render components */}
          <Route path="/" element={<Body searchTerm={searchTerm} />} />
          <Route path="/About/:title" element={<Product />}/>

          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Outlet;
