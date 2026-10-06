import { Card, PageHeader } from "../components/ui";
import { FormDemo } from "../components/Widgets";
import { getI18n } from "../i18n/server";

export default async function Help() {
  const { t } = await getI18n();
  const h = t.help;
  return (
    <main className="main">
      <PageHeader title={h.title} desc={h.desc} backLabel={t.common.back} />
      <Card className="section-card">
        <FormDemo submit={h.submit} success={h.success}>
          <label>{h.type}
            <select name="type">{h.types.map((o) => <option key={o}>{o}</option>)}</select>
          </label>
          <label>{h.lang}
            <select name="lang"><option>한국어</option><option>Tiếng Việt</option></select>
          </label>
          <label>{h.body}<textarea name="body" rows={6} required placeholder={h.bodyPh} /></label>
        </FormDemo>
      </Card>
    </main>
  );
}
