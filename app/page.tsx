import Image from "next/image";
import Link from "next/link";
import Icon, { IconName } from "./components/Icon";
import { DatePager, Recommended, WeeklyGoals } from "./components/Interactive";
import { Button, Card, IconTile, ListLink, ProgressBar, Ring, SectionHeader, StatTile } from "./components/ui";
import { COURSES } from "./data";
import { getI18n } from "./i18n/server";

const JOB_LINKS: [string, IconName][] = [["/jobs#resume", "edit"], ["/jobs#postings", "bag"], ["/jobs#guide", "book"]];

export default async function Page() {
  const { lang, t } = await getI18n();
  const h = t.home;
  const s = t.stats;
  const course = COURSES[0];
  const stats: [IconName, string, string, string][] = [
    ["target", "#D64535", s.days, s.daysV],
    ["check", "#1F8F6A", s.solved, s.solvedV],
    ["bars", "#4A6FD8", s.accuracy, "76%"],
    ["clock", "#4A6FD8", s.time, s.timeV],
  ];

  return (
    <>
      <main className="main">
        <section className="hero">
          <div className="hero-text">
            <h1>{h.heroTitle1}<br />{h.heroTitle2}</h1>
            <p lang={h.heroSubLang}>{h.heroSub}</p>
            <Button href="/courses/1" arrow className="btn-lg">{h.heroCta}</Button>
          </div>
          <div className="hero-img">
            <Image src="/img/hero.jpg" alt={h.heroAlt} width={940} height={487} priority />
          </div>
        </section>

        <Card as="section" labelledBy="status-h" className="status">
          <h2 id="status-h" className="h3">{h.status}</h2>
          <div className="status-main">
            <Ring pct={68} size={96} stroke={8} fontSize={22} />
            <Link href="/exam" className="status-link">
              <span><strong>{h.toExam}</strong><span className="muted">{h.doingWell}</span></span>
              <span className="chev"><Icon name="right" size={18} width={2} /></span>
            </Link>
          </div>
          <div className="stats">
            {stats.map(([icon, color, label, value]) => <StatTile key={label} href="/stats" icon={icon} color={color} label={label} value={value} />)}
          </div>
        </Card>

        <section aria-labelledby="today-h" className="stack">
          <SectionHeader id="today-h" title={h.today}>
            <DatePager />
            <Link href="/courses" className="see-all">{t.common.seeAll}</Link>
          </SectionHeader>
          <div className="today">
            <Card as="article" tone="soft" hover className="lesson">
              <span className="thumb lesson-thumb"><Image src="/img/elder.png" alt="" width={142} height={142} /></span>
              <div>
                <span className="badge">{h.inProgress}</span>
                <h3>{course.title[lang]}</h3>
                <p className="muted">1. {course.chapters[lang][0]}</p>
                <ProgressBar value={course.progress} label={h.progress} />
                <Button href="/courses/1" icon="play">{h.continue}</Button>
              </div>
            </Card>
            <Card as="article" tone="green" hover className="mini">
              <div className="mini-head">
                <IconTile name="clipboard" color="#1C7A55" size={40} bg="#CDEBDA" />
                <div><h3>{t.nav.cbt}</h3><p>{h.cbtSub}</p></div>
              </div>
              <Button href="/cbt" variant="white" arrow>{h.solveNow}</Button>
            </Card>
            <Card as="article" tone="purple" hover className="mini">
              <div className="mini-head">
                <IconTile name="monitor" color="#5446C4" size={40} bg="#DCD8F7" />
                <div><h3>{h.resumeLecture}</h3><p>{h.resumeLectureSub}</p></div>
              </div>
              <Button href="/lectures/3" variant="white" arrow>{h.resume}</Button>
            </Card>
          </div>
        </section>

        <Recommended />
      </main>

      <aside className="right">
        <Link href="/exam" className="card tone-soft lift dday">
          <IconTile name="calendar" color="#D64535" size={52} bg="#FFFFFF" />
          <span><strong>{h.dday}</strong><small>{h.ddaySub}</small></span>
          <span className="chev"><Icon name="right" size={18} color="#C63D30" width={2} /></span>
        </Link>

        <WeeklyGoals />

        <Card as="section" labelledBy="job-h" className="jobs">
          <div className="jobs-head">
            <IconTile name="bag" color="#E0742E" />
            <div><h2 id="job-h" className="h3">{h.jobs}</h2><p className="muted">{h.jobsSub}</p></div>
          </div>
          {JOB_LINKS.map(([href, icon], i) => (
            <ListLink key={href} href={href} icon={icon} title={h.jobLinks[i][0]} desc={h.jobLinks[i][1]} />
          ))}
          <Image src="/img/bottom.png" alt={h.bottomAlt} width={280} height={170} className="jobs-img" />
        </Card>
      </aside>
    </>
  );
}
