"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { AlertTriangle, ArrowLeft, CheckCircle2, ExternalLink, Eye, Link2, MessageSquareWarning, ShieldCheck, UserRoundCheck } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Badge, PageHeader, ProgressBar } from "@/components/Ui";
import { modules } from "@/lib/data";

const lessonContent: Record<string, { scenario: string; message: string; question: string; options: string[]; correct: number; explanation: string }> = {
  "fake-subsidy": { scenario: "A message claims that a new seasonal farming grant has been approved and says the offer expires today.", message: "GOV AGRI SUPPORT: Your Rs. 50,000 grant is waiting. Confirm your bank details now at bit.ly/agri-claim-24.", question: "What should you do first?", options: ["Open the link before it expires", "Reply with your bank account number", "Check the official department website or trusted number", "Forward it to other farmers"], correct: 2, explanation: "Official benefits should be checked through a trusted government portal or known contact number. Do not use the link inside the unexpected message." },
  "mobile-payments": { scenario: "While arranging a seed delivery, you receive an urgent message asking for an OTP to confirm a refund.", message: "PAYMENT TEAM: Refund pending. Send the 6-digit OTP you just received so we can release the funds immediately.", question: "Which action is safest?", options: ["Share the OTP because it is only for a refund", "Call the supplier using a known number and never share the OTP", "Send half of the OTP first", "Click the sender profile to see whether it looks real"], correct: 1, explanation: "An OTP authorises account access or a payment. A genuine supplier or bank should never ask you to send it through a message." },
};

export default function LessonPage() {
  const { slug } = useParams<{ slug: string }>();
  const lessonModule = modules.find((item) => item.slug === slug) ?? modules[0];
  const content = lessonContent[slug] ?? lessonContent["fake-subsidy"];
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const correct = selected === content.correct;

  return (
    <AppShell role="farmer">
      <PageHeader eyebrow={`${lessonModule.category} · ${lessonModule.duration}`} title={lessonModule.title} description="Read the farming scenario, identify the safest response and review the practical verification checklist." actions={<Link href="/awareness" className="button button-secondary button-sm"><ArrowLeft size={15} /> All modules</Link>} />
      <div className="lessonLayout">
        <article className="card lessonMain">
          <div className="lessonProgress"><ProgressBar value={submitted ? 100 : 65} label="Lesson progress" /></div>
          <Badge tone="amber">Scenario-based activity</Badge>
          <h2 style={{ margin: "13px 0 8px" }}>A message arrives during a busy work period</h2>
          <p>{content.scenario} The urgency is designed to stop you from checking carefully.</p>
          <div className="scenarioBox"><div className="scenarioHead"><AlertTriangle size={20} /><div><strong>Suspicious message</strong><p style={{ margin: 0, fontSize: 11 }}>Review the sender, request and link before deciding.</p></div></div><div className="messageMock"><strong>Unknown sender</strong><span>Today · 10:42 a.m.</span><p>{content.message}</p></div></div>
          <h3>{content.question}</h3>
          <div className="choiceList">{content.options.map((option, index) => <label key={option} className={`choice ${selected === index ? "selected" : ""}`}><input type="radio" name="answer" checked={selected === index} onChange={() => { setSelected(index); setSubmitted(false); }} />{option}</label>)}</div>
          <button className="button button-primary" disabled={selected === null} onClick={() => setSubmitted(true)}>Check my answer</button>
          {submitted && <div className={`feedbackBox ${correct ? "feedbackGood" : "feedbackWarn"}`}><strong>{correct ? "Correct decision." : "Review this decision."}</strong> {content.explanation}</div>}
          {submitted && <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}><Link href="/simulation" className="button button-primary button-sm">Try phishing practice <ExternalLink size={14} /></Link><Link href="/awareness" className="button button-secondary button-sm">Choose another module</Link></div>}
        </article>

        <aside className="card checklist">
          <Badge>Safe action checklist</Badge><h3 style={{ marginTop: 13 }}>Pause before you respond</h3><p style={{ fontSize: 11 }}>Use the same four checks for subsidy, supplier, buyer and payment messages.</p>
          <div className="checkItems">
            <div className="checkItem"><span><UserRoundCheck size={15} /></span><div><strong>Check the sender</strong><p>Compare the address or number with an official source.</p></div></div>
            <div className="checkItem"><span><Eye size={15} /></span><div><strong>Notice urgency</strong><p>Scammers use deadlines, fear and financial pressure.</p></div></div>
            <div className="checkItem"><span><Link2 size={15} /></span><div><strong>Verify the destination</strong><p>Open the official site yourself instead of using an unexpected link.</p></div></div>
            <div className="checkItem"><span><ShieldCheck size={15} /></span><div><strong>Protect credentials</strong><p>Never share passwords, PINs, OTPs or card details.</p></div></div>
            <div className="checkItem"><span><MessageSquareWarning size={15} /></span><div><strong>Report suspicious activity</strong><p>Keep a screenshot and tell the relevant organisation.</p></div></div>
          </div>
          <div className="divider" />
          <div style={{ display: "flex", gap: 8, alignItems: "center", color: "var(--muted)", fontSize: 11 }}><CheckCircle2 size={16} style={{ color: "var(--green)" }} /> Safe verification protects both money and farm operations.</div>
        </aside>
      </div>
    </AppShell>
  );
}
