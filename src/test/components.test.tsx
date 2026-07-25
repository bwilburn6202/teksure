import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BackToTop } from '@/components/BackToTop';
import { ShareGuideButton } from '@/components/ShareGuideButton';
import { ReportBrokenLink } from '@/components/ReportBrokenLink';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { CookieConsent } from '@/components/CookieConsent';

describe('BackToTop', () => {
  it('renders nothing initially (scrollY = 0)', () => {
    const { container } = render(<BackToTop />);
    expect(container.querySelector('button')).toBeNull();
  });

  it('shows button after scroll past threshold', () => {
    render(<BackToTop />);
    // Simulate scroll
    Object.defineProperty(window, 'scrollY', { value: 500, writable: true });
    fireEvent.scroll(window);
    expect(screen.getByRole('button', { name: /back to top/i })).toBeInTheDocument();
  });
});

describe('ShareGuideButton', () => {
  it('renders share button', () => {
    render(
      <ShareGuideButton title="Test Guide" url="/guides/test" />
    );
    expect(screen.getByRole('button', { name: /share/i })).toBeInTheDocument();
  });

  it('button contains Share text', () => {
    render(
      <ShareGuideButton title="Test Guide" url="/guides/test" />
    );
    expect(screen.getByText('Share')).toBeInTheDocument();
  });
});

describe('ReportBrokenLink', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('shows report button initially', () => {
    render(
      <ReportBrokenLink guideSlug="test-guide" guideTitle="Test Guide" />
    );
    expect(screen.getByText('Report Broken Link')).toBeInTheDocument();
  });

  it('changes text to Reported after click', () => {
    render(
      <ReportBrokenLink guideSlug="test-guide" guideTitle="Test Guide" />
    );
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Reported')).toBeInTheDocument();
  });

  it('disables button after reporting', () => {
    render(
      <ReportBrokenLink guideSlug="test-guide" guideTitle="Test Guide" />
    );
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('button')).toBeDisabled();
  });
});

describe('PageBreadcrumb', () => {
  it('renders Home as first breadcrumb', () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <PageBreadcrumb segments={[{ label: 'Guides', href: '/guides' }, { label: 'Test Guide' }]} />
        </MemoryRouter>
      </HelmetProvider>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('renders correct breadcrumb trail', () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <PageBreadcrumb segments={[{ label: 'Guides', href: '/guides' }, { label: 'My Guide' }]} />
        </MemoryRouter>
      </HelmetProvider>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Guides')).toBeInTheDocument();
    expect(screen.getByText('My Guide')).toBeInTheDocument();
  });

  it('renders last segment as current page (not a link)', () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <PageBreadcrumb segments={[{ label: 'Current Page' }]} />
        </MemoryRouter>
      </HelmetProvider>
    );
    // The last segment should not be a link
    const currentPage = screen.getByText('Current Page');
    expect(currentPage.closest('a')).toBeNull();
  });
});

describe('CookieConsent', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('shows when no consent in localStorage', () => {
    render(<MemoryRouter><CookieConsent /></MemoryRouter>);
    expect(screen.getByRole('dialog', { name: /cookie consent/i })).toBeInTheDocument();
  });

  it('hides when consent already given', () => {
    localStorage.setItem('teksure-cookie-consent', 'accepted');
    const { container } = render(<MemoryRouter><CookieConsent /></MemoryRouter>);
    expect(container.innerHTML).toBe('');
  });

  it('hides after clicking Accept', () => {
    render(<MemoryRouter><CookieConsent /></MemoryRouter>);
    fireEvent.click(screen.getByText('Accept'));
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('stores consent in localStorage after accepting', () => {
    render(<MemoryRouter><CookieConsent /></MemoryRouter>);
    fireEvent.click(screen.getByText('Accept'));
    expect(localStorage.getItem('teksure-cookie-consent')).toBe('accepted');
  });
});
