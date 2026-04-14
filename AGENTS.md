# AGENTS.md

## Repo workflows discovered (April 2026)

- Install deps: `npm install`
- Run dev app: `npm run dev` (Vite default at `http://localhost:5173`)
- Validate frontend build: `npm run build`
- Lint: `npm run lint`
- Unit tests: `npm run test`

## Payments + database workflow

- Booking deposit flow is wired through Supabase Edge Function `create-checkout-session` and Stripe webhook `stripe-webhook` (`supabase/functions/*`).
- Apply DB migrations before deployment:
  - `supabase db push`
- Deploy all Edge Functions when payment/backend logic changes:
  - `supabase functions deploy`
- Watch webhook behavior during rollout:
  - `supabase functions logs stripe-webhook --tail`

## Deployment workflow

- Frontend deploy target is Vercel (`npm run build`, output `dist/`).
- Production deployment checklist lives in `docs/DEPLOYMENT.md`.

## Review focus from recent changes

- Recent commits show repeated large UI redesigns and content pushes; prioritize quick regression checks:
  1. `npm run build` (catch duplicate declarations/chunking breakages).
  2. Smoke routes for booking/payment and `/tools` pages after merges.
  3. Re-check lazy imports in `src/App.tsx` for duplicate symbols after route additions.
