import React from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() {
  const { id } = useParams();

  // Here you would typically fetch the product details based on the id
  // For now, we'll just display the id

  return (
    <div className="product-page">
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
      {/* Add more product details here */}
      <button onClick={() => console.log(`Added product ${id} to cart`)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductPage;