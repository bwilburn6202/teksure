import { useEffect, useRef } from 'react';

/**
 * Interactive motion mesh gradient — site-wide animated wallpaper.
 *
 * Renders a soft, large-blob mesh that drifts on its own, gravitates
 * toward the cursor, and emits a colored ripple when you click. Light
 * mode uses warm pastels (sky, coral, lavender, mint, butter, rose,
 * periwinkle) on the cream surface; dark mode uses electric blue,
 * indigo, violet, teal and magenta on navy.
 *
 * Mounted once at the root of AppShell so every route shares the same
 * wallpaper. The canvas is fixed, behind page content, and ignores
 * pointer events. Mouse + click listeners are on `window` so they fire
 * even though the canvas itself is non-interactive.
 *
 * Performance: pauses while the tab is hidden, caps DPR at 2, uses a
 * single requestAnimationFrame loop. Respects `prefers-reduced-motion`
 * by rendering one static frame and skipping the loop.
 */
export function MeshGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let dpr = 1;
    let raf = 0;
    let last = performance.now();

    const mouse = { x: 0, y: 0, active: false };
    const ripples: { x: number; y: number; t: number; max: number; hue: number }[] = [];

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDark = () => document.documentElement.classList.contains('dark');

    type Blob = {
      // base normalized position (0..1)
      bx: number;
      by: number;
      // drift orbit amplitude + frequency
      ax: number;
      ay: number;
      freqX: number;
      freqY: number;
      phase: number;
      // visual
      hue: number;
      sat: number;
      light: number;
      alpha: number;
      radius: number; // 0..1 normalized to viewport min dimension
      // smoothed live position (px)
      x: number;
      y: number;
    };

    const buildBlobs = (): Blob[] => {
      const dark = isDark();
      // Light: friendly pastel mesh on warm cream
      // Dark: electric mesh on navy (matches the screenshot vibe)
      const palette = dark
        ? [
            { hue: 220, sat: 90, light: 55, alpha: 0.42 }, // electric blue
            { hue: 250, sat: 75, light: 50, alpha: 0.36 }, // indigo
            { hue: 285, sat: 70, light: 50, alpha: 0.30 }, // violet
            { hue: 195, sat: 90, light: 55, alpha: 0.30 }, // cyan
            { hue: 320, sat: 70, light: 55, alpha: 0.26 }, // magenta
            { hue: 215, sat: 85, light: 60, alpha: 0.32 }, // sky
            { hue: 260, sat: 80, light: 60, alpha: 0.24 }, // royal purple
          ]
        : [
            { hue: 210, sat: 85, light: 70, alpha: 0.30 }, // sky blue
            { hue: 18,  sat: 90, light: 72, alpha: 0.22 }, // coral
            { hue: 270, sat: 70, light: 78, alpha: 0.24 }, // lavender
            { hue: 160, sat: 65, light: 72, alpha: 0.22 }, // mint
            { hue: 45,  sat: 95, light: 78, alpha: 0.22 }, // butter
            { hue: 340, sat: 75, light: 80, alpha: 0.20 }, // rose
            { hue: 230, sat: 75, light: 78, alpha: 0.24 }, // periwinkle
          ];

      return palette.map((p, i) => ({
        bx: 0.15 + ((i * 0.27 + 0.10) % 0.75),
        by: 0.18 + ((i * 0.41 + 0.20) % 0.65),
        ax: 0.10 + Math.random() * 0.10,
        ay: 0.10 + Math.random() * 0.10,
        freqX: 0.00018 + Math.random() * 0.00026,
        freqY: 0.00021 + Math.random() * 0.00028,
        phase: Math.random() * Math.PI * 2,
        ...p,
        radius: 0.42 + Math.random() * 0.22,
        x: 0,
        y: 0,
      }));
    };

    let blobs = buildBlobs();

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // re-seed live positions when dimensions change so the easing
      // doesn't snap from a stale pixel coord
      blobs.forEach((b) => {
        b.x = b.bx * W;
        b.y = b.by * H;
      });
    };

    const drawFrame = (now: number) => {
      const dt = Math.min(now - last, 64);
      last = now;
      const dark = isDark();

      // Base wash — matches the body fallback color so no flash on resize
      ctx.fillStyle = dark ? '#050D1F' : '#FCFBF9';
      ctx.fillRect(0, 0, W, H);

      const minDim = Math.min(W, H);

      // Additive blend in dark, normal in light — keeps cream from going chalky
      ctx.globalCompositeOperation = dark ? 'lighter' : 'source-over';

      blobs.forEach((b) => {
        const oxNorm = b.bx + Math.sin(now * b.freqX + b.phase) * b.ax;
        const oyNorm = b.by + Math.cos(now * b.freqY + b.phase * 1.3) * b.ay;
        let tx = oxNorm * W;
        let ty = oyNorm * H;

        // Mouse magnet — blobs gently lean toward the cursor
        if (mouse.active) {
          const dx = mouse.x - tx;
          const dy = mouse.y - ty;
          const dist = Math.hypot(dx, dy) || 1;
          const reach = minDim * 0.55;
          const pull = Math.max(0, 1 - dist / reach) * 0.22;
          tx += dx * pull;
          ty += dy * pull;
        }

        // Smooth easing toward target (frame-rate independent)
        const ease = 1 - Math.pow(0.001, dt / 1000);
        b.x += (tx - b.x) * ease;
        b.y += (ty - b.y) * ease;

        const r = b.radius * minDim;
        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, r);
        grad.addColorStop(0,    `hsla(${b.hue}, ${b.sat}%, ${b.light}%, ${b.alpha})`);
        grad.addColorStop(0.55, `hsla(${b.hue}, ${b.sat}%, ${b.light}%, ${b.alpha * 0.22})`);
        grad.addColorStop(1,    `hsla(${b.hue}, ${b.sat}%, ${b.light}%, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(b.x, b.y, r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Click ripples — expanding soft rings
      if (ripples.length) {
        for (let i = ripples.length - 1; i >= 0; i--) {
          const r = ripples[i];
          r.t += dt;
          const p = r.t / r.max;
          if (p >= 1) {
            ripples.splice(i, 1);
            continue;
          }
          const easedP = 1 - Math.pow(1 - p, 3); // easeOutCubic
          const radius = minDim * 0.04 + easedP * minDim * 0.55;
          const alpha = (1 - p) * (dark ? 0.5 : 0.34);

          const grad = ctx.createRadialGradient(r.x, r.y, radius * 0.55, r.x, r.y, radius);
          grad.addColorStop(0,    `hsla(${r.hue}, 90%, ${dark ? 65 : 62}%, 0)`);
          grad.addColorStop(0.85, `hsla(${r.hue}, 90%, ${dark ? 70 : 60}%, ${alpha})`);
          grad.addColorStop(1,    `hsla(${r.hue}, 90%, ${dark ? 70 : 60}%, 0)`);
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(r.x, r.y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalCompositeOperation = 'source-over';
      raf = requestAnimationFrame(drawFrame);
    };

    const onPointerMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const onPointerLeave = () => {
      mouse.active = false;
    };
    const onPointerDown = (e: PointerEvent) => {
      // Cycle ripple hues so repeated clicks feel varied
      const dark = isDark();
      const hues = dark ? [215, 250, 285, 195, 320] : [210, 18, 270, 160, 340];
      const hue = hues[ripples.length % hues.length];
      ripples.push({ x: e.clientX, y: e.clientY, t: 0, max: 1100, hue });
      if (ripples.length > 6) ripples.shift();
    };

    const onResize = () => resize();

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else if (!reduceMotion) {
        last = performance.now();
        raf = requestAnimationFrame(drawFrame);
      }
    };

    // Re-pick the palette when the user toggles dark mode
    const themeObserver = new MutationObserver(() => {
      blobs = buildBlobs();
      blobs.forEach((b) => {
        b.x = b.bx * W;
        b.y = b.by * H;
      });
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    resize();

    if (reduceMotion) {
      drawFrame(performance.now());
      cancelAnimationFrame(raf);
      window.addEventListener('resize', onResize);
      return () => {
        window.removeEventListener('resize', onResize);
        themeObserver.disconnect();
      };
    }

    raf = requestAnimationFrame(drawFrame);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerleave', onPointerLeave);
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      themeObserver.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="teksure-mesh-bg"
    />
  );
}
