"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/our-work", label: "Our Work" },
  { href: "/invest", label: "Invest & Collaborate" },
  { href: "/query", label: "Query" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? "rgba(250,250,248,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(212,221,214,0.5)"
          : "1px solid transparent",
        transition: "all 0.4s ease",
        padding: "0 2.5rem",
      }}
    >
      <nav
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {/* Turbine Icon */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="3" fill="#5A7A5C" />
              <g
                style={{
                  transformOrigin: "16px 16px",
                  animation: "spinBlade 8s linear infinite",
                }}
              >
                <ellipse
                  cx="16"
                  cy="8"
                  rx="2.5"
                  ry="7"
                  fill="#5A7A5C"
                  opacity="0.85"
                  transform="rotate(0 16 16)"
                />
                <ellipse
                  cx="16"
                  cy="8"
                  rx="2.5"
                  ry="7"
                  fill="#5A7A5C"
                  opacity="0.65"
                  transform="rotate(120 16 16)"
                />
                <ellipse
                  cx="16"
                  cy="8"
                  rx="2.5"
                  ry="7"
                  fill="#5A7A5C"
                  opacity="0.45"
                  transform="rotate(240 16 16)"
                />
              </g>
            </svg>
            <div>
              <div
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: 17,
                  fontWeight: 600,
                  color: "#1A2420",
                  letterSpacing: "0.04em",
                  lineHeight: 1.1,
                }}
              >
                THAPAK
              </div>
              <div
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: 9,
                  fontWeight: 300,
                  color: "#8A9E8C",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  lineHeight: 1,
                }}
              >
                Research & TestLab
              </div>
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <div
          style={{ display: "flex", alignItems: "center", gap: 32 }}
          className="hidden-mobile"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover-underline"
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: 13,
                fontWeight: pathname === link.href ? 400 : 300,
                color: pathname === link.href ? "#5A7A5C" : "#2C3E35",
                textDecoration: "none",
                letterSpacing: "0.04em",
                transition: "color 0.25s",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            display: "none",
          }}
          className="show-mobile"
        >
          <div
            style={{
              width: 24,
              height: 2,
              background: "#1A2420",
              marginBottom: 5,
              transition: "all 0.3s",
            }}
          />
          <div
            style={{
              width: 16,
              height: 2,
              background: "#1A2420",
              marginBottom: 5,
            }}
          />
          <div style={{ width: 24, height: 2, background: "#1A2420" }} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "#FAFAF8",
            borderTop: "1px solid #D4DDD6",
            padding: "1.5rem 2.5rem",
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "0.75rem 0",
                fontFamily: "DM Sans, sans-serif",
                fontSize: 15,
                color: pathname === link.href ? "#5A7A5C" : "#2C3E35",
                textDecoration: "none",
                borderBottom: "1px solid #EDE9E0",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 901px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
