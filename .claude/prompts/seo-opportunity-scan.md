# SEO opportunity scan

**Goal:** decide what to write or improve next based on what people actually search for,
not on what is convenient to generate.

## First, confirm the foundations still hold

There is no point chasing keywords if the site cannot be crawled. Check, in order:

```bash
# 1. Per-page titles reach crawlers (prerendering alive?)
curl -s https://www.teksure.com/guides/qr-codes | grep -oE "<title>[^<]*</title>"

# 2. Sitemap is current and complete
curl -s https://www.teksure.com/sitemap.xml | grep -c "<loc>"

# 3. robots.txt is not blocking anything important
curl -s https://www.teksure.com/robots.txt

# 4. No duplicate titles competing with each other
node scripts/dev-loop.mjs --once --dry-run --only=duplicate-titles
```

If the title in step 1 is the generic site title, stop and fix prerendering. Everything
below is worthless until a crawler can tell your pages apart.

## Where the real opportunity is

TekSure's advantage is **specific, patiently-explained answers for people other sites
talk down to**. Play to that:

1. **Long-tail questions in plain words.** People in this audience type whole sentences:
   "why does my phone say sim not provisioned", "how do I know if a text from my bank is
   real". Those have low competition and high intent.
2. **Fear-driven queries.** "is this a scam", "I clicked a bad link what now",
   "someone has my social security number". High urgency, high value, and TekSure's
   Scam Defense content is genuinely strong here.
3. **Seasonal, dated demand.** Medicare open enrollment (Oct–Dec), tax season (Jan–Apr),
   new iPhone/Android releases (Sep–Oct), holiday gift setup (Dec–Jan). Publish *before*
   the wave, not during.
4. **"Second step" queries.** Everyone writes "how to set up X". Far fewer write
   "X is set up but it is not working" — where people actually get stuck.

## Research honestly

Use `WebSearch` to check how a question is really phrased and what already ranks. Read
the top results and ask: *can TekSure genuinely do better for a 72-year-old?* If the
existing results are already clear and thorough, pick a different topic — adding a
worse page helps nobody and dilutes the domain.

## Also look inward

```bash
node scripts/audit-senior-ux.mjs --verbose     # weak existing pages
grep -c "canonicalSlug" src/data/guides*.ts    # known duplicate topics
```

Improving a guide that already ranks on page 2 usually beats writing a new one from
scratch. Check for topics with thin coverage: a guide under ~400 words on a competitive
subject is unlikely to rank and is worth expanding.

## Output

Produce a short, ranked list — no more than 10 items — with, for each:

- the query as a person would type it
- whether it is *new guide* or *improve existing* (and which slug)
- why TekSure can win it
- rough seasonality, if any

Then hand the top items to `write-new-guide.md` or `improve-readability.md`.

## Caution

Do not bulk-generate to chase a keyword list. Search engines have gotten decisively
better at spotting mass-produced content, and the penalty lands on the whole domain —
including the 4,000 guides already there. One excellent page a week compounds; a
hundred thin ones a week is a liability.
