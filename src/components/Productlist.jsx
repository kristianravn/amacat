// src/components/ProductList.jsx
import React, { useEffect, useState } from 'react';
import { CatList, CatItem, CatImage } from '../styledComponent';

const ProductList = ({cats}) => {

console.log("cats on productlist: ", cats)
  return (
    <div>
      <h1>Available Cats</h1>
      <CatList>
        {cats ? cats.map((cat) => (
          <CatItem key={cat.id}>
            <CatImage src={cat.url} alt="Cat" />
            <p>Cat Name: {cat.id}</p>
            <p>Price: $100</p>
            <button>Add to Cart</button>
          </CatItem>
        )) : <p>LOADING...</p>}
      </CatList>
    </div>
  );
};

export default ProductList;
