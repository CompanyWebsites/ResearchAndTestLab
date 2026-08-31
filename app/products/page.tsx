"use client";
import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";

const MAX_W = 1280;
const PX = "clamp(1.25rem, 5vw, 2.5rem)";
const SEC_PY = "clamp(3rem, 7vw, 6rem)";

type Maturity = "research" | "pending" | "granted" | "ready";

const CATEGORIES: { id: Maturity; label: string; short: string; desc: string; icon: string; accent: string; }[] = [
  { id: "research", label: "Research-stage Technologies", short: "Research-stage", desc: "Technologies currently under R&D — lab validation, prototyping and controlled testing before filing.", icon: "◈", accent: "#5A7A5C" },
  { id: "pending", label: "Patent-Pending Technologies", short: "Patent-Pending", desc: "Applications under examination — filed with the Indian Patent Office / PCT, claims under review.", icon: "⬢", accent: "#8A6D3B" },
  { id: "granted", label: "Patented Technologies", short: "Granted", desc: "Granted patents — protected intellectual property held by THAPAK, validated in laboratory conditions.", icon: "⬣", accent: "#1A2420" },
  { id: "ready", label: "Commercialization-ready Technologies", short: "Ready to Deploy", desc: "Validated for deployment — available for licensing, manufacturing or technology transfer.", icon: "⬥", accent: "#C4A45A" },
];

