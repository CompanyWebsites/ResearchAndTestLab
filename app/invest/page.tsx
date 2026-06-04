"use client";
import Link from "next/link";
import { useState } from "react";

const opportunities = [
  {
    type: "Seed Investment",
    amount: "₹25L – ₹1Cr",
    desc: "Early-stage equity participation as we scale our manufacturing and expand field deployments across Central India.",
    benefits: ["Equity stake", "Board observer rights", "First access to new models", "Quarterly investor briefings"],
    icon: "🌱",
  },
  {
    type: "Strategic Partnership",
    amount: "Custom",
    desc: "Joint ventures with hospitals, municipalities, industrial groups, or real-estate developers to co-deploy our turbine systems at scale.",
    benefits: ["Revenue sharing model", "Co-branding rights", "Priority deployment", "Joint IP on site-specific innovations"],
    icon: "🤝",
  },
  {
    type: "Research Collaboration",
    amount: "Grant / MoU",
    desc: "Academic institutions, IITs, NITs, and research bodies — partner with our TestLab on aerodynamics, materials, or environmental science research.",
    benefits: ["Lab access", "Data co-ownership", "Joint publication rights", "Fellowship opportunities"],
    icon: "🔬",
  },
  {
    type: "Government & CSR",
    amount: "Project-based",
    desc: "We work with state governments, municipal corporations, and CSR mandates to deploy clean-air solutions in public spaces, schools, and hospitals.",
    benefits: ["Policy alignment", "Public health impact", "ESG reporting support", "Named project credit"],
    icon: "🏛️",
  },
];

const faqs = [
  { q: "What stage is Thapak at?", a: "We are a post-prototype, pre-Series A company. We have completed 4 field deployments and are actively scaling manufacturing." },
  { q: "Is the technology patented?", a: "Our core blade geometry and passive filtration mechanism are filed under provisional patent with the Indian Patent Office. Full patent pending as of Q1 2025." },
  { q: "What are your revenue projections?", a: "Detailed financial models are available in our investor deck. Request access via the query form and we will schedule a call." },
  { q: "How do I start a collaboration?", a: "Use the form below or email us at invest@thapakresearch.in. We respond within 48 hours to all inquiries." },
];

