"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="pb-20 md:pb-8"
      style={{
        backgroundColor: "#1A2826",
        borderTop: "1px solid rgba(245,238,224,0.07)",
        padding: "2rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
        }}
        className="sm:flex-row sm:items-center sm:justify-between"
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#A8C8C5",
            }}
          >
            OSHKHANA
          </span>
          <span
            style={{
              width: "3px",
              height: "3px",
              borderRadius: "50%",
              backgroundColor: "#3D5250",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "0.72rem",
              fontStyle: "italic",
              color: "#BE5B34",
              opacity: 0.8,
            }}
          >
            by Anna Khanum
          </span>
        </div>

        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.25rem",
            alignItems: "center",
          }}
        >
          {[
            { label: "Menu", href: "#menu" },
            { label: "Catering", href: "#catering" },
            { label: "About", href: "#about" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.78rem",
                fontWeight: 400,
                color: "#5E7472",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#A8C8C5")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#5E7472")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "0.7rem",
            fontWeight: 300,
            color: "#3D5250",
            margin: 0,
          }}
        >
          &copy; {year} &middot; Dallas, Texas
        </p>
      </div>
    </footer>
  );
}
