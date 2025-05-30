import React from "react";

interface CardProps {
  title: string;
  link: string;
  image: string;
  onClick: () => void;
  isSelected: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  link,
  image,
  onClick,
  isSelected,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer overflow-hidden rounded-md shadow-lg group hover:shadow-2xl transition-shadow duration-300 w-[330px] md:w-[344px] lg:w-full ${
        isSelected ? "border-4 border-blue-500" : ""
      }mx-auto`}
    >
      {/* Image */}
      <img
        src={image}
        alt={title || "NASA image"}
        className="w-full h-[495px] md:h-[516px]  lg:h-[480px] object-cover group-hover:scale-105 transition-transform duration-300"
      />

      {/* Overlay Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(80.99deg, #000 0%, transparent 89.04%)",
        }}
      ></div>

      {/* Title and Icon */}
      <div className="absolute inset-0 flex items-end p-[22px]">
        <h3 className="text-white text-[28px] font-bold flex items-center gap-3 z-10">
          {title}
          <svg viewBox="0 0 32 32" className="w-[28px] h-[28px] fill-white">
            <circle cx="16" cy="16" r="16" fill="#E03C31" />
            <path
              d="M8 16.956h12.604l-3.844 4.106 1.252 1.338L24 16l-5.988-6.4-1.252 1.338 3.844 4.106H8v1.912z"
              fill="white"
            />
          </svg>
        </h3>
      </div>
    </div>
  );
};

export default Card;
