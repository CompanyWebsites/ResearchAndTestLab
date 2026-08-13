"use client";
import Link from "next/link";

const projects = [
  {
    id: "01",
    title: "Satna Cement Plant — Air Quality Retrofit",
    category: "Industrial",
    year: "2024",
    location: "Satna, MP",
    status: "Completed",
    desc: "Deployed 6 TRT-IND 5000 units across the cement processing zone. Measured PM2.5 levels reduced from 340 μg/m³ to 74 μg/m³ within 90 days — a 78% improvement, verified by third-party environmental auditors.",
    outcomes: [
      "78% PM2.5 reduction",
      "Zero electricity cost",
      "6 months ROI",
      "45 workers benefited",
    ],
    color: "#2C3E35",
  },
  {
    id: "02",
    title: "AIIMS Bhopal — Corridor Air Management",
    category: "Hospital",
    year: "2024",
    location: "Bhopal, MP",
    status: "Completed",
    desc: "Pilot installation of 3 TRT-MED 1200 units in the hospital's surgical wing and ICU approach corridors. Sub-22dB noise levels maintained. Hospital infection rate index improved by 31% per quarterly review.",
    outcomes: [
      "99.1% bacterial filtration",
      "EMI-safe operation",
      "31% infection index drop",
      "0 power draw",
    ],
    color: "#5A7A5C",
  },
  {
    id: "03",
    title: "Narmada Housing Society — Residential Pilot",
    category: "Residential",
    year: "2025",
    location: "Jabalpur, MP",
    status: "Ongoing",
    desc: "15-unit residential complex pilot in central Jabalpur. TRT-HOME 200 units installed on balconies and common terraces. Resident surveys report significant improvement in perceived air quality and respiratory comfort.",
    outcomes: [
      "72% PM10 reduction",
      "High resident satisfaction",
      "Silent operation",
      "Integrated design",
    ],
    color: "#C4A45A",
  },
  {
    id: "04",
    title: "MP Pollution Control Board — Field Study",
    category: "Research",
    year: "2025",
    location: "Multiple, MP",
    status: "Ongoing",
    desc: "Collaborative research study with MPPCB deploying monitoring-grade turbine units across 8 urban measurement nodes. Data collected feeds into state pollution mapping and policy recommendations.",
    outcomes: [
      "8 measurement nodes",
      "Real-time data streams",
      "Policy integration",
      "State collaboration",
    ],
    color: "#8A9E8C",
  },
];

const pubs = [
  {
    title: "Passive Turbine Filtration for Urban PM2.5: A Case Study",
    journal: "Journal of Environmental Technology, 2024",
    type: "Peer Reviewed",
  },
  {
    title: "Zero-Energy Air Purification in Medical Environments",
    journal: "Indian Health Engineering Society, 2024",
    type: "Conference Paper",
  },
  {
    title:
      "Wind-Driven Particulate Capture: Efficiency Models for Tropical Climates",
    journal: "Thapak TestLab White Paper, 2025",
    type: "White Paper",
  },
];

