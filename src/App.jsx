import React from "react";

// react router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from '../src/pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
      </Routes>
      <Routes>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <Routes>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <Routes>
        <Route path="/productlist" element={<ProductList></ProductList>}></Route>
      </Routes>
      <Routes>
        <Route path="/product" element={<Product></Product>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;