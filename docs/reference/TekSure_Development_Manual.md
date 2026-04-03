# TekSure Development Instruction Manual

**Version:** 1.0
**Last Updated:** March 23, 2026
**Project:** TekSure.com — Tech Support & Digital Literacy Platform
**Repository:** https://github.com/bwilburn6202/teksure

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Directory Structure](#directory-structure)
3. [Development Environment Setup](#development-environment-setup)
4. [Standard Development Workflow](#standard-development-workflow)
5. [Tech Stack & Conventions](#tech-stack--conventions)
6. [Feature Development Patterns](#feature-development-patterns)
7. [Supabase Configuration](#supabase-configuration)
8. [Git Workflow & Deployment](#git-workflow--deployment)
9. [Roadmap & Sprint Planning](#roadmap--sprint-planning)
10. [Quick Reference Checklist](#quick-reference-checklist)

---

## Project Overview

### What is TekSure?

TekSure is a web platform designed to help everyday users (especially seniors and non-technical individuals) understand and manage their technology. The platform provides:

- **Educational Guides & Tutorials** — Step-by-step instructions for common tech tasks
- **Interactive Tools** — App Recommender, Warranty Checker, Backup Wizard, Troubleshooter
- **Community Forum** — Peer-to-peer support and discussion
- **Technician Booking System** — Schedule appointments for professional tech support
- **Admin Dashboard** — Manage guides, users, bookings, and analytics
- **TekBot AI Assistant** — Context-aware chatbot for quick answers
- **User Authentication & Profiles** — Personalized experience with Supabase Auth

### Current Status

- **Live Features:** ~46
- **Phase:** Revenue Foundation (Stripe Payments setup underway)
- **Target Audience:** Non-technical users, seniors, digital learners
- **Key Platforms:** Web (primary), responsive mobile-first design

### Core Principles

- **Plain Language** — No jargon; explain like you're talking to a friend
- **Accessible** — High contrast, large text, clear navigation
- **Mobile-First** — Many users access on phones
- **Reliable** — Guides must be accurate and regularly updated
- **Inclusive** — Support various reading levels and accessibility needs

---

## Directory Structure

```
teksure/
├── src/
│   ├── pages/                    # All page components (routing)
│   │   ├── Index.tsx             # Homepage
│   │   ├── guides/
│   │   │   ├── GuidesIndex.tsx   # Guides listing
│   │   │   └── GuideDetail.tsx   # Individual guide view
│   │   ├── tools/
│   │   │   ├── ToolsIndex.tsx    # Tools hub
│   │   │   ├── AppRecommender.tsx
│   │   │   ├── WarrantyChecker.tsx
│   │   │   ├── BackupWizard.tsx
│   │   │   └── Troubleshooter.tsx
│   │   ├── forum/
│   │   │   ├── ForumIndex.tsx
│   │   │   ├── ForumThread.tsx
│   │   │   └── NewThread.tsx
│   │   ├── book/
│   │   │   ├── BookIndex.tsx
│   │   │   └── BookingConfirmation.tsx
│   │   ├── admin/
│   │   │   ├── AdminDashboard.tsx
│   │   │   ├── ManageGuides.tsx
│   │   │   └── ManageBookings.tsx
│   │   ├── auth/
│   │   │   ├── Login.tsx
│   │   │   ├── Signup.tsx
│   │   │   └── Profile.tsx
│   │   └── [other pages]
│   ├── components/               # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   ├── GuideCard.tsx
│   │   ├── [other components]
│   ├── data/
│   │   ├── guides.ts             # All guide data (schema + content)
│   │   └── [other data files]
│   ├── integrations/
│   │   └── supabase/
│   │       ├── client.ts         # Supabase client initialization
│   │       └── [hooks/utilities]
│   ├── App.tsx                   # Main app router
│   ├── main.tsx                  # App entry point
│   └── index.css                 # Global styles
├── supabase/
│   ├── migrations/               # SQL migrations (versioned)
│   │   └── YYYYMMDDHHMMSS_*.sql
│   └── functions/                # Edge Functions
│       ├── send-help-confirmation/
│       └── send-booking-confirmation/
├── public/                       # Static assets
│   ├── images/
│   ├── icons/
│   └── [other assets]
├── package.json                  # Dependencies & scripts
├── tsconfig.json                 # TypeScript config
├── tailwind.config.js            # Tailwind CSS config
├── vite.config.ts                # Vite build config
└── README.md                     # Project readme
```

---

## Development Environment Setup

### Prerequisites

- **Node.js** v18+ (check with `node --version`)
- **npm** or **yarn** for package management
- **Git** for version control
- **Supabase CLI** (optional, for local database work)
- Code editor (VS Code recommended)

### First-Time Setup

```bash
# Clone the repository
git clone https://github.com/bwilburn6202/teksure.git
cd teksure

# Install dependencies
npm install

# Create environment variables file
# Copy .env.example to .env.local and fill in:
# - VITE_SUPABASE_URL
# - VITE_SUPABASE_ANON_KEY
# - (other keys as needed)

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173` (or the port shown in your terminal).

### Environment Variables

Create a `.env.local` file in the project root with:

```env
VITE_SUPABASE_URL=https://zrgtoefkqafndhxhbuag.supabase.co
VITE_SUPABASE_ANON_KEY=[your-anon-key-here]
# Additional keys as needed for integrations
```

**Note:** Never commit `.env.local` — it contains secrets.

### Common Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Check code quality |
| `git log --oneline` | View recent commits |
| `git status` | Check what's changed |

---

## Standard Development Workflow

### Phase 1: Orient & Plan

**Before starting any work:**

1. **Check the roadmap**
   ```bash
   cat ~/Documents/Claude/Projects/TekSure-roadmap-strategy.md
   ```
   - Identify the highest-priority unbuilt feature
   - Understand the recommended implementation approach
   - Note any dependencies on other features

2. **Review the codebase**
   - Open `src/App.tsx` to see existing routes
   - Scan `src/components/` for related components to reuse
   - Check `src/data/guides.ts` for the data structure you'll need

3. **Understand the last feature**
   - Check git log to see what was built recently
   - Look at the files that were changed to understand the pattern

### Phase 2: Create or Edit Files

**Follow these conventions:**

1. **Create new pages in `src/pages/`**
   - Use `.tsx` extension (React + TypeScript)
   - Name files as `PascalCase.tsx`
   - Default export the component
   - Example:
     ```tsx
     export default function MyNewPage() {
       return <div>Your content here</div>;
     }
     ```

2. **Create reusable components in `src/components/`**
   - Break down pages into smaller components
   - Use `shadcn/ui` components for UI (Button, Card, Dialog, etc.)
   - Example:
     ```tsx
     import { Button } from "@/components/ui/button";

     export function MyComponent() {
       return <Button>Click me</Button>;
     }
     ```

3. **Add routes in `src/App.tsx`**
   - Register new pages in the router
   - Example:
     ```tsx
     <Route path="/my-new-page" element={<MyNewPage />} />
     ```

4. **Update navigation in `src/components/Navbar.tsx`**
   - Add links to primary navigation if it's a main section
   - Ensure users can discover your new feature

### Phase 3: Integrate with Supabase (if needed)

**For database changes:**

1. **Create a migration file**
   ```bash
   # File: supabase/migrations/20260323120000_add_my_table.sql

   CREATE TABLE my_table (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     user_id UUID NOT NULL REFERENCES auth.users(id),
     data TEXT,
     created_at TIMESTAMP DEFAULT NOW()
   );

   -- Add Row Level Security
   ALTER TABLE my_table ENABLE ROW LEVEL SECURITY;

   CREATE POLICY "Users can view own data"
     ON my_table
     FOR SELECT
     USING (auth.uid() = user_id);
   ```

2. **Run the migration**
   - Log into Supabase Dashboard
   - Go to SQL Editor
   - Paste your migration and execute it

3. **Use the table in your code**
   ```tsx
   import { supabase } from "@/integrations/supabase/client";

   const { data, error } = await supabase
     .from("my_table")
     .select("*");
   ```

### Phase 4: Test & Review

**Before finishing:**

- [ ] Feature works on desktop and mobile
- [ ] No TypeScript errors (`npm run lint`)
- [ ] All links work and navigation is clear
- [ ] Copy is plain language and accessible
- [ ] Images/assets are optimized
- [ ] Related components haven't been broken

### Phase 5: Commit & Push

**When the feature is complete:**

```bash
cd ~/Documents/Claude/Projects/TekSure

# Check what changed
git status

# Stage all changes
git add -A

# Commit with a descriptive message
git commit -m "feat: Add [feature name] — [brief description]"

# Pull latest changes from main
git pull --rebase origin main

# Push your changes
git push
```

**If you hit a lock file error:**
```bash
rm -f ~/Documents/Claude/Projects/TekSure/.git/index.lock
rm -f ~/Documents/Claude/Projects/TekSure/.git/HEAD.lock
git push
```

---

## Tech Stack & Conventions

### Frontend Framework

- **React 18** — Component-based UI
- **TypeScript** — Type safety for all `.tsx` files
- **Vite** — Fast build tool and dev server
- **React Router** — Client-side routing
- **TanStack Query** (React Query) — Data fetching and caching

### Styling

- **Tailwind CSS** — Utility-first styling
  - Use Tailwind classes for all styling
  - Minimal custom CSS (only if truly necessary)
  - Config: `tailwind.config.js`

### UI Components

- **shadcn/ui** — Pre-built, customizable components
  - Already installed: Button, Card, Dialog, Tabs, Input, Textarea, etc.
  - Add new ones: `npx shadcn-ui@latest add [component-name]`
  - Example: `import { Button } from "@/components/ui/button"`

### Backend & Database

- **Supabase** — PostgreSQL database, Auth, Edge Functions
  - Project ref: `zrgtoefkqafndhxhbuag`
  - Supabase client: `src/integrations/supabase/client.ts`
  - Auth: `supabase.auth` (handles login/signup)
  - Database: Use `.from("table_name")` for queries

### Email

- **Resend** — Email delivery service
  - API key stored in Supabase secrets
  - Used by Edge Functions to send confirmations

### Authentication

- **Supabase Auth** — User management
  - Handles signup, login, password reset
  - Sessions managed in the browser
  - Use `supabase.auth.getUser()` to check if user is logged in

---

## Feature Development Patterns

### Pattern 1: Adding a New Guide

**File:** `src/data/guides.ts`

```typescript
{
  id: 'how-to-backup-photos',
  title: 'How to Back Up Your Photos Safely',
  description: 'Learn three simple ways to save your photos so they\'re never lost.',
  category: 'backup', // or: 'security', 'wifi', 'devices', 'software'
  difficulty: 'beginner',
  timeToComplete: '15 minutes',
  steps: [
    {
      number: 1,
      title: 'Choose Your Method',
      content: 'There are three main ways to back up photos...',
    },
    {
      number: 2,
      title: 'Use the Cloud (Easiest)',
      content: 'The easiest method is to use cloud storage...',
    },
    // More steps...
  ],
  tags: ['photos', 'backup', 'iphone', 'android'],
  videoUrl: 'https://youtube.com/embed/...', // Optional
}
```

Then the guide is automatically available at `/guides/how-to-backup-photos`.

### Pattern 2: Adding a New Tool (Multi-Step Wizard)

**File:** `src/pages/tools/MyNewTool.tsx`

```typescript
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function MyNewTool() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});

  const steps = [
    {
      title: "Step 1: Question",
      content: "What is your device type?",
      options: ["iPhone", "Android", "Computer"],
    },
    {
      title: "Step 2: Question",
      content: "How old is your device?",
      options: ["Less than 1 year", "1-3 years", "More than 3 years"],
    },
    // More steps...
  ];

  const currentStep = steps[step - 1];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">{currentStep.title}</h1>
      <Card className="p-6 mb-6">
        <p className="text-lg mb-4">{currentStep.content}</p>
        <div className="space-y-2">
          {currentStep.options.map((option) => (
            <Button
              key={option}
              variant="outline"
              className="w-full"
              onClick={() => {
                setAnswers({ ...answers, [step]: option });
                if (step < steps.length) setStep(step + 1);
              }}
            >
              {option}
            </Button>
          ))}
        </div>
      </Card>

      {step > 1 && (
        <Button variant="ghost" onClick={() => setStep(step - 1)}>
          Back
        </Button>
      )}
    </div>
  );
}
```

### Pattern 3: Adding Database-Backed Content

**Step 1: Create a migration**
```sql
-- supabase/migrations/20260323_create_reviews.sql
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id),
  guide_id TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read all reviews"
  ON reviews FOR SELECT USING (TRUE);

CREATE POLICY "Users can create own reviews"
  ON reviews FOR INSERT WITH CHECK (auth.uid() = user_id);
```

**Step 2: Run the migration** (Supabase Dashboard → SQL Editor)

**Step 3: Use it in your component**
```tsx
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export default function GuideReviews({ guideId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const { data } = await supabase
        .from("reviews")
        .select("*")
        .eq("guide_id", guideId);
      setReviews(data || []);
    };
    fetchReviews();
  }, [guideId]);

  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id} className="border p-4 mb-2">
          <p>Rating: {review.rating}/5</p>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}
```

### Pattern 4: Protecting Pages with Authentication

```tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

export default function AdminDashboard() {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        navigate("/login");
        return;
      }
      // TODO: Check if user is actually an admin
      setIsAdmin(true);
    };
    checkAuth();
  }, [navigate]);

  if (!isAdmin) return <p>Loading...</p>;

  return <div>Admin Dashboard Content</div>;
}
```

---

## Supabase Configuration

### Database Tables (Current)

| Table | Purpose | Key Columns |
|-------|---------|-------------|
| `auth.users` | User accounts | id, email, created_at |
| `profiles` | User profile data | user_id, name, age_range, preferences |
| `bookings` | Technician appointments | id, user_id, date, time, status |
| `forum_threads` | Forum posts | id, user_id, title, content, created_at |
| `forum_replies` | Forum replies | id, thread_id, user_id, content, created_at |

### Row Level Security (RLS)

All tables should have RLS enabled. Example policies:

```sql
-- Allow users to read their own profile
CREATE POLICY "Users can read own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = user_id);

-- Allow users to update their own profile
CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = user_id);

-- Allow anyone to read public content
CREATE POLICY "Anyone can read guides"
  ON guides FOR SELECT USING (TRUE);
```

### Edge Functions

Currently deployed:
- `send-help-confirmation` — Sends confirmation email when user submits help request
- `send-booking-confirmation` — Sends confirmation email for technician bookings

To deploy a new function:
```bash
# CLI (if Supabase CLI is installed)
npx supabase functions deploy my-function --project-ref zrgtoefkqafndhxhbuag

# Or manually in Supabase Dashboard → Edge Functions
```

---

## Git Workflow & Deployment

### Commit Message Convention

```
feat: Add new guide categories filter
fix: Resolve booking email not sending
docs: Update installation instructions
refactor: Simplify guide data structure
style: Fix Tailwind class formatting
test: Add tests for booking system
```

**Format:** `type: [brief description]`

### Branch Strategy

- **main** — Production-ready code
- **Feature branches** — `feature/guide-categories`, `feature/booking-system`
- **Bugfix branches** — `bugfix/email-issue`, `bugfix/mobile-layout`

### Full Push Workflow

```bash
cd ~/Documents/Claude/Projects/TekSure

# 1. Check status
git status

# 2. Stage changes
git add -A

# 3. Commit
git commit -m "feat: Your feature description"

# 4. Pull latest changes (to avoid conflicts)
git pull --rebase origin main

# 5. Push to GitHub
git push
```

### If Push Fails

**Lock file issue:**
```bash
rm -f ~/Documents/Claude/Projects/TekSure/.git/index.lock
rm -f ~/Documents/Claude/Projects/TekSure/.git/HEAD.lock
git push
```

**Merge conflicts:** Manually edit the conflicted files, then:
```bash
git add -A
git rebase --continue
git push
```

### Supabase-Specific Deployment Steps

**If you created a migration:**
1. Log into Supabase Dashboard
2. Go to SQL Editor
3. Copy the migration file contents
4. Paste and execute the SQL

**If you deployed an Edge Function:**
```bash
npx supabase functions deploy function-name --project-ref zrgtoefkqafndhxhbuag
```

---

## Roadmap & Sprint Planning

### Current Phase: Revenue Foundation

**Priorities (in order):**

1. **P1: Stripe Payments** — Enable paid technician bookings
2. **P1: Community Forum** — Peer-to-peer support
3. **P2: TekBot Upgrade** — Context-aware, related guides
4. **P2: Advanced Guides** — Video integration, user feedback
5. **P3: Analytics** — Track popular guides, user engagement

### How to Pick the Next Feature

1. Open `~/Documents/Claude/Projects/TekSure-roadmap-strategy.md`
2. Find the highest-priority item marked "Planned"
3. Follow the recommended implementation approach in the roadmap
4. When done, update the roadmap to mark it as "Live"

### Sprint Planning (When Applicable)

- **Sprint duration:** 1-2 weeks
- **Sprint goal:** Deliver 1-3 high-priority features
- **Daily check-in:** Review progress, unblock issues
- **Sprint review:** Demo completed features, gather feedback

---

## Quick Reference Checklist

### Before Starting a Feature

- [ ] Read the roadmap to find priority item
- [ ] Check if feature already exists (search `src/`)
- [ ] Identify related components to reuse
- [ ] Check git log for recent similar work
- [ ] Understand the target user (non-technical, often seniors)

### During Development

- [ ] Use React + TypeScript (`.tsx` files)
- [ ] Use Tailwind CSS for all styling
- [ ] Use shadcn/ui components where applicable
- [ ] Add routes in `src/App.tsx`
- [ ] Update navigation if it's a main feature
- [ ] Test on mobile (use browser dev tools)
- [ ] Check accessibility (contrast, tap targets, alt text)
- [ ] Keep copy in plain language (no jargon)

### Before Committing

- [ ] No TypeScript errors
- [ ] Feature works on desktop and mobile
- [ ] All navigation links work
- [ ] Images are optimized
- [ ] Supabase migrations are created (if needed)
- [ ] RLS policies are in place (if applicable)
- [ ] Code follows existing patterns

### After Pushing

- [ ] All Supabase migrations run successfully
- [ ] Any Edge Functions deployed
- [ ] Update roadmap to mark feature as "Live"
- [ ] Update project documentation if needed

---

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| Port 5173 already in use | `npm run dev` will try a different port; or kill process: `lsof -i :5173` |
| TypeScript errors | Run `npm run lint` to see all errors; check types in imports |
| Supabase connection fails | Verify `.env.local` has correct URL and key |
| Git push rejected | Run `git pull --rebase origin main` first |
| Tailwind classes not working | Check `tailwind.config.js` is configured correctly |
| Component import errors | Verify file is in `src/components/` with `.tsx` extension |

### Getting Help

1. Check `README.md` in the project root
2. Review similar implemented features for patterns
3. Check Supabase dashboard for data/auth issues
4. Look at git history for how similar features were built

---

## Resources

- **React docs:** https://react.dev
- **TypeScript handbook:** https://www.typescriptlang.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **shadcn/ui:** https://ui.shadcn.com
- **Supabase docs:** https://supabase.com/docs
- **React Router:** https://reactrouter.com
- **Vite:** https://vitejs.dev

---

**End of Manual**

For updates and changes to this manual, see the git commit history or contact the project maintainer.
