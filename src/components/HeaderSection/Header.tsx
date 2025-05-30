// import React, { useState } from "react";
// import { Search, Menu, X, ChevronDown } from "lucide-react";
// import { AnimatePresence, motion } from "framer-motion";
// import Logo from "../../public/Logo/nasa-logo.svg";
// import NasaMenu from "../ExploreSection/NasaMenu";
// import { NavLink } from "../NavLink";
// import { Link } from "react-router-dom";

// const Header: React.FC = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [exploreOpen, setExploreOpen] = useState(false);
//   const [currentOpen, setCurrentOpen] = useState<string | null>(null);

//   const navLinks = [
//     { title: "News & Events", hasDropdown: true },
//     { title: "Multimedia", hasDropdown: true },
//     { title: "NASA+", hasDropdown: false, subtitle: "LIVE" },
//   ];

//   const handleDropdownToggle = (title: string) => {
//     setCurrentOpen(currentOpen === title ? null : title);
//   };

//   return (
//     <header className="relative top-0 w-full z-50 bg-black">
//       <div className="max-w-container-1712 mx-auto px-4">
//         <div className="flex items-center justify-between h-20 md:justify-start">
//           {/* Mobile: Menu (left) */}
//           <div className="lg:hidden">
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="text-white p-2"
//             >
//               {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>

//           {/* Desktop + Tablet: Explore + Search (left) */}
//           <div className="hidden lg:flex items-center space-x-6 w-1/3">
//             <div>
//               <button
//                 onClick={() => setExploreOpen(!exploreOpen)}
//                 className="text-white font-semibold py-1.5 text-[22px] flex items-center space-x-3 focus:border-4 focus:border-indigo-600"
//               >
//                 <span>Explore</span>
//                 <span
//                   className={`flex items-center justify-center border border-white rounded-full p-1 transition-transform duration-300 ${
//                     exploreOpen ? "rotate-180" : "rotate-0"
//                   }`}
//                 >
//                   <ChevronDown size={13} />
//                 </span>
//               </button>
//               {exploreOpen && (
//                 <div className="absolute left-0 w-screen max-w-container-1600 shadow-lg z-50">
//                   <NasaMenu />
//                 </div>
//               )}
//             </div>

//             <div className="relative">
//               <form className="w-full mx-auto">
//                 <input
//                   type="search"
//                   className="block w-full pl-2 py-1 text-[15px] text-white bg-black border border-[#565c65] focus:outline-none focus:border-4 focus:border-indigo-600 placeholder:text-gray-400"
//                   placeholder="Search"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//               </form>
//             </div>
//           </div>

//           <div className="flex-1 flex justify-center lg:justify-center w-full  lg:w-1/5">
//             <a href="/" className="flex items-center space-x-2">
//               <img src={Logo} alt="NASA Logo" className="h-14 w-auto" />
//             </a>
//           </div>

//           {/* Right: Search (Mobile) + Nav (Desktop/Tablet) */}
//           <div className="flex items-center justify-end space-x-4 w-1/3">
//             {/* Mobile Search Button */}
//             <div className="lg:hidden">
//               <button
//                 onClick={() => setSearchOpen(!searchOpen)}
//                 className="text-white p-2 hover:bg-white/10 rounded-full transition"
//               >
//                 <Search size={20} />
//               </button>
//               {searchOpen && (
//                 <div className="absolute left-0 top-12 w-72 bg-white rounded-lg shadow-lg z-50">
//                   <div className="p-2 flex items-center border-b">
//                     <Search size={18} className="text-gray-500 mr-2" />
//                     <input
//                       type="text"
//                       placeholder="Search NASA..."
//                       className="w-full outline-none"
//                       value={searchQuery}
//                       onChange={(e) => setSearchQuery(e.target.value)}
//                     />
//                     <button
//                       onClick={() => setSearchOpen(false)}
//                       className="text-gray-500 p-1 hover:bg-gray-100 rounded"
//                     >
//                       <X size={18} />
//                     </button>
//                   </div>
//                   {searchQuery && (
//                     <div className="p-2">
//                       <div className="text-sm text-gray-500 mb-2">
//                         Suggestions:
//                       </div>
//                       <div className="space-y-1">
//                         <div className="p-2 hover:bg-gray-100 rounded cursor-pointer">
//                           Mars Rover Updates
//                         </div>
//                         <div className="p-2 hover:bg-gray-100 rounded cursor-pointer">
//                           International Space Station
//                         </div>
//                         <div className="p-2 hover:bg-gray-100 rounded cursor-pointer">
//                           Artemis Program
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>

