const links = [
  { title: "Home", url: "h/" },
  { title: "News & Events", url: "/" },
  { title: "Multimedia", url: "/" },
  { title: "NASA+", url: "/", subtitle: "LIVE" },
  { title: "Missions", url: "/" },
  { title: "Humans in Space", url: "/" },
  { title: "Earth", url: "/" },
  { title: "The Solar System", url: "/" },
  { title: "The Universe", url: "/" },
  { title: "Science", url: "/" },
  { title: "Aeronautics", url: "/" },
  { title: "Technology", url: "/" },
  {
    title: "Learning Resources",
    url: "/",
  },
  { title: "About NASA", url: "/" },
  { title: "NASA en Español", url: "/" },
];

const firstMobileGrid = links.slice(0, 8);
const secondMobileGrid = links.slice(8, 15);

export default function FooterLinks() {
  return (
    <div className="lg:px-5 text-white">
      {/* ✅ Mobile Layout - 2 wide columns with spacing */}
      <div className="grid grid-cols-2 gap-x-[150px] gap-y-4  md:hidden">
        {[firstMobileGrid, secondMobileGrid].map((group, groupIdx) => (
          <div key={groupIdx} className="w-[600px]">
            <ul className="space-y-2">
              {group.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.url}
                    target={
                      link.url.includes("nasa.gov/es") ? "_blank" : "_self"
                    }
                    rel="noopener noreferrer"
                    className="block text-[16px] "
                  >
                    {link.title}
                    {link.subtitle && (
                      <span className="text-[11px] cursor-pointer text-white font-medium uppercase tracking-wide px-[8px] border border-[#f64137] hover:bg-red-800 rounded-[2px] ml-2">
                        {link.subtitle}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ✅ Tablet & Desktop Layout - full grid, unchanged */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-y-2 gap-y-2">
        {links.map((link, idx) => (
          <div key={idx}>
            <a
              href={link.url}
              target={link.url.includes("nasa.gov/es") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="block text-[16px] pb-1"
            >
              <span className="inline hover:border-b-2 hover:border-dotted hover:border-white">
                {link.title}
              </span>
              {link.subtitle && (
                <span className="text-[11px] cursor-pointer text-white font-medium uppercase tracking-wide px-[8px] border border-[#f64137] hover:bg-red-800 rounded-[2px] ml-2">
                  {link.subtitle}
                </span>
              )}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
