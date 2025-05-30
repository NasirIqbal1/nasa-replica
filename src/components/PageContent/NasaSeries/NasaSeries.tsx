import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

import image1 from "../../../public/PageContact/NasaSeries/image1.webp";
import image2 from "../../../public/PageContact/NasaSeries/iamge2.jpg";
import image3 from "../../../public/PageContact/NasaSeries/image3.jpg";
import image4 from "../../../public/PageContact/NasaSeries/image4.jpg";
import image5 from "../../../public/PageContact/NasaSeries/image5.jpg";
import image6 from "../../../public/PageContact/NasaSeries/image6.jpg";
import image7 from "../../../public/PageContact/NasaSeries/image7.jpg";
import image8 from "../../../public/PageContact/NasaSeries/image8.jpg";
import image9 from "../../../public/PageContact/NasaSeries/image9.jpg";
import image10 from "../../../public/PageContact/NasaSeries/image10.jpg";
import image11 from "../../../public/PageContact/NasaSeries/image11.jpg";
import image12 from "../../../public/PageContact/NasaSeries/image12.jpg";
import image13 from "../../../public/PageContact/NasaSeries/image13.jpg";
import image14 from "../../../public/PageContact/NasaSeries/image14.jpg";
import image15 from "../../../public/PageContact/NasaSeries/image15.jpg";
import image16 from "../../../public/PageContact/NasaSeries/image16.jpg";
import image17 from "../../../public/PageContact/NasaSeries/image17.jpg";

const videoData = [
  { id: 1, image: image1, title: "Our Alien Earth", Episode: "3 Episode" },
  { id: 2, image: image2, title: "Other Worlds", Episode: "3 Episode" },
  { id: 3, image: image3, title: "Space Out", Episode: "7 Episode" },
  { id: 4, image: image4, title: "NASA Explorers", Episode: "34 Episode" },
  {
    id: 5,
    image: image5,
    title: "Artemis I: Path to the Pad",
    Episode: "4 Episode",
  },
  { id: 6, image: image6, title: "Down To Earth", Episode: "9 Episode" },
  {
    id: 7,
    image: image7,
    title: "JPL and The Space Age",
    Episode: "16 Episode",
  },
  { id: 8, image: image8, title: "Sci-Girls", Episode: "5 Episode" },
  { id: 9, image: image9, title: "Elements of Webb", Episode: "13 Episode" },
  { id: 10, image: image10, title: "The Traveler", Episode: "8 Episode" },
  { id: 11, image: image11, title: "Why with Nye", Episode: "7 Episode" },
  {
    id: 12,
    image: image12,
    title: "75 Years of Armstrong",
    Episode: "8 Episode",
  },
  {
    id: 13,
    image: image13,
    title: "High Above, Down Under",
    Episode: "7 Episode",
  },
  { id: 14, image: image14, title: "Moon 101", Episode: "12 Episode" },
  { id: 15, image: image15, title: "Leader in Lidar", Episode: "5 Episode" },
  { id: 16, image: image16, title: "Surprisingly STEM", Episode: "15 Episode" },
  { id: 17, image: image17, title: "Mars in a Minute", Episode: "12 Episode" },
];

const NasaSeries: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="hover-wrapper relative px-4 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[28px] font-bold text-[#D1D1D1]">NASA Series</h2>
        <button className="flex items-center gap-2 text-white text-[18px] font-semibold hover:underline">
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
        slidesPerView={6}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 8 },
          768: { slidesPerView: 4, spaceBetween: 12 },
          1280: { slidesPerView: 6, spaceBetween: 16 },
        }}
        grabCursor
        className="!overflow-visible"
      >
        {videoData.map((video) => (
          <SwiperSlide key={video.id}>
            <motion.div
              className="group"
              style={{ width: 220 }}
              initial={{ opacity: 0, y: 30, scale: 0.3 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 1,
                ease: [0.25, 0.1, 0.25, 1],
                delay: video.id * 0.01,
              }}
            >
              <div className="relative lg:w-[220px] lg:h-[330px] md:w-[171px] md:h-[258px] w-[171px] h-[256px] overflow-hidden rounded-md border border-transparent transition-all duration-300 hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-black hover:z-10 hover:scale-105 hover:border-white">
                <img
                  src={video.image}
                  alt={video.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="mt-3 px-1 text-white">
                <h4 className="text-[18px] font-semibold">{video.title}</h4>
                <p className="text-[12px] tracking-[2px] mt-1 text-[#959599]">
                  {video.Episode}
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {activeIndex > 0 && (
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 border border-gray-300 hover:border-[8px] hover:border-blue-500 rounded-full shadow-lg transition-all duration-200 hover:scale-110 flex items-center justify-center p-3 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 text-white" />
        </button>
      )}

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

export default NasaSeries;
