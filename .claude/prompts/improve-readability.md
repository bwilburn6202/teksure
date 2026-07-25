# Improve guide readability

**Goal:** bring TekSure's hardest-to-read guides down to roughly a grade 8 reading
level without losing accuracy.

## Why this matters more than it sounds

The average TekSure guide currently scores **grade 9.5**, and **78% sit above grade 8**.
The audience is largely over 60, often reading on a phone, often already frustrated and
a little anxious about breaking something. Every extra clause is a chance to give up.

Reading level is also an SEO signal in practice, not theory: pages people actually
finish reading earn better engagement, and answer engines quote clear sentences far
more readily than dense ones.

## Pick the targets

```bash
node scripts/audit-senior-ux.mjs --verbose | head -40
```

Take the worst offenders **that also matter** — prefer guides on high-traffic topics
(scams, passwords, phones, Medicare) over obscure ones. Do 10–25 per run. This is not a
job to finish in one sitting; it is a job to move steadily.

## How to simplify (in priority order)

1. **Split long sentences.** One idea per sentence. This single change moves the score
   more than anything else.
2. **Cut throat-clearing.** "It is important to note that you should first…" → "First…".
3. **Prefer the short word.** utilize→use, additional→more, purchase→buy,
   navigate to→go to, verify→check, terminate→stop, sufficient→enough.
4. **Explain a term the first time it appears**, then use it plainly:
   "two-factor authentication (a second code sent to your phone)".
5. **Say what the person sees.** "Tap the blue *Settings* icon — it looks like a grey
   gear" beats "access the Settings application".
6. **Keep numbers, menu paths, phone numbers, and warnings exactly as they are.**

## Hard rules

- **Never change a factual claim** to make a sentence shorter. If simplifying would
  make it wrong, leave it and move on.
- Keep the banned words out (`CLAUDE.md`): no "simply", no "just tap…", no "it's easy",
  no "obviously". A guide that calls itself easy insults a stuck reader.
- Do not touch `slug`, `category`, `publishedAt`, or step structure.
- Preserve every official source link.

## Verify

```bash
node scripts/audit-senior-ux.mjs          # grade should drop
npm test                                   # brand-voice + schema tests must pass
npx tsc --noEmit -p tsconfig.app.json
```

Report the before/after numbers and how many guides you changed. Then commit and push.

## A worked example

Before (grade 13):

> In the event that you are unable to recall your password, it is recommended that you
> utilize the account recovery functionality, which will facilitate the transmission of
> a verification code to your registered email address.

After (grade 6):

> Forgot your password? Use "Forgot password" on the sign-in screen. The company will
> email you a code. Type that code in to set a new password.

Same facts. Half the words. The second one is usable by someone who is worried they have
been locked out of their bank.
