import React from 'react';
import { Twitter, Facebook, Instagram, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    aboutUs: ['Leadership', 'History', 'Careers', 'Locations'],
    connect: ['Contact Us', 'Media Relations', 'FOIA Requests', 'Speakers Bureau'],
    resources: ['For Educators', 'For Students', 'For Media', 'Image Gallery'],
    topics: ['Humans in Space', 'Solar System', 'Earth', 'Universe'],
  };

  return (
    <footer className="bg-[#0B3D91] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Logo and Social */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <svg
                className="h-10 w-10 text-white"
                viewBox="0 0 100 100"
                fill="currentColor"
              >
                <path d="M50,0 C77.6142,0 100,22.3858 100,50 C100,77.6142 77.6142,100 50,100 C22.3858,100 0,77.6142 0,50 C0,22.3858 22.3858,0 50,0 Z M50,15 C30.67,15 15,30.67 15,50 C15,69.33 30.67,85 50,85 C69.33,85 85,69.33 85,50 C85,30.67 69.33,15 50,15 Z" />
                <path d="M36.9708,16.6752 L76.2144,83.3248 L81.2538,80.3248 L41.6069,13.6752 L36.9708,16.6752 Z" />
                <path d="M63.0292,16.6752 L23.7856,83.3248 L18.7462,80.3248 L58.3931,13.6752 L63.0292,16.6752 Z" />
                <path d="M50,15 L50,85 L55,85 L55,15 L50,15 Z" />
                <path d="M15,50 L85,50 L85,45 L15,45 L15,50 Z" />
              </svg>
              <span className="font-bold text-2xl">NASA</span>
            </div>
            <p className="text-white/80 mb-6">
              National Aeronautics and Space Administration
            </p>
            <div className="flex space-x-4">
              <a href="#twitter" className="text-white hover:text-[#FC3D21] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#facebook" className="text-white hover:text-[#FC3D21] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#instagram" className="text-white hover:text-[#FC3D21] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#youtube" className="text-white hover:text-[#FC3D21] transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#mail" className="text-white hover:text-[#FC3D21] transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* About Us */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">About Us</h3>
            <ul className="space-y-2">
              {links.aboutUs.map((link, index) => (
                <li key={index}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-white/80 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <ul className="space-y-2">
              {links.connect.map((link, index) => (
                <li key={index}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-white/80 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-white/80 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Topics</h3>
            <ul className="space-y-2">
              {links.topics.map((link, index) => (
                <li key={index}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-white/80 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-white/70 mb-4 md:mb-0">
              &copy; {currentYear} NASA. All Rights Reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#privacy" className="text-sm text-white/70 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-sm text-white/70 hover:text-white transition-colors">
                Terms of Use
              </a>
              <a href="#accessibility" className="text-sm text-white/70 hover:text-white transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;