{
  /* ── ALL MODELS OVERVIEW CARDS ────────────────────────────────────── */
}
<section style={{ padding: `0 ${PX} ${SEC_PY}`, background: "#FAFAF8" }}>
  <div style={container}>
    <div style={{ borderTop: "1px solid #EDE9E0", paddingTop: "3rem" }}>
      <Eyebrow>All {product.name} Models</Eyebrow>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {product.models.map((m) => (
          <div
            key={m.id}
            onClick={() => setModel(m.id)}
            style={{
              padding: "1.5rem",
              border: `1px solid ${modelId === m.id ? m.color : "#EDE9E0"}`,
              cursor: "pointer",
              transition: "all 0.3s",
              background: modelId === m.id ? "#F4F3F0" : "transparent",
            }}
            onMouseOver={(e) => (e.currentTarget.style.borderColor = m.color)}
            onMouseOut={(e) =>
              (e.currentTarget.style.borderColor =
                modelId === m.id ? m.color : "#EDE9E0")
            }
          >
            <div style={{ fontSize: 26, marginBottom: 10 }}>{m.icon}</div>
            <div
              style={{
                fontSize: 10,
                letterSpacing: "0.16em",
                color: m.color,
                textTransform: "uppercase",
                marginBottom: 6,
              }}
            >
              {m.tag}
            </div>
            <div
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: 20,
                color: "#1A2420",
                fontWeight: 300,
                marginBottom: 4,
              }}
            >
              {m.title}
            </div>
            <div style={{ fontSize: 11, color: "#8A9E8C", marginBottom: 12 }}>
              {m.subtitle}
            </div>
            <div
              style={{
                fontSize: 11,
                color: m.color,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {modelId === m.id ? "● Viewing" : "View →"}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>;
