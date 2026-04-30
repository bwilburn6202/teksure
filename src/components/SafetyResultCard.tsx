import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';
import {
  type SafetyResult,
  type SafetyVerdict,
  VERDICT_STYLE,
} from '@/hooks/useSafetyLookup';

const ICON_BY_VERDICT: Record<SafetyVerdict, React.ElementType> = {
  safe: CheckCircle2,
  caution: AlertTriangle,
  danger: XCircle,
  unknown: HelpCircle,
};

interface SafetyResultCardProps {
  /** What the user typed — shown in the verdict card so context is obvious. */
  query: string;
  result: SafetyResult;
}

/**
 * Renders the verdict + reasons + sources for any safety-lookup result.
 * Used by the URL, email, and phone safety tools so they stay consistent.
 */
export function SafetyResultCard({ query, result }: SafetyResultCardProps) {
  const style = VERDICT_STYLE[result.verdict];
  const Icon = ICON_BY_VERDICT[result.verdict];

  return (
    <div className="space-y-4">
      {/* Main verdict */}
      <Card className={`${style.border} ${style.bg} border-2`}>
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <Icon className={`h-8 w-8 ${style.iconClass} shrink-0 mt-0.5`} aria-hidden="true" />
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h2 className="font-bold text-lg">{style.label}</h2>
                {result.cached && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-background/60 border border-border text-muted-foreground uppercase tracking-wider">
                    cached
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground break-all mb-2 font-mono">{query}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{result.summary}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reasons */}
      {result.reasons.length > 0 && (
        <Card>
          <CardContent className="p-5">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              What we found ({result.reasons.length})
            </p>
            <ul className="space-y-3">
              {result.reasons.map((r, i) => {
                const sub = VERDICT_STYLE[r.severity];
                const SubIcon = ICON_BY_VERDICT[r.severity];
                return (
                  <li key={i} className="flex items-start gap-3">
                    <SubIcon className={`h-4 w-4 ${sub.iconClass} shrink-0 mt-0.5`} aria-hidden="true" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-foreground/90 leading-snug">{r.detail}</p>
                      <p className="text-[11px] text-muted-foreground mt-0.5">
                        Source: <span className="font-mono">{r.source}</span>
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Sources */}
      {result.sources.length > 0 && (
        <Card>
          <CardContent className="p-5">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Checked against
            </p>
            <div className="flex flex-wrap gap-2">
              {result.sources.map(src => (
                <span
                  key={src}
                  className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border font-mono"
                >
                  {src}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
