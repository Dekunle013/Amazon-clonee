// Catalogue.js
import { useState, useEffect } from 'react';
import './Catalogue.css';
import ProductGrid from './ProductGrid';
import LandscapeContainer from './LandscapeContainer';
import { wallpapers, productData } from './data';

function Catalogue() {
  const [currentWallpaperIndex, setCurrentWallpaperIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWallpaperIndex((prevIndex) => (prevIndex + 1) % wallpapers.length);
    }, 15000);

    return () => clearInterval(intervalId);
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
    <main className="flex flex-col justify-center items-center">
      <WallpaperSection
        currentWallpaperIndex={currentWallpaperIndex}
        isHovering={isHovering}
        setIsHovering={setIsHovering}
        changeWallpaper={changeWallpaper}
      />

      <ProductGridSection />

      <LandscapeContainer category="homeKitchen" isFirst />
      <LandscapeContainer category="sportsOutdoors" />

      <ProductGridSection sectionName="productSectionB" />

      <LandscapeContainer category="beautyPersonalCare" />
      <LandscapeContainer category="topPicksForNigeria" />

      <ProductGridSection sectionName="productSectionB" />

      <LandscapeContainer category="bestSellerInBooks" />
      <LandscapeContainer category="videoGameWish" />

      <ProductGridSection sectionName="productSectionB" />

      <LandscapeContainer category="moviesTVsWish" />
      <LandscapeContainer category="landscape-footer" />
    </main>
  );
}

function WallpaperSection({ currentWallpaperIndex, isHovering, setIsHovering, changeWallpaper }) {
  return (
    <div 
      className="w-full h-auto min-h-screen relative overflow-visible wallpaper"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img
        className="backgroundWallpaper w-full h-auto min-h-screen object-cover transition-opacity duration-1000 ease-in-out"
        src={wallpapers[currentWallpaperIndex]}
        alt={`Amazon Background Wallpaper ${currentWallpaperIndex + 1}`}
      />
      {isHovering && (
        <>
          <WallpaperNavigationButton direction="prev" onClick={() => changeWallpaper('prev')} />
          <WallpaperNavigationButton direction="next" onClick={() => changeWallpaper('next')} />
        </>
      )}
    </div>
  );
}

function WallpaperNavigationButton({ direction, onClick }) {
  const arrowChar = direction === 'prev' ? '&#10094;' : '&#10095;';
  const className = `wallpaper-nav wallpaper-nav-${direction} absolute top-30% transform translateY(-50%) bg-gray-500 text-white border-none p-4 text-3xl cursor-pointer opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-1 hover:bg-gray-700`;

  return (
    <button className={className} onClick={onClick} dangerouslySetInnerHTML={{ __html: arrowChar }} />
  );
}

function ProductGridSection({ sectionName = "productSectionA" }) {
  return (
    <section className={`${sectionName === "productSectionA" ? "firstGrid" : "secondGrid"} w-full p-4`}>
      <div className={`${sectionName} grid grid-cols-4 ${sectionName === "productSectionA" ? "grid-rows-2" : ""} gap-4 w-full mx-auto`}>
        {Object.entries(productData).map(([key, value]) => (
          <ProductGrid key={key} title={key} items={value} />
        ))}
      </div>
    </section>
  );
}

export default Catalogue;