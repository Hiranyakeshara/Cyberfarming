"use client";

import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { Badge, PageHeader } from "@/components/Ui";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

export default function SimulationIntroPage() {
  return (
    <AppShell role="farmer">
      <PageHeader eyebrow="Authorised practice" title="Phishing recognition simulation" description="This is a safe training environment. Messages are fictional and no real passwords, banking details or OTPs are requested or stored." />
      <section className="card trainingHero" style={{ marginBottom: 18 }}>
        <div><Badge>Training simulation</Badge><h2 style={{ margin: "14px 0 10px" }}>Practise before a real suspicious message arrives.</h2><p>Review four agriculture-related messages and decide whether each one is safe or suspicious. You can reveal warning signs at any time.</p><Link href="/simulation/inbox" className="button button-primary">Start practice <ArrowRight size={17} /></Link></div>
        <div className="trainingIllustration"><div className="trainingShield"><ShieldCheck size={58} /></div></div>
      </section>
      <div className="rulesGrid">
        <article className="card ruleCard"><span>1</span><h3>Read the sender carefully</h3><p>Names can be copied. Check the address, number and expected communication channel.</p></article>
        <article className="card ruleCard"><span>2</span><h3>Look for pressure</h3><p>Urgent deadlines, threats and unexpected rewards are common social-engineering techniques.</p></article>
        <article className="card ruleCard"><span>3</span><h3>Protect sensitive details</h3><p>Do not provide passwords, PINs, OTPs or banking details inside a message or linked form.</p></article>
        <article className="card ruleCard"><span>4</span><h3>Report instead of forwarding</h3><p>Save evidence and report suspicious content through a trusted channel.</p></article>
      </div>
      <div className="card cardPad" style={{ marginTop: 18, display: "flex", gap: 14, alignItems: "flex-start" }}><CheckCircle2 size={22} style={{ color: "var(--green)", flex: "0 0 auto" }} /><div><h3 style={{ marginBottom: 5 }}>Ethical training notice</h3><p style={{ margin: 0, fontSize: 12 }}>The production research system should obtain participant consent, use approved training groups, avoid real credential collection and analyse results in anonymised or pseudonymised form.</p></div></div>
    </AppShell>
  );
}