export default function OurWork() {
  return (
    <div className="page">
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="eyebrow eyebrow-muted">Our Work</div>
          <h1 className="heroTitle">
            Real results.
            <br />
            <em className="heroEm">Verified data.</em>
          </h1>
          <p className="heroText">
            Every deployment we undertake is rigorously monitored and
            independently verified. Explore our field projects, publications,
            and ongoing research.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="section sectionLight">
        <div className="container">
          <div className="eyebrow eyebrow-gold sectionLabel">
            Deployments &amp; Case Studies
          </div>

          <div className="projectList">
            {projects.map((p) => (
              <div
                key={p.id}
                className="projectCard"
                style={{ borderLeft: `4px solid ${p.color}` }}
              >
                <div className="projectMeta">
                  <div className="projectId">{p.id}</div>
                  <div className="projectCategory" style={{ color: p.color }}>
                    {p.category}
                  </div>
                  <div className="projectYear">{p.year}</div>
                </div>

                <div className="projectBody">
                  <h3 className="projectTitle">{p.title}</h3>
                  <div className="projectLocation">📍 {p.location}</div>
                  <p className="projectDesc">{p.desc}</p>
                  <div className="outcomeList">
                    {p.outcomes.map((o, i) => (
                      <span key={i} className="outcomeChip">
                        {o}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="projectStatusWrap">
                  <span
                    className="projectStatus"
                    style={{
                      background:
                        p.status === "Completed" ? "#1A2420" : "#EDE9E0",
                      color: p.status === "Completed" ? "#FAFAF8" : "#5A7A5C",
                    }}
                  >
                    {p.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="section sectionDark">
        <div className="container">
          <div className="eyebrow eyebrow-gold sectionLabel">
            Research &amp; Publications
          </div>

          <div className="pubGrid">
            {pubs.map((pub, i) => (
              <div key={i} className="pubCard">
                <div className="pubType">{pub.type}</div>
                <h3 className="pubTitle">{pub.title}</h3>
                <div className="pubJournal">{pub.journal}</div>
                <div className="pubRequest">REQUEST COPY →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presentation download CTA */}
      <section className="ctaSection">
        <div className="ctaContainer">
          <h2 className="ctaTitle">Full presentation available</h2>
          <p className="ctaText">
            Our detailed research presentation covers aerodynamic principles,
            field data, financial projections, and deployment methodology.
            Request access below.
          </p>
          <div className="ctaButtons">
            <Link href="/query" className="ctaBtnPrimary">
              Request Presentation
            </Link>
            <Link href="/invest" className="ctaBtnSecondary">
              Invest &amp; Collaborate
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
        }
        .eyebrow-muted {
          color: #8a9e8c;
          margin-bottom: 20px;
        }
        .eyebrow-gold {
          color: #c4a45a;
        }
        .sectionLabel {
          margin-bottom: 3.5rem;
        }

        /* Hero */
        .hero {
          padding: 7rem 2.5rem 4rem;
          background: linear-gradient(160deg, #f4f3f0, #ede9e0);
        }
        .heroTitle {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(40px, 8vw, 88px);
          font-weight: 300;
          color: #1a2420;
          max-width: 700px;
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
          max-width: 520px;
          line-height: 1.9;
          font-weight: 300;
        }

        /* Sections */
        .section {
          padding: 7rem 2.5rem;
        }
        .sectionLight {
          background: #fafaf8;
        }
        .sectionDark {
          background: #1a2420;
        }

        /* Projects */
        .projectList {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        .projectCard {
          display: grid;
          grid-template-columns: 120px 1fr auto;
          gap: 3rem;
          align-items: start;
          padding: 3rem;
          background: #f4f3f0;
        }
        .projectId {
          font-family: "Cormorant Garamond", serif;
          font-size: 56px;
          color: #ede9e0;
          font-weight: 300;
          line-height: 1;
        }
        .projectCategory {
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-top: 4px;
        }
        .projectYear {
          font-size: 11px;
          color: #8a9e8c;
          margin-top: 4px;
        }
        .projectTitle {
          font-family: "Cormorant Garamond", serif;
          font-size: 26px;
          color: #1a2420;
          font-weight: 300;
          margin-bottom: 8px;
        }
        .projectLocation {
          font-size: 12px;
          color: #8a9e8c;
          margin-bottom: 16px;
        }
        .projectDesc {
          font-size: 14px;
          color: #5a7a5c;
          line-height: 1.8;
          font-weight: 300;
          max-width: 580px;
          margin-bottom: 20px;
        }
        .outcomeList {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .outcomeChip {
          padding: 5px 14px;
          background: #ede9e0;
          font-size: 12px;
          color: #5a7a5c;
          border-radius: 2px;
        }
        .projectStatusWrap {
          display: flex;
        }
        .projectStatus {
          padding: 6px 16px;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border-radius: 2px;
          white-space: nowrap;
        }

        /* Publications */
        .pubGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .pubCard {
          padding: 2.5rem;
          border: 1px solid #2c3e35;
          background: rgba(255, 255, 255, 0.02);
        }
        .pubType {
          font-size: 10px;
          letter-spacing: 0.18em;
          color: #c4a45a;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .pubTitle {
          font-family: "Cormorant Garamond", serif;
          font-size: 22px;
          color: #fafaf8;
          font-weight: 300;
          line-height: 1.4;
          margin-bottom: 16px;
        }
        .pubJournal {
          font-size: 12px;
          color: #5a7a5c;
          line-height: 1.6;
        }
        .pubRequest {
          margin-top: 24px;
          font-size: 12px;
          color: #8a9e8c;
          letter-spacing: 0.08em;
          cursor: pointer;
        }

        /* CTA */
        .ctaSection {
          padding: 6rem 2.5rem;
          background: #5a7a5c;
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
          color: #ede9e0;
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
          background: #fafaf8;
          color: #1a2420;
          padding: 14px 36px;
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          font-weight: 400;
        }
        .ctaBtnSecondary {
          border: 1px solid #ede9e0;
          color: #ede9e0;
          padding: 14px 36px;
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          font-weight: 300;
        }

        /* ===== Tablet ===== */
        @media (max-width: 900px) {
          .hero {
            padding: 5rem 1.75rem 3rem;
          }
          .section {
            padding: 4.5rem 1.75rem;
          }
          .sectionLabel {
            margin-bottom: 2.5rem;
          }
          .projectCard {
            grid-template-columns: 90px 1fr auto;
            gap: 2rem;
            padding: 2rem;
          }
          .projectId {
            font-size: 44px;
          }
          .pubGrid {
            grid-template-columns: repeat(2, 1fr);
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
            padding: 3.5rem 1.25rem 2.5rem;
          }
          .section {
            padding: 3.5rem 1.25rem;
          }
          .sectionLabel {
            margin-bottom: 2rem;
          }
          .heroText {
            font-size: 14px;
          }

          /* Deployments & Case Studies: stack id/meta, body, and status
             into a single column instead of the 3-col grid */
          .projectList {
            gap: 1.75rem;
          }
          .projectCard {
            grid-template-columns: 1fr;
            gap: 1.25rem;
            padding: 1.75rem 1.25rem;
          }
          .projectMeta {
            display: flex;
            align-items: baseline;
            gap: 10px;
          }
          .projectId {
            font-size: 32px;
          }
          .projectYear {
            margin-top: 0;
          }
          .projectTitle {
            font-size: 21px;
          }
          .projectDesc {
            font-size: 13px;
            max-width: 100%;
          }
          .outcomeChip {
            font-size: 11px;
            padding: 4px 10px;
          }
          .projectStatusWrap {
            order: -1;
          }
          .projectStatus {
            display: inline-block;
          }

          /* Research & Publications: single column cards */
          .pubGrid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .pubCard {
            padding: 1.75rem;
          }
          .pubTitle {
            font-size: 19px;
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
      `}</style>
    </div>
  );
}
