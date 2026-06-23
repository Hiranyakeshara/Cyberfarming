"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { Badge, PageHeader } from "@/components/Ui";
import { AlertTriangle, CheckCircle2, Eye, Flag } from "lucide-react";
import { simulationMessages } from "@/lib/data";
import { setStored } from "@/lib/storage";

export default function SimulationInboxPage() {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState(1);
  const [showSigns, setShowSigns] = useState(false);
  const selected = simulationMessages.find((item) => item.id === selectedId)!;

  function decide(decision: "safe" | "suspicious") {
    const correct = (decision === "suspicious") === selected.suspicious;
    setStored("farmsec_last_simulation", { selectedId, decision, correct, sender: selected.sender, subject: selected.subject, signs: selected.signs });
    router.push("/simulation/result");
  }

  return (
    <AppShell role="farmer">
      <PageHeader eyebrow="Practice inbox" title="Identify the message" description="Select a message, inspect the details and choose the safest action." actions={<Badge tone="amber">Message {selectedId} of {simulationMessages.length}</Badge>} />
      <section className="card inboxLayout">
        <div className="inboxList">
          <div className="inboxListHead"><h3>Training inbox</h3><p>Fictional messages for authorised practice.</p></div>
          {simulationMessages.map((message) => <button key={message.id} className={`messageItem ${message.id === selectedId ? "active" : ""}`} onClick={() => { setSelectedId(message.id); setShowSigns(false); }}><strong>{message.sender}</strong><b>{message.subject}</b><span>{message.preview}</span></button>)}
        </div>
        <div className="messageView">
          <div className="messageViewHead"><div><h2>{selected.subject}</h2><div className="emailMeta"><span>From: {selected.sender} &lt;notice-{selected.id}@farm-message.example&gt;</span><span>To: Demo farmer participant</span></div></div><Badge tone="neutral">Training message</Badge></div>
          <div className="emailBody">
            <div className="emailPaper"><h3>{selected.subject}</h3><p>Dear farmer,</p><p>{selected.preview}</p>{selected.suspicious ? <p>Use the following page to continue: <span className="fakeLink">https://claim-farm-support.example/verify</span></p> : <p>Please sign in to the official cooperative portal using your saved bookmark to review the information.</p>}<p>Regards,<br />{selected.sender}</p></div>
          </div>
          <div className="messageDecision"><div><strong style={{ display: "block", marginBottom: 4 }}>What will you do?</strong><span style={{ color: "var(--muted)", fontSize: 11 }}>Choose based on the evidence in the message.</span></div><div className="decisionButtons"><button className="button button-secondary button-sm" onClick={() => decide("safe")}><CheckCircle2 size={15} /> Mark safe</button><button className="button button-primary button-sm" onClick={() => decide("suspicious")}><Flag size={15} /> Report suspicious</button><button className="button button-ghost button-sm" onClick={() => setShowSigns((value) => !value)}><Eye size={15} /> {showSigns ? "Hide" : "Show"} warning signs</button></div></div>
          {showSigns && <div className="warningPanel"><h4><AlertTriangle size={16} style={{ verticalAlign: "middle", marginRight: 7 }} />Training clues</h4><ul>{selected.signs.map((sign) => <li key={sign}>{sign}</li>)}</ul></div>}
        </div>
      </section>
    </AppShell>
  );
}
