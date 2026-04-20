#!/bin/bash
# ─────────────────────────────────────────────────────────────────────────────
# TekSure Session 6 Installer
# Run this once to copy all updated files and push to GitHub.
# ─────────────────────────────────────────────────────────────────────────────

set -e

echo ""
echo "🔍 Finding teksure-updates folder..."

UPDATES_DIR=$(find ~ -maxdepth 6 -type d -name "teksure-updates" 2>/dev/null | head -1)

if [ -z "$UPDATES_DIR" ]; then
  echo "❌ Could not find the teksure-updates folder."
  echo "   Make sure your '2026 the Year' folder is accessible."
  exit 1
fi

echo "✅ Found: $UPDATES_DIR"
echo ""

TEKSURE="$HOME/Documents/Claude/Projects/TekSure"

if [ ! -d "$TEKSURE" ]; then
  echo "❌ Could not find ~/Documents/Claude/Projects/TekSure"
  exit 1
fi

echo "📁 Copying files to $TEKSURE ..."
rsync -a "$UPDATES_DIR/src/"      "$TEKSURE/src/"
rsync -a "$UPDATES_DIR/supabase/" "$TEKSURE/supabase/"
echo "✅ Files copied"
echo ""

echo "📦 Committing and pushing to GitHub..."
cd "$TEKSURE"
git add -A
git commit -m "feat: Community intelligence — Trending Topics, TechNews, TekBot Research Mode, Admin Trends page

- fetch-tech-trends Edge Function: Reddit + HN Algolia with 6-hour Supabase cache
- TrendingTopics + TechNews components on homepage
- TrendsInsights admin page (/admin/trends) with topic research
- TekBot Research Mode: detects community research queries and shows live results in chat
- UI declutter: new Navbar, Homepage, GuidesIndex, ToolsIndex
- Tech onboarding: send-tech-approval email, TechDashboard, JobsBoard
- Session 6 community intelligence features"

git pull --rebase origin main
git push

echo ""
echo "🎉 Done! All files copied and pushed to GitHub."
echo ""
echo "──────────────────────────────────────────────────────────"
echo "  One more step: run the SQL migration in Supabase."
echo "  (Claude is handling that in the browser for you)"
echo "──────────────────────────────────────────────────────────"
echo ""
