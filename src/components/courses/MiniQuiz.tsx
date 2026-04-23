import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, Lightbulb } from 'lucide-react';
import type { QuizQuestion } from '@/data/courses';

type Props = {
  questions: readonly QuizQuestion[];
  onComplete: (score: number) => void;
};

/**
 * A single-screen quiz that lets the learner answer all questions, reveals
 * feedback per-question as they go, and finalizes a score when they submit.
 *
 * Design choices:
 *  - No timer — we want low pressure.
 *  - Feedback appears immediately after each answer so the learner learns
 *    while they take the quiz (per pedagogy research on retrieval practice).
 *  - The "Submit" button is disabled until every question has been answered.
 */
export function MiniQuiz({ questions, onComplete }: Props) {
  const [answers, setAnswers] = useState<(number | null)[]>(() =>
    questions.map(() => null)
  );
  const [submitted, setSubmitted] = useState(false);

  const score = answers.reduce<number>((total, picked, i) => {
    if (picked !== null && picked === questions[i].correct) return total + 1;
    return total;
  }, 0);

  const allAnswered = answers.every((a) => a !== null);

  const handlePick = (qIndex: number, choiceIndex: number) => {
    if (submitted) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[qIndex] = choiceIndex;
      return next;
    });
  };

  const handleSubmit = () => {
    if (!allAnswered || submitted) return;
    setSubmitted(true);
    onComplete(score);
  };

  return (
    <div className="space-y-4">
      {questions.map((question, i) => {
        const picked = answers[i];
        const showFeedback = picked !== null; // reveal per-question as they go
        const isCorrect = picked !== null && picked === question.correct;

        return (
          <Card key={i} className="border-border">
            <CardContent className="p-5">
              <div className="flex items-start gap-3 mb-4">
                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary font-bold text-sm shrink-0">
                  {i + 1}
                </span>
                <h3 className="font-semibold text-base leading-snug">{question.q}</h3>
              </div>

              <div
                role="radiogroup"
                aria-label={`Question ${i + 1}`}
                className="space-y-2"
              >
                {question.choices.map((choice, choiceIndex) => {
                  const isPicked = picked === choiceIndex;
                  const isAnswer = choiceIndex === question.correct;
                  const stateClass = (() => {
                    if (!showFeedback) {
                      return isPicked
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/40 hover:bg-muted/50';
                    }
                    // Feedback mode: correct always highlighted, picked-wrong highlighted red.
                    if (isAnswer) return 'border-emerald-500 bg-emerald-500/10';
                    if (isPicked && !isCorrect) return 'border-red-500 bg-red-500/10';
                    return 'border-border opacity-70';
                  })();

                  return (
                    <button
                      key={choiceIndex}
                      type="button"
                      role="radio"
                      aria-checked={isPicked}
                      disabled={submitted}
                      onClick={() => handlePick(i, choiceIndex)}
                      className={`w-full flex items-center justify-between gap-3 min-h-[44px] text-left rounded-lg border px-4 py-3 text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${stateClass} ${
                        submitted ? 'cursor-default' : 'cursor-pointer'
                      }`}
                    >
                      <span className="flex items-center gap-3 min-w-0">
                        <span
                          className={`h-4 w-4 rounded-full border-2 shrink-0 ${
                            isPicked ? 'border-primary bg-primary' : 'border-muted-foreground/40'
                          }`}
                          aria-hidden="true"
                        />
                        <span className="min-w-0">{choice}</span>
                      </span>

                      {showFeedback && isAnswer && (
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" aria-hidden="true" />
                      )}
                      {showFeedback && isPicked && !isCorrect && (
                        <XCircle className="h-5 w-5 text-red-600 shrink-0" aria-hidden="true" />
                      )}
                    </button>
                  );
                })}
              </div>

              {showFeedback && (
                <div
                  className={`mt-4 rounded-lg border-l-4 px-4 py-3 text-sm ${
                    isCorrect
                      ? 'border-emerald-500 bg-emerald-500/5'
                      : 'border-amber-500 bg-amber-500/5'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <Lightbulb className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-foreground/90">
                      <strong>
                        {isCorrect ? 'Right. ' : 'Not quite. '}
                      </strong>
                      {question.why}
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        );
      })}

      {!submitted && (
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            {allAnswered
              ? 'All three answered — submit when ready.'
              : `${answers.filter((a) => a !== null).length} of ${questions.length} answered`}
          </p>
          <Button onClick={handleSubmit} disabled={!allAnswered}>
            Submit quiz
          </Button>
        </div>
      )}
    </div>
  );
}
