/**
 * Minimal, self-contained QR Code generator (byte mode, auto version).
 *
 * Adapted from Project Nayuki's public-domain reference implementation:
 *   https://www.nayuki.io/page/qr-code-generator-library
 *
 * This file is dependency-free and runs entirely in the browser — no
 * network calls are made. Used by the WiFi QR generator so that
 * passwords never leave the user's device.
 *
 * Supports: Byte mode (UTF-8) + ECC levels L / M / Q / H, versions 1–40.
 */

export type Ecc = 'LOW' | 'MEDIUM' | 'QUARTILE' | 'HIGH';

const ECC_ORD: Record<Ecc, number> = { LOW: 0, MEDIUM: 1, QUARTILE: 2, HIGH: 3 };
const ECC_FORMAT_BITS: Record<Ecc, number> = { LOW: 1, MEDIUM: 0, QUARTILE: 3, HIGH: 2 };

// ── Tables, indexed by [version-1][ecl.ord] ──────────────────────────

const ECC_CODEWORDS_PER_BLOCK: readonly number[][] = [
  //  L   M   Q   H
  [ 7, 10, 13, 17],
  [10, 16, 22, 28],
  [15, 26, 18, 22],
  [20, 18, 26, 16],
  [26, 24, 18, 22],
  [18, 16, 24, 28],
  [20, 18, 18, 26],
  [24, 22, 22, 26],
  [30, 22, 20, 24],
  [18, 26, 24, 28],
  [20, 30, 28, 24],
  [24, 22, 26, 28],
  [26, 22, 24, 22],
  [30, 24, 20, 24],
  [22, 24, 30, 24],
  [24, 28, 24, 30],
  [28, 28, 28, 28],
  [30, 26, 28, 28],
  [28, 26, 26, 26],
  [28, 26, 30, 28],
  [28, 26, 28, 30],
  [28, 28, 30, 24],
  [30, 28, 30, 30],
  [30, 28, 30, 30],
  [26, 28, 30, 30],
  [28, 28, 28, 30],
  [30, 28, 30, 30],
  [30, 28, 30, 30],
  [30, 28, 30, 30],
  [30, 28, 30, 30],
  [30, 28, 30, 30],
  [30, 28, 30, 30],
  [30, 28, 30, 30],
  [30, 28, 30, 30],
  [30, 28, 30, 30],
  [30, 28, 30, 30],
  [30, 28, 30, 30],
  [30, 28, 30, 30],
  [30, 28, 30, 30],
  [30, 28, 30, 30],
];

const NUM_ECC_BLOCKS: readonly number[][] = [
  //  L   M   Q   H
  [ 1,  1,  1,  1],
  [ 1,  1,  1,  1],
  [ 1,  1,  2,  2],
  [ 1,  2,  2,  4],
  [ 1,  2,  4,  4],
  [ 2,  4,  4,  4],
  [ 2,  4,  6,  5],
  [ 2,  4,  6,  6],
  [ 2,  5,  8,  8],
  [ 4,  5,  8,  8],
  [ 4,  5,  8, 11],
  [ 4,  8, 10, 11],
  [ 4,  9, 12, 16],
  [ 4,  9, 16, 16],
  [ 6, 10, 12, 18],
  [ 6, 10, 17, 16],
  [ 6, 11, 16, 19],
  [ 6, 13, 18, 21],
  [ 7, 14, 21, 25],
  [ 8, 16, 20, 25],
  [ 8, 17, 23, 25],
  [ 9, 17, 23, 34],
  [ 9, 18, 25, 30],
  [10, 20, 27, 32],
  [12, 21, 29, 35],
  [12, 23, 34, 37],
  [12, 25, 34, 40],
  [13, 26, 35, 42],
  [14, 28, 38, 45],
  [15, 29, 40, 48],
  [16, 31, 43, 51],
  [17, 33, 45, 54],
  [18, 35, 48, 57],
  [19, 37, 51, 60],
  [19, 38, 53, 63],
  [20, 40, 56, 66],
  [21, 43, 59, 70],
  [22, 45, 62, 74],
  [24, 47, 65, 77],
  [25, 49, 68, 81],
];

const MIN_VERSION = 1;
const MAX_VERSION = 40;

// ──────────────────────────────────────────────────────────────────────
// Utility helpers
// ──────────────────────────────────────────────────────────────────────

