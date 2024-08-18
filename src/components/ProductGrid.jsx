import React from 'react';
import './ProductGrid.css';

function ProductGrid({ title, items }) {
  return (
    <div className="productsGrid">
      <div className="headline">
        <h2>{title}</h2>
      </div>
      
      <div className="handpickA">
        {items.map((item, index) => (
          <div className="handpickGrid" key={item.id || index}>
            <div className="imageContainer">
              <img className='gamePhoto' src={item.image} alt={item.alt || 'Product image'}/>
            </div>
            <p className="productName">{item.name}</p>
          </div>
        ))}
      </div>

      <div className="amazonGadgetLast">
        <a className="seeAnchor" href="#">
          See more
        </a>
      </div>
    </div>
  );
}

export default ProductGrid;
