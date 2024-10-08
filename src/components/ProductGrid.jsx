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
    <div className={`productsGrid flex flex-col justify-between w-[350px] h-auto p-[20px] bg-white box border ${isSingleItem ? 'singleItem' : ''}`}>
      <div className="headline w-full mb-2.5 text-lg">
        <h2 className=" text-[21px] m-0 ">{title}</h2>
      </div>
      
      <div className={`handpickA w-full grow grid grid-cols-2 grid-rows-2 gap-2.5 ${isSingleItem ? 'singleItemGrid' : ''}`}>
        {items.map((item, index) => (
          <div 
            className={`handpickGrid flex flex-col justify-between cursor-pointer ${isSingleItem ? 'singleItemGrid' : ''}`} 
            key={item.id || index}
            onClick={() => handleProductClick(item)}
          >
            <div className="imageContainer w-full h-0 pb-[100%] relative overflow-hidden">
              <img className="gamePhoto absolute top-0 left-0 w-full h-full object-cover" src={item.image} alt={item.alt || 'Product image'}/>
            </div>
            <p className="productName text-[12px] text-black m-[5px]">{item.name}</p>
            {/* {item.price && <p className="productPrice">${item.price.toFixed(2)}</p>} */}
          </div>
        ))}
      </div>

      <div className="amazonGadgetLast w-full mt-[30px]">
        <a className="seeAnchor text-sm font-medium no-underline text-[#007185]" href="#">
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