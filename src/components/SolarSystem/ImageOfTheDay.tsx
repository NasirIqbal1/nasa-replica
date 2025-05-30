"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import image from "../../public/Image_ofthe_Day/Imageoftheday.webp";

export default function ImageOfTheDay() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.5,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-12 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {/* Image Column */}
      <motion.div
        className="order-1 lg:order-2 lg:col-span-8 lg:pl-5"
        variants={itemVariants}
      >
        {/* Mobile Header */}
        <div className="mb-2 block md:hidden">
          <h3 className="text-xs uppercase tracking-[3px] text-black mb-1">
            Today
          </h3>
          <h2 className="text-2xl font-bold">Image Of The Day</h2>
        </div>

        {/* Image Wrapper */}
        <div
          className="relative cursor-pointer group"
          role="link"
          tabIndex={0}
          aria-label="View full image page"
        >
          <div className="bg-[#f6f6f6] flex justify-center items-center h-auto md:h-[557px] overflow-hidden shadow-md">
            <img
              src={image}
              alt="Spiral galaxy Messier 81 viewed by Spitzer, Hubble, and GALEX"
              className="object-cover object-center w-[342px] h-[271px] md:w-[97%] md:h-full lg:w-[87%] lg:h-full"
              tabIndex={0}
            />
          </div>

          <a
            className="absolute top-4 right-4 z-10"
            href="/"
            title="Download image"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="#1C67E3" />
              <path
                d="M15.2355 8L15.2355 16.4829L11.9502 13.4077L10.8799 14.4093L15.9999 19.2L21.1199 14.4093L20.0496 13.4077L16.7643 16.4829L16.7643 8L15.2355 8Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.6 20.8V18.4H8V22.4H24V18.4H22.4V20.8H9.6Z"
                fill="white"
              />
            </svg>
          </a>
        </div>

        <div className="flex justify-end">
          <a
            href="/"
            className="inline-flex items-end gap-2 text-black text-[20px] font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View image</span>
            <svg viewBox="0 0 32 32" className="w-[22px] h-[22px] fill-white">
              <circle cx="16" cy="16" r="16" fill="#E03C31" />
              <path
                d="M8 16.956h12.604l-3.844 4.106 1.252 1.338L24 16l-5.988-6.4-1.252 1.338 3.844 4.106H8v1.912z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </motion.div>

      {/* Text Column */}
      <motion.div
        className="order-2 lg:order-1 lg:col-span-4 lg:pr-5 mb-6 lg:mb-0"
        variants={itemVariants}
      >
        <div className="mb-6 hidden md:block">
          <h3 className="text-[11px] uppercase tracking-[3.5px] text-black mb-1">
            Today
          </h3>
          <h2 className="text-[40px] font-bold mb-[80px]">Image Of The Day</h2>
        </div>
        <p className="text-[22px] font-bold mb-[14px]">Pretty in Pink</p>
        <p className="text-[15px] md:text-[18px] lg:text-[18px] text-black">
          A flower is seen in the foreground with a Soyuz rocket on the launch
          pad at the Baikonur Cosmodrome in Kazakhstan on April 7, 2025.
          Expedition 73 crewmembers including NASA astronaut Jonny Kim launched
          aboard their Soyuz MS-27 spacecraft on April 8.
        </p>
        <div className="mt-4 mb-4">
          <a
            href="/"
            className="inline-flex items-end text-black text-[20px] font-bold py-2 gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Browse Image Archive</span>
            <svg viewBox="0 0 32 32" className="w-[22px] h-[22px] fill-white">
              <circle cx="16" cy="16" r="16" fill="#E03C31" />
              <path
                d="M8 16.956h12.604l-3.844 4.106 1.252 1.338L24 16l-5.988-6.4-1.252 1.338 3.844 4.106H8v1.912z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
}
