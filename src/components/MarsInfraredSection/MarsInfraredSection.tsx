"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CircleArrow from "../CircleArrow";

// Parent container variant for staggered animation
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Text child animation
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Video animation
const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function MarsInfraredSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <section
      ref={ref}
      className="w-full bg-black relative py-20 overflow-hidden"
    >
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate={controls}
        className="mx-auto max-w-container-1400 lg:px-4 px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
          {/* Text Section */}
          <div className="md:col-span-5 lg:col-span-4">
            <motion.div className="text-white" variants={containerVariant}>
              <motion.h3
                className="text-sm tracking-[3.5px] text-white/60 uppercase mb-2"
                variants={fadeInUp}
              >
                Featured Video
              </motion.h3>

              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-4"
                variants={fadeInUp}
              >
                A Step Towards Mars
              </motion.h2>

              <motion.p
                className="text-base sm:text-lg text-white/90 mb-6"
                variants={fadeInUp}
              >
                Practice makes perfect, and when sending humans to Mars, you
                definitely want things to be perfect. Through simulated missions
                in Mars Dune Alpha—an isolated, 1,700-square-foot, 3D-printed
                habitat at Johnson Space Center—NASA can gather data on a
                variety of human exploration factors, such as physical and
                behavioral health and performance.
              </motion.p>

              <motion.a
                href="https://www.nasa.gov/missions/europa-clipper/nasas-europa-clipper-captures-mars-in-infrared/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white font-semibold gap-4"
                variants={fadeInUp}
              >
                Crew Health and Performance Exploration Analog
                <CircleArrow />
              </motion.a>
            </motion.div>
          </div>

          {/* Video Section */}
          <motion.div
            className="md:col-span-7 lg:col-span-8 flex justify-center"
            variants={fadeInScale}
          >
            <div className="w-full aspect-video max-w-[893px]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/rRJ7Jhun12I"
                title="Webb Spies Rain Clouds, New Molecule on Titan"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
