import React from 'react';


const CartItem = ({ CartItem,setCart, deleteItem }) => {
  return (
    <div>
      <h1>Cart Items</h1>
      {cart.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <img src={item.image} alt={item.name} style={{ width: "100px", marginRight: "20px" }} />
            <p>{item.name} - £{item.price}</p>
            <button onClick={() => deleteItem(item.id)} style={{ marginLeft: "20px" }}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartItem;

