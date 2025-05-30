export default function FooterLegal() {
  return (
    <ul className="grid grid-cols-2  gap-y-2 gap-x-6 text-[#b9b9bb] text-[14px] mt-5 sm:grid-cols-2 md:grid-cols-2 lg:flex lg:flex-wrap">
      {[
        ["Sitemap", "/"],
        ["For Media", "/"],
        ["Privacy Policy", "/"],
        ["FOIA", "/"],
        ["No FEAR Act", "/"],
        ["Office of the IG", "/"],
        ["Budget & Annual Reports", "/"],
        ["Agency Financial Reports", "/"],
        ["Contact NASA", "/"],
        ["Accessibility", "/"],
      ].map(([label, path], idx) => (
        <li key={idx}>
          <a
            href={
              path.startsWith("http") ? path : `https://www.nasa.gov/${path}`
            }
            target={path.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="relative pb-1 hover:border-b-2 hover:border-dotted hover:border-[#b9b9bb]"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
