import React from 'react'

type Props = {
  children: React.ReactNode
  variant?: 'section' | 'page'
}

type State = {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: any) {
    // You could log to an error reporting service here
    console.error('ErrorBoundary caught an error', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          aria-live="assertive"
          className="min-h-[60vh] flex items-center justify-center px-6 py-12"
        >
          <div className="max-w-md w-full text-center space-y-5">
            <a href="/" aria-label="TekSure home" className="inline-block">
              <img
                src="/teksure-logo.svg"
                alt="TekSure"
                width={183}
                height={40}
                className="h-10 w-auto mx-auto block dark:hidden"
              />
              <img
                src="/teksure-logo-white.svg"
                alt=""
                aria-hidden="true"
                width={183}
                height={40}
                className="h-10 w-auto mx-auto hidden dark:block"
              />
            </a>
            <h2 className="text-2xl font-bold">Something went wrong.</h2>
            <p className="text-muted-foreground">
              We encountered an unexpected error. Try again or head home.
            </p>
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center justify-center min-h-[44px] px-5 rounded-xl text-base font-semibold border-2 border-[#E4DFD4] hover:border-[#2A5FCC] hover:text-[#2A5FCC] transition-colors"
              >
                Try again
              </button>
              <button
                onClick={() => (window.location.href = '/')}
                className="inline-flex items-center justify-center min-h-[44px] px-5 rounded-xl text-base font-semibold bg-[#2A5FCC] text-white hover:bg-[#234FB0] transition-colors"
              >
                Go Home
              </button>
            </div>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
