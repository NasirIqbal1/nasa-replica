import React from "react";

interface Article {
  title: string;
  img: string;
  readTime: string;
  type: string;
  timeAgo: string;
  href?: string;
}

interface LinkItem {
  label: string;
  href: string;
}

interface Props {
  title: string;
  sublinks: LinkItem[];
  featuredArticles: Article[];
}

const MegaMenuTemplate: React.FC<Props> = ({
  title,
  sublinks,
  featuredArticles,
}) => {
  return (
    <div className="flex gap-[100px] bg-black text-white max-w-container-1200 mx-auto">
      {/* Center Sublinks */}
      <div className="w-[400px] md:w-[700px]">
        <div className="flex items-center gap-2 mb-10">
          <h3 className="text-[22px] font-bold">{title}</h3>
          <svg viewBox="0 0 32 32" className="w-[20px] h-[20px] fill-white">
            <circle cx="16" cy="16" r="16" fill="#E03C31" />
            <path
              d="M8 16.956h12.604l-3.844 4.106 1.252 1.338L24 16l-5.988-6.4-1.252 1.338 3.844 4.106H8v1.912z"
              fill="white"
            />
          </svg>
        </div>
        <ul className="space-y-2 text-sm">
          {sublinks.map((sublink, i) => (
            <li
              key={i}
              className="flex justify-between text-[17px] items-center border-b border-[#2e2e32] py-[6px] hover:text-red-500"
            >
              <a href={sublink.href}>{sublink.label}</a>
              <span className="text-sm">→</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Featured Articles */}
      <div className="hidden lg:block max-w-[440px] p-4">
        <h3 className="text-xs font-bold text-gray-600 uppercase mb-2">
          Featured
        </h3>
        {featuredArticles.map((item, index) => (
          <a
            key={index}
            href={item.href || "#"}
            target="_self"
            className="flex flex-col sm:flex-row text-black mb-6 group"
          >
            <div className="w-full sm:w-1/2 bg-black h-[124px] overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="sm:pl-6 pt-3 sm:pt-0 flex flex-col justify-center sm:w-1/2">
              <div>
                <div className="text-sm text-white mb-1">{item.readTime}</div>
                <h3 className="text-white text-[17px] font-semibold leading-snug mb-2 group-hover:underline">
                  {item.title}
                </h3>
              </div>
              <div className="text-xs font-bold uppercase text-gray-500 flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8,0C3.5,0-0.1,3.7,0,8.2C0.1,12.5,3.6,16,8,16c4.4,0,8-3.6,8-8C16,3.5,12.4,0,8,0z M8,15.2 C4,15.2,0.8,12,0.8,8C0.8,4,4,0.8,8,0.8c3.9,0,7.2,3.2,7.2,7.1C15.2,11.9,12,15.2,8,15.2z"></path>
                  <path d="M5.6,12c0.8-0.8,1.6-1.6,2.4-2.4c0.8,0.8,1.6,1.6,2.4,2.4c0-2.7,0-5.3,0-8C8.8,4,7.2,4,5.6,4 C5.6,6.7,5.6,9.3,5.6,12z"></path>
                </svg>
                <span>{item.type}</span>
                <span>{item.timeAgo}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MegaMenuTemplate;
