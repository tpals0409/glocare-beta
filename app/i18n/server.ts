import { cookies } from "next/headers";
import { DEFAULT_LOCALE, DICTS, LANG_COOKIE, isLocale } from ".";

/** 서버 컴포넌트용: 쿠키의 언어와 사전 */
export async function getI18n() {
  const v = (await cookies()).get(LANG_COOKIE)?.value;
  const lang = isLocale(v) ? v : DEFAULT_LOCALE;
  return { lang, t: DICTS[lang] };
}
