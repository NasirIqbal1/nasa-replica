import { useEffect, useRef } from "react";
import { topics } from "./topics";
import VanillaTilt from "vanilla-tilt";

interface Topic {
  href: string;
  src: string;
  alt: string;
  title: string;
}

interface VanillaTiltElement extends HTMLElement {
  vanillaTilt?: {
    destroy: () => void;
  };
}

export default function MoreTopics() {
  return (
    <section className="py-[56px] lg:px-4 px-8 text-white">
      <div className="max-w-container-1335 mx-auto ">
        <h2 className="text-2xl text-black md:text-[40px] font-bold mt-[60px] mb-[70px]">
          More Topics from NASA
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-5 lg:gap-x-6">
          {topics.map((topic, index) => (
            <TiltCard key={index} topic={topic} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TiltCard({ topic }: { topic: Topic }) {
  const tiltRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = tiltRef.current as unknown as VanillaTiltElement | null;
    if (!node) return;

    VanillaTilt.init(node, {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.4,
      scale: 1.05,
      easing: "cubic-bezier(.03,.98,.52,.99)",
    });

    return () => {
      if (node.vanillaTilt) {
        node.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <a
      href={topic.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block cursor-pointer"
      aria-label={topic.title}
    >
      <div
        ref={tiltRef}
        className="
          relative
          overflow-hidden
          rounded-md
          bg-black
          h-[495px] sm:h-[516px]
          transition-shadow duration-300 ease-in-out
          group
        "
      >
        {/* Shine Effect */}
        <div className="absolute shine-wrapper inset-0 z-[9] pointer-events-none">
          <div className="shine" />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 rounded-md" />

        {/* Image */}
        <img
          src={topic.src}
          alt={topic.alt}
          className="w-full h-full object-cover rounded-md"
          loading="lazy"
        />

        {/* Additional gradient */}
        <div
          className="absolute inset-0 rounded-md pointer-events-none"
          style={{
            background:
              "linear-gradient(70.99deg, #000 0%, transparent 59.04%)",
          }}
        />

        {/* Title & Icon */}
        <div className="absolute bottom-4 left-4 z-20 p-[24px]">
          <h3 className="text-[20px] sm:text-[24px] md:text-[26px] lg:text-[29px] font-bold flex items-center gap-5 text-white">
            {topic.title}
            <svg
              viewBox="0 0 32 32"
              fill="none"
              className="w-6 h-6 md:w-7 md:h-7"
            >
              <circle cx="16" cy="16" r="16" fill="#FC3D21" />
              <path
                d="M8 16.956h12.604l-3.844 4.106 1.252 1.338L24 16l-5.988-6.4-1.252 1.338 3.844 4.106H8v1.912z"
                fill="#ffffff"
              />
            </svg>
          </h3>
        </div>
      </div>
    </a>
  );
}
