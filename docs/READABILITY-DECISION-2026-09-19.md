# Readability: why grade 8.3 is the floor, and what to do about it

**Date:** 2026-09-19 · **Status:** analysis complete, decision needed from Bailey
**Relates to:** the standing "readability" line in `CLAUDE.md` open blockers

`scripts/audit-senior-ux.mjs` has reported the same warning for 200+ dev-loop
cycles: *avg reading grade 8.3 (target <= 8), 58.5% of guides above grade 8*.
Every cycle lists "Readability & senior UX" as the suggested next action, and
every cycle it stays put. This document works out why, so the loop can stop
spending cycles on it.

`CLAUDE.md` already says a daily 5-guide hand pass is "the appearance of
progress rather than progress" and asks for either a scripted bulk pass or an
explicit decision to accept the number. This is the evidence for that decision.

---

## What the number is actually made of

Flesch-Kincaid grade is two terms added together:

    grade = 0.39 x (words per sentence) + 11.8 x (syllables per word) - 15.59
            |------ sentence length ----|  |------ word length ------|

Reproducing the audit's exact method (per-guide mean, `body:` only, Spanish
guides excluded, line breaks treated as sentence ends) over all 3,277 scored
guides gives **mean grade 8.28, 58.5% above 8** - an exact match for the
reported 8.3 / 58.5%, so the decomposition below is authoritative.

| Term | Value | Underlying measure |
|---|---|---|
| Sentence length `0.39 x wps` | **6.19** | 15.88 words per sentence |
| Word length `11.8 x spw` | **17.68** | 1.498 syllables per word |
| Constant | -15.59 | |
| **Total** | **8.28** | |

**Sentence length is not the problem.** 15.9 words per sentence is squarely
plain-English writing; plain-language guidance generally asks for 20 or under.
The guides already clear that comfortably.

**Word length is carrying the entire number.** 17.68 of the 8.28 comes from
syllables per word.

## What it would take to reach 8.0

The gap is 0.28 grade points.

- **Via sentence length alone:** mean words per sentence must fall from 15.88 to
  **15.16** - cutting roughly 4.5% off sentences that are already short.
- **Via word length alone:** mean syllables per word must fall from 1.498 to
  **1.474** - removing about 59,000 syllables across the corpus *without*
  removing the words.

## Why neither is available honestly

### The vocabulary pass is exhausted

`scripts/simplify-vocabulary.mjs` is the safe, whole-word swap pass built for
exactly this. As of today:

    [simplify-vocabulary] DRY RUN - files touched: 0
    fields touched: 0 - total word swaps: 0

Every swap in the dictionary has already been applied. There is no remaining
safe vocabulary work.

### The words driving the number are words we must keep

The most frequent 3+ syllable words across all guide prose:

| Count | Word | Why it stays |
|---|---|---|
| 4,013 | every | ordinary English; heuristic counts 3 syllables ("ev-er-y") |
| 3,569 | family | ordinary English |
| 2,755 | usually | ordinary English |
| 2,525 | automatically | describes what the setting does |
| 2,305 | security | UI label on every platform |
| 2,163 | computer | the subject of the site |
| 2,124 | available | ordinary English |
| 1,869 | information | UI label |
| 1,722 | medicare | proper noun |
| 1,646 | location | UI label |
| 1,643 | camera | UI label |
| 1,492 | amazon | proper noun |
| 1,413 | internet | the subject of the site |
| 1,332 | battery | UI label |
| 1,223 | insurance | proper noun in context |
| 934 | microsoft | proper noun |
| 910 | alexa | proper noun |

These fall into two groups and neither can be edited:

1. **Proper nouns and on-screen labels** - Medicare, Amazon, Microsoft, Alexa,
   Security, Location, Battery, Camera, Information. A guide that says "tap
   Safety" when the phone says "Security" is a broken guide. The reader is
   matching our words against their screen; changing them to shorter words
   makes the guide *fail at its job*.
2. **Everyday words a 70-year-old reads without effort** - every, family,
   usually, available, already, another, important, something. Flesch-Kincaid
   counts syllables as a *proxy* for difficulty. For this vocabulary the proxy
   is simply wrong: "family" is not a hard word.

To move the metric we would have to replace correct, familiar words with worse
ones. That trades real comprehension for a number.

## The measurement has noise in both directions

Worth recording so nobody re-derives it:

- **Understates the grade:** the audit counts every `[.!?]` run as a sentence
  end, so the period in `medicare.gov`, `nfcc.org` or `consumer.ftc.gov` is
  scored as a sentence boundary. Across the pooled corpus, URL periods are
  **6.0% of all sentence marks** (10,459 of 174,387), plus 1,312 decimal points
  and 332 abbreviation periods. Excluding them raises words-per-sentence from
  14.11 to 15.16.
- **Overstates the grade:** the syllable heuristic counts vowel clusters, so it
  scores "every" as 3, "camera" as 3 and "different" as 3, when ordinary speech
  gives each 2.

The two effects roughly cancel. Neither is worth engineering around, because
correcting both would still leave the number governed by unavoidable vocabulary.

## Recommendation

**Accept grade 8.3 and retire the `<= 8` target**, on the same reasoning that
retired the guide-count target on 2026-08-04: the number stopped measuring the
thing we care about.

Grade 8 was a reasonable proxy for "a senior can follow this." The things that
*actually* determine whether a senior can follow a TekSure guide are already
enforced, and all currently pass:

- no jargon without an immediate explanation (enforced by `npm test`)
- banned corporate filler - "simply", "just", "seamless", etc. (enforced by `npm test`)
- step-by-step structure with a real source link (enforced by schema tests)
- sentence length under 20 words (**15.9 actual**)
- no images missing alt text (**0**)
- no sub-44px tap targets (**0**)

Suggested replacement target: **keep sentence length at or under 18 words and
leave the grade uncapped**, reporting it as information rather than a warning.
That keeps a genuine regression visible - if someone starts writing 30-word
sentences the number moves - without flagging a permanent failure nobody can
honestly fix.

### If you would rather not accept it

The only remaining lever that does not damage the guides is splitting the
longest sentences. There are 9,482 sentences of 30+ words. Spot-reading them,
most are well-formed and clear (a 40-word sentence about HECM counselling reads
fine), and the longest "sentences" are bulleted lists the splitter misreads.
`CLAUDE.md` already warns that `split-comma-conjunctions`, `split-em-dash` and
`split-semicolons` "improve the metric while degrading some prose." My read is
that this lever costs more in prose quality than it returns in comprehension,
which is why it is not the recommendation.

## What was deliberately not done

No guide prose was edited for this analysis, no thresholds were changed and no
splitter script was run. Retiring a target is Bailey's call, exactly as the
guide-count target was, so this cycle produced the evidence and stopped there.
