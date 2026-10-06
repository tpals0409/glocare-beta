"use client";

import Image from "next/image";
import { useState, type FormEvent, type ReactNode } from "react";
import { QUESTIONS } from "../data";
import { useI18n } from "../i18n/client";
import Icon from "./Icon";
import { Button, Card, ProgressBar } from "./ui";

/** CBT 문제풀이: 선택 → 정답 확인 → 다음, 끝나면 결과 */
export function Quiz() {
  const { lang, t } = useI18n();
  const c = t.cbt;
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const n = QUESTIONS.length;

  if (i === n) {
    const pct = Math.round((score / n) * 100);
    return (
      <Card className="quiz quiz-result">
        <p className="eyebrow">{c.resultLabel}</p>
        <h2>{c.summary(n, score)}</h2>
        <p className="big">{c.score(pct)}</p>
        <p className="muted">{pct >= 60 ? c.pass : c.fail}</p>
        <div className="row-gap">
          <button type="button" className="btn btn-primary" onClick={() => { setI(0); setScore(0); setPicked(null); }}>{c.retry}</button>
          <Button href="/wrong-notes" variant="white" arrow>{c.toWrong}</Button>
        </div>
      </Card>
    );
  }

  const q = QUESTIONS[i];
  const checked = picked !== null;
  return (
    <Card className="quiz" key={i}>
      <div className="row-between">
        <p className="eyebrow">{c.count(i + 1, n)}</p>
        <small>{c.correctCount(score)}</small>
      </div>
      <ProgressBar value={Math.round((i / n) * 100)} label={c.progress} />
      <h2>{q.q[lang]}</h2>
      <div className="options" role="radiogroup" aria-label={c.options}>
        {q.options[lang].map((o, k) => {
          const state = !checked ? "" : k === q.answer ? "correct" : k === picked ? "wrong" : "";
          return (
            <button key={k} type="button" role="radio" aria-checked={picked === k} disabled={checked} className={`option ${state}`}
              onClick={() => { setPicked(k); if (k === q.answer) setScore(score + 1); }}>
              <span className="option-no">{k + 1}</span>{o}
            </button>
          );
        })}
      </div>
      {checked && (
        <div className={`explain ${picked === q.answer ? "ok" : "no"}`} role="status">
          <strong>{picked === q.answer ? c.correct : c.wrong}</strong>
          <p>{q.explain[lang]}</p>
        </div>
      )}
      <div className="row-end">
        <button type="button" className="btn btn-primary" disabled={!checked} onClick={() => { setI(i + 1); setPicked(null); }}>
          {i + 1 === n ? c.result : c.next} <Icon name="arrow" size={18} width={2} />
        </button>
      </div>
    </Card>
  );
}

/** 강의 플레이어 프로토타입: 재생/일시정지만 흉내 */
export function Player({ img, title }: { img: string; title: string }) {
  const { t } = useI18n();
  const [playing, setPlaying] = useState(false);
  return (
    <div className={`player ${playing ? "playing" : ""}`}>
      <Image src={img} alt="" width={808} height={360} />
      <button type="button" className="player-btn" aria-label={playing ? t.lectures.pause : t.lectures.play(title)} onClick={() => setPlaying(!playing)}>
        {playing ? <span className="pause" /> : <Icon name="play" size={34} color="#fff" />}
      </button>
      <div className="player-bar"><div /></div>
    </div>
  );
}

/** 제출하면 완료 메시지를 보여주는 폼 래퍼 (서버 전송 없음) */
export function FormDemo({ children, submit, success }: { children: ReactNode; submit: string; success: string }) {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => { e.preventDefault(); setSent(true); };
  if (sent) {
    return (
      <div className="success" role="status">
        <Icon name="check" size={40} color="#1F8F6A" width={2} />
        <p>{success}</p>
        <button type="button" className="btn btn-white" onClick={() => setSent(false)}>{t.common.retryForm}</button>
      </div>
    );
  }
  return (
    <form className="form" onSubmit={onSubmit}>
      {children}
      <button type="submit" className="btn btn-primary">{submit}</button>
    </form>
  );
}
