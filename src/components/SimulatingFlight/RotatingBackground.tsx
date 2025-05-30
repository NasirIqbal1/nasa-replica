import flightImage from "../../public/SimulatingFlight/Flight1.webp";
import flightVideo from "../../public/VideoBox/Roobot.mp4";

export default function StaticBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Image for mobile and medium screens */}
      <img
        src={flightImage}
        alt="Flight Background"
        className="w-full h-full object-cover block lg:hidden"
        style={{
          transform: "scale(1)",
          transformOrigin: "70% 48%",
          objectPosition: "70% 48%",
        }}
      />

      {/* Video for large screens */}
      <video
        src={flightVideo}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover hidden lg:block"
        style={{
          transform: "scale(1)",
          transformOrigin: "70% 48%",
          objectPosition: "70% 48%",
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(80.99deg, #000 0%, transparent 79.04%)",
        }}
      />
    </div>
  );
}
