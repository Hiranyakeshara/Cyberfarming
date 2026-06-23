import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  CheckCircle2,
  CircleGauge,
  Eye,
  Leaf,
  MessageSquareWarning,
  ShieldCheck,
  Smartphone,
  Sprout,
  Target,
  Users,
} from "lucide-react";
import { Brand } from "@/components/Brand";

export default function LandingPage() {
  return (
    <div className="publicPage">
      <nav className="publicNav">
        <Brand />
        <div className="publicNavLinks">
          <a href="#features">Learning</a>
          <a href="#approach">How it works</a>
          <a href="#about">About</a>
        </div>
        <div className="navActions">
          <Link href="/login" className="button button-secondary button-sm">Sign in</Link>
          <Link href="/login" className="button button-primary button-sm">Start learning</Link>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="heroCopy">
            <span className="heroEyebrow"><Sprout size={15} /> Cyber safety built for farming communities</span>
            <h1>Safer digital decisions, <span>stronger farms.</span></h1>
            <p>FarmSec turns real agricultural scams into simple lessons, practical checks and safe phishing exercises that farmers can understand and apply.</p>
            <div className="heroButtons">
              <Link className="button button-primary" href="/login">Open demo <ArrowRight size={17} /></Link>
              <a className="button button-secondary" href="#features">Explore features</a>
            </div>
            <div className="trustRow">
              <span className="trustItem"><CheckCircle2 size={16} /> Farmer-friendly language</span>
              <span className="trustItem"><CheckCircle2 size={16} /> Controlled simulations</span>
              <span className="trustItem"><CheckCircle2 size={16} /> No real credentials collected</span>
            </div>
          </div>

          <div className="heroVisual" aria-label="FarmSec dashboard preview">
            <div className="heroGlow" />
            <div className="floatCard floatOne"><ShieldCheck size={18} /> Risk awareness improved</div>
            <div className="heroDashboard">
              <div className="mockTop"><Brand compact /><span className="badge badge-green">Demo dashboard</span></div>
              <div className="mockGrid">
                <div className="mockCard">
                  <h4>Your awareness score</h4>
                  <div className="mockScore">78%</div>
                  <div className="progressTrack"><span style={{ width: "78%" }} /></div>
                  <div className="mockList">
                    <div><span><BookOpenCheck size={13} /></span> Fake subsidy messages</div>
                    <div><span><Smartphone size={13} /></span> Mobile payment safety</div>
                    <div><span><Target size={13} /></span> Phishing recognition</div>
                  </div>
                </div>
                <div className="mockCard">
                  <h4>Today</h4>
                  <p>Continue your recommended lesson.</p>
                  <div className="mockList">
                    <div><span><Eye size={13} /></span> Spot warning signs</div>
                    <div><span><BadgeCheck size={13} /></span> Earn a safety badge</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="floatCard floatTwo"><MessageSquareWarning size={18} /> Report suspicious messages</div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="sectionHead"><span>Platform capabilities</span><h2>Awareness designed around real farming work</h2><p>Short, contextual activities replace generic office-focused cybersecurity training.</p></div>
          <div className="featureGrid">
            <article className="featureCard"><div className="featureIcon"><Leaf size={22} /></div><h3>Agriculture-specific lessons</h3><p>Learn through fake subsidy notices, supplier impersonation, buyer scams, mobile payments and shared-device scenarios.</p></article>
            <article className="featureCard"><div className="featureIcon"><Target size={22} /></div><h3>Safe phishing practice</h3><p>Recognise suspicious messages in a controlled environment and receive immediate, non-blaming feedback.</p></article>
            <article className="featureCard"><div className="featureIcon"><CircleGauge size={22} /></div><h3>Measurable improvement</h3><p>Track module completion, quiz performance, pre-test and post-test improvement, and reporting confidence.</p></article>
          </div>
        </section>

        <section id="approach" className="section">
          <div className="sectionHead"><span>Behaviour-driven approach</span><h2>From pressure and distraction to safer action</h2></div>
          <div className="featureGrid">
            <article className="featureCard"><div className="featureIcon"><Users size={22} /></div><h3>1. Understand context</h3><p>Account for outdoor work, urgency, fatigue, shared phones and limited access to technical support.</p></article>
            <article className="featureCard"><div className="featureIcon"><Eye size={22} /></div><h3>2. Recognise behaviour</h3><p>Identify rushed clicking, weak verification, credential sharing and unsafe payment approval habits.</p></article>
            <article className="featureCard"><div className="featureIcon"><ShieldCheck size={22} /></div><h3>3. Practise safer decisions</h3><p>Use clear checklists, quizzes, reporting tools and simulations to reinforce protective behaviour.</p></article>
          </div>
        </section>

        <section id="about" className="section">
          <div className="ctaBox">
            <div><h2>Ready to review the progress prototype?</h2><p>Use either demo role to explore the complete farmer and research-administration frontend.</p></div>
            <Link className="button button-primary" href="/login">Open FarmSec demo <ArrowRight size={17} /></Link>
          </div>
        </section>
      </main>
      <footer className="publicFooter">FarmSec research prototype · Human-centric cyber awareness for farmers</footer>
    </div>
  );
}
