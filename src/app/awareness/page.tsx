"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AppShell } from "@/components/AppShell";
import { Badge, PageHeader, ProgressBar } from "@/components/Ui";
import { ArrowRight, Landmark, LockKeyhole, MessageCircleWarning, ReceiptText, Search, ShoppingBasket, Smartphone } from "lucide-react";
import { modules } from "@/lib/data";

const icons = { Landmark, Smartphone, ReceiptText, ShoppingBasket, LockKeyhole, MessageCircleWarning };

export default function AwarenessPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const filtered = useMemo(() => modules.filter((item) => {
    const matchQuery = `${item.title} ${item.category} ${item.description}`.toLowerCase().includes(query.toLowerCase());
    const matchFilter = filter === "All" || (filter === "In progress" && item.progress > 0 && item.progress < 100) || (filter === "Completed" && item.progress === 100) || (filter === "Not started" && item.progress === 0);
    return matchQuery && matchFilter;
  }), [query, filter]);

  return (
    <AppShell role="farmer">
      <PageHeader eyebrow="Learning library" title="Farmer cyber awareness modules" description="Choose a short agriculture-specific lesson. Every module combines a realistic scenario, warning signs, safe actions and a knowledge check." actions={<Link href="/progress" className="button button-secondary button-sm">View progress</Link>} />
      <div className="filterBar">
        <label className="searchBox"><Search size={17} /><input aria-label="Search modules" placeholder="Search topics or threats" value={query} onChange={(e) => setQuery(e.target.value)} /></label>
        <div className="filterButtons">{["All", "In progress", "Completed", "Not started"].map((item) => <button key={item} className={`filterButton ${filter === item ? "active" : ""}`} onClick={() => setFilter(item)}>{item}</button>)}</div>
      </div>
      <div className="moduleGrid">
        {filtered.map((item) => {
          const Icon = icons[item.icon as keyof typeof icons];
          return <article className="card moduleCard" key={item.slug}><div className="moduleIcon"><Icon size={22} /></div><div className="moduleTags"><Badge tone={item.risk === "High" ? "red" : "amber"}>{item.risk} relevance</Badge><Badge tone="neutral">{item.category}</Badge></div><h3>{item.title}</h3><p>{item.description}</p><div className="moduleBottom"><ProgressBar value={item.progress} label={item.progress === 0 ? "Not started" : item.progress === 100 ? "Completed" : "Progress"} /><div className="moduleActions"><span>{item.duration} · {item.difficulty}</span><Link href={`/awareness/${item.slug}`} className="button button-primary button-sm">{item.progress > 0 && item.progress < 100 ? "Continue" : item.progress === 100 ? "Review" : "Open"}<ArrowRight size={14} /></Link></div></div></article>;
        })}
      </div>
    </AppShell>
  );
}
