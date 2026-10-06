import Link from "next/link";
import { COURSES } from "../data";
import { Card, PageHeader, ProgressBar } from "../components/ui";
import { getI18n } from "../i18n/server";

export default async function Courses() {
  const { lang, t } = await getI18n();
  const c = t.courses;
  return (
    <main className="main">
      <PageHeader title={c.title} desc={c.desc} backLabel={t.common.back} />
      <div className="grid">
        {COURSES.map((x, i) => (
          <Link key={x.id} href={`/courses/${x.id}`} className="card tone-white lift course" style={{ animationDelay: `${i * 50}ms` }}>
            <span className="eyebrow">{x.progress === 100 ? c.done : x.progress > 0 ? c.doing : c.todo} · {c.chapters(x.chapters[lang].length)}</span>
            <strong>{x.title[lang]}</strong>
            <small>{x.desc[lang]}</small>
            <ProgressBar value={x.progress} label={`${x.title[lang]} ${t.home.progress}`} />
          </Link>
        ))}
      </div>
      <Card tone="soft" className="note-card">{c.note}</Card>
    </main>
  );
}
