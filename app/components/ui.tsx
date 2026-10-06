import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import Icon, { IconName } from "./Icon";

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");

/** 링크형 알약 버튼. arrow=true면 호버 시 화살표가 밀려남 */
export function Button({ href = "#", variant = "primary", icon, arrow, className, children }: {
  href?: string; variant?: "primary" | "white"; icon?: IconName; arrow?: boolean; className?: string; children: ReactNode;
}) {
  return (
    <Link href={href} className={cx("btn", `btn-${variant}`, className)}>
      {icon && <Icon name={icon} size={18} />}
      {children}
      {arrow && <span className="btn-arrow"><Icon name="arrow" size={18} width={2} /></span>}
    </Link>
  );
}

/** 카드 컨테이너. tone으로 배경, hover로 떠오르는 효과 */
export function Card({ as: Tag = "div", tone = "white", hover, className, style, labelledBy, children }: {
  as?: "div" | "section" | "article" | "aside";
  tone?: "white" | "soft" | "green" | "purple";
  hover?: boolean; className?: string; style?: CSSProperties; labelledBy?: string; children: ReactNode;
}) {
  return (
    <Tag className={cx("card", `tone-${tone}`, hover && "lift", className)} style={style} aria-labelledby={labelledBy}>
      {children}
    </Tag>
  );
}

/** 둥근 사각 배경 안의 아이콘 */
export function IconTile({ name, color, size = 48, bg }: { name: IconName; color?: string; size?: number; bg?: string }) {
  return (
    <span className="tile" style={{ width: size, height: size, background: bg }}>
      <Icon name={name} size={Math.round(size * 0.54)} color={color} />
    </span>
  );
}

/** 아이콘 + 제목/설명 + 꺾쇠. 호버 시 꺾쇠가 이동 */
export function ListLink({ href = "#", icon, iconColor = "#D64535", title, desc }: {
  href?: string; icon: IconName; iconColor?: string; title: string; desc: string;
}) {
  return (
    <Link href={href} className="list-link">
      <IconTile name={icon} color={iconColor} size={44} />
      <span className="list-link-text"><strong>{title}</strong><small>{desc}</small></span>
      <span className="chev"><Icon name="right" size={16} width={2} /></span>
    </Link>
  );
}

export function StatTile({ icon, color, label, value, href }: { icon: IconName; color: string; label: string; value: string; href?: string }) {
  const body = <><Icon name={icon} size={26} color={color} width={2} /><small>{label}</small><strong>{value}</strong></>;
  return href ? <Link href={href} className="stat lift">{body}</Link> : <div className="stat">{body}</div>;
}

/** 마운트 시 0에서 차오르는 진행 바 */
export function ProgressBar({ value, label }: { value: number; label: string }) {
  return (
    <div className="progress">
      <div className="progress-track" role="progressbar" aria-label={label} aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
        <div className="progress-fill" style={{ width: `${value}%` }} />
      </div>
      <small>{value}%</small>
    </div>
  );
}

/** 원형 진행률. 마운트 시 차오르고 값이 바뀌면 부드럽게 이동 */
export function Ring({ pct, size, stroke, color = "#2E9E8A", track = "#F3ECEA", fontSize }: {
  pct: number; size: number; stroke: number; color?: string; track?: string; fontSize: number;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div className="ring" style={{ width: size, height: size }}>
      <svg width={size} height={size} aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={stroke} />
        <circle className="ring-fill" cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke}
          strokeLinecap="round" strokeDasharray={c} transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ strokeDashoffset: c * (1 - pct / 100), "--c": c } as CSSProperties} />
      </svg>
      <span style={{ fontSize }}>{pct}%</span>
    </div>
  );
}

/** 섹션 제목 + 오른쪽 액션 영역 */
export function SectionHeader({ id, title, children }: { id: string; title: string; children?: ReactNode }) {
  return (
    <div className="section-head">
      <h2 id={id} className="h2">{title}</h2>
      {children}
    </div>
  );
}

/** 하위 페이지 상단: 뒤로가기 + 제목 + 설명 + 오른쪽 액션 */
export function PageHeader({ title, desc, back = "/", backLabel, children }: { title: string; desc?: string; back?: string; backLabel: string; children?: ReactNode }) {
  return (
    <div className="page-head">
      <Link href={back} className="round-btn sm" aria-label={backLabel}><Icon name="left" size={16} width={2} /></Link>
      <div className="page-head-text">
        <h1>{title}</h1>
        {desc && <p className="muted">{desc}</p>}
      </div>
      {children}
    </div>
  );
}
