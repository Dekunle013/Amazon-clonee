import React from 'react';
import './Catalogue.css';
import ProductGrid from './ProductGrid';
import HandpickSection from './HandpickSection';

function Catalogue() {
  return (
    <main>
      <div className="wallpaper">
        <img
          className="backgroundWallpaper"
          src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
          alt="Amazon Background Wallpaper"
        />
      </div>

      <section className='firstGrid'>
        <div className="productSectionA">
          <ProductGrid title="Gaming accessories" items={gamingAccessories} />
          <ProductGrid title="Shop deals in Fashion" items={fashionDeals} />
          {/* <ProductGrid title="Refresh Your space" items={refreshSpace} /> */}
          <ProductGrid title="Deals in PCs" items={dealsInPCs} />
          <ProductGrid title="Toys under $25" items={toysUnder25} />
          {/* <ProductGrid title="Fashion Trends You Like" items={fashionTrend} /> */}
          {/* <ProductGrid title="Beauty Steals under $25" items={BeautyUnder25} /> */}
          {/* <ProductGrid title="Home decor under $50" items={decorUnder50} /> */}
          <ProductGrid title="Toys under $25" items={toysUnder25} />

          <ProductGrid title="Amazon Gadget Store" items={amazonGadgetStore} />
          <HandpickSection title="Handpicked music & audio" items={handpickedMusicAudio} />
          <ProductGrid title="Fill your Easter basket with joy" items={easterBasket} />
          <ProductGrid title="Top Deal" items={topDeal} />
        </div>
      </section>

      <div className="landscapeA">
        <div className="headlineA">
          <h3>Best Sellers in Sport & Outdoors</h3>
        </div>
        <div className="landA">
          {bestSellersInSportOutdoors.map((item, index) => (
            <a href="#" key={index}>
              <img className="books" src={item.image} alt={item.name || "Sport & Outdoors Item"} />
            </a>
          ))}
        </div>
      </div>

      <div className="landscapeB">
        <div className="headlineA">
          <h3>Best Sellers in Beauty & Personal Care</h3>
        </div>
        <div className="landA">
          {bestSellersInBeautyPersonalCare.map((item, index) => (
            <a href="#" key={index}>
              <img src={item.image} alt={item.name || "Beauty & Personal Care Item"} />
            </a>
          ))}
        </div>
      </div>

      <div className="productSectionB">
        <ProductGrid title="Shop activity trackers and smartwatches" items={activityTrackers} />
        <ProductGrid title="Gaming merchandise" items={gamingMerchandise} />
      </div>
    </main>
  );
}

const gamingAccessories = [
  { id: 1, title: "Gaming Mouse", price: 29.99, image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg" },
  { id: 2, title: "Mechanical Keyboard", price: 79.99, image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg" },
  { id: 3, title: "Gaming Headset", price: 59.99, image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg" },
  { id: 4, title: "Gaming Chair", price: 59.99, image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg" }
];

const dealsInPCs = [
  { id: 1, title: "Gaming Laptop", price: 999.99, image: "laptop.jpg" },
  { id: 2, title: "Desktop PC", price: 749.99, image: "desktop.jpg" },
];

const amazonGadgetStore = [
  { id: 1, title: "Smartwatch", price: 199.99, image: "smartwatch.jpg" },
  { id: 2, title: "Bluetooth Speaker", price: 49.99, image: "speaker.jpg" },
];

const handpickedMusicAudio = [
  { id: 1, title: "Wireless Earbuds", price: 149.99, image: "earbuds.jpg" },
  { id: 2, title: "Home Theater System", price: 299.99, image: "home_theater.jpg" },
];

const fashionDeals = [
  { id: 1, title: "Men's Jacket", price: 59.99, image: "jacket.jpg" },
  { id: 2, title: "Women's Handbag", price: 89.99, image: "handbag.jpg" },
];

const easterBasket = [
  { id: 1, title: "Chocolate Bunny", price: 9.99, image: "chocolate_bunny.jpg" },
  { id: 2, title: "Easter Egg Basket", price: 19.99, image: "egg_basket.jpg" },
];

const toysUnder25 = [
  { id: 1, title: "Puzzle Game", price: 14.99, image: "puzzle.jpg" },
  { id: 2, title: "Toy Car", price: 12.99, image: "toy_car.jpg" },
];

const topDeal = [
  { id: 1, title: "4K TV", price: 499.99, image: "4k_tv.jpg" },
];

const bestSellersInSportOutdoors = [
  { id: 1, title: "Yoga Mat", price: 29.99, image: "yoga_mat.jpg" },
  { id: 2, title: "Dumbbells", price: 39.99, image: "dumbbells.jpg" },
];

const bestSellersInBeautyPersonalCare = [
  { id: 1, title: "Facial Cleanser", price: 14.99, image: "cleanser.jpg" },
  { id: 2, title: "Moisturizer", price: 24.99, image: "moisturizer.jpg" },
];

const activityTrackers = [
  { id: 1, title: "Fitness Tracker", price: 99.99, image: "fitness_tracker.jpg" },
];

const gamingMerchandise = [
  { id: 1, title: "T-Shirt", price: 19.99, image: "tshirt.jpg" },
  { id: 2, title: "Cap", price: 14.99, image: "cap.jpg" },
];


export default Catalogue;