const TECHNOLOGIES: { id: string; title: string; area: string; desc: string; maturity: Maturity; patentMeta: string; use: string; badge: string; }[] = [
  { id: "r1", title: "Optical Power Transfer System", area: "Advanced Engineering — Power Systems", desc: "Wattage-based optical power transfer for industrial and remote transmission. Bench-scale validation in progress.", maturity: "research", patentMeta: "R&D — pre-filing, TRL 4", use: "Power transmission, industrial systems", badge: "TRL 4 — Lab Validated" },
  { id: "r2", title: "Hydrogen Jet Engine for UAV Propulsion", area: "Aerospace — Hydrogen Propulsion", desc: "Hydrogen-powered jet propulsion for intercept drones and high-altitude UAVs. Prototype and combustion testing underway.", maturity: "research", patentMeta: "R&D — prototype testing, TRL 5", use: "Defence, aerospace, UAV platforms", badge: "TRL 5 — Prototype" },
  { id: "r3", title: "Mechanical Power Storage System", area: "Energy — Mechanical Storage", desc: "Mechanical storage for renewable integration and backup power. Efficiency and cycling tests ongoing.", maturity: "research", patentMeta: "R&D — demonstrator, TRL 4", use: "Renewable energy, backup systems", badge: "TRL 4 — Demonstrator" },
  { id: "r4", title: "HEPA Filter Manufacturing Process", area: "Materials — Two-Stage Bleaching", desc: "Novel two-stage bleaching process for HEPA filter media. Process parameters under optimization.", maturity: "research", patentMeta: "R&D — process development", use: "Filter production, manufacturing", badge: "Process R&D" },
  { id: "r5", title: "ESP Replacement System", area: "Industrial — Emission Control", desc: "Alternative particulate control technology to replace conventional electrostatic precipitators. Pilot-scale trials.", maturity: "research", patentMeta: "R&D — pilot trials, TRL 5", use: "Industrial emissions, manufacturing", badge: "TRL 5 — Pilot" },

  { id: "p1", title: "Carbon Removal System", area: "Environmental — Carbon Management", desc: "Advanced carbon removal for residential, commercial and industrial environments. High-efficiency absorption architecture.", maturity: "pending", patentMeta: "PCT + 6 process applications — under examination", use: "Homes, offices, industrial facilities", badge: "PCT / Pending" },
  { id: "p2", title: "Sand & Silt Control System", area: "Environmental — Sediment Management", desc: "Engineering solution for sand and silt accumulation in water and civil infrastructure.", maturity: "pending", patentMeta: "Application under examination", use: "Water management, civil engineering", badge: "Pending" },
  { id: "p3", title: "HEPA Rotary Filter — Continuous Filtration", area: "Filtration — Clean Environments", desc: "Rotary HEPA system for continuous high-efficiency filtration without shutdown cycles.", maturity: "pending", patentMeta: "Application under examination", use: "Clean rooms, hospitals, industry", badge: "Pending" },
  { id: "p4", title: "High Performance Insulating Board", area: "Materials — Thermal Insulation", desc: "99.99% insulating capacity board for industrial and construction insulation.", maturity: "pending", patentMeta: "Composition filing — under examination", use: "Industrial, construction", badge: "Pending" },
  { id: "p5", title: "Other Proprietary Technologies", area: "Multiple Engineering Domains", desc: "Additional filings spanning energy, ventilation and environmental domains — details under disclosure.", maturity: "pending", patentMeta: "Multiple applications — under examination", use: "Under disclosure", badge: "Under Examination" },

  { id: "g1", title: "Ambient Air Purification Without Electricity", area: "Environmental — Air Purification", desc: "Purification of ambient air using mechanical / natural energy without conventional power.", maturity: "granted", patentMeta: "Granted — Patent register available on request", use: "Ambient / outdoor air quality", badge: "Granted" },
  { id: "g2", title: "Closed-Premises Air Purification", area: "Environmental — Indoor Air Quality", desc: "Air purification and circulation in enclosed premises without conventional power.", maturity: "granted", patentMeta: "Granted — Patent register available on request", use: "Enclosed premises, buildings", badge: "Granted" },
  { id: "g3", title: "Artificial Ventilation System", area: "Environmental — Ventilation", desc: "Mechanically assisted ventilation for buildings, mines and habitats.", maturity: "granted", patentMeta: "Granted — Patent register available on request", use: "Ventilation systems", badge: "Granted" },
  { id: "g4", title: "Carbon Absorption Technology", area: "Environmental — Carbon Management", desc: "High-efficiency, cost-effective carbon absorption and removal.", maturity: "granted", patentMeta: "Granted — Patent register available on request", use: "Carbon capture & absorption", badge: "Granted" },
  { id: "g5", title: "Oxygen Control System", area: "Environmental — Controlled Environments", desc: "Controlled oxygen management in enclosed premises and specialized facilities.", maturity: "granted", patentMeta: "Granted — Patent register available on request", use: "Enclosed premises, specialized facilities", badge: "Granted" },
  { id: "g6", title: "Mine Air Purification & Ventilation", area: "Mining & Industrial Ventilation", desc: "Ventilation and air-quality management for mining environments.", maturity: "granted", patentMeta: "Granted — Patent register available on request", use: "Mining environments", badge: "Granted" },
  { id: "g7", title: "Solar Thermal Energy Storage", area: "Energy — Solar Thermal", desc: "High-efficiency solar thermal power storage — 74% thermal recovery validated.", maturity: "granted", patentMeta: "Granted — Patent register available on request", use: "Energy storage, thermal power", badge: "Granted" },

  { id: "c1", title: "Residential Air Purifier — Without Electricity", area: "Product — Ambient Air Purification", desc: "Passive indoor air purification validated from granted ambient-air patent. For homes, rural and emergency shelters.", maturity: "ready", patentMeta: "Granted base patent — licensing available", use: "Residential buildings, rural, shelters", badge: "Licensing Available" },
  { id: "c2", title: "Commercial Air Purifier — Without Electricity", area: "Product — Indoor Air Quality", desc: "Commercial-scale passive purification for offices, schools and hospitals. No power draw.", maturity: "ready", patentMeta: "Granted base patent — licensing available", use: "Offices, schools, hospitals, complexes", badge: "Licensing Available" },
  { id: "c3", title: "Electrostatic Precipitator (ESP) — Industrial Grade", area: "Product — Pollution Control", desc: "Electrostatic particulate removal for PM2.5 and fine particles — manufacturing and deployment ready.", maturity: "ready", patentMeta: "Manufacturing-ready — technology transfer", use: "Industrial emissions, manufacturing", badge: "Transfer Ready" },
  { id: "c4", title: "Automatic Oxygen Generation System", area: "Product — Environmental Control", desc: "Automated oxygen generation and level control for enclosed and high-altitude environments.", maturity: "ready", patentMeta: "Granted base patent — manufacturing ready", use: "Closed premises, high-altitude, emergency", badge: "Manufacturing Ready" },
  { id: "c5", title: "Solar Thermal Power Storage — Transfer Package", area: "Product — Energy Storage", desc: "Transfer package for solar thermal storage (74% recovery) — validated, documented and available for industrial adoption.", maturity: "ready", patentMeta: "Granted — dossier & pilot data under NDA", use: "Solar plants, industrial heat storage", badge: "Licensing & Transfer" },
];

