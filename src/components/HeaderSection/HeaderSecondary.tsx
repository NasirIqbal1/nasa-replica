import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const dropdownVariants = {
  hidden: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const mobileMenuVariants = {
  closed: { height: 0, opacity: 0, transition: { when: "afterChildren" } },
  open: {
    height: "auto",
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.1 },
  },
};

const HeaderSecondary: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (menuId: string) => {
    setOpenMenu((prev) => (prev === menuId ? null : menuId));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const topics = [
    "Humans In Space",
    "Earth",
    "Solar System",
    "The Universe",
    "Aeronautics",
    "Technology",
    "News & Events",
    "Kids",
    "Español",
    "Originals",
    "Documentaries",
    "History",
  ];

  const series = [
    "Our Alien Earth",
    "Other Worlds",
    "Space Out",
    "NASA Explorers",
    "Artemis I: Path to the Pad",
    "Down To Earth",
    "JPL and The Space Age",
    "Sci-Girls",
    "Elements of Webb",
    "The Traveler",
    "Why with Nye",
    "75 Years of Armstrong",
    "High Above, Down Under",
    "Moon 101",
    "Leaders in Lidar",
    "Surprisingly STEM",
    "Mars in a Minute",
    "Space Place in a Snap",
    "New Horizons",
    "Climate Tales",
    "Elmo Visits NASA",
    "STEMonstrations",
    "Earth Minute",
  ];

  return (
    <div className="w-full bg-blue-900 lg:bg-[#17171b] text-[#d1d1d1] py-3 px-4 z-50 relative shadow-md">
      <div className="max-w-container-1712 mx-auto px-2" ref={menuRef}>
        {/* Mobile Header */}
        <div className="flex justify-between items-center lg:hidden">
          <nav aria-label="Breadcrumbs">
            <ol className="flex space-x-2 text-[15px]">
              <li>
                <span className="text-white font-semibold cursor-pointer">
                  NASA+
                </span>
              </li>
              <li>/</li>
              <li className="text-[#d1d1d1]">Home</li>
            </ol>
          </nav>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center space-x-1 text-white font-semibold"
          >
            <span>Menu</span>
            <ChevronDown
              size={15}
              className={`transform transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:flex justify-between items-start relative">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumbs" className="text-white mb-3">
            <ol className="flex space-x-2 text-[15px]">
              <li>
                <span className="hover:underline text-white cursor-pointer">
                  NASA+
                </span>
              </li>
              <li>/</li>
              <li className="text-[#d1d1d1]">Home</li>
            </ol>
          </nav>

          {/* Centered Nav Menu */}
          <div className="absolute left-1/2 -translate-x-1/2 w-full lg:w-auto">
            <nav>
              <ul className="flex flex-row space-x-7 text-[14px] relative">
                <li className="relative">
                  <button
                    onClick={() => toggleMenu("topics")}
                    className="hover:underline font-semibold flex items-center space-x-1"
                  >
                    <span>Explore Topics</span>
                    <ChevronDown size={13} />
                  </button>
                  {openMenu === "topics" && (
                    <ul className="absolute left-0 mt-2 bg-[#162e51] text-white text-[16px] shadow-lg rounded p-2 space-y-2 z-50 w-64">
                      {topics.map((label) => (
                        <li key={label}>
                          <span className="hover:underline block py-1 px-2 rounded hover:text-black hover:bg-gray-100 cursor-pointer">
                            {label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                <li className="relative">
                  <button
                    onClick={() => toggleMenu("series")}
                    className="hover:underline font-semibold flex items-center space-x-1"
                  >
                    <span>Explore Series</span>
                    <ChevronDown size={13} />
                  </button>
                  {openMenu === "series" && (
                    <ul className="absolute left-0 mt-2 bg-[#162e51] text-white shadow-lg rounded p-2 space-y-2 z-50 w-72 max-h-96 overflow-y-auto">
                      {series.map((title) => (
                        <li key={title}>
                          <span className="hover:underline block py-1 px-2 rounded hover:text-black hover:bg-gray-100 cursor-pointer">
                            {title}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                <li>
                  <span className="hover:underline cursor-pointer">
                    Scheduled Events
                  </span>
                </li>

                <li>
                  <span className="hover:underline cursor-pointer">
                    Search Videos
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="lg:hidden overflow-hidden"
            >
              <nav className="mt-4">
                <ul className="flex flex-col space-y-2 text-[14px] relative">
                  <li className="relative">
                    <button
                      onClick={() => toggleMenu("topics")}
                      className="hover:underline font-semibold flex items-center justify-between w-full"
                    >
                      <span>Explore Topics</span>
                      <span className="text-xl">
                        {openMenu === "topics" ? "−" : "+"}
                      </span>
                    </button>
                    <AnimatePresence>
                      {openMenu === "topics" && (
                        <motion.ul
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={dropdownVariants}
                          className="mt-2 bg-[#162e51] text-white text-[16px] shadow-lg rounded p-2 space-y-2 z-50 w-full"
                        >
                          {topics.map((label) => (
                            <li key={label}>
                              <span className="hover:underline block py-1 px-2 rounded hover:text-black hover:bg-gray-100 cursor-pointer">
                                {label}
                              </span>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>

                  <li className="relative">
                    <button
                      onClick={() => toggleMenu("series")}
                      className="hover:underline font-semibold flex items-center justify-between w-full"
                    >
                      <span>Explore Series</span>
                      <span className="text-xl">
                        {openMenu === "series" ? "−" : "+"}
                      </span>
                    </button>
                    <AnimatePresence>
                      {openMenu === "series" && (
                        <motion.ul
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={dropdownVariants}
                          className="mt-2 bg-[#162e51] text-white shadow-lg rounded p-2 space-y-2 z-50 w-full max-h-80 overflow-y-auto"
                        >
                          {series.map((title) => (
                            <li key={title}>
                              <span className="hover:underline block py-1 px-2 rounded hover:text-black hover:bg-gray-100 cursor-pointer">
                                {title}
                              </span>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>

                  <li>
                    <span className="hover:underline cursor-pointer">
                      Scheduled Events
                    </span>
                  </li>

                  <li>
                    <span className="hover:underline cursor-pointer">
                      Search Videos
                    </span>
                  </li>
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeaderSecondary;
