# TekSure Analytics Setup Guide

## Step 1: Create a Google Analytics 4 Property

1. Go to [analytics.google.com](https://analytics.google.com)
2. Sign in with your Google account (bailey@teksure.com)
3. Click **Admin** (gear icon, bottom left)
4. Click **Create** → **Property**
5. Name it **TekSure** and set your time zone/currency
6. Choose **Web** as platform
7. Enter **teksure.com** as the URL
8. Click **Create Stream**
9. Copy your **Measurement ID** — it looks like `G-XXXXXXXXXX`

## Step 2: Add Your Measurement ID to the Site

1. Open `src/App.tsx`
2. Find this line:
   ```
   <GoogleAnalytics measurementId="G-XXXXXXXXXX" />
   ```
3. Replace `G-XXXXXXXXXX` with your real Measurement ID
4. Save the file

That's it — analytics will start tracking automatically.

## Step 3: Set Up Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Click **Add Property** → **URL prefix** → enter `https://teksure.com`
3. Choose **HTML tag** verification method
4. Copy the verification code (just the `content="..."` part)
5. In `src/App.tsx`, update the GoogleAnalytics line:
   ```
   <GoogleAnalytics measurementId="G-XXXXXXXXXX" searchConsoleVerification="your-code-here" />
   ```
6. Deploy the site, then click **Verify** in Search Console

## Step 4: Submit Your Sitemap

1. Run the sitemap generator:
   ```bash
   cd ~/Documents/Claude/Projects/TekSure
   npx tsx scripts/generate-sitemap.ts
   ```
2. This creates `public/sitemap.xml`
3. In Google Search Console → **Sitemaps** → enter `sitemap.xml` → click **Submit**

## Step 5: Track Custom Events

The `useAnalytics()` hook is ready to use in any component:

```tsx
import { useAnalytics } from '@/components/GoogleAnalytics';

function MyComponent() {
  const { trackGuideView, trackCTAClick, trackNewsletterSignup } = useAnalytics();

  // Track when someone views a guide
  trackGuideView('how-to-fix-wifi', 'troubleshooting');
  
  // Track CTA clicks
  trackCTAClick('Get Help Now', 'homepage-hero');
  
  // Track newsletter signups
  trackNewsletterSignup('blog-sidebar');
}
```

## What Gets Tracked Automatically

- Page views (every route change)
- Session duration
- User location and device info
- Traffic sources (Google, social media, direct)

## New Files Added

| File | What It Does |
|------|-------------|
| `src/components/GoogleAnalytics.tsx` | GA4 loader + event tracking hook |
| `src/components/FAQSchema.tsx` | FAQ rich results for Google |
| `scripts/generate-sitemap.ts` | Auto-generates sitemap.xml |