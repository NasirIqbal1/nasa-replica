import React from "react";
import { ChevronDown } from "lucide-react";

const newsItems = [
  { label: "News Releases", href: "/" },
  {
    label: "Recently Published",
    href: "/",
  },
  { label: "Video Series on NASA+", href: "/" },
  { label: "Podcasts", href: "/" },
  { label: "Blogs", href: "/" },
  { label: "Newsletters", href: "/" },
  { label: "Social Media", href: "/" },
  {
    label: "Media Resources",
    href: "/",
  },
  { label: "Events", href: "/" },
  {
    label: "Upcoming Launches & Landings",
    href: "/",
  },
  {
    label: "Virtual Guest Program",
    href: "/",
  },
];

const multimediaItems = [
  { label: "NASA+", href: "/" },
  { label: "Images", href: "/" },
  { label: "NASA Live", href: "/" },
  { label: "NASA Apps", href: "/" },
  { label: "Podcasts", href: "/" },
  { label: "Image of the Day", href: "/" },
  { label: "e-Books", href: "/" },
  {
    label: "Sounds and Ringtones",
    href: "/",
  },
  { label: "Interactives", href: "/" },
  {
    label: "STEM Multimedia",
    href: "/",
  },
  {
    label: "NASA Brand & Usage Guidelines",
    href: "/",
  },
];

interface NavLinkProps {
  title: string;
  hasDropdown: boolean;
  currentOpen: string | null;
  setCurrentOpen: React.Dispatch<React.SetStateAction<string | null>>;
  onDropdownToggle: (title: string) => void;
}

export const NavLink: React.FC<NavLinkProps> = ({
  title,
  hasDropdown,
  currentOpen,
  setCurrentOpen,
  onDropdownToggle,
}) => {
  const getDropdownLinks = () => {
    switch (title) {
      case "News & Events":
        return newsItems;
      case "Multimedia":
        return multimediaItems;
      default:
        return [];
    }
  };

  return (
    <div className="relative">
      <button
        className="text-white flex items-center transition focus:border-4 focus:border-indigo-600"
        onClick={() => onDropdownToggle(title)}
      >
        {title}
        {hasDropdown && (
          <ChevronDown
            size={16}
            className={`ml-1 transform transition-transform ${
              currentOpen === title ? "rotate-180" : "rotate-0"
            }`}
          />
        )}
      </button>

      {hasDropdown && currentOpen === title && (
        <div className="absolute left-0 mt-2 w-72 bg-black rounded-lg shadow-lg overflow-hidden z-50 sm:w-80 lg:w-96">
          <div className="p-6 space-y-4">
            {/* Dropdown heading */}
            <div className="flex items-center space-x-4 text-white font-semibold text-[26px] border-b border-gray-600 pb-2">
              <span>{title}</span>
              <svg viewBox="0 0 32 32" className="w-[28px] h-[28px] fill-white">
                <circle cx="16" cy="16" r="16" fill="#E03C31" />
                <path
                  d="M8 16.956h12.604l-3.844 4.106 1.252 1.338L24 16l-5.988-6.4-1.252 1.338 3.844 4.106H8v1.912z"
                  fill="white"
                />
              </svg>
            </div>

            {/* Dropdown items */}
            {getDropdownLinks().map((item, index) => (
              <a key={index} href={item.href} className="block">
                <div className="text-white font-normal text-[18px]">
                  <span className="inline-block pb-[2px] hover:border-b hover:border-dotted hover:border-white transition-all duration-200">
                    {item.label}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

