// src/components/TopicsGrid.tsx
import React from "react";
import { motion } from "framer-motion";
import { topics } from "./topicsData"; // Update path as needed

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
};

const TopicsGrid: React.FC = () => {
  return (
    <div className="px-0 mt-2 mb-6">
      <header className="flex justify-between items-center mb-4">
        <h3 className="text-[28px] font-bold text-[#D1D1D1]">Explore Topics</h3>
      </header>

      <motion.ul
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-900"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {topics.map((topic) => (
          <motion.li
            key={topic.title}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href={topic.href}
              className="block w-full h-[84px] relative overflow-hidden shadow-md group rounded-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center filter grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                style={{ backgroundImage: `url(${topic.imageUrl})` }}
              />

              {/* Text overlay */}
              <div className="absolute inset-0 flex items-center justify-start z-10">
                <h4 className="text-[#D1D1D1] lg:text-[22px] md:text-[22px] text-[18px] font-bold  px-4">
                  {topic.title}
                </h4>
              </div>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default TopicsGrid;
