// // import { useState } from "react";
// // import MissionsMegaMenu from "./MissionsMegaMenu";
// // import Science from "./Science";
// // import Aeronautics from "./Aeronautics";

// // import Espanol from "./Espanol";
// // import HumansInSpace from "./HumansInSpace";
// // import LearningResources from "./LearningResources";
// // import Technology from "./Technology";
// // import TheSolarSystem from "./TheSolarSystem";
// // import TheUniverse from "./TheUniverse";
// // import AboutNASA from "./AboutNASA";
// // import EarthNASA from "./EarthNASA";
// // const featuredArticlesDefault = [
// //   {
// //     title:
// //       "NASA Earns Two Emmy Nominations for 2024 Total Solar Eclipse Coverage",
// //     href: "https://www.nasa.gov/general/nasa-earns-two-emmy-nominations-for-2024-total-solar-eclipse-coverage/",
// //     img: "https://www.nasa.gov/wp-content/uploads/2025/01/53639972892-b7c7581e8e-o.jpg?w=1024",
// //     alt: "The Moon covers the Sun completely, with one last bit of brightness showing. The sky is dark all around.",
// //     readTime: "3 min read",
// //     type: "article",
// //     timeAgo: "5 days ago",
// //   },
// //   {
// //     title: "NASA’s Hubble Pinpoints Roaming Massive Black Hole",
// //     href: "https://science.nasa.gov/missions/hubble/nasas-hubble-pinpoints-roaming-massive-black-hole/",
// //     img: "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/releases/2025/05/Hubble_TDE_SixPanel_FullRes_STScI-01JTGZAPSZEJR9VKKDWXZQSYDT.jpg?w=1024",
// //     alt: "NASA’s Hubble Pinpoints Roaming Massive Black Hole",
// //     readTime: "7 min read",
// //     type: "article",
// //     timeAgo: "5 days ago",
// //   },
// //   {
// //     title: "What’s Up: May 2025 Skywatching Tips from NASA",
// //     href: "https://science.nasa.gov/solar-system/skywatching/whats-up-may-2025-skywatching-tips-from-nasa/",
// //     img: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar-system/skywatching/2025/may/milky_way_credit_bill_dunford.jpg?w=1024",
// //     alt: "What’s Up: May 2025 Skywatching Tips from NASA",
// //     readTime: "6 min read",
// //     type: "article",
// //     timeAgo: "2 weeks ago",
// //   },
// // ];

// // const navLinks = [
// //   { label: "Home", href: "/" },
// //   { label: "Missions", href: "#" },
// //   { label: "Humans in Space", href: "https://www.nasa.gov/humans-in-space/" },
// //   { label: "Earth", href: "https://science.nasa.gov/earth/" },
// //   { label: "The Solar System", href: "https://science.nasa.gov/solar-system/" },
// //   { label: "The Universe", href: "https://science.nasa.gov/universe/" },
// //   { label: "Science", href: "https://science.nasa.gov/" },
// //   { label: "Aeronautics", href: "https://www.nasa.gov/aeronautics/" },
// //   { label: "Technology", href: "https://www.nasa.gov/technology/" },
// //   {
// //     label: "Learning Resources",
// //     href: "https://www.nasa.gov/learning-resources/",
// //   },
// //   { label: "About NASA", href: "https://www.nasa.gov/about/" },
// //   { label: "Español", href: "https://www.nasa.gov/es/" },
// // ];

// // const NasaMenu = () => {
// //   const [activeMenu, setActiveMenu] = useState<string | null>(null);

// //   const handleNavClick = (label: string, e: any) => {
// //     e.preventDefault();
// //     setActiveMenu(label === activeMenu ? null : label);
// //   };
// //   return (
// //     <div className="flex flex-col lg:flex-row w-[1905px] h-[595px] bg-black py-[40px] px-10 overflow-hidden">
// //       <div className="w-full md:w-1/5 border-r border-[#2e2e32]">
// //         <ul className="space-y-4 px-10">
// //           {navLinks.map(({ label, href }) => (
// //             <li key={label}>
// //               <a
// //                 href={href}
// //                 className="flex justify-between items-center text-white text-[17px] hover:underline"
// //                 onClick={(e) => handleNavClick(label, e)}
// //               >
// //                 <span>{label}</span>
// //               </a>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>

