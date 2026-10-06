import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Noto_Sans, Noto_Sans_KR } from "next/font/google";
import Icon from "./components/Icon";
import { LangMenu, SideNav, TopNav } from "./components/Nav";
import { Button, Card } from "./components/ui";
import { I18nProvider } from "./i18n/client";
import { getI18n } from "./i18n/server";
import "./globals.css";

// 라틴·베트남어는 Noto Sans, 한글은 Noto Sans KR
const latin = Noto_Sans({ subsets: ["latin", "vietnamese"], weight: ["400", "500", "700", "800"] });
const korean = Noto_Sans_KR({ subsets: ["latin"], weight: ["400", "500", "700", "800"] });

export async function generateMetadata(): Promise<Metadata> {
  const { lang, t } = await getI18n();
  return {
    // 배포 도메인 정해지면 NEXT_PUBLIC_SITE_URL 설정 (공유 썸네일 절대경로용)
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
    title: t.meta.title,
    description: t.meta.desc,
    openGraph: { siteName: "GLOCARE", locale: { ko: "ko_KR", vi: "vi_VN", en: "en_US" }[lang], type: "website" },
    twitter: { card: "summary_large_image" },
  };
}

// 헤더 + 왼쪽 사이드바는 모든 페이지 공통. children은 .layout 안의 flex 아이템으로 들어감
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { lang, t } = await getI18n();
  return (
    <html lang={lang}>
      <body style={{ fontFamily: `${latin.style.fontFamily}, ${korean.style.fontFamily}, system-ui, sans-serif` }}>
        <I18nProvider lang={lang}>
          <header className="header">
            <div className="header-in">
              <Link href="/" aria-label={t.nav.homeAria} className="logo"><Image src="/img/logo.png" alt="GLOCARE" width={130} height={30} priority /></Link>
              <TopNav />
              <div className="header-tools">
                <LangMenu />
                <Link href="/notifications" className="ghost bell" aria-label={t.header.bell}><Icon name="bell" /><i /></Link>
                <Link href="/profile" className="ghost">
                  <Image src="/img/avatar.png" alt="" width={40} height={40} className="avatar" />
                  {t.header.hi} <Icon name="down" size={14} width={2} />
                </Link>
              </div>
            </div>
          </header>

          <div className="layout">
            <aside className="left">
              <Card tone="soft" className="greet">
                <p lang="vi">{t.side.hello}</p>
                <p className="name">{t.side.name} <span className="wave" aria-hidden="true">👋</span></p>
                <small>{t.side.sub}</small>
              </Card>
              <SideNav />
              <Card tone="soft" className="help">
                <p>{t.side.helpTitle}</p>
                <small>{t.side.helpSub}</small>
                <div className="help-row">
                  <Button href="/help" variant="white">{t.side.helpCta}</Button>
                  <Image src="/img/help.png" alt="" width={80} height={110} className="float" />
                </div>
              </Card>
            </aside>
            {children}
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
