"use client";

import FadeUp from "./FadeUp";

const eventTypes = [
  {
    label: "Family Gatherings",
    desc: "Eid celebrations, birthdays, mehndis, and milestones — we handle the food so you can be present.",
  },
  {
    label: "Office Lunches",
    desc: "Something better than the usual catering. A spread that makes people actually look forward to lunch.",
  },
  {
    label: "Nikkahs & Wedding Events",
    desc: "From intimate nikkahs to larger walimas — menus built for the weight of the occasion.",
  },
  {
    label: "Community Events",
    desc: "Mosques, cultural centers, fundraisers, and gatherings that bring people together.",
  },
];

const steps = [
  {
    num: "1",
    title: "Tell us about your event",
    body: "Reach out with your date, guest count, and what you have in mind. We'll respond personally.",
  },
  {
    num: "2",
    title: "We shape the menu together",
    body: "Based on your preferences, we'll put together a menu that fits — and walk you through every option.",
  },
  {
    num: "3",
    title: "Freshly prepared for your gathering",
    body: "Everything is made fresh for your event. You focus on your guests; we focus on the food.",
  },
];

export default function Catering() {
  return (
    <section
      id="catering"
     
      style={{
        padding: "7rem 1.5rem",
        backgroundColor: "#F5EEE0",
        borderTop: "1px solid #E2D9C8",
      }}
    >
      <div
        style={{ maxWidth: "72rem", margin: "0 auto" }}
      >
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "5rem", alignItems: "start" }}
          className="lg:grid-cols-2"
        >

          {/* Left: Events */}
          <div>
            <FadeUp>
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
                  Catering
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
                  color: "#1A2826",
                  marginBottom: "1rem",
                  marginTop: 0,
                }}
              >
                Events we
                <br />
                <span style={{ fontStyle: "italic", fontWeight: 400 }}>take care of</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.14}>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.9rem",
                  fontWeight: 300,
                  lineHeight: 1.75,
                  color: "#6A7B78",
                  maxWidth: "340px",
                  marginBottom: "2.75rem",
                }}
              >
                Whether you&rsquo;re hosting twenty or two hundred, we&rsquo;ll
                shape a spread that suits the occasion.
              </p>
            </FadeUp>

            <div style={{ display: "flex", flexDirection: "column", gap: "0px", borderTop: "1px solid #E2D9C8" }}>
              {eventTypes.map((event, i) => (
                <FadeUp key={event.label} delay={0.1 + i * 0.07}>
                  <div
                    style={{
                      padding: "1.4rem 0",
                      borderBottom: "1px solid #E2D9C8",
                    }}
                    className="group"
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: "0.88rem",
                        fontWeight: 500,
                        color: "#1A2826",
                        margin: "0 0 0.3rem",
                        letterSpacing: "0.01em",
                        transition: "color 0.2s",
                      }}
                      className="group-hover:text-[#1C5955]"
                    >
                      {event.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: "0.84rem",
                        fontWeight: 300,
                        lineHeight: 1.7,
                        color: "#6A7B78",
                        margin: 0,
                      }}
                    >
                      {event.desc}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Right: How it works */}
          <div>
            <FadeUp delay={0.04}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.25rem" }}>
                <div style={{ width: "28px", height: "1px", backgroundColor: "#1C5955" }} />
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.67rem",
                    fontWeight: 500,
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: "#1C5955",
                  }}
                >
                  How it works
                </span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(2rem, 4vw, 2.75rem)",
                  fontWeight: 500,
                  lineHeight: 1.1,
                  color: "#1A2826",
                  marginBottom: "3rem",
                  marginTop: 0,
                }}
              >
                Simple from
                <br />
                <span style={{ fontStyle: "italic", fontWeight: 400 }}>start to finish</span>
              </h2>
            </FadeUp>

            <div style={{ position: "relative" }}>
              {/* Vertical connecting line */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "15px",
                  top: "36px",
                  bottom: "36px",
                  width: "1px",
                  backgroundColor: "#D0C4AD",
                  pointerEvents: "none",
                }}
              />

              <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                {steps.map((step, i) => (
                  <FadeUp key={step.num} delay={0.12 + i * 0.1}>
                    <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                      <div
                        style={{
                          flexShrink: 0,
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          border: "1px solid #D0C4AD",
                          backgroundColor: "#F5EEE0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative",
                          zIndex: 1,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-dm-sans)",
                            fontSize: "0.7rem",
                            fontWeight: 500,
                            color: "#1C5955",
                          }}
                        >
                          {step.num}
                        </span>
                      </div>
                      <div style={{ paddingTop: "4px" }}>
                        <p
                          style={{
                            fontFamily: "var(--font-dm-sans)",
                            fontSize: "0.88rem",
                            fontWeight: 500,
                            color: "#1A2826",
                            margin: "0 0 0.35rem",
                          }}
                        >
                          {step.title}
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-dm-sans)",
                            fontSize: "0.85rem",
                            fontWeight: 300,
                            lineHeight: 1.7,
                            color: "#6A7B78",
                            margin: 0,
                          }}
                        >
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>

            <FadeUp delay={0.38}>
              <div
                style={{
                  marginTop: "3rem",
                  padding: "1.5rem 1.75rem",
                  backgroundColor: "#EFE6D2",
                  borderLeft: "2px solid #1C5955",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.87rem",
                    fontWeight: 300,
                    lineHeight: 1.75,
                    color: "#3D5250",
                    margin: "0 0 0.75rem",
                  }}
                >
                  Not sure where to start? Reach out with the basics — we&rsquo;ll
                  help you figure out the rest. No pressure, no rigid packages.
                </p>
                <a
                  href="#contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    color: "#1C5955",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#103733")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#1C5955")}
                >
                  Get in touch
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
