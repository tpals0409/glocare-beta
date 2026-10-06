import { GUIDES, POSTINGS } from "../data";
import { Card, IconTile, PageHeader } from "../components/ui";
import { FormDemo } from "../components/Widgets";
import { getI18n } from "../i18n/server";

export default async function Jobs() {
  const { lang, t } = await getI18n();
  const j = t.jobs;
  return (
    <main className="main">
      <PageHeader title={j.title} desc={j.desc} backLabel={t.common.back} />
      <nav aria-label={j.menu} className="tabs">
        <a href="#resume">{j.resumeTab}</a>
        <a href="#postings">{j.postingsTab}</a>
        <a href="#guide">{j.guideTab}</a>
      </nav>

      <Card as="section" labelledBy="resume" className="section-card">
        <h2 id="resume" className="h3">{j.resume}</h2>
        <p className="muted">{j.resumeDesc}</p>
        <FormDemo submit={j.submit} success={j.success}>
          <div className="grid-2">
            <label>{j.name}<input name="name" required autoComplete="name" /></label>
            <label>{j.phone}<input name="phone" type="tel" required autoComplete="tel" /></label>
            <label>{j.date}<input name="date" type="date" /></label>
            <label>{j.type}
              <select name="type">{j.types.map((o) => <option key={o}>{o}</option>)}</select>
            </label>
          </div>
          <label>{j.career}<textarea name="career" rows={4} placeholder={j.careerPh} /></label>
        </FormDemo>
      </Card>

      <section aria-labelledby="postings" className="stack">
        <h2 id="postings" className="h2">{j.postings}</h2>
        {POSTINGS.map((p, i) => (
          <Card key={i} hover className="posting">
            <IconTile name="bag" color="#E0742E" />
            <div><strong>{p.org[lang]}</strong><small>{p.place[lang]} · {p.type[lang]}</small></div>
            <span className="tag">{p.pay[lang]}</span>
          </Card>
        ))}
      </section>

      <section aria-labelledby="guide" className="stack">
        <h2 id="guide" className="h2">{j.guide}</h2>
        <div className="grid">
          {GUIDES.map((g, i) => (
            <Card key={i} hover tone="soft" className="course">
              <strong>{g.title[lang]}</strong>
              <small>{g.desc[lang]}</small>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
