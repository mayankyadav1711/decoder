import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const NeuralNexus = () => {
  const canvasRef = useRef(null);
  const [activeThought, setActiveThought] = useState(null);
  const thoughts = [
    "Creativity", "Innovation", "Discovery", "Learning", "Connection",
    "Evolution", "Harmony", "Insight", "Wonder", "Transformation"
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (x, y) => {
      return {
        x,
        y,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
        radius: Math.random() * 2 + 1,
        color: `hsl(${Math.random() * 360}, 50%, 50%)`,
      };
    };

    const drawParticle = (particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
    };

    const updateParticle = (particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        drawParticle(particle);
        updateParticle(particle);
      });

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 100})`;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const initializeParticles = () => {
      particles = Array.from({ length: 100 }, () =>
        createParticle(Math.random() * canvas.width, Math.random() * canvas.height)
      );
    };

    resizeCanvas();
    initializeParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold mb-8 text-center"
        >
          Neural Nexus
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl mb-12 text-center max-w-2xl"
        >
          Explore the interconnected realms of digital consciousness
        </motion.p>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl">
          {thoughts.map((thought, index) => (
            <motion.button
              key={thought}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 1, duration: 0.5 }}
              className={`px-6 py-3 rounded-full text-lg font-semibold transition-colors ${
                activeThought === thought
                  ? 'bg-white text-black'
                  : 'bg-transparent border border-white hover:bg-white hover:text-black'
              }`}
              onClick={() => setActiveThought(thought)}
            >
              {thought}
            </motion.button>
          ))}
        </div>
        {activeThought && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">{activeThought}</h2>
            <p className="text-xl max-w-2xl">
              {`Delve into the essence of ${activeThought.toLowerCase()} as it flows through the neural network, shaping the collective digital consciousness.`}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NeuralNexus;