import React from "react";

interface LiveEventsHeaderProps {
  title: string;
  timezoneLocation: string;
  viewScheduleLink: string;
}

const LiveEventsHeader: React.FC<LiveEventsHeaderProps> = ({
  title,
  timezoneLocation,
  viewScheduleLink,
}) => {
  return (
    <header className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
      <div className="flex flex-col gap-4 lg:gap-10 md:flex-row md:items-end md:gap-4">
        <h3 className="text-[24px] lg:text-[28px] md:text-[23px] text-[#D1D1D1] font-bold">
          {title}
        </h3>
        <span className=" lg:text-[14px] md:text-[12px] text-[#D1D1D1]">
          Timezone location is{" "}
          <a href={viewScheduleLink} className="text-white">
            {timezoneLocation}
          </a>
        </span>
      </div>
      <a
        href={viewScheduleLink}
        className="flex items-center gap-2 text-white text-[16px] lg:text-[18px] transition-colors group"
      >
        View Schedule
        <svg
          viewBox="0 0 32 32"
          className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] fill-white"
        >
          <circle cx="16" cy="16" r="16" fill="#E03C31" />
          <path
            d="M8 16.956h12.604l-3.844 4.106 1.252 1.338L24 16l-5.988-6.4-1.252 1.338 3.844 4.106H8v1.912z"
            fill="white"
          />
        </svg>
      </a>
    </header>
  );
};

export default LiveEventsHeader;
