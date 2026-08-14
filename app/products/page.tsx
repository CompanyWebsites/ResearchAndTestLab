"use client";
import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";
import { catalogue } from "@/data/products";
// ─── SHARED LAYOUT TOKENS ────────────────────────────────────────────────────
const MAX_W = 1280;
const PX = "clamp(1.25rem, 5vw, 2.5rem)";
const SEC_PY = "clamp(3rem, 7vw, 6rem)";
const SEC_SM = "clamp(2rem, 4vw, 3.5rem)";
// ─────────────────────────────────────────────────────────────────────────────
function ScrollRow({
  children,
  style,
  itemStyle,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  itemStyle?: React.CSSProperties;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  const checkScroll = useCallback(() => {
    const el = rowRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);
  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    const ro = new ResizeObserver(checkScroll);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      ro.disconnect();
    };
  }, [checkScroll]);
  const scroll = (dir: "left" | "right") => {
    const el = rowRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -220 : 220, behavior: "smooth" });
  };
  const arrowBase: React.CSSProperties = {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    cursor: "pointer",
    zIndex: 2,
    background:
      "linear-gradient(to right, rgba(26,36,32,0.85) 60%, transparent)",
    color: "#FAFAF8",
    fontSize: 18,
    transition: "opacity 0.2s",
  };
  return (
    <div style={{ position: "relative", ...style }}>
      {canLeft && (
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          style={{ ...arrowBase, left: 0 }}
        >
          ‹
        </button>
      )}
      <div
        ref={rowRef}
        style={{
          display: "flex",
          overflowX: "auto",
          scrollbarWidth: "none",
          ...itemStyle,
        }}
      >
        {children}
      </div>
      {canRight && (
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          style={{
            ...arrowBase,
            right: 0,
            background:
              "linear-gradient(to left, rgba(26,36,32,0.85) 60%, transparent)",
          }}
        >
          ›
        </button>
      )}
    </div>
  );
}
// ─── Shared sub-components ────────────────────────────────────────────────────
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 11,
        letterSpacing: "0.22em",
        color: "#8A9E8C",
        textTransform: "uppercase",
        marginBottom: 18,
      }}
    >
      {children}
    </div>
  );
}
function GoldLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 11,
        letterSpacing: "0.16em",
        color: "#C4A45A",
        textTransform: "uppercase",
        marginBottom: 14,
      }}
    >
      {children}
    </div>
  );
}
// ─── Page ────────────────────────────────────────────────────────────────────
export default function Products() {
  const [activeProd, setActiveProd] = useState(catalogue[0].id);
  const [activeModels, setActiveModels] = useState<Record<string, string>>(
    Object.fromEntries(catalogue.map((p) => [p.id, p.models[0].id])),
  );
  const product = catalogue.find((p) => p.id === activeProd)!;
  const modelId = activeModels[activeProd];
  const model = product.models.find((m) => m.id === modelId)!;
  const setModel = (mid: string) =>
    setActiveModels((prev) => ({ ...prev, [activeProd]: mid }));
  const container: React.CSSProperties = { maxWidth: MAX_W, margin: "0 auto" };
  return (
    <div style={{ background: "#FAFAF8", paddingTop: 72 }}>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          padding: `7rem ${PX} 4rem`,
          background: "linear-gradient(160deg, #F4F3F0, #EDE9E0)",
        }}
      >
        <div style={container}>
          <Eyebrow>Products</Eyebrow>
          <h1
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(44px, 6vw, 88px)",
              fontWeight: 300,
              color: "#1A2420",
              maxWidth: 600,
              lineHeight: 1.08,
              marginBottom: 24,
            }}
          >
            Multiple products.
            <br />
            <em style={{ color: "#5A7A5C", fontStyle: "italic" }}>
              One mission.
            </em>
          </h1>
          <p
            style={{
              fontSize: 15,
              color: "#8A9E8C",
              maxWidth: 520,
              lineHeight: 1.9,
              fontWeight: 300,
              marginBottom: 36,
            }}
          >
            From passive wind-driven turbines to active HEPA filtration systems
            — our growing product range covers every environment and every
            scale.
          </p>
        </div>
      </section>
      {/* ── PRODUCT LINE TABS (scrollable with arrows when many products) ─── */}
      <section style={{ background: "#1A2420" }}>
        <div style={{ ...container, padding: `0 ${PX}` }}>
          <ScrollRow>
            {catalogue.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveProd(p.id)}
                style={{
                  flex: "0 0 auto",
                  background: activeProd === p.id ? "#FAFAF8" : "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding:
                    "clamp(1rem, 3vw, 1.8rem) clamp(1.25rem, 3vw, 2.5rem)",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  transition: "background 0.3s",
                  minWidth: 160,
                }}
              >
                <span style={{ fontSize: "clamp(18px, 3vw, 24px)" }}>
                  {p.icon}
                </span>
                <div style={{ textAlign: "left" }}>
                  <div
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "clamp(15px, 2vw, 18px)",
                      color: activeProd === p.id ? "#1A2420" : "#FAFAF8",
                      fontWeight: 300,
                      lineHeight: 1.2,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {p.name}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: activeProd === p.id ? p.accent : "#5A7A5C",
                      marginTop: 2,
                    }}
                  >
                    {p.badge}
                  </div>
                </div>
              </button>
            ))}
          </ScrollRow>
        </div>
      </section>
      {/* ── PRODUCT OVERVIEW STRIP ────────────────────────────────────────── */}
      <section style={{ padding: `${SEC_SM} ${PX} 0`, background: "#FAFAF8" }}>
        <div style={container}>
          <div
            style={{
              padding: "clamp(1.5rem, 4vw, 2.5rem)",
              background: "#F4F3F0",
              borderLeft: `4px solid ${product.accent}`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: 1, minWidth: 240 }}>
              <GoldLabel>About this product line</GoldLabel>
              <h2
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "clamp(24px, 3vw, 34px)",
                  color: "#1A2420",
                  fontWeight: 300,
                  marginBottom: 10,
                }}
              >
                {product.name}
              </h2>
              <p
                style={{
                  fontSize: 14,
                  color: "#5A7A5C",
                  lineHeight: 1.85,
                  fontWeight: 300,
                  maxWidth: 560,
                }}
              >
                {product.longDesc}
              </p>
            </div>
            <div
              style={{
                textAlign: "center",
                padding: "1rem 2rem",
                background: "#EDE9E0",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: 36,
                  color: "#1A2420",
                  fontWeight: 300,
                }}
              >
                {product.models.length}
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: "#8A9E8C",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                Models
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── MODEL SELECTOR PILLS (scrollable with arrows when many models) ── */}
      <section style={{ padding: `2rem ${PX} 0`, background: "#FAFAF8" }}>
        <div style={container}>
          <Eyebrow>Select a Model</Eyebrow>
          <ScrollRow
            style={{ background: "#FAFAF8" }}
            itemStyle={{ gap: 10, paddingBottom: 4 }}
          >
            {product.models.map((m) => (
              <button
                key={m.id}
                onClick={() => setModel(m.id)}
                style={{
                  flex: "0 0 auto",
                  padding: "10px clamp(14px, 2vw, 24px)",
                  border: "1px solid",
                  borderColor: modelId === m.id ? m.color : "#EDE9E0",
                  background: modelId === m.id ? m.color : "transparent",
                  color: modelId === m.id ? "#FAFAF8" : "#5A7A5C",
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: 13,
                  letterSpacing: "0.06em",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "all 0.25s",
                  fontWeight: modelId === m.id ? 400 : 300,
                  whiteSpace: "nowrap",
                }}
              >
                <span>{m.icon}</span>
                <span>{m.title}</span>
              </button>
            ))}
          </ScrollRow>
        </div>
      </section>
      {/* ── MODEL DETAIL ─────────────────────────────────────────────────── */}
      <section style={{ padding: `${SEC_PY} ${PX}`, background: "#FAFAF8" }}>
        <div style={container}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
              gap: "clamp(2.5rem, 6vw, 5rem)",
              alignItems: "start",
            }}
          >
            {/* Left: info */}
            <div>
              <GoldLabel>{model.tag}</GoldLabel>
              <h2
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "clamp(36px, 5vw, 52px)",
                  fontWeight: 300,
                  color: "#1A2420",
                  marginBottom: 6,
                  lineHeight: 1.1,
                }}
              >
                {model.title}
              </h2>
              <p
                style={{
                  fontSize: 12,
                  color: "#8A9E8C",
                  letterSpacing: "0.14em",
                  marginBottom: 24,
                  textTransform: "uppercase",
                }}
              >
                Model No: {model.subtitle}
              </p>
              <p
                style={{
                  fontSize: 15,
                  color: "#5A7A5C",
                  lineHeight: 1.9,
                  marginBottom: 28,
                  fontWeight: 300,
                }}
              >
                {model.desc}
              </p>
              <GoldLabel>Ideal For</GoldLabel>
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap",
                  marginBottom: 32,
                }}
              >
                {model.useCases.map((uc, i) => (
                  <span
                    key={i}
                    style={{
                      padding: "6px 14px",
                      background: "#EDE9E0",
                      fontSize: 12,
                      color: "#5A7A5C",
                      borderRadius: 2,
                    }}
                  >
                    {uc}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link
                  href="/query"
                  style={{
                    background: "#1A2420",
                    color: "#FAFAF8",
                    padding: "13px 32px",
                    fontSize: 12,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                  }}
                >
                  Request Quote
                </Link>
              </div>
            </div>
            {/* Right: specs */}
            <div>
              <GoldLabel>Technical Specifications</GoldLabel>
              <div
                style={{
                  background: "#F4F3F0",
                  padding: "1.5rem 2rem",
                }}
              >
                {model.specs.map((s, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "14px 0",
                      gap: 16,
                      borderBottom:
                        i < model.specs.length - 1
                          ? "1px solid #EDE9E0"
                          : "none",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 13,
                        color: "#8A9E8C",
                        fontWeight: 300,
                      }}
                    >
                      {s.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "Cormorant Garamond, serif",
                        fontSize: 18,
                        fontWeight: 400,
                        color: "#1A2420",
                        textAlign: "right",
                      }}
                    >
                      {s.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── BOTTOM CTA ────────────────────────────────────────────────────── */}
      <section
        style={{
          padding: `${SEC_PY} ${PX}`,
          background: "#1A2420",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 300,
              color: "#FAFAF8",
              marginBottom: 16,
            }}
          >
            Not sure which model fits?
          </h2>
          <p
            style={{
              fontSize: 14,
              color: "#8A9E8C",
              marginBottom: 32,
              lineHeight: 1.8,
            }}
          >
            Submit a query with your environment details and our team will
            recommend the right product and configuration.
          </p>
          <Link
            href="/query"
            style={{
              background: "#5A7A5C",
              color: "#FAFAF8",
              padding: "14px 42px",
              fontSize: 13,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Submit a Query
          </Link>
        </div>
      </section>
    </div>
  );
}
