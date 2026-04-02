import { Component, type ReactNode } from 'react';
import { Home, RefreshCw, AlertCircle } from 'lucide-react';

interface Props {
  children: ReactNode;
  /** 'page' = full-screen takeover (default). 'section' = inline card, smaller footprint. */
  variant?: 'page' | 'section';
}

interface State {
  hasError: boolean;
}

// ── Full-screen page error ────────────────────────────────────────────────────

function PageError({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <p className="text-6xl mb-5 select-none">😟</p>
        <h1 className="text-2xl font-bold mb-3 tracking-tight">
          Oops! Something didn't load right.
        </h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Don't worry — it's not your device and nothing is broken on your end.
          Something went wrong on our side. You can try refreshing the page, or
          head back home and pick up where you left off.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onRetry}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <RefreshCw className="h-4 w-4" />
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
          >
            <Home className="h-4 w-4" />
            Go to homepage
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Inline section error (smaller, embedded) ─────────────────────────────────

function SectionError({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <AlertCircle className="h-10 w-10 text-muted-foreground/50 mb-4" />
      <p className="font-semibold mb-1">This section couldn't load</p>
      <p className="text-sm text-muted-foreground mb-5 max-w-xs">
        Something went wrong here, but the rest of the page should still work.
        Try refreshing or come back in a moment.
      </p>
      <div className="flex gap-3">
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <RefreshCw className="h-3.5 w-3.5" />
          Try again
        </button>
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
        >
          <Home className="h-3.5 w-3.5" />
          Go home
        </a>
      </div>
    </div>
  );
}

// ── ErrorBoundary class component ─────────────────────────────────────────────

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: { componentStack: string }) {
    console.error('ErrorBoundary caught:', error, info.componentStack);
  }

  handleRetry = () => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      const retry = this.handleRetry;
      if (this.props.variant === 'section') {
        return <SectionError onRetry={retry} />;
      }
      return <PageError onRetry={retry} />;
    }
    return this.props.children;
  }
}
