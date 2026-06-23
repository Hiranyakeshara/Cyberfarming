import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { Badge, PageHeader } from "@/components/Ui";
import { Download, Eye, Plus, RefreshCw, ShieldCheck } from "lucide-react";
import { campaigns } from "@/lib/data";

export default function CampaignsPage() {
  return (
    <AppShell role="admin">
      <PageHeader eyebrow="Controlled phishing integration" title="Simulation campaign management" description="Review authorised training campaigns and the dummy events that would be synchronised from GoPhish in the complete system." actions={<><button className="button button-secondary button-sm"><RefreshCw size={15} /> Sync demo data</button><Link href="/admin/campaigns/new" className="button button-primary button-sm"><Plus size={15} /> New simulation</Link></>} />
      <div className="card cardPad" style={{ marginBottom: 18, display: "flex", gap: 13, alignItems: "flex-start" }}><ShieldCheck size={22} style={{ color: "var(--green)", flex: "0 0 auto" }} /><div><h3 style={{ marginBottom: 4 }}>Safety boundary</h3><p style={{ margin: 0, fontSize: 12 }}>Campaigns must use approved templates, informed participant groups and safe landing pages. Real credentials and banking information must never be collected.</p></div></div>
      <section className="card tableCard"><div className="tableTools"><div><strong style={{ fontSize: 13 }}>Campaign list</strong><p style={{ margin: "4px 0 0", fontSize: 11 }}>Training status and high-level behaviour outcomes.</p></div><button className="button button-secondary button-sm"><Download size={14} /> Export</button></div><div className="tableWrap"><table><thead><tr><th>Campaign</th><th>Target group</th><th>Template</th><th>Status</th><th>Sent</th><th>Clicked</th><th>Reported</th><th>Action</th></tr></thead><tbody>{campaigns.map((campaign) => <tr key={campaign.id}><td className="tableMain"><strong>{campaign.name}</strong><span>{campaign.id}</span></td><td>{campaign.group}</td><td>{campaign.template}</td><td><Badge tone={campaign.status === "Running" ? "amber" : campaign.status === "Completed" ? "green" : "neutral"}>{campaign.status}</Badge></td><td>{campaign.sent}</td><td>{campaign.clicked}</td><td>{campaign.reported}</td><td><button className="button button-secondary button-sm"><Eye size={14} /> View</button></td></tr>)}</tbody></table></div></section>
    </AppShell>
  );
}