//             {/* Desktop/Tablet Nav */}
//             <nav className="hidden lg:flex space-x-8 text-[20px] font-bold">
//               {navLinks.map((link) => (
//                 <div key={link.title} className="flex items-center space-x-1">
//                   {link.title === "NASA+" ? (
//                     <Link
//                       to="/nasa-plus"
//                       className="text-white hover:text-indigo-400 flex items-center space-x-2"
//                     >
//                       <span>{link.title}</span>
//                       {link.subtitle && (
//                         <span className="text-[11px] text-white font-medium uppercase tracking-wide px-[8px] border border-[#f64137] hover:bg-red-800 rounded-[2px]">
//                           {link.subtitle}
//                         </span>
//                       )}
//                     </Link>
//                   ) : (
//                     <>
//                       <NavLink
//                         title={link.title}
//                         hasDropdown={link.hasDropdown}
//                         currentOpen={currentOpen}
//                         setCurrentOpen={setCurrentOpen}
//                         onDropdownToggle={handleDropdownToggle}
//                       />
//                     </>
//                   )}
//                 </div>
//               ))}
//             </nav>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu (Now visible on mobile + tablet) */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             className="inset-0 lg:hidden bg-black z-50 h-screen overflow-y-auto shadow-lg"
//             initial={{ opacity: 0, x: "-100%" }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: "-100%" }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//           >
//             <div className="text-white px-4 py-6">
//               <NasaMenu />
//               <div className="border-b border-gray-700 border-[0.5px] my-4"></div>
//               {navLinks.map((link) => (
//                 <div
//                   key={link.title}
//                   className="flex items-center space-x-2 mb-3 px-7 text-[20px]"
//                 >
//                   {link.title === "NASA+" ? (
//                     <Link
//                       to="/nasa-plus"
//                       className="text-white hover:text-indigo-400 flex items-center space-x-2"
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       <span>{link.title}</span>
//                       {link.subtitle && (
//                         <span className="text-[11px] text-white font-medium uppercase tracking-wide px-2 border border-[#f64137] hover:bg-red-800 rounded-[2px]">
//                           {link.subtitle}
//                         </span>
//                       )}
//                     </Link>
//                   ) : (
//                     <>
//                       <NavLink
//                         title={link.title}
//                         hasDropdown={link.hasDropdown}
//                         currentOpen={currentOpen}
//                         setCurrentOpen={setCurrentOpen}
//                         onDropdownToggle={handleDropdownToggle}
//                       />
//                     </>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../../public/Logo/nasa-logo.svg";
import NasaMenu from "../ExploreSection/NasaMenu";
import { NavLink } from "../NavLink";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [exploreOpen, setExploreOpen] = useState(false);
  const [currentOpen, setCurrentOpen] = useState<string | null>(null);

  const navLinks = [
    { title: "News & Events", hasDropdown: true },
    { title: "Multimedia", hasDropdown: true },
    { title: "NASA+", hasDropdown: false, subtitle: "LIVE" },
  ];

  const handleDropdownToggle = (title: string) => {
    setCurrentOpen(currentOpen === title ? null : title);
  };

  return (
    <header className="relative top-0 w-full z-50 bg-black">
      <div className="max-w-container-1712 mx-auto px-4">
        <div className="flex items-center justify-between h-20 relative w-full">
          {/* Mobile: Menu (left) */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop + Tablet: Explore + Search (left) */}
          <div className="hidden lg:flex items-center space-x-6 w-1/3">
            <div>
              <button
                onClick={() => setExploreOpen(!exploreOpen)}
                className="text-white font-semibold py-1.5 text-[22px] flex items-center space-x-3 focus:border-4 focus:border-indigo-600"
              >
                <span>Explore</span>
                <span
                  className={`flex items-center justify-center border border-white rounded-full p-1 transition-transform duration-300 ${
                    exploreOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <ChevronDown size={13} />
                </span>
              </button>
              {exploreOpen && (
                <div className="absolute left-0 w-screen max-w-container-1600 shadow-lg z-50">
                  <NasaMenu />
                </div>
              )}
            </div>

            <div className="relative">
              <form className="w-full mx-auto">
                <input
                  type="search"
                  className="block w-full pl-2 py-1 text-[15px] text-white bg-black border border-[#565c65] focus:outline-none focus:border-4 focus:border-indigo-600 placeholder:text-gray-400"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
            </div>
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
            <a href="/" className="flex items-center space-x-2">
              <img src={Logo} alt="NASA Logo" className="h-14 w-auto" />
            </a>
          </div>

          {/* Right: Search (Mobile) + Nav (Desktop/Tablet) */}
          <div className="flex items-center justify-end space-x-4 w-1/3 lg:w-auto">
            {/* Mobile Search Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-white p-2 hover:bg-white/10 rounded-full transition"
              >
                <Search size={20} />
              </button>
              {searchOpen && (
                <div className="absolute left-0 top-12 w-72 bg-white rounded-lg shadow-lg z-50">
                  <div className="p-2 flex items-center border-b">
                    <Search size={18} className="text-gray-500 mr-2" />
                    <input
                      type="text"
                      placeholder="Search NASA..."
                      className="w-full outline-none"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button
                      onClick={() => setSearchOpen(false)}
                      className="text-gray-500 p-1 hover:bg-gray-100 rounded"
                    >
                      <X size={18} />
                    </button>
                  </div>
                  {searchQuery && (
                    <div className="p-2">
                      <div className="text-sm text-gray-500 mb-2">
                        Suggestions:
                      </div>
                      <div className="space-y-1">
                        <div className="p-2 hover:bg-gray-100 rounded cursor-pointer">
                          Mars Rover Updates
                        </div>
                        <div className="p-2 hover:bg-gray-100 rounded cursor-pointer">
                          International Space Station
                        </div>
                        <div className="p-2 hover:bg-gray-100 rounded cursor-pointer">
                          Artemis Program
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Desktop/Tablet Nav */}
            <nav className="hidden lg:flex space-x-8 text-[20px] font-bold">
              {navLinks.map((link) => (
                <div key={link.title} className="flex items-center space-x-1">
                  {link.title === "NASA+" ? (
                    <Link
                      to="/nasa-plus"
                      className="text-white hover:text-indigo-400 flex items-center space-x-2"
                    >
                      <span>{link.title}</span>
                      {link.subtitle && (
                        <span className="text-[11px] text-white font-medium uppercase tracking-wide px-[8px] border border-[#f64137] hover:bg-red-800 rounded-[2px]">
                          {link.subtitle}
                        </span>
                      )}
                    </Link>
                  ) : (
                    <NavLink
                      title={link.title}
                      hasDropdown={link.hasDropdown}
                      currentOpen={currentOpen}
                      setCurrentOpen={setCurrentOpen}
                      onDropdownToggle={handleDropdownToggle}
                    />
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="inset-0 lg:hidden bg-black z-50 h-screen overflow-y-auto shadow-lg"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="text-white px-4 py-6">
              <NasaMenu />
              <div className="border-b border-gray-700 border-[0.5px] my-4"></div>
              {navLinks.map((link) => (
                <div
                  key={link.title}
                  className="flex items-center space-x-2 mb-3 px-7 text-[20px]"
                >
                  {link.title === "NASA+" ? (
                    <Link
                      to="/nasa-plus"
                      className="text-white hover:text-indigo-400 flex items-center space-x-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{link.title}</span>
                      {link.subtitle && (
                        <span className="text-[11px] text-white font-medium uppercase tracking-wide px-2 border border-[#f64137] hover:bg-red-800 rounded-[2px]">
                          {link.subtitle}
                        </span>
                      )}
                    </Link>
                  ) : (
                    <NavLink
                      title={link.title}
                      hasDropdown={link.hasDropdown}
                      currentOpen={currentOpen}
                      setCurrentOpen={setCurrentOpen}
                      onDropdownToggle={handleDropdownToggle}
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

