import React, { useRef, useEffect } from 'react';

interface Point {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
}

const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const frameIdRef = useRef<number>(0);

  const SPACING = 35;
  const RADIUS = 250;
  const MOUSE_FORCE = 0.5;
  const MAX_SPEED = 3;
  const BASE_SPEED = 0.5;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const initPoints = () => {
      const points: Point[] = [];
      const width = canvas.width;
      const height = canvas.height;
      for (let x = 0; x < width; x += SPACING) {
        for (let y = 0; y < height; y += SPACING) {
          points.push({
            x: x + (Math.random() - 0.5) * 10,
            y: y + (Math.random() - 0.5) * 10,
            originX: x,
            originY: y,
            vx: (Math.random() - 0.5) * BASE_SPEED,
            vy: (Math.random() - 0.5) * BASE_SPEED,
            size: Math.random() * 2 + 1,
            color: '#22C55E',
          });
        }
      }
      pointsRef.current = points;
    };

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
        initPoints();
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const handleTouchMove = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top };
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pointsRef.current.forEach(point => {
        const dx = mouseRef.current.x - point.x;
        const dy = mouseRef.current.y - point.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < RADIUS) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (RADIUS - distance) / RADIUS;
          point.vx -= forceDirectionX * force * MOUSE_FORCE;
          point.vy -= forceDirectionY * force * MOUSE_FORCE;
        }
        point.x += point.vx;
        point.y += point.vy;
        const currentSpeed = Math.sqrt(point.vx * point.vx + point.vy * point.vy);
        if (currentSpeed > MAX_SPEED) { point.vx *= 0.95; point.vy *= 0.95; }
        if (point.x < 0) { point.x = 0; point.vx *= -1; }
        if (point.x > canvas.width) { point.x = canvas.width; point.vx *= -1; }
        if (point.y < 0) { point.y = 0; point.vy *= -1; }
        if (point.y > canvas.height) { point.y = canvas.height; point.vy *= -1; }
        const opacity = Math.min(1, (point.size / 2.5) * 0.8);
        ctx.fillStyle = point.color;
        ctx.globalAlpha = opacity;
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1.0;
      frameIdRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('mouseleave', () => { mouseRef.current = { x: -1000, y: -1000 }; });
    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(frameIdRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full block bg-transparent" />;
};

export default InteractiveBackground;
