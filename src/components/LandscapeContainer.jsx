import PropTypes from 'prop-types';
import './LandscapeSection.css';

const LandscapeContainer = ({ category, isFirst, isLast }) => {
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

    topPicksForNigeria: {
      title: "Top Picks for Nigeria",
      items: [
        {
          id: 100,
          title: "Top Pick 1",
          image: "https://m.media-amazon.com/images/I/71lRPcRgJjL._AC_SY400_.jpg",
        },
        {
          id: 101,
          title: "Top Pick 2",
          image: "https://m.media-amazon.com/images/I/51glBADjrpL._AC_SY400_.jpg",
        },
        {
          id: 102,
          title: "Top Pick 3",
          image: "https://m.media-amazon.com/images/I/51glBADjrpL._AC_SY400_.jpg",
        },
        {
          id: 103,
          title: "Top Pick 4",
          image: "https://m.media-amazon.com/images/I/517aJbAwDEL._AC_SY400_.jpg",
        },
        {
          id: 104,
          title: "Top Pick 5",
          image: "https://m.media-amazon.com/images/I/412XE0J9GIL._AC_SY400_.jpg",
        },
        {
          id: 105,
          title: "Top Pick 6",
          image: "https://m.media-amazon.com/images/I/61IylKAap-L._AC_SY400_.jpg",
        },
        {
          id: 106,
          title: "Top Pick 7",
          image: "https://m.media-amazon.com/images/I/61pp+20Oo0L._AC_SY400_.jpg",
        },
        {
          id: 107,
          title: "Top Pick 8",
          image: "https://m.media-amazon.com/images/I/61baox2Ih-L._AC_SY400_.jpg",
        },
        {
          id: 108,
          title: "Top Pick 9",
          image: "https://m.media-amazon.com/images/I/71c93lOix0L._AC_SY400_.jpg",
        },
        {
          id: 109,
          title: "Top Pick 10",
          image: "https://m.media-amazon.com/images/I/61cmA0j4n+L._AC_SY400_.jpg",
        },
        {
          id: 110,
          title: "Top Pick 11",
          image: "https://m.media-amazon.com/images/I/81WKMB7O9lL._AC_SY400_.jpg",
        },
        {
          id: 111,
          title: "Top Pick 12",
          image: "https://m.media-amazon.com/images/I/81HgLJqSsnL._AC_SY400_.jpg",
        },
        {
          id: 112,
          title: "Top Pick 13",
          image: "https://m.media-amazon.com/images/I/71FohJtmeNL._AC_SY400_.jpg",
        },
        {
          id: 113,
          title: "Top Pick 14",
          image: "https://m.media-amazon.com/images/I/61dCeHt-usL._AC_SY400_.jpg",
        },
        {
          id: 114,
          title: "Top Pick 15",
          image: "https://m.media-amazon.com/images/I/61dCeHt-usL._AC_SY400_.jpg"},
      ]
    },

    bestSellerInBooks: {
      title: "Best Seller In Books",
      items: [
        {
          id: 27,
          title: "Product 27",
          image: "https://m.media-amazon.com/images/I/713-J3tw46L._AC_SY200_.jpg",
        },
        {
          id: 28,
          title: "Product 28",
          image: "https://m.media-amazon.com/images/I/810bsxh1MmL._AC_SY200_.jpg",
        },
        {
          id: 29,
          title: "Product 29",
          image: "https://m.media-amazon.com/images/I/71ihGxMQEBL._AC_SY200_.jpg",
        },
        {
          id: 30,
          title: "Product 30",
          image: "https://m.media-amazon.com/images/I/913C+MR3S5L._AC_SY200_.jpg",
        },
        {
          id: 31,
          title: "Product 31",
          image: "https://m.media-amazon.com/images/I/91yskyVPAmL._AC_SY200_.jpg",
        },
        {
          id: 32,
          title: "Product 32",
          image: "https://m.media-amazon.com/images/I/61ARXVDOxJL._AC_SY200_.jpg",
        },
        {
          id: 33,
          title: "Product 33",
          image: "https://m.media-amazon.com/images/I/81NsX5gOJkL._AC_SY200_.jpg",
        },
        {
          id: 34,
          title: "Product 34",
          image: "https://m.media-amazon.com/images/I/81z1AGbMEVL._AC_SY200_.jpg",
        },
        {
          id: 35,
          title: "Product 35",
          image: "https://m.media-amazon.com/images/I/61kllnlY7YL._AC_SY200_.jpg",
        },
        {
          id: 36,
          title: "Product 36",
          image: "https://m.media-amazon.com/images/I/51xKFo2B+RL._AC_SY200_.jpg",
        },
        {
          id: 37,
          title: "Product 37",
          image: "https://m.media-amazon.com/images/I/81YkqyaFVEL._AC_SY200_.jpg",
        },
        {
          id: 38,
          title: "Product 38",
          image: "https://m.media-amazon.com/images/I/81uv7QtqJ0L._AC_SY200_.jpg",
        },
        {
          id: 39,
          title: "Product 39",
          image: "https://m.media-amazon.com/images/I/41XZlhQ+5NL._AC_SY200_.jpg",
        },
        {
          id: 40,
          title: "Product 40",
          image: "https://m.media-amazon.com/images/I/919XM42JQlL._AC_SY200_.jpg",
        },
        {
          id: 41,
          title: "Product 41",
          image: "https://m.media-amazon.com/images/I/919XM42JQlL._AC_SY200_.jpg"},
      ]
    },

    videoGameWish: {
      title: "Most Wished for In Video Games",
      items: [
        {
          id: 57,
          title: "Product 57",
          image: "https://m.media-amazon.com/images/I/810iANmKbOL._AC_SY200_.jpg",
        },
        {
          id: 58,
          title: "Product 58",
          image: "https://m.media-amazon.com/images/I/61GhF+JUXGL._AC_SY200_.jpg",
        },
        {
          id: 59,
          title: "Product 59",
          image: "https://m.media-amazon.com/images/I/81KYcp48kgL._AC_SY200_.jpg",
        },
        {
          id: 60,
          title: "Product 60",
          image: "https://m.media-amazon.com/images/I/810Uk95Z3mL._AC_SY200_.jpg",
        },
        {
          id: 61,
          title: "Product 61",
          image: "https://m.media-amazon.com/images/I/81gu2dFpntL._AC_SY200_.jpg",
        },
        {
          id: 62,
          title: "Product 62",
          image: "https://m.media-amazon.com/images/I/71FE4-P8hwL._AC_SY200_.jpg",
        },
        {
          id: 63,
          title: "Product 63",
          image: "https://m.media-amazon.com/images/I/81o5QpJ7aVL._AC_SY200_.jpg",
        },
        {
          id: 64,
          title: "Product 64",
          image: "https://m.media-amazon.com/images/I/81whTB488bL._AC_SY200_.jpg",
        },
        {
          id: 65,
          title: "Product 65",
          image: "https://m.media-amazon.com/images/I/8139kZStJ6L._AC_SY200_.jpg",
        },
        {
          id: 66,
          title: "Product 66",
          image: "https://m.media-amazon.com/images/I/818PodmmRaL._AC_SY200_.jpg",
        },
        {
          id: 67,
          title: "Product 67",
          image: "https://m.media-amazon.com/images/I/71XZn4NaWIL._AC_SY200_.jpg",
        },
        {
          id: 68,
          title: "Product 68",
          image: "https://m.media-amazon.com/images/I/81aJ-R4E6gL._AC_SY200_.jpg",
        },
        {
          id: 69,
          title: "Product 69",
          image: "https://m.media-amazon.com/images/I/81LLoGOJ9RL._AC_SY200_.jpg",
        },
        {
          id: 70,
          title: "Product 70",
          image: "https://m.media-amazon.com/images/I/71Y8X0WHh1L._AC_SY200_.jpg",
        },
        {
          id: 71,
          title: "Product 71",
          image: "https://m.media-amazon.com/images/I/71Y8X0WHh1L._AC_SY200_.jpg"}
      ]
    },

    moviesTVsWish: {
      title: "Most Wished for In TVs & Movies",
      items: [
        {
          id: 72,
          title: "Product 72",
          image: "https://m.media-amazon.com/images/I/71Groo63lJL._AC_SY200_.jpg",
        },
        {
          id: 73,
          title: "Product 73",
          image: "https://m.media-amazon.com/images/I/71JNdvfxj5L._AC_SY200_.jpg",
        },
        {
          id: 74,
          title: "Product 74",
          image: "https://m.media-amazon.com/images/I/71faTWApPcL._AC_SY200_.jpg",
        },
        {
          id: 75,
          title: "Product 75",
          image: "https://m.media-amazon.com/images/I/71l9NiyJ0HL._AC_SY200_.jpg",
        },
        {
          id: 76,
          title: "Product 76",
          image: "https://m.media-amazon.com/images/I/81dcLOrU5YL._AC_SY200_.jpg",
        },
        {
          id: 77,
          title: "Product 77",
          image: "https://m.media-amazon.com/images/I/91rKy7qfODL._AC_SY200_.jpg",
        },
        {
          id: 78,
          title: "Product 78",
          image: "https://m.media-amazon.com.images/I/71CbUtxZPeL._AC_SY200_.jpg",
        },
        {
          id: 79,
          title: "Product 79",
          image: "https://m.media-amazon.com/images/I/71aNunUKCsL._AC_SY200_.jpg",
        },
        {
          id: 80,
          title: "Product 80",
          image: "https://m.media-amazon.com/images/I/81QXIa9fFvL._AC_SY200_.jpg",
        },
        {
          id: 81,
          title: "Product 81",
          image: "https://m.media-amazon.com/images/I/714sCbJA+xL._AC_SY200_.jpg",
        },
        {
          id: 82,
          title: "Product 82",
          image: "https://m.media-amazon.com/images/I/81+qRc6JzXL._AC_SY200_.jpg",
        },
        {
          id: 83,
          title: "Product 83",
          image: "https://m.media-amazon.com/images/I/719hkDvWtoL._AC_SY200_.jpg",
        },
        {
          id: 84,
          title: "Product 84",
          image: "https://m.media-amazon.com/images/I/81JeYtWAU2L._AC_SY200_.jpg",
        },
        {
          id: 85,
          title: "Product 85",
          image: "https://m.media-amazon.com/images/I/71G9scZtapL._AC_SY200_.jpg",
        },
        {
          id: 86,
          title: "Product 86",
          image: "https://m.media-amazon.com/images/I/71G9scZtapL._AC_SY200_.jpg"},
      ]
    },

    
  };

if (category === 'landscape-footer') {
    return (
      <section className="landscape landscape-footer">
        <div>
        <span>See personalized recommendations</span>
        <a href="#">Sign in</a>
        <span>New customer? <a href="#">Start here.</a></span>
        </div>
      </section>
    );
  }

  // For regular categories
  if (!categories[category]) {
    console.warn(`Invalid category: ${category}`);
    return null;
  }

  const { title, items } = categories[category];
  
  // Apply conditional classes for the first and last containers
  const containerClass = `landscape${isFirst ? ' landscape-first' : ''}${isLast ? ' landscape-last' : ''}`;


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
  category: PropTypes.oneOf([
    'homeKitchen',
    'sportsOutdoors',
    'beautyPersonalCare',
    'topPicksForNigeria',
    'bestSellerInBooks',
    'videoGameWish',
    'moviesTVsWish'
  ]).isRequired,
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,
};

LandscapeContainer.defaultProps = {
  isFirst: false,
  isLast: false,
};

export default LandscapeContainer;
