"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/Ui";
import { ArrowLeft, CheckCircle2, Save, Send, ShieldCheck } from "lucide-react";

export default function NewCampaignPage() {
  const [saved, setSaved] = useState(false);
  function submit(event: FormEvent) { event.preventDefault(); setSaved(true); }
  return (
    <AppShell role="admin">
      <PageHeader eyebrow="Approved training setup" title="Create a training simulation" description="Prepare a dummy campaign with a clear learning purpose, target group, consent status and linked awareness module." actions={<Link href="/admin/campaigns" className="button button-secondary button-sm"><ArrowLeft size={15} /> Campaigns</Link>} />
      {saved && <div className="card successBanner" style={{ marginBottom: 18 }}><CheckCircle2 size={21} /><div><h3>Draft simulation saved</h3><p>This frontend demonstration does not send messages or call GoPhish.</p></div></div>}
      <form className="card formCard" onSubmit={submit}>
        <div className="formSection"><h2>Simulation objective</h2><p>Every campaign should be linked to a specific awareness outcome.</p><div className="formGrid2"><div className="field"><label>Campaign name</label><input defaultValue="Seasonal subsidy verification practice" required /></div><div className="field"><label>Scenario type</label><select defaultValue="Fake subsidy message"><option>Fake subsidy message</option><option>Supplier invoice change</option><option>Marketplace buyer request</option><option>Credential login prompt</option></select></div><div className="field"><label>Target group</label><select defaultValue="Vegetable farmers"><option>Vegetable farmers</option><option>Rice farmers</option><option>Cooperative staff</option><option>Mixed pilot group</option></select></div><div className="field"><label>Linked awareness module</label><select defaultValue="Fake subsidy messages"><option>Fake subsidy messages</option><option>Mobile payment confirmation</option><option>Supplier invoice fraud</option><option>Marketplace buyer scams</option></select></div></div></div>
        <div className="formSection"><h2>Delivery and ethical control</h2><div className="formGrid2"><div className="field"><label>Delivery channel</label><select defaultValue="Email simulation"><option>Email simulation</option><option>SMS-style in-app simulation</option><option>WhatsApp-style in-app simulation</option></select></div><div className="field"><label>Training schedule</label><input type="datetime-local" defaultValue="2026-06-30T09:00" /></div><div className="field"><label>Consent status</label><select defaultValue="Participant consent recorded"><option>Participant consent recorded</option><option>Pending consent review</option></select></div><div className="field"><label>Approval status</label><select defaultValue="Send for approval"><option>Draft</option><option>Send for approval</option><option>Approved</option></select></div></div></div>
        <div className="card" style={{ padding: 16, display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 20 }}><ShieldCheck size={21} style={{ color: "var(--green)", flex: "0 0 auto" }} /><p style={{ margin: 0, fontSize: 12 }}>The landing page must contain training feedback only. Do not include real login fields, payment forms or sensitive-data capture.</p></div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}><button type="submit" className="button button-secondary"><Save size={16} /> Save draft</button><button type="button" className="button button-primary" onClick={() => setSaved(true)}><Send size={16} /> Send for approval</button></div>
      </form>
    </AppShell>
  );
}