function ScrollRow({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  const check = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    check();
    el.addEventListener("scroll", check, { passive: true });
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => { el.removeEventListener("scroll", check); ro.disconnect(); };
  }, [check]);
  const scroll = (dir: "left" | "right") => ref.current?.scrollBy({ left: dir === "left" ? -240 : 240, behavior: "smooth" });
  const arrow: React.CSSProperties = { position: "absolute", top: 0, bottom: 0, width: 36, display: "flex", alignItems: "center", justifyContent: "center", border: "none", cursor: "pointer", zIndex: 2, background: "linear-gradient(to right, rgba(26,36,32,0.9) 60%, transparent)", color: "#FAFAF8", fontSize: 18 };
  return (
    <div style={{ position: "relative", ...style }}>
      {canLeft && <button onClick={() => scroll("left")} aria-label="Scroll left" style={{ ...arrow, left: 0 }}>‹</button>}
      <div ref={ref} style={{ display: "flex", overflowX: "auto", scrollbarWidth: "none", gap: 10, paddingBottom: 2, scrollBehavior: "smooth" as const }}>{children}</div>
      {canRight && <button onClick={() => scroll("right")} aria-label="Scroll right" style={{ ...arrow, right: 0, background: "linear-gradient(to left, rgba(26,36,32,0.9) 60%, transparent)" }}>›</button>}
    </div>
  );
}

