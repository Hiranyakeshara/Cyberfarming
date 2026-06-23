"use client";

import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { Badge, PageHeader } from "@/components/Ui";
import { AlertTriangle, ArrowRight, CheckCircle2, Link2, MessageSquareWarning, ShieldCheck, UserRoundCheck } from "lucide-react";
import { getStored } from "@/lib/storage";

export default function SimulationResultPage() {
  const result = getStored("farmsec_last_simulation", { correct: true, decision: "suspicious", sender: "Agri Grant Alert", subject: "Final notice: claim your seasonal grant today", signs: ["Urgent deadline", "Unknown link", "Requests sensitive details", "Unverified sender"] });
  return (
    <AppShell role="farmer">
      <PageHeader eyebrow="Immediate learning feedback" title="Simulation result" description="The objective is to strengthen future decisions, not to blame participants for a mistake." />
      <section className="card resultHero" style={{ marginBottom: 18 }}><span className="resultIcon">{result.correct ? <CheckCircle2 size={34} /> : <AlertTriangle size={34} />}</span><div><Badge tone={result.correct ? "green" : "amber"}>{result.correct ? "Correct decision" : "Learning opportunity"}</Badge><h2 style={{ margin: "10px 0 6px" }}>{result.correct ? "You responded safely." : "This response could expose the account."}</h2><p style={{ margin: 0, fontSize: 12 }}>Message: <strong style={{ color: "var(--text)" }}>{result.subject}</strong> from {result.sender}</p></div></section>
      <div className="resultGrid">
        <article className="card cardPad"><h2 style={{ fontSize: 18 }}>Warning signs in the message</h2><p style={{ fontSize: 12 }}>These clues should trigger verification before clicking, replying or paying.</p><div className="warningList">{result.signs.map((sign: string, index: number) => <div className="warningRow" key={sign}><span>{index + 1}</span><div><strong>{sign}</strong><p>Pause and confirm this detail through a known official channel.</p></div></div>)}</div></article>
        <article className="card cardPad"><h2 style={{ fontSize: 18 }}>The safer next action</h2><p style={{ fontSize: 12 }}>Apply the same sequence whenever a message creates urgency or requests sensitive information.</p><div className="checkItems">
          <div className="checkItem"><span><ShieldCheck size={15} /></span><div><strong>Do not use the message link</strong><p>Open the official service from a saved bookmark or manual search.</p></div></div>
          <div className="checkItem"><span><UserRoundCheck size={15} /></span><div><strong>Contact the organisation</strong><p>Use a phone number already known to you, not one supplied in the message.</p></div></div>
          <div className="checkItem"><span><MessageSquareWarning size={15} /></span><div><strong>Report and keep evidence</strong><p>Take a screenshot and submit it to the appropriate organisation.</p></div></div>
        </div><div className="divider" /><div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}><Link href="/simulation/inbox" className="button button-primary button-sm">Continue training <ArrowRight size={15} /></Link><Link href="/awareness" className="button button-secondary button-sm"><Link2 size={15} /> Review lessons</Link></div></article>
      </div>
    </AppShell>
  );
}
