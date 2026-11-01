import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

/**
 * "Did this guide fix it?" — one Yes/No question at the end of every guide.
 *
 * Answers go to the existing `guide_ratings` table (Yes = 5 stars, No = 1),
 * so the guides people say did not work can be rewritten first. Visitors who
 * are not signed in are identified only by a random key kept in this
 * browser; nothing personal is sent.
 */
type Answer = 'yes' | 'no';

const ANON_KEY = 'teksure-anon-key';
const answerKey = (slug: string) => `teksure-guide-answer:${slug}`;

function store(): Storage | null {
  try {
    return typeof window === 'undefined' ? null : window.localStorage;
  } catch {
    return null;
  }
}

function anonKey(): string {
  const s = store();
  const existing = s?.getItem(ANON_KEY);
  if (existing) return existing;
  const key = typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
  try {
    s?.setItem(ANON_KEY, key);
  } catch {
    /* private mode: a fresh key each visit is fine */
  }
  return key;
}

async function saveAnswer(slug: string, answer: Answer) {
  const stars = answer === 'yes' ? 5 : 1;
  const { data } = await supabase.auth.getSession();
  const userId = data.session?.user.id;
  const row = userId
    ? { guide_slug: slug, user_id: userId, stars }
    : { guide_slug: slug, anon_key: anonKey(), stars };
  const { error } = await supabase
    .from('guide_ratings')
    .upsert(row, { onConflict: userId ? 'guide_slug,user_id' : 'guide_slug,anon_key' });
  if (error) console.warn('[guide-feedback] could not save answer', error.message);
}

const button =
  'inline-flex min-h-[52px] items-center justify-center rounded-sm border-2 border-foreground bg-card px-6 text-lg font-bold text-foreground hover:bg-secondary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40';

export function GuideFeedback({ slug }: { slug: string }) {
  const [answer, setAnswer] = useState<Answer | null>(null);

  // Show the thank-you again if this browser already answered.
  useEffect(() => {
    const saved = store()?.getItem(answerKey(slug));
    setAnswer(saved === 'yes' || saved === 'no' ? saved : null);
  }, [slug]);

  const choose = (a: Answer) => {
    setAnswer(a);
    try {
      store()?.setItem(answerKey(slug), a);
    } catch {
      /* not critical */
    }
    void saveAnswer(slug, a);
  };

  return (
    <section aria-labelledby="guide-feedback" className="mt-12 border-t-2 border-foreground pt-6 no-print">
      <h2 id="guide-feedback" className="font-display text-2xl font-bold">Did this guide fix your problem?</h2>
      <div aria-live="polite">
        {answer === null ? (
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <button type="button" className={button} onClick={() => choose('yes')}>
              Yes, it worked
            </button>
            <button type="button" className={button} onClick={() => choose('no')}>
              No, I am still stuck
            </button>
          </div>
        ) : answer === 'yes' ? (
          <p className="mt-3 text-lg">Glad it helped. Thank you for telling us.</p>
        ) : (
          <p className="mt-3 text-lg">
            Sorry it did not work. Thank you for telling us: we rewrite the guides people mark as not working first.
            For help today,{' '}
            <Link to="/get-help" className="font-bold text-primary underline underline-offset-4">talk to a real person</Link>.
          </p>
        )}
      </div>
    </section>
  );
}
