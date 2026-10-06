// 인라인 스트로크 아이콘. 새 아이콘은 paths에 한 줄 추가.
const paths = {
  globe: "M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0",
  down: "m6 9 6 6 6-6",
  left: "m15 6-6 6 6 6",
  right: "m9 6 6 6-6 6",
  arrow: "M5 12h14M13 6l6 6-6 6",
  bell: "M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15zM10 20a2 2 0 0 0 4 0",
  home: "M3 11 12 4l9 7M5 10v10h14V10M10 20v-5h4v5",
  doc: "M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM9 8h6M9 12h6M9 16h4",
  play: "M6 4h12a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm4 5 5 3-5 3z",
  note: "M6 3h9l4 4v14H6zM9 11h7M9 15h7",
  chart: "M5 20v-5M10 20v-9M15 20v-6M20 20V5",
  book: "M3 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H3zM21 5h-6a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h7z",
  bag: "M5 7h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zM9 7V5h6v2M3 13h18",
  chat: "M4 5h16v11H9l-5 4zM9 10.5h.01M12 10.5h.01M15 10.5h.01",
  target: "M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 4 7-7",
  check: "M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18zM8 12l3 3 5-6",
  clock: "M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18zM12 7v5l3 2",
  bars: "M6 19v-5M12 19V9M18 19V5",
  calendar: "M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM3 10h18M8 3v4M16 3v4M8 14h2M14 14h2M8 17h2",
  clipboard: "M7 4h10a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM9 4V3h6v1M9 13l2 2 4-4",
  monitor: "M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm5 4 5 2.5-5 2.5zM8 21h8",
  edit: "M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm2 11 1-3 5-5 2 2-5 5z",
};

export type IconName = keyof typeof paths;

export default function Icon({ name, size = 22, color = "currentColor", width = 1.8 }: {
  name: IconName; size?: number; color?: string; width?: number;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ color }} strokeWidth={width}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}
