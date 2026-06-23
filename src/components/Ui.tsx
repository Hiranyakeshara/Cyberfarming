import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function Badge({ children, tone = "green" }: { children: React.ReactNode; tone?: "green" | "amber" | "red" | "blue" | "neutral" }) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}

export function ProgressBar({ value, label }: { value: number; label?: string }) {
  return (
    <div className="progressWrap">
      {label && <div className="progressLabel"><span>{label}</span><strong>{value}%</strong></div>}
      <div className="progressTrack" aria-label={`${value}% complete`}>
        <span style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
      </div>
    </div>
  );
}

export function PageHeader({ eyebrow, title, description, actions }: { eyebrow?: string; title: string; description?: string; actions?: React.ReactNode }) {
  return (
    <header className="pageHeader">
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
      {actions && <div className="pageActions">{actions}</div>}
    </header>
  );
}

export function EmptyState({ icon, title, text, href, action }: { icon: React.ReactNode; title: string; text: string; href?: string; action?: string }) {
  return (
    <div className="emptyState">
      <div className="emptyIcon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
      {href && action && <Link className="button button-primary" href={href}>{action}<ChevronRight size={16} /></Link>}
    </div>
  );
}
