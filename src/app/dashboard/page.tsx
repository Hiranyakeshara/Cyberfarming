"use client";

import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { Badge, ProgressBar } from "@/components/Ui";
import { ArrowRight, BookOpenCheck, CheckCircle2, Clock3, MessageSquareWarning, ShieldCheck, Smartphone, Target, TrendingUp, Trophy } from "lucide-react";

export default function DashboardPage() {
  return (
    <AppShell role="farmer">
      <section className="card welcomeBanner" style={{ marginBottom: 18 }}>
        <div className="welcomeCopy"><Badge>Recommended learning path</Badge><h1>Build safer digital habits one short lesson at a time.</h1><p>Your next activity explains how mobile payment pressure can lead to rushed transfers and OTP sharing.</p><Link href="/awareness/mobile-payments" className="button button-primary">Continue lesson <ArrowRight size={17} /></Link></div>
        <div className="riskDial"><div className="riskDialContent"><strong>78%</strong><span>Awareness score</span></div></div>
      </section>

      <div className="grid4" style={{ marginBottom: 18 }}>
        <article className="card statCard"><div className="statTop"><span className="statIcon"><BookOpenCheck size={20} /></span><span className="statTrend"><TrendingUp size={12} /> 12% higher</span></div><strong>4 / 6</strong><span>Modules started</span></article>
        <article className="card statCard"><div className="statTop"><span className="statIcon"><Target size={20} /></span><Badge tone="amber">Practice due</Badge></div><strong>3</strong><span>Simulations completed</span></article>
        <article className="card statCard"><div className="statTop"><span className="statIcon"><MessageSquareWarning size={20} /></span><Badge tone="green">Good habit</Badge></div><strong>5</strong><span>Messages correctly reported</span></article>
        <article className="card statCard"><div className="statTop"><span className="statIcon"><Trophy size={20} /></span><Badge tone="blue">Level 2</Badge></div><strong>420</strong><span>Learning points</span></article>
      </div>

      <div className="dashboardLayout">
        <div className="stack">
          <article className="card recommendCard">
            <div className="recommendTop"><div><span className="eyebrow">Recommended today</span><h2 style={{ margin: "8px 0 6px" }}>Mobile payment confirmation</h2><p style={{ fontSize: 12, margin: 0 }}>Learn why OTP requests and urgent transfer messages should always be verified through a trusted channel.</p></div><span className="moduleIcon" style={{ margin: 0 }}><Smartphone size={22} /></span></div>
            <div className="lessonMeta"><span><Clock3 size={14} /> 8 minutes</span><span><ShieldCheck size={14} /> High-priority topic</span><span><CheckCircle2 size={14} /> Scenario + quiz</span></div>
            <ProgressBar value={60} label="Lesson progress" />
            <div style={{ marginTop: 18 }}><Link href="/awareness/mobile-payments" className="button button-primary button-sm">Resume lesson <ArrowRight size={15} /></Link></div>
          </article>

          <article className="card">
            <div className="cardHeader"><div><h2>Quick actions</h2><p>Go directly to the most useful safety activities.</p></div></div>
            <div className="cardBody quickActions">
              <Link className="quickAction" href="/simulation"><Target size={21} /><div><strong>Practise phishing</strong><span>Review a controlled message inbox</span></div></Link>
              <Link className="quickAction" href="/report"><MessageSquareWarning size={21} /><div><strong>Report a scam</strong><span>Record a suspicious message safely</span></div></Link>
              <Link className="quickAction" href="/progress"><Trophy size={21} /><div><strong>View improvement</strong><span>Compare scores and earned badges</span></div></Link>
            </div>
          </article>
        </div>

        <article className="card">
          <div className="cardHeader"><div><h2>Recent progress</h2><p>Your latest learning activity.</p></div><Link href="/progress" className="miniLink">View all <ArrowRight size={13} /></Link></div>
          <div className="cardBody activityList">
            <div className="activityItem"><span className="activityIcon"><CheckCircle2 size={17} /></span><div><strong>Subsidy scam lesson completed</strong><span>Score: 90% · Today</span></div><Badge>Done</Badge></div>
            <div className="activityItem"><span className="activityIcon"><Target size={17} /></span><div><strong>Supplier email reported</strong><span>Correct decision · Yesterday</span></div><Badge tone="green">Safe</Badge></div>
            <div className="activityItem"><span className="activityIcon"><BookOpenCheck size={17} /></span><div><strong>Payment lesson started</strong><span>60% completed · 2 days ago</span></div><Badge tone="amber">Open</Badge></div>
            <div className="activityItem"><span className="activityIcon"><ShieldCheck size={17} /></span><div><strong>Verification badge earned</strong><span>Checked sender and link correctly</span></div><Badge tone="blue">Badge</Badge></div>
          </div>
        </article>
      </div>
    </AppShell>
  );
}