export default function Products() {
  const [active, setActive] = useState<Maturity | "all">("all");
  const container: React.CSSProperties = { maxWidth: MAX_W, margin: "0 auto", width: "100%", minWidth: 0, boxSizing: "border-box" as const };
  const visibleCats = active === "all" ? CATEGORIES : CATEGORIES.filter(c => c.id === active);
  const totalBy = (m: Maturity) => TECHNOLOGIES.filter(t => t.maturity === m).length;

  return (
    <div style={{ background: "#FAFAF8", paddingTop: 72, overflowX: "hidden", width: "100%" }}>
      <section style={{ padding: `7rem ${PX} 4rem`, background: "linear-gradient(160deg, #F4F3F0 55%, #EDE9E0 100%)", width: "100%", boxSizing: "border-box", overflow: "hidden" }}>
        <div style={container}>
          <div style={{ fontSize: 11, letterSpacing: "0.22em", color: "#C4A45A", textTransform: "uppercase", marginBottom: 18 }}>Technologies & Solutions</div>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(36px, 6vw, 84px)", fontWeight: 300, color: "#1A2420", lineHeight: 1, maxWidth: 760, marginBottom: 20, overflowWrap: "break-word" }}>
            Technologies &<br /><em style={{ color: "#5A7A5C", fontStyle: "italic", fontWeight: 300 }}>Solutions</em>
          </h1>
          <p style={{ fontSize: 15, color: "#5A7A5C", maxWidth: 640, lineHeight: 1.9, fontWeight: 300, marginBottom: 16, overflowWrap: "break-word" }}>
            A research laboratory does not sell products — it develops technologies. Each technology below is shown with its maturity: whether it is still in R&D, filed and pending examination, granted as protected IP, or validated and available for licensing and deployment.
          </p>
          <p style={{ fontSize: 12.5, color: "#8A9E8C", maxWidth: 640, lineHeight: 1.7, fontWeight: 300, borderLeft: "2px solid #EDE9E0", paddingLeft: 14, overflowWrap: "break-word" }}>
            This distinction is essential for credibility. We present status, patent reference availability, and deployment readiness — not marketing claims — so partners can evaluate on evidence.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
            <Link href="/intellectual-property" style={{ background: "#1A2420", color: "#FAFAF8", padding: "12px 24px", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", textAlign: "center" }}>View Patent Register →</Link>
            <Link href="/query" style={{ border: "1px solid #1A2420", color: "#1A2420", padding: "12px 24px", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", textAlign: "center" }}>Request Dossier under NDA</Link>
          </div>
        </div>
      </section>

      <section style={{ background: "#1A2420", padding: `1.25rem ${PX}`, width: "100%", boxSizing: "border-box" }}>
        <div style={{ ...container, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }} className="statsGrid">
          {CATEGORIES.map(c => (
            <div key={c.id} style={{ textAlign: "center", padding: "0.75rem 0", borderRight: c.id !== "ready" ? "1px solid rgba(212,221,214,0.12)" : "none" }} className="statItem">
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 32, color: "#FAFAF8", fontWeight: 300, lineHeight: 1 }}>{totalBy(c.id)}</div>
              <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8A9E8C", marginTop: 6, lineHeight: 1.4 }}>{c.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: `1.5rem ${PX} 0`, background: "#FAFAF8", position: "sticky", top: 72, zIndex: 5, borderBottom: "1px solid #EDE9E0", width: "100%", boxSizing: "border-box" }}>
        <div style={container}>
          <ScrollRow>
            {( [{ id: "all", label: "All Technologies", short: "All" } as const, ...CATEGORIES.map(c => ({ id: c.id, label: c.label, short: c.short })) ] ).map(tab => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id as Maturity | "all")}
                style={{
                  flex: "0 0 auto",
                  padding: "10px 18px",
                  fontSize: 12,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  border: "1px solid",
                  borderColor: active === tab.id ? "#1A2420" : "#EDE9E0",
                  background: active === tab.id ? "#1A2420" : "#fff",
                  color: active === tab.id ? "#FAFAF8" : "#5A7A5C",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "all 0.2s",
                }}
              >
                {tab.short}
              </button>
            ))}
          </ScrollRow>
        </div>
      </section>

      <div style={{ padding: `${SEC_PY} ${PX}`, background: "#FAFAF8", width: "100%", boxSizing: "border-box" }}>
        <div style={container}>
          <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
            {visibleCats.map(cat => {
              const items = TECHNOLOGIES.filter(t => t.maturity === cat.id);
              return (
                <section key={cat.id} id={cat.id} style={{ scrollMarginTop: 140, minWidth: 0 }}>
                  <div style={{ display: "flex", gap: "1.5rem", alignItems: "start", flexWrap: "wrap", marginBottom: "1.75rem", minWidth: 0 }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", border: `1px solid ${cat.accent}`, display: "flex", alignItems: "center", justifyContent: "center", color: cat.accent, fontSize: 18, flexShrink: 0 }}>{cat.icon}</div>
                    <div style={{ flex: 1, minWidth: 240 }}>
                      <div style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: cat.accent, marginBottom: 6 }}>{cat.label}</div>
                      <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 300, color: "#1A2420", lineHeight: 1.15, marginBottom: 8, overflowWrap: "break-word" }}>
                        {cat.label} <span style={{ color: "#8A9E8C", fontSize: 14, letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "DM Sans, sans-serif", fontWeight: 300 }}>· {items.length}</span>
                      </h2>
                      <p style={{ fontSize: 13.5, color: "#5A7A5C", lineHeight: 1.7, fontWeight: 300, maxWidth: 720, overflowWrap: "break-word" }}>{cat.desc}</p>
                    </div>
                    <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8A9E8C", background: "#F4F3F0", padding: "6px 10px", whiteSpace: "nowrap", alignSelf: "center" }}>
                      {cat.id === "research" && "TRL 4–5"}
                      {cat.id === "pending" && "Under Examination"}
                      {cat.id === "granted" && "29 Applications · 8 Granted · 3 PCT"}
                      {cat.id === "ready" && "Licensing / Transfer"}
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem", minWidth: 0 }} className="techGrid">
                    {items.map(t => (
                      <div key={t.id} style={{ background: "#fff", border: "1px solid #EDE9E0", borderTop: `3px solid ${cat.id === "granted" ? "#1A2420" : cat.id === "ready" ? "#C4A45A" : cat.id === "pending" ? "#8A6D3B" : "#5A7A5C"}`, padding: "1.5rem", display: "flex", flexDirection: "column", minWidth: 0, overflowWrap: "break-word" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", gap: 8, alignItems: "center", marginBottom: 12, flexWrap: "wrap" }}>
                          <span style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", background: cat.id === "granted" ? "#1A2420" : cat.id === "ready" ? "#C4A45A" : cat.id === "pending" ? "#F4F3F0" : "#E8F0E9", color: cat.id === "granted" ? "#FAFAF8" : cat.id === "ready" ? "#1A2420" : cat.accent, padding: "4px 8px", border: cat.id === "pending" ? "1px solid #EDE9E0" : "none", whiteSpace: "nowrap" }}>{t.badge}</span>
                          <span style={{ fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8A9E8C" }}>{cat.short}</span>
                        </div>
                        <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 17, color: "#1A2420", lineHeight: 1.35, marginBottom: 6, minWidth: 0 }}>{t.title}</div>
                        <div style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "#C4A45A", marginBottom: 10 }}>{t.area}</div>
                        <div style={{ fontSize: 13, color: "#5A7A5C", lineHeight: 1.7, fontWeight: 300, marginBottom: 14, flex: 1 }}>{t.desc}</div>
                        <div style={{ borderTop: "1px solid #F4F3F0", paddingTop: 10, display: "flex", flexDirection: "column", gap: 6, marginBottom: 14 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                            <span style={{ fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8A9E8C" }}>Patent Status</span>
                            <span style={{ fontSize: 11, color: "#1A2420", textAlign: "right", lineHeight: 1.4, flex: 1 }}>{t.patentMeta}</span>
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                            <span style={{ fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8A9E8C" }}>Application</span>
                            <span style={{ fontSize: 11, color: "#5A7A5C", textAlign: "right", flex: 1 }}>{t.use}</span>
                          </div>
                        </div>
                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                          {cat.id === "ready" ? (
                            <>
                              <Link href="/query" style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", background: "#1A2420", color: "#FAFAF8", padding: "8px 14px", textDecoration: "none" }}>Licence →</Link>
                              <Link href="/intellectual-property" style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "#1A2420", borderBottom: "1px solid #1A2420", paddingBottom: 2, textDecoration: "none" }}>View Patent</Link>
                            </>
                          ) : cat.id === "granted" ? (
                            <Link href="/query" style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "#1A2420", borderBottom: "1px solid #1A2420", paddingBottom: 2, textDecoration: "none" }}>Request Dossier under NDA →</Link>
                          ) : cat.id === "pending" ? (
                            <span style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8A9E8C" }}>Examination on request</span>
                          ) : (
                            <span style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A7A5C" }}>Lab data on request — TRL disclosed under discussion</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          <div style={{ marginTop: "3.5rem", background: "#1A2420", borderLeft: "3px solid #C4A45A", padding: "2rem 2rem", display: "flex", flexDirection: "column", gap: 8, width: "100%", boxSizing: "border-box" }}>
            <div style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "#C4A45A" }}>Governance & Accuracy</div>
            <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 20, color: "#FAFAF8", fontWeight: 300, lineHeight: 1.4 }}>How we present each technology</div>
            <div style={{ fontSize: 13, color: "#D4DDD6", lineHeight: 1.6 }}>Patent Title <span style={{ color: "#5A7A5C" }}> | </span> Application / Patent No. <span style={{ color: "#5A7A5C" }}> | </span> Status (Research / Pending / Granted / Ready) <span style={{ color: "#5A7A5C" }}> | </span> Technology Area <span style={{ color: "#5A7A5C" }}> | </span> Application / Use</div>
            <p style={{ fontSize: 13, color: "#8A9E8C", lineHeight: 1.7, fontWeight: 300, maxWidth: 760, marginTop: 4 }}>
              Individual technology dossiers follow this format and link to the specification or validated test data. We do not publish broad efficacy claims without that linkage. Full patent numbers and claims are shared via the register under appropriate confidentiality.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
              <Link href="/intellectual-property" style={{ background: "#FAFAF8", color: "#1A2420", padding: "10px 20px", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>Explore Patent Portfolio</Link>
              <Link href="/query" style={{ border: "1px solid rgba(250,250,248,0.2)", color: "#FAFAF8", padding: "10px 20px", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>Request Register under NDA</Link>
            </div>
          </div>
        </div>
      </div>

      <section style={{ padding: `${SEC_PY} ${PX}`, background: "#1A2420", textAlign: "center", width: "100%", boxSizing: "border-box" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", width: "100%", minWidth: 0, boxSizing: "border-box" }}>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 300, color: "#FAFAF8", marginBottom: 12, overflowWrap: "break-word" }}>Build on protected research</h2>
          <p style={{ fontSize: 14, color: "#8A9E8C", lineHeight: 1.8, marginBottom: 28, overflowWrap: "break-word" }}>Whether you want to license a granted technology, co-develop a pending filing, or transfer a ready solution to production — there is a structured route to collaborate.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <Link href="/query" style={{ background: "#5A7A5C", color: "#FAFAF8", padding: "14px 32px", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>Start a Conversation</Link>
            <Link href="/invest" style={{ border: "1px solid #2C3E35", color: "#8A9E8C", padding: "14px 32px", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>Collaboration Routes</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:1100px){ .techGrid{grid-template-columns:repeat(2,1fr)!important} }
        @media(max-width:900px){ .statsGrid{grid-template-columns:repeat(2,1fr)!important; gap:0!important} .statItem{border-right:none!important; border-bottom:1px solid rgba(212,221,214,0.12); padding:1rem 0.5rem!important} .statItem:nth-child(odd){border-right:1px solid rgba(212,221,214,0.12)!important} .statItem:nth-last-child(-n+2){border-bottom:none!important} }
        @media(max-width:640px){ .techGrid{grid-template-columns:1fr!important} }
        @media(max-width:380px){ .statsGrid{grid-template-columns:1fr!important} .statItem{border-right:none!important} .statItem:nth-child(odd){border-right:none!important} }
      `}</style>
    </div>
  );
}
