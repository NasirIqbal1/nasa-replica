import React from "react";
import Arrow from "../../../public/Searchbar/arrow.svg";

const SearchBar: React.FC = () => {
  return (
    <div className="max-w-container-1400 mx-auto grid grid-cols-1 px-0  ">
      <section className="w-full" aria-label="Search videos, topics, and more">
        <form
          className="relative w-full"
          role="search"
          method="get"
          action="/nasa-plus"
          autoComplete="off"
        >
          <label htmlFor="search-field-en-suggested" className="sr-only">
            Search
          </label>

          {/* Search Bar Container */}
          <div className="relative w-full">
            <input
              className=" py-4 px-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#3d3d41]  placeholder:text-[#67676b] placeholder:text-[20px]"
              id="search-field-en-suggested"
              type="search"
              name="s"
              placeholder="Search videos, topics, and more"
            />

            {/* Left icon inside input */}
            <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
              <img
                src="https://plus.nasa.gov/wp-content/themes/nasatv/assets/img/usa-icons-bg/search--white.svg"
                alt="Search Icon"
                className="w-7 h-7"
                style={{ filter: "brightness(1) invert(0.6)" }}
              />
            </div>

            {/* Submit button on right */}
            <button
              type="submit"
              className="absolute inset-y-0 right-1 top-2 flex items-center justify-center bg-[#605e5e] hover:bg-[#2e38c6] rounded-full h-10 w-10 transition-all"
            >
              <img
                src={Arrow}
                alt="Search"
                className="w-6 h-6 transform rotate-180"
              />
            </button>
          </div>
        </form>

        {/* Suggested results list (optional) */}
        <div id="results-container" className="mt-2">
          <ul id="suggested-results" className="list-none pl-0" />
        </div>
      </section>
    </div>
  );
};

export default SearchBar;
