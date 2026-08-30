"use client";
import Link from "next/link";

const stats = [
  { value: "29", label: "Patent Applications" },
  { value: "8", label: "Granted Patents" },
  { value: "3", label: "PCT Applications" },
];

const technologies = [
  {
    id: "01",
    title: "Ambient Air Purification Without Electricity",
    desc: "A patented technology for purification of ambient air using mechanical/natural energy without conventional electrical power consumption.",
    area: "Environmental Engineering — Air Purification",
    use: "Ambient / Outdoor air quality",
    status: "Granted",
  },
  {
    id: "02",
    title: "Closed-Premises Air Purification",
    desc: "A patented technology for air purification and circulation in enclosed premises without conventional electrical power consumption.",
    area: "Environmental Engineering — Indoor Air Quality",
    use: "Enclosed premises, buildings",
    status: "Granted",
  },
  {
    id: "03",
    title: "Artificial Ventilation System",
    desc: "Patented technology for mechanically assisted ventilation.",
    area: "Environmental Engineering — Ventilation",
    use: "Ventilation systems",
    status: "Granted",
  },
  {
    id: "04",
    title: "Carbon Absorption Technology",
    desc: "Patented technology aimed at high-efficiency and cost-effective carbon absorption.",
    area: "Environmental Engineering — Carbon Management",
    use: "Carbon capture & absorption",
    status: "Granted",
  },
  {
    id: "05",
    title: "Oxygen Control System",
    desc: "Patented technology for controlled oxygen management in enclosed premises.",
    area: "Environmental Engineering — Controlled Environments",
    use: "Enclosed premises, specialized facilities",
    status: "Granted",
  },
  {
    id: "06",
    title: "Mine Air Purification & Ventilation",
    desc: "Patented technology addressing ventilation and air-quality management in mining environments.",
    area: "Mining & Industrial Ventilation",
    use: "Mining environments",
    status: "Granted",
  },
  {
    id: "07",
    title: "Solar Thermal Energy Storage",
    desc: "High-efficiency solar thermal power storage technology.",
    area: "Energy Systems — Solar Thermal",
    use: "Energy storage & thermal power",
    status: "Granted",
  },
  {
    id: "08",
    title: "Other Technologies",
    desc: "Additional technologies under development and intellectual-property protection.",
    area: "Multiple Engineering Domains",
    use: "Under disclosure",
    status: "Applied / Under Development",
  },
];

