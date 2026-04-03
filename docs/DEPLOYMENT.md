# TekSure Deployment Guide

---

## Infrastructure

| Service | Purpose |
|---------|---------|
| **Vercel** | Frontend hosting, CDN, SSL |
| **Supabase** | Database, Auth, Edge Functions |
| **Stripe** | Payment processing |
| **Resend** | Transactional email |
| **Google Analytics** | Traffic analytics |

---

## Vercel

### Setup

- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`
- Node.js version: **18.x**

### Environment Variables (Vercel Dashboard)

```
VITE_SUPABASE_URL=https://zrgtoefkqafndhxhbuag.supabase.co
VITE_SUPABASE_ANON_KEY=<your-anon-key>
VITE_STRIPE_PUBLIC_KEY=pk_live_<your-key>
VITE_GA4_ID=G-<your-id>
```

Auto-deploys on every push to `main`.

---

## Supabase

```bash
supabase link --project-ref zrgtoefkqafndhxhbuag
supabase db push                        # Apply migrations
supabase functions deploy               # Deploy all Edge Functions
supabase secrets set STRIPE_SECRET_KEY=sk_live_...
supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_...
supabase secrets set RESEND_API_KEY=re_...
```

---

## Stripe

### Webhook Setup

1. Dashboard > Developers > Webhooks
2. Endpoint: `https://<ref>.supabase.co/functions/v1/stripe-webhook`
3. Events: `checkout.session.completed`, `charge.refunded`
4. Copy signing secret to Supabase secrets

### Test Card

`4242 4242 4242 4242` / any future date / any CVC

---

## Production Checklist

- [ ] All env vars set in Vercel
- [ ] Supabase migrations applied
- [ ] All 7 Edge Functions deployed
- [ ] Stripe webhook configured and tested
- [ ] Stripe in live mode
- [ ] RESEND_API_KEY set
- [ ] Custom domain DNS propagated
- [ ] SSL certificate active
- [ ] GA4 tracking working
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] PWA manifest and service worker functional
- [ ] Full booking + payment + email flow tested
- [ ] Forum post creation tested
- [ ] Admin console access verified
- [ ] RLS policies block unauthorized access

---

## Rollback

**Vercel**: Go to Deployments > find last working deploy > Promote to Production.

**Supabase**: Create a reverse migration SQL file.

---

## Monitoring

```bash
# Edge Function logs
supabase functions logs stripe-webhook --tail

# Vercel deployment logs in dashboard
# GA4 real-time traffic reports
```
