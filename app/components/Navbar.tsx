"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Catering", href: "#catering" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const showSolidHeader = scrolled || menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        position: "fixed",
        top: "1rem",
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "0 1rem",
      }}
    >
      <div
        className="max-w-6xl mx-auto px-5 lg:px-8"
        style={{
          transition: "background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s ease",
          backgroundColor: showSolidHeader ? "rgba(245,238,224,0.94)" : "rgba(245,238,224,0.72)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: showSolidHeader ? "1px solid rgba(208,196,173,0.95)" : "1px solid rgba(208,196,173,0.55)",
          boxShadow: showSolidHeader ? "0 18px 40px rgba(28,89,85,0.12)" : "0 14px 30px rgba(28,89,85,0.08)",
          borderRadius: menuOpen ? "1.5rem" : "999px",
          transform: showSolidHeader ? "translateY(0)" : "translateY(4px)",
        }}
      >
        <div className="flex items-center justify-between min-h-[62px] md:min-h-[86px]">

          {/* Logo + wordmark lockup */}
          <a
            href="#"
            aria-label="OSHKHANA home"
            style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}
          >
            <Image
              src="/logo.png"
              alt="OSHKHANA logo"
              width={52}
              height={52}
              priority
              className="w-10 h-10 md:w-[52px] md:h-[52px]"
              style={{
                borderRadius: "10px",
                flexShrink: 0,
                transition: "width 0.25s ease, height 0.25s ease, opacity 0.2s",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: scrolled ? "0.74rem" : "0.82rem",
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#1C5955",
                  transition: "font-size 0.25s ease",
                }}
              >
                OSHKHANA
              </span>
              <span
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: scrolled ? "0.68rem" : "0.78rem",
                  letterSpacing: "0.12em",
                  fontStyle: "italic",
                  color: "#A14A29",
                  marginTop: "4px",
                  transition: "font-size 0.25s ease",
                }}
              >
                by Anna Khanum
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center" style={{ gap: "2.1rem" }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  letterSpacing: "0.03em",
                  color: "#1A2826",
                  position: "relative",
                  paddingBottom: "3px",
                  transition: "color 0.2s ease, transform 0.2s ease",
                }}
                className="group"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#1C5955";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#1A2826";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {link.label}
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: 0,
                    height: "2px",
                    backgroundColor: "#1C5955",
                    transition: "width 0.25s ease",
                  }}
                  className="group-hover:w-full"
                />
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            {/* Phone CTA — primary */}
            <a
              href="tel:+1XXXXXXXXXX"
              className="hidden md:inline-flex items-center gap-2"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.82rem",
                fontWeight: 500,
                letterSpacing: "0.04em",
                color: "#F5EEE0",
                backgroundColor: "#1C5955",
                padding: "0.72rem 1.25rem",
                borderRadius: "999px",
                boxShadow: "0 8px 20px rgba(28,89,85,0.16)",
                transition: "background-color 0.2s ease, box-shadow 0.2s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#103733";
                e.currentTarget.style.boxShadow = "0 12px 24px rgba(16,55,51,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#1C5955";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(28,89,85,0.16)";
              }}
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="currentColor" aria-hidden="true">
                <path d="M11.5 8.8c0 .2-.04.4-.13.59a2.5 2.5 0 01-.38.57c-.24.26-.49.44-.77.55a2.4 2.4 0 01-.93.18c-.48 0-1-.11-1.55-.33a11.9 11.9 0 01-1.6-.87A11.9 11.9 0 014.1 7.4a12.1 12.1 0 01-.87-1.59c-.22-.54-.33-1.06-.33-1.55 0-.32.06-.63.17-.92.11-.3.28-.56.52-.8.27-.27.56-.4.87-.4.12 0 .23.02.34.07.11.05.21.13.29.25L6.6 4.6c.08.11.14.22.18.32.04.1.06.19.06.27 0 .1-.03.2-.09.3a1.6 1.6 0 01-.23.3l-.32.34a.22.22 0 00-.06.17c0 .03 0 .06.02.1l.04.09c.08.14.21.33.42.57.21.24.44.47.68.7.25.23.49.44.73.62.23.19.42.32.57.41l.08.04a.44.44 0 00.1.01.23.23 0 00.17-.07l.34-.34c.1-.11.2-.19.3-.24a.6.6 0 01.3-.08c.09 0 .18.02.27.06.1.04.2.1.31.19l2.1 1.33c.11.07.19.17.24.28.04.12.07.24.07.37z"/>
              </svg>
              Call / Text
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col justify-center items-center"
              style={{
                width: "44px",
                height: "44px",
                gap: "5px",
                borderRadius: "999px",
                backgroundColor: menuOpen ? "rgba(28,89,85,0.08)" : "transparent",
                transition: "background-color 0.2s ease",
              }}
              aria-label="Toggle menu"
            >
              <span
                style={{
                  display: "block",
                  width: "20px",
                  height: "1px",
                  backgroundColor: "#1A2826",
                  transition: "transform 0.2s, opacity 0.2s",
                  transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "20px",
                  height: "1px",
                  backgroundColor: "#1A2826",
                  transition: "opacity 0.2s",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "20px",
                  height: "1px",
                  backgroundColor: "#1A2826",
                  transition: "transform 0.2s, opacity 0.2s",
                  transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              backgroundColor: "#F5EEE0",
              borderTop: "1px solid #D0C4AD",
              padding: "1.35rem 1.5rem 1.6rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              borderBottomLeftRadius: "1.5rem",
              borderBottomRightRadius: "1.5rem",
              boxShadow: "0 16px 28px rgba(28,89,85,0.08)",
            }}
            className="md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "1.05rem",
                  fontWeight: 500,
                  color: "#1A2826",
                  letterSpacing: "0.02em",
                  padding: "0.5rem 0",
                  minHeight: "44px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+1XXXXXXXXXX"
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.88rem",
                fontWeight: 500,
                letterSpacing: "0.04em",
                color: "#F5EEE0",
                backgroundColor: "#1C5955",
                padding: "0.85rem 1.25rem",
                textAlign: "center",
                marginTop: "0.25rem",
                borderRadius: "999px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              Call or Text to Order
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
