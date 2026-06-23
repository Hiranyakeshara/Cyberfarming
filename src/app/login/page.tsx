"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Check, Eye, EyeOff, Languages, ShieldCheck, Sprout, Users } from "lucide-react";
import { Brand } from "@/components/Brand";
import { useAuth } from "@/components/AuthProvider";
import { demoAccounts, UserRole } from "@/lib/data";

export default function LoginPage() {
  const router = useRouter();
  const { login, loginAs } = useAuth();
  const [email, setEmail] = useState("farmer@farmsec.demo");
  const [password, setPassword] = useState("farmer123");
  const [showPassword, setShowPassword] = useState(false);
  const [language, setLanguage] = useState("English");
  const [error, setError] = useState("");

  function destination(role: UserRole) {
    router.push(role === "admin" ? "/admin" : "/dashboard");
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    const result = login(email, password);
    if (!result.ok) return setError(result.message);
    const role = demoAccounts.find((item) => item.email === email)?.role ?? "farmer";
    destination(role);
  }

  function quickLogin(role: UserRole) {
    loginAs(role);
    destination(role);
  }

  return (
    <main className="authPage">
      <section className="authPanel">
        <div className="authPanelTop"><Link href="/"><Brand /></Link></div>
        <form className="authCard" onSubmit={submit}>
          <span className="eyebrow">Progress evaluation demo</span>
          <h1>Welcome back</h1>
          <p>Sign in using a dummy account. This frontend stores demo progress only in your browser.</p>
          <div className="formGrid">
            <div className="field"><label htmlFor="language">Preferred language</label><select id="language" value={language} onChange={(e) => setLanguage(e.target.value)}><option>English</option><option>Sinhala</option><option>Tamil</option></select></div>
            <div className="field"><label htmlFor="email">Email address</label><input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></div>
            <div className="field"><label htmlFor="password">Password</label><div className="passwordWrap"><input id="password" type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} required /><button type="button" className="passwordToggle" aria-label="Toggle password visibility" onClick={() => setShowPassword((value) => !value)}>{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button></div></div>
            <label className="formCheck"><input type="checkbox" defaultChecked /> Keep this demo account signed in</label>
            {error && <div className="formError">{error}</div>}
            <button className="button button-primary button-full" type="submit">Sign in to FarmSec</button>
          </div>

          <div className="demoBox">
            <div className="demoBoxHead"><strong>Quick demo access</strong><span className="badge badge-green">No registration needed</span></div>
            <div className="demoAccounts">
              <button type="button" className="demoAccount" onClick={() => quickLogin("farmer")}><strong><Sprout size={14} /> Farmer view</strong><span>farmer@farmsec.demo</span><span>Password: farmer123</span></button>
              <button type="button" className="demoAccount" onClick={() => quickLogin("admin")}><strong><Users size={14} /> Admin view</strong><span>admin@farmsec.demo</span><span>Password: admin123</span></button>
            </div>
          </div>
        </form>
      </section>

      <aside className="authVisual">
        <div className="authMessage">
          <div className="authMessageIcon"><ShieldCheck size={31} /></div>
          <h2>Cyber awareness that respects the realities of farming.</h2>
          <p>FarmSec connects practical guidance with the working conditions that influence hurried or unsafe digital decisions.</p>
          <div className="authPoints">
            <div className="authPoint"><span><Check size={15} /></span> Agriculture-specific scam scenarios</div>
            <div className="authPoint"><span><Languages size={15} /></span> Language and readability preferences</div>
            <div className="authPoint"><span><Check size={15} /></span> Safe evaluation data without real credentials</div>
          </div>
        </div>
      </aside>
    </main>
  );
}
