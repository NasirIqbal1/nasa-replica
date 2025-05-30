import React from "react";
import { motion } from "framer-motion";
import image from "../../public/NasaLiveBanner/nasa-apps-banner.webp";
import apple from "../../public/NasaLiveBanner/apple-store.svg";
import Googleplay from "../../public/NasaLiveBanner/google-play.svg";
import Nasaapp from "../../public/NasaLiveBanner/nasa-apps.svg";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 20,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 20,
    },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const NasaAppBanner: React.FC = () => {
  return (
    <div className="relative z-[400] w-full max-w-full bg-black text-[#D1D1D1] overflow-hidden h-[580px] px-5 sm:px-6 md:px-10">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={image}
          alt="Space image"
          className="w-full h-full object-cover"
          style={{
            objectPosition: "92% 82%",
            transformOrigin: "32% 78%",
          }}
        />
        <div className="absolute inset-0" />
      </div>

      <motion.div
        className="relative z-10 h-full flex flex-col md:flex-row items-start md:items-start lg:items-center max-w-container-1400 mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="w-full lg:w-[48%] flex flex-col items-center lg:items-start text-center lg:text-left justify-start pt-10">
          <motion.p
            className="font-mono uppercase text-[12px] text-[#D1D1D1]"
            variants={textVariants}
          >
            The universe at your fingertips.
          </motion.p>

          <motion.header className="mt-4" variants={textVariants}>
            <h1 className="text-[#D1D1D1] text-[28px] md:text-[36px] font-bold">
              Discover hundreds of videos and live content on the NASA App!
            </h1>
          </motion.header>

          <motion.div className="mt-4" variants={containerVariants}>
            <motion.div className="flex flex-col md:flex-row flex-wrap justify-center lg:justify-start gap-4">
              <motion.a
                href="#"
                className="max-w-[180px]"
                variants={buttonVariants}
                whileHover="hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={apple}
                  alt="Download on the App Store"
                  className="w-full"
                />
              </motion.a>

              <motion.a
                href="#"
                className="max-w-[180px]"
                variants={buttonVariants}
                whileHover="hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Googleplay}
                  alt="Get it on Google Play"
                  className="w-full"
                />
              </motion.a>

              <motion.a
                href="#"
                className="max-w-[180px]"
                variants={buttonVariants}
                whileHover="hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Nasaapp}
                  alt="Visit NASA Apps for more information"
                  className="w-full"
                />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default NasaAppBanner;