function getNumRawDataModules(ver: number): number {
  let result = (16 * ver + 128) * ver + 64;
  if (ver >= 2) {
    const numAlign = Math.floor(ver / 7) + 2;
    result -= (25 * numAlign - 10) * numAlign - 55;
    if (ver >= 7) result -= 36;
  }
  return result;
}

function getNumDataCodewords(ver: number, ecl: Ecc): number {
  return (
    Math.floor(getNumRawDataModules(ver) / 8) -
    ECC_CODEWORDS_PER_BLOCK[ver - 1][ECC_ORD[ecl]] *
      NUM_ECC_BLOCKS[ver - 1][ECC_ORD[ecl]]
  );
}

// Reed-Solomon over GF(256), primitive polynomial 0x11D
function rsMultiply(x: number, y: number): number {
  let z = 0;
  for (let i = 7; i >= 0; i--) {
    z = ((z << 1) ^ ((z >>> 7) * 0x11D)) & 0xFF;
    z ^= ((y >>> i) & 1) * x;
    z &= 0xFF;
  }
  return z;
}

function rsComputeDivisor(degree: number): number[] {
  const result = new Array<number>(degree).fill(0);
  result[result.length - 1] = 1;
  let root = 1;
  for (let i = 0; i < degree; i++) {
    for (let j = 0; j < result.length; j++) {
      result[j] = rsMultiply(result[j], root);
      if (j + 1 < result.length) result[j] ^= result[j + 1];
    }
    root = rsMultiply(root, 0x02);
  }
  return result;
}

function rsComputeRemainder(data: number[], divisor: number[]): number[] {
  const result = new Array<number>(divisor.length).fill(0);
  for (const b of data) {
    const factor = b ^ (result.shift() as number);
    result.push(0);
    for (let i = 0; i < divisor.length; i++) {
      result[i] ^= rsMultiply(divisor[i], factor);
    }
  }
  return result;
}

// Alignment pattern positions for version v (empty for v=1)
function getAlignmentPatternPositions(ver: number): number[] {
  if (ver === 1) return [];
  const numAlign = Math.floor(ver / 7) + 2;
  const step = ver === 32 ? 26 : Math.ceil((ver * 4 + 4) / (numAlign * 2 - 2)) * 2;
  const result: number[] = [6];
  for (let pos = ver * 4 + 10; result.length < numAlign; pos -= step) {
    result.splice(1, 0, pos);
  }
  return result;
}

// ──────────────────────────────────────────────────────────────────────
// BitBuffer — growable bit-level queue
// ──────────────────────────────────────────────────────────────────────
class BitBuffer {
  readonly bits: number[] = [];

  appendBits(val: number, len: number): void {
    for (let i = len - 1; i >= 0; i--) {
      this.bits.push((val >>> i) & 1);
    }
  }
}

// UTF-8 encode a string into a byte array
function toUtf8Bytes(text: string): number[] {
  const out: number[] = [];
  for (let i = 0; i < text.length; i++) {
    let c = text.charCodeAt(i);
    // Handle surrogate pairs
    if (c >= 0xD800 && c <= 0xDBFF && i + 1 < text.length) {
      const c2 = text.charCodeAt(i + 1);
      if (c2 >= 0xDC00 && c2 <= 0xDFFF) {
        c = 0x10000 + ((c - 0xD800) << 10) + (c2 - 0xDC00);
        i++;
      }
    }
    if (c < 0x80) {
      out.push(c);
    } else if (c < 0x800) {
      out.push(0xC0 | (c >> 6), 0x80 | (c & 0x3F));
    } else if (c < 0x10000) {
      out.push(0xE0 | (c >> 12), 0x80 | ((c >> 6) & 0x3F), 0x80 | (c & 0x3F));
    } else {
      out.push(
        0xF0 | (c >> 18),
        0x80 | ((c >> 12) & 0x3F),
        0x80 | ((c >> 6) & 0x3F),
        0x80 | (c & 0x3F),
      );
    }
  }
  return out;
}

// ──────────────────────────────────────────────────────────────────────
// Core encoder
// ──────────────────────────────────────────────────────────────────────

interface QrMatrix {
  size: number;
  /** 2D array of booleans — true = dark module, false = light. */
  modules: boolean[][];
  version: number;
}

