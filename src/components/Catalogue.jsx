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


      <section className="landscape">
        <div className="headlineA">
          <span>Best Sellers in Beauty & Personal Care</span>
        </div>
        <div className="landA">
          {bestSellersInBeautyPersonalCare.map((item, index) => (
            <a href="#" key={index}>
              <img src={item.image} alt={item.name || "Beauty & Personal Care Item"} />
            </a>
          ))}
        </div>
      </section>

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
      
      <section className="landscape">
      
      </section>

      <section className="landscape">
        
      </section>

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



// const bestSellersInHomeKitchen = [
//   {
//     id: 1,
//     title: "Product 1",
//     image: "https://m.media-amazon.com/images/I/61X5bY+reYL._AC_SY400_.jpg",
//   },
//   {
//     id: 2,
//     title: "Product 2",
//     image: "https://m.media-amazon.com/images/I/51C2DONw-TL._AC_SY400_.jpg",
//   },
//   {
//     id: 3,
//     title: "Product 3",
//     image: "https://m.media-amazon.com/images/I/717FfWa5e4L._AC_SY400_.jpg",
//   },
//   {
//     id: 4,
//     title: "Product 4",
//     image: "https://m.media-amazon.com/images/I/61KCbJGpAFL._AC_SY400_.jpg",
//   },
//   {
//     id: 5,
//     title: "Product 5",
//     image: "https://m.media-amazon.com/images/I/713afJ6oJ+L._AC_SY400_.jpg",
//   },
//   {
//     id: 6,
//     title: "Product 6",
//     image: "https://m.media-amazon.com/images/I/71M6a8SHCeL._AC_SY400_.jpg",
//   },
//   {
//     id: 7,
//     title: "Product 7",
//     image: "https://m.media-amazon.com/images/I/51lFr88wxML._AC_SY400_.jpg",
//   },
//   {
//     id: 8,
//     title: "Product 8",
//     image: "https://m.media-amazon.com/images/I/51xy9oTOHlL._AC_SY400_.jpg",
//   },
//   {
//     id: 9,
//     title: "Product 9",
//     image: "https://m.media-amazon.com/images/I/71wv3D6w-vL._AC_SY400_.jpg",
//   },
//   {
//     id: 10,
//     title: "Product 10",
//     image: "https://m.media-amazon.com/images/I/71RekxT+qML._AC_SY400_.jpg",
//   },
//   {
//     id: 11,
//     title: "Product 11",
//     image: "https://m.media-amazon.com/images/I/61UFMf2FffL._AC_SY400_.jpg",
//   },
//   {
//     id: 12,
//     title: "Product 12",
//     image: "https://m.media-amazon.com/images/I/81RLgrUwG5L._AC_SY400_.jpg",
//   },
//   {
//     id: 13,
//     title: "Product 13",
//     image: "https://m.media-amazon.com/images/I/81jUEgf7F3L._AC_SY400_.jpg",
//   },
//   {
//     id: 14,
//     title: "Product 14",
//     image: "https://m.media-amazon.com/images/I/81yeSy2PbtL._AC_SY400_.jpg",
//   },
//   {
//     id: 15,
//     title: "Product 15",
//     image: "https://m.media-amazon.com/images/I/81JmVgvOmCL._AC_SY400_.jpg",
//   },
//   {
//     id: 16,
//     title: "Product 16",
//     image: "https://m.media-amazon.com/images/I/71Pw5U7rFlL._AC_SY400_.jpg",
//   },
//   {
//     id: 17,
//     title: "Product 17",
//     image: "https://m.media-amazon.com/images/I/71nhPE7vxHL._AC_SY400_.jpg",
//   },
//   {
//     id: 18,
//     title: "Product 18",
//     image: "https://m.media-amazon.com/images/I/71t-9BTIg9L._AC_SY400_.jpg",
//   },
//   {
//     id: 19,
//     title: "Product 19",
//     image: "https://m.media-amazon.com/images/I/51c5xruL9zL._AC_SY400_.jpg",
//   },
//   {
//     id: 20,
//     title: "Product 20",
//     image: "https://m.media-amazon.com/images/I/91GmE6gQF9L._AC_SY400_.jpg",
//   },
//   {
//     id: 21,
//     title: "Product 21",
//     image: "https://m.media-amazon.com/images/I/710mHCabqIL._AC_SY400_.jpg",
//   },
//   {
//     id: 22,
//     title: "Product 22",
//     image: "https://m.media-amazon.com/images/I/81SIy4WF3bL._AC_SY400_.jpg",
//   },
//   {
//     id: 23,
//     title: "Product 23",
//     image: "https://m.media-amazon.com/images/I/81AFxaQnZXL._AC_SY400_.jpg",
//   },
//   {
//     id: 24,
//     title: "Product 24",
//     image: "https://m.media-amazon.com/images/I/812Bae40uHL._AC_SY400_.jpg",
//   },
//   {
//     id: 25,
//     title: "Product 25",
//     image: "https://m.media-amazon.com/images/I/61mdPtC0iIL._AC_SY400_.jpg",
//   },
//   {
//     id: 26,
//     title: "Product 26",
//     image: "https://m.media-amazon.com/images/I/71O0Is7QpeL._AC_SY400_.jpg",
//   },
// ];

