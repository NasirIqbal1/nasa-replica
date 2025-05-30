import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import image from "../../src/public/Explore_Our_Change/image.webp";

const EarthInfoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // triggers slightly before fully in view
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Variants for text container fade+slide up
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Variants for image popup (scale + fade in)
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <section ref={ref} className="w-full bg-[#f6f6f6] py-[72px]">
      <div className="grid grid-cols-12 gap-6 max-w-container-1335 mx-auto px-8 ">
        {/* Text Column */}
        <motion.div
          className="col-span-12 lg:col-span-6 w-full lg:w-[97%]"
          variants={textVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="mb-2">
            <h3 className="text-[20px] text-black font-bold">
              Earth Information Center
            </h3>
          </div>
          <div className="mb-2">
            <h2 className="lg:text-[48px] text-[29px] leading-[1.05em] font-bold text-black my-[38px] ">
              Explore our changing planet
            </h2>
          </div>
          <div className="mb-5">
            <p className="text-[18px] text-black">
              For more than 50 years, NASA satellites have provided data on
              Earth’s land, water, air, temperature, and climate. NASA’s Earth
              Information Center allows visitors to see how our planet is
              changing in six key areas: sea level rise and coastal impacts,
              health and air quality, wildfires, greenhouse gases, sustainable
              energy, and agriculture.
            </p>
          </div>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-black text-[22px] font-bold"
          >
            <span>
              Earth Science
              <span className="sr-only">about Explore our changing planet</span>
            </span>
            <svg viewBox="0 0 32 32" className="w-[20px] h-[20px] fill-white">
              <circle cx="16" cy="16" r="16" fill="#E03C31" />
              <path
                d="M8 16.956h12.604l-3.844 4.106 1.252 1.338L24 16l-5.988-6.4-1.252 1.338 3.844 4.106H8v1.912z"
                fill="white"
              />
            </svg>
          </a>
        </motion.div>

        {/* Image Column */}
        <motion.div
          className="col-span-12 lg:col-span-6"
          variants={imageVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="w-full">
            <figure className="w-full aspect-[5/3] overflow-hidden">
              <img
                src={image}
                alt="The St. Clair River flowing into Lake St. Clair"
                width={1536}
                height={1024}
                className="object-cover w-full h-full cursor-pointer"
                // Optional: add a hover scale effect for better interaction
                style={{ transition: "transform 0.3s ease" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </figure>
            <figcaption className="text-sm mt-2 text-gray-600">
              <div>
                The St. Clair River flows into the freshwater Lake St. Clair and
                separates the American state of Michigan (top) from the Canadian
                province of Ontario (bottom) in this photograph from the
                International Space Station as it orbited 260 miles above.
              </div>
              <div className="text-xs text-black">NASA</div>
            </figcaption>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EarthInfoSection;
