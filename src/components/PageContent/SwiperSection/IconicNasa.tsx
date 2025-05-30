import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

import image1 from "../../../public/PageContact/IconicNasa/image1.webp";
import image2 from "../../../public/PageContact/IconicNasa/image2.webp";
import image3 from "../../../public/PageContact/IconicNasa/image3.webp";
import image4 from "../../../public/PageContact/IconicNasa/image4.webp";
import image5 from "../../../public/PageContact/IconicNasa/image5.webp";
import image6 from "../../../public/PageContact/IconicNasa/image6.webp";
import image7 from "../../../public/PageContact/IconicNasa/image7.webp";
import image8 from "../../../public/PageContact/IconicNasa/image8.webp";
import image9 from "../../../public/PageContact/IconicNasa/image9.webp";
import image10 from "../../../public/PageContact/IconicNasa/image10.webp";
import image11 from "../../../public/PageContact/IconicNasa/image11.webp";
import image12 from "../../../public/PageContact/IconicNasa/image12.webp";

const videoData = [
  {
    id: 1,
    image: image1,
    duration: "00:59:56",
    title: "JPL and the Space Age: Mission to Mars",
    tag: "#STEM",
  },
  {
    id: 2,
    image: image2,
    duration: "01:18:18",
    title: "JPL and the Space Age: The Changing Face of Mars”",
    tag: "#JBL",
  },
  {
    id: 3,
    image: image3,
    duration: "00:29:46",
    title: "Apollo 13: Home Safe",
    tag: "#Apollo 13",
  },
  {
    id: 4,
    image: image4,
    duration: "00:57:44",
    title: "The Journeys of Apollo",
    tag: "#Apollo",
  },
  {
    id: 5,
    image: image5,
    duration: "00:25:25",
    title: "Assighement: Shoot the Moon",
    tag: "#STEM",
  },
  {
    id: 6,
    image: image6,
    duration: "00:28:19",
    title: "Apollo 13: Houston, We’ve Got a Problem",
    tag: "#Apollo 13",
  },
  {
    id: 7,
    image: image7,
    duration: "00:28:38",
    title: "Apollo 14: Mission to Fra Mauro",
    tag: "#Apollo 14",
  },
  {
    id: 8,
    image: image8,
    duration: "00:27:37",
    title: "Apollo 15: In the Mountains of the Moon",
    tag: "#Apollo 15",
  },
  {
    id: 9,
    image: image9,
    duration: "00:28:24",
    title: "Apollo 16: Nothing So Hidden",
    tag: "#Apollo 16",
  },
  {
    id: 10,
    image: image10,
    duration: "00:58:58",
    title: "JPL and the Space Age: Destination Moon",
    tag: "#JPL",
  },
  {
    id: 11,
    image: image11,
    duration: "00:25:08",
    title: "Gemini 8: This is Houston Flight",
    tag: "#Gemmi",
  },
  {
    id: 12,
    image: image12,
    duration: "00:31:57",
    title: "Space for Women",
    tag: "#STEM",
  },
];

const IconicNasa: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  const wrapperRef = useRef(null);
  const isInView = useInView(wrapperRef, { once: true });

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
    setIsEnd(swiper.isEnd);
  };

  return (
    <motion.div
      ref={wrapperRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="hover-wrapper relative overflow-hidden"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="lg:text-[28px] md:text-[28px] text-[20px] font-bold text-[#D1D1D1]">
          Iconic NASA
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
        {videoData.map((video, index) => (
          <SwiperSlide key={video.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group relative transition-all duration-300"
            >
              <div className="block overflow-hidden rounded-lg no-underline border group-hover:outline group-hover:outline-2 group-hover:outline-white border-transparent group-hover:border-white group-hover:opacity-100 group-hover:z-10 transition-all duration-300">
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
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Left Button */}
      {activeIndex > 0 && (
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 border border-gray-300 hover:border-[8px] hover:border-blue-500 rounded-full shadow-lg transition-all duration-200 hover:scale-110 flex items-center justify-center p-3 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 text-white" />
        </button>
      )}

      {/* Right Button */}
      {!isEnd && (
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 border border-gray-300 hover:border-[8px] hover:border-blue-500 rounded-full shadow-lg transition-all duration-200 hover:scale-110 flex items-center justify-center p-3 cursor-pointer"
        >
          <ChevronRight className="w-4 h-4 text-white" />
        </button>
      )}
    </motion.div>
  );
};

export default IconicNasa;
