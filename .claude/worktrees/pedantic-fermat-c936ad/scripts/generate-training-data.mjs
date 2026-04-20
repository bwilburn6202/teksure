#!/usr/bin/env node
/**
 * TekSure LLM Training Dataset Generator
 *
 * Converts guides + wiki pages into ChatML Q&A pairs for fine-tuning.
 * Output: scripts/training-data.jsonl (one JSON object per line)
 *
 * Usage: node scripts/generate-training-data.mjs
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// ── Helpers ──────────────────────────────────────────────────────────

const SYSTEM_PROMPT =
  'You are TekBot, a friendly tech helper for seniors and non-technical users. ' +
  'Answer using plain language. Avoid jargon — if you must use a technical term, ' +
  'explain it immediately. Keep answers concise and actionable. ' +
  'When giving steps, number them clearly. Always be patient and encouraging.';

function chatML(user, assistant) {
  return {
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      { role: 'user', content: user },
      { role: 'assistant', content: assistant },
    ],
  };
}

/** Strip markdown formatting for cleaner training text */
function stripMd(text) {
  if (!text) return '';
  return text
    .replace(/\[\[([^\]]+)\]\]/g, '$1')           // [[wikilinks]] → plain text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')       // [text](url) → text
    .replace(/\*\*([^*]+)\*\*/g, '$1')              // **bold** → bold
    .replace(/\*([^*]+)\*/g, '$1')                   // *italic* → italic
    .replace(/^#{1,6}\s+/gm, '')                     // ## headings → plain text
    .replace(/^[-*]\s+/gm, '- ')                     // normalize bullets
    .replace(/`([^`]+)`/g, '$1')                     // `code` → code
    .replace(/\n{3,}/g, '\n\n')                      // collapse blank lines
    .trim();
}

/** Parse a TS data file by extracting string content between backticks and quotes */
function extractTSData(filePath) {
  return readFileSync(resolve(ROOT, filePath), 'utf8');
}

// ── Parse guides from TS source ──────────────────────────────────────

function parseGuides() {
  // We'll use a regex-based approach to extract guide objects from the TS files.
  // This avoids needing to transpile TypeScript.
  const files = [
    'src/data/guides.ts',
    'src/data/guides-batch-1.ts',
    'src/data/guides-batch-2.ts',
    'src/data/guides-batch-3.ts',
  ];

  const guides = [];

  for (const file of files) {
    const src = extractTSData(file);

    // Match guide objects by finding slug + title + steps patterns
    const slugRe = /slug:\s*['"]([^'"]+)['"]/g;
    const titleRe = /title:\s*['"]([^'"]+)['"]/g;
    const excerptRe = /excerpt:\s*['"]([^'"]+)['"]/g;
    const categoryRe = /category:\s*['"]([^'"]+)['"]/g;
    const difficultyRe = /difficulty:\s*['"]([^'"]+)['"]/g;

    // Extract each guide block — find { slug: ... } objects
    // We identify guide boundaries by finding consecutive slug+title patterns
    const guideBlockRe = /\{\s*slug:\s*['"]([^'"]+)['"],\s*title:\s*['"](.+?)['"],\s*excerpt:\s*['"](.+?)['"]/gs;
    let match;

    while ((match = guideBlockRe.exec(src)) !== null) {
      const slug = match[1];
      const title = match[2];
      const excerpt = match[3];

      // Find the full block from this position to extract steps
      const blockStart = match.index;
      // Find the matching closing by tracking braces
      let depth = 0;
      let blockEnd = blockStart;
      for (let i = blockStart; i < src.length; i++) {
        if (src[i] === '{') depth++;
        if (src[i] === '}') {
          depth--;
          if (depth === 0) { blockEnd = i + 1; break; }
        }
      }
      const block = src.slice(blockStart, blockEnd);

      // Extract category
      const catMatch = block.match(/category:\s*['"]([^'"]+)['"]/);
      const category = catMatch ? catMatch[1] : 'unknown';

      // Extract difficulty
      const diffMatch = block.match(/difficulty:\s*['"]([^'"]+)['"]/);
      const difficulty = diffMatch ? diffMatch[1] : 'Beginner';

      // Extract tags
      const tagsMatch = block.match(/tags:\s*\[([^\]]+)\]/);
      const tags = tagsMatch
        ? tagsMatch[1].match(/['"]([^'"]+)['"]/g)?.map(t => t.replace(/['"]/g, '')) || []
        : [];

      // Extract steps
      const steps = [];
      const stepRe = /\{\s*title:\s*['"](.+?)['"],\s*content:\s*['"](.+?)['"]/gs;
      // Reset for step extraction within this block
      const stepsSection = block.match(/steps:\s*\[([\s\S]*)\]/);
      if (stepsSection) {
        let stepMatch;
        const stepsStr = stepsSection[1];
        const stepBlockRe = /title:\s*['"](.*?)['"],\s*content:\s*['"](.*?)['"]/gs;
        while ((stepMatch = stepBlockRe.exec(stepsStr)) !== null) {
          const stepTitle = stepMatch[1];
          const stepContent = stepMatch[2].replace(/\\'/g, "'").replace(/\\n/g, '\n');
          // Try to get whyItWorks
          const afterContent = stepsStr.slice(stepMatch.index + stepMatch[0].length, stepMatch.index + stepMatch[0].length + 500);
          const whyMatch = afterContent.match(/whyItWorks:\s*['"](.*?)['"]\s*[,}]/s);
          const whyItWorks = whyMatch ? whyMatch[1].replace(/\\'/g, "'").replace(/\\n/g, '\n') : null;
          // Try to get tip
          const tipMatch = afterContent.match(/tip:\s*['"](.*?)['"]\s*[,}]/s);
          const tip = tipMatch ? tipMatch[1].replace(/\\'/g, "'").replace(/\\n/g, '\n') : null;

          steps.push({ title: stepTitle, content: stepContent, whyItWorks, tip });
        }
      }

      // Extract body if present
      const bodyMatch = block.match(/body:\s*['"`]([\s\S]*?)['"`]\s*[,}]/);
      const body = bodyMatch ? bodyMatch[1] : null;

      guides.push({ slug, title, excerpt, category, difficulty, tags, steps, body });
    }
  }

  return guides;
}

