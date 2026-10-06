import Image from "next/image";
import type { IconName } from "../components/Icon";
import { Card, ListLink, PageHeader } from "../components/ui";
import { getI18n } from "../i18n/server";

const LINKS: [string, IconName][] = [["/stats", "chart"], ["/wrong-notes", "note"], ["/notifications", "bell"], ["/help", "chat"]];

export default async function Profile() {
  const { t } = await getI18n();
  const p = t.profile;
  return (
    <main className="main">
      <PageHeader title={p.title} backLabel={t.common.back} />
      <Card className="profile">
        <Image src="/img/avatar.png" alt="" width={88} height={88} className="avatar" />
        <div><h2 className="h2">{p.name}</h2><p className="muted">{p.sub}</p></div>
      </Card>
      <Card className="section-card">
        {LINKS.map(([href, icon], i) => <ListLink key={href} href={href} icon={icon} title={p.links[i][0]} desc={p.links[i][1]} />)}
      </Card>
    </main>
  );
}
