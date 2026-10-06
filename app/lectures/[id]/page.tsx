import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LECTURES } from "../../data";
import { Card, PageHeader } from "../../components/ui";
import { Player } from "../../components/Widgets";
import { getI18n } from "../../i18n/server";

export default async function Lecture({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const lecture = LECTURES.find((l) => l.id === id);
  if (!lecture) notFound();
  const { lang, t } = await getI18n();
  const others = LECTURES.filter((l) => l.id !== id);

  return (
    <main className="main">
      <PageHeader title={lecture.title[lang]} desc={`${lecture.meta[lang]} · ${lecture.duration}`} back="/lectures" backLabel={t.common.back} />
      <div className="split">
        <div className="stack">
          <Player img={lecture.img} title={lecture.title[lang]} />
          <Card className="lesson-body">
            <h2 className="h3">{t.lectures.about}</h2>
            <div className="placeholder">{t.lectures.placeholder}</div>
          </Card>
        </div>
        <Card as="aside" className="chapters">
          <h2 className="h3">{t.lectures.next}</h2>
          <ul className="mini-list">
            {others.map((l) => (
              <li key={l.id}>
                <Link href={`/lectures/${l.id}`} className="mini-lecture">
                  <span className="thumb"><Image src={l.img} alt="" width={96} height={43} /></span>
                  <span><strong>{l.title[lang]}</strong><small>{l.duration}</small></span>
                </Link>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </main>
  );
}
