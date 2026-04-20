#!/usr/bin/env node
/**
 * TekSure Brain — CLI Query Tool
 *
 * Usage:
 *   node local-brain/query.mjs "how do I connect to WiFi?"
 *   node local-brain/query.mjs  (interactive mode)
 *
 * Requires: Ollama running (ollama serve)
 * Requires: Guide index (node scripts/export-knowledge-base.mjs)
 */

import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createInterface } from 'readline';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const MODEL_NAME = 'llama3.2:1b'; // Change to 'phi3:mini' for better quality
const OLLAMA_URL = 'http://localhost:11434';

// Load the search index
function loadIndex() {
  const indexPath = join(ROOT, 'public/brain/search-index.json');
  if (!existsSync(indexPath)) {
    console.error('❌ Search index not found. Run: node scripts/export-knowledge-base.mjs');
    process.exit(1);
  }
  return JSON.parse(readFileSync(indexPath, 'utf-8'));
}

// Simple keyword scoring
const STOP_WORDS = new Set(['how', 'to', 'a', 'the', 'is', 'my', 'can', 'i', 'do', 'what', 'why', 'when', 'where', 'are', 'be', 'have', 'will', 'not', 'on', 'in', 'at', 'for', 'with', 'from', 'get', 'use', 'need', 'want', 'help', 'you', 'your', 'of', 'or', 'and', 'so']);

function findRelevantGuides(query, guides, count = 5) {
  const keywords = query.toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2 && !STOP_WORDS.has(w));

  if (keywords.length === 0) return guides.slice(0, count);

  const scored = guides.map(g => {
    let score = 0;
    const title = (g.t || '').toLowerCase();
    const excerpt = (g.e || '').toLowerCase();
    const category = (g.c || '').toLowerCase();
    for (const kw of keywords) {
      if (title.includes(kw)) score += 4;
      if (category.includes(kw)) score += 2;
      if (excerpt.includes(kw)) score += 1.5;
    }
    return { guide: g, score };
  });

  return scored
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map(({ guide }) => guide);
}

async function askOllama(question, contextGuides) {
  const context = contextGuides.map(g =>
    `GUIDE: ${g.t}\nURL: https://teksure.com/guides/${g.s}\nSUMMARY: ${g.e}`
  ).join('\n\n---\n\n');

  const res = await fetch(`${OLLAMA_URL}/api/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: MODEL_NAME,
      prompt: `You are TekSure, a friendly tech helper for everyday people and seniors. Answer the question below using ONLY the guide content provided. Keep your answer to 3-4 sentences. Always include the most relevant guide URL at the end.\n\nGuides:\n${context}\n\nQuestion: ${question}\n\nAnswer:`,
      stream: false,
    }),
  });

  if (!res.ok) throw new Error(`Ollama returned ${res.status}`);
  const data = await res.json();
  return data.response;
}

async function checkOllama() {
  try {
    const res = await fetch(`${OLLAMA_URL}/api/tags`);
    if (!res.ok) return false;
    const data = await res.json();
    const models = data.models?.map(m => m.name) || [];
    if (!models.some(m => m.includes('llama') || m.includes('phi') || m.includes('mistral'))) {
      console.log(`⚠️  No suitable models found. Run: ollama pull ${MODEL_NAME}`);
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

async function query(question) {
  const guides = loadIndex();
  const relevant = findRelevantGuides(question, guides, 5);

  console.log(`\n📚 Found ${relevant.length} relevant guides:`);
  relevant.forEach((g, i) => {
    console.log(`  ${i + 1}. ${g.t}`);
    console.log(`     https://teksure.com/guides/${g.s}`);
  });

  const ollamaAvailable = await checkOllama();
  if (ollamaAvailable) {
    console.log(`\n🦙 Generating AI answer with ${MODEL_NAME}...`);
    try {
      const answer = await askOllama(question, relevant.slice(0, 3));
      console.log(`\n💬 Answer:\n${answer}`);
    } catch (e) {
      console.log(`\n⚠️  AI answer failed: ${e.message}`);
    }
  } else {
    console.log(`\n💡 Tip: Start Ollama for AI-generated answers:`);
    console.log(`   ollama serve && ollama pull ${MODEL_NAME}`);
  }
}

// Main
const args = process.argv.slice(2);

if (args.length > 0) {
  // Single query mode
  await query(args.join(' '));
} else {
  // Interactive mode
  const ollamaAvailable = await checkOllama();
  const guides = loadIndex();
  console.log(`\n🧠 TekSure Brain — ${guides.length} guides loaded`);
  console.log(`🦙 Ollama: ${ollamaAvailable ? `✅ Connected (${MODEL_NAME})` : '❌ Not running'}`);
  console.log(`\nType a question or 'quit' to exit.\n`);

  const rl = createInterface({ input: process.stdin, output: process.stdout });
  const ask = () => {
    rl.question('You: ', async (input) => {
      if (input.toLowerCase() === 'quit' || input.toLowerCase() === 'exit') {
        console.log('Goodbye!');
        rl.close();
        return;
      }
      if (input.trim()) await query(input.trim());
      ask();
    });
  };
  ask();
}
