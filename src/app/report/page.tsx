"use client";

import { FormEvent, useState } from "react";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/Ui";
import { CheckCircle2, FileUp, Info, Send } from "lucide-react";
import { getStored, setStored } from "@/lib/storage";

export default function ReportPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ source: "WhatsApp", sender: "", text: "", link: "No", request: "No", notes: "" });
  function update(key: keyof typeof form, value: string) { setForm((current) => ({ ...current, [key]: value })); }
  function submit(event: FormEvent) {
    event.preventDefault();
    const reports = getStored<typeof form[]>("farmsec_reports", []);
    setStored("farmsec_reports", [{ ...form, submittedAt: new Date().toISOString() }, ...reports]);
    setSubmitted(true);
  }

  return (
    <AppShell role="farmer">
      <PageHeader eyebrow="Safer reporting behaviour" title="Report a suspicious message" description="Record enough information for review without entering passwords, OTPs, card numbers or other sensitive credentials." />
      {submitted ? <section className="card emptyState"><div className="emptyIcon"><CheckCircle2 size={28} /></div><h3>Report saved in this demo</h3><p>The information has been stored locally in your browser. A real deployment should submit it through an authenticated, encrypted API.</p><button className="button button-primary" onClick={() => { setSubmitted(false); setForm({ source: "WhatsApp", sender: "", text: "", link: "No", request: "No", notes: "" }); }}>Report another message</button></section> :
      <form className="card formCard" onSubmit={submit}>
        <div className="card" style={{ padding: 16, display: "flex", gap: 12, marginBottom: 22, alignItems: "flex-start" }}><Info size={20} style={{ color: "var(--green)", flex: "0 0 auto" }} /><p style={{ margin: 0, fontSize: 12 }}>Do not open suspicious links to complete this form. Copy only visible information or upload a screenshot after hiding private details.</p></div>
        <div className="formSection"><h2>Message information</h2><p>Tell us where the message appeared and who claimed to send it.</p><div className="formGrid2"><div className="field"><label>Message source</label><select value={form.source} onChange={(e) => update("source", e.target.value)}><option>WhatsApp</option><option>SMS</option><option>Email</option><option>Marketplace</option><option>Social media</option></select></div><div className="field"><label>Sender name or number</label><input value={form.sender} onChange={(e) => update("sender", e.target.value)} placeholder="Example: AGRI-GRANT or +94..." required /></div></div></div>
        <div className="formSection"><div className="field"><label>Paste the visible message text</label><textarea value={form.text} onChange={(e) => update("text", e.target.value)} placeholder="Remove passwords, OTPs and bank details before pasting." required /></div><div className="formGrid2" style={{ marginTop: 15 }}><div className="field"><label>Did it include a link?</label><select value={form.link} onChange={(e) => update("link", e.target.value)}><option>No</option><option>Yes</option><option>Not sure</option></select></div><div className="field"><label>Did it request money or sensitive details?</label><select value={form.request} onChange={(e) => update("request", e.target.value)}><option>No</option><option>Yes</option><option>Not sure</option></select></div></div></div>
        <div className="formSection"><div className="formGrid2"><div className="field"><label>Additional notes</label><textarea value={form.notes} onChange={(e) => update("notes", e.target.value)} placeholder="Explain why the message seemed suspicious." /></div><label className="uploadBox"><div><FileUp size={25} /><strong>Add a screenshot</strong><span>Frontend placeholder · PNG or JPG in production</span></div><input type="file" accept="image/*" hidden /></label></div></div>
        <button type="submit" className="button button-primary"><Send size={16} /> Submit report</button>
      </form>}
    </AppShell>
  );
}
