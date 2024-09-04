import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './ProductGrid.css';

function ProductGrid({ title, items }) {
  const navigate = useNavigate();
  const isSingleItem = items.length === 1;

  const getSeeMoreText = () => {
    if (isSingleItem) {
      return "Shop now";
    } else if (title === "Gaming accessories") {
      return "See more";
    } else if (title === "Shop deals in Fashion") {
      return "See all deals";
    } else {
      return "See more"; // Default text for other cases
    }
  };

  const handleProductClick = (item) => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div className={`productsGrid ${isSingleItem ? 'singleItem' : ''}`}>
      <div className="headline">
        <h2>{title}</h2>
      </div>
      
      <div className={`handpickA ${isSingleItem ? 'singleItemGrid' : ''}`}>
        {items.map((item, index) => (
          <div 
            className={`handpickGrid ${isSingleItem ? 'singleItemGrid' : ''}`} 
            key={item.id || index}
            onClick={() => handleProductClick(item)}
          >
            <div className="imageContainer">
              <img className='gamePhoto' src={item.image} alt={item.alt || 'Product image'}/>
            </div>
            <p className="productName">{item.name}</p>
            {item.price && <p className="productPrice">${item.price.toFixed(2)}</p>}
          </div>
        ))}
      </div>

      <div className="amazonGadgetLast">
        <a className="seeAnchor" href="#">
          {getSeeMoreText()}
        </a>
      </div>
    </div>
  );
}

// Define PropTypes for props validation
ProductGrid.propTypes = {
  title: PropTypes.string.isRequired, // title should be a string and is required
  items: PropTypes.arrayOf( // items should be an array of objects
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // id can be a string or number
      name: PropTypes.string.isRequired, // name should be a string and is required
      image: PropTypes.string.isRequired, // image should be a string and is required
      alt: PropTypes.string, // alt is optional and should be a string
      price: PropTypes.number, // price is optional and should be a number
    })
  ).isRequired,
};

export default ProductGrid;