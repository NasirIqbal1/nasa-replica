"use client";
import React from "react";

interface NewsCardProps {
  id: string;
  title: string;
  image: string; // URL string
  link: string;
  category: string;
  readTime: string;
  size?: "large" | "medium" | "small" | "circle";
  onClick?: (id: string) => void;
  selected?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({
  id,
  title,
  image,
  link,
  category,
  readTime,
  size = "medium",
  onClick,
  selected = false,
}) => {
  const handleClick = () => {
    onClick?.(id);
  };

  if (size === "circle") {
    return (
      <a href={link} onClick={handleClick} className="flex items-start group">
        <div className="relative mr-3 flex-shrink-0">
          <div
            className={`h-[80px] w-[80px] rounded-full overflow-hidden bg-gray-800 ${
              selected ? "border-2 border-blue-500" : ""
            }`}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-600 tracking-[3.5px] mb-1">
            {readTime}
          </div>
          <h3 className="text-sm font-bold line-clamp-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <div className="flex gap-3 items-center text-xs text-gray-500 tracking-[3.5px] mt-1">
            <svg
              version="1.1"
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <g>
                <path d="M8,0C3.5,0-0.1,3.7,0,8.2C0.1,12.5,3.6,16,8,16c4.4,0,8-3.6,8-8C16,3.5,12.4,0,8,0z M8,15.2 C4,15.2,0.8,12,0.8,8C0.8,4,4,0.8,8,0.8c3.9,0,7.2,3.2,7.2,7.1C15.2,11.9,12,15.2,8,15.2z"></path>
                <path d="M5.6,12c0.8-0.8,1.6-1.6,2.4-2.4c0.8,0.8,1.6,1.6,2.4,2.4c0-2.7,0-5.3,0-8C8.8,4,7.2,4,5.6,4 C5.6,6.7,5.6,9.3,5.6,12z"></path>
              </g>
            </svg>
            <span>{category}</span>
          </div>
        </div>
      </a>
    );
  }

  const sizeClasses: Record<string, string> = {
    large:
      "h-[360px] w-full max-w-[310px] md:h-[400px] md:max-w-none lg:h-[400px] lg:max-w-none",
    medium:
      "h-[360px] w-full max-w-[310px] md:h-[435px] md:max-w-none lg:h-[400px] lg:max-w-none",
    small:
      "h-[180px] w-full max-w-[310px] md:h-[210px] md:max-w-none lg:h-[192px] lg:max-w-none",
  };

  return (
    <a
      href={link}
      onClick={handleClick}
      className={`block relative overflow-hidden group ${sizeClasses[size]} ${
        selected ? "border-4 border-blue-500" : ""
      } mx-auto`}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex flex-col justify-end p-4 text-white">
        <div className="text-xs font-medium tracking-[3.5px] mb-2">
          {readTime}
        </div>
        <h3 className="text-[22px] font-bold leading-snug">{title}</h3>
        <div className="flex items-center text-xs tracking-[3.5px] mt-1 text-white/80">
          {category}
        </div>
      </div>
    </a>
  );
};

export default NewsCard;
