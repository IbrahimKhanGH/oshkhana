"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#1A2826",
        borderTop: "1px solid rgba(245,238,224,0.07)",
        padding: "3.5rem 1.5rem 2.5rem",
      }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2.5rem",
            marginBottom: "3rem",
          }}
          className="md:grid-cols-3"
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: "0.75rem" }}>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#A8C8C5",
                  margin: 0,
                }}
              >
                OSHKHANA
              </p>
              <p
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "0.7rem",
                  fontStyle: "italic",
                  letterSpacing: "0.08em",
                  color: "#BE5B34",
                  margin: "3px 0 0",
                  opacity: 0.85,
                }}
              >
                by Anna Khanum
              </p>
            </div>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.82rem",
                fontWeight: 300,
                lineHeight: 1.7,
                color: "#5E7472",
                maxWidth: "240px",
                margin: "0 0 0.6rem",
              }}
            >
              Pakistani &amp; Uzbek catering, prepared with care for every
              gathering.
            </p>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.75rem",
                fontWeight: 300,
                color: "#3D5250",
                margin: 0,
              }}
            >
              Dallas, Texas
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#3D5250",
                margin: "0 0 1.1rem",
              }}
            >
              Navigate
            </p>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { label: "Sample Menu", href: "#menu" },
                { label: "Catering", href: "#catering" },
                { label: "About", href: "#about" },
                { label: "Request Catering", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.88rem",
                    fontWeight: 300,
                    color: "#5E7472",
                    transition: "color 0.2s",
                    padding: "0.35rem 0",
                    minHeight: "44px",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#A8C8C5")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#5E7472")}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#3D5250",
                margin: "0 0 1.1rem",
              }}
            >
              Contact
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              <a
                href="mailto:hello@oshkhana.com"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.84rem",
                  fontWeight: 300,
                  color: "#5E7472",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#A8C8C5")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#5E7472")}
              >
                hello@oshkhana.com
              </a>
              <a
                href="tel:+12145550000"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.84rem",
                  fontWeight: 300,
                  color: "#5E7472",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#A8C8C5")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#5E7472")}
              >
                (214) 555-0000
              </a>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.84rem",
                  fontWeight: 300,
                  color: "#3D5250",
                  margin: 0,
                }}
              >
                Dallas &ndash; Fort Worth, TX
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(245,238,224,0.07)",
            paddingTop: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            alignItems: "flex-start",
          }}
          className="sm:flex-row sm:items-center sm:justify-between"
        >
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.74rem",
              fontWeight: 300,
              color: "#3D5250",
              margin: 0,
            }}
          >
            &copy; {year} OSHKHANA by Anna Khanum. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.74rem",
              fontWeight: 300,
              color: "#3D5250",
              margin: 0,
            }}
          >
            Dallas, Texas
          </p>
        </div>
      </div>
    </footer>
  );
}
