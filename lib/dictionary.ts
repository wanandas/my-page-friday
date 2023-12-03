import { Locale } from '@/i18n.config';
import 'server-only';

const dictionaries = {
  en: () => import('@/src/dictionaries/en.json').then(module => module.default),
  th: () => import('@/src/dictionaries/th.json').then(module => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();

export type LngParam = {
  params: {
    lng: Locale;
  };
};
