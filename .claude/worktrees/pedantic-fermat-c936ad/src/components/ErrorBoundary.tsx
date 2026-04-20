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
        <div style={{ padding: 20 }}>
          <h2>Something went wrong.</h2>
          <p className="text-muted-foreground">We encountered an unexpected error. Try again or go home.</p>
          <button onClick={() => (window.location.href = '/')} className="mt-2 px-3 py-1 rounded border">Go Home</button>
        </div>
      )
    }
    return this.props.children
  }
}
