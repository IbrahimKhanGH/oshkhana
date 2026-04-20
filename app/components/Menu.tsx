"use client";

import Image from "next/image";
import FadeUp from "./FadeUp";
import { menu } from "../data/menu";
import { PHONE_HREF, PHONE_DISPLAY } from "../data/contact";

const CATEGORY_ACCENT = ["#BE5B34", "#1C5955"];
const PRICE_COLS = "70px 52px 52px";

// Photos that have a matching dish on the menu, in display order.
// The grid celebrates the food visually — labels aren't needed.
const GALLERY = [
  { src: "/images/menu/afghani-pulao.jpg", alt: "Afghani Pulao — rice with carrots in a large silver kazan" },
  { src: "/images/menu/biryani.jpg",       alt: "Biryani — saffron rice with tomatoes and herbs in a dark pan" },
  { src: "/images/menu/qorma.jpg",         alt: "Qorma — slow-braised meat in a dark cast-iron wok" },
  { src: "/images/menu/nihari.jpg",        alt: "Beef Nihari — slow-simmered stew ready for a catering tray" },
];

export default function Menu() {
  return (
    <section
      id="menu"
      style={{ padding: "7rem 1.5rem", backgroundColor: "#F5EEE0" }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        {/* ── Section header ─────────────────────────────────────────── */}
        <FadeUp>
          <div style={{ marginBottom: "2.5rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "1.25rem",
              }}
            >
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
                Catering Menu
              </span>
            </div>

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
              Signature Dishes
            </h2>

            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.92rem",
                fontWeight: 300,
                lineHeight: 1.75,
                color: "#6A7B78",
                maxWidth: "440px",
                margin: 0,
              }}
            >
              Every dish is made fresh for your event by Anna Khanum. Prices are
              per tray — half serves roughly 10–15 guests, full serves 20–30.
            </p>
          </div>
        </FadeUp>

        {/* ── Photo grid ─────────────────────────────────────────────── */}
        {/* 4 equal squares on sm+, 2×2 on mobile. No captions — the food speaks. */}
        <FadeUp delay={0.06}>
          <div
            style={{ gap: "4px", marginBottom: "3.5rem" }}
            className="grid grid-cols-2 sm:grid-cols-4"
          >
            {GALLERY.map((photo) => (
              <div
                key={photo.src}
                style={{ position: "relative", aspectRatio: "1", overflow: "hidden" }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </FadeUp>

        {/* ── Menu body + CTA — centered column ─────────────────────── */}
        {/* Narrower than the photo grid above; centered so the empty space
            is symmetric and reads as intentional whitespace, not a bug.   */}
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <div style={{ borderTop: "1px solid #D0C4AD" }}>
          {menu.map((cat, catIndex) => {
            const accent = CATEGORY_ACCENT[catIndex % CATEGORY_ACCENT.length];
            const isFirst = catIndex === 0;

            return (
              <div
                key={cat.category}
                style={
                  isFirst
                    ? {}
                    : { marginTop: "4.5rem", borderTop: "1px solid #D0C4AD" }
                }
              >
                {/* Category header — extending-line treatment */}
                <FadeUp delay={0.04}>
                  <div style={{ padding: "2.25rem 0 1.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div
                        style={{
                          width: "20px",
                          height: "1px",
                          backgroundColor: accent,
                          opacity: 0.65,
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "var(--font-dm-sans)",
                          fontSize: "0.68rem",
                          fontWeight: 500,
                          letterSpacing: "0.28em",
                          textTransform: "uppercase",
                          color: accent,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {cat.category}
                      </span>
                      <div style={{ flex: 1, height: "1px", backgroundColor: "#E2D9C8" }} />
                    </div>
                  </div>
                </FadeUp>

                {/* Dish rows — all consistently text-only */}
                {cat.dishes.map((dish, dishIndex) => (
                  <FadeUp key={dish.name} delay={0.06 + dishIndex * 0.07}>
                    <div
                      style={{
                        borderBottom: "1px solid #E2D9C8",
                        padding: "2rem 0",
                        cursor: "default",
                      }}
                      className="group"
                    >
                      <div
                        style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
                        className="sm:flex-row sm:items-start sm:justify-between sm:gap-12"
                      >

                        {/* Left: name + description */}
                        <div style={{ flex: "1 1 0", minWidth: 0 }}>
                          <h3
                            style={{
                              fontFamily: "var(--font-playfair)",
                              fontSize: "1.28rem",
                              fontWeight: 500,
                              color: "#1A2826",
                              margin: "0 0 0.55rem",
                              lineHeight: 1.2,
                              transition: "color 0.22s ease",
                            }}
                            className="group-hover:text-[#1C5955]"
                          >
                            {dish.name}
                          </h3>
                          <p
                            style={{
                              fontFamily: "var(--font-dm-sans)",
                              fontSize: "0.87rem",
                              fontWeight: 300,
                              lineHeight: 1.74,
                              color: "#4A6260",
                              margin: 0,
                            }}
                          >
                            {dish.description}
                          </p>
                        </div>

                        {/* Right: pricing card */}
                        <div
                          style={{
                            flexShrink: 0,
                            backgroundColor: "#EFE6D2",
                            borderLeft: `2px solid ${accent}`,
                            padding: "0.85rem 1.1rem 0.9rem",
                          }}
                        >
                          {/* Column labels */}
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: PRICE_COLS,
                              marginBottom: "0.22rem",
                            }}
                          >
                            <span />
                            {(["Half", "Full"] as const).map((label) => (
                              <span
                                key={label}
                                style={{
                                  fontFamily: "var(--font-dm-sans)",
                                  fontSize: "0.57rem",
                                  fontWeight: 600,
                                  letterSpacing: "0.18em",
                                  textTransform: "uppercase",
                                  color: "#6A7B78",
                                  textAlign: "right",
                                  display: "block",
                                }}
                              >
                                {label}
                              </span>
                            ))}
                          </div>

                          {/* Serving size notes + separator */}
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: PRICE_COLS,
                              paddingBottom: "0.55rem",
                              marginBottom: "0.5rem",
                              borderBottom: "1px solid #D0C4AD",
                            }}
                          >
                            <span />
                            {(["10–15", "20–30"] as const).map((size) => (
                              <span
                                key={size}
                                style={{
                                  fontFamily: "var(--font-dm-sans)",
                                  fontSize: "0.56rem",
                                  fontWeight: 300,
                                  color: "#A8B8B6",
                                  textAlign: "right",
                                  display: "block",
                                  lineHeight: 1.2,
                                }}
                              >
                                {size}
                              </span>
                            ))}
                          </div>

                          {/* Variant rows */}
                          {dish.variants.map((v) => (
                            <div
                              key={v.protein || "base"}
                              style={{
                                display: "grid",
                                gridTemplateColumns: PRICE_COLS,
                                padding: "0.22rem 0",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "var(--font-dm-sans)",
                                  fontSize: "0.75rem",
                                  fontWeight: 400,
                                  color: "#5A6E6C",
                                  letterSpacing: "0.01em",
                                }}
                              >
                                {v.protein}
                              </span>
                              {([v.half, v.full] as const).map((price, pi) => (
                                <span
                                  key={pi}
                                  style={{
                                    fontFamily: "var(--font-dm-sans)",
                                    fontSize: "0.84rem",
                                    fontWeight: 500,
                                    color: "#1A2826",
                                    textAlign: "right",
                                    letterSpacing: "0.01em",
                                  }}
                                >
                                  {price}
                                </span>
                              ))}
                            </div>
                          ))}
                        </div>

                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            );
          })}
        </div>

        {/* ── Inline CTA ─────────────────────────────────────────────── */}
        <FadeUp delay={0.15}>
          <div
            style={{
              marginTop: "2.75rem",
              padding: "1.5rem 1.75rem",
              backgroundColor: "#EFE6D2",
              borderLeft: "2px solid #1C5955",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
            className="sm:flex-row sm:items-center sm:justify-between sm:gap-6"
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.88rem",
                  fontWeight: 500,
                  color: "#1A2826",
                  margin: "0 0 0.2rem",
                }}
              >
                Ready to order?
              </p>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.82rem",
                  fontWeight: 300,
                  color: "#6A7B78",
                  margin: 0,
                }}
              >
                Call or text Anna to discuss your event — she handles every
                order personally, start to finish.
              </p>
            </div>
            <a
              href={PHONE_HREF}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "0.75rem 1.5rem",
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.82rem",
                fontWeight: 500,
                letterSpacing: "0.04em",
                color: "#F5EEE0",
                backgroundColor: "#1C5955",
                whiteSpace: "nowrap",
                flexShrink: 0,
                transition: "background-color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#103733")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1C5955")}
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="currentColor" aria-hidden="true">
                <path d="M11.5 8.8c0 .2-.04.4-.13.59a2.5 2.5 0 01-.38.57c-.24.26-.49.44-.77.55a2.4 2.4 0 01-.93.18c-.48 0-1-.11-1.55-.33a11.9 11.9 0 01-1.6-.87A11.9 11.9 0 014.1 7.4a12.1 12.1 0 01-.87-1.59c-.22-.54-.33-1.06-.33-1.55 0-.32.06-.63.17-.92.11-.3.28-.56.52-.8.27-.27.56-.4.87-.4.12 0 .23.02.34.07.11.05.21.13.29.25L6.6 4.6c.08.11.14.22.18.32.04.1.06.19.06.27 0 .1-.03.2-.09.3a1.6 1.6 0 01-.23.3l-.32.34a.22.22 0 00-.06.17c0 .03 0 .06.02.1l.04.09c.08.14.21.33.42.57.21.24.44.47.68.7.25.23.49.44.73.62.23.19.42.32.57.41l.08.04a.44.44 0 00.1.01.23.23 0 00.17-.07l.34-.34c.1-.11.2-.19.3-.24a.6.6 0 01.3-.08c.09 0 .18.02.27.06.1.04.2.1.31.19l2.1 1.33c.11.07.19.17.24.28.04.12.07.24.07.37z"/>
              </svg>
              Call or Text: {PHONE_DISPLAY}
            </a>
          </div>
        </FadeUp>

        </div>{/* end centered column */}
      </div>
    </section>
  );
}
