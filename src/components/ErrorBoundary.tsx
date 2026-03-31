import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

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

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
          <div className="text-center max-w-md">
            <p className="text-5xl mb-4">⚠️</p>
            <h1 className="text-xl font-semibold mb-2">Something went wrong</h1>
            <p className="text-muted-foreground text-sm mb-6">
              An unexpected error occurred. Please refresh the page to continue.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Refresh page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
