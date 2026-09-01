"use client";
import Link from "next/link";
import { useState } from "react";

const routes = [
  {
    id: "01",
    title: "Joint Research",
    audience: "Universities, research institutions & industrial R&D",
    desc: "Co-develop breakthrough solutions alongside THAPAK's multidisciplinary team. Share infrastructure, expertise, and IP to publish, patent, and prototype together.",
    points: [
      "Joint publications & patents",
      "Shared lab & testing infrastructure",
      "Cross-disciplinary expert teams",
      "Long-term research MoUs",
    ],
    icon: "◈",
  },
  {
    id: "02",
    title: "Technology Licensing",
    audience: "Companies seeking access to THAPAK IP",
    desc: "License proven, patented technologies — from air purification and carbon removal to advanced materials — for integration into your products and processes.",
    points: [
      "Access to granted patents & PCT applications",
      "Flexible, field-specific licensing models",
      "Technical documentation & team training",
      "Ongoing R&D and upgrade support",
    ],
    icon: "⬢",
  },
  {
    id: "03",
    title: "Technology Transfer",
    audience: "For industrial commercialization",
    desc: "Take THAPAK technologies from lab to market with complete know-how transfer, pilot support, and scale-up assistance for manufacturing readiness.",
    points: [
      "End-to-end know-how transfer",
      "Pilot to production handholding",
      "Manufacturing & scale-up readiness",
      "Commercial deployment guidance",
    ],
    icon: "⬡",
  },
  {
    id: "04",
    title: "Contract Research",
    audience: "Organizations requiring specialized development",
    desc: "Commission THAPAK to solve a specific technology challenge. Confidential, milestone-driven R&D tailored to your industry, timeline, and outcomes.",
    points: [
      "Bespoke problem solving",
      "Confidential & milestone-based delivery",
      "Prototype development & lab testing",
      "Dedicated project team",
    ],
    icon: "⬔",
  },
  {
    id: "05",
    title: "Investment & Commercialization",
    audience: "Investors scaling proprietary technologies",
    desc: "Fuel the scale-up of THAPAK's patent portfolio across environmental engineering, renewable energy, and clean tech through equity, partnership, or structured pathways.",
    points: [
      "Equity & growth participation",
      "First access to pipeline technologies",
      "Commercialization roadmap visibility",
      "Quarterly portfolio briefings",
    ],
    icon: "⬣",
  },
];

const process = [
  { n: "01", t: "Discover", d: "Share your intent via the inquiry form. We respond within 48 hours." },
  { n: "02", t: "Define", d: "We align on scope, IP terms, timelines, and collaboration model." },
  { n: "03", t: "Develop", d: "Joint execution with milestone reviews, lab access, and transparent reporting." },
  { n: "04", t: "Deploy", d: "Transfer, license, publish, or scale — with ongoing support as needed." },
];

const faqs = [
  {
    q: "Who can collaborate with THAPAK?",
    a: "We work with universities, research institutions, industrial R&D teams, companies seeking IP or manufacturing scale-up, organizations needing contract research, and investors interested in commercialization. If you have a problem we can solve together, there is a pathway for you.",
  },
  {
    q: "Is the technology patented?",
    a: "Yes. THAPAK holds a significant intellectual property portfolio, including six process patents and three PCT applications for air purification and carbon removal systems, alongside multiple applied and granted patents across renewable energy, hydrogen propulsion, and material science.",
  },
  {
    q: "What is the difference between licensing and technology transfer?",
    a: "Licensing grants you rights to use specific THAPAK IP within a defined field and territory while we retain ownership. Technology transfer is a deeper, end-to-end handover — including know-how, prototypes, and scale-up support — to enable you to manufacture and commercialize independently.",
  },
  {
    q: "Do I need a large upfront investment to start?",
    a: "No. Each pathway is scoped to your needs. Joint research and contract research are milestone-based, licensing is flexible by field, and technology transfer and investment pathways are structured collaboratively — not gated by a fixed entry amount.",
  },
  {
    q: "How do we begin?",
    a: "Select the route that fits you best and submit an inquiry, or email us directly. We schedule a discovery call within 48 hours to explore fit, scope, and next steps.",
  },
];

const stats = [
  ["29", "Patents & Applications"],
  ["8", "Granted Patents"],
  ["3", "PCT Applications"],
];

