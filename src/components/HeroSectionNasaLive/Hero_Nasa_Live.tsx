import React, { useState, useEffect } from "react";
import HeaderSecondary from "../HeaderSection/HeaderSecondary";
import BannerMenus from "../MissionCards/BannerMenus";
import { heroSlides } from "./NasaLiveContant";

const Hero_Nasa_Live: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const currentSlide = heroSlides[currentIndex];

  useEffect(() => {
    const img = new Image();
    img.src = currentSlide.imageUrl;
    img.onload = () => setLoaded(true);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoaded(false);
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden sm:min-h-[50vh] md:min-h-[55vh] lg:min-h-full">
      {/* Header */}
      <div className="absolute w-full z-30">
        <HeaderSecondary />
      </div>

      {/* Background Image */}
      <img
        src={currentSlide.imageUrl}
        alt="Hero background"
        className={`absolute inset-0 w-full object-cover transition-opacity duration-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        } h-[700px] md:h-[670px] lg:h-full z-0`}
        style={{
          transform: "scale(1)",
          transformOrigin: "center",
          objectPosition: "center",
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 w-full h-[700px] md:h-[670px] lg:h-full"
        style={{
          background: "linear-gradient(80.99deg, #000 0%, transparent 89.04%)",
        }}
      />

      {/* Text Content */}
      <div className="relative z-10 px-4 lg:px-0 min-h-[300px] max-w-container-1400 mx-auto mt-[100px] md:mt-0 lg:mt-0">
        <div className="grid grid-cols-12 items-center min-h-inherit lg:min-h-[550px] md:min-h-[600px]">
          <div
            className={`col-span-12 lg:col-span-6 md:col-span-8 relative z-10 transition-all duration-1000 transform ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-base sm:text-lg md:text-xl lg:text-[13px] tracking-[3px] text-white font-semibold lg:mb-2 mb-10">
              {currentSlide.heading}
            </h2>
            <img
              src={currentSlide.title}
              alt={currentSlide.heading}
              className="w-full lg:max-w-[400px] max-w-[300px]  mb-4"
            />
            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-white/90 mb-6">
              {currentSlide.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start justify-start mb-10  lg:mb-0">
              <button className="w-[120px] lg:w-auto bg-[#f64137] hover:bg-[#f64137] text-white text-[1.2rem] sm:text-[1.38rem] font-bold px-5 py-2  transition-all transform hover:scale-105 text-center">
                WATCH
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="lg:bottom-[40px] md:bottom-[40  px] bottom-[10px] relative z-20 max-w-container-1400 mx-auto px-4 md:px-6 lg:px-0">
        <BannerMenus />
      </div>
    </div>
  );
};

export default Hero_Nasa_Live;
