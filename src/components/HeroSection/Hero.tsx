import React, { useState, useEffect } from "react";
import MissionCards from "../MissionCards/MissionCards";

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrls: string[];
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, imageUrls }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Load current image
  useEffect(() => {
    const img = new Image();
    img.src = imageUrls[currentImageIndex];
    img.onload = () => setLoaded(true);
  }, [currentImageIndex, imageUrls]);

  // Rotate background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setLoaded(false);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [imageUrls.length]);

  return (
    <div className="relative w-full overflow-hidden  sm:min-h-[50vh] md:min-h-[55vh] lg:min-h-full ">
      {/* Background Image */}
      <img
        src={imageUrls[currentImageIndex]}
        alt="Hero background"
        className={`absolute inset-0 w-full object-cover transition-opacity duration-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        } h-[600px] md:h-[600px] lg:h-full`}
        style={{
          transform: "scale(1.2)", // Slightly scale down the image for mobile
          transformOrigin: "center",
          objectPosition: "center",
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 w-full h-[660px] md:h-[660px] lg:h-full"
        style={{
          background: "linear-gradient(80.99deg, #000 0%, transparent 89.04%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-4 min-h-[300px] max-w-container-1712 mx-auto lg:mt-0 md:mt-0 mt-10">
        <div className="grid grid-cols-12 items-center min-h-inherit lg:min-h-[550px] md:min-h-[600px]  ">
          <div
            className={`col-span-12 lg:col-span-5 md:col-span-8 transition-all duration-1000 transform ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-[35px] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-[16px] text-white/90 mb-6 max-w-3xl">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start justify-start mb-10 lg:mb-0">
              <button className="w-[340px] lg:w-auto bg-[#f64137] hover:bg-[#f64137] text-white text-[1.2rem] sm:text-[1.38rem] font-bold px-5 py-2 rounded-md transition-all transform hover:scale-105 text-center">
                Space Station Updates
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="lg:bottom-[40px] md:bottom-[60px] bottom-[10px] relative z-20 max-w-container-1712 mx-auto px-4 md:px-6 lg:px-4">
        <MissionCards />
      </div>
    </div>
  );
};

export default Hero;

