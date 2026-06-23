"use client";

import { useMemo, useState } from "react";
import { AppShell } from "@/components/AppShell";
import { Badge, PageHeader } from "@/components/Ui";
import { Download, Eye, Search, UserPlus } from "lucide-react";
import { farmerRows } from "@/lib/data";

export default function FarmersPage() {
  const [query, setQuery] = useState("");
  const rows = useMemo(() => farmerRows.filter((row) => `${row.name} ${row.role} ${row.district}`.toLowerCase().includes(query.toLowerCase())), [query]);
  return (
    <AppShell role="admin">
      <PageHeader eyebrow="Participant management" title="Farmers and agricultural users" description="Review dummy participant context, module completion and awareness scores. Personal data should be minimised in the production research system." actions={<><button className="button button-secondary button-sm"><Download size={15} /> Export CSV</button><button className="button button-primary button-sm"><UserPlus size={15} /> Add participant</button></>} />
      <section className="card tableCard"><div className="tableTools"><label className="searchBox"><Search size={16} /><input placeholder="Search participants" value={query} onChange={(e) => setQuery(e.target.value)} /></label><Badge tone="neutral">{rows.length} visible records</Badge></div><div className="tableWrap"><table><thead><tr><th>Participant</th><th>District</th><th>Modules</th><th>Awareness score</th><th>Status</th><th>Action</th></tr></thead><tbody>{rows.map((row) => <tr key={row.name}><td className="tableMain"><strong>{row.name}</strong><span>{row.role}</span></td><td>{row.district}</td><td>{row.modules}</td><td>{row.score}</td><td><Badge tone={row.status === "Completed" ? "green" : row.status === "Needs support" ? "amber" : "blue"}>{row.status}</Badge></td><td><button className="button button-secondary button-sm"><Eye size={14} /> View</button></td></tr>)}</tbody></table></div></section>
    </AppShell>
  );
}
