import React from 'react';
import { products } from './data';
import Product from '../../components/Products/Product';
import './styles.css';

const Homework05 = () => {
  return (
    <div className="homework05">
      {products.map(product => (
        <Product key={product.id} name={product.name} price={product.price} />
      ))}
    </div>
  );
};

export default Homework05;
