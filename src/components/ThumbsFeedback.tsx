/**
 * ThumbsFeedback — binary "Was this helpful?" widget.
 * Persists to localStorage (per slug) so it works for all users.
 * Shows a follow-up text area after voting for optional feedback.
 */

import { useState, useEffect } from 'react';
import { ThumbsUp, ThumbsDown, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const STORAGE_PREFIX = 'teksure_thumbs_';

interface FeedbackData {
  vote: 'up' | 'down';
  comment?: string;
  timestamp: number;
}

function getFeedback(slug: string): FeedbackData | null {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + slug);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveFeedback(slug: string, data: FeedbackData) {
  try {
    localStorage.setItem(STORAGE_PREFIX + slug, JSON.stringify(data));
  } catch {
    /* storage full — silently fail */
  }
}

export function ThumbsFeedback({ slug }: { slug: string }) {
  const { user } = useAuth();
  const [vote, setVote] = useState<'up' | 'down' | null>(() => getFeedback(slug)?.vote ?? null);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(!!getFeedback(slug));
  const [showComment, setShowComment] = useState(false);

  // Re-read if external component changed the value
  useEffect(() => {
    const existing = getFeedback(slug);
    if (existing) {
      setVote(existing.vote);
      setSubmitted(true);
      if (existing.comment) setComment(existing.comment);
    }
  }, [slug]);

  const handleVote = (v: 'up' | 'down') => {
    if (submitted) return;
    setVote(v);
    setSubmitted(true);
    saveFeedback(slug, { vote: v, timestamp: Date.now() });

    // If they voted "down", ask what went wrong
    if (v === 'down') {
      setShowComment(true);
    }
  };

  const handleSubmitComment = () => {
    if (!comment.trim() || !vote) return;
    const existing = getFeedback(slug);
    saveFeedback(slug, {
      vote,
      comment: comment.trim(),
      timestamp: existing?.timestamp ?? Date.now(),
    });
    setShowComment(false);
  };

  const changeVote = () => {
    setVote(null);
    setSubmitted(false);
    setComment('');
    setShowComment(false);
    localStorage.removeItem(STORAGE_PREFIX + slug);
  };

  if (!user) {
    return (
      <div className="rounded-xl border border-border bg-muted/30 px-6 py-5 text-center">
        <p className="text-sm text-muted-foreground mb-2">Sign in to provide feedback</p>
        <Link to="/login" className="text-xs text-primary">Sign In</Link>
      </div>
    );
  }
  if (submitted && vote) {
    return (
      <div className="rounded-xl border border-border bg-muted/30 px-6 py-5 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          {vote === 'up' ? (
            <ThumbsUp className="h-5 w-5 text-teksure-success" />
          ) : (
            <ThumbsDown className="h-5 w-5 text-muted-foreground" />
          )}
          <span className="font-semibold text-base">
            {vote === 'up' ? 'Glad it helped!' : 'Thanks for the feedback'}
          </span>
        </div>
        {showComment && (
          <div className="mt-4 max-w-md mx-auto text-left">
            <p className="text-sm text-muted-foreground mb-2">What could we improve?</p>
            <Textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Tell us what was unclear or missing…"
              className="min-h-[80px] text-base resize-none"
              maxLength={500}
            />
            <div className="flex items-center justify-between mt-2">
              <p className="text-xs text-muted-foreground">{comment.length}/500</p>
              <Button
                size="sm"
                onClick={handleSubmitComment}
                disabled={!comment.trim()}
                className="gap-1.5 min-h-[44px]"
              >
                <Send className="h-3.5 w-3.5" /> Send Feedback
              </Button>
            </div>
          </div>
        )}
        <button
          onClick={changeVote}
          className="text-xs text-muted-foreground underline underline-offset-2 mt-3 hover:text-foreground transition-colors"
        >
          Change your answer
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-muted/30 px-6 py-5 text-center">
      <p className="font-semibold text-base mb-1">Was this helpful?</p>
      <p className="text-sm text-muted-foreground mb-4">Let us know so we can improve our guides.</p>
      <div className="flex items-center justify-center gap-4">
        <Button
          variant="outline"
          size="lg"
          onClick={() => handleVote('up')}
          className="gap-2 min-h-[52px] px-6 border-teksure-success/40 text-teksure-success hover:bg-teksure-success/10 hover:border-teksure-success"
          aria-label="Yes, this was helpful"
        >
          <ThumbsUp className="h-5 w-5" /> Yes
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={() => handleVote('down')}
          className="gap-2 min-h-[52px] px-6 hover:bg-destructive/5 hover:text-destructive hover:border-destructive/40"
          aria-label="No, this was not helpful"
        >
          <ThumbsDown className="h-5 w-5" /> No
        </Button>
      </div>
    </div>
  );
}
