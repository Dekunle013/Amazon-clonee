
import PropTypes from 'prop-types';
import './LandscapeSection.css';

const LandscapeContainer = ({ category }) => {
  const categories = {
    homeKitchen: {
      title: "Best Sellers in Home & Kitchen",
      items: [
        { id: 1, title: "Product 1", image: "https://m.media-amazon.com/images/I/61X5bY+reYL._AC_SY400_.jpg" },
        { id: 2, title: "Product 2", image: "https://m.media-amazon.com/images/I/51C2DONw-TL._AC_SY400_.jpg" },
        // ... add the rest of the items
      ]
    },
    sportsOutdoors: {
      title: "Best Sellers in Sports & Outdoors",
      items: [
        { id: 1, title: "Sports Product 1", image: "https://m.media-amazon.com/images/I/81Y26toqdTL._AC_SY400_.jpg" },
        { id: 2, title: "Sports Product 2", image: "https://m.media-amazon.com/images/I/51SxIyLWwUL._AC_SY400_.jpg" },
        // ... add the rest of the items
      ]
    },
    beautyPersonalCare: {
      title: "Best Sellers in Beauty & Personal Care",
      items: [
        { id: 1, title: "Facial Cleanser", price: 14.99, image: "cleanser.jpg" },
        // ... add more items as needed
      ]
    }
  };

  const { title, items } = categories[category];

  return (
    <section className="landscape">
      <div className="headlineA">
        <span>{title}</span>
      </div>
      <div className="landA">
        {items.map((item) => (
          <a href="#" key={item.id}>
            <img className="books" src={item.image} alt={item.title || "Product"} />
          </a>
        ))}
      </div>
    </section>
  );
};

LandscapeContainer.propTypes = {
  category: PropTypes.oneOf(['homeKitchen', 'sportsOutdoors', 'beautyPersonalCare']).isRequired,
};

export default LandscapeContainer;