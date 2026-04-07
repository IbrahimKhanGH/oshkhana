"use client";

import FadeUp from "./FadeUp";

const signals = [
  {
    title: "Family-made",
    body: "This isn't a commercial kitchen operation. Every dish is made by people who genuinely care about what they're preparing.",
  },
  {
    title: "Made fresh for your event",
    body: "No pre-cooked shortcuts, no bulk reheating. Preparation begins when your order does.",
  },
  {
    title: "Authentic recipes",
    body: "Pakistani and Uzbek cuisine prepared as it's meant to be — not watered down for a generic palate.",
  },
  {
    title: "Personal attention",
    body: "You work with Anna directly — not a coordinator managing fifty simultaneous orders.",
  },
  {
    title: "Flexible for any size",
    body: "From an intimate family lunch to a full community event — we adapt to what your gathering needs.",
  },
  {
    title: "Rooted in hospitality",
    body: "In our culture, feeding guests is an act of care. That's the spirit behind every catering order we take.",
  },
];

export default function Trust() {
  return (
    <section
     
      style={{
        padding: "7rem 1.5rem",
        backgroundColor: "#EFE6D2",
        borderTop: "1px solid #D0C4AD",
      }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        {/* Header */}
        <FadeUp>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
              marginBottom: "4.5rem",
              alignItems: "end",
            }}
            className="lg:grid-cols-[1fr_1fr]"
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.25rem" }}>
                <div style={{ width: "28px", height: "1px", backgroundColor: "#BE5B34" }} />
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.67rem",
                    fontWeight: 500,
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: "#BE5B34",
                  }}
                >
                  Why OSHKHANA
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(2rem, 4vw, 2.75rem)",
                  fontWeight: 500,
                  lineHeight: 1.1,
                  color: "#1A2826",
                  margin: 0,
                }}
              >
                What we bring
                <br />
                <span style={{ fontStyle: "italic", fontWeight: 400 }}>to your table</span>
              </h2>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.92rem",
                  fontWeight: 300,
                  lineHeight: 1.78,
                  color: "#6A7B78",
                  margin: 0,
                  maxWidth: "380px",
                }}
              >
                The things that make a real difference when you&rsquo;re trusting
                someone to feed your guests.
              </p>
            </div>
          </div>
        </FadeUp>

        {/* Signals — two-column editorial list */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "0px",
            borderTop: "1px solid #D0C4AD",
          }}
          className="md:grid-cols-2"
        >
          {signals.map((s, i) => (
            <FadeUp key={s.title} delay={i * 0.06}>
              <div
                style={{
                  padding: "1.75rem 0",
                  borderBottom: "1px solid #D0C4AD",
                  borderRight: i % 2 === 0 ? "none" : undefined,
                  display: "grid",
                  gap: "0.35rem",
                }}
                className={`md:px-8 ${i % 2 === 0 ? "md:border-r md:border-r-[#D0C4AD]" : ""}`}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  {/* Small teal dot accent */}
                  <div
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      backgroundColor: "#1C5955",
                      opacity: 0.6,
                      flexShrink: 0,
                    }}
                  />
                  <h3
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "0.88rem",
                      fontWeight: 500,
                      color: "#1A2826",
                      margin: 0,
                      letterSpacing: "0.01em",
                    }}
                  >
                    {s.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.85rem",
                    fontWeight: 300,
                    lineHeight: 1.75,
                    color: "#6A7B78",
                    margin: 0,
                    paddingLeft: "1.1rem",
                  }}
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
