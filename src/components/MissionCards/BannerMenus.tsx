interface Banner {
  label: string;
  title: string;
  link: string;
}

const missions: Banner[] = [
  {
    label: "Coming Up",
    title: "Expedition 73",
    link: "/nasa-plus",
  },
  {
    label: "Dive Deep in a Show",
    title: "Explore by Topic",
    link: "/nasa-plus",
  },
  {
    label: "Explore by Series",
    title: "NASA’s SpaceX",
    link: "/nasa-plus",
  },
];

const BannerMenus: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid lg:grid-cols-5  gap-1 lg:gap-6 max-w-container-1400 mb-[22px] lg:mb-0">
      {missions.map((mission, idx) => (
        <div key={idx} className="border-t border-white/20 pt-4">
          <h3 className="text-[11px] text-white uppercase  tracking-[3.5px] ">
            {mission.label}
          </h3>
          <a
            href={mission.link}
            target="_self"
            className="flex items-center gap-3 text-white text-lg font-bold"
          >
            {mission.title}
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 -rotate-45 "
            >
              <circle
                cx="16"
                cy="16"
                r="16"
                fill="currentColor"
                className="text-red-600"
              ></circle>
              <path
                d="M8 16.956h12.604l-3.844 4.106 1.252 1.338L24 16l-5.988-6.4-1.252 1.338 3.844 4.106H8v1.912z"
                fill="white"
              ></path>
            </svg>
          </a>
        </div>
      ))}
    </div>
  );
};

export default BannerMenus;
