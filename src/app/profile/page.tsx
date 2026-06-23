"use client";

import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/Ui";
import { CheckCircle2, Moon, Save, Type, Volume2 } from "lucide-react";

export default function ProfilePage() {
  const [largeText, setLargeText] = useState(false);
  const [highContrast, setHighContrast] = useState(true);
  const [voice, setVoice] = useState(false);
  const [saved, setSaved] = useState(false);
  return (
    <AppShell role="farmer">
      <PageHeader eyebrow="Profile and accessibility" title="Personal settings" description="Adjust language and readability preferences for the farmer-facing learning experience." />
      <div className="profileGrid">
        <aside className="card profileCard"><div className="profileAvatar">NP</div><h2>Nimal Perera</h2><p style={{ fontSize: 12 }}>Farmer learner · Demo account</p><div className="profileDetails"><div className="profileDetail"><span>District</span><strong>Kurunegala</strong></div><div className="profileDetail"><span>Operation</span><strong>Vegetable farming</strong></div><div className="profileDetail"><span>Modules</span><strong>4 of 6 started</strong></div><div className="profileDetail"><span>Joined</span><strong>June 2026</strong></div></div></aside>
        <section className="card formCard">
          {saved && <div className="successBanner card" style={{ marginBottom: 18 }}><CheckCircle2 size={20} /><div><h3>Settings saved</h3><p>The demo preferences have been updated for this session.</p></div></div>}
          <div className="formSection"><h2>Language and learning</h2><div className="formGrid2"><div className="field"><label>Preferred language</label><select defaultValue="English"><option>English</option><option>Sinhala</option><option>Tamil</option></select></div><div className="field"><label>Preferred learning time</label><select defaultValue="Evening"><option>Morning</option><option>Afternoon</option><option>Evening</option></select></div></div></div>
          <div className="formSection"><h2>Accessibility preferences</h2><p>These controls are implemented as frontend demo settings.</p>
            <div className="settingRow"><div className="settingCopy"><strong><Type size={16} style={{ verticalAlign: "middle", marginRight: 8 }} />Larger interface text</strong><span>Increase the size of important learning content.</span></div><button className={`switch ${largeText ? "on" : ""}`} onClick={() => setLargeText((v) => !v)} aria-label="Toggle larger text"><i /></button></div>
            <div className="settingRow"><div className="settingCopy"><strong><Moon size={16} style={{ verticalAlign: "middle", marginRight: 8 }} />High-contrast dark view</strong><span>Maintain strong contrast between text, panels and actions.</span></div><button className={`switch ${highContrast ? "on" : ""}`} onClick={() => setHighContrast((v) => !v)} aria-label="Toggle high contrast"><i /></button></div>
            <div className="settingRow"><div className="settingCopy"><strong><Volume2 size={16} style={{ verticalAlign: "middle", marginRight: 8 }} />Voice guidance</strong><span>Reserve space for future text-to-speech lesson support.</span></div><button className={`switch ${voice ? "on" : ""}`} onClick={() => setVoice((v) => !v)} aria-label="Toggle voice guidance"><i /></button></div>
          </div>
          <button className="button button-primary" onClick={() => { setSaved(true); setTimeout(() => setSaved(false), 2500); }}><Save size={16} /> Save settings</button>
        </section>
      </div>
    </AppShell>
  );
}
