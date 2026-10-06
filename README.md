# GLOCARE

요양보호사 자격 학습 플랫폼 프로토타입 (Next.js App Router).

```bash
npm install
npm run dev   # http://localhost:3000
```

## 구조

- `app/` — 페이지(라우트별 폴더), `layout.tsx`에 공통 헤더·사이드바
- `app/components/` — 공통 컴포넌트(`ui.tsx`), 내비(`Nav.tsx`), 클라이언트 위젯
- `app/i18n/` — 한국어·베트남어·영어 사전. `ko.ts`가 기준 타입, 언어는 `lang` 쿠키에 저장
- `app/data.ts` — 샘플 데이터(다국어). API 연결 시 교체

디자인 기준(색 토큰·타이포·컴포넌트 규칙)은 [DESIGN.md](DESIGN.md).

## 배포

공유 썸네일 절대경로용으로 `NEXT_PUBLIC_SITE_URL`에 배포 도메인을 설정하세요.
