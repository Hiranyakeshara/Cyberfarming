"use client";

import { useMemo, useState } from "react";
import { AppShell } from "@/components/AppShell";
import { Badge, PageHeader } from "@/components/Ui";
import { Download, Eye, Search } from "lucide-react";
import { reportRows } from "@/lib/data";

export default function AdminReportsPage() {
  const [query, setQuery] = useState("");
  const rows = useMemo(() => reportRows.filter((row) => `${row.id} ${row.source} ${row.sender} ${row.category} ${row.status}`.toLowerCase().includes(query.toLowerCase())), [query]);
  return (
    <AppShell role="admin">
      <PageHeader eyebrow="Suspicious-message review" title="Participant reports" description="Review dummy reports for learning-content development and evaluation. Production submissions should remove or mask unnecessary personal information." actions={<button className="button button-secondary button-sm"><Download size={15} /> Export anonymised data</button>} />
      <section className="card tableCard"><div className="tableTools"><label className="searchBox"><Search size={16} /><input placeholder="Search reports" value={query} onChange={(e) => setQuery(e.target.value)} /></label><Badge tone="amber">1 under review</Badge></div><div className="tableWrap"><table><thead><tr><th>Report</th><th>Source</th><th>Sender</th><th>Category</th><th>Date</th><th>Status</th><th>Action</th></tr></thead><tbody>{rows.map((row) => <tr key={row.id}><td className="tableMain"><strong>{row.id}</strong><span>Participant submission</span></td><td>{row.source}</td><td>{row.sender}</td><td>{row.category}</td><td>{row.date}</td><td><Badge tone={row.status === "Confirmed scam" ? "red" : row.status === "Safe" ? "green" : "amber"}>{row.status}</Badge></td><td><button className="button button-secondary button-sm"><Eye size={14} /> Review</button></td></tr>)}</tbody></table></div></section>
    </AppShell>
  );
}
