"use client";

import FooterIntro from "./FooterIntro";
import FooterLinks from "./FooterLinks";
import FooterLegal from "./FooterLegal";
import FooterMeta from "./FooterMeta";
import FooterSocial from "./FooterSocial";
import FooterLogo from "./FooterLogo";

export default function NASAFooter() {
  return (
    <footer className="bg-black relative text-white px-4 py-10">
      {/* Logo Section */}
      <div className="max-w-container-1412 mx-auto mb-8">
        <div className="ml-2 lg:ml-0">
          <FooterLogo />
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="max-w-container-1412 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-10 gap-x-8">
        {/* Footer Intro */}
        <div className="lg:col-span-4 md:col-span-8 col-span-12 max-w-md space-y-4 px-2 lg:px-0">
          <FooterIntro />
        </div>

        {/* Footer Links */}
        <div className="lg:col-span-6 md:col-span-2 col-span-8 px-2 lg:px-0">
          <FooterLinks />
        </div>

        {/* Footer Social Icons (only for large screens) */}
        <div className="col-span-12 lg:col-span-2 px-2 lg:px-0 space-y-3 block md:hidden lg:block">
          <FooterSocial />
        </div>

        {/* Footer Legal Section (only for large screens) */}
        <div className="lg:col-span-12 col-span-12 md:col-span-12 border-t border-[#58585b] pt-4 mt-6 px-2 lg:px-0 hidden lg:block">
          <FooterLegal />
        </div>

        {/* Tablet-specific Layout */}
        <div className="hidden md:flex lg:hidden col-span-12 flex-row gap-4 px-2">
          {/* Footer Social */}
          <div className="basis-1/3">
            <FooterSocial />
          </div>

          {/* Footer Legal */}
          <div className="basis-2/3 border-t border-[#58585b] pt-4 mt-6">
            <FooterLegal />
          </div>
        </div>

        {/* Meta Section */}
        <div className="lg:col-span-12 col-span-12 text-sm text-[#b9b9bb] flex flex-wrap gap-4 px-2 lg:px-0">
          <FooterMeta />
        </div>
      </div>
    </footer>
  );
}
