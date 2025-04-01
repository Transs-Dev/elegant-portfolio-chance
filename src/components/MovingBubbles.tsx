
import { useEffect, useRef } from 'react';

const MovingBubbles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to match window
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);

    // Create bubbles
    const bubbles: {
      x: number;
      y: number;
      radius: number;
      dx: number;
      dy: number;
      color: string;
    }[] = [];

    const colors = [
      'rgba(255, 107, 149, 0.1)', // warm pink
      'rgba(126, 192, 255, 0.1)', // light blue
      'rgba(255, 222, 226, 0.15)', // soft pink
      'rgba(211, 228, 253, 0.15)' // soft blue
    ];

    // Generate random bubbles
    for (let i = 0; i < 20; i++) {
      const radius = Math.random() * 80 + 20;
      const x = Math.random() * (canvas.width - radius * 2) + radius;
      const y = Math.random() * (canvas.height - radius * 2) + radius;
      const dx = (Math.random() - 0.5) * 0.5;
      const dy = (Math.random() - 0.5) * 0.5;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      bubbles.push({
        x,
        y,
        radius,
        dx,
        dy,
        color
      });
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubbles.forEach(bubble => {
        // Draw bubble
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fillStyle = bubble.color;
        ctx.fill();

        // Update position
        bubble.x += bubble.dx;
        bubble.y += bubble.dy;

        // Bounce off walls
        if (bubble.x + bubble.radius > canvas.width || bubble.x - bubble.radius < 0) {
          bubble.dx = -bubble.dx;
        }
        if (bubble.y + bubble.radius > canvas.height || bubble.y - bubble.radius < 0) {
          bubble.dy = -bubble.dy;
        }
      });
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
};

export default MovingBubbles;
