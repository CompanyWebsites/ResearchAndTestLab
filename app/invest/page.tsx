"use client";
import Link from "next/link";
import { useState } from "react";

const opportunities = [
  {
    type: "Production Partnership",
    amount: "Infrastructure-based",
    desc: "Land, facility, and infrastructure support to scale manufacturing of our patented air purification, filtration, and pollution-control technologies.",
    benefits: [
      "Manufacturing facility access",
      "Land & infrastructure support",
      "Priority production capacity",
      "Long-term supply agreements",
    ],
    icon: "🏭",
  },
  {
    type: "Capital Investment",
    amount: "starting from ₹50Cr",
    desc: "Equity participation as we scale commercialization of our patent portfolio across environmental engineering, renewable energy, and advanced materials.",
    benefits: [
      "Equity stake",
      "Board observer rights",
      "First access to new technologies",
      "Quarterly investor briefings",
    ],
    icon: "🌱",
  },
  {
    type: "Debt Funding",
    amount: "Structured Debt",
    desc: "Structured financing to support prototype-to-commercialization scale-up, equipment procurement, and technology licensing across our research areas.",
    benefits: [
      "Fixed repayment terms",
      "Asset-backed structuring",
      "Milestone-based disbursement",
      "Priority repayment terms",
    ],
    icon: "🏛️",
  },
];

const faqs = [
  {
    q: "What stage is THAPAK at?",
    a: "THAPAK Research And Test Lab is an innovation-driven research organization active across scientific research, engineering design, prototype development, laboratory testing, and technology commercialization.",
  },
  {
    q: "Is the technology patented?",
    a: "Yes. THAPAK holds a significant intellectual property portfolio, including six process patents and three PCT applications for our air purification and carbon removal systems, alongside multiple additional applied and granted patents across renewable energy, hydrogen propulsion, and material science.",
  },
  {
    q: "What kinds of funding can I offer?",
    a: "We welcome production partnerships (facility and infrastructure support), capital investment (equity participation), and debt funding (structured financing), across environmental engineering, renewable energy, hydrogen technologies, material science, and industrial process engineering.",
  },
  {
    q: "How do I start a collaboration?",
    a: "Use the form below or email us directly. We respond within 48 hours to all inquiries from industries, universities, government agencies, research organizations, startups, and investors.",
  },
];

const stats = [
  ["35", "Patents & Applications"],
  ["8", "Granted Patents"],
  ["3", "PCT Applications"],
  // ["74%", "Solar Thermal Recovery"],
];

const metrics = [
  {
    label: "Intellectual Property Portfolio",
    value: "16 Patents",
    sub: "Applied and granted assets across engineering domains",
  },
  // {
  //   label: "Solar Thermal Power Storage",
  //   value: "74%",
  //   sub: "Thermal recovery performance",
  // },
  {
    label: "Insulating Board Performance",
    value: "99.99%",
    sub: "High performance insulating capacity",
  },
  {
    label: "Research Focus",
    value: "Multidisciplinary R&D",
    sub: "Environmental engineering, renewable energy, hydrogen & materials",
  },
];

