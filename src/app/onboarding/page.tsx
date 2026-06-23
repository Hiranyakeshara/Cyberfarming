"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/Ui";
import { CheckCircle2, Info, Sprout } from "lucide-react";
import { setStored } from "@/lib/storage";

export default function OnboardingPage() {
  const router = useRouter();
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({ role: "Farmer", operation: "Vegetable farming", district: "Kurunegala", channels: "WhatsApp, SMS and mobile banking", shared: "Sometimes", internet: "Mobile data - moderate", time: "Evening" });

  function update(key: keyof typeof form, value: string) { setForm((current) => ({ ...current, [key]: value })); }
  function submit(event: FormEvent) {
    event.preventDefault();
    setStored("farmsec_profile", form);
    setSaved(true);
    setTimeout(() => router.push("/dashboard"), 700);
  }

  return (
    <AppShell role="farmer">
      <PageHeader eyebrow="Personalise learning" title="Tell us about your farming context" description="These details customise examples and recommendations. The prototype does not request banking details, passwords or precise farm addresses." />
      {saved && <div className="card successBanner" style={{ marginBottom: 18 }}><CheckCircle2 size={21} /><div><h3>Context saved</h3><p>Your farmer dashboard is being prepared.</p></div></div>}
      <form className="card formCard" onSubmit={submit}>
        <div className="formSection">
          <h2>Basic role and operation</h2><p>Choose the options that best describe your normal work.</p>
          <div className="formGrid2">
            <div className="field"><label>Your role</label><select value={form.role} onChange={(e) => update("role", e.target.value)}><option>Farmer</option><option>Farm manager</option><option>Cooperative staff</option><option>Agricultural worker</option><option>Supplier or trader</option></select></div>
            <div className="field"><label>Main crop or operation</label><select value={form.operation} onChange={(e) => update("operation", e.target.value)}><option>Vegetable farming</option><option>Rice farming</option><option>Tea or plantation</option><option>Livestock</option><option>Mixed farming</option></select></div>
            <div className="field"><label>District</label><input value={form.district} onChange={(e) => update("district", e.target.value)} /></div>
            <div className="field"><label>Digital tools used</label><input value={form.channels} onChange={(e) => update("channels", e.target.value)} /></div>
          </div>
        </div>
        <div className="formSection">
          <h2>Working conditions</h2><p>FarmSec uses this context to explain why urgency, fatigue or device sharing can increase cyber risk.</p>
          <div className="formGrid2">
            <div className="field"><label>Do you use a shared phone or computer?</label><select value={form.shared} onChange={(e) => update("shared", e.target.value)}><option>Never</option><option>Sometimes</option><option>Often</option></select></div>
            <div className="field"><label>Usual internet access</label><select value={form.internet} onChange={(e) => update("internet", e.target.value)}><option>Mobile data - weak</option><option>Mobile data - moderate</option><option>Stable Wi-Fi</option><option>Intermittent access</option></select></div>
            <div className="field"><label>Preferred learning time</label><select value={form.time} onChange={(e) => update("time", e.target.value)}><option>Morning</option><option>Afternoon</option><option>Evening</option></select></div>
            <div className="field"><label>Preferred content style</label><select defaultValue="Short lessons"><option>Short lessons</option><option>More examples</option><option>Checklist first</option></select></div>
          </div>
        </div>
        <div className="card" style={{ padding: 16, display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 20 }}><Info size={20} style={{ color: "var(--green)", flex: "0 0 auto" }} /><p style={{ margin: 0, fontSize: 12 }}>This frontend uses local dummy data for progress evaluation. A production system should connect this form to a secured database with consent and privacy controls.</p></div>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}><button type="button" className="button button-secondary" onClick={() => router.push("/dashboard")}>Skip for demo</button><button type="submit" className="button button-primary"><Sprout size={17} /> Save and continue</button></div>
      </form>
    </AppShell>
  );
}
