"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#1A2420",
        color: "#D4DDD6",
        padding: "4rem 2.5rem 2rem",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: 26,
                fontWeight: 300,
                color: "#FAFAF8",
                marginBottom: 4,
              }}
            >
              THAPAK
            </div>
            <div
              style={{
                fontSize: 10,
                letterSpacing: "0.22em",
                color: "#8A9E8C",
                marginBottom: 20,
                textTransform: "uppercase",
              }}
            >
              Research & TestLab
            </div>
            <p
              style={{
                fontSize: 13,
                fontWeight: 300,
                color: "#8A9E8C",
                lineHeight: 1.8,
                maxWidth: 280,
              }}
            >
              Pioneering sustainable energy solutions through innovative wind
              turbine design — clean air, zero electricity consumed.
            </p>
            <div style={{ marginTop: 24, display: "flex", gap: 12 }}>
              {["Li", "Tw", "Yt"].map((s) => (
                <div
                  key={s}
                  style={{
                    width: 36,
                    height: 36,
                    border: "1px solid #2C3E35",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    color: "#8A9E8C",
                    cursor: "pointer",
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.16em",
                color: "#C4A45A",
                textTransform: "uppercase",
                marginBottom: 20,
                fontWeight: 400,
              }}
            >
              Navigation
            </div>
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Products", "/products"],
              ["Our Work", "/our-work"],
              ["Invest", "/invest"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: "block",
                  fontSize: 13,
                  color: "#8A9E8C",
                  textDecoration: "none",
                  marginBottom: 10,
                  transition: "color 0.25s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#D4DDD6")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#8A9E8C")}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.16em",
                color: "#C4A45A",
                textTransform: "uppercase",
                marginBottom: 20,
                fontWeight: 400,
              }}
            >
              Contact
            </div>
            <div style={{ fontSize: 13, color: "#8A9E8C", marginBottom: 6 }}>
              support@research.thapak.co.in
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid #2C3E35",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div style={{ fontSize: 12, color: "#5A7A5C" }}>
            © 2025 Thapak Research & TestLab. All rights reserved.
          </div>
          <div
            style={{ fontSize: 12, color: "#5A7A5C", display: "flex", gap: 24 }}
          >
            <Link
              href="/query"
              style={{ color: "#5A7A5C", textDecoration: "none" }}
            >
              Submit Query
            </Link>
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
