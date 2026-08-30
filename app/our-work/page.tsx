"use client";
import Link from "next/link";

const researchAreas = [
  "Environmental engineering",
  "Air purification and ventilation",
  "Carbon management",
  "Energy technologies",
  "Solar thermal energy storage",
  "Mining ventilation and air-quality technologies",
  "Automation and specialized engineering systems",
  "Other emerging technology areas",
];

const testingServices = [
  {
    title: "Paper & Pulp Testing",
    desc: "Specialized testing and evaluation of paper and pulp materials and products.",
    highlight: true,
  },
  {
    title: "Material & Product Testing",
    desc: "Technical evaluation according to defined requirements and applicable standards.",
    highlight: false,
  },
  {
    title: "Performance Testing",
    desc: "Assessment of equipment, systems and technologies against specified technical parameters.",
    highlight: false,
  },
  {
    title: "Research Testing",
    desc: "Customized testing programs designed around specific R&D requirements.",
    highlight: false,
  },
  {
    title: "Environmental Testing",
    desc: "Measurement and evaluation of relevant environmental parameters, where applicable.",
    highlight: false,
  },
];

const envChain = ["SURVEY", "MEASURE", "MAP", "ANALYSE", "INTERVENE", "MONITOR", "ASSESS IMPACT"];

const envCards = [
  { t: "Pollution Surveys", d: "Assessment of pollution levels across defined areas." },
  { t: "Pollution Mapping", d: "Spatial representation and analysis of pollution conditions." },
  { t: "AQI Assessment", d: "Assessment and interpretation of air-quality conditions." },
  { t: "Pollution Reduction Consultancy", d: "Technical recommendations aimed at reducing pollution and improving air quality." },
  { t: "Post-Implementation Monitoring", d: "Monitoring to determine whether interventions are producing measurable improvements." },
];

const consultancy = [
  { title: "Environmental Consultancy", desc: "Pollution reduction and environmental performance", icon: "◈" },
  { title: "Technology Consultancy", desc: "Technology assessment and development", icon: "⬢" },
  { title: "Industrial Process Consultancy", desc: "Process improvement and optimization", icon: "⬣" },
  { title: "Automation Consultancy", desc: "Automation and control solutions", icon: "⬡" },
  { title: "R&D Consultancy", desc: "Research, feasibility and prototype development", icon: "⬔" },
  { title: "Technology Commercialization", desc: "Moving technology toward industrial application", icon: "⬥" },
];

const devChain = ["PROBLEM", "RESEARCH", "TECHNOLOGY DEVELOPMENT", "PROTOTYPE", "TESTING & VALIDATION", "INTELLECTUAL PROPERTY", "TECHNOLOGY TRANSFER", "INDUSTRIAL APPLICATION"];

const technologies = [
  { title: "Ambient Air Purification Without Electricity", status: "Patented Technology", area: "Environmental / Air Quality" },
  { title: "Closed-Premises Air Purification", status: "Patented Technology", area: "Environmental / Indoor Air" },
  { title: "Artificial Ventilation", status: "Patented Technology", area: "Ventilation Systems" },
  { title: "Carbon Absorption", status: "Patented Technology", area: "Carbon Management" },
  { title: "Oxygen Control", status: "Patented Technology", area: "Controlled Environments" },
  { title: "Mine Air Purification & Ventilation", status: "Patented Technology", area: "Mining / Industrial" },
  { title: "Solar Thermal Energy Storage", status: "Patented Technology", area: "Energy / Solar Thermal" },
  { title: "Other Proprietary Technologies", status: "Under Development", area: "Multiple Domains" },
];

