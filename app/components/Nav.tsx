"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useRef, useTransition } from "react";
import { LANG_COOKIE, LOCALES, LOCALE_LABELS, type Dict, type Locale } from "../i18n";
import { useI18n } from "../i18n/client";
import Icon, { IconName } from "./Icon";

type NavKey = keyof Dict["nav"];

const TOP_NAV: [string, NavKey][] = [
  ["/", "learn"], ["/courses", "courses"], ["/cbt", "cbt"], ["/lectures", "lectures"], ["/jobs", "jobs"],
];

const SIDE_NAV: [string, IconName, NavKey][] = [
  ["/", "home", "myHome"], ["/cbt", "doc", "cbt"], ["/lectures", "play", "lectures"],
  ["/wrong-notes", "note", "wrongNotes"], ["/stats", "chart", "stats"], ["/courses", "book", "courses"],
  ["/jobs", "bag", "jobs"],
];

// "/"는 정확히 일치할 때만, 나머지는 하위 경로까지 활성
const useActive = () => {
  const path = usePathname();
  return (href: string) => (href === "/" ? path === "/" : path.startsWith(href));
};

export function TopNav() {
  const active = useActive();
  const { t } = useI18n();
  return (
    <nav aria-label={t.nav.main} className="top-nav">
      {TOP_NAV.map(([href, key]) => (
        <Link key={href} href={href} aria-current={active(href) ? "page" : undefined}>{t.nav[key]}</Link>
      ))}
    </nav>
  );
}

export function SideNav() {
  const active = useActive();
  const { t } = useI18n();
  return (
    <nav aria-label={t.nav.study} className="side-nav">
      {SIDE_NAV.map(([href, icon, key]) => (
        <Link key={key} href={href} aria-current={active(href) ? "page" : undefined}><Icon name={icon} />{t.nav[key]}</Link>
      ))}
    </nav>
  );
}

/** 언어 선택: 쿠키 저장 후 서버 컴포넌트를 새 언어로 다시 렌더 */
export function LangMenu() {
  const { lang, t } = useI18n();
  const router = useRouter();
  const ref = useRef<HTMLDetailsElement>(null);
  const [pending, startTransition] = useTransition();

  const pick = (k: Locale) => {
    ref.current!.open = false;
    if (k === lang) return;
    document.cookie = `${LANG_COOKIE}=${k}; path=/; max-age=31536000; samesite=lax`;
    startTransition(() => router.refresh());
  };

  return (
    <details className="dropdown" ref={ref} aria-busy={pending}>
      <summary className="ghost" title={t.header.lang}>
        <Icon name="globe" size={20} /> {LOCALE_LABELS[lang]} <Icon name="down" size={14} width={2} />
      </summary>
      <ul className="menu">
        {LOCALES.map((k) => (
          <li key={k}>
            <button type="button" lang={k} aria-current={k === lang} onClick={() => pick(k)}>{LOCALE_LABELS[k]}</button>
          </li>
        ))}
      </ul>
    </details>
  );
}
