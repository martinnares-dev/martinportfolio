import { useEffect, useRef } from "react";

const COLORS = ["#a855f7", "#8b5cf6", "#c084fc", "#7c3aed"];

function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let drops = [];
    let animationId;

    const createDrop = (randomY) => ({
      x: Math.random() * width,
      y: randomY ? Math.random() * height : -30,
      size: 12 + Math.random() * 16,
      speed: 0.5 + Math.random() * 1.5,
      opacity: 0.15 + Math.random() * 0.5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    });

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Mas konti sa mobile, mas marami sa desktop
      const count = Math.floor(width / 25);
      drops = Array.from({ length: count }, () => createDrop(true));
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (const drop of drops) {
        ctx.font = `${drop.size}px monospace`;
        ctx.fillStyle = drop.color;
        ctx.globalAlpha = drop.opacity;
        ctx.fillText("</>", drop.x, drop.y);

        drop.y += drop.speed;

        if (drop.y > height + 30) {
          Object.assign(drop, createDrop(false));
        }
      }

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <div className="bg-gradient" />
      <canvas ref={canvasRef} className="bg-canvas" />
    </>
  );
}

export default Background;