export default function Invest() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="page">
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="eyebrow eyebrow-gold">Invest &amp; Collaborate</div>
          <h1 className="heroTitle">
            Engineer
            <br />
            <em className="heroEm">tomorrow, with us.</em>
          </h1>
          <p className="heroText">
            THAPAK Research And Test Lab Pvt. Ltd. is seeking investors,
            partners, and collaborators to help scale our indigenous
            technologies in environmental engineering, renewable energy,
            advanced materials, and clean technology.
          </p>

          <div className="statRow">
            {stats.map(([v, l]) => (
              <div key={l} className="statItem">
                <div className="statValue ">{v}</div>
                <div className="statLabel">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="section sectionLight">
        <div className="container">
          <div className="sectionHeading">
            <div className="eyebrow eyebrow-gold">Pathways</div>
            <h2 className="h2Center">How you can work with us</h2>
          </div>

          <div className="opportunityGrid">
            {opportunities.map((o, i) => (
              <div key={i} className="oppCard">
                <div className="oppIcon">{o.icon}</div>
                <div className="oppHeader">
                  <h3 className="oppTitle">{o.type}</h3>
                  <span className="oppAmount">{o.amount}</span>
                </div>
                <p className="oppDesc">{o.desc}</p>
                <ul className="oppList">
                  {o.benefits.map((b, j) => (
                    <li key={j} className="oppListItem">
                      <span className="oppDot" />
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
      <section className="section sectionAlt">
        <div className="container whyGrid">
          <div>
            <div className="eyebrow eyebrow-gold">Why THAPAK</div>
            <h2 className="h2">
              The research is proven.
              <br />
              <em className="h2Em">The portfolio is ready to scale.</em>
            </h2>
            <p className="bodyText">
              THAPAK's mission is to develop breakthrough engineering
              technologies, build a strong intellectual property portfolio, and
              convert research into commercially viable products across
              environmental engineering, renewable energy, and industrial
              process engineering.
            </p>
            <p className="bodyText bodyTextLast">
              With a portfolio spanning air purification, carbon removal,
              hydrogen propulsion, and advanced materials, THAPAK offers a
              multidisciplinary foundation for production partnerships, capital
              investment, and structured debt funding.
            </p>
          </div>

          <div>
            {metrics.map((m, i) => (
              <div key={i} className="metricRow">
                <div>
                  <div className="metricLabel">{m.label}</div>
                  <div className="metricSub">{m.sub}</div>
                </div>
                <div className="metricValue">{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section sectionLight">
        <div className="faqContainer">
          <div className="sectionHeading">
            <div className="eyebrow eyebrow-gold">FAQ</div>
            <h2 className="h2Center">Investor questions</h2>
          </div>

          {faqs.map((faq, i) => (
            <div key={i} className="faqItem">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="faqBtn"
              >
                <span className="faqQ">{faq.q}</span>
                <span
                  className="faqIcon"
                  style={{
                    transform: openFaq === i ? "rotate(45deg)" : "none",
                  }}
                >
                  +
                </span>
              </button>
              {openFaq === i && (
                <div className="faqAnswerWrap">
                  <p className="faqAnswer">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
          <div className="faqDivider" />
        </div>
      </section>

      {/* CTA */}
      <section className="ctaSection">
        <div className="ctaContainer">
          <h2 className="ctaTitle">Ready to get started?</h2>
          <p className="ctaText">
            Send us your details and we will schedule a discovery call within 48
            hours.
          </p>
          <div className="ctaButtons">
            <Link href="/query" className="ctaBtnPrimary">
              Submit Interest
            </Link>
            <a
              href="mailto:support@research.thapak.co.in"
              className="ctaBtnSecondary"
            >
              Email Directly
            </a>
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
        }
        .eyebrow-gold {
          color: #c4a45a;
          margin-bottom: 20px;
        }
        .sectionHeading {
          text-align: center;
          margin-bottom: 4.5rem;
        }
        .h2Center {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(30px, 5vw, 52px);
          font-weight: 300;
          color: #1a2420;
        }
        .h2 {
          font-family: "Cormorant Garamond", serif;
          font-size: 46px;
          font-weight: 300;
          color: #1a2420;
          line-height: 1.2;
          margin-bottom: 28px;
        }
        .h2Em {
          font-style: italic;
          color: #5a7a5c;
        }
        .bodyText {
          font-size: 15px;
          color: #5a7a5c;
          line-height: 1.9;
          font-weight: 300;
          margin-bottom: 20px;
        }
        .bodyTextLast {
          margin-bottom: 0;
        }

        /* Hero */
        .hero {
          padding: 7rem 2.5rem 4rem;
          background: linear-gradient(160deg, #1a2420, #2c3e35);
        }
        .heroTitle {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(38px, 8vw, 88px);
          font-weight: 300;
          color: #fafaf8;
          max-width: 700px;
          line-height: 1.08;
          margin-bottom: 24px;
        }
        .heroEm {
          color: #8a9e8c;
          font-style: italic;
        }
        .heroText {
          font-size: 15px;
          color: #8a9e8c;
          max-width: 520px;
          line-height: 1.9;
          font-weight: 300;
        }
        .statRow {
          margin-top: 40px;
          display: flex;
          gap: 4rem;
          flex-wrap: wrap;
        }
        .statValue {
          font-family: "Cormorant Garamond", serif;
          font-size: 40px;
          color: #fafaf8;
          font-weight: 300;
        }
        .statLabel {
          font-size: 11px;
          color: #5a7a5c;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        /* Sections */
        .section {
          padding: 7rem 2.5rem;
        }
        .sectionLight {
          background: #fafaf8;
        }
        .sectionAlt {
          background: #f4f3f0;
        }

        /* Opportunities */
        .opportunityGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        .oppCard {
          padding: 3rem;
          background: #f4f3f0;
          border-top: 3px solid #ede9e0;
          transition: border-color 0.3s;
        }
        .oppCard:hover {
          border-top-color: #5a7a5c;
        }
        .oppIcon {
          font-size: 32px;
          margin-bottom: 16px;
        }
        .oppHeader {
          display: flex;
          justify-content: space-between;
          align-items: start;
          gap: 12px;
          margin-bottom: 16px;
        }
        .oppTitle {
          font-family: "Cormorant Garamond", serif;
          font-size: 28px;
          color: #1a2420;
          font-weight: 300;
        }
        .oppAmount {
          font-size: 12px;
          color: #c4a45a;
          letter-spacing: 0.06em;
          font-family: "DM Sans", sans-serif;
          font-weight: 400;
          margin-top: 6px;
          white-space: nowrap;
        }
        .oppDesc {
          font-size: 14px;
          color: #5a7a5c;
          line-height: 1.8;
          font-weight: 300;
          margin-bottom: 20px;
        }
        .oppList {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .oppListItem {
          font-size: 13px;
          color: #8a9e8c;
          padding: 6px 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .oppDot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #5a7a5c;
          display: inline-block;
          flex-shrink: 0;
        }

        /* Why Invest */
        .whyGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }
        .metricRow {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          padding: 20px 0;
          border-bottom: 1px solid #d4ddd6;
        }
        .metricLabel {
          font-size: 13px;
          color: #8a9e8c;
          font-weight: 300;
        }
        .metricSub {
          font-size: 11px;
          color: #d4ddd6;
          margin-top: 2px;
        }
        .metricValue {
          font-family: "Cormorant Garamond", serif;
          font-size: 30px;
          color: #1a2420;
          font-weight: 300;
          white-space: nowrap;
        }

        /* FAQ */
        .faqContainer {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 2.5rem;
        }
        .faqItem {
          border-top: 1px solid #ede9e0;
          overflow: hidden;
        }
        .faqBtn {
          width: 100%;
          background: none;
          border: none;
          padding: 22px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          cursor: pointer;
          text-align: left;
        }
        .faqQ {
          font-family: "Cormorant Garamond", serif;
          font-size: 22px;
          color: #1a2420;
          font-weight: 300;
        }
        .faqIcon {
          font-size: 22px;
          color: #5a7a5c;
          transition: transform 0.3s;
          flex-shrink: 0;
        }
        .faqAnswerWrap {
          padding-bottom: 24px;
        }
        .faqAnswer {
          font-size: 14px;
          color: #8a9e8c;
          line-height: 1.8;
          font-weight: 300;
        }
        .faqDivider {
          border-top: 1px solid #ede9e0;
        }

        /* CTA */
        .ctaSection {
          padding: 6rem 2.5rem;
          background: #1a2420;
          text-align: center;
        }
        .ctaContainer {
          max-width: 600px;
          margin: 0 auto;
        }
        .ctaTitle {
          font-family: "Cormorant Garamond", serif;
          font-size: 44px;
          font-weight: 300;
          color: #fafaf8;
          margin-bottom: 16px;
        }
        .ctaText {
          font-size: 14px;
          color: #8a9e8c;
          margin-bottom: 36px;
          line-height: 1.8;
        }
        .ctaButtons {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .ctaBtnPrimary {
          background: #5a7a5c;
          color: #fafaf8;
          padding: 14px 42px;
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
        }
        .ctaBtnSecondary {
          border: 1px solid #2c3e35;
          color: #8a9e8c;
          padding: 14px 42px;
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
        }

        /* ===== Tablet ===== */
        @media (max-width: 900px) {
          .hero {
            padding: 5rem 1.75rem 3rem;
          }
          .section {
            padding: 4.5rem 1.75rem;
          }
          .sectionHeading {
            margin-bottom: 3rem;
          }
          .opportunityGrid {
            grid-template-columns: 1fr;
          }
          .whyGrid {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }
          .statRow {
            gap: 2.5rem;
          }
          .faqContainer {
            padding: 0 1.75rem;
          }
          .ctaSection {
            padding: 4.5rem 1.75rem;
          }
        }

        /* ===== Mobile ===== */
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
          .sectionHeading {
            margin-bottom: 2.5rem;
          }
          .heroText {
            font-size: 14px;
          }

          /* Stat row: 2 columns instead of a cramped 4-in-a-row */
          .statRow {
            margin-top: 32px;
            gap: 1.5rem 2rem;
          }
          .statItem {
            width: calc(50% - 1rem);
          }
          .statValue {
            font-size: 32px;
          }

          /* Opportunity cards */
          .oppCard {
            padding: 2rem 1.5rem;
          }
          .oppTitle {
            font-size: 23px;
          }
          .oppHeader {
            flex-direction: column;
            gap: 4px;
          }
          .oppAmount {
            margin-top: 0;
          }

          /* Why invest */
          .h2 {
            font-size: 32px;
            margin-bottom: 22px;
          }
          .metricRow {
            padding: 16px 0;
          }
          .metricValue {
            font-size: 24px;
          }

          /* FAQ */
          .faqContainer {
            padding: 0 1.25rem;
          }
          .faqQ {
            font-size: 19px;
          }
          .faqBtn {
            padding: 18px 0;
          }

          /* CTA */
          .ctaSection {
            padding: 3.5rem 1.25rem;
          }
          .ctaTitle {
            font-size: 30px;
          }
          .ctaButtons {
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
          }
          .ctaBtnPrimary,
          .ctaBtnSecondary {
            padding: 14px 24px;
            text-align: center;
          }
        }

        @media (max-width: 380px) {
          .statItem {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
