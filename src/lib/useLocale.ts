import { createContext, useContext } from "react";
import { type Locale, translations, type LangTranslations } from "./i18n";

export const LocaleContext = createContext<Locale>("en");

export function useLocale(): Locale {
  return useContext(LocaleContext);
}

export function useT(): LangTranslations {
  const locale = useContext(LocaleContext);
  return translations[locale] as LangTranslations;
}
