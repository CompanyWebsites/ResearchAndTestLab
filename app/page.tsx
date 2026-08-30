"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ background: "#FAFAF8" }}>
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "8rem 2.5rem 4rem",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(160deg, #FAFAF8 0%, #F4F3F0 60%, #EDE9E0 100%)",
        }}
      >
        {/* Background decorative circles */}
        <div
          className="hero-decoration"
          style={{
            position: "absolute",
            right: "-10%",
            top: "10%",
            width: 600,
            height: 600,
            borderRadius: "50%",
            border: "1px solid rgba(138,158,140,0.15)",
            pointerEvents: "none",
          }}
        />
        <div
          className="hero-decoration"
          style={{
            position: "absolute",
            right: "-5%",
            top: "15%",
            width: 450,
            height: 450,
            borderRadius: "50%",
            border: "1px solid rgba(138,158,140,0.1)",
            pointerEvents: "none",
          }}
        />
        {/* Animated Turbine SVG */}
        <div
          className="float-anim hero-decoration"
          style={{
            position: "absolute",
            right: "8%",
            top: "50%",
            transform: "translateY(-50%)",
            opacity: 0.12,
          }}
        >
          <svg width="380" height="380" viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="6" fill="#5A7A5C" />
            <g className="turbine-blade">
              <ellipse cx="100" cy="55" rx="9" ry="44" fill="#5A7A5C" />
              <ellipse
                cx="100"
                cy="55"
                rx="9"
                ry="44"
                fill="#5A7A5C"
                transform="rotate(120 100 100)"
              />
              <ellipse
                cx="100"
                cy="55"
                rx="9"
                ry="44"
                fill="#5A7A5C"
                transform="rotate(240 100 100)"
              />
            </g>
            <circle
              cx="100"
              cy="100"
              r="95"
              stroke="#5A7A5C"
              strokeWidth="0.5"
            />
            <circle
              cx="100"
              cy="100"
              r="75"
              stroke="#5A7A5C"
              strokeWidth="0.3"
              strokeDasharray="4 6"
            />
          </svg>
        </div>

        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            width: "100%",
            position: "relative",
            zIndex: 2,
          }}
        >
          <h1
            className="animate-fade-up opacity-0 animate-delay-1"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(52px, 8vw, 112px)",
              fontWeight: 300,
              color: "#1A2420",
              lineHeight: 1.05,
              maxWidth: 700,
              marginBottom: 32,
            }}
          >
            Wind that
            <br />
            <em style={{ color: "#5A7A5C", fontStyle: "italic" }}>cleans</em>
            <br />
            the air.
          </h1>

          <p
            className="animate-fade-up opacity-0 animate-delay-2"
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: 16,
              fontWeight: 300,
              color: "#5A7A5C",
              maxWidth: 480,
              lineHeight: 1.8,
              marginBottom: 48,
            }}
          >
            Thapak Research & Test Lab engineers next-generation clean
            technologies that solve real-world environmental challenges from air
            to energy. Innovation, reimagined.
          </p>

          <div
            className="animate-fade-up opacity-0 animate-delay-3"
            style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
          >
            <Link
              href="/products"
              style={{
                display: "inline-block",
                background: "#1A2420",
                color: "#FAFAF8",
                padding: "14px 36px",
                fontFamily: "DM Sans, sans-serif",
                fontSize: 13,
                letterSpacing: "0.08em",
                textDecoration: "none",
                textTransform: "uppercase",
                fontWeight: 400,
                transition: "background 0.3s, transform 0.3s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#5A7A5C";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "#1A2420";
              }}
            >
              Explore Products
            </Link>
            <Link
              href="/our-work"
              style={{
                display: "inline-block",
                border: "1px solid #2C3E35",
                color: "#2C3E35",
                padding: "14px 36px",
                fontFamily: "DM Sans, sans-serif",
                fontSize: 13,
                letterSpacing: "0.08em",
                textDecoration: "none",
                textTransform: "uppercase",
                fontWeight: 300,
                transition: "all 0.3s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#2C3E35";
                e.currentTarget.style.color = "#FAFAF8";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#2C3E35";
              }}
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: "#1A2420", padding: "3rem 2.5rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{ color: "white", textAlign: "center" }}
            className="font-bold text-lg"
          >
            {" "}
            Sustainable innovation, engineered to make a real difference
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section style={{ padding: "8rem 2.5rem", background: "#F4F3F0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ maxWidth: 700 }}>
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.2em",
                color: "#C4A45A",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Our Mission
            </div>
            <h2
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(36px, 4vw, 56px)",
                fontWeight: 300,
                color: "#1A2420",
                marginBottom: 24,
                lineHeight: 1.2,
              }}
            >
              Technology that breathes
              <br />
              <em style={{ fontStyle: "italic", color: "#5A7A5C" }}>
                life back into air
              </em>
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "#5A7A5C",
                lineHeight: 1.9,
                marginBottom: 16,
                fontWeight: 300,
              }}
            >
              At Thapak Research & TestLab, we believe clean air is a right —
              not a luxury. Our patented wind turbine design harnesses natural
              wind movement to actively filter and circulate air without drawing
              a single watt from the grid.
            </p>
            <p
              style={{
                fontSize: 15,
                color: "#5A7A5C",
                lineHeight: 1.9,
                marginBottom: 32,
                fontWeight: 300,
              }}
            >
              Founded by engineers and environmentalists, we operate at the
              intersection of aerodynamics, materials science, and sustainable
              design — creating solutions that work in hospitals, factories, and
              homes alike.
            </p>
            <Link
              href="/about"
              style={{
                fontSize: 13,
                color: "#1A2420",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderBottom: "1px solid #1A2420",
                paddingBottom: 2,
              }}
            >
              Learn About Us →
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section style={{ padding: "8rem 2.5rem", background: "#FAFAF8" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <div
              style={{
                fontSize: 20,
                letterSpacing: "0.2em",
                color: "#C4A45A",
                textTransform: "uppercase",
                marginBottom: 16,
                fontStyle: "italic",
              }}
            >
              From factories to homes
            </div>
            <h2
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(36px, 4vw, 56px)",
                fontWeight: 300,
                color: "#1A2420",
              }}
            >
              We build for every environment.
            </h2>
          </div>

          <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
            <Link
              href="/products"
              style={{
                display: "inline-block",
                border: "1px solid #2C3E35",
                color: "#2C3E35",
                padding: "14px 48px",
                fontFamily: "DM Sans, sans-serif",
                fontSize: 13,
                letterSpacing: "0.08em",
                textDecoration: "none",
                textTransform: "uppercase",
                fontWeight: 300,
              }}
            >
              Explore our full product range
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section
        style={{
          background: "#5A7A5C",
          padding: "6rem 2.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 300,
              color: "#FAFAF8",
              marginBottom: 20,
              lineHeight: 1.2,
            }}
          >
            Partner with us to build a<br />
            <em style={{ fontStyle: "italic" }}>cleaner tomorrow</em>
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "#EDE9E0",
              marginBottom: 40,
              fontWeight: 300,
              lineHeight: 1.8,
            }}
          >
            Whether you are an investor, institution, or collaborator — there is
            a role for you in our journey toward zero-pollution air.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/invest"
              style={{
                background: "#FAFAF8",
                color: "#1A2420",
                padding: "14px 36px",
                fontSize: 13,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontWeight: 400,
              }}
            >
              Collaborate With THAPAK
            </Link>
            <Link
              href="/query"
              style={{
                border: "1px solid #EDE9E0",
                color: "#EDE9E0",
                padding: "14px 36px",
                fontSize: 13,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontWeight: 300,
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