export default function IntellectualProperty() {
  return (
    <div className="page">
      <section className="hero">
        <div className="container">
          <div className="eyebrow eyebrow-gold">Intellectual Property</div>
          <h1 className="heroTitle">
            Our Research Creates
            <br />
            <em className="heroEm">Intellectual Property.</em>
          </h1>
          <p className="heroText">
            THAPAK develops proprietary engineering technologies across
            environmental engineering, air purification, carbon management,
            energy systems, ventilation, automation and other specialized
            engineering domains. Each outcome is evaluated for protectability
            and real-world deployment before it leaves the lab.
          </p>

          <div className="statRow">
            {stats.map((s) => (
              <div key={s.label} className="statItem">
                <div className="statValue">{s.value}</div>
                <div className="statLabel">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="heroNote">
            Portfolio as of 2025 — detailed patent register available on request
            under appropriate confidentiality.
          </div>
        </div>
      </section>

      <section className="section sectionLight">
        <div className="container">
          <div className="sectionHeading">
            <div className="eyebrow eyebrow-gold">Selected Granted Technologies</div>
            <h2 className="h2Center">A portfolio built for deployment, not for display</h2>
            <p className="sectionSub">
              The technologies below are summarized from granted patents and
              filed applications. Full specifications, claims, and validated
              test data are shared via the patent register and technical
              dossiers — not marketing claims.
            </p>
          </div>

          <div className="techGrid">
            {technologies.map((t) => (
              <div key={t.id} className="techCard">
                <div className="techTop">
                  <span className="techId">{t.id}</span>
                  <span className={`techStatus ${t.status === "Granted" ? "granted" : "pending"}`}>{t.status}</span>
                </div>
                <h3 className="techTitle">{t.title}</h3>
                <p className="techDesc">{t.desc}</p>
                <div className="techMeta">
                  <div className="metaRow">
                    <span className="metaLabel">Technology Area</span>
                    <span className="metaVal">{t.area}</span>
                  </div>
                  <div className="metaRow">
                    <span className="metaLabel">Application / Use</span>
                    <span className="metaVal">{t.use}</span>
                  </div>
                  <div className="metaRow">
                    <span className="metaLabel">Patent No. / Title</span>
                    <span className="metaVal muted">Available in patent register on request</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="formatNote">
            <div className="formatNoteLabel">How we present each patent</div>
            <div className="formatNoteValue">
              Patent Title <span className="sep">|</span> Patent Number{" "}
              <span className="sep">|</span> Status <span className="sep">|</span>{" "}
              Technology Area <span className="sep">|</span> Application / Use
            </div>
            <p className="formatNoteText">
              Individual patent pages will follow this format and link directly
              to the specification or validated test data. We do not publish
              broad technical efficacy claims without that linkage.
            </p>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <div className="disclosureGrid">
            <div>
              <div className="eyebrow eyebrow-gold">Governance & Accuracy</div>
              <h2 className="h2">Claims tied to<br /><em className="h2Em">specifications, not slogans.</em></h2>
            </div>
            <div className="disclosureBody">
              <p className="bodyText">
                Every technology listed here is grounded in a filed or granted
                patent and, where applicable, laboratory testing. Performance
                statements are provided only with reference to the patent
                specification or independently validated test reports.
              </p>
              <p className="bodyText bodyTextLast">
                For licensing, transfer, or research collaboration, we provide
                access to the full dossier under NDA — including claims,
                drawings, and test protocols — so you can evaluate on evidence,
                not assertion.
              </p>
              <div className="disclosureActions">
                <Link href="/query" className="btnDark">Request Patent Register</Link>
                <Link href="/invest" className="btnLight">Explore Collaboration Routes</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ctaSection">
        <div className="ctaContainer">
          <h2 className="ctaTitle">Build on protected research</h2>
          <p className="ctaText">
            Whether you want to license a granted technology, transfer it to
            production, or co-develop the next filing — our IP portfolio is
            available for structured collaboration.
          </p>
          <div className="ctaButtons">
            <Link href="/query" className="ctaBtnPrimary">Start a Conversation</Link>
            <a href="mailto:support@research.thapak.co.in" className="ctaBtnSecondary">Email Directly</a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page { background: #fafaf8; padding-top: 72px; }
        .container { max-width: 1280px; margin: 0 auto; }
        .eyebrow { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; }
        .eyebrow-gold { color: #c4a45a; margin-bottom: 20px; }
        .hero {
          padding: 7rem 2.5rem 4rem;
          background: linear-gradient(160deg, #1a2420, #2c3e35);
        }
        .heroTitle {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(38px, 7.5vw, 84px);
          font-weight: 300;
          color: #fafaf8;
          line-height: 1.08;
          max-width: 800px;
          margin-bottom: 24px;
        }
        .heroEm { color: #8a9e8c; font-style: italic; }
        .heroText {
          font-size: 15px; color: #8a9e8c; max-width: 640px;
          line-height: 1.9; font-weight: 300;
        }
        .statRow { display: flex; gap: 4rem; flex-wrap: wrap; margin-top: 44px; }
        .statValue { font-family: "Cormorant Garamond", serif; font-size: 44px; color: #fafaf8; font-weight: 300; line-height: 1; }
        .statLabel { font-size: 11px; color: #5a7a5c; letter-spacing: 0.14em; text-transform: uppercase; margin-top: 6px; }
        .heroNote { margin-top: 32px; font-size: 11px; color: #5a7a5c; letter-spacing: 0.06em; border-top: 1px solid rgba(212,221,214,0.15); padding-top: 16px; max-width: 640px; }

        .section { padding: 6.5rem 2.5rem; }
        .sectionLight { background: #fafaf8; }
        .sectionAlt { background: #f4f3f0; }
        .sectionHeading { text-align: center; margin-bottom: 3.5rem; }
        .h2Center {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(30px, 5vw, 48px);
          font-weight: 300; color: #1a2420; line-height: 1.15;
        }
        .sectionSub {
          max-width: 720px; margin: 16px auto 0;
          font-size: 14px; color: #8a9e8c; line-height: 1.8; font-weight: 300;
        }

        .techGrid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.75rem; }
        .techCard {
          background: #ffffff;
          border: 1px solid #ede9e0;
          border-top: 3px solid #ede9e0;
          padding: 2.25rem 2rem 1.75rem;
          transition: border-color 0.3s, box-shadow 0.3s;
          display: flex; flex-direction: column;
        }
        .techCard:hover { border-top-color: #5a7a5c; box-shadow: 0 8px 32px rgba(26,36,32,0.06); }
        .techTop { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
        .techId { font-family: "Cormorant Garamond", serif; font-size: 13px; letter-spacing: 0.14em; color: #c4a45a; }
        .techStatus { font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; padding: 4px 10px; border-radius: 2px; }
        .techStatus.granted { background: #1a2420; color: #fafaf8; }
        .techStatus.pending { background: #ede9e0; color: #5a7a5c; }
        .techTitle { font-family: "Cormorant Garamond", serif; font-size: 22px; color: #1a2420; font-weight: 300; line-height: 1.3; margin-bottom: 12px; }
        .techDesc { font-size: 13.5px; color: #5a7a5c; line-height: 1.8; font-weight: 300; margin-bottom: 20px; }
        .techMeta { border-top: 1px solid #ede9e0; padding-top: 16px; margin-top: auto; display: flex; flex-direction: column; gap: 8px; }
        .metaRow { display: flex; justify-content: space-between; gap: 16px; }
        .metaLabel { font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: #8a9e8c; white-space: nowrap; }
        .metaVal { font-size: 12px; color: #2c3e35; text-align: right; line-height: 1.5; }
        .metaVal.muted { color: #8a9e8c; font-style: italic; }

        .formatNote {
          margin-top: 2.5rem;
          background: #1a2420;
          padding: 2rem 2.5rem;
          display: flex; flex-direction: column; gap: 8px;
          border-left: 3px solid #c4a45a;
        }
        .formatNoteLabel { font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: #c4a45a; }
        .formatNoteValue { font-family: "Cormorant Garamond", serif; font-size: 18px; color: #fafaf8; font-weight: 300; }
        .sep { color: #5a7a5c; margin: 0 4px; }
        .formatNoteText { font-size: 13px; color: #8a9e8c; line-height: 1.7; font-weight: 300; margin: 4px 0 0; max-width: 760px; }

        .disclosureGrid { display: grid; grid-template-columns: 460px 1fr; gap: 4rem; align-items: start; }
        .h2 { font-family: "Cormorant Garamond", serif; font-size: 42px; font-weight: 300; color: #1a2420; line-height: 1.2; margin-bottom: 0; }
        .h2Em { color: #5a7a5c; font-style: italic; }
        .bodyText { font-size: 15px; color: #5a7a5c; line-height: 1.9; font-weight: 300; margin-bottom: 16px; }
        .bodyTextLast { margin-bottom: 28px; }
        .disclosureActions { display: flex; gap: 12px; flex-wrap: wrap; }
        .btnDark { background: #1a2420; color: #fafaf8; padding: 12px 24px; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none; }
        .btnLight { border: 1px solid #1a2420; color: #1a2420; padding: 12px 24px; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none; }

        .ctaSection { padding: 6rem 2.5rem; background: #1a2420; text-align: center; }
        .ctaContainer { max-width: 640px; margin: 0 auto; }
        .ctaTitle { font-family: "Cormorant Garamond", serif; font-size: 44px; font-weight: 300; color: #fafaf8; margin-bottom: 16px; }
        .ctaText { font-size: 14px; color: #8a9e8c; line-height: 1.8; margin-bottom: 32px; }
        .ctaButtons { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; }
        .ctaBtnPrimary { background: #5a7a5c; color: #fafaf8; padding: 14px 36px; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none; }
        .ctaBtnSecondary { border: 1px solid #2c3e35; color: #8a9e8c; padding: 14px 36px; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none; }

        @media (max-width: 1000px) {
          .techGrid { grid-template-columns: 1fr; }
          .disclosureGrid { grid-template-columns: 1fr; gap: 2rem; }
        }
        @media (max-width: 900px) {
          .hero { padding: 5rem 1.75rem 3rem; }
          .section { padding: 4.5rem 1.75rem; }
        }
        @media (max-width: 600px) {
          .page { padding-top: 56px; }
          .hero { padding: 3.5rem 1.25rem 2.75rem; }
          .section { padding: 3.5rem 1.25rem; }
          .statRow { gap: 1.5rem 2rem; }
          .statValue { font-size: 34px; }
          .techCard { padding: 1.75rem 1.25rem; }
          .techTitle { font-size: 19px; }
          .metaRow { flex-direction: column; gap: 2px; }
          .metaVal { text-align: left; }
          .formatNote { padding: 1.5rem 1.25rem; }
          .formatNoteValue { font-size: 16px; line-height: 1.5; }
          .h2 { font-size: 30px; }
          .disclosureActions { flex-direction: column; }
          .btnDark, .btnLight { text-align: center; }
          .ctaSection { padding: 3.5rem 1.25rem; }
          .ctaTitle { font-size: 30px; }
          .ctaButtons { flex-direction: column; align-items: stretch; }
          .ctaBtnPrimary, .ctaBtnSecondary { text-align: center; }
        }
      `}</style>
    </div>
  );
}
