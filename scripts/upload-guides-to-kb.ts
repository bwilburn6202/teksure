#!/usr/bin/env tsx

/**
 * TekSure Knowledge Base Uploader
 * Uploads all guides from src/data/guides.ts to the Supabase knowledge_base tables.
 * 
 * Run: npx tsx scripts/upload-guides-to-kb.ts
 * 
 * Required env vars (in .env.local):
 *   VITE_SUPABASE_URL=https://vrhxitxzqtbphzsbdqih.supabase.co
 *   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
 */

import { createClient } from '@supabase/supabase-js';
import { readFile } from 'fs/promises';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load the guides file
const guidesPath = resolve(__dirname, '../src/data/guides.ts');
const guidesContent = await readFile(guidesPath, 'utf-8');

// Extract the guides array by finding the export statement and evaluating it
const exportMatch = guidesContent.match(/export\s+const\s+guides\s*=\s*(\[[\s\S]*\])\;/);
if (!exportMatch) {
  console.error('Could not find guides array in guides.ts');
  process.exit(1);
}

// Create a temporary CommonJS module to evaluate the guides array
const tempFilePath = resolve(__dirname, '../temp-guides.cjs');
const tempFileContent = `
  const guides = ${exportMatch[1]};
  module.exports = guides;
`;

await require('fs/promises').writeFile(tempFilePath, tempFileContent, 'utf-8');
// @ts-ignore: Using require for CommonJS module
const guidesModule = require(tempFilePath);
// @ts-ignore: Getting the exported value
const guides: Array<any> = guidesModule;

// Clean up temp file
await require('fs/promises').unlink(tempFilePath);

interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: string;
  tags: string[];
  readTime: string;
  difficulty?: string;
  thumbnailEmoji?: string;
  videoUrl?: string;
  publishedAt?: string;
}

console.log(`Found ${guides.length} guides to upload`);

// Create Supabase client
const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing required env vars: VITE_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY');
  console.error('Get these from your Supabase project settings.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function uploadGuides() {
  console.log('\nUploading guides to knowledge base...\n');

  let uploaded = 0;
  let errors = 0;
  let skipped = 0;

  for (const guide of guides) {
    try {
      // Skip if missing required fields
      if (!guide.slug || !guide.title) {
        console.log(`  SKIP: ${guide.title || 'Unknown'} (missing required fields)`);
        skipped++;
        continue;
      }

      // Check if guide already exists
      const { data: existing } = await supabase
        .from('knowledge_documents')
        .select('id')
        .eq('source_url', `https://teksure.com/guides/${guide.slug}`)
        .single();

      if (existing) {
        console.log(`  SKIP: ${guide.title} (already exists)`);
        skipped++;
        continue;
      }

      // Prepare tags array - combine existing tags with slug and category
      const tags = [...(guide.tags || []), guide.slug.split('-')[0], guide.category];

      // Insert the guide
      const { error } = await supabase
        .from('knowledge_documents')
        .insert({
          title: guide.title,
          source_url: `https://teksure.com/guides/${guide.slug}`,
          summary: guide.excerpt,
          markdown: guide.body || '',
          keywords: tags.slice(0, 10), // Limit to 10 keywords
          compile_status: 'ready', // Skip compilation - already well-written
          source_article_id: null,
          manual_source_id: null,
          // Add metadata
          extra: JSON.stringify({
            category: guide.category,
            difficulty: guide.difficulty,
            readTime: guide.readTime,
            thumbnailEmoji: guide.thumbnailEmoji,
            videoUrl: guide.videoUrl,
            publishedAt: guide.publishedAt,
            originalTags: guide.tags || []
          })
        });

      if (error) {
        console.error(`  ERROR: ${guide.title} - ${error.message}`);
        errors++;
      } else {
        console.log(`  OK: ${guide.title}`);
        uploaded++;
      }

      // Small delay to avoid rate limits
      await new Promise(r => setTimeout(r, 100));
    } catch (err: any) {
      console.error(`  ERROR: ${guide.title || 'Unknown'} - ${err.message}`);
      errors++;
    }
  }

  console.log(`\n✅ Done! Uploaded: ${uploaded}, Skipped: ${skipped}, Errors: ${errors}`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\nReceived SIGINT. Exiting gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\nReceived SIGTERM. Exiting gracefully...');
  process.exit(0);
});

uploadGuides().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});