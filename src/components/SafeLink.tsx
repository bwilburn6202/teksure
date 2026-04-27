import React from 'react'
import { Link, LinkProps } from 'react-router-dom'

type Props = React.PropsWithChildren<{ to: string } & LinkProps>

export function SafeLink({ to, children, ...rest }: Props) {
  const isExternal = /^https?:\/\//.test(to)
  if (isExternal) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    )
  }
  // internal link
  return (
    <Link to={to} {...rest}>
      {children}
    </Link>
  )
}