// //       <section className="w-full lg:w-3/4 pl-0 lg:pl-16 bg-black overflow-hidden">
// //         {!activeMenu ? (
// //           <>
// //             <h3 className="text-sm uppercase text-gray-500 mb-4 font-semibold">
// //               Featured
// //             </h3>
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //               {featuredArticlesDefault.map((article, index) => (
// //                 <a
// //                   key={index}
// //                   href={article.href}
// //                   className="block text-white hover:opacity-90 transition"
// //                 >
// //                   <div className="bg-black mb-2 aspect-[16/10] relative overflow-hidden">
// //                     <img
// //                       src={article.img}
// //                       alt={article.alt}
// //                       className="z-10 w-full h-full object-cover"
// //                     />
// //                   </div>
// //                   <div>
// //                     <p className="text-sm text-gray-400 mb-1">
// //                       {article.readTime}
// //                     </p>
// //                     <h3 className="text-lg font-semibold mb-2 leading-snug">
// //                       {article.title}
// //                     </h3>
// //                     <div className="text-xs font-bold uppercase text-gray-500 flex items-center justify-between">
// //                       <span className="flex items-center gap-1">
// //                         <svg
// //                           width="16"
// //                           height="16"
// //                           viewBox="0 0 16 16"
// //                           fill="currentColor"
// //                           xmlns="http://www.w3.org/2000/svg"
// //                         >
// //                           <path d="M8,0C3.5,0-0.1,3.7,0,8.2C0.1,12.5,3.6,16,8,16c4.4,0,8-3.6,8-8C16,3.5,12.4,0,8,0z M8,15.2 C4,15.2,0.8,12,0.8,8C0.8,4,4,0.8,8,0.8c3.9,0,7.2,3.2,7.2,7.1C15.2,11.9,12,15.2,8,15.2z" />
// //                           <path d="M5.6,12c0.8-0.8,1.6-1.6,2.4-2.4c0.8,0.8,1.6,1.6,2.4,2.4c0-2.7,0-5.3,0-8C8.8,4,7.2,4,5.6,4 C5.6,6.7,5.6,9.3,5.6,12z" />
// //                         </svg>
// //                         {article.type}
// //                       </span>
// //                       <span>{article.timeAgo}</span>
// //                     </div>
// //                   </div>
// //                 </a>
// //               ))}
// //             </div>
// //           </>
// //         ) : (
// //           <div>
// //             {activeMenu === "Missions" && <MissionsMegaMenu />}
// //             {activeMenu === "Science" && <Science />}
// //             {activeMenu === "Aeronautics" && <Aeronautics />}
// //             {activeMenu === "Earth" && <EarthNASA />}
// //             {activeMenu === "Español" && <Espanol />}
// //             {activeMenu === "Humans in Space" && <HumansInSpace />}
// //             {activeMenu === "Learning Resources" && <LearningResources />}
// //             {activeMenu === "Technology" && <Technology />}
// //             {activeMenu === "The Solar System" && <TheSolarSystem />}
// //             {activeMenu === "The Universe" && <TheUniverse />}
// //             {activeMenu === "About NASA" && <AboutNASA />}
// //           </div>
// //         )}
// //       </section>
// //     </div>
// //   );
// // };

// // export default NasaMenu;

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// import MissionsMegaMenu from "./MissionsMegaMenu";
// import Science from "./Science";
// import Aeronautics from "./Aeronautics";
// import Espanol from "./Espanol";
// import HumansInSpace from "./HumansInSpace";
// import LearningResources from "./LearningResources";
// import Technology from "./Technology";
// import TheSolarSystem from "./TheSolarSystem";
// import TheUniverse from "./TheUniverse";
// import AboutNASA from "./AboutNASA";
// import EarthNASA from "./EarthNASA";

