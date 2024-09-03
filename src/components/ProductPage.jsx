import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a fetch operation to get product details based on the ID
    const fetchProductDetails = async () => {
      try {
        // Replace this with your actual API call
        const response = await new Promise((resolve) => 
          setTimeout(() => resolve({ id, name: 'Sample Product', price: 29.99 }), 1000)
        );
        setProduct(response);
      } catch (error) {
        console.error('Failed to fetch product details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="product-page">
      <a href="#" className='banner'>link</a>
      <ul>
        <li>pant</li>
        <li>opa</li>
      </ul>
      <p>Product ID: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Price: ${product.price}</p>
      {/* Add more product details here */}
      <button
        className="add-to-cart-button"
        onClick={() => console.log(`Added product ${product.id} to cart`)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductPage;
