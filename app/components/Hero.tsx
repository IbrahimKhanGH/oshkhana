"use client";

import { motion } from "framer-motion";

const ease = [0.25, 0.46, 0.45, 0.94] as const;
const PHONE_HREF = "tel:+1XXXXXXXXXX";

const PATTERN_SVG = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80">
    <path d="M40 4 L76 40 L40 76 L4 40 Z" stroke="#1C5955" stroke-width="0.8" fill="none"/>
    <rect x="22" y="22" width="36" height="36" stroke="#1C5955" stroke-width="0.55" fill="none"/>
    <circle cx="40" cy="40" r="10" stroke="#8B5E3C" stroke-width="0.7" fill="none"/>
    <circle cx="40" cy="40" r="3.5" stroke="#8B5E3C" stroke-width="0.55" fill="none"/>
    <circle cx="0" cy="0" r="2" fill="#1C5955"/>
    <circle cx="80" cy="0" r="2" fill="#1C5955"/>
    <circle cx="0" cy="80" r="2" fill="#1C5955"/>
    <circle cx="80" cy="80" r="2" fill="#1C5955"/>
    <line x1="40" y1="4" x2="40" y2="18" stroke="#1C5955" stroke-width="0.4"/>
    <line x1="40" y1="62" x2="40" y2="76" stroke="#1C5955" stroke-width="0.4"/>
    <line x1="4" y1="40" x2="18" y2="40" stroke="#1C5955" stroke-width="0.4"/>
    <line x1="62" y1="40" x2="76" y2="40" stroke="#1C5955" stroke-width="0.4"/>
  </svg>`
)}`;

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "7.5rem 1.25rem 4rem",
        overflow: "hidden",
        backgroundColor: "#F5EEE0",
      }}
    >
      {/* Warm ambient gradients — below the pattern */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(circle at 15% 25%, rgba(28,89,85,0.06), transparent 40%),
            radial-gradient(circle at 85% 20%, rgba(190,91,52,0.06), transparent 35%)
          `,
          pointerEvents: "none",
        }}
      />

      {/* Geometric pattern */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("${PATTERN_SVG}")`,
          backgroundRepeat: "repeat",
          backgroundSize: "80px 80px",
          opacity: 0.12,
          pointerEvents: "none",
        }}
      />

      {/* Soft fade at bottom so pattern doesn't end abruptly */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "30%",
          background: "linear-gradient(to top, #F5EEE0, transparent)",
          pointerEvents: "none",
        }}
      />

      {/* Thin top accent */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background:
            "linear-gradient(to right, transparent 5%, #BE5B34 30%, #1C5955 70%, transparent 95%)",
          opacity: 0.3,
        }}
      />

      <div style={{ position: "relative", maxWidth: "860px", width: "100%" }}>
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18, ease }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "1.75rem",
          }}
        >
          <div
            style={{
              width: "28px",
              height: "1px",
              backgroundColor: "#BE5B34",
              opacity: 0.5,
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.66rem",
              fontWeight: 500,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#BE5B34",
            }}
          >
            Uzbek, Uyghur &amp; Pakistani Catering
          </span>
          <div
            style={{
              width: "28px",
              height: "1px",
              backgroundColor: "#BE5B34",
              opacity: 0.5,
            }}
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.26, ease }}
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2.6rem, 6.2vw, 5rem)",
            fontWeight: 500,
            lineHeight: 1.06,
            letterSpacing: "-0.02em",
            color: "#1A2826",
            margin: "0 auto 1.5rem",
          }}
        >
          Real food, made by hand,
          <br />
          <span style={{ color: "#1C5955" }}>for the people</span>{" "}
          <span style={{ fontStyle: "italic", fontWeight: 400 }}>
            you&rsquo;re gathering
          </span>
        </motion.h1>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.36, ease }}
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "1.06rem",
            fontWeight: 300,
            lineHeight: 1.82,
            color: "#3D5250",
            maxWidth: "520px",
            margin: "0 auto 2.5rem",
          }}
        >
          Anna Khanum personally prepares every order &mdash; fresh plov,
          hand-pulled lagman, aromatic biryani, and more. Family recipes,
          no shortcuts, made for your gathering.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.46, ease }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.85rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "0.65rem",
              width: "100%",
            }}
            className="sm:flex-row flex-col sm:w-auto"
          >
            <a
              href={PHONE_HREF}
              className="sm:w-auto w-full justify-center"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "1rem 2rem",
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.88rem",
                fontWeight: 500,
                letterSpacing: "0.04em",
                color: "#F5EEE0",
                backgroundColor: "#1C5955",
                transition:
                  "background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
                boxShadow: "0 12px 28px rgba(28,89,85,0.18)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#103733";
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow =
                  "0 16px 32px rgba(16,55,51,0.22)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#1C5955";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 12px 28px rgba(28,89,85,0.18)";
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12.5 9.5c0 .22-.05.44-.15.65a2.7 2.7 0 01-.42.62c-.25.28-.52.47-.82.59a2.6 2.6 0 01-1 .19c-.52 0-1.08-.12-1.67-.36A12.9 12.9 0 016.8 9.96a12.9 12.9 0 01-2.22-2.2A13.1 13.1 0 013.25 5.5c-.23-.57-.35-1.12-.35-1.63 0-.34.06-.67.18-.98A2.5 2.5 0 013.6 2c.26-.27.56-.4.88-.4.12 0 .24.02.35.07.12.05.23.14.32.27l1.6 2.25c.09.12.15.23.2.34.04.1.07.19.07.28 0 .11-.03.22-.1.33-.06.1-.14.21-.25.31l-.35.37a.24.24 0 00-.07.18c0 .04 0 .07.02.11l.05.1c.08.15.23.36.46.62.23.25.48.51.74.76.27.25.53.49.79.69.25.21.46.35.62.44l.09.04a.48.48 0 00.12.02.25.25 0 00.19-.08l.36-.37c.11-.12.22-.2.32-.26.1-.06.21-.09.33-.09.09 0 .19.02.3.07.1.04.22.11.34.2l2.28 1.44c.13.09.22.19.27.31.05.12.07.25.07.39z"
                  stroke="currentColor"
                  strokeWidth="0.8"
                  strokeLinejoin="round"
                  fill="currentColor"
                  fillOpacity="0.15"
                />
              </svg>
              Call or Text to Order
            </a>
            <a
              href="#menu"
              className="sm:w-auto w-full justify-center"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "1rem 1.75rem",
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.86rem",
                fontWeight: 400,
                letterSpacing: "0.04em",
                color: "#1C5955",
                border: "1px solid #1C5955",
                transition:
                  "background-color 0.2s ease, color 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#1C5955";
                e.currentTarget.style.color = "#F5EEE0";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#1C5955";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              View Menu
            </a>
          </div>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.74rem",
              fontWeight: 300,
              color: "#6A7B78",
              margin: 0,
            }}
          >
            Serving Dallas &ndash; Fort Worth &middot; Every dish made fresh
          </p>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        style={{
          position: "absolute",
          bottom: "1.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "0.58rem",
            fontWeight: 400,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#6A7B78",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{
            width: "1px",
            height: "28px",
            background: "linear-gradient(to bottom, #6A7B78, transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
