"use client";

import FadeUp from "./FadeUp";

const pillars = [
  {
    num: "01",
    label: "Family tradition",
    body: "Recipes passed down and refined over time — not invented for a menu.",
  },
  {
    num: "02",
    label: "Made to order",
    body: "Everything is prepared fresh for your event. No pre-cooked shortcuts.",
  },
  {
    num: "03",
    label: "Cultural authenticity",
    body: "Pakistani and Uzbek cuisine as it's meant to taste — not diluted for a generic palate.",
  },
  {
    num: "04",
    label: "Personal service",
    body: "You talk to Anna directly. No middlemen, no automated responses.",
  },
];

export default function About() {
  return (
    <section
      id="about"
     
      style={{
        position: "relative",
        padding: "7rem 1.5rem",
        backgroundColor: "#1C5955",
        overflow: "hidden",
      }}
    >
      {/* Ornamental background element */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "-80px",
          bottom: "-80px",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          backgroundColor: "#BE5B34",
          opacity: 0.06,
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-60px",
          top: "-60px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          backgroundColor: "#F5EEE0",
          opacity: 0.03,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "4rem",
          alignItems: "start",
        }}
        className="lg:grid-cols-[1.1fr_0.9fr]"
      >
        {/* Left: story */}
        <div>
          <FadeUp>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.5rem" }}>
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
                Our Story
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                fontWeight: 500,
                lineHeight: 1.1,
                color: "#F5EEE0",
                marginBottom: "2.25rem",
                marginTop: 0,
              }}
            >
              Made with care,
              <br />
              <span style={{ fontStyle: "italic", fontWeight: 400 }}>by family</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.16}>
            <div
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.93rem",
                fontWeight: 300,
                lineHeight: 1.85,
                color: "#A8C8C5",
              }}
            >
              <p style={{ marginTop: 0, marginBottom: "1.4rem" }}>
                OSHKHANA started the way most good things do — around a family
                table. Anna Khanum grew up learning these dishes the right way:
                from her mother, from patience, and from a real understanding
                of what food means to a gathering.
              </p>
              <p style={{ marginTop: 0, marginBottom: "1.4rem" }}>
                The name{" "}
                <em style={{ color: "#F5EEE0", fontStyle: "normal" }}>oshkhana</em>{" "}
                comes from{" "}
                <em style={{ color: "#F5EEE0", fontStyle: "normal" }}>osh</em>
                {" "}— food, and especially plov — and{" "}
                <em style={{ color: "#F5EEE0", fontStyle: "normal" }}>khana</em>
                {" "}— place, room. A place for food. A place where people
                gather and eat. That&rsquo;s exactly what this is.
              </p>
              <p style={{ marginTop: 0, marginBottom: "1.4rem" }}>
                Anna cooks every single order herself. Uzbek plov, Uyghur
                dishes, Pakistani karahi and biryani — each one made fresh,
                in small batches, with the care you can only bring to food
                you genuinely know how to make. Nothing is outsourced.
                Nothing is reheated.
              </p>
              <p style={{ marginTop: 0, marginBottom: 0 }}>
                This is a growing business, built through word of mouth and
                repeat orders from families across Dallas who trust the food
                to be right. That trust is not taken lightly.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.26}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginTop: "2.5rem",
                paddingTop: "2rem",
                borderTop: "1px solid rgba(245,238,224,0.12)",
              }}
            >
              <div style={{ width: "36px", height: "1px", backgroundColor: "#BE5B34", opacity: 0.6 }} />
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "1.05rem",
                    fontStyle: "italic",
                    color: "#F5EEE0",
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  Anna Khanum
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.72rem",
                    fontWeight: 300,
                    letterSpacing: "0.1em",
                    color: "#7AAEAA",
                    margin: "3px 0 0",
                  }}
                >
                  Founder &amp; Chef
                </p>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Right: pillars */}
        <FadeUp delay={0.12}>
          <div
            style={{
              borderLeft: "1px solid rgba(245,238,224,0.1)",
              paddingLeft: "2.5rem",
              marginTop: "0.5rem",
            }}
            className="lg:border-l lg:pl-10 border-l-0 pl-0"
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "2.25rem" }}>
              {pillars.map((item) => (
                <div key={item.num} style={{ display: "flex", gap: "1.25rem" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "0.62rem",
                      fontWeight: 500,
                      letterSpacing: "0.14em",
                      color: "#BE5B34",
                      opacity: 0.7,
                      paddingTop: "2px",
                      flexShrink: 0,
                      width: "24px",
                    }}
                  >
                    {item.num}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: "0.87rem",
                        fontWeight: 500,
                        color: "#F5EEE0",
                        margin: "0 0 0.3rem",
                        letterSpacing: "0.01em",
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: "0.85rem",
                        fontWeight: 300,
                        lineHeight: 1.7,
                        color: "#8FBEBB",
                        margin: 0,
                      }}
                    >
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Subtle ornamental quote */}
            <div
              style={{
                marginTop: "3rem",
                paddingTop: "2.25rem",
                borderTop: "1px solid rgba(245,238,224,0.08)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.05rem",
                  fontStyle: "italic",
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: "#A8C8C5",
                  margin: 0,
                }}
              >
                &ldquo;Feeding guests is not a task.
                <br />
                It&rsquo;s an act of care.&rdquo;
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