// const bestSellersInSportsAndOutdoors = [
//   { id: 1, title: "nill", image: "https://m.media-amazon.com/images/I/81Y26toqdTL._AC_SY400_.jpg", alt: "81Y26toqdTL" },
//   { id: 2, title: "nill", image: "https://m.media-amazon.com/images/I/51SxIyLWwUL._AC_SY400_.jpg", alt: "51SxIyLWwUL" },
//   { id: 3, title: "nill", image: "https://m.media-amazon.com/images/I/71S4-NjoTDL._AC_SY400_.jpg", alt: "71S4-NjoTDL" },
//   { id: 4, title: "nill", image: "https://m.media-amazon.com/images/I/81WMJpUv98L._AC_SY400_.jpg", alt: "81WMJpUv98L" },
//   { id: 5, title: "nill", image: "https://m.media-amazon.com/images/I/71-P2+J2RQL._AC_SY400_.jpg", alt: "71-P2+J2RQL" },
//   { id: 6, title: "nill", image: "https://m.media-amazon.com/images/I/91yuQpw++mL._AC_SY400_.jpg", alt: "91yuQpw++mL" },
//   { id: 7, title: "nill", image: "https://m.media-amazon.com/images/I/714EyuLm+HL._AC_SY400_.jpg", alt: "714EyuLm+HL" },
//   { id: 8, title: "nill", image: "https://m.media-amazon.com/images/I/61Denlo-ceL._AC_SY400_.jpg", alt: "61Denlo-ceL" },
//   { id: 9, title: "nill", image: "https://m.media-amazon.com/images/I/71cSLFE39zL._AC_SY400_.jpg", alt: "71cSLFE39zL" },
//   { id: 10, title: "nill", image: "https://m.media-amazon.com/images/I/619fJAHoEzL._AC_SY400_.jpg", alt: "619fJAHoEzL" },
//   { id: 11, title: "nill", image: "https://m.media-amazon.com/images/I/61+UlXddzxL._AC_SY400_.jpg", alt: "61+UlXddzxL" },
//   { id: 12, title: "nill", image: "https://m.media-amazon.com/images/I/71SDZVqu3+L._AC_SY400_.jpg", alt: "71SDZVqu3+L" },
//   { id: 13, title: "nill", image: "https://m.media-amazon.com/images/I/71m-r6CHobL._AC_SY400_.jpg", alt: "71m-r6CHobL" },
//   { id: 14, title: "nill", image: "https://m.media-amazon.com/images/I/71WGsXRgQrL._AC_SY400_.jpg", alt: "71WGsXRgQrL" },
//   { id: 15, title: "nill", image: "https://m.media-amazon.com/images/I/817U5N6rypL._AC_SY400_.jpg", alt: "817U5N6rypL" },
//   { id: 16, title: "nill", image: "https://m.media-amazon.com/images/I/71wm42EtoNL._AC_SY400_.jpg", alt: "71wm42EtoNL" },
//   { id: 17, title: "nill", image: "https://m.media-amazon.com/images/I/51OHYIf9w6L._AC_SY400_.jpg", alt: "51OHYIf9w6L" },
//   { id: 18, title: "nill", image: "https://m.media-amazon.com/images/I/91c3Ca9UdiS._AC_SY400_.jpg", alt: "91c3Ca9UdiS" },
//   { id: 19, title: "nill", image: "https://m.media-amazon.com/images/I/71hYbAifNoL._AC_SY400_.jpg", alt: "71hYbAifNoL" },
//   { id: 20, title: "nill", image: "https://m.media-amazon.com/images/I/41cLCgyBbaL._AC_SY400_.jpg", alt: "41cLCgyBbaL" },
//   { id: 21, title: "nill", image: "https://m.media-amazon.com/images/I/713ybkIUp9L._AC_SY400_.jpg", alt: "713ybkIUp9L" },
//   { id: 22, title: "nill", image: "https://m.media-amazon.com/images/I/61ZLEHX1FsL._AC_SY400_.jpg", alt: "61ZLEHX1FsL" },
//   { id: 23, title: "nill", image: "https://m.media-amazon.com/images/I/71aaK-w9tbL._AC_SY400_.jpg", alt: "71aaK-w9tbL" },
//   { id: 24, title: "nill", image: "https://m.media-amazon.com/images/I/7106YA5SnZL._AC_SY400_.jpg", alt: "7106YA5SnZL" },
//   { id: 25, title: "nill", image: "https://m.media-amazon.com/images/I/41c+ROMdgcL._AC_SY400_.jpg", alt: "41c+ROMdgcL" },
//   { id: 26, title: "nill", image: "https://m.media-amazon.com/images/I/71bN90fJPTL._AC_SY400_.jpg", alt: "71bN90fJPTL" }
// ];
;

const bestSellersInBeautyPersonalCare = [
  { id: 1, title: "Facial Cleanser", price: 14.99, image: "cleanser.jpg" },
  
];



export default Catalogue;