// ── Parse wiki pages from TS source ──────────────────────────────────

function parseWikiPages() {
  const src = extractTSData('src/data/wiki.ts');
  const pages = [];

  // Find each wiki page object
  const pageRe = /\{\s*slug:\s*['"]([^'"]+)['"],\s*title:\s*['"](.+?)['"],\s*category:\s*['"](.+?)['"]/gs;
  let match;

  while ((match = pageRe.exec(src)) !== null) {
    const slug = match[1];
    const title = match[2];
    const category = match[3];

    // Extract content (it's in backtick template literals)
    const blockStart = match.index;
    let depth = 0;
    let blockEnd = blockStart;
    for (let i = blockStart; i < src.length; i++) {
      if (src[i] === '{') depth++;
      if (src[i] === '}') {
        depth--;
        if (depth === 0) { blockEnd = i + 1; break; }
      }
    }
    const block = src.slice(blockStart, blockEnd);

    // Extract content from backtick template literal
    const contentMatch = block.match(/content:\s*`([\s\S]*?)`/);
    const content = contentMatch ? contentMatch[1] : '';

    // Extract tags
    const tagsMatch = block.match(/tags:\s*\[([^\]]+)\]/);
    const tags = tagsMatch
      ? tagsMatch[1].match(/['"]([^'"]+)['"]/g)?.map(t => t.replace(/['"]/g, '')) || []
      : [];

    // Extract seeAlso
    const seeAlsoMatch = block.match(/seeAlso:\s*\[([^\]]+)\]/);
    const seeAlso = seeAlsoMatch
      ? seeAlsoMatch[1].match(/['"]([^'"]+)['"]/g)?.map(t => t.replace(/['"]/g, '')) || []
      : [];

    pages.push({ slug, title, category, tags, content: stripMd(content), seeAlso });
  }

  return pages;
}

// ── Q&A Generation Strategies ────────────────────────────────────────

function generateGuideQA(guides) {
  const pairs = [];

  for (const guide of guides) {
    const { title, excerpt, steps, body, category, difficulty, tags, slug } = guide;

    // Strategy 1: "How do I..." → Full step-by-step answer
    if (steps && steps.length > 0) {
      const stepsText = steps
        .map((s, i) => {
          let text = `${i + 1}. ${s.title}: ${s.content}`;
          if (s.whyItWorks) text += `\n   Why this works: ${s.whyItWorks}`;
          if (s.tip) text += `\n   Quick Tip: ${s.tip}`;
          return text;
        })
        .join('\n\n');

      // Generate a natural question from the title
      let question = title;
      if (/^How to /i.test(title)) {
        // "How to Turn Your PC On and Off" → "How do I turn my PC on and off?"
        question = title
          .replace(/^How to /i, 'How do I ')
          .replace(/\bYour\b/g, 'my')
          .replace(/\byour\b/g, 'my');
        // Lowercase the first word after "How do I " unless it's a proper noun
        question = question.replace(/^(How do I )([A-Z])/, (m, prefix, ch) => {
          const rest = question.slice(prefix.length);
          // Keep capitalized if it looks like a proper noun (followed by lowercase)
          if (/^[A-Z][a-z]/.test(rest) && !/^(Use|Set|Get|Open|Close|Turn|Take|Copy|Save|Create|Find|Check|Update|Change|Add|Connect|Download|Install|Sign|Log|Clear|Block|Enable|Disable|Manage|Reset|Delete|Send|Make|Fix|Run|Start|Stop|Learn|Read|Write|Watch|Build|Browse)/.test(rest)) {
            return prefix + ch;
          }
          return prefix + ch.toLowerCase();
        });
      }
      if (!question.endsWith('?')) question += '?';

      const answer = `${excerpt}\n\n${stepsText}\n\nSource: TekSure Guide — ${slug}`;
      pairs.push(chatML(question, answer));
    }

    // Strategy 2: Practical question from excerpt
    if (excerpt && steps && steps.length > 0) {
      const topicWord = title.replace(/^How to /i, '').replace(/on Windows|on Mac|on iPhone|on Android/gi, '').replace(/\bYour\b/g, 'my').replace(/\byour\b/g, 'my').trim();
      const question = `Can you help me ${topicWord.charAt(0).toLowerCase() + topicWord.slice(1)}?`;
      pairs.push(chatML(question, `${excerpt}\n\nSource: TekSure Guide — ${slug}`));
    }

    // Strategy 3: Individual step questions (for guides with whyItWorks)
    if (steps) {
      for (const step of steps) {
        if (step.whyItWorks) {
          const q = `Why should I ${step.title.toLowerCase().replace(/^(the |a )/i, '')}?`;
          const a = `${step.content}\n\nWhy this works: ${step.whyItWorks}`;
          pairs.push(chatML(q, a));
        }
      }
    }

    // Strategy 4: Category-based questions
    if (steps && steps.length > 0) {
      const categoryQuestions = {
        'safety-guides': `How do I stay safe when it comes to ${title.replace(/^How to /i, '').toLowerCase()}?`,
        'windows-guides': `Can you help me with ${title.replace(/^How to /i, '').toLowerCase()} on my Windows computer?`,
        'mac-guides': `Can you help me with ${title.replace(/^How to /i, '').toLowerCase()} on my Mac?`,
        'phone-guides': `How do I ${title.replace(/^How to /i, '').toLowerCase()} on my phone?`,
        'essential-skills': `I am new to computers. ${title.replace(/^How to /, 'How do I ')}`,
        'health-tech': `Can you explain ${title.replace(/^How to /i, '').toLowerCase()} for health?`,
      };
      const catQ = categoryQuestions[category];
      if (catQ) {
        const stepsText = steps.map((s, i) => `${i + 1}. ${s.title}: ${s.content}`).join('\n');
        pairs.push(chatML(catQ, `${stepsText}\n\nSource: TekSure Guide — ${slug}`));
      }
    }

    // Strategy 5: Body-based Q&A for guides with body text
    if (body) {
      pairs.push(chatML(
        `Tell me about ${title.replace(/^How to /i, '').toLowerCase()}.`,
        `${stripMd(body)}\n\nSource: TekSure Guide — ${slug}`
      ));
    }
  }

  return pairs;
}

function generateWikiQA(pages) {
  const pairs = [];

  for (const page of pages) {
    const { title, content, slug, category, tags, seeAlso } = page;

    // Strategy 1: "What is..." or "Tell me about..." → full article
    const question = category === 'entity'
      ? `What is ${title}?`
      : `Tell me about ${title.toLowerCase()}.`;
    const relatedText = seeAlso.length > 0
      ? `\n\nRelated topics: ${seeAlso.join(', ')}`
      : '';
    pairs.push(chatML(question, `${content}${relatedText}\n\nSource: TekSure Knowledge Base — ${slug}`));

    // Strategy 2: Extract sections as individual Q&A pairs
    const sections = content.split(/\n(?=## )/);
    for (const section of sections) {
      const headingMatch = section.match(/^##?\s+(.+)/);
      if (!headingMatch) continue;
      const heading = headingMatch[1].trim();
      const sectionContent = section.replace(/^##?\s+.+\n/, '').trim();
      if (sectionContent.length < 50) continue; // skip tiny sections

      // Generate a natural question from the heading
      let sectionQ;
      if (/what|how|why|when|where/i.test(heading)) {
        sectionQ = heading.endsWith('?') ? heading : heading + '?';
      } else if (/common|problems|fixes|tips/i.test(heading)) {
        sectionQ = `What are the ${heading.toLowerCase()}?`;
      } else if (/keeping|staying|protect/i.test(heading)) {
        sectionQ = `How do I go about ${heading.toLowerCase()}?`;
      } else {
        sectionQ = `Can you explain ${heading.toLowerCase()}?`;
      }

      pairs.push(chatML(sectionQ, `${sectionContent}\n\nSource: TekSure Knowledge Base — ${slug}`));
    }

    // Strategy 3: Tag-based synonym questions
    for (const tag of tags.slice(0, 3)) {
      if (tag !== slug && tag.length > 2) {
        pairs.push(chatML(
          `What should I know about ${tag.replace(/-/g, ' ')}?`,
          `Here is what we cover about ${tag.replace(/-/g, ' ')} in our ${title} article:\n\n${content.slice(0, 800)}${content.length > 800 ? '...' : ''}\n\nSource: TekSure Knowledge Base — ${slug}`
        ));
      }
    }
  }

  return pairs;
}

// ── Generate conversational / multi-turn pairs ───────────────────────

function generateConversationalPairs(guides) {
  const pairs = [];
  const greetings = [
    'Hi, I need help with my computer.',
    'Hello! Can you help me?',
    'I am having trouble with technology.',
    'I do not know how to use my computer very well.',
  ];

  // A few conversational openers
  for (const greeting of greetings) {
    pairs.push(chatML(greeting,
      'Of course! I am here to help. What would you like to learn about? ' +
      'I can help with things like connecting to Wi-Fi, staying safe online, ' +
      'using your phone, setting up email, and much more. Just ask!'));
  }

  // "I do not understand" follow-ups
  pairs.push(chatML(
    'What is a browser?',
    'A browser is the app you use to visit websites and look things up on the internet. ' +
    'Common browsers include Google Chrome (the colorful circle icon), Microsoft Edge (the blue wave icon), ' +
    'Safari (the compass icon on Apple devices), and Firefox (the fox wrapped around a globe). ' +
    'If you are reading this on a computer or phone, you are probably using a browser right now!\n\n' +
    'Source: TekSure Knowledge Base'));

  pairs.push(chatML(
    'What is the cloud?',
    'The cloud is just a way of saying "someone else\'s computer stores your stuff." ' +
    'When you save photos to iCloud, Google Photos, or OneDrive, those photos are copied to ' +
    'a secure computer (called a server) run by Apple, Google, or Microsoft. This means you can ' +
    'see your photos from any device, and they are safe even if your phone breaks.\n\n' +
    'Source: TekSure Knowledge Base'));

  pairs.push(chatML(
    'What is Wi-Fi?',
    'Wi-Fi is a wireless technology that lets your devices connect to the internet without ' +
    'plugging in a cable. It uses radio signals sent by a device called a router in your home. ' +
    'Your router is usually a small box from your internet provider. The Wi-Fi name and password ' +
    'are typically on a sticker on the router itself.\n\n' +
    'Source: TekSure Knowledge Base — wifi-networking'));

  pairs.push(chatML(
    'Am I going to break my computer if I press the wrong button?',
    'No! It is very hard to break a computer by pressing the wrong button. Almost everything ' +
    'can be undone with Ctrl+Z (undo). If something looks wrong, do not panic — just close the ' +
    'window by clicking the X in the top-right corner. Your computer is much more resilient than ' +
    'you might think. The best way to learn is to explore and try things!\n\n' +
    'Source: TekSure'));

  return pairs;
}

// ── Main ─────────────────────────────────────────────────────────────

function main() {
  console.log('Parsing guides...');
  const guides = parseGuides();
  console.log(`  Found ${guides.length} guides`);

  console.log('Parsing wiki pages...');
  const wikiPages = parseWikiPages();
  console.log(`  Found ${wikiPages.length} wiki pages`);

  console.log('Generating Q&A pairs...');
  const guidePairs = generateGuideQA(guides);
  console.log(`  Guide Q&A: ${guidePairs.length} pairs`);

  const wikiPairs = generateWikiQA(wikiPages);
  console.log(`  Wiki Q&A: ${wikiPairs.length} pairs`);

  const convPairs = generateConversationalPairs(guides);
  console.log(`  Conversational: ${convPairs.length} pairs`);

  const allPairs = [...guidePairs, ...wikiPairs, ...convPairs];

  // Deduplicate by user message
  const seen = new Set();
  const unique = allPairs.filter(pair => {
    const key = pair.messages[1].content.toLowerCase().trim();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  console.log(`\nTotal: ${unique.length} unique Q&A pairs (${allPairs.length - unique.length} duplicates removed)`);

  // Write JSONL
  const outPath = resolve(__dirname, 'training-data.jsonl');
  const jsonl = unique.map(p => JSON.stringify(p)).join('\n') + '\n';
  writeFileSync(outPath, jsonl, 'utf8');
  console.log(`Written to: ${outPath}`);

  // Write stats
  const stats = {
    generated: new Date().toISOString(),
    totalPairs: unique.length,
    guidePairs: guidePairs.length,
    wikiPairs: wikiPairs.length,
    conversationalPairs: convPairs.length,
    duplicatesRemoved: allPairs.length - unique.length,
    guidesProcessed: guides.length,
    wikiPagesProcessed: wikiPages.length,
  };
  writeFileSync(resolve(__dirname, 'training-data-stats.json'), JSON.stringify(stats, null, 2) + '\n', 'utf8');
  console.log(`Stats written to: scripts/training-data-stats.json`);
}

main();
