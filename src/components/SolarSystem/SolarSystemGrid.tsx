import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import CircleArrow from "../CircleArrow";
import ImageOfTheDay from "./ImageOfTheDay";
import { cards } from "./cardsData";
import Card from "./Card";

const cardVariants: Variants = {
  initial: {
    opacity: 1,
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)",
    filter: "blur(0px)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
  hovered: {
    opacity: 1,
    scale: 1.05,
    boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 350, damping: 30 },
  },
  dimmed: {
    opacity: 1,
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)",
    filter: "blur(7px)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const SolarSystemGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="lg:px-4 px-7" aria-label="Solar System Exploration">
      <div className="max-w-container-1335 mx-auto lg:py-[96px] py-[50px] ">
        {/* Header */}
        <header className="flex flex-col lg:flex-row md:items-start md:justify-between lg:mb-14 mb-6">
          <h2 className="md:w-2/3 mb-4 md:mb-5 text-[40px] font-bold text-black">
            Solar System Exploration
          </h2>
          <nav className="flex justify-start md:justify-end">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 lg:px-4 py-2 text-[22px] text-black font-bold rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              aria-label="Discover more about the solar system"
            >
              Discover More
              <CircleArrow />
            </a>
          </nav>
        </header>

        {/* Cards Grid */}
        <div
          className=" grid lg:gap-5 gap-10 md:gap-y-10 md:gap-x-5 grid-cols-1 md:grid-cols-2  lg:grid-cols-4"
          role="list"
        >
          {cards.map((card, index) => {
            let variant = "initial";
            if (hoveredIndex === index) variant = "hovered";
            else if (hoveredIndex !== null) variant = "dimmed";

            return (
              <motion.div
                key={card.title}
                role="listitem"
                tabIndex={0}
                aria-label={`View details about ${card.title}`}
                variants={cardVariants}
                initial="initial"
                animate={variant}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onFocus={() => setHoveredIndex(index)}
                onBlur={() => setHoveredIndex(null)}
                className="cursor-pointer rounded-md"
              >
                <Card
                  title={card.title}
                  link={card.link}
                  image={card.image}
                  onClick={() => window.open(card.link, "_blank")}
                  isSelected={false}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Image of the Day */}
        <div className="my-[140px] md:mt-[120px] md:mb-[40px] lg:mt-[150px] lg:mb-[55px] py-0">
          <ImageOfTheDay />
        </div>
      </div>
    </section>
  );
};

export default SolarSystemGrid;
