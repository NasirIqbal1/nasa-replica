import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

import image1 from "../../../public/PageContact/ExploreNewRelease/Image1.webp";
import image2 from "../../../public/PageContact/ExploreNewRelease/image2.webp";
import image3 from "../../../public/PageContact/ExploreNewRelease/image3.webp";
import image4 from "../../../public/PageContact/ExploreNewRelease/image4.webp";
import image5 from "../../../public/PageContact/ExploreNewRelease/imag5.webp";
import image6 from "../../../public/PageContact/ExploreNewRelease/image6.webp";
import image7 from "../../../public/PageContact/ExploreNewRelease/image7.webp";
import image8 from "../../../public/PageContact/ExploreNewRelease/image8.webp";
import image9 from "../../../public/PageContact/ExploreNewRelease/image9.webp";
import image10 from "../../../public/PageContact/ExploreNewRelease/image10.webp";
import image11 from "../../../public/PageContact/ExploreNewRelease/image11.webp";
import image12 from "../../../public/PageContact/ExploreNewRelease/image12.webp";

const videoData = [
  {
    id: 1,
    image: image1,
    duration: "00:05:38",
    title: "Surprisingly STEM: Mars Exploration Simulation Manager",
    tag: "#STEM",
  },
  {
    id: 2,
    image: image2,
    duration: "00:15:18",
    title: "Far Out: “Science You Can Eat”",
    tag: "#Kennedy space center",
  },
  {
    id: 3,
    image: image3,
    duration: "00:25:28",
    title: "SPACE OUT: Moon Phases",
    tag: "#Nasa & chill",
  },
  {
    id: 4,
    image: image4,
    duration: "00:06:30",
    title: "Down to Earth: The Astronaut’s Perspective",
    tag: "#Astronauts",
  },
  {
    id: 5,
    image: image5,
    duration: "00:09:48",
    title: "Artemis I: The Documentary",
    tag: "#STEM",
  },
  {
    id: 6,
    image: image6,
    duration: "00:02:38",
    title: "X-59: NASA’s “Quesst” for Quiet Supersonic Flight",
    tag: "#Nasa & Chill",
  },
  {
    id: 7,
    image: image7,
    duration: "00:07:18",
    title: "SPACE OUT: Landsat",
    tag: "#humans in space",
  },
  {
    id: 8,
    image: image8,
    duration: "00:12:37",
    title: "The Color of Space | The Series – Black Women Astronauts",
    tag: "#humans in space",
  },
  {
    id: 9,
    image: image9,
    duration: "00:10:33",
    title: "Far Out: “Eat Peanuts, Get Paid”",
    tag: "#Kennedy space center",
  },
  {
    id: 10,
    image: image10,
    duration: "00:08:32",
    title: "NASA’s Europa Clipper Launch",
    tag: "#Lanuncher",
  },
  {
    id: 11,
    image: image11,
    duration: "00:09:12",
    title: "To an Asteroid and Back",
    tag: "#STEM",
  },
  {
    id: 12,
    image: image12,
    duration: "00:20:12",
    title: "An Ocean In Bloom",
    tag: "#STEM",
  },
];

const ExploreNewRelease: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="hover-wrapper relative mx-auto max-w-container-1412 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h2 className="lg:text-[28px] md:text-[28px] text-[20px] font-bold text-[#D1D1D1]">
          Explore New Releases
        </h2>
        <button className="flex items-center gap-2 text-white lg:text-[18px] md:text-[18px] text-[16px] font-semibold hover:underline">
          See All
          <svg viewBox="0 0 32 32" className="w-[20px] h-[20px] fill-white">
            <circle cx="16" cy="16" r="16" fill="#E03C31" />
            <path
              d="M8 16.956h12.604l-3.844 4.106 1.252 1.338L24 16l-5.988-6.4-1.252 1.338 3.844 4.106H8v1.912z"
              fill="white"
            />
          </svg>
        </button>
      </div>

      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        spaceBetween={16}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 8 },
          640: { slidesPerView: 2, spaceBetween: 8 },
          1024: { slidesPerView: 3, spaceBetween: 12 },
          1280: { slidesPerView: 4, spaceBetween: 16 },
        }}
        grabCursor
        className="!overflow-visible"
      >
        {videoData.map((video, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true });

          const fromX = index === 0 || index === 1 ? -100 : 100;
          const motionProps =
            index <= 3
              ? {
                  initial: { opacity: 0, x: fromX },
                  animate: isInView ? { opacity: 1, x: 0 } : {},
                  transition: { duration: 0.6, delay: index * 0.1 },
                }
              : {};

          return (
            <SwiperSlide key={video.id}>
              <motion.div ref={ref} {...motionProps}>
                <div className="group relative transition-all duration-300">
                  <div className="block overflow-hidden rounded-lg  no-underline border group-hover:outline group-hover:outline-2 group-hover:outline-white border-transparent group-hover:border-white group-hover:opacity-100 group-hover:z-10 transition-all duration-300">
                    <div className="relative h-[190px] w-full">
                      <img
                        src={video.image}
                        alt={video.title}
                        className="object-cover w-full h-full transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent p-3 flex flex-col justify-end text-white">
                        <p className="text-[13px] tracking-[3px] mb-1">
                          {video.duration}
                        </p>
                        <h4 className="text-[20px]">{video.title}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 flex gap-2 items-center">
                    <span className="inline-flex items-center justify-center border text-white text-[27px] font-bold w-7 h-7 rounded-full">
                      #
                    </span>
                    <span className="text-white text-xs tracking-[2px] ml-1 uppercase">
                      {video.tag.replace("#", "")}
                    </span>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Left Navigation Button */}
      {activeIndex > 0 && (
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-0 top-1/2  -translate-y-1/2 z-20 bg-black/40 border border-gray-300 hover:border-[8px] hover:border-blue-500 rounded-full shadow-lg transition-all duration-200 hover:scale-110 flex items-center justify-center p-3 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 text-white" />
        </button>
      )}

      {/* Right Navigation Button */}
      {!isEnd && (
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 border border-gray-300 hover:border-[8px] hover:border-blue-500 rounded-full shadow-lg transition-all duration-200 hover:scale-110 flex items-center justify-center p-3 cursor-pointer"
        >
          <ChevronRight className="w-4 h-4 text-white" />
        </button>
      )}
    </div>
  );
};

export default ExploreNewRelease;
