import { useEffect, useCallback } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

interface GoogleAnalyticsProps {
  measurementId: string;
  searchConsoleVerification?: string;
}

export function useAnalytics() {
  const trackGuideView = useCallback((guideSlug: string, category: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'view_guide', {
        guide_slug: guideSlug,
        guide_category: category,
      });
    }
  }, []);

  const trackCTAClick = useCallback((ctaName: string, location: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click', {
        cta_name: ctaName,
        click_location: location,
      });
    }
  }, []);
  const trackNewsletterSignup = useCallback((source: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'newsletter_signup', {
        signup_source: source,
      });
    }
  }, []);

  return { trackGuideView, trackCTAClick, trackNewsletterSignup };
}

export default function GoogleAnalytics({ measurementId, searchConsoleVerification }: GoogleAnalyticsProps) {
  useEffect(() => {
    if (!measurementId) return;

    // Add Search Console verification meta tag
    if (searchConsoleVerification) {
      const meta = document.createElement('meta');
      meta.name = 'google-site-verification';
      meta.content = searchConsoleVerification;
      document.head.appendChild(meta);
    }

    // Load gtag.js script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      send_page_view: true,
    });

    return () => {
      document.head.removeChild(script);
    };
  }, [measurementId, searchConsoleVerification]);

  return null;
}