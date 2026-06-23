import { AppShell } from "@/components/AppShell";
import { Badge, PageHeader } from "@/components/Ui";
import { ArrowRight, Award, BadgeCheck, CheckCircle2, Medal, ShieldCheck, Star, Trophy } from "lucide-react";

const topics = [
  ["Threat recognition", 86], ["Suspicious-message reporting", 78], ["Mobile payment safety", 72], ["Supplier verification", 64], ["Shared-device protection", 58],
] as const;

export default function ProgressPage() {
  return (
    <AppShell role="farmer">
      <PageHeader eyebrow="Learning evidence" title="Progress and awareness improvement" description="Review dummy pre-test and post-test results, topic confidence and achievements prepared for the progress evaluation frontend." actions={<button className="button button-secondary button-sm">Download summary</button>} />
      <div className="scoreCompare" style={{ marginBottom: 18 }}>
        <article className="card scoreBox"><span>Pre-training awareness</span><strong>42%</strong><Badge tone="neutral">Baseline</Badge></article>
        <ArrowRight className="scoreArrow" size={28} />
        <article className="card scoreBox"><span>Current awareness</span><strong style={{ color: "var(--green)" }}>78%</strong><Badge>+36 percentage points</Badge></article>
      </div>
      <div className="grid2" style={{ marginBottom: 18 }}>
        <article className="card cardPad"><h2 style={{ fontSize: 18 }}>Topic readiness</h2><p style={{ fontSize: 12 }}>Scores combine lesson completion, quiz answers and simulation decisions.</p><div className="progressRows">{topics.map(([topic, value]) => <div className="progressRow" key={topic}><strong>{topic}</strong><div className="progressTrack"><span style={{ width: `${value}%` }} /></div><span>{value}%</span></div>)}</div></article>
        <article className="card cardPad"><h2 style={{ fontSize: 18 }}>Learning summary</h2><p style={{ fontSize: 12 }}>A concise view of the learner’s current progress.</p><div className="activityList">
          <div className="activityItem"><span className="activityIcon"><CheckCircle2 size={17} /></span><div><strong>4 modules started</strong><span>2 fully completed</span></div><Badge>67%</Badge></div>
          <div className="activityItem"><span className="activityIcon"><ShieldCheck size={17} /></span><div><strong>3 simulations completed</strong><span>2 safe responses</span></div><Badge tone="green">67%</Badge></div>
          <div className="activityItem"><span className="activityIcon"><Trophy size={17} /></span><div><strong>420 learning points</strong><span>80 points to next level</span></div><Badge tone="blue">Level 2</Badge></div>
          <div className="activityItem"><span className="activityIcon"><BadgeCheck size={17} /></span><div><strong>Reporting confidence</strong><span>Self-rating improved from 2 to 4</span></div><Badge tone="green">Improved</Badge></div>
        </div></article>
      </div>
      <article className="card cardPad"><div style={{ display: "flex", justifyContent: "space-between", gap: 15, alignItems: "flex-start", marginBottom: 18 }}><div><h2 style={{ fontSize: 18, marginBottom: 6 }}>Achievements</h2><p style={{ fontSize: 12, margin: 0 }}>Badges provide lightweight encouragement without ranking farmers against each other.</p></div><Badge>3 earned</Badge></div><div className="achievementGrid"><div className="card achievement"><span><ShieldCheck size={23} /></span><strong>Verification starter</strong><small>Checked an official source</small></div><div className="card achievement"><span><Award size={23} /></span><strong>Scam spotter</strong><small>Identified a phishing message</small></div><div className="card achievement"><span><Medal size={23} /></span><strong>Safe reporter</strong><small>Reported suspicious content</small></div><div className="card achievement locked"><span><Star size={23} /></span><strong>FarmSec champion</strong><small>Complete all modules</small></div></div></article>
    </AppShell>
  );
}
