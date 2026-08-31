"use client";
import Link from "next/link";

const whatWeDo = [
  { n: "01", title: "Research & Technology Development", desc: "Indigenous engineering research from concept to working prototype across environmental, energy and material domains." },
  { n: "02", title: "Intellectual Property Development", desc: "Systematic conversion of research outcomes into patents, PCT filings and protectable technology assets." },
  { n: "03", title: "Specialized Testing", desc: "Rigorous laboratory evaluation and scientific validation for performance, reliability and real-world readiness." },
  { n: "04", title: "Environmental Research", desc: "Applied research on air quality, carbon, ventilation and ecosystem-level environmental challenges." },
  { n: "05", title: "Pollution Mapping & AQI Consultancy", desc: "Data-driven mapping, AQI assessment and consultancy for industrial, urban and compliance needs." },
  { n: "06", title: "Industrial & Automation Consultancy", desc: "Process engineering, automation and scale-up consultancy bridging lab innovation to industrial deployment." },
];

const ipDomains = [
  { title: "Air Purification", desc: "Ambient & enclosed-premises purification without conventional power." },
  { title: "Carbon Management", desc: "High-efficiency, cost-effective carbon absorption & removal." },
  { title: "Ventilation", desc: "Mechanical and passive ventilation for buildings, mines & habitats." },
  { title: "Energy Systems", desc: "Solar thermal storage & mechanical power storage technologies." },
  { title: "Environmental Technologies", desc: "Oxygen control, sediment management & ecosystem solutions." },
  { title: "Advanced Engineering", desc: "Materials, optical power transfer & hydrogen propulsion." },
];

const technologies = [
  { id: "01", title: "Ambient Air Purification Without Electricity", area: "Air Purification", status: "Granted" },
  { id: "02", title: "Closed-Premises Air Purification", area: "Indoor Air Quality", status: "Granted" },
  { id: "03", title: "Artificial Ventilation System", area: "Ventilation", status: "Granted" },
  { id: "04", title: "Carbon Absorption Technology", area: "Carbon Management", status: "Granted" },
];

const services = ["Research", "Testing", "Environmental", "Industrial", "Automation"];
const pipeline = ["Research", "Prototype", "Testing", "IP", "Technology Transfer", "Commercialization"];
const collaborate = [
  { title: "Joint Research", desc: "Co-develop the next filing with our lab." },
  { title: "Testing", desc: "Access specialized testing & validation." },
  { title: "Technology Licensing", desc: "License granted, deployable IP." },
  { title: "Technology Transfer", desc: "Lab-to-industry transfer & scale-up." },
  { title: "Industrial Collaboration", desc: "From pilot to production, together." },
  { title: "Investment", desc: "Fund protected, commercially-ready tech." },
];

