import { useEffect, useRef } from 'react';

// NetworkField — a canvas-rendered decentralized mesh that lives behind the
// homepage UI. Peer nodes float around, connect to neighbours with faint edges,
// and fire glowing data packets at each other. The mouse gently attracts
// nodes; clicking near a node makes it broadcast to its neighbours, and
// clicking empty space spawns a temporary hub that broadcasts and fades out.
//
// Ported from the "Amber Circuit" wallpaper prototype in the TekSure design
// system — colours match the existing amber homepage palette so the animation
// sits on top of the page gradient without its own background fill.

export interface NetworkTheme {
  nodeFill: string;
  nodeStroke: string;
  hubFill: string;
  edgeColor: string;   // "r,g,b"
  packetColor: string;
  packetGlow: string;
  trailColor: string;  // "r,g,b"
  bgDotColor: string;
  pulseFill: string;   // "rgba(r,g,b,"  (caller appends "<alpha>)")
}

export const AMBER_CIRCUIT: NetworkTheme = {
  nodeFill: '#E87A2B',
  nodeStroke: '#F5A623',
  hubFill: '#B35A00',
  edgeColor: '232,122,43',
  packetColor: '#FFD04A',
  packetGlow: '#E87A2B',
  trailColor: '255,190,80',
  bgDotColor: 'rgba(232,122,43,0.05)',
  pulseFill: 'rgba(245,166,35,',
};

interface NetworkFieldProps {
  theme?: NetworkTheme;
  className?: string;
}

const MAX_DIST = 160;
const MAX_PACKETS = 50;

class Node {
  x: number;
  y: number;
  isHub: boolean;
  r: number;
  vx: number;
  vy: number;
  pulseT = -99;
  broadcastT = -99;
  charge = 0;
  chargeRate: number;
  fireThreshold: number;

  constructor(x: number, y: number, isHub: boolean) {
    this.x = x;
    this.y = y;
    this.isHub = isHub;
    this.r = isHub ? 7 + Math.random() * 4 : 3 + Math.random() * 4;
    const spd = 0.15 + Math.random() * 0.25;
    const ang = Math.random() * Math.PI * 2;
    this.vx = Math.cos(ang) * spd;
    this.vy = Math.sin(ang) * spd;
    this.chargeRate = 0.004 + Math.random() * 0.003;
    this.fireThreshold = 0.6 + Math.random() * 0.35;
  }

  update(mouseX: number, mouseY: number, W: number, H: number) {
    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const d2 = dx * dx + dy * dy;
    if (d2 < 200 * 200 && d2 > 1) {
      const d = Math.sqrt(d2);
      const f = (1 - d / 200) * 0.012;
      this.vx += (dx / d) * f;
      this.vy += (dy / d) * f;
    }

    const spd = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    if (spd > 1.0) {
      this.vx /= spd;
      this.vy /= spd;
    }
    this.vx *= 0.998;
    this.vy *= 0.998;

    this.x += this.vx;
    this.y += this.vy;

    const m = 20;
    if (this.x < m) { this.x = m; this.vx = Math.abs(this.vx); }
    if (this.x > W - m) { this.x = W - m; this.vx = -Math.abs(this.vx); }
    if (this.y < m) { this.y = m; this.vy = Math.abs(this.vy); }
    if (this.y > H - m) { this.y = H - m; this.vy = -Math.abs(this.vy); }

    this.charge += this.chargeRate;
    if (this.charge > 1) this.charge = 1;
  }

  pulse(now: number) { this.pulseT = now; }
  broadcast(now: number) { this.broadcastT = now; this.charge = 0; }
}

class Packet {
  from: Node;
  to: Node;
  t = 0;
  speed: number;
  trail: Array<{ x: number; y: number }> = [];
  size: number;

  constructor(from: Node, to: Node) {
    this.from = from;
    this.to = to;
    this.speed = 0.004 + Math.random() * 0.003;
    this.size = 3 + Math.random() * 2;
  }

  update(): boolean {
    this.t += this.speed;
    if (this.t > 1) this.t = 1;
    const e = this.t < 0.5 ? 2 * this.t * this.t : 1 - Math.pow(-2 * this.t + 2, 2) / 2;
    const x = this.from.x + (this.to.x - this.from.x) * e;
    const y = this.from.y + (this.to.y - this.from.y) * e;
    this.trail.push({ x, y });
    if (this.trail.length > 22) this.trail.shift();
    return this.t < 1;
  }

  get x() { return this.trail.length ? this.trail[this.trail.length - 1].x : this.from.x; }
  get y() { return this.trail.length ? this.trail[this.trail.length - 1].y : this.from.y; }
}

function distance(a: { x: number; y: number }, b: { x: number; y: number }) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
}

