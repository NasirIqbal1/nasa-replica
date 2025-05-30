import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import NasaCardItem from "./NasaCardItem";

import Box from "../../public/More_NASA_Images/Box.webp";
import Box1 from "../../public/More_NASA_Images/Box1.webp";
import Box2 from "../../public/More_NASA_Images/Box2.webp";
import Box3 from "../../public/More_NASA_Images/Box4.webp";
import Box4 from "../../public/More_NASA_Images/Box5.webp";
import Box5 from "../../public/More_NASA_Images/Box6.webp";
import Box6 from "../../public/More_NASA_Images/Box7.jpg";
import Box7 from "../../public/More_NASA_Images/Box8.webp";
import Box8 from "../../public/More_NASA_Images/Box9.webp";

interface GalleryData {
  title: string;
  url: string;
  image1: string;
  image2: string;
  image3: string;
}

const nasaGalleryData: GalleryData[] = [
  {
    title: "NASA Spacewalkers Gallery",
    url: "/",
    image1: Box,
    image2: Box1,
    image3: Box2,
  },
  {
    title: "Astronaut Don Pettit’s Photos from Space Gallery",
    url: "/",
    image1: Box3,
    image2: Box4,
    image3: Box5,
  },
  {
    title: "Astronaut Matthew Dominick’s Photos from Space Gallery",
    url: "/",
    image1: Box6,
    image2: Box7,
    image3: Box8,
  },
];

const NasaCards: React.FC = () => {
  return (
    <section className="max-w-container-1400 mx-auto mb-[50px] lg:px-0 px-[32px]">
      <h2 className="lg:text-[40px] md:text-[40px] text-[24px] font-bold mb-16">
        More NASA Images
      </h2>

      {/* Desktop View (3-column grid on lg and up) */}
      <div className="hidden lg:grid gap-8 grid-cols-3">
        {nasaGalleryData.map((gallery, index) => (
          <NasaCardItem key={index} {...gallery} />
        ))}
      </div>

      {/* Mobile + Tablet View (Swiper) */}
      <div className="block lg:hidden">
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
          // modules={[Pagination]}
        >
          {nasaGalleryData.map((gallery, index) => (
            <SwiperSlide key={index}>
              <NasaCardItem {...gallery} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NasaCards;
