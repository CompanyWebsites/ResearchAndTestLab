"use client";

const pillars = [
  {
    title: "Research",
    desc: "Original technology development",
    detail:
      "Indigenous engineering research across environmental systems, energy, and advanced materials — from concept to working prototype.",
    num: "01",
  },
  {
    title: "Testing",
    desc: "Scientific and technical evaluation",
    detail:
      "Rigorous laboratory evaluation and scientific validation to ensure reliability, performance, and real-world readiness.",
    num: "02",
  },
  {
    title: "Intellectual Property",
    desc: "Patents and technology protection",
    detail:
      "Research outcomes systematically converted into patents, PCT filings, and protectable technology assets.",
    num: "03",
  },
  {
    title: "Commercialization",
    desc: "Technology transfer and industrial application",
    detail:
      "Bridging lab to industry through technology transfer, licensing, and deployment for industrial adoption.",
    num: "04",
  },
];

export default function About() {
  return (
    <div className="page">
      <section className="hero">
        <div className="container">
          <div className="eyebrow eyebrow-muted">About Us — Established 2017</div>
          <h1 className="heroTitle">
            Research Built on Engineering.
            <br />
            <em className="heroEm">Intellectual Property Built on Research.</em>
          </h1>
          <p className="heroText">
            THAPAK Research &amp; Test Lab Pvt. Ltd. is a specialized corporate
            research and testing organization advancing indigenous engineering
            technologies from laboratory to industry.
          </p>
        </div>
      </section>

      <section className="section sectionLight">
        <div className="container whoGrid">
          <div className="whoLabel">
            <div className="eyebrow eyebrow-gold">Who We Are</div>
            <h2 className="h2">A corporate research &amp; testing organization</h2>
          </div>
          <div className="whoBody">
            <p className="bodyText">
              THAPAK Research &amp; Test Lab Pvt. Ltd. is a specialized
              corporate research and testing organization established in{" "}
              <strong>2017</strong>. Our work focuses on developing indigenous
              engineering technologies, conducting specialized technical research
              and testing, and converting research outcomes into intellectual
              property and commercially applicable technologies.
            </p>
            <p className="bodyText bodyTextLast">
              We operate across environmental engineering, renewable energy,
              hydrogen technologies, material science, and industrial process
              engineering — bridging scientific investigation with engineering
              execution.
            </p>
          </div>
        </div>
      </section>

      <section className="philosophy">
        <div className="container philosophyInner">
          <div className="eyebrow eyebrow-gold" style={{ marginBottom: 16 }}>
            Our Philosophy
          </div>
          <blockquote className="philosophyQuote">
            We believe that meaningful research should not end with a report. It
            should lead to measurable technical outcomes, protectable
            intellectual property and technologies capable of solving real-world
            problems.
          </blockquote>
          <div className="philosophyRule" />
          <p className="philosophySub">
            Every project is evaluated on three criteria: does it work, can it
            be protected, and can it be deployed.
          </p>
        </div>
      </section>

      <section className="section sectionLight">
        <div className="container">
          <div className="sectionHeading">
            <div className="eyebrow eyebrow-gold">What Differentiates THAPAK</div>
            <h2 className="h2Center">From idea to protected, deployable technology</h2>
            <p className="sectionSub">
              Our end-to-end model integrates research, validation, protection,
              and transfer — ensuring no valuable outcome remains on the shelf.
            </p>
          </div>

          <div className="pillarGrid">
            {pillars.map((p) => (
              <div key={p.title} className="pillarCard">
                <div className="pillarNum">{p.num}</div>
                <div className="pillarTitle">{p.title}</div>
                <div className="pillarDesc">{p.desc}</div>
                <div className="pillarDetail">{p.detail}</div>
              </div>
            ))}
          </div>
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
          margin-bottom: 20px;
        }
        .eyebrow-muted {
          color: #8a9e8c;
        }
        .eyebrow-gold {
          color: #c4a45a;
        }
        .hero {
          padding: 7rem 2.5rem 5rem;
          background: linear-gradient(160deg, #f4f3f0, #ede9e0);
        }
        .heroTitle {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(36px, 6.5vw, 72px);
          font-weight: 300;
          color: #1a2420;
          max-width: 800px;
          line-height: 1.08;
          margin-bottom: 28px;
          letter-spacing: -0.02em;
        }
        .heroEm {
          color: #5a7a5c;
          font-style: italic;
          font-weight: 300;
        }
        .heroText {
          font-size: 16px;
          color: #5a7a5c;
          max-width: 560px;
          line-height: 1.9;
          font-weight: 300;
        }
        .section {
          padding: 6rem 2.5rem;
        }
        .sectionLight {
          background: #fafaf8;
        }
        .sectionAlt {
          background: #f4f3f0;
        }
        .sectionHeading {
          text-align: center;
          margin-bottom: 3.5rem;
        }
        .sectionSub {
          font-size: 15px;
          color: #8a9e8c;
          max-width: 560px;
          margin: 16px auto 0;
          line-height: 1.8;
          font-weight: 300;
        }
        .h2 {
          font-family: "Cormorant Garamond", serif;
          font-size: 42px;
          font-weight: 300;
          color: #1a2420;
          line-height: 1.2;
        }
        .h2Center {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(30px, 5vw, 48px);
          font-weight: 300;
          color: #1a2420;
          line-height: 1.15;
        }
        .bodyText {
          font-size: 15.5px;
          color: #5a7a5c;
          line-height: 1.9;
          margin-bottom: 20px;
          font-weight: 300;
        }
        .bodyText strong {
          color: #1a2420;
          font-weight: 500;
        }
        .bodyTextLast {
          margin-bottom: 0;
        }
        .whoGrid {
          display: grid;
          grid-template-columns: 460px 1fr;
          gap: 4rem;
          align-items: start;
        }
        .whoLabel .h2 {
          margin-bottom: 0;
        }
        .whoBody {
          padding-top: 4px;
          border-left: 1px solid #ede9e0;
          padding-left: 3rem;
        }
        .philosophy {
          background: #1a2420;
          padding: 5rem 2.5rem;
        }
        .philosophyInner {
          max-width: 860px;
          text-align: center;
        }
        .philosophyQuote {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(22px, 3.2vw, 32px);
          font-weight: 300;
          color: #fafaf8;
          line-height: 1.45;
          font-style: italic;
          margin: 0;
        }
        .philosophyRule {
          width: 48px;
          height: 1px;
          background: #c4a45a;
          margin: 28px auto;
        }
        .philosophySub {
          font-size: 13px;
          color: #8a9e8c;
          letter-spacing: 0.06em;
          line-height: 1.7;
        }
        .pillarGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        .pillarCard {
          background: #fff;
          border: 1px solid #ede9e0;
          padding: 2rem 1.75rem 1.75rem;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .pillarCard:hover {
          border-color: #d4ddd6;
          box-shadow: 0 8px 32px rgba(26, 36, 32, 0.06);
        }
        .pillarNum {
          font-family: "Cormorant Garamond", serif;
          font-size: 13px;
          letter-spacing: 0.14em;
          color: #c4a45a;
          margin-bottom: 18px;
          padding-bottom: 14px;
          border-bottom: 1px solid #ede9e0;
        }
        .pillarTitle {
          font-family: "Cormorant Garamond", serif;
          font-size: 22px;
          color: #1a2420;
          margin-bottom: 6px;
          line-height: 1.2;
        }
        .pillarDesc {
          font-size: 12px;
          color: #c4a45a;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 14px;
          line-height: 1.5;
        }
        .pillarDetail {
          font-size: 13.5px;
          color: #8a9e8c;
          line-height: 1.75;
          font-weight: 300;
        }
        @media (max-width: 1000px) {
          .whoGrid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .whoBody {
            border-left: none;
            padding-left: 0;
            padding-top: 0;
            border-top: 1px solid #ede9e0;
            padding-top: 2rem;
          }
          .pillarGrid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .page {
            padding-top: 56px;
          }
          .hero {
            padding: 3.5rem 1.25rem 2.75rem;
          }
          .section {
            padding: 3.5rem 1.25rem;
          }
          .philosophy {
            padding: 3.5rem 1.25rem;
          }
          .h2 {
            font-size: 30px;
          }
          .pillarGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
