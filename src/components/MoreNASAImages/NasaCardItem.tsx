import React from "react";
import { motion } from "framer-motion";

interface NasaCardItemProps {
  title: string;
  url: string;
  image1: string;
  image2: string;
  image3: string;
}

const NasaCardItem: React.FC<NasaCardItemProps> = ({
  title,
  url,
  image1,
  image2,
  image3,
}) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="space-y-2 group">
        <div className="grid grid-cols-12 gap-2">
          {/* Main Image */}
          <div className="col-span-8">
            <img
              src={image1}
              alt={`${title} - Main`}
              className="w-full h-[159px] md:h-[314px] lg:h-[210px] object-cover"
            />
          </div>

          {/* Secondary Images */}
          <div className="col-span-4 flex flex-col gap-2">
            <img
              src={image2}
              alt={`${title} - Secondary 1`}
              className="w-full h-[77px] md:h-[153px] lg:h-[100px] object-cover"
            />
            <img
              src={image3}
              alt={`${title} - Secondary 2`}
              className="w-full h-[77px] md:h-[153px] lg:h-[100px] object-cover"
            />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-[16px] lg:text-[18px] font-bold leading-tight text-black group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>

        {/* Subtext */}
        <p className="text-[11px] lg:text-[12px] tracking-[2.5px] lg:tracking-[3.5px] text-[#77777a] uppercase">
          24 Images
        </p>
      </div>
    </motion.a>
  );
};

export default NasaCardItem;