// const featuredArticlesDefault = [
//   {
//     title:
//       "NASA Earns Two Emmy Nominations for 2024 Total Solar Eclipse Coverage",
//     href: "https://www.nasa.gov/general/nasa-earns-two-emmy-nominations-for-2024-total-solar-eclipse-coverage/",
//     img: "https://www.nasa.gov/wp-content/uploads/2025/01/53639972892-b7c7581e8e-o.jpg?w=1024",
//     alt: "The Moon covers the Sun completely, with one last bit of brightness showing. The sky is dark all around.",
//     readTime: "3 min read",
//     type: "article",
//     timeAgo: "5 days ago",
//   },
//   {
//     title: "NASA’s Hubble Pinpoints Roaming Massive Black Hole",
//     href: "https://science.nasa.gov/missions/hubble/nasas-hubble-pinpoints-roaming-massive-black-hole/",
//     img: "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/releases/2025/05/Hubble_TDE_SixPanel_FullRes_STScI-01JTGZAPSZEJR9VKKDWXZQSYDT.jpg?w=1024",
//     alt: "NASA’s Hubble Pinpoints Roaming Massive Black Hole",
//     readTime: "7 min read",
//     type: "article",
//     timeAgo: "5 days ago",
//   },
//   {
//     title: "What’s Up: May 2025 Skywatching Tips from NASA",
//     href: "https://science.nasa.gov/solar-system/skywatching/whats-up-may-2025-skywatching-tips-from-nasa/",
//     img: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar-system/skywatching/2025/may/milky_way_credit_bill_dunford.jpg?w=1024",
//     alt: "What’s Up: May 2025 Skywatching Tips from NASA",
//     readTime: "6 min read",
//     type: "article",
//     timeAgo: "2 weeks ago",
//   },
// ];

// const navLinks = [
//   { label: "Home", href: "/" },
//   { label: "Missions", href: "#" },
//   { label: "Humans in Space", href: "https://www.nasa.gov/humans-in-space/" },
//   { label: "Earth", href: "https://science.nasa.gov/earth/" },
//   { label: "The Solar System", href: "https://science.nasa.gov/solar-system/" },
//   { label: "The Universe", href: "https://science.nasa.gov/universe/" },
//   { label: "Science", href: "https://science.nasa.gov/" },
//   { label: "Aeronautics", href: "https://www.nasa.gov/aeronautics/" },
//   { label: "Technology", href: "https://www.nasa.gov/technology/" },
//   {
//     label: "Learning Resources",
//     href: "https://www.nasa.gov/learning-resources/",
//   },
//   { label: "About NASA", href: "https://www.nasa.gov/about/" },
//   { label: "Español", href: "https://www.nasa.gov/es/" },
// ];

// const NasaMenu = () => {
//   const [activeMenu, setActiveMenu] = useState<string | null>(null);

//   const handleNavClick = (label: string, e: any) => {
//     e.preventDefault();
//     setActiveMenu(label === activeMenu ? null : label);
//   };

//   const renderMenuComponent = (label: string) => {
//     switch (label) {
//       case "Missions":
//         return <MissionsMegaMenu />;
//       case "Science":
//         return <Science />;
//       case "Aeronautics":
//         return <Aeronautics />;
//       case "Earth":
//         return <EarthNASA />;
//       case "Español":
//         return <Espanol />;
//       case "Humans in Space":
//         return <HumansInSpace />;
//       case "Learning Resources":
//         return <LearningResources />;
//       case "Technology":
//         return <Technology />;
//       case "The Solar System":
//         return <TheSolarSystem />;
//       case "The Universe":
//         return <TheUniverse />;
//       case "About NASA":
//         return <AboutNASA />;
//       case "Home":
//         return (
//           <a href="/" className="block text-blue-400 underline mt-2">
//             Go to Home →
//           </a>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="flex flex-col lg:flex-row w-full lg:w-[1905px] h-auto lg:h-[595px] bg-black py-[40px] px-4 lg:px-10 overflow-hidden">
//       {/* Navigation */}
//       <div className="w-full lg:w-1/5 hideen lg:border-r border-[#2e2e32]">
//         <ul className="space-y-1 px-4 lg:px-10">
//           {navLinks.map(({ label, href }) => (
//             <li key={label}>
//               <button
//                 onClick={(e) => handleNavClick(label, e)}
//                 className="w-full text-left text-white text-[20px] lg:text-[20px] flex justify-between items-center py-2 hover:underline"
//               >
//                 <span>{label}</span>
//                 <span className="lg:hidden">
//                   {activeMenu === label ? "−" : "+"}
//                 </span>
//               </button>

