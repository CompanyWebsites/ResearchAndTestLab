"use client";
import { useState } from "react";

const queryTypes = [
  "Product Information",
  "Request a Quote",
  "Request Investor Deck",
  "Research Collaboration",
  "Site Assessment",
  "Media / Press",
  "Other",
];

export default function Query() {
  const [form, setForm] = useState({
    name: "", org: "", email: "", phone: "", queryType: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: form.name,
          org: form.org,
          email: form.email,
          phone_num: form.phone,
          query_type: form.queryType,
          msg: form.message,
        }),
      });

      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%", padding: "14px 16px", background: "#F4F3F0", border: "1px solid #EDE9E0",
    fontFamily: "DM Sans, sans-serif", fontSize: 14, color: "#1A2420", outline: "none",
    transition: "border-color 0.25s", fontWeight: 300,
  };

  return (
    <div style={{ background: "#FAFAF8", paddingTop: 72 }}>

      {/* Hero */}
      <section style={{ padding: "7rem 2.5rem 4rem", background: "linear-gradient(160deg, #F4F3F0, #EDE9E0)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.22em", color: "#8A9E8C", textTransform: "uppercase", marginBottom: 20 }}>Submit a Query</div>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(44px, 6vw, 80px)", fontWeight: 300, color: "#1A2420", maxWidth: 600, lineHeight: 1.08, marginBottom: 24 }}>
            Ask us<br />
            <em style={{ color: "#5A7A5C", fontStyle: "italic" }}>anything.</em>
          </h1>
          <p style={{ fontSize: 15, color: "#8A9E8C", maxWidth: 480, lineHeight: 1.9, fontWeight: 300 }}>
            Whether you are a potential client, investor, researcher, or simply curious — we are here. Every query receives a personal response within 48 hours.
          </p>
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: "7rem 2.5rem", background: "#FAFAF8" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "6rem" }}>
          {/* Sidebar info */}
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "#C4A45A", textTransform: "uppercase", marginBottom: 24 }}>Response Time</div>
            <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 52, color: "#1A2420", fontWeight: 300, marginBottom: 8 }}>48 hrs</div>
            <div style={{ fontSize: 14, color: "#8A9E8C", fontWeight: 300, lineHeight: 1.8, marginBottom: 40 }}>We personally read and respond to every inquiry. No bots, no form letters.</div>

            <div style={{ borderTop: "1px solid #EDE9E0", paddingTop: 32 }}>
              {[
                { label: "General Enquiries", val: "hello@thapakresearch.in" },
                { label: "Investor Relations", val: "invest@thapakresearch.in" },
                { label: "Research Desk", val: "lab@thapakresearch.in" },
                { label: "Phone", val: "+91 98765 43210" },
              ].map((c) => (
                <div key={c.label} style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 11, color: "#8A9E8C", letterSpacing: "0.1em", textTransform: "uppercase" }}>{c.label}</div>
                  <div style={{ fontSize: 13, color: "#1A2420", marginTop: 4 }}>{c.val}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          {submitted ? (
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: 400, textAlign: "center" }}>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 64, color: "#5A7A5C", marginBottom: 20 }}>✓</div>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 40, color: "#1A2420", fontWeight: 300, marginBottom: 16 }}>Query Received</h2>
              <p style={{ fontSize: 15, color: "#8A9E8C", maxWidth: 400, lineHeight: 1.8, fontWeight: 300 }}>
                Thank you for reaching out. A member of our team will respond to {form.email} within 48 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", org: "", email: "", phone: "", queryType: "", message: "" });
                }}
                style={{ marginTop: 32, background: "none", border: "1px solid #2C3E35", color: "#2C3E35", padding: "12px 28px", fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" }}
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: 11, color: "#8A9E8C", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>Full Name *</label>
                  <input required style={inputStyle} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 11, color: "#8A9E8C", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>Organisation</label>
                  <input style={inputStyle} value={form.org} onChange={e => setForm({ ...form, org: e.target.value })} placeholder="Company / Institution" />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 11, color: "#8A9E8C", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>Email Address *</label>
                  <input required type="email" style={inputStyle} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 11, color: "#8A9E8C", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>Phone</label>
                  <input style={inputStyle} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label style={{ display: "block", fontSize: 11, color: "#8A9E8C", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>Query Type *</label>
                <select required style={{ ...inputStyle, cursor: "pointer" }} value={form.queryType} onChange={e => setForm({ ...form, queryType: e.target.value })}>
                  <option value="">Select a category</option>
                  {queryTypes.map(qt => <option key={qt} value={qt}>{qt}</option>)}
                </select>
              </div>

              <div style={{ marginBottom: "2.5rem" }}>
                <label style={{ display: "block", fontSize: 11, color: "#8A9E8C", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>Your Message *</label>
                <textarea required rows={6} style={{ ...inputStyle, resize: "vertical" }} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Describe your requirement, site, or question in detail..." />
              </div>

              {error && (
                <p style={{ fontSize: 13, color: "#C0392B", marginBottom: 16 }}>{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                style={{
                  background: loading ? "#8A9E8C" : "#1A2420",
                  color: "#FAFAF8", padding: "16px 48px",
                  fontFamily: "DM Sans, sans-serif", fontSize: 13, letterSpacing: "0.1em",
                  textTransform: "uppercase", border: "none",
                  cursor: loading ? "not-allowed" : "pointer",
                  fontWeight: 400, transition: "background 0.3s",
                }}
                onMouseOver={e => { if (!loading) e.currentTarget.style.background = "#5A7A5C"; }}
                onMouseOut={e => { if (!loading) e.currentTarget.style.background = "#1A2420"; }}
              >
                {loading ? "Submitting…" : "Submit Query →"}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