export default function WhatWeDo() {
  return (
    <div className="page">
      <section className="hero">
        <div className="container">
          <div className="eyebrow eyebrow-gold">What We Do</div>
          <h1 className="heroTitle">
            Research. Test.
            <br />
            <em className="heroEm">Develop. Validate. Apply.</em>
          </h1>
          <p className="heroText">
            THAPAK Research &amp; Test Lab undertakes specialized research,
            technical testing, environmental assessment and engineering
            consultancy, with a strong focus on developing proprietary
            technologies and intellectual property.
          </p>

          <div className="chain">
            {["RESEARCH", "DEVELOPMENT", "TESTING", "IP", "CONSULTANCY", "APPLICATION"].map((c, i) => (
              <div key={c} className="chainItemWrap">
                <span className="chainItem">{c}</span>
                {i < 5 && <span className="chainArrow">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionLight">
        <div className="container grid2">
          <div>
            <div className="eyebrow eyebrow-gold">01 — Research & Technology Development</div>
            <h2 className="h2">Research &amp;<br /><em className="h2Em">Technology Development</em></h2>
            <p className="bodyText">
              We undertake specialized research and engineering development to
              address complex environmental, industrial, energy and technological
              challenges. Our research is directed toward creating practical
              technologies, measurable technical outcomes and protectable
              intellectual property.
            </p>
            <Link href="/intellectual-property" className="btnDark">Explore Our Research & IP →</Link>
          </div>
          <div>
            <div className="areasLabel">Areas include</div>
            <div className="areasGrid">
              {researchAreas.map((a) => (
                <div key={a} className="areaChip">{a}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <div className="sectionHeading">
            <div className="eyebrow eyebrow-gold">02 — Specialized Testing</div>
            <h2 className="h2Center">Specialized Testing &amp;<br /><em className="h2Em">Technical Evaluation</em></h2>
            <p className="sectionSub">
              We provide specialized testing and technical evaluation services
              supporting research, product development, material assessment and
              industrial requirements.
            </p>
          </div>

          <div className="testGrid">
            {testingServices.map((s) => (
              <div key={s.title} className={`testCard ${s.highlight ? "testHighlight" : ""}`}>
                {s.highlight && <div className="testBadge">Core Specialization</div>}
                <h3 className="testTitle">{s.title}</h3>
                <p className="testDesc">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="ctaStrip">
            <div>
              <div className="ctaStripTitle">Have a testing requirement?</div>
              <div className="ctaStripText">Share your material, product, or research need — we&apos;ll design the right test program.</div>
            </div>
            <Link href="/query" className="btnDark">Discuss Your Requirement →</Link>
          </div>
        </div>
      </section>

      <section className="section sectionDark">
        <div className="container">
          <div className="eyebrow eyebrow-gold" style={{ textAlign: "center", marginBottom: "1rem" }}>03 — Environmental Research</div>
          <h2 className="h2CenterLight">Environmental Assessment &amp;<br /><em className="h2EmLight">Pollution Mapping</em></h2>
          <p className="sectionSubLight">
            We conduct scientific surveys and assessments to understand pollution
            conditions across cities, industrial areas and specific geographical
            locations.
          </p>

          <div className="vChain">
            {envChain.map((step, i) => (
              <div key={step} className="vChainItem">
                <div className="vChainDotWrap">
                  <div className="vChainDot" />
                  {i < envChain.length - 1 && <div className="vChainLine" />}
                </div>
                <div className="vChainText">{step}</div>
              </div>
            ))}
          </div>

          <div className="envCardsHeading">Our environmental work includes</div>
          <div className="envGrid">
            {envCards.map((c) => (
              <div key={c.t} className="envCard">
                <div className="envCardTitle">{c.t}</div>
                <div className="envCardDesc">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionLight">
        <div className="container">
          <div className="sectionHeading">
            <div className="eyebrow eyebrow-gold">04 — Industrial Consultancy</div>
            <h2 className="h2Center">Industrial &amp;<br /><em className="h2Em">Engineering Consultancy</em></h2>
            <p className="sectionSub">
              We work with industries to identify technical problems, evaluate
              possible solutions and develop practical engineering and technology
              strategies.
            </p>
          </div>

          <div className="consultGrid">
            {consultancy.map((c) => (
              <div key={c.title} className="consultCard">
                <div className="consultIcon">{c.icon}</div>
                <div className="consultTitle">{c.title}</div>
                <div className="consultDesc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt devSection">
        <div className="container">
          <div className="sectionHeading">
            <div className="eyebrow eyebrow-gold">05 — From Lab to Industry</div>
            <h2 className="h2Center">From Research to<br /><em className="h2Em">Real-World Application</em></h2>
          </div>

          <div className="hChain">
            {devChain.map((step, i) => (
              <div key={step} className="hChainItemWrap">
                <div className="hChainItem">{step}</div>
                {i < devChain.length - 1 && <span className="hArrow">→</span>}
              </div>
            ))}
          </div>
          <div className="hChainMobile">
            {devChain.map((step, i) => (
              <div key={step} className="vChainItem">
                <div className="vChainDotWrap">
                  <div className="vChainDot light" />
                  {i < devChain.length - 1 && <div className="vChainLine light" />}
                </div>
                <div className="vChainText dark">{step}</div>
              </div>
            ))}
          </div>

          <div className="devStatement">
            <p className="devText">
              Our work is not limited to research reports. We aim to develop
              technologies that can be protected as intellectual property,
              technically validated and ultimately transferred into real-world
              applications.
            </p>
          </div>
        </div>
      </section>

      <section className="section sectionLight">
        <div className="container">
          <div className="sectionHeading">
            <div className="eyebrow eyebrow-gold">06 — IP Arising From Our Research</div>
            <h2 className="h2Center">Selected Technologies<br /><em className="h2Em">Arising From Our Research</em></h2>
            <p className="sectionSub">Each technology below links to its patent status and deployment area — explore the full register on our Intellectual Property page.</p>
          </div>

          <div className="techGrid">
            {technologies.map((t) => (
              <div key={t.title} className="techCard">
                <div className="techHead">
                  <span className="techStatus">{t.status}</span>
                  <span className="techArea">{t.area}</span>
                </div>
                <div className="techTitle">{t.title}</div>
                <div className="techRow">
                  <span className="techLabel">Technology</span>
                  <span className="techArrow">→</span>
                  <span className="techLabel">Patent Status</span>
                  <span className="techArrow">→</span>
                  <span className="techLabel">Application</span>
                </div>
                <Link href="/intellectual-property" className="techLink">View Technology →</Link>
              </div>
            ))}
          </div>

          <div className="techFooter">
            <span>Our Work → Research → IP → Technology</span>
            <Link href="/intellectual-property" className="btnDark">Explore All Intellectual Property →</Link>
          </div>
        </div>
      </section>

      <section className="ctaSection">
        <div className="ctaContainer">
          <h2 className="ctaTitle">Start where you are</h2>
          <p className="ctaText">Whether you need research, testing, environmental assessment, or consultancy — we&apos;ll map the right pathway and the right IP, together.</p>
          <div className="ctaButtons">
            <Link href="/query" className="ctaBtnPrimary">Discuss Your Requirement</Link>
            <Link href="/invest" className="ctaBtnSecondary">Collaborate With THAPAK</Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page { background: #fafaf8; padding-top: 72px; }
        .container { max-width: 1280px; margin: 0 auto; }
        .eyebrow { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; }
        .eyebrow-gold { color: #c4a45a; margin-bottom: 16px; }
        .hero {
          padding: 7rem 2.5rem 3.5rem;
          background: linear-gradient(160deg, #f4f3f0, #ede9e0);
        }
        .heroTitle {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(42px, 7vw, 80px);
          font-weight: 300; color: #1a2420; line-height: 1.08; margin-bottom: 20px;
        }
        .heroEm { color: #5a7a5c; font-style: italic; }
        .heroText {
          font-size: 15px; color: #5a7a5c; max-width: 640px; line-height: 1.9; font-weight: 300;
        }
        .chain {
          display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
          margin-top: 40px; padding: 16px 20px; background: #fff; border: 1px solid #ede9e0; max-width: fit-content;
        }
        .chainItem { font-size: 11px; letter-spacing: 0.12em; color: #1a2420; font-weight: 400; }
        .chainArrow { color: #c4a45a; margin: 0 2px; }
        .chainItemWrap { display: flex; align-items: center; gap: 10px; }

        .section { padding: 6rem 2.5rem; }
        .sectionLight { background: #fafaf8; }
        .sectionAlt { background: #f4f3f0; }
        .sectionDark { background: #1a2420; }
        .sectionHeading { text-align: center; margin-bottom: 3rem; }
        .h2 { font-family: "Cormorant Garamond", serif; font-size: 42px; font-weight: 300; color: #1a2420; line-height: 1.2; margin-bottom: 16px; }
        .h2Em { color: #5a7a5c; font-style: italic; }
        .h2Center { font-family: "Cormorant Garamond", serif; font-size: clamp(28px, 4.5vw, 46px); font-weight: 300; color: #1a2420; line-height: 1.15; }
        .h2CenterLight { font-family: "Cormorant Garamond", serif; font-size: clamp(28px, 4.5vw, 46px); font-weight: 300; color: #fafaf8; line-height: 1.15; text-align: center; }
        .h2EmLight { color: #8a9e8c; font-style: italic; }
        .bodyText { font-size: 15px; color: #5a7a5c; line-height: 1.9; font-weight: 300; margin-bottom: 24px; }
        .sectionSub { max-width: 640px; margin: 12px auto 0; font-size: 14px; color: #8a9e8c; line-height: 1.8; font-weight: 300; }
        .sectionSubLight { max-width: 640px; margin: 16px auto 0; font-size: 14px; color: #8a9e8c; line-height: 1.8; font-weight: 300; text-align: center; }
        .btnDark { display: inline-block; background: #1a2420; color: #fafaf8; padding: 13px 24px; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none; }

        .grid2 { display: grid; grid-template-columns: 520px 1fr; gap: 4rem; align-items: start; }
        .areasLabel { font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: #8a9e8c; margin-bottom: 16px; }
        .areasGrid { display: flex; flex-wrap: wrap; gap: 10px; }
        .areaChip { background: #fff; border: 1px solid #ede9e0; padding: 8px 14px; font-size: 12.5px; color: #5a7a5c; }

        .testGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .testCard { background: #fff; border: 1px solid #ede9e0; padding: 2rem; position: relative; }
        .testHighlight { border-color: #c4a45a; box-shadow: 0 8px 32px rgba(196,164,90,0.12); }
        .testBadge { position: absolute; top: -10px; left: 20px; background: #c4a45a; color: #fff; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; padding: 3px 10px; }
        .testTitle { font-family: "Cormorant Garamond", serif; font-size: 19px; color: #1a2420; font-weight: 400; margin-bottom: 8px; }
        .testDesc { font-size: 13px; color: #8a9e8c; line-height: 1.7; font-weight: 300; }
        .ctaStrip { margin-top: 2rem; background: #fff; border: 1px solid #ede9e0; border-left: 3px solid #c4a45a; padding: 1.5rem 2rem; display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap; }
        .ctaStripTitle { font-family: "Cormorant Garamond", serif; font-size: 20px; color: #1a2420; }
        .ctaStripText { font-size: 12.5px; color: #8a9e8c; margin-top: 4px; }

        .vChain { display: flex; justify-content: center; gap: 0; margin: 3rem auto 2rem; max-width: 900px; }
        .vChainItem { display: flex; flex-direction: column; align-items: center; flex: 1; position: relative; }
        .vChainDotWrap { display: flex; flex-direction: column; align-items: center; width: 100%; }
        .vChainDot { width: 12px; height: 12px; border-radius: 50%; background: #c4a45a; border: 2px solid #1a2420; box-shadow: 0 0 0 4px rgba(196,164,90,0.15); }
        .vChainDot.light { background: #c4a45a; border-color: #f4f3f0; }
        .vChainLine { width: 100%; height: 2px; background: #2c3e35; margin-top: -7px; z-index: 0; }
        .vChainLine.light { background: #d4ddd6; }
        .vChainText { font-size: 10px; letter-spacing: 0.1em; color: #ede9e0; margin-top: 12px; text-align: center; font-weight: 400; }
        .vChainText.dark { color: #1a2420; }
        .envCardsHeading { text-align: center; font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: #c4a45a; margin: 2.5rem 0 1.5rem; }
        .envGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
        .envGrid > div:nth-child(4) { grid-column: 1 / 2; }
        .envGrid > div:nth-child(5) { grid-column: 2 / 4; }
        .envCard { background: rgba(255,255,255,0.04); border: 1px solid #2c3e35; padding: 1.5rem; }
        .envCardTitle { font-family: "Cormorant Garamond", serif; font-size: 16px; color: #fafaf8; margin-bottom: 6px; }
        .envCardDesc { font-size: 12.5px; color: #8a9e8c; line-height: 1.6; font-weight: 300; }

        .consultGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .consultCard { background: #fff; border: 1px solid #ede9e0; padding: 2rem; transition: border-color 0.2s; }
        .consultCard:hover { border-color: #d4ddd6; }
        .consultIcon { font-size: 18px; color: #5a7a5c; margin-bottom: 12px; }
        .consultTitle { font-family: "Cormorant Garamond", serif; font-size: 18px; color: #1a2420; margin-bottom: 6px; }
        .consultDesc { font-size: 12.5px; color: #8a9e8c; line-height: 1.6; }

        .hChain { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; justify-content: center; background: #fff; border: 1px solid #ede9e0; padding: 1.25rem 1rem; }
        .hChainItemWrap { display: flex; align-items: center; gap: 8px; }
        .hChainItem { font-size: 11px; letter-spacing: 0.08em; color: #1a2420; font-weight: 400; white-space: nowrap; }
        .hArrow { color: #c4a45a; font-size: 12px; }
        .hChainMobile { display: none; }
        .devStatement { max-width: 760px; margin: 2.5rem auto 0; text-align: center; background: #1a2420; padding: 2rem 2.5rem; border-left: 3px solid #c4a45a; }
        .devText { font-family: "Cormorant Garamond", serif; font-size: 20px; color: #fafaf8; font-style: italic; line-height: 1.6; font-weight: 300; margin: 0; }

        .techGrid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; }
        .techCard { background: #fff; border: 1px solid #ede9e0; padding: 1.5rem; display: flex; flex-direction: column; }
        .techHead { display: flex; justify-content: space-between; gap: 8px; margin-bottom: 12px; }
        .techStatus { font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; background: #1a2420; color: #fafaf8; padding: 3px 8px; white-space: nowrap; }
        .techArea { font-size: 10px; color: #c4a45a; letter-spacing: 0.06em; text-align: right; }
        .techTitle { font-family: "Cormorant Garamond", serif; font-size: 15px; color: #1a2420; line-height: 1.4; margin-bottom: 14px; flex: 1; }
        .techRow { display: flex; align-items: center; gap: 6px; border-top: 1px solid #ede9e0; padding-top: 10px; margin-bottom: 12px; flex-wrap: wrap; }
        .techLabel { font-size: 9px; letter-spacing: 0.07em; text-transform: uppercase; color: #8a9e8c; }
        .techArrow { font-size: 9px; color: #c4a45a; }
        .techLink { font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: #1a2420; text-decoration: none; border-bottom: 1px solid #1a2420; align-self: flex-start; padding-bottom: 2px; }
        .techFooter { margin-top: 2rem; display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap; border-top: 1px solid #ede9e0; padding-top: 1.5rem; }
        .techFooter span { font-size: 11px; letter-spacing: 0.12em; color: #8a9e8c; text-transform: uppercase; }

        .ctaSection { padding: 5rem 2.5rem; background: #1a2420; text-align: center; }
        .ctaContainer { max-width: 640px; margin: 0 auto; }
        .ctaTitle { font-family: "Cormorant Garamond", serif; font-size: 42px; font-weight: 300; color: #fafaf8; margin-bottom: 16px; }
        .ctaText { font-size: 14px; color: #8a9e8c; line-height: 1.8; margin-bottom: 32px; }
        .ctaButtons { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; }
        .ctaBtnPrimary { background: #5a7a5c; color: #fafaf8; padding: 14px 36px; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none; }
        .ctaBtnSecondary { border: 1px solid #2c3e35; color: #8a9e8c; padding: 14px 36px; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none; }

        @media (max-width: 1100px) {
          .grid2 { grid-template-columns: 1fr; gap: 2.5rem; }
          .testGrid { grid-template-columns: repeat(2, 1fr); }
          .consultGrid { grid-template-columns: repeat(2, 1fr); }
          .techGrid { grid-template-columns: repeat(2, 1fr); }
          .envGrid { grid-template-columns: repeat(2, 1fr); }
          .envGrid > div:nth-child(4), .envGrid > div:nth-child(5) { grid-column: auto; }
        }
        @media (max-width: 900px) {
          .hero { padding: 5rem 1.75rem 3rem; }
          .section { padding: 4.5rem 1.75rem; }
          .vChain { overflow-x: auto; justify-content: flex-start; padding-bottom: 8px; }
          .hChain { display: none; }
          .hChainMobile { display: flex; flex-direction: column; gap: 0; background: #fff; border: 1px solid #ede9e0; padding: 1.5rem; }
          .hChainMobile .vChainItem { flex-direction: row; align-items: flex-start; gap: 16px; flex: none; }
          .hChainMobile .vChainDotWrap { width: auto; flex-direction: column; align-items: center; }
          .hChainMobile .vChainLine { width: 2px; height: 24px; margin-top: 4px; margin-left: 0; }
          .hChainMobile .vChainText { margin-top: 0; text-align: left; }
        }
        @media (max-width: 600px) {
          .page { padding-top: 56px; }
          .hero { padding: 3.5rem 1.25rem 2.5rem; }
          .section { padding: 3.5rem 1.25rem; }
          .chain { padding: 12px 14px; gap: 6px; }
          .chainItem { font-size: 10px; }
          .h2 { font-size: 30px; }
          .testGrid { grid-template-columns: 1fr; }
          .consultGrid { grid-template-columns: 1fr; }
          .envGrid { grid-template-columns: 1fr; }
          .techGrid { grid-template-columns: 1fr; }
          .devStatement { padding: 1.5rem 1.25rem; }
          .devText { font-size: 17px; }
          .ctaSection { padding: 3.5rem 1.25rem; }
          .ctaTitle { font-size: 30px; }
          .ctaButtons { flex-direction: column; align-items: stretch; }
          .ctaBtnPrimary, .ctaBtnSecondary { text-align: center; }
          .ctaStrip { flex-direction: column; align-items: flex-start; }
          .vChain { gap: 4px; }
          .vChainText { font-size: 9px; }
        }
      `}</style>
    </div>
  );
}