export function encodeText(text: string, ecl: Ecc = 'MEDIUM'): QrMatrix {
  const dataBytes = toUtf8Bytes(text);

  // Pick smallest version that fits in byte mode at the given ECC level
  let version = -1;
  let dataCapacityBits = 0;
  for (let v = MIN_VERSION; v <= MAX_VERSION; v++) {
    dataCapacityBits = getNumDataCodewords(v, ecl) * 8;
    const byteCountBits = v < 10 ? 8 : 16;
    // 4 bits for mode indicator + char-count bits + 8 bits per data byte
    const neededBits = 4 + byteCountBits + dataBytes.length * 8;
    if (neededBits <= dataCapacityBits) {
      version = v;
      break;
    }
  }
  if (version === -1) {
    throw new Error('Data too long for any QR version');
  }

  // Build the bit stream
  const bb = new BitBuffer();
  bb.appendBits(0x4, 4); // byte mode indicator
  bb.appendBits(dataBytes.length, version < 10 ? 8 : 16);
  for (const b of dataBytes) bb.appendBits(b, 8);

  // Terminator + padding to a byte boundary
  const term = Math.min(4, dataCapacityBits - bb.bits.length);
  bb.appendBits(0, term);
  bb.appendBits(0, (8 - (bb.bits.length % 8)) % 8);

  // Pad bytes alternating 0xEC / 0x11
  for (let pad = 0xEC; bb.bits.length < dataCapacityBits; pad ^= 0xEC ^ 0x11) {
    bb.appendBits(pad, 8);
  }

  // Pack bits into bytes
  const dataCodewords: number[] = [];
  for (let i = 0; i < bb.bits.length; i += 8) {
    let b = 0;
    for (let j = 0; j < 8; j++) b = (b << 1) | bb.bits[i + j];
    dataCodewords.push(b);
  }

  // Split into blocks and add error correction, then interleave
  const numBlocks = NUM_ECC_BLOCKS[version - 1][ECC_ORD[ecl]];
  const blockEccLen = ECC_CODEWORDS_PER_BLOCK[version - 1][ECC_ORD[ecl]];
  const rawCodewords = Math.floor(getNumRawDataModules(version) / 8);
  const numShortBlocks = numBlocks - (rawCodewords % numBlocks);
  const shortBlockLen = Math.floor(rawCodewords / numBlocks);

  const blocks: number[][] = [];
  const rsDivisor = rsComputeDivisor(blockEccLen);
  let k = 0;
  for (let i = 0; i < numBlocks; i++) {
    const dataLen = shortBlockLen - blockEccLen + (i < numShortBlocks ? 0 : 1);
    const dat = dataCodewords.slice(k, k + dataLen);
    k += dataLen;
    const ecc = rsComputeRemainder(dat, rsDivisor);
    if (i < numShortBlocks) dat.push(0); // placeholder to keep lengths aligned
    blocks.push(dat.concat(ecc));
  }

  // Interleave the codewords across all blocks
  const interleaved: number[] = [];
  for (let i = 0; i < blocks[0].length; i++) {
    for (let j = 0; j < blocks.length; j++) {
      // Skip the placeholder byte in short blocks for the data portion
      if (i !== shortBlockLen - blockEccLen || j >= numShortBlocks) {
        interleaved.push(blocks[j][i]);
      }
    }
  }

  // ────────────────────────────────────────────
  // Draw the matrix
  // ────────────────────────────────────────────
  const size = version * 4 + 17;
  const modules: boolean[][] = Array.from({ length: size }, () =>
    new Array<boolean>(size).fill(false),
  );
  const isFunction: boolean[][] = Array.from({ length: size }, () =>
    new Array<boolean>(size).fill(false),
  );

  function setFn(x: number, y: number, dark: boolean) {
    modules[y][x] = dark;
    isFunction[y][x] = true;
  }

  // Finder + separator patterns at three corners
  function drawFinder(cx: number, cy: number) {
    for (let dy = -4; dy <= 4; dy++) {
      for (let dx = -4; dx <= 4; dx++) {
        const x = cx + dx;
        const y = cy + dy;
        if (x < 0 || x >= size || y < 0 || y >= size) continue;
        const d = Math.max(Math.abs(dx), Math.abs(dy));
        setFn(x, y, d !== 2 && d !== 4);
      }
    }
  }
  drawFinder(3, 3);
  drawFinder(size - 4, 3);
  drawFinder(3, size - 4);

  // Timing patterns
  for (let i = 0; i < size; i++) {
    setFn(6, i, i % 2 === 0);
    setFn(i, 6, i % 2 === 0);
  }

  // Alignment patterns
  const alignPos = getAlignmentPatternPositions(version);
  for (let i = 0; i < alignPos.length; i++) {
    for (let j = 0; j < alignPos.length; j++) {
      // Skip positions that overlap finder patterns
      if (
        (i === 0 && j === 0) ||
        (i === 0 && j === alignPos.length - 1) ||
        (i === alignPos.length - 1 && j === 0)
      ) {
        continue;
      }
      const cx = alignPos[j];
      const cy = alignPos[i];
      for (let dy = -2; dy <= 2; dy++) {
        for (let dx = -2; dx <= 2; dx++) {
          const d = Math.max(Math.abs(dx), Math.abs(dy));
          setFn(cx + dx, cy + dy, d !== 1);
        }
      }
    }
  }

  // Reserve format-info area (actual bits filled in later)
  for (let i = 0; i < 9; i++) setFn(8, i, false);
  for (let i = 0; i < 8; i++) setFn(i, 8, false);
  for (let i = 0; i < 8; i++) setFn(size - 1 - i, 8, false);
  for (let i = 0; i < 7; i++) setFn(8, size - 1 - i, false);
  setFn(8, size - 8, true); // dark module

  // Version info (v7+)
  if (version >= 7) {
    let rem = version;
    for (let i = 0; i < 12; i++) rem = (rem << 1) ^ ((rem >>> 11) * 0x1F25);
    const bits = ((version << 12) | rem) >>> 0;
    for (let i = 0; i < 18; i++) {
      const bit = ((bits >>> i) & 1) !== 0;
      const a = size - 11 + (i % 3);
      const b = Math.floor(i / 3);
      setFn(a, b, bit);
      setFn(b, a, bit);
    }
  }

  // Place data codewords in a zig-zag pattern
  let i = 0; // bit index into interleaved
  const totalBits = interleaved.length * 8;
  for (let right = size - 1; right >= 1; right -= 2) {
    if (right === 6) right = 5; // skip the vertical timing column
    for (let vert = 0; vert < size; vert++) {
      for (let j = 0; j < 2; j++) {
        const x = right - j;
        const upward = ((right + 1) & 2) === 0;
        const y = upward ? size - 1 - vert : vert;
        if (!isFunction[y][x] && i < totalBits) {
          const byte = interleaved[i >>> 3];
          const bit = ((byte >>> (7 - (i & 7))) & 1) !== 0;
          modules[y][x] = bit;
          i++;
        }
      }
    }
  }

  // ────────────────────────────────────────────
  // Masking: try all 8 patterns, keep the lowest-penalty one
  // ────────────────────────────────────────────
  const maskFns: ((x: number, y: number) => boolean)[] = [
    (x, y) => (x + y) % 2 === 0,
    (_x, y) => y % 2 === 0,
    (x, _y) => x % 3 === 0,
    (x, y) => (x + y) % 3 === 0,
    (x, y) => (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0,
    (x, y) => ((x * y) % 2) + ((x * y) % 3) === 0,
    (x, y) => (((x * y) % 2) + ((x * y) % 3)) % 2 === 0,
    (x, y) => (((x + y) % 2) + ((x * y) % 3)) % 2 === 0,
  ];

  function applyMask(idx: number) {
    const fn = maskFns[idx];
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if (!isFunction[y][x] && fn(x, y)) modules[y][x] = !modules[y][x];
      }
    }
  }

  function drawFormatBits(maskIdx: number) {
    const data = (ECC_FORMAT_BITS[ecl] << 3) | maskIdx;
    let rem = data;
    for (let j = 0; j < 10; j++) rem = (rem << 1) ^ ((rem >>> 9) * 0x537);
    const bits = ((data << 10) | rem) ^ 0x5412;
    // Helper: bit j of `bits` (0 = LSB)
    const b = (j: number) => ((bits >>> j) & 1) !== 0;

    // First copy — around the top-left finder pattern.
    // Bits 0..5 run down column 8, rows 0..5 (above the dark timing row).
    for (let j = 0; j <= 5; j++) modules[j][8] = b(j);
    modules[7][8] = b(6);
    modules[8][8] = b(7);
    modules[8][7] = b(8);
    // Bits 9..14 run right-to-left along row 8, columns 5..0.
    for (let j = 9; j < 15; j++) modules[8][14 - j] = b(j);

    // Second copy — split between the top-right and bottom-left.
    for (let j = 0; j < 8; j++) modules[8][size - 1 - j] = b(j);
    for (let j = 8; j < 15; j++) modules[size - 15 + j][8] = b(j);
    modules[size - 8][8] = true; // always-dark module
  }

  function penalty(): number {
    let p = 0;
    // Rule 1: runs of five or more same-color modules in a row/col
    for (let y = 0; y < size; y++) {
      let runColor = false;
      let runLen = 0;
      for (let x = 0; x < size; x++) {
        if (modules[y][x] === runColor) {
          runLen++;
          if (runLen === 5) p += 3;
          else if (runLen > 5) p += 1;
        } else {
          runColor = modules[y][x];
          runLen = 1;
        }
      }
    }
    for (let x = 0; x < size; x++) {
      let runColor = false;
      let runLen = 0;
      for (let y = 0; y < size; y++) {
        if (modules[y][x] === runColor) {
          runLen++;
          if (runLen === 5) p += 3;
          else if (runLen > 5) p += 1;
        } else {
          runColor = modules[y][x];
          runLen = 1;
        }
      }
    }
    // Rule 2: 2x2 blocks of same color
    for (let y = 0; y < size - 1; y++) {
      for (let x = 0; x < size - 1; x++) {
        const c = modules[y][x];
        if (c === modules[y][x + 1] && c === modules[y + 1][x] && c === modules[y + 1][x + 1]) {
          p += 3;
        }
      }
    }
    // Rule 3: finder-like patterns 1:1:3:1:1 in rows/cols
    const pat1 = [true, false, true, true, true, false, true, false, false, false, false];
    const pat2 = [false, false, false, false, true, false, true, true, true, false, true];
    for (let y = 0; y < size; y++) {
      for (let x = 0; x <= size - 11; x++) {
        let ok1 = true;
        let ok2 = true;
        for (let j = 0; j < 11; j++) {
          if (modules[y][x + j] !== pat1[j]) ok1 = false;
          if (modules[y][x + j] !== pat2[j]) ok2 = false;
        }
        if (ok1 || ok2) p += 40;
      }
    }
    for (let x = 0; x < size; x++) {
      for (let y = 0; y <= size - 11; y++) {
        let ok1 = true;
        let ok2 = true;
        for (let j = 0; j < 11; j++) {
          if (modules[y + j][x] !== pat1[j]) ok1 = false;
          if (modules[y + j][x] !== pat2[j]) ok2 = false;
        }
        if (ok1 || ok2) p += 40;
      }
    }
    // Rule 4: dark/light balance
    let dark = 0;
    for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) if (modules[y][x]) dark++;
    const total = size * size;
    const ratio = dark / total;
    const dev = Math.floor(Math.abs(ratio * 100 - 50) / 5);
    p += dev * 10;
    return p;
  }

  let bestMask = 0;
  let bestPenalty = Infinity;
  for (let m = 0; m < 8; m++) {
    applyMask(m);
    drawFormatBits(m);
    const pen = penalty();
    if (pen < bestPenalty) {
      bestPenalty = pen;
      bestMask = m;
    }
    applyMask(m); // revert
  }
  applyMask(bestMask);
  drawFormatBits(bestMask);

  return { size, modules, version };
}

