import { Button, Card, PageHeader, Ring } from "../components/ui";
import { getI18n } from "../i18n/server";

export default async function Exam() {
  const { t } = await getI18n();
  const e = t.exam;
  return (
    <main className="main">
      <PageHeader title={e.title} desc={e.desc} backLabel={t.common.back} />
      <div className="split">
        <Card tone="soft" className="dday-big">
          <p className="eyebrow">{e.until}</p>
          <p className="big">D-42</p>
          <p className="muted">{e.info}</p>
          <Button href="/cbt" arrow>{e.mock}</Button>
        </Card>
        <Card className="chart-card">
          <h2 className="h3">{e.readiness}</h2>
          <div className="center"><Ring pct={68} size={140} stroke={12} fontSize={30} /></div>
          <p className="muted center-text">{e.readinessMsg}</p>
        </Card>
      </div>
      <Card className="section-card">
        <h2 className="h3">{e.guide}</h2>
        <ul className="checklist">{e.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
        <small>{e.note}</small>
      </Card>
    </main>
  );
}
