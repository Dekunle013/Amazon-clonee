import PropTypes from 'prop-types';
import './LandscapeSection.css';

const LandscapeContainer = ({ category, isFirst }) => {
  const categories = {
    homeKitchen: {
      title: "Best Sellers in Home & Kitchen",
      items: [
          { id: 1, title: "Product 1", image: "https://m.media-amazon.com/images/I/61X5bY+reYL._AC_SY400_.jpg", alt: "" },
          { id: 2, title: "Product 2", image: "https://m.media-amazon.com/images/I/51C2DONw-TL._AC_SY400_.jpg", alt: "" },
          { id: 3, title: "Product 3", image: "https://m.media-amazon.com/images/I/717FfWa5e4L._AC_SY400_.jpg", alt: "" },
          { id: 4, title: "Product 4", image: "https://m.media-amazon.com/images/I/61KCbJGpAFL._AC_SY400_.jpg", alt: "" },
          { id: 5, title: "Product 5", image: "https://m.media-amazon.com/images/I/713afJ6oJ+L._AC_SY400_.jpg", alt: "" },
          { id: 6, title: "Product 6", image: "https://m.media-amazon.com/images/I/71M6a8SHCeL._AC_SY400_.jpg", alt: "" },
          { id: 7, title: "Product 7", image: "https://m.media-amazon.com/images/I/51lFr88wxML._AC_SY400_.jpg", alt: "" },
          { id: 8, title: "Product 8", image: "https://m.media-amazon.com/images/I/51xy9oTOHlL._AC_SY400_.jpg", alt: "" },
          { id: 9, title: "Product 9", image: "https://m.media-amazon.com/images/I/71wv3D6w-vL._AC_SY400_.jpg", alt: "" },
          { id: 10, title: "Product 10", image: "https://m.media-amazon.com/images/I/71RekxT+qML._AC_SY400_.jpg", alt: "" },
          { id: 11, title: "Product 11", image: "https://m.media-amazon.com/images/I/61UFMf2FffL._AC_SY400_.jpg", alt: "" },
          { id: 12, title: "Product 12", image: "https://m.media-amazon.com/images/I/81RLgrUwG5L._AC_SY400_.jpg", alt: "" },
          { id: 13, title: "Product 13", image: "https://m.media-amazon.com/images/I/81jUEgf7F3L._AC_SY400_.jpg", alt: "" },
          { id: 14, title: "Product 14", image: "https://m.media-amazon.com/images/I/81yeSy2PbtL._AC_SY400_.jpg", alt: "" },
          { id: 15, title: "Product 15", image: "https://m.media-amazon.com/images/I/81JmVgvOmCL._AC_SY400_.jpg", alt: "" },
          { id: 16, title: "Product 16", image: "https://m.media-amazon.com/images/I/71Pw5U7rFlL._AC_SY400_.jpg", alt: "" },
          { id: 17, title: "Product 17", image: "https://m.media-amazon.com/images/I/71nhPE7vxHL._AC_SY400_.jpg", alt: "" },
          { id: 18, title: "Product 18", image: "https://m.media-amazon.com/images/I/71t-9BTIg9L._AC_SY400_.jpg", alt: "" },
          { id: 19, title: "Product 19", image: "https://m.media-amazon.com/images/I/51c5xruL9zL._AC_SY400_.jpg", alt: "" },
          { id: 20, title: "Product 20", image: "https://m.media-amazon.com/images/I/91GmE6gQF9L._AC_SY400_.jpg", alt: "" },
          { id: 21, title: "Product 21", image: "https://m.media-amazon.com/images/I/710mHCabqIL._AC_SY400_.jpg", alt: "" },
          { id: 22, title: "Product 22", image: "https://m.media-amazon.com/images/I/81SIy4WF3bL._AC_SY400_.jpg", alt: "" },
          { id: 23, title: "Product 23", image: "https://m.media-amazon.com/images/I/81AFxaQnZXL._AC_SY400_.jpg", alt: "" },
          { id: 24, title: "Product 24", image: "https://m.media-amazon.com/images/I/812Bae40uHL._AC_SY400_.jpg", alt: "" },
          { id: 25, title: "Product 25", image: "https://m.media-amazon.com/images/I/61mdPtC0iIL._AC_SY400_.jpg", alt: "" },
          { id: 26, title: "Product 26", image: "https://m.media-amazon.com/images/I/71O0Is7QpeL._AC_SY400_.jpg", alt: "" },
      ],
    },
    
    sportsOutdoors: {
      title: "Best Sellers in Sports & Outdoors",
      items: [
        { id: 1, title: "Sports Product 1", image: "https://m.media-amazon.com/images/I/81Y26toqdTL._AC_SY400_.jpg", alt: "81Y26toqdTL" },
        { id: 2, title: "Sports Product 2", image: "https://m.media-amazon.com/images/I/51SxIyLWwUL._AC_SY400_.jpg", alt: "51SxIyLWwUL" },
        { id: 3, title: "Sports Product 3", image: "https://m.media-amazon.com/images/I/71S4-NjoTDL._AC_SY400_.jpg", alt: "71S4-NjoTDL" },
        { id: 4, title: "Sports Product 4", image: "https://m.media-amazon.com/images/I/81WMJpUv98L._AC_SY400_.jpg", alt: "81WMJpUv98L" },
        { id: 5, title: "Sports Product 5", image: "https://m.media-amazon.com/images/I/71-P2+J2RQL._AC_SY400_.jpg", alt: "71-P2+J2RQL" },
        { id: 6, title: "Sports Product 6", image: "https://m.media-amazon.com/images/I/91yuQpw++mL._AC_SY400_.jpg", alt: "91yuQpw++mL" },
        { id: 7, title: "Sports Product 7", image: "https://m.media-amazon.com/images/I/714EyuLm+HL._AC_SY400_.jpg", alt: "714EyuLm+HL" },
        { id: 8, title: "Sports Product 8", image: "https://m.media-amazon.com/images/I/61Denlo-ceL._AC_SY400_.jpg", alt: "61Denlo-ceL" },
        { id: 9, title: "Sports Product 9", image: "https://m.media-amazon.com/images/I/71cSLFE39zL._AC_SY400_.jpg", alt: "71cSLFE39zL" },
        { id: 10, title: "Sports Product 10", image: "https://m.media-amazon.com/images/I/619fJAHoEzL._AC_SY400_.jpg", alt: "619fJAHoEzL" },
        { id: 11, title: "Sports Product 11", image: "https://m.media-amazon.com/images/I/61+UlXddzxL._AC_SY400_.jpg", alt: "61+UlXddzxL" },
        { id: 12, title: "Sports Product 12", image: "https://m.media-amazon.com/images/I/71SDZVqu3+L._AC_SY400_.jpg", alt: "71SDZVqu3+L" },
        { id: 13, title: "Sports Product 13", image: "https://m.media-amazon.com/images/I/71m-r6CHobL._AC_SY400_.jpg", alt: "71m-r6CHobL" },
        { id: 14, title: "Sports Product 14", image: "https://m.media-amazon.com/images/I/71WGsXRgQrL._AC_SY400_.jpg", alt: "71WGsXRgQrL" },
        { id: 15, title: "Sports Product 15", image: "https://m.media-amazon.com/images/I/817U5N6rypL._AC_SY400_.jpg", alt: "817U5N6rypL" },
        { id: 16, title: "Sports Product 16", image: "https://m.media-amazon.com/images/I/71wm42EtoNL._AC_SY400_.jpg", alt: "71wm42EtoNL" },
        { id: 17, title: "Sports Product 17", image: "https://m.media-amazon.com/images/I/51OHYIf9w6L._AC_SY400_.jpg", alt: "51OHYIf9w6L" },
        { id: 18, title: "Sports Product 18", image: "https://m.media-amazon.com/images/I/91c3Ca9UdiS._AC_SY400_.jpg", alt: "91c3Ca9UdiS" },
        { id: 19, title: "Sports Product 19", image: "https://m.media-amazon.com/images/I/71hYbAifNoL._AC_SY400_.jpg", alt: "71hYbAifNoL" },
        { id: 20, title: "Sports Product 20", image: "https://m.media-amazon.com/images/I/41cLCgyBbaL._AC_SY400_.jpg", alt: "41cLCgyBbaL" },
        { id: 21, title: "Sports Product 21", image: "https://m.media-amazon.com/images/I/713ybkIUp9L._AC_SY400_.jpg", alt: "713ybkIUp9L" },
        { id: 22, title: "Sports Product 22", image: "https://m.media-amazon.com/images/I/61ZLEHX1FsL._AC_SY400_.jpg", alt: "61ZLEHX1FsL" },
        { id: 23, title: "Sports Product 23", image: "https://m.media-amazon.com/images/I/71aaK-w9tbL._AC_SY400_.jpg", alt: "71aaK-w9tbL" },
        { id: 24, title: "Sports Product 24", image: "https://m.media-amazon.com/images/I/7106YA5SnZL._AC_SY400_.jpg", alt: "7106YA5SnZL" },
        { id: 25, title: "Sports Product 25", image: "https://m.media-amazon.com/images/I/41c+ROMdgcL._AC_SY400_.jpg", alt: "41c+ROMdgcL" },
        { id: 26, title: "Sports Product 26", image: "https://m.media-amazon.com/images/I/71bN90fJPTL._AC_SY400_.jpg", alt: "71bN90fJPTL" }
      ],
    },

    beautyPersonalCare: {
      title: "Best Sellers in Beauty & Personal Care",
      items: [
        {id: 42, title: "Product 42", image: "https://m.media-amazon.com/images/I/51YlAYwPx6L._AC_SY200_.jpg",},
        {
          id: 43,
          title: "Product 43",
          image: "https://m.media-amazon.com/images/I/61NFkX7td8L._AC_SY200_.jpg",
        },
        {
          id: 44,
          title: "Product 44",
          image: "https://m.media-amazon.com/images/I/51bryY47IFL._AC_SY200_.jpg",
        },
        {
          id: 45,
          title: "Product 45",
          image: "https://m.media-amazon.com/images/I/41tFi33Pi6L._AC_SY200_.jpg",
        },
        {
          id: 46,
          title: "Product 46",
          image: "https://m.media-amazon.com/images/I/41roS4Ps5RL._AC_SY200_.jpg",
        },
        {
          id: 47,
          title: "Product 47",
          image: "https://m.media-amazon.com/images/I/612HeyYXOnL._AC_SY200_.jpg",
        },
        {
          id: 48,
          title: "Product 48",
          image: "https://m.media-amazon.com/images/I/71PXjjbQCzL._AC_SY200_.jpg",
        },
        {
          id: 49,
          title: "Product 49",
          image: "https://m.media-amazon.com/images/I/71XeBzXVE+L._AC_SY400_.jpg",
        },
        {
          id: 50,
          title: "Product 50",
          image: "https://m.media-amazon.com/images/I/61pIL2maVKL._AC_SY400_.jpg",
        },
        {
          id: 51,
          title: "Product 51",
          image: "https://m.media-amazon.com/images/I/51iMh82b5UL._AC_SY400_.jpg",
        },
        {
          id: 52,
          title: "Product 52",
          image: "https://m.media-amazon.com/images/I/71fizOWwhFL._AC_SY400_.jpg",
        },
        {
          id: 53,
          title: "Product 53",
          image: "https://m.media-amazon.com/images/I/41xE4gTTZQL._AC_SY400_.jpg",
        },
        {
          id: 54,
          title: "Product 54",
          image: "https://m.media-amazon.com/images/I/71x8eJYN4JL._AC_SY400_.jpg",
        },
        {
          id: 55,
          title: "Product 55",
          image: "https://m.media-amazon.com/images/I/61zhzjgd2xL._AC_SY400_.jpg",
        },
        {
          id: 56,
          title: "Product 56",
          image: "https://m.media-amazon.com/images/I/61zhzjgd2xL._AC_SY400_.jpg"}
      ],
    },
  };

  const { title, items } = categories[category];
  
  // Apply conditional class for the first container
  const containerClass = isFirst ? "landscape landscape-first" : "landscape";

  return (
    <section className={containerClass}>
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
  isFirst: PropTypes.bool,
};

LandscapeContainer.defaultProps = {
  isFirst: false,
};

export default LandscapeContainer;
