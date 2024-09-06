import React, { useState } from 'react';
import ProductList from '../components/Productlist'; 
import Cartitem from '../components/CartItem';


const CartPage = ({cart}) => {
  

 

  // Function to calculate total cost
  const getTotalCost = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  // Function to delete an item from the cart
  const deleteItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalCost = getTotalCost(); // Total cost calculation
console.log("cart in cartpage",cart)
  return (
    <div>
      {/* Navbar */}
      <nav>
        <h2>Cart Page</h2>
        <p>Total in Cart: {cart.length}</p>
        <p>Total Cost: £{totalCost}</p>
      </nav>

     

      {/* Cart Items Display */}
      <div>
        {cart ? cart.map((item) => (
          <div key={item.id} style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <img src={item.image} alt={item.name} style={{ width: "100px", marginRight: "20px" }} />
            <p>{item.name} - £{item.price}</p>
            <button onClick={() => deleteItem(item.id)} style={{ marginLeft: "20px" }}>Delete</button>
          </div>
        )) : <p>cart is empty </p>}
      </div>
    </div>
  );
};

export default CartPage;
