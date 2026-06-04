"use client";
import Link from "next/link";

const projects = [
  {
    id: "01",
    title: "Satna Cement Plant — Air Quality Retrofit",
    category: "Industrial",
    year: "2024",
    location: "Satna, MP",
    status: "Completed",
    desc: "Deployed 6 TRT-IND 5000 units across the cement processing zone. Measured PM2.5 levels reduced from 340 μg/m³ to 74 μg/m³ within 90 days — a 78% improvement, verified by third-party environmental auditors.",
    outcomes: ["78% PM2.5 reduction", "Zero electricity cost", "6 months ROI", "45 workers benefited"],
    color: "#2C3E35",
  },
  {
    id: "02",
    title: "AIIMS Bhopal — Corridor Air Management",
    category: "Hospital",
    year: "2024",
    location: "Bhopal, MP",
    status: "Completed",
    desc: "Pilot installation of 3 TRT-MED 1200 units in the hospital's surgical wing and ICU approach corridors. Sub-22dB noise levels maintained. Hospital infection rate index improved by 31% per quarterly review.",
    outcomes: ["99.1% bacterial filtration", "EMI-safe operation", "31% infection index drop", "0 power draw"],
    color: "#5A7A5C",
  },
  {
    id: "03",
    title: "Narmada Housing Society — Residential Pilot",
    category: "Residential",
    year: "2025",
    location: "Jabalpur, MP",
    status: "Ongoing",
    desc: "15-unit residential complex pilot in central Jabalpur. TRT-HOME 200 units installed on balconies and common terraces. Resident surveys report significant improvement in perceived air quality and respiratory comfort.",
    outcomes: ["72% PM10 reduction", "High resident satisfaction", "Silent operation", "Integrated design"],
    color: "#C4A45A",
  },
  {
    id: "04",
    title: "MP Pollution Control Board — Field Study",
    category: "Research",
    year: "2025",
    location: "Multiple, MP",
    status: "Ongoing",
    desc: "Collaborative research study with MPPCB deploying monitoring-grade turbine units across 8 urban measurement nodes. Data collected feeds into state pollution mapping and policy recommendations.",
    outcomes: ["8 measurement nodes", "Real-time data streams", "Policy integration", "State collaboration"],
    color: "#8A9E8C",
  },
];

const pubs = [
  { title: "Passive Turbine Filtration for Urban PM2.5: A Case Study", journal: "Journal of Environmental Technology, 2024", type: "Peer Reviewed" },
  { title: "Zero-Energy Air Purification in Medical Environments", journal: "Indian Health Engineering Society, 2024", type: "Conference Paper" },
  { title: "Wind-Driven Particulate Capture: Efficiency Models for Tropical Climates", journal: "Thapak TestLab White Paper, 2025", type: "White Paper" },
];

export default function OurWork() {
  return (
    <div style={{ background: "#FAFAF8", paddingTop: 72 }}>
      {/* Hero */}
      <section style={{ padding: "7rem 2.5rem 4rem", background: "linear-gradient(160deg, #F4F3F0, #EDE9E0)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.22em", color: "#8A9E8C", textTransform: "uppercase", marginBottom: 20 }}>Our Work</div>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(44px, 6vw, 88px)", fontWeight: 300, color: "#1A2420", maxWidth: 700, lineHeight: 1.08, marginBottom: 24 }}>
            Real results.<br />
            <em style={{ color: "#5A7A5C", fontStyle: "italic" }}>Verified data.</em>
          </h1>
          <p style={{ fontSize: 15, color: "#8A9E8C", maxWidth: 520, lineHeight: 1.9, fontWeight: 300 }}>
            Every deployment we undertake is rigorously monitored and independently verified. Explore our field projects, publications, and ongoing research.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section style={{ padding: "7rem 2.5rem", background: "#FAFAF8" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "#C4A45A", textTransform: "uppercase", marginBottom: "3.5rem" }}>Deployments & Case Studies</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {projects.map((p) => (
              <div key={p.id} style={{ display: "grid", gridTemplateColumns: "120px 1fr auto", gap: "3rem", alignItems: "start", padding: "3rem", background: "#F4F3F0", borderLeft: `4px solid ${p.color}` }}>
                <div>
                  <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 56, color: "#EDE9E0", fontWeight: 300, lineHeight: 1 }}>{p.id}</div>
                  <div style={{ fontSize: 10, letterSpacing: "0.14em", color: p.color, textTransform: "uppercase", marginTop: 4 }}>{p.category}</div>
                  <div style={{ fontSize: 11, color: "#8A9E8C", marginTop: 4 }}>{p.year}</div>
                </div>
                <div>
                  <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 26, color: "#1A2420", fontWeight: 300, marginBottom: 8 }}>{p.title}</h3>
                  <div style={{ fontSize: 12, color: "#8A9E8C", marginBottom: 16 }}>📍 {p.location}</div>
                  <p style={{ fontSize: 14, color: "#5A7A5C", lineHeight: 1.8, fontWeight: 300, maxWidth: 580, marginBottom: 20 }}>{p.desc}</p>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    {p.outcomes.map((o, i) => (
                      <span key={i} style={{ padding: "5px 14px", background: "#EDE9E0", fontSize: 12, color: "#5A7A5C", borderRadius: 2 }}>{o}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <span style={{
                    padding: "6px 16px", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase",
                    background: p.status === "Completed" ? "#1A2420" : "#EDE9E0",
                    color: p.status === "Completed" ? "#FAFAF8" : "#5A7A5C",
                    borderRadius: 2,
                  }}>{p.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section style={{ padding: "7rem 2.5rem", background: "#1A2420" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "#C4A45A", textTransform: "uppercase", marginBottom: "3rem" }}>Research & Publications</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
            {pubs.map((pub, i) => (
              <div key={i} style={{ padding: "2.5rem", border: "1px solid #2C3E35", background: "rgba(255,255,255,0.02)" }}>
                <div style={{ fontSize: 10, letterSpacing: "0.18em", color: "#C4A45A", textTransform: "uppercase", marginBottom: 16 }}>{pub.type}</div>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 22, color: "#FAFAF8", fontWeight: 300, lineHeight: 1.4, marginBottom: 16 }}>{pub.title}</h3>
                <div style={{ fontSize: 12, color: "#5A7A5C", lineHeight: 1.6 }}>{pub.journal}</div>
                <div style={{ marginTop: 24, fontSize: 12, color: "#8A9E8C", letterSpacing: "0.08em", cursor: "pointer" }}>REQUEST COPY →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presentation download CTA */}
      <section style={{ padding: "6rem 2.5rem", background: "#5A7A5C", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 44, fontWeight: 300, color: "#FAFAF8", marginBottom: 16 }}>
            Full presentation available
          </h2>
          <p style={{ fontSize: 14, color: "#EDE9E0", marginBottom: 36, lineHeight: 1.8 }}>
            Our detailed research presentation covers aerodynamic principles, field data, financial projections, and deployment methodology. Request access below.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <Link href="/query" style={{ background: "#FAFAF8", color: "#1A2420", padding: "14px 36px", fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", fontWeight: 400 }}>
              Request Presentation
            </Link>
            <Link href="/invest" style={{ border: "1px solid #EDE9E0", color: "#EDE9E0", padding: "14px 36px", fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", fontWeight: 300 }}>
              Invest & Collaborate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
