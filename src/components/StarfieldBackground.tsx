import { useEffect, useRef } from 'react';

/**
 * Animated canvas starfield background used by the dark landing (/).
 * Ported from teksure-design-system/project/Landing Page v2.html.
 *
 * Renders:
 * - Deep-space vertical gradient (#0A1530 → #07101F → #030810)
 * - Soft central blue radial bloom
 * - 140 drifting/twinkling particles (18 bright glowing stars)
 * - Thin constellation lines between nearby bright blue stars
 * - Subtle mouse parallax
 *
 * Pauses on visibilitychange; respects prefers-reduced-motion (static single frame).
 */
export function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0;
    let H = 0;
    const mouse = { x: 0.5, y: 0.5 };
    let raf = 0;

    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const PARTICLE_COUNT = 140;
    const BRIGHT_COUNT = 18;

    type Particle = {
      x: number; y: number;
      vx: number; vy: number;
      r: number;
      alpha: number;
      alphaDelta: number;
      alphaMin: number; alphaMax: number;
      blue: boolean;
      depth: number;
    };
    let particles: Particle[] = [];

    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const bright = i < BRIGHT_COUNT;
        particles.push({
          x: rand(0, W),
          y: rand(0, H),
          vx: rand(-0.06, 0.06),
          vy: rand(-0.06, 0.06),
          r: bright ? rand(1.5, 3.0) : rand(0.4, 1.4),
          alpha: bright ? rand(0.55, 1.0) : rand(0.2, 0.6),
          alphaDelta: rand(0.003, 0.009) * (Math.random() > 0.5 ? 1 : -1),
          alphaMin: 0.15,
          alphaMax: 1.0,
          blue: bright ? Math.random() > 0.4 : Math.random() > 0.6,
          depth: rand(0.1, 1.0),
        });
      }
    };

    const drawBg = () => {
      const grad = ctx.createLinearGradient(0, 0, 0, H);
      grad.addColorStop(0, '#0A1530');
      grad.addColorStop(0.5, '#07101F');
      grad.addColorStop(1, '#030810');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      const cx = W * 0.5;
      const cy = H * 0.45;
      const bloom = ctx.createRadialGradient(cx, cy, 0, cx, cy, W * 0.55);
      bloom.addColorStop(0, 'rgba(29, 80, 200, 0.18)');
      bloom.addColorStop(0.5, 'rgba(13, 40, 120, 0.06)');
      bloom.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = bloom;
      ctx.fillRect(0, 0, W, H);
    };

    const drawConnections = () => {
      const bright = particles.filter((p) => p.blue && p.r > 1.5);
      const maxDist = 120;
      for (let i = 0; i < bright.length; i++) {
        for (let j = i + 1; j < bright.length; j++) {
          const a = bright[i];
          const b = bright[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.18;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(100, 160, 255, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
    };

    const drawParticles = () => {
      particles.forEach((p) => {
        const px = (mouse.x - 0.5) * -28 * (1 - p.depth);
        const py = (mouse.y - 0.5) * -20 * (1 - p.depth);
        const x = p.x + px;
        const y = p.y + py;

        p.alpha += p.alphaDelta;
        if (p.alpha >= p.alphaMax) { p.alpha = p.alphaMax; p.alphaDelta *= -1; }
        if (p.alpha <= p.alphaMin) { p.alpha = p.alphaMin; p.alphaDelta *= -1; }

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10;
        if (p.y > H + 10) p.y = -10;

        const color = p.blue
          ? `rgba(100, 168, 255, ${p.alpha})`
          : `rgba(220, 235, 255, ${p.alpha})`;

        if (p.r > 1.5) {
          const glow = ctx.createRadialGradient(x, y, 0, x, y, p.r * 4);
          const col = p.blue ? '80, 140, 255' : '200, 220, 255';
          glow.addColorStop(0, `rgba(${col}, ${p.alpha * 0.9})`);
          glow.addColorStop(0.4, `rgba(${col}, ${p.alpha * 0.3})`);
          glow.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.beginPath();
          ctx.arc(x, y, p.r * 4, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(x, y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      });
    };

    const frame = () => {
      ctx.clearRect(0, 0, W, H);
      drawBg();
      drawConnections();
      drawParticles();
      raf = requestAnimationFrame(frame);
    };

    const onResize = () => { resize(); initParticles(); };
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX / W;
      mouse.y = e.clientY / H;
    };
    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else if (!reduceMotion) raf = requestAnimationFrame(frame);
    };

    resize();
    initParticles();

    if (reduceMotion) {
      ctx.clearRect(0, 0, W, H);
      drawBg();
    } else {
      raf = requestAnimationFrame(frame);
    }

    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
