export default function FooterIntro() {
  return (
    <>
      <h3 className="text-[22px] font-semibold sm:text-xl lg:text-[22px]">
        National Aeronautics and Space Administration
      </h3>
      <p className="text-[17px] leading-[1.65em] text-gray-400 sm:text-[15px]">
        NASA explores the unknown in air and space, innovates for the benefit of
        humanity, and inspires the world through discovery.
      </p>
      <ul className="space-y-1 text-sm">
        <li>
          <a
            href="https://www.nasa.gov/about/"
            className="relative pb-1 hover:border-b-2 hover:border-dotted hover:border-white"
          >
            About NASA's Mission
          </a>
        </li>
      </ul>
      <a
        href="https://www.nasa.gov/get-involved/"
        className="inline-flex items-center gap-2  text-white   text-[16px] font-semibold"
      >
        Join Us
        <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5">
          <circle cx="16" cy="16" r="16" fill="#FC3D21" />
          <path
            d="M8 16.956h12.604l-3.844 4.106 1.252 1.338L24 16l-5.988-6.4-1.252 1.338 3.844 4.106H8v1.912z"
            fill="#ffffff"
          />
        </svg>
      </a>
    </>
  );
}
