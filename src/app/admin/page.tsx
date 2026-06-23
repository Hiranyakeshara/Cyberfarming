import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { Badge, PageHeader } from "@/components/Ui";
import { AlertTriangle, ArrowRight, BookOpenCheck, CheckCircle2, FileWarning, Target, TrendingUp, Users } from "lucide-react";
import { farmerRows, campaigns, reportRows } from "@/lib/data";

export default function AdminDashboardPage() {
  return (
    <AppShell role="admin">
      <PageHeader eyebrow="Research administration" title="Evaluation overview" description="Monitor dummy enrolment, training delivery, reporting activity and awareness indicators for the progress evaluation prototype." actions={<Link href="/admin/analytics" className="button button-primary button-sm">Open evaluation <ArrowRight size={15} /></Link>} />
      <div className="grid4" style={{ marginBottom: 18 }}>
        <article className="card statCard"><div className="statTop"><span className="statIcon"><Users size={20} /></span><span className="statTrend"><TrendingUp size={12} /> 18 this week</span></div><strong>248</strong><span>Farmers enrolled</span></article>
        <article className="card statCard"><div className="statTop"><span className="statIcon"><Target size={20} /></span><Badge tone="amber">1 running</Badge></div><strong>4</strong><span>Simulation campaigns</span></article>
        <article className="card statCard"><div className="statTop"><span className="statIcon"><BookOpenCheck size={20} /></span><Badge>67% average</Badge></div><strong>1,086</strong><span>Module completions</span></article>
        <article className="card statCard"><div className="statTop"><span className="statIcon"><FileWarning size={20} /></span><Badge tone="red">3 pending</Badge></div><strong>27</strong><span>Suspicious reports</span></article>
      </div>

      <div className="adminOverview" style={{ marginBottom: 18 }}>
        <article className="card tableCard">
          <div className="cardHeader"><div><h2>Recent participant activity</h2><p>Latest progress across the pilot group.</p></div><Link href="/admin/farmers" className="miniLink">View farmers <ArrowRight size={13} /></Link></div>
          <div className="tableWrap"><table><thead><tr><th>Participant</th><th>District</th><th>Modules</th><th>Score</th><th>Status</th></tr></thead><tbody>{farmerRows.slice(0,4).map((row) => <tr key={row.name}><td className="tableMain"><strong>{row.name}</strong><span>{row.role}</span></td><td>{row.district}</td><td>{row.modules}</td><td>{row.score}</td><td><Badge tone={row.status === "Completed" ? "green" : row.status === "Needs support" ? "amber" : "blue"}>{row.status}</Badge></td></tr>)}</tbody></table></div>
        </article>
        <article className="card cardPad"><h2 style={{ fontSize: 18 }}>Common risk topics</h2><p style={{ fontSize: 12 }}>Issues most often missed in quizzes and simulations.</p><div style={{ marginTop: 22 }}>
          {[ ["Fake subsidy urgency", 82], ["OTP sharing", 71], ["Supplier bank changes", 64], ["Marketplace advance fees", 56] ].map(([label, value]) => <div className="riskTopic" key={label}><strong>{label}</strong><div className="progressTrack"><span style={{ width: `${value}%` }} /></div><span>{value}%</span></div>)}
        </div><div className="divider" /><div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}><AlertTriangle size={18} style={{ color: "var(--amber)", flex: "0 0 auto" }} /><p style={{ margin: 0, fontSize: 11 }}>Use these indicators to prioritise the next module or simulation theme.</p></div></article>
      </div>

      <div className="grid2">
        <article className="card cardPad"><div style={{ display: "flex", justifyContent: "space-between", gap: 14 }}><div><h2 style={{ fontSize: 18, marginBottom: 5 }}>Simulation status</h2><p style={{ fontSize: 12 }}>Campaign delivery and reporting outcomes.</p></div><Target size={22} style={{ color: "var(--green)" }} /></div><div className="activityList">{campaigns.slice(0,3).map((campaign) => <div className="activityItem" key={campaign.id}><span className="activityIcon"><Target size={16} /></span><div><strong>{campaign.name}</strong><span>{campaign.group} · {campaign.reported} reports</span></div><Badge tone={campaign.status === "Running" ? "amber" : campaign.status === "Completed" ? "green" : "neutral"}>{campaign.status}</Badge></div>)}</div></article>
        <article className="card cardPad"><div style={{ display: "flex", justifyContent: "space-between", gap: 14 }}><div><h2 style={{ fontSize: 18, marginBottom: 5 }}>Recent scam reports</h2><p style={{ fontSize: 12 }}>Participant-submitted suspicious messages.</p></div><FileWarning size={22} style={{ color: "var(--green)" }} /></div><div className="activityList">{reportRows.slice(0,3).map((report) => <div className="activityItem" key={report.id}><span className="activityIcon">{report.status === "Safe" ? <CheckCircle2 size={16} /> : <FileWarning size={16} />}</span><div><strong>{report.category}</strong><span>{report.source} · {report.date}</span></div><Badge tone={report.status === "Confirmed scam" ? "red" : report.status === "Safe" ? "green" : "amber"}>{report.status}</Badge></div>)}</div></article>
      </div>
    </AppShell>
  );
}