export default function NetworkField({
  theme = AMBER_CIRCUIT,
  className = 'pointer-events-auto absolute inset-0 w-full h-full',
}: NetworkFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Respect the user's motion preference — users who've asked for less
    // motion get a static snapshot instead of animated packets.
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Fewer nodes on narrow viewports so mobile stays smooth.
    const isNarrow = window.innerWidth < 768;
    const NODE_COUNT = isNarrow ? 28 : 52;
    const HUB_COUNT = isNarrow ? 4 : 6;

    let W = 0;
    let H = 0;
    let dpr = 1;
    let nodes: Node[] = [];
    let packets: Packet[] = [];
    let frameN = 0;
    let mouseX = 0;
    let mouseY = 0;
    let rafId = 0;

    function resize() {
      if (!canvas || !ctx) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function initScene() {
      nodes = [];
      packets = [];
      mouseX = W / 2;
      mouseY = H / 2;
      for (let i = 0; i < NODE_COUNT; i++) {
        const isHub = i < HUB_COUNT;
        nodes.push(
          new Node(
            80 + Math.random() * Math.max(1, W - 160),
            80 + Math.random() * Math.max(1, H - 160),
            isHub,
          ),
        );
      }
    }

    function getNeighbors(node: Node): Node[] {
      const out: Node[] = [];
      for (const n of nodes) {
        if (n !== node && distance(n, node) < MAX_DIST) out.push(n);
      }
      return out;
    }

    function spawnPacket(from: Node, to: Node) {
      if (packets.length >= MAX_PACKETS) return;
      if (distance(from, to) < 10) return;
      packets.push(new Packet(from, to));
    }

    function autoEmit() {
      if (frameN % 7 !== 0) return;
      const candidates = nodes.filter((n) => n.charge >= n.fireThreshold);
      if (!candidates.length) return;
      const src = candidates[Math.floor(Math.random() * candidates.length)];
      const nbrs = getNeighbors(src);
      if (!nbrs.length) return;
      const dst = nbrs[Math.floor(Math.random() * nbrs.length)];
      spawnPacket(src, dst);
      src.broadcast(performance.now());
    }

    function broadcastNode(node: Node) {
      const nbrs = getNeighbors(node);
      nbrs.forEach((n) => spawnPacket(node, n));
      node.broadcast(performance.now());
    }

    function draw() {
      if (!ctx) return;
      const now = performance.now();
      ctx.clearRect(0, 0, W, H);

      // Subtle dot grid — gives the animation a sense of being "on" a mesh.
      ctx.fillStyle = theme.bgDotColor;
      const gs = 32;
      for (let x = gs; x < W; x += gs) {
        for (let y = gs; y < H; y += gs) {
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Edges — faint lines between nearby nodes, alpha scaled by distance.
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const d = distance(a, b);
          if (d > MAX_DIST) continue;
          const alpha = (1 - d / MAX_DIST) * 0.18;
          ctx.strokeStyle = `rgba(${theme.edgeColor},${alpha.toFixed(3)})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // Packets — comet head plus a fading trail.
      for (const p of packets) {
        if (p.trail.length < 2) continue;
        for (let i = 0; i < p.trail.length - 1; i++) {
          const t0 = p.trail[i];
          const t1 = p.trail[i + 1];
          const a = (i / p.trail.length) * 0.55;
          ctx.strokeStyle = `rgba(${theme.trailColor},${a.toFixed(3)})`;
          ctx.lineWidth = p.size * (i / p.trail.length) * 0.9;
          ctx.beginPath();
          ctx.moveTo(t0.x, t0.y);
          ctx.lineTo(t1.x, t1.y);
          ctx.stroke();
        }
        ctx.shadowColor = theme.packetGlow;
        ctx.shadowBlur = 10;
        ctx.fillStyle = theme.packetColor;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Nodes — body, stroke, pulse/broadcast rings, hub highlight.
      for (const n of nodes) {
        const pAge = (now - n.pulseT) / 1000;
        const bAge = (now - n.broadcastT) / 600;

        if (pAge < 0.8) {
          const ringA = (1 - pAge / 0.8) * 0.5;
          const ringR = n.r + pAge * 30;
          ctx.strokeStyle = `${theme.pulseFill}${ringA.toFixed(3)})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(n.x, n.y, ringR, 0, Math.PI * 2);
          ctx.stroke();
        }

        if (bAge < 1) {
          const ringA = (1 - bAge) * 0.4;
          const ringR = n.r + bAge * 45;
          ctx.strokeStyle = `${theme.pulseFill}${ringA.toFixed(3)})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(n.x, n.y, ringR, 0, Math.PI * 2);
          ctx.stroke();
        }

        ctx.shadowColor = theme.packetGlow;
        ctx.shadowBlur = n.isHub ? 20 * n.charge : 12 * n.charge;

        ctx.fillStyle = n.isHub ? theme.hubFill : theme.nodeFill;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = theme.nodeStroke;
        ctx.lineWidth = n.isHub ? 1.8 : 1.2;
        ctx.globalAlpha = 0.7;
        ctx.stroke();
        ctx.globalAlpha = 1;

        if (n.isHub) {
          ctx.fillStyle = '#fff';
          ctx.globalAlpha = 0.55;
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r * 0.35, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;
        }
        ctx.shadowBlur = 0;
      }
    }

    function loop() {
      frameN++;
      nodes.forEach((n) => n.update(mouseX, mouseY, W, H));
      autoEmit();

      const arrivedNodes: Node[] = [];
      packets = packets.filter((p) => {
        const alive = p.update();
        if (!alive) arrivedNodes.push(p.to);
        return alive;
      });
      const now = performance.now();
      arrivedNodes.forEach((n) => n.pulse(now));

      draw();
      rafId = requestAnimationFrame(loop);
    }

    function handleMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    }

    function handleClick(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;

      let best: Node | null = null;
      let bestD = Infinity;
      for (const n of nodes) {
        const d = Math.sqrt((n.x - cx) ** 2 + (n.y - cy) ** 2);
        if (d < bestD) { bestD = d; best = n; }
      }
      if (best && bestD < 60) {
        broadcastNode(best);
      } else {
        const tempNode = new Node(cx, cy, true);
        tempNode.r = 6;
        nodes.push(tempNode);
        window.setTimeout(() => {
          broadcastNode(tempNode);
          window.setTimeout(() => {
            const idx = nodes.indexOf(tempNode);
            if (idx !== -1) nodes.splice(idx, 1);
          }, 4000);
        }, 100);
      }
    }

    function handleResize() {
      resize();
      initScene();
    }

    resize();
    initScene();

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize);

    if (prefersReducedMotion) {
      // One static frame — no animation loop, no packet firing.
      draw();
    } else {
      rafId = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(rafId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}
