"use client";

const team = [
  {
    name: "Prashant Thapak",
    role: "Founder & Chief Research Officer",
    bio: "Leads THAPAK's multidisciplinary R&D strategy across environmental engineering, renewable energy, hydrogen technologies, and advanced materials.",
    initials: "PT",
  },
];

const values = [
  {
    title: "Innovation-Driven Research",
    desc: "We develop breakthrough engineering technologies across environmental sustainability, renewable energy, and advanced materials.",
  },
  {
    title: "Strong IP Portfolio",
    desc: "We build and protect a robust portfolio of patents, PCT applications, and proprietary process technologies.",
  },
  {
    title: "Sustainable Solutions",
    desc: "We deliver industrial solutions that support cleaner air, reduced emissions, and environmental protection.",
  },
  {
    title: "Commercialization Focus",
    desc: "We convert research into commercially viable products and support industrial and government research initiatives.",
  },
];

export default function About() {
  return (
    <div className="page">
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="eyebrow eyebrow-muted">About Us</div>
          <h1 className="heroTitle">
            Engineering tomorrow's
            <br />
            <em className="heroEm">sustainable technologies.</em>
          </h1>
          <p className="heroText">
            THAPAK Research And Test Lab Pvt. Ltd. is a multidisciplinary
            research and testing organization focused on transforming innovative
            ideas into practical industrial solutions for a cleaner, more
            sustainable world.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section sectionLight">
        <div className="container storyGrid">
          <div>
            <div className="eyebrow eyebrow-gold">Our Story</div>
            <h2 className="h2">From research idea to industrial impact</h2>
            <p className="bodyText">
              THAPAK Research And Test Lab Pvt. Ltd. is engaged in scientific
              research and development, engineering design, prototype
              development, laboratory testing, patent research, and technology
              commercialization — with the objective of turning innovative ideas
              into practical industrial solutions.
            </p>
            <p className="bodyText">
              Our research spans environmental engineering, renewable energy,
              hydrogen technologies, material science, and industrial process
              engineering — from air purification systems that work without
              electricity, to electrostatic precipitators, HEPA rotary filters,
              solar thermal power storage, and hydrogen jet propulsion for
              high-altitude and drone applications.
            </p>
            <p className="bodyText bodyTextLast">
              Today we work to become one of India's leading engineering
              research organizations, building a strong intellectual property
              portfolio and delivering sustainable industrial solutions to
              industries, government organizations, and research institutions.
            </p>
          </div>

          {/* Values */}
          <div>
            <div className="eyebrow eyebrow-gold">Core Values</div>
            {values.map((v, i) => (
              <div key={i} className="valueRow">
                <div className="valueNum">{i + 1}</div>
                <div>
                  <div className="valueTitle">{v.title}</div>
                  <div className="valueDesc">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section sectionLight">
        <div className="container">
          <div className="sectionHeading">
            <div className="eyebrow eyebrow-gold">The Team</div>
            <h2 className="h2Center">The mind behind the mission</h2>
          </div>

          <div
            className="teamGrid"
            style={
              team.length === 1
                ? { gridTemplateColumns: "1fr", justifyItems: "center" }
                : undefined
            }
          >
            {team.map((m, i) => (
              <div key={i} className="teamCard">
                <div
                  className="teamAvatar"
                  style={{ background: i % 2 === 0 ? "#EDE9E0" : "#D4DDD6" }}
                >
                  {m.initials}
                </div>
                <div className="teamName">{m.name}</div>
                <div className="teamRole">{m.role}</div>
                <div className="teamBio">{m.bio}</div>
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

        /* Hero */
        .hero {
          padding: 7rem 2.5rem 5rem;
          background: linear-gradient(160deg, #f4f3f0, #ede9e0);
        }
        .heroTitle {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(40px, 8vw, 88px);
          font-weight: 300;
          color: #1a2420;
          max-width: 700px;
          line-height: 1.08;
          margin-bottom: 32px;
        }
        .heroEm {
          color: #5a7a5c;
          font-style: italic;
        }
        .heroText {
          font-size: 16px;
          color: #5a7a5c;
          max-width: 580px;
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
        .sectionAlt {
          background: #f4f3f0;
        }
        .sectionHeading {
          text-align: center;
          margin-bottom: 5rem;
        }
        .h2 {
          font-family: "Cormorant Garamond", serif;
          font-size: 42px;
          font-weight: 300;
          color: #1a2420;
          margin-bottom: 28px;
          line-height: 1.2;
        }
        .h2Center {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(30px, 5vw, 52px);
          font-weight: 300;
          color: #1a2420;
        }
        .bodyText {
          font-size: 15px;
          color: #5a7a5c;
          line-height: 1.9;
          margin-bottom: 20px;
          font-weight: 300;
        }
        .bodyTextLast {
          margin-bottom: 0;
        }

        /* Story grid */
        .storyGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: start;
        }

        /* Values */
        .valueRow {
          display: flex;
          gap: 20px;
          margin-bottom: 28px;
          padding: 20px 0;
          border-bottom: 1px solid #ede9e0;
        }
        .valueNum {
          width: 40px;
          height: 40px;
          min-width: 40px;
          background: #ede9e0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Cormorant Garamond", serif;
          font-size: 18px;
          color: #5a7a5c;
        }
        .valueTitle {
          font-family: "Cormorant Garamond", serif;
          font-size: 20px;
          color: #1a2420;
          margin-bottom: 6px;
        }
        .valueDesc {
          font-size: 14px;
          color: #8a9e8c;
          line-height: 1.7;
          font-weight: 300;
        }

        /* Timeline */
        .timelineWrap {
          position: relative;
        }
        .timelineLine {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 1px;
          background: #d4ddd6;
          transform: translateX(-50%);
        }
        .timelineRow {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
          align-items: center;
        }
        .timelineSide {
          padding: 0;
        }
        .timelineRight {
          text-align: right;
          padding: 0 3rem 0 0;
        }
        .timelineLeft {
          padding: 0 0 0 3rem;
        }
        .timelineYear {
          font-family: "Cormorant Garamond", serif;
          font-size: 48px;
          color: #d4ddd6;
          font-weight: 300;
        }
        .timelineEvent {
          font-family: "Cormorant Garamond", serif;
          font-size: 22px;
          color: #1a2420;
          margin-bottom: 8px;
        }
        .timelineDesc {
          font-size: 14px;
          color: #8a9e8c;
          line-height: 1.7;
          font-weight: 300;
        }
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        .dotGreen {
          background: #5a7a5c;
          margin-left: -6px;
        }
        .dotGold {
          background: #c4a45a;
        }
        .dotRightAlign {
          margin-left: auto;
          margin-right: -6px;
        }
        .timelineDotOnly {
          display: block;
        }

        /* Team */
        .teamGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }
        .teamCard {
          text-align: center;
        }
        .teamAvatar {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Cormorant Garamond", serif;
          font-size: 28px;
          color: #5a7a5c;
        }
        .teamName {
          font-family: "Cormorant Garamond", serif;
          font-size: 20px;
          color: #1a2420;
          margin-bottom: 4px;
        }
        .teamRole {
          font-size: 11px;
          color: #c4a45a;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .teamBio {
          font-size: 13px;
          color: #8a9e8c;
          line-height: 1.7;
          font-weight: 300;
        }

        /* ===== Tablet ===== */
        @media (max-width: 900px) {
          .hero {
            padding: 5rem 1.75rem 3.5rem;
          }
          .section {
            padding: 4.5rem 1.75rem;
          }
          .storyGrid {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }
          .teamGrid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2.5rem 1.5rem;
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
            margin-bottom: 3rem;
          }
          .heroTitle {
            margin-bottom: 24px;
          }
          .heroText {
            font-size: 15px;
            max-width: 100%;
          }
          .h2 {
            font-size: 32px;
            margin-bottom: 22px;
          }

          /* Core values: switch from 2-col layout to single stacked column,
             tighten spacing and icon size for small screens */
          .storyGrid {
            gap: 3rem;
          }
          .valueRow {
            gap: 14px;
            margin-bottom: 20px;
            padding: 16px 0;
          }
          .valueNum {
            width: 34px;
            height: 34px;
            min-width: 34px;
            font-size: 15px;
          }
          .valueTitle {
            font-size: 18px;
          }
          .valueDesc {
            font-size: 13px;
          }

          /* Timeline collapses to a single left-aligned column; the dot for
             every entry (even or odd) sits on the vertical line on the left */
          .timelineLine {
            left: 6px;
          }
          .timelineRow {
            position: relative;
            grid-template-columns: 1fr;
            gap: 0;
            margin-bottom: 2.25rem;
          }
          .timelineRight,
          .timelineLeft {
            text-align: left;
            padding: 0 0 0 2rem;
          }
          .timelineDotOnly {
            display: block;
            order: -1;
          }
          .dot {
            position: absolute;
            top: 6px;
            left: 0;
            margin: 0 !important;
          }
          .timelineYear {
            font-size: 34px;
          }
          .timelineEvent {
            font-size: 19px;
          }

          /* Team grid: single column on small phones */
          .teamGrid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .teamAvatar {
            width: 84px;
            height: 84px;
            font-size: 24px;
          }
        }

        @media (max-width: 380px) {
          .heroTitle {
            font-size: clamp(34px, 10vw, 44px);
          }
        }
      `}</style>
    </div>
  );
}
