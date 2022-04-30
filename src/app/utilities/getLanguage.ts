import { Language } from '../interfaces/language';

export const getInitialLanguege = (): Language => {
  const langStored = localStorage.getItem('lang') as Language | null;

  if (!langStored) {
    return navigator.language === 'es' ? 'es' : 'en';
  }

  return langStored;
};

export const setLanguage = (lang: Language) => {
  localStorage.setItem('lang', lang);
};