export default function Invest() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ background: "#FAFAF8", paddingTop: 72 }}>
      {/* Hero */}
      <section style={{ padding: "7rem 2.5rem 4rem", background: "linear-gradient(160deg, #1A2420, #2C3E35)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.22em", color: "#C4A45A", textTransform: "uppercase", marginBottom: 20 }}>Invest & Collaborate</div>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(44px, 6vw, 88px)", fontWeight: 300, color: "#FAFAF8", maxWidth: 700, lineHeight: 1.08, marginBottom: 24 }}>
            Be part of<br />
            <em style={{ color: "#8A9E8C", fontStyle: "italic" }}>what comes next.</em>
          </h1>
          <p style={{ fontSize: 15, color: "#8A9E8C", maxWidth: 520, lineHeight: 1.9, fontWeight: 300 }}>
            Thapak Research & TestLab is seeking investors, partners, and collaborators who believe the future of clean air is passive, scalable, and zero-energy.
          </p>
          <div style={{ marginTop: 40, display: "flex", gap: "4rem" }}>
            {[["₹0", "Electricity Used"], ["78%", "PM2.5 Reduction"], ["4", "Live Deployments"], ["2025", "Patent Filed"]].map(([v, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 40, color: "#FAFAF8", fontWeight: 300 }}>{v}</div>
                <div style={{ fontSize: 11, color: "#5A7A5C", letterSpacing: "0.14em", textTransform: "uppercase" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section style={{ padding: "7rem 2.5rem", background: "#FAFAF8" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
            <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "#C4A45A", textTransform: "uppercase", marginBottom: 16 }}>Pathways</div>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, color: "#1A2420" }}>
              How you can work with us
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }}>
            {opportunities.map((o, i) => (
              <div key={i} style={{ padding: "3rem", background: "#F4F3F0", borderTop: "3px solid #EDE9E0", transition: "border-color 0.3s" }}
                onMouseOver={e => (e.currentTarget.style.borderTopColor = "#5A7A5C")}
                onMouseOut={e => (e.currentTarget.style.borderTopColor = "#EDE9E0")}
              >
                <div style={{ fontSize: 32, marginBottom: 16 }}>{o.icon}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 16 }}>
                  <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 28, color: "#1A2420", fontWeight: 300 }}>{o.type}</h3>
                  <span style={{ fontSize: 12, color: "#C4A45A", letterSpacing: "0.06em", fontFamily: "DM Sans, sans-serif", fontWeight: 400, marginTop: 6 }}>{o.amount}</span>
                </div>
                <p style={{ fontSize: 14, color: "#5A7A5C", lineHeight: 1.8, fontWeight: 300, marginBottom: 20 }}>{o.desc}</p>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {o.benefits.map((b, j) => (
                    <li key={j} style={{ fontSize: 13, color: "#8A9E8C", padding: "6px 0", display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#5A7A5C", display: "inline-block", flexShrink: 0 }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <section style={{ padding: "7rem 2.5rem", background: "#F4F3F0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "#C4A45A", textTransform: "uppercase", marginBottom: 20 }}>Why Thapak</div>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 46, fontWeight: 300, color: "#1A2420", lineHeight: 1.2, marginBottom: 28 }}>
              The market is ready.<br />
              <em style={{ fontStyle: "italic", color: "#5A7A5C" }}>The technology is proven.</em>
            </h2>
            <p style={{ fontSize: 15, color: "#5A7A5C", lineHeight: 1.9, fontWeight: 300, marginBottom: 20 }}>
              India's air quality crisis affects 1.4 billion people. Pollution-related health costs exceed ₹30 lakh crore annually. Government mandates for industrial air quality are tightening. The demand is vast and urgent.
            </p>
            <p style={{ fontSize: 15, color: "#5A7A5C", lineHeight: 1.9, fontWeight: 300 }}>
              Thapak's zero-electricity model makes it uniquely cost-effective — with no operational energy costs, payback periods are measured in months, not years.
            </p>
          </div>
          <div>
            {[
              { label: "Total Addressable Market", value: "₹18,000 Cr", sub: "Air purification in India by 2028" },
              { label: "Operating Cost", value: "₹0 / month", sub: "No electricity. No consumables." },
              { label: "Deployment Timeline", value: "14 days", sub: "Average site setup time" },
              { label: "Expected Payback", value: "6–18 months", sub: "Depending on model and scale" },
            ].map((m, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "20px 0", borderBottom: "1px solid #D4DDD6" }}>
                <div>
                  <div style={{ fontSize: 13, color: "#8A9E8C", fontWeight: 300 }}>{m.label}</div>
                  <div style={{ fontSize: 11, color: "#D4DDD6", marginTop: 2 }}>{m.sub}</div>
                </div>
                <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 30, color: "#1A2420", fontWeight: 300 }}>{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "7rem 2.5rem", background: "#FAFAF8" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "#C4A45A", textTransform: "uppercase", marginBottom: 16 }}>FAQ</div>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 44, fontWeight: 300, color: "#1A2420" }}>Investor questions</h2>
          </div>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderTop: "1px solid #EDE9E0", overflow: "hidden" }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{
                width: "100%", background: "none", border: "none", padding: "22px 0",
                display: "flex", justifyContent: "space-between", alignItems: "center",
                cursor: "pointer", textAlign: "left",
              }}>
                <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 22, color: "#1A2420", fontWeight: 300 }}>{faq.q}</span>
                <span style={{ fontSize: 22, color: "#5A7A5C", transform: openFaq === i ? "rotate(45deg)" : "none", transition: "transform 0.3s" }}>+</span>
              </button>
              {openFaq === i && (
                <div style={{ paddingBottom: 24 }}>
                  <p style={{ fontSize: 14, color: "#8A9E8C", lineHeight: 1.8, fontWeight: 300 }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
          <div style={{ borderTop: "1px solid #EDE9E0" }} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "6rem 2.5rem", background: "#1A2420", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 44, fontWeight: 300, color: "#FAFAF8", marginBottom: 16 }}>
            Ready to get started?
          </h2>
          <p style={{ fontSize: 14, color: "#8A9E8C", marginBottom: 36, lineHeight: 1.8 }}>Send us your details and we will schedule a discovery call within 48 hours.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <Link href="/query" style={{ background: "#5A7A5C", color: "#FAFAF8", padding: "14px 42px", fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>
              Submit Interest
            </Link>
            <a href="mailto:invest@thapakresearch.in" style={{ border: "1px solid #2C3E35", color: "#8A9E8C", padding: "14px 42px", fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>
              Email Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