// ──────────────────────────────────────────────────────────────────────
// Renderers
// ──────────────────────────────────────────────────────────────────────

/**
 * Render to SVG path data (single `<path d="…">` value).
 * Callers wrap in an `<svg>` with appropriate viewBox.
 */
export function toSvgPath(qr: QrMatrix, border = 4): { path: string; size: number } {
  const total = qr.size + border * 2;
  const parts: string[] = [];
  for (let y = 0; y < qr.size; y++) {
    for (let x = 0; x < qr.size; x++) {
      if (qr.modules[y][x]) {
        parts.push(`M${x + border},${y + border}h1v1h-1z`);
      }
    }
  }
  return { path: parts.join(''), size: total };
}

/**
 * Draw into a <canvas>. scale = pixels per module.
 * Returns the canvas element for convenience.
 */
export function drawToCanvas(
  qr: QrMatrix,
  canvas: HTMLCanvasElement,
  scale = 10,
  border = 4,
  dark = '#000000',
  light = '#FFFFFF',
): HTMLCanvasElement {
  const total = (qr.size + border * 2) * scale;
  canvas.width = total;
  canvas.height = total;
  const ctx = canvas.getContext('2d');
  if (!ctx) return canvas;
  ctx.fillStyle = light;
  ctx.fillRect(0, 0, total, total);
  ctx.fillStyle = dark;
  for (let y = 0; y < qr.size; y++) {
    for (let x = 0; x < qr.size; x++) {
      if (qr.modules[y][x]) {
        ctx.fillRect((x + border) * scale, (y + border) * scale, scale, scale);
      }
    }
  }
  return canvas;
}
