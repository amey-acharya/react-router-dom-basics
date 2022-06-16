import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h1>The Products page</h1>
      <ul>
        <li><Link to='/products/product-detail/Macbook-Pro'>Macbook Pro</Link></li>
        <li><Link to='/products/product-detail/iPad'>iPad</Link></li>
        <li><Link to='/products/product-detail/iPhone'>iPhone</Link></li>
      </ul>
    </div>
  );
};

export default Products;
