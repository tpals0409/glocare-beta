import Image from "next/image";
import Link from "next/link";
import { LECTURES } from "../data";
import { PageHeader } from "../components/ui";
import { getI18n } from "../i18n/server";

export default async function Lectures() {
  const { lang, t } = await getI18n();
  return (
    <main className="main">
      <PageHeader title={t.lectures.title} desc={t.lectures.desc} backLabel={t.common.back} />
      <div className="cards">
        {LECTURES.map((l, i) => (
          <Link key={l.id} href={`/lectures/${l.id}`} className="content-card lift" style={{ animationDelay: `${i * 50}ms` }}>
            <span className="thumb"><Image src={l.img} alt="" width={202} height={90} /></span>
            <span className="content-text">
              <strong>{l.title[lang]}</strong>
              <small>{l.meta[lang]} · {l.duration}</small>
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
