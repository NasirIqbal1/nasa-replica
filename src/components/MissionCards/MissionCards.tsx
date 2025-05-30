interface Mission {
  label: string;
  title: string;
  link: string;
}

const missions: Mission[] = [
  {
    label: "CURRENT MISSION",
    title: "Expedition 73",
    link: "/",
  },
  {
    label: "FUTURE MISSION",
    title: "Axiom Mission 4",
    link: "/",
  },
  {
    label: "FUTURE MISSION",
    title: "NASA’s SpaceX",
    link: "/",
  },
];

const MissionCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-1 lg:gap-6 max-w-screen-xl mb-[22px] lg:mb-0">
      {missions.map((mission, idx) => (
        <div key={idx} className="border-t border-white/20 pt-4">
          <h3 className="text-[11px] text-white  tracking-[3.5px] mb-4">
            {mission.label}
          </h3>
          <a
            href={mission.link}
            target="_self"
            className="flex items-center gap-3 text-white text-lg font-bold "
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

export default MissionCards;
