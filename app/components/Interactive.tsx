"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LECTURES, type LectureCat } from "../data";
import { LOCALE_TAGS } from "../i18n";
import { useI18n } from "../i18n/client";
import Icon from "./Icon";
import { Card, Ring, SectionHeader } from "./ui";

const TABS: ("all" | LectureCat)[] = ["all", "cbt", "lecture", "guide", "job"];

export function Recommended() {
  const { lang, t } = useI18n();
  const [tab, setTab] = useState<(typeof TABS)[number]>("all");
  const items = tab === "all" ? LECTURES.slice(0, 4) : LECTURES.filter((c) => c.cat === tab);

  return (
    <section aria-labelledby="rec-h" className="stack">
      <SectionHeader id="rec-h" title={t.home.rec} />
      <div role="tablist" aria-label={t.home.recTabs} className="tabs">
        {TABS.map((k) => (
          <button key={k} type="button" role="tab" aria-selected={tab === k} onClick={() => setTab(k)}>{t.tabs[k]}</button>
        ))}
      </div>
      {/* key로 탭 전환 시 등장 애니메이션 재생 */}
      <div className="cards" key={tab}>
        {items.map((c, i) => (
          <Link key={c.id} href={`/lectures/${c.id}`} className="content-card lift" style={{ animationDelay: `${i * 60}ms` }}>
            <span className="thumb"><Image src={c.img} alt="" width={202} height={90} /></span>
            <span className="content-text">
              <strong>{c.title[lang]}</strong>
              <small>{c.meta[lang]}</small>
            </span>
          </Link>
        ))}
        {items.length === 0 && <p className="muted">{t.home.empty}</p>}
      </div>
    </section>
  );
}

export function WeeklyGoals() {
  const { t } = useI18n();
  // ponytail: 로컬 상태라 새로고침하면 초기화됨. 서버 저장은 API 붙일 때 추가.
  const [done, setDone] = useState([true, true, false, false]);
  const pct = Math.round((done.filter(Boolean).length / done.length) * 100);

  return (
    <Card as="section" labelledBy="goal-h" className="goals">
      <h2 id="goal-h" className="h3">{t.home.goals}</h2>
      <div className="row-between">
        <strong>{t.home.goalRate}</strong>
        <Ring pct={pct} size={76} stroke={7} track="#EAF4F2" fontSize={17} />
      </div>
      <ul>
        {t.home.goalItems.map((label, i) => (
          <li key={i}>
            <label className={done[i] ? "done" : undefined}>
              <input type="checkbox" checked={done[i]} onChange={() => setDone(done.map((d, j) => (j === i ? !d : d)))} />
              {label}
            </label>
          </li>
        ))}
      </ul>
    </Card>
  );
}

/** 오늘의 학습 날짜 이동 */
export function DatePager() {
  const { lang, t } = useI18n();
  const [offset, setOffset] = useState(0);
  const date = new Date(Date.now() + offset * 86400000);
  const label = new Intl.DateTimeFormat(LOCALE_TAGS[lang], { dateStyle: "full", timeZone: "Asia/Seoul" }).format(date);
  return (
    <>
      <span className="muted" aria-live="polite">{label}{offset === 0 && ` · ${t.common.today}`}</span>
      <div className="pager">
        <button type="button" className="round-btn sm" aria-label={t.common.prevDate} onClick={() => setOffset(offset - 1)}><Icon name="left" size={16} width={2} /></button>
        <button type="button" className="round-btn sm" aria-label={t.common.nextDate} onClick={() => setOffset(offset + 1)}><Icon name="right" size={16} width={2} /></button>
      </div>
    </>
  );
}
