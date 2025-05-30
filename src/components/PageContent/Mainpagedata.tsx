import React from "react";
import LiveEventsHeader from "./Live/LiveEventsHeader";
import ExploreNewRelease from "./SwiperSection/ExploreNewRelease";
import SearchBar from "./SearchBar/SearchBar";
import IconicNasa from "./SwiperSection/IconicNasa";
import JuniorExplores from "./SwiperSection/JuniorExplores";
import CaseMissed from "./SwiperSection/CaseMissed";
import TopicsGrid from "./TopicsGrid/TopicsGrid";
import NasaSeries from "./NasaSeries/NasaSeries";

interface LiveEventsProps {
  title?: string;
  timezoneLocation?: string;
  viewScheduleLink?: string;
}

const Mainpagedata: React.FC<LiveEventsProps> = ({
  title = "Live & Upcoming Events",
  timezoneLocation = "America: New York",
  viewScheduleLink = "/nasa-plus",
}) => (
  <div className=" p-0 max-w-container-1412 mx-auto my-8 ">
    <div className="flex flex-col ">
      <div className="mb-[40px] lg:px-0 px-4">
        <SearchBar />
      </div>
      <div className="mb-[40px] lg:px-0 px-4">
        <LiveEventsHeader
          title={title}
          timezoneLocation={timezoneLocation}
          viewScheduleLink={viewScheduleLink}
        />
      </div>
      <div className="mb-[50px] lg:px-0 px-4">
        <ExploreNewRelease />
      </div>
      <div className="mb-[60px] lg:px-0 px-4">
        <IconicNasa />
      </div>
      <div className="mb-[60px] lg:px-0 px-4">
        <JuniorExplores />
      </div>
      <div className="mb-[60px] lg:px-0 px-4">
        <CaseMissed />
      </div>
      <div className="mb-[60px] lg:px-0 px-4">
        <TopicsGrid />
      </div>
      <div className="mb-[60px]">
        <NasaSeries />
      </div>
    </div>
  </div>
);

export default Mainpagedata;
