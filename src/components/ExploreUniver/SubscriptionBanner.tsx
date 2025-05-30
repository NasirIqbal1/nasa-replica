import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import image from "../../public/Explore_the_Universe/image.webp";

const SubscriptionBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="relative z-[400] w-full max-w-full bg-black text-white overflow-hidden h-[450px] md:h-[328px] lg:h-[550px] px-5 sm:px-6 md:px-10"
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Image & Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={image}
          alt="Space image"
          className="w-full h-full object-cover"
          style={{
            objectPosition: "32% 38%",
            transformOrigin: "32% 78%",
          }}
        />
        <div className="absolute inset-0 " />
      </div>

      {/* Content - forces height */}
      <div className="relative z-10 h-full flex items-center max-w-container-1335 mx-auto">
        <div className="w-full lg:w-[38%]">
          <h2 className="text-[36px] md:text-[36px] lg:text-[56px] font-bold leading-[1.1em] mb-8">
            Explore the Universe from your Inbox
          </h2>

          <p className="text-[15px] sm:text-[16px] font-bold leading-[1.2em] mb-3">
            Stay up-to-date on the latest news from NASA–from Earth to the Moon,
            the Solar System and beyond.
          </p>

          <div className="lg:flex items-center mb-5">
            <p className="text-[14px] sm:text-[15px] mr-2 mb-1 lg:mb-0">
              We will never share your email address.
            </p>
            <p className="text-[15px] underline decoration-dashed underline-offset-4">
              <a href="/" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            </p>
          </div>

          <a
            href="/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-[20px] sm:text-[22px] text-white font-bold mt-4"
            aria-label="Sign up for NASA updates"
          >
            <span>Sign Up</span>
            <svg
              viewBox="0 0 32 32"
              className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] fill-white"
            >
              <circle cx="16" cy="16" r="16" fill="#E03C31" />
              <path
                d="M8 16.956h12.604l-3.844 4.106 1.252 1.338L24 16l-5.988-6.4-1.252 1.338 3.844 4.106H8v1.912z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default SubscriptionBanner;
