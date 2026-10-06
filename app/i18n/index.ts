import { type Locale } from "./config";
import en from "./en";
import ko, { type Dict } from "./ko";
import vi from "./vi";

export * from "./config";
export type { Dict };

export const DICTS: Record<Locale, Dict> = { ko, vi, en };
export const LANG_COOKIE = "lang";
