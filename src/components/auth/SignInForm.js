import React, { useEffect } from 'react';

function Hero() {
  useEffect(() => {
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const cols = Math.floor(canvas.width / 20) + 1;
    const yuv = [];

    for (let x = 0; x < cols; x++) {
      yuv[x] = [];
      for (let y = 0; y < canvas.height / 20 + 1; y++) {
        yuv[x][y] = { value: Math.random() };
      }
    }

    function renderMatrix() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff00';
      ctx.font = '20px monospace';

      yuv.forEach((col, i) => {
        col.forEach((pixel, j) => {
          const text = String.fromCharCode(Math.max(Math.floor(pixel.value * 128), 33));
          const x = i * 20;
          const y = j * 20;
          pixel.value += 0.03;
          ctx.fillText(text, x, y + 20);

          if (pixel.value * canvas.height > canvas.height && Math.random() > 0.98) {
            pixel.value = 0;
          }
        });
      });

      requestAnimationFrame(renderMatrix);
    }

    renderMatrix();
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 h-full w-full">
          <canvas id="matrix-canvas"></canvas>
        </div>
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-black/60"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 sm:text-6xl">
          Understand Code
        </h1>

        <div className="relative mt-8">
          <div className="absolute -top-12 -left-12 h-32 w-32 animate-spin-slow rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-12 -right-12 h-32 w-32 animate-spin-slow rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-3xl"></div>
          <p className="mx-auto mt-4 max-w-xl text-gray-300 sm:text-xl sm:leading-relaxed">
            Get a readable explanation of any code snippet from any GitHub Repository in seconds.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          
           <a className="relative block w-full rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-12 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/50 transition-colors duration-300 hover:bg-gradient-to-l hover:from-purple-500 hover:to-blue-500 sm:w-auto"
            href="#js"
          >
            View Popular Repos
            <span className="absolute top-0 left-0 h-full w-0 rounded-lg bg-white/10 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;