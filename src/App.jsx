import React from 'react';
import Navbar from './component/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Products from './component/Products';
import ProductDetails  from './component/ProductDetails';
import Cart from './component/Cart';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<ProductDetails />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App;

