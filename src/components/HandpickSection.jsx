import React from 'react';

const HandpickSection = ({ title, items }) => {
  return (
    <div className="productsGrid">
      <div className="headline">
        <h2>{title}</h2>
      </div>
      <div className="handpickA">
        {items.map((item, index) => (
          <div className="handpickGrid" key={item.id || index}>
            <img
              className="quad"
              src={item.image}
              alt={item.alt || "Product image"}
            />
          </div>
        ))}
      </div>
      <div className="amazonGadgetLast">
        <a className="seeAnchor" href="#">
          See moreCQC
        </a>
      </div>
    </div>
  );
}

export default HandpickSection;
