import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector from react-redux


const Navbar = () => {

  const cartItems = useSelector(state => state.cart.items); // Get cart items from Redux store

  // Calculate total number of items in the cart
  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);


  return (
    <>
    <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
  <div className="container">
    <Link className="navbar-brand fw-bold fs-4" to="#">LA COLLECTION</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact </Link>
        </li>
       
      </ul>
      <div className="buttons">
        <button className="btn">
            <Link to="/login" className="btn btn-outline-dark ">
            <i className="fa fa-sign-in me-1"  aria-hidden="true"></i> Login</Link>
            <Link to="/register" className="btn btn-outline-dark ms-2">
            <i className="fa fa-user-plus me-1" aria-hidden="true"></i> Register</Link>
            <Link to="/cart" className="btn btn-outline-dark ms-2">
            <i className="fa fa-cart-plus me-1" aria-hidden="true"></i> Cart ({totalItemsInCart}) </Link>
        </button>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar