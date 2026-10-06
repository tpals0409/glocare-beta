import { PageHeader } from "../components/ui";
import { Quiz } from "../components/Widgets";
import { getI18n } from "../i18n/server";

export default async function Cbt() {
  const { t } = await getI18n();
  return (
    <main className="main">
      <PageHeader title={t.cbt.title} desc={t.cbt.desc} backLabel={t.common.back} />
      <Quiz />
    </main>
  );
}
