import React from 'react';
import ProductList from '../components/Productlist';

const ProductPage = ({cart,setCart, cats}) => {
  return (
    <div>
      <h1>Our Cats</h1>
      <ProductList cart={cart} cats={cats} setCart={setCart}/>
    </div>
  );
};

export default ProductPage;

