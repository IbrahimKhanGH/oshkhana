"use client";

import FadeUp from "./FadeUp";
import { PHONE_DISPLAY as PHONE, PHONE_HREF, EMAIL, EMAIL_HREF } from "../data/contact";

function CTAOrnament() {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: "500px",
        height: "500px",
        opacity: 0.045,
        pointerEvents: "none",
        color: "#F5EEE0",
      }}
    >
      <path d="M60 6 L96 27 L114 60 L96 93 L60 114 L24 93 L6 60 L24 27 Z" stroke="currentColor" strokeWidth="0.7" fill="none" />
      <path d="M60 20 L89 37 L105 60 L89 83 L60 100 L31 83 L15 60 L31 37 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <circle cx="60" cy="60" r="18" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <circle cx="60" cy="60" r="7"  stroke="currentColor" strokeWidth="0.5" fill="none" />
      <line x1="60" y1="6"   x2="60"  y2="114" stroke="currentColor" strokeWidth="0.3" />
      <line x1="6"  y1="60"  x2="114" y2="60"  stroke="currentColor" strokeWidth="0.3" />
      <line x1="24" y1="24"  x2="96"  y2="96"  stroke="currentColor" strokeWidth="0.3" />
      <line x1="96" y1="24"  x2="24"  y2="96"  stroke="currentColor" strokeWidth="0.3" />
    </svg>
  );
}

export default function CTASection() {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        padding: "7rem 1.5rem",
        backgroundColor: "#1C5955",
        overflow: "hidden",
      }}
    >
      <CTAOrnament />

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "-100px",
          bottom: "-100px",
          width: "360px",
          height: "360px",
          borderRadius: "50%",
          backgroundColor: "#BE5B34",
          opacity: 0.08,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          position: "relative",
          textAlign: "center",
        }}
      >
        {/* Eyebrow */}
        <FadeUp>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "1.75rem",
            }}
          >
            <div style={{ flex: 1, maxWidth: "36px", height: "1px", backgroundColor: "#BE5B34", opacity: 0.6 }} />
            <span
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.66rem",
                fontWeight: 500,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "#BE5B34",
              }}
            >
              Get in touch
            </span>
            <div style={{ flex: 1, maxWidth: "36px", height: "1px", backgroundColor: "#BE5B34", opacity: 0.6 }} />
          </div>
        </FadeUp>

        {/* Headline */}
        <FadeUp delay={0.08}>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
              fontWeight: 500,
              lineHeight: 1.1,
              color: "#F5EEE0",
              margin: "0 auto 1.25rem",
              maxWidth: "520px",
            }}
          >
            Planning a{" "}
            <span style={{ fontStyle: "italic", fontWeight: 400 }}>gathering</span>?
          </h2>
        </FadeUp>

        {/* Supporting copy */}
        <FadeUp delay={0.15}>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.95rem",
              fontWeight: 300,
              lineHeight: 1.8,
              color: "#A8C8C5",
              maxWidth: "420px",
              margin: "0 auto 2.5rem",
            }}
          >
            Call or text Anna directly to discuss your event, talk through
            the menu, and get pricing. She handles every order personally.
          </p>
        </FadeUp>

        {/* Primary CTA: phone */}
        <FadeUp delay={0.22}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "2.75rem",
            }}
          >
            {/* Phone number — big, prominent */}
            <a
              href={PHONE_HREF}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "1rem 2.25rem",
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.88rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                color: "#1C5955",
                backgroundColor: "#F5EEE0",
                transition: "background-color 0.22s ease, transform 0.22s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#EFE6D2";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#F5EEE0";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="currentColor" aria-hidden="true">
                <path d="M13 10.3c0 .24-.05.47-.15.7a3 3 0 01-.44.65c-.26.29-.54.49-.86.62a2.72 2.72 0 01-1.04.2c-.54 0-1.12-.12-1.73-.37A13.4 13.4 0 017 10.8a13.4 13.4 0 01-2.3-2.28A13.6 13.6 0 013.37 6.2C3.12 5.6 3 5.03 3 4.49c0-.36.06-.7.19-1.02A2.6 2.6 0 013.8 2.6c.27-.28.58-.42.91-.42.13 0 .26.03.38.08.13.06.24.15.33.28L6.73 4.3c.09.13.16.24.2.35.05.1.08.2.08.3 0 .12-.04.24-.1.35a1.7 1.7 0 01-.28.35l-.38.4a.26.26 0 00-.08.2l.02.12.05.1c.09.17.25.39.48.65.24.26.5.53.77.79.28.26.55.5.82.72.26.22.48.37.65.46l.1.05a.5.5 0 00.12.01.27.27 0 00.2-.09l.38-.39c.12-.12.23-.22.34-.28.11-.07.22-.1.34-.1.1 0 .2.02.31.07.11.05.23.12.35.22l1.82 1.28c.13.09.22.2.28.33.05.13.08.26.08.4z"/>
              </svg>
              Call or Text: {PHONE}
            </a>

            {/* Secondary: email */}
            <a
              href={EMAIL_HREF}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "0.7rem 1.5rem",
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.8rem",
                fontWeight: 400,
                letterSpacing: "0.04em",
                color: "#A8C8C5",
                border: "1px solid rgba(168,200,197,0.3)",
                transition: "border-color 0.2s ease, color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(168,200,197,0.7)";
                e.currentTarget.style.color = "#F5EEE0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(168,200,197,0.3)";
                e.currentTarget.style.color = "#A8C8C5";
              }}
            >
              Or send a message: {EMAIL}
            </a>
          </div>
        </FadeUp>

        {/* Location note */}
        <FadeUp delay={0.3}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <div style={{ width: "20px", height: "1px", backgroundColor: "#A8C8C5", opacity: 0.4 }} />
            <span
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.74rem",
                fontWeight: 300,
                color: "#6A9E9A",
                letterSpacing: "0.04em",
              }}
            >
              Dallas, Texas — serving the DFW area
            </span>
            <div style={{ width: "20px", height: "1px", backgroundColor: "#A8C8C5", opacity: 0.4 }} />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
