"use client";

export default function RotatingBackground() {
  return (
    <figure className="absolute inset-0 z-0 overflow-hidden">
      <video
        className="hds-video-background w-full h-full object-cover"
        style={{
          transform: "scale(1.2)",
          transformOrigin: "70% 48%",
          objectPosition: "70% 48%",
        }}
        autoPlay
        loop
        muted
        playsInline
        id="html5_media_arifni6sx54"
      >
        <source
          src="https://www.nasa.gov/wp-content/uploads/2025/05/1-pia26574-perseverance-selfie-1.mp4"
          type="video/mp4"
        />
      </video>
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(80.99deg, #000 0%, transparent 79.04%)",
        }}
      />
    </figure>
  );
}
