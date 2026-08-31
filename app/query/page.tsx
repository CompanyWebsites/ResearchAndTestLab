"use client";
import { useState } from "react";

const enquiryOptions = [
  "Commission research",
  "Conduct specialized testing",
  "Discuss environmental consultancy",
  "Discuss industrial consultancy",
  "Explore a patented technology",
  "Discuss technology licensing",
  "Discuss technology transfer",
  "Explore investment",
  "Propose institutional collaboration",
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
      <section className="hero">
        <div className="container">
          <div className="eyebrow eyebrow-muted">Get in Touch — Response within 48 hours</div>
          <h1 className="heroTitle">
            Discuss a Research,
            <br />
            Testing or <em className="heroEm">Technology Requirement.</em>
          </h1>
          <p className="heroText">
            THAPAK Research & Test Lab works with industry, institutions and
            investors to take ideas from lab to deployment. Tell us what you
            want to do — we will connect you to the right team.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container formGrid">
          <div className="sidebar">
            <div className="eyebrow eyebrow-gold">What happens next</div>
            <div className="responseTime">48 hrs</div>
            <div className="responseDesc">
              Every enquiry is read by our team — no bots, no form letters. We
              respond with next steps, relevant patent dossiers or testing
              protocols as applicable.
            </div>
            <div className="helpBox">
              <div className="helpBoxTitle">Not sure which category?</div>
              <div className="helpBoxText">
                Choose &ldquo;Other&rdquo; and describe your requirement in the
                message. We will route it internally.
              </div>
            </div>
            <div className="contactList">
              <div className="contactItem">
                <div className="contactLabel">Email</div>
                <a href="mailto:support@research.thapak.co.in" className="contactVal contactLink">
                  support@research.thapak.co.in
                </a>
              </div>
              <div className="contactItem">
                <div className="contactLabel">Organisation</div>
                <div className="contactVal">THAPAK Research & Test Lab Pvt. Ltd. — Est. 2017</div>
              </div>
            </div>
          </div>

          {submitted ? (
            <div className="successWrap">
              <div className="successCheck">✓</div>
              <h2 className="successTitle">Enquiry Received</h2>
              <p className="successText">
                Thank you for reaching out. A member of our team will respond to{" "}
                <strong>{form.email}</strong> within 48 hours regarding{" "}
                <strong>{form.queryType}</strong>.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", org: "", email: "", phone: "", queryType: "", message: "" });
                }}
                className="submitAnotherBtn"
              >
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
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
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="fieldLabel">Phone</label>
                  <input
                    className="formInput"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div className="fieldBlock">
                <label className="fieldLabel">I want to: *</label>
                <div className="enquiryGrid">
                  {enquiryOptions.map((opt) => {
                    const active = form.queryType === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        aria-pressed={active}
                        onClick={() => setForm({ ...form, queryType: opt })}
                        className={`enquiryPill ${active ? "enquiryPillActive" : ""}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
                <input type="hidden" value={form.queryType} required aria-hidden />
                {!form.queryType && <div className="fieldHint">Select one category that best fits your requirement.</div>}
              </div>

              <div className="fieldBlock fieldBlockLarge">
                <label className="fieldLabel">Your Message *</label>
                <textarea
                  required
                  rows={6}
                  className="formInput textareaInput"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Describe your requirement, site, technology of interest, or collaboration idea in detail…"
                />
              </div>

              {error && <p className="errorText">{error}</p>}

              <button type="submit" disabled={loading || !form.queryType} className={`submitBtn ${loading ? "submitBtnLoading" : ""}`}>
                {loading ? "Submitting…" : "Submit Enquiry →"}
              </button>
              <p className="formFootNote">
                By submitting you agree to be contacted about this enquiry. Patent dossiers & test data shared under NDA where applicable.
              </p>
            </form>
          )}
        </div>
      </section>

      <style jsx>{`
        .page { background: #fafaf8; padding-top: 72px; }
        .container { max-width: 1280px; margin: 0 auto; }
        .eyebrow { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; }
        .eyebrow-muted { color: #8a9e8c; margin-bottom: 20px; }
        .eyebrow-gold { color: #c4a45a; margin-bottom: 24px; }
        .hero { padding: 7rem 2.5rem 4rem; background: linear-gradient(160deg, #f4f3f0, #ede9e0); }
        .heroTitle { font-family: "Cormorant Garamond", serif; font-size: clamp(32px, 6.5vw, 68px); font-weight: 300; color: #1a2420; max-width: 760px; line-height: 1.08; margin-bottom: 24px; }
        .heroEm { color: #5a7a5c; font-style: italic; }
        .heroText { font-size: 15px; color: #5a7a5c; max-width: 560px; line-height: 1.9; font-weight: 300; }
        .section { padding: 6rem 2.5rem; background: #fafaf8; }
        .formGrid { display: grid; grid-template-columns: 380px 1fr; gap: 5rem; align-items: start; }
        .responseTime { font-family: "Cormorant Garamond", serif; font-size: 52px; color: #1a2420; font-weight: 300; margin-bottom: 8px; }
        .responseDesc { font-size: 14px; color: #8a9e8c; font-weight: 300; line-height: 1.8; margin-bottom: 28px; }
        .helpBox { background: #f4f3f0; border-left: 3px solid #c4a45a; padding: 16px 18px; margin-bottom: 32px; }
        .helpBoxTitle { font-size: 12px; fontWeight: 500; color: #1a2420; margin-bottom: 6px; letter-spacing: 0.04em; }
        .helpBoxText { font-size: 13px; color: #8a9e8c; line-height: 1.6; font-weight: 300; }
        .contactList { border-top: 1px solid #ede9e0; padding-top: 28px; }
        .contactItem { margin-bottom: 18px; }
        .contactLabel { font-size: 11px; color: #8a9e8c; letter-spacing: 0.1em; text-transform: uppercase; }
        .contactVal { font-size: 13px; color: #1a2420; margin-top: 4px; line-height: 1.5; }
        .contactLink { color: #5a7a5c; text-decoration: none; border-bottom: 1px solid #d4ddd6; padding-bottom: 1px; }
        .successWrap { display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 420px; text-align: center; }
        .successCheck { font-family: "Cormorant Garamond", serif; font-size: 64px; color: #5a7a5c; margin-bottom: 20px; }
        .successTitle { font-family: "Cormorant Garamond", serif; font-size: 40px; color: #1a2420; font-weight: 300; margin-bottom: 16px; }
        .successText { font-size: 15px; color: #8a9e8c; max-width: 460px; line-height: 1.8; font-weight: 300; }
        .submitAnotherBtn { margin-top: 32px; background: none; border: 1px solid #2c3e35; color: #2c3e35; padding: 12px 28px; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; cursor: pointer; }
        .fieldGrid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem; }
        .fieldBlock { margin-bottom: 1.5rem; }
        .fieldBlockLarge { margin-bottom: 2rem; }
        .fieldLabel { display: block; font-size: 11px; color: #8a9e8c; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 10px; }
        .fieldHint { font-size: 12px; color: #8a9e8c; margin-top: 10px; font-style: italic; }
        .formInput { width: 100%; padding: 14px 16px; background: #f4f3f0; border: 1px solid #ede9e0; font-family: "DM Sans", sans-serif; font-size: 14px; color: #1a2420; outline: none; transition: border-color 0.25s; font-weight: 300; box-sizing: border-box; }
        .formInput:focus { border-color: #5a7a5c; }
        .textareaInput { resize: vertical; }
        .enquiryGrid { display: flex; flex-wrap: wrap; gap: 10px; }
        .enquiryPill { padding: 10px 16px; font-size: 13px; font-family: "DM Sans", sans-serif; font-weight: 300; color: #2c3e35; background: #fff; border: 1px solid #ede9e0; cursor: pointer; transition: all 0.2s; line-height: 1.4; text-align: left; }
        .enquiryPill:hover { border-color: #c4a45a; color: #1a2420; }
        .enquiryPillActive { background: #1a2420; color: #fafaf8; border-color: #1a2420; }
        .errorText { font-size: 13px; color: #c0392b; margin-bottom: 16px; }
        .submitBtn { background: #1a2420; color: #fafaf8; padding: 16px 48px; font-family: "DM Sans", sans-serif; font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; border: none; cursor: pointer; font-weight: 400; transition: background 0.3s; }
        .submitBtn:not(:disabled):hover { background: #5a7a5c; }
        .submitBtn:disabled { background: #c2c9c4; cursor: not-allowed; }
        .submitBtnLoading { background: #8a9e8c; cursor: not-allowed; }
        .formFootNote { font-size: 11px; color: #8a9e8c; margin-top: 14px; line-height: 1.6; max-width: 520px; }
        @media (max-width: 1000px) { .formGrid { grid-template-columns: 1fr; gap: 3rem; } .hero { padding: 5rem 1.75rem 3rem; } .section { padding: 4.5rem 1.75rem; } }
        @media (max-width: 600px) {
          .page { padding-top: 56px; }
          .hero { padding: 3.5rem 1.25rem 2.5rem; }
          .section { padding: 3.5rem 1.25rem; }
          .fieldGrid { grid-template-columns: 1fr; gap: 1.25rem; margin-bottom: 1.25rem; }
          .formInput { padding: 12px 14px; font-size: 16px; }
          .enquiryPill { font-size: 13px; padding: 9px 14px; }
          .submitBtn { width: 100%; padding: 15px 24px; text-align: center; }
          .submitAnotherBtn { width: 100%; }
        }
      `}</style>
    </div>
  );
}
