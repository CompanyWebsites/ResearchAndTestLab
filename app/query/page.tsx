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
    name: "",
    org: "",
    email: "",
    phone: "",
    queryType: "",
    message: "",
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

  return (
    <div className="page">
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="eyebrow eyebrow-muted">Submit a Query</div>
          <h1 className="heroTitle">
            Ask us
            <br />
            <em className="heroEm">anything.</em>
          </h1>
          <p className="heroText">
            Whether you are a potential client, investor, researcher, or simply
            curious — we are here. Every query receives a personal response
            within 48 hours.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="section">
        <div className="container formGrid">
          {/* Sidebar info */}
          <div className="sidebar">
            <div className="eyebrow eyebrow-gold">Response Time</div>
            <div className="responseTime">48 hrs</div>
            <div className="responseDesc">
              We personally read and respond to every inquiry. No bots, no form
              letters.
            </div>
            <div className="contactList">
              {[{ label: "support", val: "support@thapak.co.in" }].map((c) => (
                <div key={c.label} className="contactItem">
                  <div className="contactLabel">{c.label}</div>
                  <div className="contactVal">{c.val}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="successWrap">
              <div className="successCheck">✓</div>
              <h2 className="successTitle">Query Received</h2>
              <p className="successText">
                Thank you for reaching out. A member of our team will respond to{" "}
                {form.email} within 48 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({
                    name: "",
                    org: "",
                    email: "",
                    phone: "",
                    queryType: "",
                    message: "",
                  });
                }}
                className="submitAnotherBtn"
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="fieldGrid">
                <div>
                  <label className="fieldLabel">Full Name *</label>
                  <input
                    required
                    className="formInput"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="fieldLabel">Organisation</label>
                  <input
                    className="formInput"
                    value={form.org}
                    onChange={(e) => setForm({ ...form, org: e.target.value })}
                    placeholder="Company / Institution"
                  />
                </div>
                <div>
                  <label className="fieldLabel">Email Address *</label>
                  <input
                    required
                    type="email"
                    className="formInput"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="fieldLabel">Phone</label>
                  <input
                    className="formInput"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div className="fieldBlock">
                <label className="fieldLabel">Query Type *</label>
                <select
                  required
                  className="formInput selectInput"
                  value={form.queryType}
                  onChange={(e) =>
                    setForm({ ...form, queryType: e.target.value })
                  }
                >
                  <option value="">Select a category</option>
                  {queryTypes.map((qt) => (
                    <option key={qt} value={qt}>
                      {qt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="fieldBlock fieldBlockLarge">
                <label className="fieldLabel">Your Message *</label>
                <textarea
                  required
                  rows={6}
                  className="formInput textareaInput"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Describe your requirement, site, or question in detail..."
                />
              </div>

              {error && <p className="errorText">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className={`submitBtn ${loading ? "submitBtnLoading" : ""}`}
              >
                {loading ? "Submitting…" : "Submit Query →"}
              </button>
            </form>
          )}
        </div>
      </section>

      <style jsx>{`
        .page {
          background: #fafaf8;
          padding-top: 72px;
        }
        .container {
          max-width: 1280px;
          margin: 0 auto;
        }
        .eyebrow {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        .eyebrow-muted {
          color: #8a9e8c;
          margin-bottom: 20px;
        }
        .eyebrow-gold {
          color: #c4a45a;
          margin-bottom: 24px;
        }

        /* Hero */
        .hero {
          padding: 7rem 2.5rem 4rem;
          background: linear-gradient(160deg, #f4f3f0, #ede9e0);
        }
        .heroTitle {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(38px, 8vw, 80px);
          font-weight: 300;
          color: #1a2420;
          max-width: 600px;
          line-height: 1.08;
          margin-bottom: 24px;
        }
        .heroEm {
          color: #5a7a5c;
          font-style: italic;
        }
        .heroText {
          font-size: 15px;
          color: #8a9e8c;
          max-width: 480px;
          line-height: 1.9;
          font-weight: 300;
        }

        /* Form section */
        .section {
          padding: 7rem 2.5rem;
          background: #fafaf8;
        }
        .formGrid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 6rem;
        }

        /* Sidebar */
        .responseTime {
          font-family: "Cormorant Garamond", serif;
          font-size: 52px;
          color: #1a2420;
          font-weight: 300;
          margin-bottom: 8px;
        }
        .responseDesc {
          font-size: 14px;
          color: #8a9e8c;
          font-weight: 300;
          line-height: 1.8;
          margin-bottom: 40px;
        }
        .contactList {
          border-top: 1px solid #ede9e0;
          padding-top: 32px;
        }
        .contactItem {
          margin-bottom: 20px;
        }
        .contactLabel {
          font-size: 11px;
          color: #8a9e8c;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .contactVal {
          font-size: 13px;
          color: #1a2420;
          margin-top: 4px;
        }

        /* Success state */
        .successWrap {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 400px;
          text-align: center;
        }
        .successCheck {
          font-family: "Cormorant Garamond", serif;
          font-size: 64px;
          color: #5a7a5c;
          margin-bottom: 20px;
        }
        .successTitle {
          font-family: "Cormorant Garamond", serif;
          font-size: 40px;
          color: #1a2420;
          font-weight: 300;
          margin-bottom: 16px;
        }
        .successText {
          font-size: 15px;
          color: #8a9e8c;
          max-width: 400px;
          line-height: 1.8;
          font-weight: 300;
        }
        .submitAnotherBtn {
          margin-top: 32px;
          background: none;
          border: 1px solid #2c3e35;
          color: #2c3e35;
          padding: 12px 28px;
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
        }

        /* Form fields */
        .fieldGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .fieldBlock {
          margin-bottom: 1.5rem;
        }
        .fieldBlockLarge {
          margin-bottom: 2.5rem;
        }
        .fieldLabel {
          display: block;
          font-size: 11px;
          color: #8a9e8c;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .formInput {
          width: 100%;
          padding: 14px 16px;
          background: #f4f3f0;
          border: 1px solid #ede9e0;
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          color: #1a2420;
          outline: none;
          transition: border-color 0.25s;
          font-weight: 300;
          box-sizing: border-box;
        }
        .formInput:focus {
          border-color: #5a7a5c;
        }
        .selectInput {
          cursor: pointer;
        }
        .textareaInput {
          resize: vertical;
        }
        .errorText {
          font-size: 13px;
          color: #c0392b;
          margin-bottom: 16px;
        }
        .submitBtn {
          background: #1a2420;
          color: #fafaf8;
          padding: 16px 48px;
          font-family: "DM Sans", sans-serif;
          font-size: 13px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          font-weight: 400;
          transition: background 0.3s;
          width: auto;
        }
        .submitBtn:not(:disabled):hover {
          background: #5a7a5c;
        }
        .submitBtnLoading {
          background: #8a9e8c;
          cursor: not-allowed;
        }

        /* ===== Tablet ===== */
        @media (max-width: 900px) {
          .hero {
            padding: 5rem 1.75rem 3rem;
          }
          .section {
            padding: 4.5rem 1.75rem;
          }
          .formGrid {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }
          .sidebar {
            display: flex;
            flex-direction: column;
          }
        }

        /* ===== Mobile ===== */
        @media (max-width: 600px) {
          .page {
            padding-top: 56px;
          }
          .hero {
            padding: 3.5rem 1.25rem 2.5rem;
          }
          .section {
            padding: 3.5rem 1.25rem;
          }
          .heroText {
            font-size: 14px;
          }
          .responseTime {
            font-size: 42px;
          }
          .responseDesc {
            margin-bottom: 28px;
          }
          .contactList {
            padding-top: 24px;
          }

          /* Two-column name/org/email/phone collapses to one column */
          .fieldGrid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
            margin-bottom: 1.25rem;
          }
          .fieldBlock {
            margin-bottom: 1.25rem;
          }
          .fieldBlockLarge {
            margin-bottom: 2rem;
          }
          .formInput {
            padding: 12px 14px;
            font-size: 16px; /* avoids iOS auto-zoom on focus */
          }

          /* Full-width submit button on small screens */
          .submitBtn {
            width: 100%;
            padding: 15px 24px;
            text-align: center;
          }
          .submitAnotherBtn {
            width: 100%;
          }

          .successCheck {
            font-size: 52px;
          }
          .successTitle {
            font-size: 32px;
          }
          .successText {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
}
