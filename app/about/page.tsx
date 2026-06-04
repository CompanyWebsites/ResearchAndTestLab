"use client";
import Link from "next/link";

const team = [
  { name: "Dr. Aryan Thapak", role: "Founder & Chief Research Officer", bio: "Aerodynamics PhD from IIT Bombay. 12+ years in sustainable energy research.", initials: "AT" },
  { name: "Priya Mehta", role: "Head of Engineering", bio: "Materials engineer specializing in passive airflow systems and turbine blade composites.", initials: "PM" },
  { name: "Rajan Sinha", role: "Lead TestLab Scientist", bio: "Expert in pollution measurement, field testing, and environmental impact assessment.", initials: "RS" },
  { name: "Shreya Kapoor", role: "Business & Partnerships", bio: "Connects Thapak's innovations to industries, investors, and healthcare systems globally.", initials: "SK" },
];

const timeline = [
  { year: "2022", event: "Concept & Research Phase", desc: "Initial aerodynamic research begins, studying passive wind channeling for pollution reduction." },
  { year: "2023", event: "Prototype Development", desc: "First working prototype tested in controlled lab environment at our Jabalpur TestLab." },
  { year: "2024", event: "Field Testing", desc: "Pilot deployments across three industrial sites in Madhya Pradesh. 68% particulate reduction recorded." },
  { year: "2025", event: "Commercial Launch", desc: "Official launch of Industrial, Hospital, and Home model product lines." },
];

export default function About() {
  return (
    <div style={{ background: "#FAFAF8", paddingTop: 72 }}>
      {/* Hero */}
      <section style={{ padding: "7rem 2.5rem 5rem", background: "linear-gradient(160deg, #F4F3F0, #EDE9E0)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.22em", color: "#8A9E8C", textTransform: "uppercase", marginBottom: 20 }}>About Us</div>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(44px, 6vw, 88px)", fontWeight: 300, color: "#1A2420", maxWidth: 700, lineHeight: 1.08, marginBottom: 32 }}>
            Built on science.<br />
            <em style={{ color: "#5A7A5C", fontStyle: "italic" }}>Driven by purpose.</em>
          </h1>
          <p style={{ fontSize: 16, color: "#5A7A5C", maxWidth: 580, lineHeight: 1.9, fontWeight: 300 }}>
            Thapak Research & TestLab was born from a simple question: what if wind could do more than power a turbine — what if it could heal the air we breathe?
          </p>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: "7rem 2.5rem", background: "#FAFAF8" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start" }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "#C4A45A", textTransform: "uppercase", marginBottom: 20 }}>Our Story</div>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 42, fontWeight: 300, color: "#1A2420", marginBottom: 28, lineHeight: 1.2 }}>
              The idea that changed everything
            </h2>
            <p style={{ fontSize: 15, color: "#5A7A5C", lineHeight: 1.9, marginBottom: 20, fontWeight: 300 }}>
              Founded in Jabalpur, Madhya Pradesh, Thapak Research & TestLab emerged from years of frustration watching conventional solutions fail to address ground-level air pollution in industrial and urban settings.
            </p>
            <p style={{ fontSize: 15, color: "#5A7A5C", lineHeight: 1.9, marginBottom: 20, fontWeight: 300 }}>
              Our breakthrough came when we discovered that specially shaped turbine blades, designed to channel and filter air rather than generate electricity, could reduce particulate matter by over 70% in localized environments — using only the wind that already exists.
            </p>
            <p style={{ fontSize: 15, color: "#5A7A5C", lineHeight: 1.9, fontWeight: 300 }}>
              Today we operate across three verticals — industrial, medical, and residential — bringing passive air purification to every environment that needs it.
            </p>
          </div>

          {/* Values */}
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "#C4A45A", textTransform: "uppercase", marginBottom: 20 }}>Core Values</div>
            {[
              { title: "Zero Consumption", desc: "Every product we build draws zero electricity. Wind is the only fuel we need." },
              { title: "Rigorous Science", desc: "All claims are lab-tested and field-verified. We publish our data." },
              { title: "Inclusive Design", desc: "From hospitals to homes — clean air should be accessible to all." },
              { title: "Open Collaboration", desc: "We partner with researchers, institutions, and industries who share our vision." },
            ].map((v, i) => (
              <div key={i} style={{ display: "flex", gap: 20, marginBottom: 28, padding: "20px 0", borderBottom: "1px solid #EDE9E0" }}>
                <div style={{ width: 40, height: 40, minWidth: 40, background: "#EDE9E0", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Cormorant Garamond, serif", fontSize: 18, color: "#5A7A5C" }}>{i + 1}</div>
                <div>
                  <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 20, color: "#1A2420", marginBottom: 6 }}>{v.title}</div>
                  <div style={{ fontSize: 14, color: "#8A9E8C", lineHeight: 1.7, fontWeight: 300 }}>{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: "7rem 2.5rem", background: "#F4F3F0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "#C4A45A", textTransform: "uppercase", marginBottom: 16 }}>Our Journey</div>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, color: "#1A2420" }}>From idea to innovation</h2>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1, background: "#D4DDD6", transform: "translateX(-50%)" }} />
            {timeline.map((t, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", marginBottom: "3rem", alignItems: "center" }}>
                {i % 2 === 0 ? (
                  <>
                    <div style={{ textAlign: "right", padding: "0 3rem 0 0" }}>
                      <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 48, color: "#D4DDD6", fontWeight: 300 }}>{t.year}</div>
                      <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 22, color: "#1A2420", marginBottom: 8 }}>{t.event}</div>
                      <div style={{ fontSize: 14, color: "#8A9E8C", lineHeight: 1.7, fontWeight: 300 }}>{t.desc}</div>
                    </div>
                    <div style={{ padding: "0 0 0 3rem" }}>
                      <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#5A7A5C", marginLeft: -6 }} />
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ textAlign: "right", padding: "0 3rem 0 0" }}>
                      <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#C4A45A", marginLeft: "auto", marginRight: -6 }} />
                    </div>
                    <div style={{ padding: "0 0 0 3rem" }}>
                      <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 48, color: "#D4DDD6", fontWeight: 300 }}>{t.year}</div>
                      <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 22, color: "#1A2420", marginBottom: 8 }}>{t.event}</div>
                      <div style={{ fontSize: 14, color: "#8A9E8C", lineHeight: 1.7, fontWeight: 300 }}>{t.desc}</div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: "7rem 2.5rem", background: "#FAFAF8" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "#C4A45A", textTransform: "uppercase", marginBottom: 16 }}>The Team</div>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, color: "#1A2420" }}>The minds behind the mission</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
            {team.map((m, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ width: 100, height: 100, borderRadius: "50%", background: i % 2 === 0 ? "#EDE9E0" : "#D4DDD6", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Cormorant Garamond, serif", fontSize: 28, color: "#5A7A5C" }}>
                  {m.initials}
                </div>
                <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 20, color: "#1A2420", marginBottom: 4 }}>{m.name}</div>
                <div style={{ fontSize: 11, color: "#C4A45A", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>{m.role}</div>
                <div style={{ fontSize: 13, color: "#8A9E8C", lineHeight: 1.7, fontWeight: 300 }}>{m.bio}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
