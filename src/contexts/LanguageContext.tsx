import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { Locale, translations, locales } from '@/config/translations';

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (path: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getInitialLocale(): Locale {
  const saved = localStorage.getItem('locale');
  if (saved === 'en' || saved === 'zh') return saved;
  // If running in test/jsdom, navigator may not be available
  if (typeof navigator === 'undefined') return 'en';
  return navigator.language.startsWith('zh') ? 'zh' : 'en';
}

function lookup(obj: Record<string, unknown>, path: string): string | undefined {
  const keys = path.split('.');
  let current: unknown = obj;
  for (const key of keys) {
    if (current === null || typeof current !== 'object') return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return typeof current === 'string' ? current : undefined;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = useCallback((next: Locale) => {
    if (locales.includes(next)) {
      setLocaleState(next);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('locale', locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const t = useCallback(
    (path: string): string => {
      return lookup(translations[locale] as unknown as Record<string, unknown>, path) ?? path;
    },
    [locale],
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
