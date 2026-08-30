"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Audiowide } from "next/font/google";

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-audiowide",
});

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/intellectual-property", label: "Intellectual Property" },
  { href: "/consultancy", label: "Consultancy" },
  { href: "/products", label: "Products" },
  { href: "/our-work", label: "What We Do" },
  { href: "/invest", label: "Collaborate With THAPAK" },
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

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor:
          scrolled || menuOpen ? "rgba(250,250,248,0.96)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
        borderBottom:
          scrolled || menuOpen
            ? "1px solid rgba(212,221,214,0.5)"
            : "1px solid transparent",
        transition: "all 0.4s ease",
        padding: "0 1.5rem", // slightly reduced padding on mobile
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
          position: "relative",
          zIndex: 20,
        }}
      >
        {/* Logo */}
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <div className="flex items-center gap-2">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                style={{
                  transformOrigin: "16px 16px",
                  animation: "spinBlade 8s linear infinite",
                }}
              >
                <path d="M16 16L16 4C21 5 23 9 20 13L16 16Z" fill="#5A7A5C" />
                <path
                  d="M16 16L28 16C27 21 23 23 19 20L16 16Z"
                  fill="#5A7A5C"
                />
                <path d="M16 16L16 28C11 27 9 23 12 19L16 16Z" fill="#5A7A5C" />
                <path d="M16 16L4 16C5 11 9 9 13 12L16 16Z" fill="#5A7A5C" />
              </g>
              <circle cx="16" cy="16" r="3" fill="#1A2420" />
            </svg>

            <div>
              <div
                className={audiowide.className}
                style={{
                  fontSize: 17,
                  fontWeight: 600,
                  color: "#1A2420",
                  letterSpacing: "0.04em",
                  lineHeight: 1.1,
                }}
              >
                THAPAK
                <span style={{ fontSize: "0.5em", verticalAlign: "super" }}>
                  ®
                </span>
              </div>
              <div
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: 9,
                  fontWeight: 300,
                  color: "#8A9E8C",
                  letterSpacing: "0.18em",
                  // textTransform: "uppercase",
                  lineHeight: 1,
                }}
              >
                Research & TestLab Pvt. Ltd.
              </div>
            </div>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
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

        {/* Mobile menu button - larger touch target + forced pointer-events */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          className="md:hidden"
          style={{
            display: "hidden",
            alignItems: "center",
            justifyContent: "center",
            width: 48, // larger than before
            height: 48,
            border: "none",
            background: "transparent",
            padding: 0,
            cursor: "pointer",
            pointerEvents: "auto",
            zIndex: 30,
            position: "relative",
          }}
        >
          {menuOpen ? (
            <X size={26} color="#1A2420" strokeWidth={1.5} />
          ) : (
            <Menu size={26} color="#1A2420" strokeWidth={1.5} />
          )}
        </button>
      </nav>

      {/* Backdrop (closes menu when tapped) */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.25)",
            zIndex: 10,
          }}
        />
      )}

      {/* Mobile menu panel */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "#FAFAF8",
            borderTop: "1px solid #D4DDD6",
            boxShadow: "0 10px 30px rgba(26, 36, 32, 0.08)",
            zIndex: 20,
            padding: "1rem 1.5rem 1.5rem",
          }}
          className="md:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "14px 0",
                borderBottom: "1px solid #EDE9E0",
                fontFamily: "DM Sans, sans-serif",
                fontSize: 16,
                fontWeight: pathname === link.href ? 400 : 300,
                color: pathname === link.href ? "#5A7A5C" : "#2C3E35",
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes spinBlade {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .hover-underline {
          position: relative;
        }
        .hover-underline::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 100%;
          height: 1px;
          background: #5a7a5c;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease;
        }
        .hover-underline:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }
      `}</style>
    </header>
  );
}
