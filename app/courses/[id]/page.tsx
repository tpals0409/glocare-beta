import Link from "next/link";
import { notFound } from "next/navigation";
import { COURSES } from "../../data";
import Icon from "../../components/Icon";
import { Button, Card, PageHeader, ProgressBar } from "../../components/ui";
import { getI18n } from "../../i18n/server";

export default async function Course({ params, searchParams }: {
  params: Promise<{ id: string }>; searchParams: Promise<{ ch?: string }>;
}) {
  const { id } = await params;
  const course = COURSES.find((c) => c.id === id);
  if (!course) notFound();
  const { lang, t } = await getI18n();
  const c = t.courses;
  const chapters = course.chapters[lang];
  const ch = Math.min(Number((await searchParams).ch ?? 0) || 0, chapters.length - 1);
  const last = ch === chapters.length - 1;

  return (
    <main className="main">
      <PageHeader title={course.title[lang]} desc={course.desc[lang]} back="/courses" backLabel={t.common.back}>
        <div style={{ minWidth: 200 }}><ProgressBar value={course.progress} label={c.progress} /></div>
      </PageHeader>
      <div className="split">
        <Card as="article" className="lesson-body" key={ch}>
          <p className="eyebrow">{c.chapterNo(ch + 1)}</p>
          <h2>{chapters[ch]}</h2>
          <div className="placeholder">{c.placeholder}</div>
          <div className="row-between">
            {ch > 0 ? <Button href={`?ch=${ch - 1}`} variant="white">{c.prev}</Button> : <span />}
            {last ? <Button href="/cbt" arrow>{c.quiz}</Button> : <Button href={`?ch=${ch + 1}`} arrow>{c.next}</Button>}
          </div>
        </Card>
        <Card as="aside" className="chapters">
          <h2 className="h3">{c.list}</h2>
          <ol>
            {chapters.map((title, i) => (
              <li key={i}>
                <Link href={`?ch=${i}`} aria-current={i === ch ? "step" : undefined}>
                  <span className="ch-no">{i < ch ? <Icon name="check" size={18} color="#1F8F6A" width={2} /> : i + 1}</span>{title}
                </Link>
              </li>
            ))}
          </ol>
        </Card>
      </div>
    </main>
  );
}
