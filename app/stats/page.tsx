import { COURSES, WEEKLY_MINUTES } from "../data";
import { Card, PageHeader, ProgressBar, Ring, StatTile } from "../components/ui";
import { getI18n } from "../i18n/server";

export default async function Stats() {
  const { lang, t } = await getI18n();
  const p = t.statsPage;
  const s = t.stats;
  const max = Math.max(...WEEKLY_MINUTES);
  const total = WEEKLY_MINUTES.reduce((a, b) => a + b, 0);

  return (
    <main className="main">
      <PageHeader title={p.title} desc={p.desc} backLabel={t.common.back} />
      <div className="stats">
        <StatTile icon="target" color="var(--primary)" label={s.days} value={s.daysV} />
        <StatTile icon="check" color="var(--positive)" label={s.solved} value={s.solvedV} />
        <StatTile icon="bars" color="var(--data-blue)" label={s.accuracy} value="76%" />
        <StatTile icon="clock" color="var(--data-blue)" label={s.time} value={s.timeV} />
      </div>
      <div className="split">
        <Card as="section" className="chart-card">
          <div className="row-between">
            <h2 className="h3">{p.weekly}</h2>
            <small>{p.total(total)}</small>
          </div>
          <div className="bar-chart" role="img" aria-label={WEEKLY_MINUTES.map((m, i) => `${p.days[i]} ${p.minutes(m)}`).join(", ")}>
            {WEEKLY_MINUTES.map((m, i) => (
              <div key={i} className="bar-col">
                <small>{m}</small>
                <div className="bar" style={{ height: `${(m / max) * 100}%`, animationDelay: `${i * 60}ms` }} />
                <span>{p.days[i]}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card as="section" className="chart-card">
          <h2 className="h3">{p.bySubject}</h2>
          <div className="center"><Ring pct={68} size={120} stroke={10} fontSize={26} /></div>
          {COURSES.slice(0, 4).map((c) => (
            <div key={c.id}><small>{c.title[lang]}</small><ProgressBar value={c.progress} label={c.title[lang]} /></div>
          ))}
        </Card>
      </div>
    </main>
  );
}
