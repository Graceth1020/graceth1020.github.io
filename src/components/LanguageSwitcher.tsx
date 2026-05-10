import { useLanguage } from '@/contexts/LanguageContext';
import { locales, localeNames } from '@/config/translations';

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  const toggle = () => {
    const idx = locales.indexOf(locale);
    setLocale(locales[(idx + 1) % locales.length]);
  };

  return (
    <button
      onClick={toggle}
      className="text-muted-foreground hover:text-foreground transition-colors font-mono text-sm tracking-tight"
      aria-label="Switch language"
    >
      {localeNames[locale]}
    </button>
  );
}
