import { QUESTIONS, WRONG_NOTES } from "../data";
import { Button, PageHeader } from "../components/ui";
import { LOCALE_TAGS } from "../i18n";
import { getI18n } from "../i18n/server";

export default async function WrongNotes() {
  const { lang, t } = await getI18n();
  const w = t.wrong;
  const fmt = new Intl.DateTimeFormat(LOCALE_TAGS[lang], { month: "long", day: "numeric", timeZone: "Asia/Seoul" });
  return (
    <main className="main">
      <PageHeader title={w.title} desc={w.desc(WRONG_NOTES.length)} backLabel={t.common.back}>
        <Button href="/cbt" arrow>{w.retry}</Button>
      </PageHeader>
      <div className="stack">
        {WRONG_NOTES.map(({ qi, picked, date }) => {
          const q = QUESTIONS[qi];
          return (
            <details key={qi} className="card tone-white note">
              <summary>
                <span className="tag">{fmt.format(new Date(date))}</span>
                <strong>{q.q[lang]}</strong>
              </summary>
              <div className="note-body">
                <p><span className="tag no">{w.mine}</span> {q.options[lang][picked]}</p>
                <p><span className="tag ok">{w.answer}</span> {q.options[lang][q.answer]}</p>
                <p className="muted">{q.explain[lang]}</p>
              </div>
            </details>
          );
        })}
      </div>
    </main>
  );
}
