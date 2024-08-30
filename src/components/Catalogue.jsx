import { useState, useEffect } from 'react';
import './Catalogue.css';
import ProductGrid from './ProductGrid';
import LandscapeContainer from './LandscapeContainer';

function Catalogue() {
  const [currentWallpaperIndex, setCurrentWallpaperIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWallpaperIndex((prevIndex) => 
        (prevIndex + 1) % wallpapers.length
      );
    }, 15000); 

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  const changeWallpaper = (direction) => {
    setCurrentWallpaperIndex((prevIndex) => {
      if (direction === 'next') {
        return (prevIndex + 1) % wallpapers.length;
      } else {
        return prevIndex === 0 ? wallpapers.length - 1 : prevIndex - 1;
      }
    });
  };

  return (
    <main>
      <div 
        className="wallpaper"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <img
          className="backgroundWallpaper"
          src={wallpapers[currentWallpaperIndex]}
          alt={`Amazon Background Wallpaper ${currentWallpaperIndex + 1}`}
        />
        {isHovering && (
          <>
            <button 
              className="wallpaper-nav wallpaper-nav-left" 
              onClick={() => changeWallpaper('prev')}
            >
              &#10094; {/* Left arrow */}
            </button>
            <button 
              className="wallpaper-nav wallpaper-nav-right" 
              onClick={() => changeWallpaper('next')}
            >
              &#10095; {/* Right arrow */}
            </button>
          </>
        )}

        <section className='firstGrid'>
          <div className="productSectionA">
            <ProductGrid title="Gaming accessories" items={gamingAccessories} />
            <ProductGrid title="Shop deals in Fashion" items={fashionDeals} />
            <ProductGrid title="Refresh Your Space" items={refreshYourSpace} />
            <ProductGrid title="Deals in PCs" items={dealsInPCs} />
            <ProductGrid title="Toys under $25" items={toysUnder25} />
            <ProductGrid title="Fashion Trends You Like" items={fashionTrend} />
            <ProductGrid title="Beauty Steals under $25" items={beautyUnder25} />
            <ProductGrid title="Home decor under $50" items={decorUnder50} />
          </div>
        </section>
      </div>

      <LandscapeContainer category="homeKitchen" isFirst />
      <LandscapeContainer category="sportsOutdoors" />

      <section className='secondGrid'>
        <div className="productSectionB">
          <ProductGrid title="Gaming Merchandise" items={gamingMerch} />
          <ProductGrid title="Shop activity trackers and smartwatches" items={smartWatches} />
          <ProductGrid title="Warm & welcoming decor" items={welcomeDecor} />
          <ProductGrid title="Great prices on shoes" items={shoesPrice} />
        </div>
      </section>
      
      <LandscapeContainer category="beautyPersonalCare" />
      <LandscapeContainer category="topPicksForNigeria" />

      <section className='secondGrid'>
        <div className="productSectionB">
          <ProductGrid title="Gaming accessories" items={gamingAccessories} />
          <ProductGrid title="Shop deals in Fashion" items={fashionDeals} />
          {/* <ProductGrid title="Refresh Your space" items={refreshSpace} /> */}
          <ProductGrid title="Deals in PCs" items={dealsInPCs} />
          <ProductGrid title="Toys under $25" items={toysUnder25} />
          {/* <ProductGrid title="Fashion Trends You Like" items={fashionTrend} /> */}
          {/* <ProductGrid title="Beauty Steals under $25" items={BeautyUnder25} /> */}
          {/* <ProductGrid title="Home decor under $50" items={decorUnder50} /> */}
          {/* <ProductGrid title="Toys under $25" items={toysUnder25} /> */}

          {/* <ProductGrid title="Amazon Gadget Store" items={amazonGadgetStore} /> */}
          {/* <HandpickSection title="Handpicked music & audio" items={handpickedMusicAudio} /> */}
          {/* <ProductGrid title="Fill your Easter basket with joy" items={easterBasket} /> */}
          {/* <ProductGrid title="Top Deal" items={topDeal} /> */}
        </div>
      </section>

      <LandscapeContainer category="bestSellerInBooks" />
      <LandscapeContainer category="videoGameWish" />

      <section className='secondGrid'>
        <div className="productSectionB">
          <ProductGrid title="Gaming accessories" items={gamingAccessories} />
          <ProductGrid title="Shop deals in Fashion" items={fashionDeals} />
          <ProductGrid title="Deals in PCs" items={dealsInPCs} />
          <ProductGrid title="Toys under $25" items={toysUnder25} />
        </div>
      </section>

      <section className="landscape">
        
      </section>

      <section className="landscape">
       
      </section>
    </main>
  );
}

