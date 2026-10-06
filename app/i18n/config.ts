export const LOCALES = ["ko", "vi", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "ko";

export const LOCALE_LABELS: Record<Locale, string> = { ko: "한국어", vi: "Tiếng Việt", en: "English" };
export const LOCALE_TAGS: Record<Locale, string> = { ko: "ko-KR", vi: "vi-VN", en: "en-US" };

export const isLocale = (v: unknown): v is Locale => LOCALES.includes(v as Locale);

/** 데이터용 다국어 문자열 */
export type L = Record<Locale, string>;
export type LList = Record<Locale, string[]>;
