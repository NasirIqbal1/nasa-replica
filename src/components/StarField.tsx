import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  speed: number;
}

const StarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationFrameRef = useRef<number>(0);

  // Initialize star field
  const initStars = (width: number, height: number) => {
    const stars: Star[] = [];
    const starCount = Math.floor((width * height) / 2000); // Adjust density as needed

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.05 + 0.01,
      });
    }

    starsRef.current = stars;
  };

  // Animation loop
  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = canvas;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Update and draw stars
    starsRef.current.forEach((star) => {
      // Move star
      star.y += star.speed;

      // Reset star position if it goes off screen
      if (star.y > height) {
        star.y = 0;
        star.x = Math.random() * width;
      }

      // Draw star
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      ctx.fill();
    });

    // Continue animation loop
    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas to full window size
    const resize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initStars(canvas.width, canvas.height);
      }
    };

    // Initial setup
    resize();
    window.addEventListener("resize", resize);

    // Start animation
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default StarField;

