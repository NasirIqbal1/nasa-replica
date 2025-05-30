import { Facebook, Instagram, X, Youtube } from "lucide-react";

export default function FooterSocial() {
  return (
    <>
      <h3 className="text-[16px] text-gray-400">Follow NASA</h3>
      <div className="flex flex-wrap gap-3 justify-start">
        {[
          ["/", <Facebook className="w-4 h-4 text-white" />],
          ["//", <Instagram className="w-4 h-4 text-white" />],
          ["/", <X className="w-4 h-4 text-white" />],
          ["/", <Youtube className="w-4 h-4 text-white" />],
        ].map(([href, icon], idx) => (
          <a
            key={idx}
            href={href as string}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-[#2e2e32] text-black rounded-full flex items-center justify-center hover:bg-gray-600 transition"
          >
            {icon}
          </a>
        ))}
      </div>

      <ul className="space-y-1">
        <li>
          <a
            href="/"
            className="relative pb-1 hover:border-b-2 hover:border-dotted hover:border-white"
          >
            More NASA Social Accounts
          </a>
        </li>
        <li>
          <a
            href="/"
            className="relative pb-1 hover:border-b-2 hover:border-dotted hover:border-white"
          >
            NASA Newsletters
          </a>
        </li>
      </ul>
    </>
  );
}
