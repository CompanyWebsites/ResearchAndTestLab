"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "14px 16px", background: "#F4F3F0", border: "1px solid #EDE9E0",
    fontFamily: "DM Sans, sans-serif", fontSize: 14, color: "#1A2420", outline: "none",
    fontWeight: 300,
  };

  return (
    <div style={{ background: "#FAFAF8", paddingTop: 72 }}>
      {/* Hero */}
      <section style={{ padding: "7rem 2.5rem 4rem", background: "linear-gradient(160deg, #F4F3F0, #EDE9E0)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.22em", color: "#8A9E8C", textTransform: "uppercase", marginBottom: 20 }}>Contact Us</div>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(44px, 6vw, 80px)", fontWeight: 300, color: "#1A2420", maxWidth: 600, lineHeight: 1.08, marginBottom: 24 }}>
            Let's start a<br />
            <em style={{ color: "#5A7A5C", fontStyle: "italic" }}>conversation.</em>
          </h1>
        </div>
      </section>

      {/* Contact Grid */}
      <section style={{ padding: "7rem 2.5rem", background: "#FAFAF8" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "6rem" }}>
          {/* Info */}
          <div>
            <div style={{ marginBottom: "3rem" }}>
              <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "#C4A45A", textTransform: "uppercase", marginBottom: 16 }}>Office</div>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 22, color: "#1A2420", fontWeight: 300, lineHeight: 1.6 }}>
                Thapak Research & TestLab<br />
                Plot 14, Industrial Zone Phase II<br />
                Adhartal, Jabalpur<br />
                Madhya Pradesh — 482 004<br />
                India
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "3rem" }}>
              {[
                { dept: "General", email: "hello@thapakresearch.in", phone: "+91 98765 43210" },
                { dept: "Investors", email: "invest@thapakresearch.in", phone: "+91 98765 43211" },
                { dept: "Research", email: "lab@thapakresearch.in", phone: "+91 98765 43212" },
                { dept: "Media", email: "press@thapakresearch.in", phone: "+91 98765 43213" },
              ].map((c) => (
                <div key={c.dept} style={{ padding: "20px", background: "#F4F3F0" }}>
                  <div style={{ fontSize: 10, letterSpacing: "0.18em", color: "#C4A45A", textTransform: "uppercase", marginBottom: 10 }}>{c.dept}</div>
                  <div style={{ fontSize: 12, color: "#5A7A5C", marginBottom: 4 }}>{c.email}</div>
                  <div style={{ fontSize: 12, color: "#8A9E8C" }}>{c.phone}</div>
                </div>
              ))}
            </div>

            <div>
              <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "#C4A45A", textTransform: "uppercase", marginBottom: 16 }}>Working Hours</div>
              <div style={{ fontSize: 14, color: "#8A9E8C", lineHeight: 1.9, fontWeight: 300 }}>
                Monday – Friday: 9:00 AM – 6:00 PM IST<br />
                Saturday: 10:00 AM – 2:00 PM IST<br />
                Sunday: Closed
              </div>
            </div>

            {/* Map placeholder */}
            <div style={{ marginTop: "2.5rem", background: "#EDE9E0", height: 200, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>📍</div>
                <div style={{ fontSize: 13, color: "#8A9E8C" }}>Adhartal, Jabalpur, MP</div>
                <div style={{ fontSize: 11, color: "#D4DDD6", marginTop: 4 }}>Open in Google Maps →</div>
              </div>
              {/* Decorative grid */}
              <svg style={{ position: "absolute", inset: 0, opacity: 0.15 }} width="100%" height="100%">
                <defs><pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="#5A7A5C" strokeWidth="0.5" /></pattern></defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </div>

          {/* Form */}
          {sent ? (
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 64, color: "#5A7A5C", marginBottom: 20 }}>✓</div>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 40, color: "#1A2420", fontWeight: 300, marginBottom: 16 }}>Message Sent</h2>
              <p style={{ fontSize: 15, color: "#8A9E8C", maxWidth: 380, lineHeight: 1.8, fontWeight: 300 }}>We have received your message and will be in touch at {form.email} within 48 hours.</p>
              <button onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                style={{ marginTop: 32, background: "none", border: "1px solid #2C3E35", color: "#2C3E35", padding: "12px 28px", fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" }}>
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <div style={{ marginBottom: "1.5rem" }}>
                <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "#C4A45A", textTransform: "uppercase", marginBottom: 24 }}>Send a Message</div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: 11, color: "#8A9E8C", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>Name *</label>
                  <input required style={inputStyle} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your full name" />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 11, color: "#8A9E8C", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>Email *</label>
                  <input required type="email" style={inputStyle} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" />
                </div>
              </div>
              <div style={{ marginBottom: "1.5rem" }}>
                <label style={{ display: "block", fontSize: 11, color: "#8A9E8C", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>Subject *</label>
                <input required style={inputStyle} value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} placeholder="How can we help?" />
              </div>
              <div style={{ marginBottom: "2.5rem" }}>
                <label style={{ display: "block", fontSize: 11, color: "#8A9E8C", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>Message *</label>
                <textarea required rows={8} style={{ ...inputStyle, resize: "vertical" }} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us more..." />
              </div>
              <button type="submit" style={{
                background: "#1A2420", color: "#FAFAF8", padding: "16px 48px",
                fontFamily: "DM Sans, sans-serif", fontSize: 13, letterSpacing: "0.1em",
                textTransform: "uppercase", border: "none", cursor: "pointer", fontWeight: 400,
              }}
                onMouseOver={e => (e.currentTarget.style.background = "#5A7A5C")}
                onMouseOut={e => (e.currentTarget.style.background = "#1A2420")}
              >
                Send Message →
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
