// src/utils/i18n.js
import en from '../locales/en.json';
import it from '../locales/it.json';

/**
 * Ritorna il JSON corretto in base al pathname
 * @param {string} pathname - Astro.url.pathname
 * @returns {Object} - traduzioni
 */
export function getTranslations(pathname) {
  return pathname.startsWith("/it") ? it : en;
}

/**
 * Ritorna il codice della lingua corrente
 * @param {string} pathname
 * @returns {string} - "en" o "it"
 */
export function getLocale(pathname) {
  return pathname.startsWith("/it") ? "it" : "en";
}
