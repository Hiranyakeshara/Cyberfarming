"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  BarChart3,
  Bell,
  BookOpenCheck,
  ChevronDown,
  ClipboardCheck,
  FileWarning,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquareWarning,
  PanelLeftClose,
  Settings,
  ShieldCheck,
  Target,
  Users,
  X,
} from "lucide-react";
import { Brand } from "@/components/Brand";
import { useAuth } from "@/components/AuthProvider";
import type { UserRole } from "@/lib/data";

const farmerNav = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/awareness", label: "Awareness", icon: BookOpenCheck },
  { href: "/simulation", label: "Phishing practice", icon: Target },
  { href: "/report", label: "Report scam", icon: MessageSquareWarning },
  { href: "/progress", label: "Progress", icon: BarChart3 },
  { href: "/profile", label: "Profile", icon: Settings },
];

const adminNav = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/farmers", label: "Farmers", icon: Users },
  { href: "/admin/modules", label: "Modules", icon: GraduationCap },
  { href: "/admin/campaigns", label: "Simulations", icon: Target },
  { href: "/admin/reports", label: "Reports", icon: FileWarning },
  { href: "/admin/analytics", label: "Evaluation", icon: ClipboardCheck },
];

export function AppShell({ role, children }: { role: UserRole; children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, ready, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const nav = role === "admin" ? adminNav : farmerNav;

  useEffect(() => {
    if (!ready) return;
    if (!user) router.replace("/login");
    else if (user.role !== role) router.replace(user.role === "admin" ? "/admin" : "/dashboard");
  }, [ready, role, router, user]);

  const initials = useMemo(() => user?.name.split(" ").map((part) => part[0]).slice(0, 2).join("") ?? "FS", [user]);

  if (!ready || !user || user.role !== role) {
    return <div className="screenLoader"><span className="loader" /><p>Loading FarmSec...</p></div>;
  }

  return (
    <div className={`appFrame ${collapsed ? "sidebarCollapsed" : ""}`}>
      <div className={`mobileBackdrop ${mobileOpen ? "show" : ""}`} onClick={() => setMobileOpen(false)} />
      <aside className={`sidebar ${mobileOpen ? "mobileOpen" : ""}`}>
        <div className="sidebarTop">
          <Brand compact />
          <button className="iconButton desktopCollapse" aria-label="Collapse sidebar" onClick={() => setCollapsed((value) => !value)}>
            <PanelLeftClose size={19} />
          </button>
          <button className="iconButton mobileClose" aria-label="Close navigation" onClick={() => setMobileOpen(false)}><X size={20} /></button>
        </div>
        <div className="sidebarContext">
          <span className="contextIcon">{role === "admin" ? <ShieldCheck size={18} /> : <GraduationCap size={18} />}</span>
          <div><small>{role === "admin" ? "Research workspace" : "Learning workspace"}</small><strong>{role === "admin" ? "Administrator" : "Farmer training"}</strong></div>
        </div>
        <nav className="sideNav" aria-label={`${role} navigation`}>
          {nav.map(({ href, label, icon: Icon }) => {
            const active = href === (role === "admin" ? "/admin" : "/dashboard") ? pathname === href : pathname.startsWith(href);
            return <Link key={href} href={href} className={active ? "active" : ""} onClick={() => setMobileOpen(false)}><Icon size={19} /><span>{label}</span></Link>;
          })}
        </nav>
        <div className="sidebarBottom">
          <div className="helpCard"><ShieldCheck size={20} /><div><strong>Need quick help?</strong><p>Stop, verify and report suspicious messages.</p></div></div>
          <button className="logoutButton" onClick={() => { logout(); router.push("/"); }}><LogOut size={18} /><span>Sign out</span></button>
        </div>
      </aside>
      <main className="appMain">
        <header className="topbar">
          <div className="topbarLeft">
            <button className="iconButton mobileMenu" aria-label="Open navigation" onClick={() => setMobileOpen(true)}><Menu size={21} /></button>
            <div><span className="topbarLabel">{role === "admin" ? "FarmSec administration" : "Farmer cyber awareness"}</span><strong>Good day, {user.name.split(" ")[0]}</strong></div>
          </div>
          <div className="topbarActions">
            <button className="iconButton notificationButton" aria-label="Notifications"><Bell size={20} /><span /></button>
            <div className="userChip"><span className="avatar">{initials}</span><div><strong>{user.name}</strong><small>{role === "admin" ? "Administrator" : "Farmer learner"}</small></div><ChevronDown size={16} /></div>
          </div>
        </header>
        <div className="pageContainer">{children}</div>
      </main>
    </div>
  );
}
