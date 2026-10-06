import { NOTIFICATIONS } from "../data";
import Icon from "../components/Icon";
import { Card, PageHeader } from "../components/ui";
import { getI18n } from "../i18n/server";

export default async function Notifications() {
  const { lang, t } = await getI18n();
  return (
    <main className="main">
      <PageHeader title={t.notifications.title} desc={t.notifications.unread(NOTIFICATIONS.filter((n) => n.unread).length)} backLabel={t.common.back} />
      <Card className="list-card">
        <ul>
          {NOTIFICATIONS.map((n, i) => (
            <li key={i} className={n.unread ? "unread" : undefined}>
              <Icon name="bell" size={20} color={n.unread ? "#D64535" : "#9A8F8D"} />
              <span>{n.title[lang]}</span>
              <small>{n.time[lang]}</small>
            </li>
          ))}
        </ul>
      </Card>
    </main>
  );
}
