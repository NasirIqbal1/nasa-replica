import RotatingBackground from "./RotatingBackground";

export default function SimulatingFlight() {
  return (
    <section className="relative w-full min-h-[850px] bg-[#2a2a2a] text-white overflow-hidden">
      <RotatingBackground />

      <div className="relative z-10 flex items-center justify-center h-full px-12">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center transform lg:translate-y-[350px] md:translate-y-[300px] translate-y-[200px]">
          {/* === Desktop (lg and up): Dust Devil Content === */}
          <div className="hidden lg:flex flex-col items-start text-left">
            <h2 className="text-[48px] lg:text-[85px] font-bold leading-[1] mb-[60px] text-white">
              The Dust Devil is in the Details
            </h2>
            <p className="text-[17px] mb-6 text-white leading-[1.65em]">
              A Martian dust devil photobombed NASA’s Perseverance Mars rover as
              it took a selfie on May 10 to mark its 1,500th Martian day
              exploring the Red Planet. At the time, the rover was parked in
              “Witch Hazel Hill,” an area on Jezero Crater’s rim that the rover
              has been exploring over the past five months.
            </p>
            <a
              href="/"
              target="_self"
              className="flex items-center gap-2 text-[22px] text-white font-bold py-3"
            >
              Mars Exploration
              <svg
                viewBox="0 0 32 32"
                fill="none"
                className="w-5 h-5 -rotate-45"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="16"
                  fill="currentColor"
                  className="text-red-600"
                />
                <path
                  d="M8 16.956h12.604l-3.844 4.106 1.252 1.338L24 16l-5.988-6.4-1.252 1.338 3.844 4.106H8v1.912z"
                  fill="white"
                />
              </svg>
            </a>
          </div>

          {/* === Mobile/Tablet (below lg): X-59 Content === */}
          <div className="flex flex-col items-center text-start lg:hidden">
            <h2 className="text-[48px] md:text-[80px] font-bold leading-[1] mb-[60px] text-white">
              Quiet Supersonic Flight Is Taking Off
            </h2>
            <p className="text-[17px] mb-6 text-white leading-[1.65em]">
              NASA’s X-59 aircraft is set to reshape the future of air travel by
              dramatically reducing the noise from supersonic flight. Part of
              the Quesst mission, the X-59 is designed to fly faster than sound
              while producing only a gentle sonic "thump" — opening the door to
              overland supersonic commercial flights for the first time in
              decades.
            </p>
            <a
              href="https://www.nasa.gov/quesst/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[22px] text-white font-bold py-3"
            >
              Explore the X-59 Mission
              <svg
                viewBox="0 0 32 32"
                fill="none"
                className="w-5 h-5 -rotate-45"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="16"
                  fill="currentColor"
                  className="text-red-600"
                />
                <path
                  d="M8 16.956h12.604l-3.844 4.106 1.252 1.338L24 16l-5.988-6.4-1.252 1.338 3.844 4.106H8v1.912z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