const metrics = [
  {
    label: "Intellectual Property Portfolio",
    value: "16 Patents",
    sub: "Applied and granted assets across engineering domains",
  },
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
      <section className="hero">
        <div className="container">
          <div className="eyebrow eyebrow-gold">Collaborate With THAPAK</div>
          <h1 className="heroTitle">
            Five pathways.
            <br />
            <em className="heroEm">One shared ambition.</em>
          </h1>
          <p className="heroText">
            THAPAK Research And Test Lab Pvt. Ltd. partners with universities,
            R&amp;D organisations, companies, and investors to co-create,
            license, transfer, and scale indigenous technologies in environmental
            engineering, renewable energy, advanced materials, and clean
            technology — on terms that fit your vision, not a fixed ticket size.
          </p>
          <div className="heroActions">
            <a href="#routes" className="heroBtnPrimary">Explore Routes</a>
            <Link href="/query" className="heroBtnSecondary">Start a Conversation</Link>
          </div>
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

      <section id="routes" className="section sectionLight">
        <div className="container">
          <div className="sectionHeading">
            <div className="eyebrow eyebrow-gold">Collaboration Routes</div>
            <h2 className="h2Center">Choose how we build together</h2>
            <p className="sectionSub">
              No single doorway, no single threshold. Pick the model that matches
              your organisation — or combine them as your needs evolve.
            </p>
          </div>

          <div className="routeGrid">
            {routes.map((r) => (
              <div key={r.title} className="routeCard">
                <div className="routeTop">
                  <span className="routeId">{r.id}</span>
                  <span className="routeIcon">{r.icon}</span>
                </div>
                <h3 className="routeTitle">{r.title}</h3>
                <div className="routeAudience">{r.audience}</div>
                <p className="routeDesc">{r.desc}</p>
                <ul className="routeList">
                  {r.points.map((p) => (
                    <li key={p} className="routeListItem">
                      <span className="routeDot" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link href="/query" className="routeLink">Inquire about this route →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <div className="eyebrow eyebrow-gold" style={{ textAlign: "center", marginBottom: "1rem" }}>How it works</div>
          <h2 className="h2Center" style={{ marginBottom: "3.5rem" }}>From first conversation to deployment</h2>
          <div className="processGrid">
            {process.map((s) => (
              <div key={s.n} className="processCard">
                <div className="processNum">{s.n}</div>
                <div className="processTitle">{s.t}</div>
                <div className="processDesc">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionLight whySection">
        <div className="container whyGrid">
          <div>
            <div className="eyebrow eyebrow-gold">Why THAPAK</div>
            <h2 className="h2">
              Research proven.
              <br />
              <em className="h2Em">Portfolio ready to scale.</em>
            </h2>
            <p className="bodyText">
              THAPAK&apos;s mission is to develop breakthrough engineering
              technologies, build a strong intellectual property portfolio, and
              convert research into commercially viable products across
              environmental engineering, renewable energy, and industrial
              process engineering.
            </p>
            <p className="bodyText bodyTextLast">
              Whether you seek joint research, IP access, manufacturing
              readiness, bespoke R&amp;D, or commercialization at scale — our
              portfolio and team adapt to your pathway, not the other way
              around.
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

      <section className="section sectionAlt">
        <div className="faqContainer">
          <div className="sectionHeading">
            <div className="eyebrow eyebrow-gold">FAQ</div>
            <h2 className="h2Center">Common questions</h2>
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

      <section className="ctaSection">
        <div className="ctaContainer">
          <h2 className="ctaTitle">Not sure which route fits?</h2>
          <p className="ctaText">
            Tell us about your organisation and goals. We&apos;ll help you find
            the right collaboration model and schedule a discovery call within
            48 hours.
          </p>
          <div className="ctaButtons">
            <Link href="/query" className="ctaBtnPrimary">
              Start a Conversation
            </Link>
            <a href="mailto:support@research.thapak.co.in" className="ctaBtnSecondary">
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
          margin-bottom: 3.5rem;
        }
        .sectionSub {
          max-width: 640px;
          margin: 16px auto 0;
          font-size: 14px;
          color: #8a9e8c;
          line-height: 1.8;
          font-weight: 300;
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
        .hero {
          padding: 7rem 2.5rem 4rem;
          background: linear-gradient(160deg, #1a2420, #2c3e35);
        }
        .heroTitle {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(38px, 8vw, 88px);
          font-weight: 300;
          color: #fafaf8;
          max-width: 760px;
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
          max-width: 640px;
          line-height: 1.9;
          font-weight: 300;
        }
        .heroActions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 32px;
        }
        .heroBtnPrimary {
          background: #5a7a5c;
          color: #fafaf8;
          padding: 13px 28px;
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          font-weight: 400;
        }
        .heroBtnSecondary {
          border: 1px solid rgba(237, 233, 224, 0.25);
          color: #ede9e0;
          padding: 13px 28px;
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          font-weight: 300;
        }
        .statRow {
          margin-top: 44px;
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
        .section {
          padding: 6.5rem 2.5rem;
        }
        .sectionLight {
          background: #fafaf8;
        }
        .sectionAlt {
          background: #f4f3f0;
        }
        .routeGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }
        .routeCard {
          padding: 2.5rem 2rem 2rem;
          background: #f4f3f0;
          border-top: 3px solid #ede9e0;
          transition: border-color 0.3s, transform 0.3s;
          display: flex;
          flex-direction: column;
        }
        .routeCard:hover {
          border-top-color: #5a7a5c;
          transform: translateY(-2px);
        }
        .routeCard:nth-child(4),
        .routeCard:nth-child(5) {
          background: #ffffff;
          border: 1px solid #ede9e0;
          border-top: 3px solid #ede9e0;
        }
        .routeCard:nth-child(4):hover,
        .routeCard:nth-child(5):hover {
          border-top-color: #5a7a5c;
        }
        .routeTop {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .routeId {
          font-family: "Cormorant Garamond", serif;
          font-size: 13px;
          letter-spacing: 0.12em;
          color: #c4a45a;
          font-weight: 400;
        }
        .routeIcon {
          font-size: 18px;
          color: #5a7a5c;
          opacity: 0.9;
        }
        .routeTitle {
          font-family: "Cormorant Garamond", serif;
          font-size: 24px;
          color: #1a2420;
          font-weight: 300;
          margin-bottom: 6px;
          line-height: 1.2;
        }
        .routeAudience {
          font-size: 11px;
          color: #c4a45a;
          letter-spacing: 0.06em;
          line-height: 1.5;
          margin-bottom: 14px;
          font-weight: 400;
        }
        .routeDesc {
          font-size: 13.5px;
          color: #5a7a5c;
          line-height: 1.8;
          font-weight: 300;
          margin-bottom: 18px;
          flex: 1;
        }
        .routeList {
          list-style: none;
          padding: 0;
          margin: 0 0 20px 0;
          border-top: 1px solid #ede9e0;
          padding-top: 16px;
        }
        .routeListItem {
          font-size: 12.5px;
          color: #8a9e8c;
          padding: 5px 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .routeDot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #5a7a5c;
          display: inline-block;
          flex-shrink: 0;
        }
        .routeLink {
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #1a2420;
          text-decoration: none;
          border-bottom: 1px solid #1a2420;
          padding-bottom: 2px;
          align-self: flex-start;
          transition: color 0.2s, border-color 0.2s;
        }
        .routeLink:hover {
          color: #5a7a5c;
          border-color: #5a7a5c;
        }
        .processGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        .processCard {
          background: #fafaf8;
          padding: 2rem;
          border-left: 3px solid #d4ddd6;
        }
        .processNum {
          font-family: "Cormorant Garamond", serif;
          font-size: 28px;
          color: #c4a45a;
          font-weight: 300;
          margin-bottom: 10px;
        }
        .processTitle {
          font-family: "Cormorant Garamond", serif;
          font-size: 20px;
          color: #1a2420;
          font-weight: 300;
          margin-bottom: 8px;
        }
        .processDesc {
          font-size: 13px;
          color: #8a9e8c;
          line-height: 1.7;
          font-weight: 300;
        }
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
          font-size: 20px;
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
        @media (max-width: 1024px) {
          .routeGrid {
            grid-template-columns: repeat(2, 1fr);
          }
          .routeCard:nth-child(5) {
            grid-column: span 2;
            max-width: 50%;
            justify-self: center;
            width: 100%;
          }
        }
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
          .processGrid {
            grid-template-columns: repeat(2, 1fr);
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
          .heroActions {
            flex-direction: column;
          }
          .heroBtnPrimary,
          .heroBtnSecondary {
            text-align: center;
          }
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
          .routeGrid {
            grid-template-columns: 1fr;
          }
          .routeCard:nth-child(5) {
            grid-column: auto;
            max-width: 100%;
          }
          .routeCard {
            padding: 2rem 1.5rem;
          }
          .routeTitle {
            font-size: 21px;
          }
          .processGrid {
            grid-template-columns: 1fr;
          }
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
          .faqContainer {
            padding: 0 1.25rem;
          }
          .faqQ {
            font-size: 18px;
          }
          .faqBtn {
            padding: 18px 0;
          }
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