export default function Home() {
  return (
    <div style={{ background: "#FAFAF8" }}>
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "8.5rem 2.5rem 4rem", position: "relative", overflow: "hidden", background: "linear-gradient(160deg, #FAFAF8 0%, #F4F3F0 55%, #EDE9E0 100%)" }}>
        <div style={{ position: "absolute", right: "-10%", top: "10%", width: 600, height: 600, borderRadius: "50%", border: "1px solid rgba(138,158,140,0.15)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: "-5%", top: "15%", width: 450, height: 450, borderRadius: "50%", border: "1px solid rgba(138,158,140,0.1)", pointerEvents: "none" }} />
        <div className="float-anim" style={{ position: "absolute", right: "8%", top: "50%", transform: "translateY(-50%)", opacity: 0.1 }}>
          <svg width="380" height="380" viewBox="0 0 200 200" fill="none"><circle cx="100" cy="100" r="6" fill="#5A7A5C" /><g className="turbine-blade"><ellipse cx="100" cy="55" rx="9" ry="44" fill="#5A7A5C" /><ellipse cx="100" cy="55" rx="9" ry="44" fill="#5A7A5C" transform="rotate(120 100 100)" /><ellipse cx="100" cy="55" rx="9" ry="44" fill="#5A7A5C" transform="rotate(240 100 100)" /></g><circle cx="100" cy="100" r="95" stroke="#5A7A5C" strokeWidth="0.5" /><circle cx="100" cy="100" r="75" stroke="#5A7A5C" strokeWidth="0.3" strokeDasharray="4 6" /></svg>
        </div>
        <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%", position: "relative", zIndex: 2 }}>
          <div className="animate-fade-up opacity-0 animate-delay-1" style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4A45A", marginBottom: 20, fontWeight: 400 }}>THAPAK Research & Test Lab Pvt. Ltd.</div>
          <h1 className="animate-fade-up opacity-0 animate-delay-1" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(42px, 7vw, 88px)", fontWeight: 300, color: "#1A2420", lineHeight: 1, maxWidth: 720, marginBottom: 24 }}>
            WHERE RESEARCH<br /><em style={{ color: "#5A7A5C", fontStyle: "italic", fontWeight: 300 }}>BECOMES</em><br />INTELLECTUAL PROPERTY.
          </h1>
          <p className="animate-fade-up opacity-0 animate-delay-2" style={{ fontSize: 15, color: "#5A7A5C", maxWidth: 520, lineHeight: 1.9, fontWeight: 300, marginBottom: 40 }}>
            Specialized corporate research and testing organization developing proprietary engineering technologies, patented solutions and commercially applicable innovations.
          </p>
          <div className="animate-fade-up opacity-0 animate-delay-3" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/about" style={{ background: "#1A2420", color: "#FAFAF8", padding: "14px 28px", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>Our Research</Link>
            <Link href="/intellectual-property" style={{ background: "#C4A45A", color: "#1A2420", padding: "14px 28px", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", fontWeight: 500 }}>Our IP</Link>
            <Link href="/invest" style={{ border: "1px solid #1A2420", color: "#1A2420", padding: "13px 28px", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>Collaborate With Us</Link>
          </div>
        </div>
      </section>

      <section style={{ background: "#1A2420", padding: "2.5rem 2.5rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.5rem" }}>
          {[{ v: "2017", l: "Established" }, { v: "29", l: "Patent Applications" }, { v: "8", l: "Granted Patents" }, { v: "3", l: "PCT Applications" }].map((s) => (
            <div key={s.l} style={{ textAlign: "center", borderRight: s.l !== "PCT Applications" ? "1px solid rgba(212,221,214,0.12)" : "none", padding: "0.5rem 0" }}>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 44, color: "#FAFAF8", fontWeight: 300, lineHeight: 1 }}>{s.v}</div>
              <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8A9E8C", marginTop: 8 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "6rem 2.5rem", background: "#FAFAF8" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ maxWidth: 640, marginBottom: "3rem" }}>
            <div style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4A45A", marginBottom: 12 }}>What We Do</div>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(30px,4.5vw,48px)", fontWeight: 300, color: "#1A2420", lineHeight: 1.15 }}>Research that moves from lab<br /><em style={{ fontStyle: "italic", color: "#5A7A5C" }}>to real-world impact.</em></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }}>
            {whatWeDo.map((c) => (
              <div key={c.n} style={{ background: "#fff", border: "1px solid #EDE9E0", padding: "2rem 1.75rem", borderTop: "2px solid #EDE9E0" }}>
                <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 12, letterSpacing: "0.14em", color: "#C4A45A", marginBottom: 16, paddingBottom: 12, borderBottom: "1px solid #EDE9E0" }}>{c.n}</div>
                <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 19, color: "#1A2420", lineHeight: 1.3, marginBottom: 10 }}>{c.title}</div>
                <div style={{ fontSize: 13, color: "#8A9E8C", lineHeight: 1.75, fontWeight: 300 }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "6rem 2.5rem", background: "#F4F3F0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4A45A", marginBottom: 12 }}>Our Intellectual Property</div>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(30px,4vw,44px)", fontWeight: 300, color: "#1A2420" }}>Six domains. One purpose — deployable innovation.</h2>
            <p style={{ fontSize: 14, color: "#8A9E8C", maxWidth: 560, margin: "12px auto 0", lineHeight: 1.8, fontWeight: 300 }}>Each technology is filed or granted, validated in lab, and held for licensing, transfer or joint development.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.25rem" }}>
            {ipDomains.map((d) => (
              <div key={d.title} style={{ background: "#FAFAF8", border: "1px solid #EDE9E0", padding: "1.75rem", display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C4A45A" }}>{d.title}</div>
                <div style={{ fontSize: 13, color: "#5A7A5C", lineHeight: 1.7, fontWeight: 300 }}>{d.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/intellectual-property" style={{ display: "inline-block", border: "1px solid #1A2420", color: "#1A2420", padding: "12px 28px", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>Explore Patent Portfolio →</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "6rem 2.5rem", background: "#FAFAF8" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4A45A", marginBottom: 12 }}>Selected Patented Technologies</div>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(28px,4vw,42px)", fontWeight: 300, color: "#1A2420" }}>Built for deployment, not for display.</h2>
            </div>
            <Link href="/intellectual-property" style={{ fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A7A5C", textDecoration: "none", borderBottom: "1px solid #5A7A5C", paddingBottom: 2 }}>View All 8 Technologies →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.25rem" }}>
            {technologies.map((t) => (
              <div key={t.id} style={{ background: "#fff", border: "1px solid #EDE9E0", borderTop: "3px solid #EDE9E0", padding: "1.75rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 12, letterSpacing: "0.14em", color: "#C4A45A" }}>{t.id}</span>
                  <span style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", background: "#1A2420", color: "#FAFAF8", padding: "3px 8px" }}>{t.status}</span>
                </div>
                <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 17, color: "#1A2420", lineHeight: 1.35, marginBottom: 10 }}>{t.title}</div>
                <div style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8A9E8C" }}>{t.area}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "4rem 2.5rem", background: "#1A2420", textAlign: "center" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4A45A", marginBottom: 16 }}>Our Services</div>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "12px" }}>
            {services.map((s) => (
              <span key={s} style={{ border: "1px solid rgba(212,221,214,0.2)", color: "#D4DDD6", padding: "10px 22px", fontSize: 13, letterSpacing: "0.06em" }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "5rem 2.5rem", background: "#F4F3F0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4A45A", marginBottom: 12 }}>From Research to Application</div>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(26px,4vw,40px)", fontWeight: 300, color: "#1A2420", marginBottom: "2.5rem" }}>The journey of every technology</h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", gap: 0 }}>
            {pipeline.map((step, i) => (
              <div key={step} style={{ display: "flex", alignItems: "center", gap: 0 }}>
                <div style={{ background: step === "IP" ? "#C4A45A" : "#fff", color: step === "IP" ? "#1A2420" : "#1A2420", border: "1px solid #EDE9E0", padding: "12px 18px", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: step === "IP" ? 500 : 300, minWidth: 90, textAlign: "center" }}>{step}</div>
                {i < pipeline.length - 1 && <span style={{ color: "#8A9E8C", padding: "0 6px", fontSize: 14 }}>→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "6rem 2.5rem", background: "#FAFAF8" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ maxWidth: 640, marginBottom: "2.5rem" }}>
            <div style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4A45A", marginBottom: 12 }}>Collaborate With THAPAK</div>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(30px,4vw,46px)", fontWeight: 300, color: "#1A2420", lineHeight: 1.15 }}>Research is better <em style={{ fontStyle: "italic", color: "#5A7A5C" }}>when shared.</em></h2>
            <p style={{ fontSize: 14, color: "#8A9E8C", lineHeight: 1.8, fontWeight: 300, marginTop: 12 }}>Whether you want to co-research, license, test or invest — there is a structured route to work together.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.25rem", marginBottom: "2.5rem" }}>
            {collaborate.map((c) => (
              <div key={c.title} style={{ background: "#fff", border: "1px solid #EDE9E0", padding: "1.5rem" }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: "#1A2420", letterSpacing: "0.04em", marginBottom: 6 }}>{c.title}</div>
                <div style={{ fontSize: 13, color: "#8A9E8C", lineHeight: 1.6, fontWeight: 300 }}>{c.desc}</div>
              </div>
            ))}
          </div>
          <Link href="/query" style={{ display: "inline-block", background: "#5A7A5C", color: "#FAFAF8", padding: "14px 36px", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>Start a Discussion →</Link>
        </div>
      </section>

      <section style={{ background: "#EDE9E0", padding: "2rem 2.5rem", textAlign: "center" }}>
        <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 18, color: "#1A2420", fontWeight: 300 }}>THAPAK Research & Test Lab Pvt. Ltd.</div>
        <div style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8A9E8C", marginTop: 4 }}>Research &nbsp;|&nbsp; Testing &nbsp;|&nbsp; Intellectual Property &nbsp;|&nbsp; Engineering</div>
      </section>

      <style>{`@media(max-width:900px){section{padding-left:1.75rem!important;padding-right:1.75rem!important}}@media(max-width:640px){section{padding-left:1.25rem!important;padding-right:1.25rem!important}}`}</style>
    </div>
  );
}
