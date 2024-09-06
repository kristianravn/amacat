// src/components/ProductList.jsx
import React, { useEffect, useState } from 'react';
import { CatList, CatItem, CatImage } from '../styledComponent';

const ProductList = ({cart, setCart,cats}) => {

  const addToCart = (e,product,cart) => {
    e.preventDefault() 
    console.log("add to cart",product) 
    setCart([...cart, product]);
  };
  return (
    <div>
      <h1>Available Cats</h1>
      <CatList>
        {cats ? cats.map((cat) => (
          <CatItem key={cat.id}>
            <CatImage src={cat.url} alt="Cat" />
            <p>Cat Name: {cat.id}</p>
            <p>Price: $100</p>
            <button onClick={(e) => addToCart(e,cat,cart)}>Add to Cart</button>
          </CatItem>
        )) : <p>LOADING...</p>}
      </CatList>
    </div>
  );
};

export default ProductList;
