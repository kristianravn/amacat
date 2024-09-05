import React from 'react';
import ProductList from '../components/Productlist';

const ProductPage = ({cats}) => {
  return (
    <div>
      <h1>Our Cats</h1>
      <ProductList cats={cats}/>
    </div>
  );
};

export default ProductPage;

