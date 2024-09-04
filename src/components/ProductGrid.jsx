import React from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div className={`flex flex-col justify-between w-[350px] h-auto p-5 bg-white box-border ${isSingleItem ? '' : ''}`}>
      <div className="w-full mb-2">
        <h2 className="text-[21px] m-0">{title}</h2>
      </div>
      
      <div className={`w-full flex-grow ${isSingleItem ? 'flex justify-center items-center' : 'grid grid-cols-2 grid-rows-2 gap-2'}`}>
        {items.map((item, index) => (
          <div 
            className={`flex flex-col justify-between cursor-pointer transition-transform duration-200 ${isSingleItem ? 'w-full h-full' : ''} hover:translate-y-[-5px]`} 
            key={item.id || index}
            onClick={() => handleProductClick(item)}
          >
            <div className={`relative overflow-hidden ${isSingleItem ? 'h-[calc(100%-40px)]' : 'w-full pb-[100%]'}`}>
              <img className='absolute top-0 left-0 w-full h-full object-cover' src={item.image} alt={item.alt || 'Product image'} />
            </div>
            <p className={`text-[12px] mt-1 text-[#333] ${isSingleItem ? 'text-center text-[14px] mt-2' : ''}`}>{item.name}</p>
            {item.price && <p className="text-[14px] font-bold text-[#B12704] mt-1">${item.price.toFixed(2)}</p>}
          </div>
        ))}
      </div>

      <div className="w-full mt-[30px]">
        <a className="text-[#007185] text-[13px] font-medium no-underline" href="#">
          {getSeeMoreText()}
        </a>
      </div>
    </div>
  );
}

export default ProductGrid;
