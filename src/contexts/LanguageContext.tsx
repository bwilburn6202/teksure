/**
 * LanguageContext — simple English/Spanish i18n for TekSure.
 *
 * Usage:
 *   const { t, lang, setLang } = useLanguage();
 *   <p>{t('hero.title')}</p>
 */

import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react';

export type Language = 'en' | 'es';

type TranslationMap = Record<string, string>;

const translations: Record<Language, TranslationMap> = {
  en: {
    // Nav
    'nav.home':         'Home',
    'nav.guides':       'Guides',
    'nav.tools':        'Tools',
    'nav.quickfixes':   'Quick Fixes',
    'nav.forum':        'Forum',
    'nav.gethelp':      'Get Help',
    'nav.login':        'Log In',
    'nav.signup':       'Sign Up',
    'nav.profile':      'My Profile',
    'nav.logout':       'Log Out',

    // Hero (Index)
    'hero.title':       'Tech Help Made Simple',
    'hero.subtitle':    'Plain-English guides, friendly tools, and real support — built for everyday people.',
    'hero.cta.guides':  'Browse Guides',
    'hero.cta.help':    'Get Help Now',

    // Guides page
    'guides.title':     'Step-by-Step Guides',
    'guides.subtitle':  'Plain-language help for any device, any skill level.',
    'guides.search':    'Search guides…',
    'guides.all':       'All Guides',
    'guides.completed': 'Completed',
    'guides.beginner':  'Beginner',
    'guides.readtime':  'min read',

    // Tools page
    'tools.title':      'Helpful Tools',
    'tools.subtitle':   'Interactive tools to diagnose, protect, and simplify your tech.',

    // Get Help
    'help.title':       'Get Help',
    'help.subtitle':    'Describe your issue and we\'ll match you with the right solution.',
    'help.send':        'Send',

    // Common actions
    'action.back':      'Back',
    'action.next':      'Next',
    'action.done':      'Done',
    'action.save':      'Save',
    'action.cancel':    'Cancel',
    'action.search':    'Search',
    'action.close':     'Close',
    'action.learnmore': 'Learn More',
    'action.bookatech': 'Book a Verified Tech',

    // Footer
    'footer.tagline':   'Tech help built for everyone.',
    'footer.rights':    'All rights reserved.',
  },
  es: {
    // Nav
    'nav.home':         'Inicio',
    'nav.guides':       'Guías',
    'nav.tools':        'Herramientas',
    'nav.quickfixes':   'Soluciones Rápidas',
    'nav.forum':        'Foro',
    'nav.gethelp':      'Obtener Ayuda',
    'nav.login':        'Iniciar Sesión',
    'nav.signup':       'Registrarse',
    'nav.profile':      'Mi Perfil',
    'nav.logout':       'Cerrar Sesión',

    // Hero
    'hero.title':       'Ayuda con la Tecnología Simplificada',
    'hero.subtitle':    'Guías claras, herramientas amigables y soporte real — hecho para todos.',
    'hero.cta.guides':  'Ver Guías',
    'hero.cta.help':    'Obtener Ayuda Ahora',

    // Guides page
    'guides.title':     'Guías Paso a Paso',
    'guides.subtitle':  'Ayuda en lenguaje sencillo para cualquier dispositivo y nivel.',
    'guides.search':    'Buscar guías…',
    'guides.all':       'Todas las Guías',
    'guides.completed': 'Completadas',
    'guides.beginner':  'Principiante',
    'guides.readtime':  'min de lectura',

    // Tools page
    'tools.title':      'Herramientas Útiles',
    'tools.subtitle':   'Herramientas interactivas para diagnosticar, proteger y simplificar tu tecnología.',

    // Get Help
    'help.title':       'Obtener Ayuda',
    'help.subtitle':    'Describe tu problema y te conectaremos con la solución correcta.',
    'help.send':        'Enviar',

    // Common actions
    'action.back':      'Atrás',
    'action.next':      'Siguiente',
    'action.done':      'Listo',
    'action.save':      'Guardar',
    'action.cancel':    'Cancelar',
    'action.search':    'Buscar',
    'action.close':     'Cerrar',
    'action.learnmore': 'Más Información',
    'action.bookatech': 'Contratar un Técnico',

    // Footer
    'footer.tagline':   'Ayuda tecnológica para todos.',
    'footer.rights':    'Todos los derechos reservados.',
  },
};

/* ── context ──────────────────────────────── */

interface LanguageContextValue {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  setLang: () => {},
  t: (k) => k,
});

/* ── provider ─────────────────────────────── */

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en';
    return (localStorage.getItem('teksure_lang') as Language) ?? 'en';
  });

  const setLang = useCallback((l: Language) => {
    if (typeof window !== 'undefined') localStorage.setItem('teksure_lang', l);
    setLangState(l);
  }, []);

  // Keep <html lang> in sync so screen readers, browser typography, and
  // search-engine crawlers see the correct language for the active translation.
  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  const t = useCallback(
    (key: string, fallback?: string): string =>
      translations[lang][key] ?? translations.en[key] ?? fallback ?? key,
    [lang],
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
