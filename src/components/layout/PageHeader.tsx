import type { ReactNode } from 'react';

/**
 * The navy band at the top of a page: an optional eyebrow label, the page
 * title (the page's only <h1>) and a one-line description. Children render
 * under the description, for a search box or buttons.
 *
 * White text on ink is 17.7:1 and the cyan eyebrow is 10:1, so the band is
 * as readable as the white page below it.
 */
export function PageHeader({
  eyebrow,
  title,
  description,
  children,
  width = 'max-w-5xl',
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  width?: string;
}) {
  return (
    <div className="relative overflow-hidden bg-ink text-ink-foreground print:bg-transparent print:text-foreground">
      <div aria-hidden="true" className="bg-grid absolute inset-0 print:hidden" />
      <div className={`relative mx-auto ${width} px-4 py-10 sm:py-14`}>
        {eyebrow && (
          <p className="eyebrow text-signal">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-signal" />
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
        {description && <p className="mt-4 max-w-3xl text-xl text-ink-muted">{description}</p>}
        {children}
      </div>
    </div>
  );
}
