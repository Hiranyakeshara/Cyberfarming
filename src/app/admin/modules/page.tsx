"use client";

import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { Badge, PageHeader, ProgressBar } from "@/components/Ui";
import { BookOpenCheck, Edit3, Eye, MoreHorizontal, Plus, Search } from "lucide-react";
import { modules } from "@/lib/data";

export default function ModulesAdminPage() {
  const [query, setQuery] = useState("");
  const visible = modules.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));
  return (
    <AppShell role="admin">
      <PageHeader eyebrow="Content management" title="Awareness modules" description="Manage the agriculture-specific lesson library, scenario coverage and publication status." actions={<button className="button button-primary button-sm"><Plus size={15} /> New module</button>} />
      <div className="filterBar"><label className="searchBox"><Search size={16} /><input placeholder="Search modules" value={query} onChange={(e) => setQuery(e.target.value)} /></label><div className="filterButtons"><button className="filterButton active">All modules</button><button className="filterButton">Published</button><button className="filterButton">Drafts</button></div></div>
      <div className="moduleGrid">{visible.map((item, index) => <article className="card moduleCard" key={item.slug}><div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}><span className="moduleIcon"><BookOpenCheck size={22} /></span><button className="iconButton" style={{ width: 36, height: 36 }}><MoreHorizontal size={17} /></button></div><div className="moduleTags"><Badge tone={index === 5 ? "amber" : "green"}>{index === 5 ? "Draft" : "Published"}</Badge><Badge tone="neutral">{item.category}</Badge></div><h3>{item.title}</h3><p>{item.description}</p><div className="moduleBottom"><ProgressBar value={[92, 78, 64, 58, 51, 0][index]} label="Average completion" /><div className="moduleActions"><span>{item.duration} · {item.difficulty}</span><div className="tableActions"><button className="button button-secondary button-sm"><Eye size={14} /></button><button className="button button-primary button-sm"><Edit3 size={14} /> Edit</button></div></div></div></article>)}</div>
    </AppShell>
  );
}
