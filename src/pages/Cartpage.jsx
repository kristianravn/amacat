import React, { useState }from 'react'


// cart section that list the items that are to be paid for

  const Cartpage = () => {
console.log ("!!!!!")
     const [fakeCart, setFakeCart] = useState ([
      {id: 1, name: "item 1", price: 100.0, image: ""},
      {id: 1, name: "item 2", price: 100.0, image: ""},
      {id: 1, name: "item 3", price: 100.0, image: ""},

     ]);

    //  Function to calculate total cost

    const getTotalCost = () => {
      return fakeCart.reduce((total, item) => total + item.price, 0) .toFixed(2);
    };
const totalCost = getTotalCost()
    // function to delete an item from cart

    const deleteItem = (id) => {
      setFakeCart(fakeCart.filter((item) => item.id !== id));
    };

    return (
      <div>
        {/* Navbar */}
        
        <nav>
          <h2>Cart page</h2>
          <p>Total in Cart: {fakeCart.length}</p>
          <p>Total Cost: £{totalCost}</p>
        </nav>

        {/* Cart Items */}

        <div>
        {fakeCart.map((item) => (
          <div key={item.id} style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <img src={item.image} alt={item.name} style={{ width: "100px", marginRight: "20px" }} />
            <p>{item.name} - £{item.price}</p>
            <button onClick={() => deleteItem(item.id)} style={{ marginLeft: "20px" }}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};



export default Cartpage;