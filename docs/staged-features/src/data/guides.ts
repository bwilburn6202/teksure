/**
 * TekSure Guide Data — 1000+ plain-English tech guides
 *
 * Guides are split across batch files for maintainability.
 * This barrel file re-exports the combined array.
 */

// ── Types ────────────────────────────────────────────────────────────────────

export interface Step {
  number: number;
  title: string;
  content: string;
}

export interface Guide {
  id: string;
  title: string;
  description: string;
  category: "wifi" | "security" | "devices" | "software" | "email" | "backup" | "printing" | "payments";
  difficulty: "beginner" | "intermediate" | "advanced";
  timeToComplete: string;
  steps: Step[];
  tags?: string[];
  videoUrl?: string;
}

// ── Combined export ──────────────────────────────────────────────────────────

import { guidesBatch1 } from "./guides-batch-1";
import { guidesBatch2 } from "./guides-batch-2";
import { guidesBatch3 } from "./guides-batch-3";
import { guidesBatch4 } from "./guides-batch-4";

export const guides: Guide[] = [
  ...guidesBatch1,
  ...guidesBatch2,
  ...guidesBatch3,
  ...guidesBatch4,
];