const wallpapers = [
  "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/71ve0pYz7uL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/71C-ztbXMCL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/610ZRyRg+jL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg",
];

const gamingAccessories = [
  { id: 1, title: "Gaming Headset", price: 59.99, image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg", name: 'Headsets'},
  { id: 2, title: "Mechanical Keyboard", price: 79.99, image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg", name: 'Keyboards'},
  { id: 3, title: "Gaming Mouse", price: 29.99, image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg", name: 'Computer mice'},
  { id: 4, title: "Gaming Chair", price: 59.99, image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg", name: 'Chairs'}
];

const fashionDeals = [
  { id: 1, title: "Jeans under $50", name: "Jeans under $50", image: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg" },
  { id: 2, title: "Tops under $25", name: "Tops under $25", image: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_1x._SY116_CB623353881_.jpg" },
  { id: 3, title: "Dresses under $30", name: "Dresses under $30", image: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_1x._SY116_CB623353881_.jpg" },
  { id: 4, title: "Shoes under $50", name: "Shoes under $50", image: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_1x._SY116_CB624172947_.jpg" },
];

const refreshYourSpace = [
  { id: 1, name: "Dining", image: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg" },
  { id: 2, name: "Home", image: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg" },
  { id: 3, name: "Kitchen", image: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg" },
  { id: 4, name: "Health and Beauty", image: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg" },
];

const dealsInPCs = [
  { id: 2, title: "Desktop PC", price: 749.99, image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg" },
];

const toysUnder25 = [
  { id: 2, title: "Toys under 25dos", image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg" },
];

const fashionTrend = [
  { id: 1, name: "Dresses", image: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_2_x1._SY116_CB595261253_.jpg" },
  { id: 2, name: "Knits", image: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_3_x1._SY116_CB595261253_.jpg" },
  { id: 3, name: "Jackets", image: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_1_x1._SY116_CB595261253_.jpg" },
  { id: 4, name: "Jewelry", image: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_4_x1._SY116_CB595261253_.jpg" },
];

const beautyUnder25 = [
  { id: 2, title: "Desktop PC", price: 749.99, image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v5._SY304_CB573698005_.jpg" },
];

const decorUnder50 = [
  { id: 1, title: "Home Decor", price: 749.99, image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v6._SY304_CB573698005_.jpg" },
];

const gamingMerch = [
  { id: 1, name: "Apparel", image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Apparel_1x._SY116_CB667159060_.jpg" },
  { id: 2, name: "Hats", image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Hat_1x._SY116_CB667159060_.jpg" },
  { id: 3, name: "Action figures", image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Figure_1x._SY116_CB667159060_.jpg" },
  { id: 4, name: "Mugs", image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mug_1x._SY116_CB667159063_.jpg" },
];

const smartWatches = [
  { id: 2, title: "Smart watches", price: 749.99, image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg" },
];

const welcomeDecor = [
  { id: 1, name: "Wreaths and garlands", image: "https://images-na.ssl-images-amazon.com/images/G/01/img22/Events/Fall23/FALL23_Oct_Wreaths_Decor_QuadCard_D_01_186x116._SY116_CB596234042_.jpg" },
  { id: 2, name: "Outdoor Decor", image: "https://images-na.ssl-images-amazon.com/images/G/01/img18/home/2023/Q2/Homepage/2023Q2_GW_EE_Hallway_D_Quad_186x116._SY116_CB594237035_.jpg" },
  { id: 3, name: "Pillows and throws", image: "https://images-na.ssl-images-amazon.com/images/G/01/img22/Events/Fall23/FALL23_Oct_Pillows_Decor_QuadCard_D_02_186x116._SY116_CB596234042_.jpg" },
  { id: 4, name: "Wall art & mirrors", image: "https://images-na.ssl-images-amazon.com/images/G/01/img22/Events/Fall23/FALL23_HP_Oct_Decor_QuadCard_D_04_186x116._SY116_CB596234042_.jpg" },
];

const shoesPrice = [
  { id: 2, title: "Great shoe price", price: 749.99, image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v8._SY304_CB573698005_.jpg" },
];


const bestSellersInBeautyPersonalCare = [
  { id: 1, title: "Facial Cleanser", price: 14.99, image: "cleanser.jpg" },
  
];



export default Catalogue;
