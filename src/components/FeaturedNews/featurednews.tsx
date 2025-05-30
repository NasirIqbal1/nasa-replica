"use client";
import React, { useState, useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NewsCard from "./NewCard";
import imagelarge from "../../public/Features/imagelarge.jpg";
import imagesmall from "../../public/Features/image small.jpg";
import imagemedium from "../../public/Features/imagemedium.webp";
import imagemedium2 from "../../public/Features/imgemedium2.webp";
import Circle1 from "../../public/Features/Circle1.webp";
import Circle2 from "../../public/Features/Circle2.webp";
import Circle3 from "../../public/Features/Circle3.webp";
import Circle4 from "../../public/Features/Circle4.jpg";

const MotionWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

const FeaturedNews: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setSelectedCard(id);
  };

  return (
    <section className="w-full bg-white py-14">
      <div className="max-w-container-1296 mx-auto lg:px-0 md:px-6 px-10">
        <div className="flex lg:flex-row flex-col  justify-between lg:items-center items-start mb-10">
          <h2 className="lg:text-[48px] md:text-[48px] text-[35px] font-bold mb-4 md:mb-0">
            Featured News
          </h2>
          <a
            href="/"
            className="text-black text-[22px] font-bold rounded-full flex items-center gap-2"
          >
            <span>Recently Published</span>
            <div className="rounded-full bg-white w-5 h-5 flex items-center justify-center">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="/"
                className="w-6 h-6 -rotate-45"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="16"
                  fill="currentColor"
                  className="text-red-500"
                />
                <path
                  d="M8 16.956h12.604l-3.844 4.106 1.252 1.338L24 16l-5.988-6.4-1.252 1.338 3.844 4.106H8v1.912z"
                  fill="white"
                />
              </svg>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-2 md:col-span-5">
            <MotionWrapper>
              <NewsCard
                id="card1"
                title="Space Biology Kicks Off Workweek as Crew Packs Dragon"
                image={imagelarge}
                link="/"
                category="ARTICLE"
                readTime="3 MIN READ"
                size="large"
                onClick={handleCardClick}
                selected={selectedCard === "card1"}
              />
            </MotionWrapper>
          </div>

          <div className="lg:col-span-2 md:col-span-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <MotionWrapper>
                <NewsCard
                  id="card2"
                  title="Hubble Captures Cotton Candy Clouds"
                  image={imagesmall}
                  link="/"
                  category="ARTICLE"
                  readTime="2 MIN READ"
                  size="medium"
                  onClick={handleCardClick}
                  selected={selectedCard === "card2"}
                />
              </MotionWrapper>
              <div className="flex flex-col gap-4">
                <MotionWrapper>
                  <NewsCard
                    id="card3"
                    title="Top Prize Awarded in Lunar Autonomy Challenge to Virtually Map Moon’s Surface"
                    image={imagemedium}
                    link="/"
                    category="ARTICLE"
                    readTime="4 MIN READ"
                    size="small"
                    onClick={handleCardClick}
                    selected={selectedCard === "card3"}
                  />
                </MotionWrapper>
                <MotionWrapper>
                  <NewsCard
                    id="card4"
                    title="NASA Welcomes Norway as 55th Nation to Sign Artemis Accords"
                    image={imagemedium2}
                    link="/"
                    category="ARTICLE"
                    readTime="2 MIN READ"
                    size="small"
                    onClick={handleCardClick}
                    selected={selectedCard === "card4"}
                  />
                </MotionWrapper>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 ">
          <MotionWrapper>
            <NewsCard
              id="card5"
              title="NASA X-59’s Latest Testing Milestone: Simulating Flight from the Ground"
              image={Circle1}
              link="/"
              category="ARTICLE"
              readTime="3 MIN READ"
              size="circle"
              onClick={handleCardClick}
              selected={selectedCard === "card5"}
            />
          </MotionWrapper>
          <MotionWrapper>
            <NewsCard
              id="card6"
              title="NASA Welcomes Norway as 55th Nation to Sign Artemis Accords"
              image={Circle2}
              link="/"
              category="ARTICLE"
              readTime="2 MIN READ"
              size="circle"
              onClick={handleCardClick}
              selected={selectedCard === "card6"}
            />
          </MotionWrapper>
          <MotionWrapper>
            <NewsCard
              id="card7"
              title="NASA Satellite Images Could Provide Early Volcano Warnings"
              image={Circle3}
              link="/"
              category="ARTICLE"
              readTime="3 MIN READ"
              size="circle"
              onClick={handleCardClick}
              selected={selectedCard === "card7"}
            />
          </MotionWrapper>
          <MotionWrapper>
            <NewsCard
              id="card8"
              title="What’s Up: May 2025 Skywatching Tips from NASA"
              image={Circle4}
              link="/"
              category="ARTICLE"
              readTime="6 MIN READ"
              size="circle"
              onClick={handleCardClick}
              selected={selectedCard === "card8"}
            />
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;