//               {/* Mobile: show section under item */}
//               <AnimatePresence initial={false}>
//                 {activeMenu === label && (
//                   <motion.div
//                     className="lg:hidden pl-4 mt-2"
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     {renderMenuComponent(label)}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Desktop: show content on the right */}
//       <section className="hidden xl:block w-full lg:w-4/5 pl-0 lg:pl-16 bg-black overflow-hidden">
//         {!activeMenu ? (
//           <>
//             <h3 className="text-sm uppercase text-gray-500 mb-4 font-semibold">
//               Featured
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
//               {featuredArticlesDefault.map((article, index) => (
//                 <a
//                   key={index}
//                   href={article.href}
//                   className="block text-white hover:opacity-90 transition"
//                 >
//                   <div className="bg-black mb-2 aspect-[16/10] relative overflow-hidden">
//                     <img
//                       src={article.img}
//                       alt={article.alt}
//                       className="z-10 w-full h-full object-cover"
//                     />
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-400 mb-1">
//                       {article.readTime}
//                     </p>
//                     <h3 className="text-lg font-semibold mb-2 leading-snug">
//                       {article.title}
//                     </h3>
//                     <div className="text-xs font-bold uppercase text-gray-500 flex items-center justify-between">
//                       <span className="flex items-center gap-1">
//                         <svg
//                           width="16"
//                           height="16"
//                           viewBox="0 0 16 16"
//                           fill="currentColor"
//                         >
//                           <path d="M8,0C3.5,0-0.1,3.7,0,8.2C0.1,12.5,3.6,16,8,16c4.4,0,8-3.6,8-8C16,3.5,12.4,0,8,0z M8,15.2 C4,15.2,0.8,12,0.8,8C0.8,4,4,0.8,8,0.8c3.9,0,7.2,3.2,7.2,7.1C15.2,11.9,12,15.2,8,15.2z" />
//                           <path d="M5.6,12c0.8-0.8,1.6-1.6,2.4-2.4c0.8,0.8,1.6,1.6,2.4,2.4c0-2.7,0-5.3,0-8C8.8,4,7.2,4,5.6,4 C5.6,6.7,5.6,9.3,5.6,12z" />
//                         </svg>
//                         {article.type}
//                       </span>
//                       <span>{article.timeAgo}</span>
//                     </div>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </>
//         ) : (
//           <div>{renderMenuComponent(activeMenu)}</div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default NasaMenu;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import MissionsMegaMenu from "./MissionsMegaMenu";
import Science from "./Science";
import Aeronautics from "./Aeronautics";
import Espanol from "./Espanol";
import HumansInSpace from "./HumansInSpace";
import LearningResources from "./LearningResources";
import Technology from "./Technology";
import TheSolarSystem from "./TheSolarSystem";
import TheUniverse from "./TheUniverse";
import AboutNASA from "./AboutNASA";
import EarthNASA from "./EarthNASA";

