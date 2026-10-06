"use client";

import { createContext, useContext, type ReactNode } from "react";
import { DEFAULT_LOCALE, DICTS, type Locale } from ".";

const LangContext = createContext<Locale>(DEFAULT_LOCALE);

/** layout에서 서버가 읽은 언어를 내려줌. 언어 변경 시 router.refresh()로 다시 내려옴 */
export function I18nProvider({ lang, children }: { lang: Locale; children: ReactNode }) {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
}

/** 클라이언트 컴포넌트용: 현재 언어와 사전 */
export function useI18n() {
  const lang = useContext(LangContext);
  return { lang, t: DICTS[lang] };
}
