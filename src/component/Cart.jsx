// // src/components/Cart.js
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { removeItemFromCart, updateItemQuantity, clearCart } from '../store/slices/CartSlice';

// const Cart = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector(state => state.cart.items);

//   // Define shipping charge
//   const shippingCharge = 19;

//   const handleRemoveItem = (id) => {
//     dispatch(removeItemFromCart(id));
//   };

//   const handleQuantityChange = (id, quantity) => {
//     dispatch(updateItemQuantity({ id, quantity }));
//   };

//   const handleClearCart = () => {
//     dispatch(clearCart());
//   };

//   // Calculate total price including shipping charge
//   const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0) + shippingCharge;

//   return (
//     <div>
//       <header>
//         <h3>Checkout</h3>
//       </header>

//       <main>
//         <section className="checkout-details">
//           <div className="checkout-details-inner">
//             <div className="checkout-lists">
//               {cartItems.map(item => (
//                 <div key={item.id} className="card" style={{ padding: '20px' }}>
//                   <div className="card-image">
//                     <img src={item.image} alt={item.title} />
//                   </div>
//                   <div className="card-details">
//                     <div className="card-name mt-2 fs-4">{item.title}</div>
//                     <div className="card-price fs-5">${item.price} </div>
//                     <div className="card-wheel">
//                       <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
//                       <span>{item.quantity}</span>
//                       <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
//                     </div>
//                     <button className="btn btn-danger w-25 my-4" onClick={() => handleRemoveItem(item.id)}>Delete</button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="checkout-shipping">
//               <h6 className="fs-5">Shipping</h6>
//               <p className="fs-5">${shippingCharge}</p>
//             </div>
//             <div className="checkout-total">
//               <h6 className="fs-5">Total</h6>
//               <p className="fs-5">${total}</p>
//             </div>
//             <button className="btn btn-danger w-100" onClick={handleClearCart}>All Delete</button>
//           </div>
//         </section>
//       </main>

//       <footer>
//         <p>Created by - <a href=""><span>By Me</span></a></p>
//       </footer>
//     </div>
//   );
// };

// export default Cart;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItemFromCart,
  updateItemQuantity,
  clearCart,
} from "../store/slices/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Define shipping charge
  const shippingCharge = 19;

  const handleRemoveItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity === 0) {
      dispatch(removeItemFromCart(id)); // Remove item if quantity is 0
    } else {
      dispatch(updateItemQuantity({ id, quantity }));
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Calculate total price including shipping charge
  const total =
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) +
    shippingCharge;

  return (
    <div>
      <header>
        <h3>Checkout</h3>
      </header>

      <main>
        <section className="checkout-details">
          <div className="checkout-details-inner">
            <div className="checkout-lists">
              {cartItems.map((item) => (
                <div key={item.id} className="card" style={{ padding: "20px" }}>
                  <div className="card-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="card-details">
                    <div className="card-name mt-2 fs-4">{item.title}</div>
                    <div className="card-price fs-5">${item.price} </div>
                    <div className="card-wheel">
                     
                        {item.quantity === 1 ? (
                          <button
                            className="delete-icon"
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            <i className="fa fa-trash text-danger"></i>
                          </button>
                        ) : (
                          <button
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity - 1)
                            }
                          >
                            -
                          </button>
                        )}
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                     

					 
                    </div>
					
                  </div>
				  <button className="btn btn-danger my-3" onClick={() => handleRemoveItem(item.id)}>Delete</button>
                </div>
              ))}
            </div>
            <div className="checkout-shipping">
              <h6 className="fs-5">Shipping</h6>
              <p className="fs-5">${shippingCharge}</p>
            </div>
            <div className="checkout-total">
              <h6 className="fs-5">Total</h6>
              <p className="fs-5">${total}</p>
            </div>
            <button className="btn btn-danger w-100" onClick={handleClearCart}>
              All Delete
            </button>
          </div>
        </section>
      </main>

      <footer>
        <p>
          Created by -{" "}
          <a href="">
            <span>By Me</span>
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Cart;
