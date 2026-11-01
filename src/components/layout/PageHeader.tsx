import type { ReactNode } from 'react';

/**
 * The top of a page, set like a chapter opening in a printed manual: a small
 * label, a large serif title (the page's only <h1>), one line of description,
 * and a heavy rule underneath. Children render under the description, for a
 * search box or buttons.
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
    <div className={`mx-auto ${width} px-4 pt-10 sm:pt-14`}>
      <div className="border-b-2 border-foreground pb-8">
        {eyebrow && <p className="flex items-center gap-2 text-base font-bold text-muted-foreground">{eyebrow}</p>}
        <h1 className="mt-2 font-display text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
        {description && <p className="mt-4 max-w-3xl text-xl text-muted-foreground">{description}</p>}
        {children}
      </div>
    </div>
  );
}
