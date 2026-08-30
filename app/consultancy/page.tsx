"use client";

import Link from "next/link";

const areas = [
  {
    num: "01",
    title: "Environmental Consultancy",
    desc: "Pollution control and environmental performance.",
    detail:
      "Advisory on emission control, air quality, waste management and compliance-driven environmental optimization for industrial operations.",
  },
  {
    num: "02",
    title: "Technology Consultancy",
    desc: "Technology assessment, development and implementation.",
    detail:
      "Independent evaluation of emerging technologies, feasibility analysis, and end-to-end support for adoption and scale-up.",
  },
  {
    num: "03",
    title: "Industrial Process Consultancy",
    desc: "Process improvement and optimization.",
    detail:
      "Diagnostic study of existing processes to improve efficiency, yield, reliability and cost-effectiveness.",
  },
  {
    num: "04",
    title: "Automation Consultancy",
    desc: "Automation architecture and engineering solutions.",
    detail:
      "Design of automation frameworks, control systems and integrated engineering solutions for modern industrial infrastructure.",
  },
  {
    num: "05",
    title: "R&D Consultancy",
    desc: "Technical research and prototype development.",
    detail:
      "Structured research programs, experimental design, and functional prototyping to de-risk innovation before investment.",
  },
  {
    num: "06",
    title: "Technology Commercialization",
    desc: "From laboratory concept to industrial implementation.",
    detail:
      "Pathway from validated concept to market — IP strategy, pilot deployment, transfer and industrial integration.",
  },
];

export default function Consultancy() {
  return (
    <div className="page">
      <section className="hero">
        <div className="container">
          <div className="eyebrow eyebrow-muted">
            Industrial &amp; Technology Consultancy
          </div>
          <h1 className="heroTitle">
            Engineering Consultancy
            <br />
            <em className="heroEm">for Industry</em>
          </h1>
          <p className="heroText">
            We provide specialized technical consultancy to industries seeking to
            solve engineering, environmental, automation and process-related
            challenges — with research-backed, deployment-ready solutions.
          </p>
        </div>
      </section>

      <section className="section sectionLight">
        <div className="container">
          <div className="sectionHeading">
            <div className="eyebrow eyebrow-gold">What We Do</div>
            <h2 className="h2Center">Six areas of specialized expertise</h2>
            <p className="sectionSub">
              Each engagement is led by domain specialists and anchored in
              THAPAK&apos;s research, testing and IP capabilities — ensuring
              advice that is both scientifically rigorous and industrially
              viable.
            </p>
          </div>

          <div className="areasGrid">
            {areas.map((a) => (
              <div key={a.title} className="areaCard">
                <div className="areaNum">{a.num}</div>
                <div className="areaTitle">{a.title}</div>
                <div className="areaDesc">{a.desc}</div>
                <div className="areaDetail">{a.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="strip">
        <div className="container stripInner">
          <div>
            <div className="eyebrow eyebrow-gold" style={{ marginBottom: 12 }}>
              How we engage
            </div>
            <h3 className="stripTitle">
              From diagnostic to deployment — consultancy that delivers outcomes
            </h3>
          </div>
          <div className="stripSteps">
            <div className="step">
              <span className="stepNum">01</span> Diagnose &amp; Assess
            </div>
            <div className="step">
              <span className="stepNum">02</span> Design &amp; Validate
            </div>
            <div className="step">
              <span className="stepNum">03</span> Implement &amp; Transfer
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionLight ctaSection">
        <div className="container ctaInner">
          <h2 className="h2Center" style={{ marginBottom: 16 }}>
            Discuss your engineering challenge with us
          </h2>
          <p className="sectionSub" style={{ marginBottom: 36 }}>
            Whether you need environmental performance improvement, process
            optimization or support commercializing a technology — our team can
            help scope the right engagement.
          </p>
          <div className="ctaRow">
            <Link href="/query" className="btnPrimary">
              Submit a Query
            </Link>
            <Link href="/about" className="btnSecondary">
              About THAPAK
            </Link>
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
          max-width: 760px;
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
          max-width: 580px;
          line-height: 1.9;
          font-weight: 300;
        }
        .section {
          padding: 6rem 2.5rem;
        }
        .sectionLight {
          background: #fafaf8;
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
        .h2Center {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(30px, 5vw, 48px);
          font-weight: 300;
          color: #1a2420;
          line-height: 1.15;
        }
        .areasGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .areaCard {
          background: #fff;
          border: 1px solid #ede9e0;
          padding: 2rem 1.75rem 1.9rem;
          transition: border-color 0.2s, box-shadow 0.2s;
          display: flex;
          flex-direction: column;
        }
        .areaCard:hover {
          border-color: #d4ddd6;
          box-shadow: 0 8px 32px rgba(26, 36, 32, 0.06);
        }
        .areaNum {
          font-family: "Cormorant Garamond", serif;
          font-size: 13px;
          letter-spacing: 0.14em;
          color: #c4a45a;
          margin-bottom: 18px;
          padding-bottom: 14px;
          border-bottom: 1px solid #ede9e0;
        }
        .areaTitle {
          font-family: "Cormorant Garamond", serif;
          font-size: 20px;
          color: #1a2420;
          margin-bottom: 6px;
          line-height: 1.25;
        }
        .areaDesc {
          font-size: 12px;
          color: #c4a45a;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 14px;
          line-height: 1.5;
        }
        .areaDetail {
          font-size: 13.5px;
          color: #8a9e8c;
          line-height: 1.75;
          font-weight: 300;
        }
        .strip {
          background: #1a2420;
          padding: 4rem 2.5rem;
        }
        .stripInner {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3rem;
          align-items: center;
        }
        .stripTitle {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(22px, 2.8vw, 30px);
          font-weight: 300;
          color: #fafaf8;
          line-height: 1.3;
          font-style: italic;
          margin: 0;
        }
        .stripSteps {
          display: flex;
          flex-direction: column;
          gap: 14px;
          border-left: 1px solid #2c3e35;
          padding-left: 2rem;
        }
        .step {
          font-size: 13px;
          color: #d4ddd6;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .stepNum {
          font-family: "Cormorant Garamond", serif;
          font-size: 12px;
          color: #c4a45a;
          letter-spacing: 0.14em;
        }
        .ctaSection {
          text-align: center;
        }
        .ctaInner {
          max-width: 680px;
        }
        .ctaRow {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .btnPrimary {
          display: inline-block;
          background: #1a2420;
          color: #fafaf8;
          padding: 16px 48px;
          font-family: "DM Sans", sans-serif;
          font-size: 13px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          font-weight: 400;
          transition: background 0.3s;
        }
        .btnPrimary:hover {
          background: #5a7a5c;
        }
        .btnSecondary {
          display: inline-block;
          background: #1a2420;
          color: #fafaf8;
          padding: 16px 48px;
          font-family: "DM Sans", sans-serif;
          font-size: 13px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          font-weight: 400;
          transition: background 0.3s;
        }
        .btnSecondary:hover {
          background: #5a7a5c;
        }
        @media (max-width: 1000px) {
          .areasGrid {
            grid-template-columns: repeat(2, 1fr);
          }
          .stripInner {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .stripSteps {
            border-left: none;
            border-top: 1px solid #2c3e35;
            padding-left: 0;
            padding-top: 1.5rem;
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
          .strip {
            padding: 3rem 1.25rem;
          }
          .areasGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