const featuredArticlesDefault = [
  {
    title:
      "NASA Earns Two Emmy Nominations for 2024 Total Solar Eclipse Coverage",
    href: "https://www.nasa.gov/general/nasa-earns-two-emmy-nominations-for-2024-total-solar-eclipse-coverage/",
    img: "https://www.nasa.gov/wp-content/uploads/2025/01/53639972892-b7c7581e8e-o.jpg?w=1024",
    alt: "The Moon covers the Sun completely, with one last bit of brightness showing.",
    readTime: "3 min read",
    type: "article",
    timeAgo: "5 days ago",
  },
  {
    title: "NASA’s Hubble Pinpoints Roaming Massive Black Hole",
    href: "https://science.nasa.gov/missions/hubble/nasas-hubble-pinpoints-roaming-massive-black-hole/",
    img: "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/releases/2025/05/Hubble_TDE_SixPanel_FullRes_STScI-01JTGZAPSZEJR9VKKDWXZQSYDT.jpg?w=1024",
    alt: "NASA’s Hubble Pinpoints Roaming Massive Black Hole",
    readTime: "7 min read",
    type: "article",
    timeAgo: "5 days ago",
  },
  {
    title: "What’s Up: May 2025 Skywatching Tips from NASA",
    href: "https://science.nasa.gov/solar-system/skywatching/whats-up-may-2025-skywatching-tips-from-nasa/",
    img: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar-system/skywatching/2025/may/milky_way_credit_bill_dunford.jpg?w=1024",
    alt: "May 2025 Skywatching Tips from NASA",
    readTime: "6 min read",
    type: "article",
    timeAgo: "2 weeks ago",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Missions", href: "#" },
  { label: "Humans in Space", href: "https://www.nasa.gov/humans-in-space/" },
  { label: "Earth", href: "https://science.nasa.gov/earth/" },
  { label: "The Solar System", href: "https://science.nasa.gov/solar-system/" },
  { label: "The Universe", href: "https://science.nasa.gov/universe/" },
  { label: "Science", href: "https://science.nasa.gov/" },
  { label: "Aeronautics", href: "https://www.nasa.gov/aeronautics/" },
  { label: "Technology", href: "https://www.nasa.gov/technology/" },
  {
    label: "Learning Resources",
    href: "https://www.nasa.gov/learning-resources/",
  },
  { label: "About NASA", href: "https://www.nasa.gov/about/" },
  { label: "Español", href: "https://www.nasa.gov/es/" },
];

const NasaMenu = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    if (activeMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [activeMenu]);

  const handleNavClick = (label: string, e: any) => {
    e.preventDefault();
    setActiveMenu(label === activeMenu ? null : label);
  };

  const renderMenuComponent = (label: string) => {
    switch (label) {
      case "Missions":
        return <MissionsMegaMenu />;
      case "Science":
        return <Science />;
      case "Aeronautics":
        return <Aeronautics />;
      case "Earth":
        return <EarthNASA />;
      case "Español":
        return <Espanol />;
      case "Humans in Space":
        return <HumansInSpace />;
      case "Learning Resources":
        return <LearningResources />;
      case "Technology":
        return <Technology />;
      case "The Solar System":
        return <TheSolarSystem />;
      case "The Universe":
        return <TheUniverse />;
      case "About NASA":
        return <AboutNASA />;
      case "Home":
        return (
          <a href="/" className="block text-blue-400 underline mt-2">
            Go to Home →
          </a>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full lg:w-[1700px] h-auto lg:h-[595px] bg-black py-[40px] px-4 lg:px-10 overflow-hidden">
      {/* Navigation */}
      <div className="w-full lg:w-1/5 border-r border-[#2e2e32]">
        <ul className="space-y-1 px-4 lg:px-10">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <button
                onClick={(e) => handleNavClick(label, e)}
                className="w-full text-left text-white text-[20px] flex justify-between items-center py-2 hover:underline"
              >
                <span>{label}</span>
                <span className="lg:hidden">
                  {activeMenu === label ? "−" : ">"}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop View: Panel on right */}
      <section className="hidden lg:block w-full lg:w-4/5 pl-0 lg:pl-16 bg-black overflow-hidden">
        {!activeMenu ? (
          <>
            <h3 className="text-sm uppercase text-gray-500 mb-4 font-semibold">
              Featured
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredArticlesDefault.map((article, index) => (
                <a
                  key={index}
                  href={article.href}
                  className="block text-white hover:opacity-90 transition"
                >
                  <div className="bg-black mb-2 aspect-[16/10] relative overflow-hidden">
                    <img
                      src={article.img}
                      alt={article.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">
                      {article.readTime}
                    </p>
                    <h3 className="text-lg font-semibold mb-2 leading-snug">
                      {article.title}
                    </h3>
                    <div className="text-xs font-bold uppercase text-gray-500 flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <path d="M8,0C3.5,0-0.1,3.7,0,8.2C0.1,12.5,3.6,16,8,16c4.4,0,8-3.6,8-8C16,3.5,12.4,0,8,0z M8,15.2 C4,15.2,0.8,12,0.8,8C0.8,4,4,0.8,8,0.8c3.9,0,7.2,3.2,7.2,7.1C15.2,11.9,12,15.2,8,15.2z" />
                          <path d="M5.6,12c0.8-0.8,1.6-1.6,2.4-2.4c0.8,0.8,1.6,1.6,2.4,2.4c0-2.7,0-5.3,0-8C8.8,4,7.2,4,5.6,4 C5.6,6.7,5.6,9.3,5.6,12z" />
                        </svg>
                        {article.type}
                      </span>
                      <span>{article.timeAgo}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </>
        ) : (
          <div>{renderMenuComponent(activeMenu)}</div>
        )}
      </section>

      {/* Mobile View: Slide-in Panel */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            key={activeMenu}
            className="lg:hidden fixed top-0 left-0 w-full h-full bg-black z-50 overflow-y-auto p-6"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-white text-xl font-bold">{activeMenu}</h2>
              <button
                onClick={() => setActiveMenu(null)}
                className="text-white text-2xl"
              >
                ×
              </button>
            </div>
            {renderMenuComponent(activeMenu)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NasaMenu;
