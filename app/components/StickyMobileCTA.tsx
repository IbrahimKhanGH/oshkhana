"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PHONE_HREF = "tel:+1XXXXXXXXXX";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="md:hidden"
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 49,
            padding: "0.65rem 1rem",
            paddingBottom: "calc(0.65rem + env(safe-area-inset-bottom, 0px))",
            backgroundColor: "rgba(26,40,38,0.96)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderTop: "1px solid rgba(245,238,224,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.75rem",
          }}
        >
          <div style={{ minWidth: 0 }}>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.78rem",
                fontWeight: 500,
                color: "#F5EEE0",
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              Ready to order?
            </p>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.66rem",
                fontWeight: 300,
                color: "#A8C8C5",
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              Call or text Anna directly
            </p>
          </div>
          <a
            href={PHONE_HREF}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "0.7rem 1.25rem",
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.82rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
              color: "#1A2826",
              backgroundColor: "#F5EEE0",
              borderRadius: "999px",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
              <path d="M12.5 9.5c0 .22-.05.44-.15.65a2.7 2.7 0 01-.42.62c-.25.28-.52.47-.82.59a2.6 2.6 0 01-1 .19c-.52 0-1.08-.12-1.67-.36A12.9 12.9 0 016.8 9.96a12.9 12.9 0 01-2.22-2.2A13.1 13.1 0 013.25 5.5c-.23-.57-.35-1.12-.35-1.63 0-.34.06-.67.18-.98A2.5 2.5 0 013.6 2c.26-.27.56-.4.88-.4.12 0 .24.02.35.07.12.05.23.14.32.27l1.6 2.25c.09.12.15.23.2.34.04.1.07.19.07.28 0 .11-.03.22-.1.33-.06.1-.14.21-.25.31l-.35.37a.24.24 0 00-.07.18c0 .04 0 .07.02.11l.05.1c.08.15.23.36.46.62.23.25.48.51.74.76.27.25.53.49.79.69.25.21.46.35.62.44l.09.04a.48.48 0 00.12.02.25.25 0 00.19-.08l.36-.37c.11-.12.22-.2.32-.26.1-.06.21-.09.33-.09.09 0 .19.02.3.07.1.04.22.11.34.2l2.28 1.44c.13.09.22.19.27.31.05.12.07.25.07.39z"/>
            </svg>
            Call Now
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
