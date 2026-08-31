"use client";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Audiowide } from "next/font/google";

const audiowide = Audiowide({ weight: "400", subsets: ["latin"] });

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/intellectual-property", label: "Intellectual Property" },
  { href: "/consultancy", label: "Consultancy" },
  { href: "/products", label: "Products" },
  { href: "/our-work", label: "What We Do" },
  { href: "/invest", label: "Collaborate" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    h();
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  useEffect(() => setMenuOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <>
      <header
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          background: scrolled || menuOpen ? "rgba(250,250,248,0.88)" : "rgba(250,250,248,0)",
          backdropFilter: scrolled || menuOpen ? "blur(16px) saturate(1.15)" : "none",
          WebkitBackdropFilter: scrolled || menuOpen ? "blur(16px) saturate(1.15)" : "none",
          borderBottom: scrolled || menuOpen ? "1px solid rgba(26,36,32,0.07)" : "1px solid transparent",
          boxShadow: scrolled && !menuOpen ? "0 4px 24px rgba(26,36,32,0.06), 0 1px 0 rgba(196,164,90,0.35) inset" : "none",
          transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div style={{ height: 2, background: scrolled ? "linear-gradient(90deg, #C4A45A, #5A7A5C 50%, #1A2420)" : "transparent", opacity: scrolled ? 1 : 0, transition: "opacity 0.4s" }} />
        <nav style={{ maxWidth: "100%", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68, padding: "0 clamp(1rem, 3vw, 2.5rem)", gap: 24, width: "100%", boxSizing: "border-box", minWidth: 0 }}>
          <Link href="/" onClick={() => setMenuOpen(false)} style={{ textDecoration: "none", flexShrink: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
              <div style={{ position: "relative", width: 38, height: 38, minWidth: 38, borderRadius: "50%", background: "#1A2420", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 12px rgba(26,36,32,0.15)", overflow: "hidden", flexShrink: 0 }}>
                <svg width="38" height="38" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="14.5" stroke="#C4A45A" strokeOpacity="0.45" strokeWidth="0.7" />
                  <g style={{ transformOrigin: "16px 16px", animation: "spinBlade 8s linear infinite" }}>
                    <path d="M16 16L16 5C20 6 22.5 9 20 13L16 16Z" fill="#8A9E8C" />
                    <path d="M16 16L27 16C26 20 22.5 22.5 19 20L16 16Z" fill="#8A9E8C" />
                    <path d="M16 16L16 27C12 26 9.5 23 12 19L16 16Z" fill="#8A9E8C" />
                    <path d="M16 16L5 16C6 12 9.5 9.5 13 12L16 16Z" fill="#8A9E8C" />
                  </g>
                  <circle cx="16" cy="16" r="3.2" fill="#FAFAF8" />
                  <circle cx="16" cy="16" r="1.2" fill="#1A2420" />
                </svg>
              </div>
              <div style={{ minWidth: 0 }}>
                <div className={audiowide.className} style={{ fontSize: 16, color: "#1A2420", letterSpacing: "0.06em", lineHeight: 1, display: "flex", alignItems: "baseline", gap: 2 }}>
                  THAPAK<span style={{ fontSize: 8, verticalAlign: "super", color: "#C4A45A", fontFamily: "DM Sans, sans-serif", fontWeight: 600 }}>®</span>
                </div>
                <div className="logo-sub" style={{ fontFamily: "DM Sans, sans-serif", fontSize: 9, color: "#5A7A5C", letterSpacing: "0.16em", textTransform: "uppercase", lineHeight: 1, marginTop: 2, fontWeight: 400, whiteSpace: "nowrap" }}>Research & TestLab Pvt. Ltd.</div>
              </div>
            </div>
          </Link>

          <div className="desktop-nav" style={{ gap: 10 }}>
            {links.map((l) => {
              const active = isActive(l.href);
              return (
                <Link key={l.href} href={l.href} style={{ position: "relative", padding: "8px 12px", fontFamily: "DM Sans, sans-serif", fontSize: 13, fontWeight: active ? 500 : 300, color: active ? "#1A2420" : "#2C3E35", textDecoration: "none", letterSpacing: "0.03em", borderRadius: 999, background: active ? "#F4F3F0" : "transparent", border: active ? "1px solid #EDE9E0" : "1px solid transparent", transition: "all 0.2s" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                    {active && <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#C4A45A", flexShrink: 0 }} />}
                    {l.label}
                  </span>
                </Link>
              );
            })}
            <div style={{ width: 1, height: 20, background: "#EDE9E0", margin: "0 6px 0 8px" }} className="desktop-nav" />
            <Link href="/query" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#1A2420", color: "#FAFAF8", padding: "10px 18px 10px 20px", fontFamily: "DM Sans, sans-serif", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", fontWeight: 500, borderRadius: 999, boxShadow: "0 2px 12px rgba(26,36,32,0.18)", transition: "all 0.2s", whiteSpace: "nowrap" }} className="desktop-nav">
              Discuss Requirement <span style={{ width: 22, height: 22, borderRadius: "50%", background: "#C4A45A", display: "flex", alignItems: "center", justifyContent: "center" }}><ArrowUpRight size={12} color="#1A2420" strokeWidth={2.2} /></span>
            </Link>
          </div>

          <button type="button" onClick={() => setMenuOpen((v) => !v)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} className="mobile-btn" style={{ width: 42, height: 42, borderRadius: "50%", border: menuOpen ? "1px solid #EDE9E0" : "1px solid rgba(26,36,32,0.08)", background: menuOpen ? "#1A2420" : "#fff", cursor: "pointer", boxShadow: "0 2px 10px rgba(26,36,32,0.08)", flexShrink: 0 }}>
            {menuOpen ? <X size={16} color="#FAFAF8" strokeWidth={2} /> : <Menu size={16} color="#1A2420" strokeWidth={2} />}
          </button>
        </nav>
      </header>

      {menuOpen && <div onClick={() => setMenuOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(26,36,32,0.28)", backdropFilter: "blur(2px)", zIndex: 90 }} />}

      <div style={{ position: "fixed", top: 70, left: 12, right: 12, background: "#FAFAF8", border: "1px solid #EDE9E0", borderRadius: 16, boxShadow: "0 24px 60px rgba(26,36,32,0.14)", zIndex: 95, overflow: "hidden", transform: menuOpen ? "translateY(0) scale(1)" : "translateY(-8px) scale(0.98)", opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? "auto" : "none", transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)" }}>
        <div style={{ padding: "8px 8px 16px" }}>
          {links.concat({ href: "/query", label: "Discuss Requirement" }).map((l, i) => {
            const active = isActive(l.href);
            const isCta = l.href === "/query";
            return (
              <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: isCta ? "16px 18px" : "14px 18px", marginTop: 4, borderRadius: 12, background: isCta ? "#1A2420" : active ? "#F4F3F0" : "transparent", border: isCta ? "none" : active ? "1px solid #EDE9E0" : "1px solid transparent", textDecoration: "none", opacity: menuOpen ? 1 : 0, transform: menuOpen ? "translateY(0)" : "translateY(6px)", transition: `opacity 300ms ease ${menuOpen ? 40 + i * 30 : 0}ms, transform 300ms ease ${menuOpen ? 40 + i * 30 : 0}ms` }}>
                <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: 15, fontWeight: isCta ? 500 : active ? 500 : 300, color: isCta ? "#FAFAF8" : "#1A2420", letterSpacing: "0.02em" }}>{l.label}</span>
                <span style={{ width: 28, height: 28, borderRadius: "50%", background: isCta ? "#C4A45A" : active ? "#1A2420" : "#fff", border: isCta ? "none" : "1px solid #EDE9E0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <ArrowUpRight size={13} color={isCta || active ? "#FAFAF8" : "#8A9E8C"} strokeWidth={1.8} />
                </span>
              </Link>
            );
          })}
        </div>
        <div style={{ background: "#F4F3F0", borderTop: "1px solid #EDE9E0", padding: "14px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8A9E8C" }}>Est. 2017 — 8 Granted Patents</span>
          <a href="mailto:support@research.thapak.co.in" style={{ fontSize: 12, color: "#5A7A5C", textDecoration: "none", borderBottom: "1px solid #D4DDD6", wordBreak: "break-all" }}>support@research.thapak.co.in</a>
        </div>
      </div>

      <style>{`
        @keyframes spinBlade { from { transform: rotate(0deg)} to { transform: rotate(360deg)} }
        header { max-width: 100vw; box-sizing: border-box; }
        header nav { max-width: 100%; }
        .desktop-nav { display: flex; align-items: center; }
        .mobile-btn { display: none; align-items: center; justify-content: center; }
        @media (max-width: 1080px) { .desktop-nav { display: none !important; } .mobile-btn { display: flex !important; } }
        @media (max-width: 640px) { nav { padding: 0 1rem !important; gap: 8px !important; height: 60px !important; } }
        @media (max-width: 380px) { .logo-sub { display: none; } }
      `}</style>
    </>
  );
}
