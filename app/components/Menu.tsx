"use client";

import FadeUp from "./FadeUp";

const dishes = [
  {
    name: "Plov",
    origin: "Uzbek",
    description:
      "Slow-cooked basmati rice with tender lamb, caramelized carrots, and whole garlic — the centerpiece of Uzbek hospitality. Prepared in a kazan over an open flame.",
  },
  {
    name: "Manty",
    origin: "Uzbek",
    description:
      "Steamed dumplings filled with seasoned lamb and onion, folded by hand and served with cool yogurt and a drizzle of chili oil.",
  },
  {
    name: "Lagman",
    origin: "Uyghur",
    description:
      "Hand-pulled noodles in a rich lamb and vegetable broth with cumin and tomato. A staple of Uyghur cuisine — hearty, aromatic, and deeply satisfying.",
  },
  {
    name: "Soza",
    origin: "Uyghur",
    description:
      "Uyghur-style cold noodles tossed in a tangy, savory sauce with fresh vegetables. Light, refreshing, and perfect alongside heavier dishes.",
  },
  {
    name: "Chicken Karahi",
    origin: "Pakistani",
    description:
      "Bone-in chicken finished in a tomato-based masala with fresh ginger, green chili, and coriander. Bold and fragrant — made the way it should be.",
  },
  {
    name: "Seekh Kebabs",
    origin: "Pakistani",
    description:
      "Minced beef and lamb blended with herbs and spice, hand-formed onto skewers and grilled over charcoal. Served with mint chutney.",
  },
  {
    name: "Biryani",
    origin: "Pakistani",
    description:
      "Long-grain rice layered with slow-cooked meat and whole spices, sealed and finished dum-style. Fragrant, full-flavored, made for a gathering.",
  },
];

export default function Menu() {
  return (
    <section
      id="menu"
     
      style={{
        padding: "7rem 1.5rem",
        backgroundColor: "#F5EEE0",
      }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        {/* Section header */}
        <FadeUp>
          <div style={{ marginBottom: "4rem" }}>
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
                Sample Menu
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
                maxWidth: "400px",
                margin: 0,
              }}
            >
              A curated selection from our catering menu. Full menus are shaped
              around your event — reach out to discuss.
            </p>
          </div>
        </FadeUp>

        {/* Dish list — editorial table style */}
        <div
          style={{
            borderTop: "1px solid #D0C4AD",
          }}
        >
          {dishes.map((dish, i) => (
            <FadeUp key={dish.name} delay={i * 0.06}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  alignItems: "start",
                  gap: "1.5rem",
                  padding: "1.75rem 0",
                  borderBottom: "1px solid #E2D9C8",
                  cursor: "default",
                }}
                className="group"
              >
                {/* Left: name + desc */}
                <div
                  style={{ display: "grid", gap: "0.5rem", alignItems: "start" }}
                  className="sm:grid-cols-[minmax(140px,200px)_1fr] sm:gap-8"
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-playfair)",
                        fontSize: "1.2rem",
                        fontWeight: 500,
                        color: "#1A2826",
                        margin: 0,
                        lineHeight: 1.2,
                        transition: "color 0.2s",
                      }}
                      className="group-hover:text-[#1C5955]"
                    >
                      {dish.name}
                    </h3>
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "0.88rem",
                      fontWeight: 300,
                      lineHeight: 1.72,
                      color: "#3D5250",
                      margin: 0,
                    }}
                  >
                    {dish.description}
                  </p>
                </div>

                {/* Right: origin tag */}
                <div style={{ paddingTop: "2px" }}>
                  <span
                    style={{
                      display: "inline-block",
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "0.6rem",
                      fontWeight: 500,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      padding: "0.2rem 0.55rem",
                      color:
                        dish.origin === "Pakistani" ? "#BE5B34"
                        : dish.origin === "Uyghur" ? "#7A5C2E"
                        : "#1C5955",
                      border: `1px solid ${
                        dish.origin === "Pakistani" ? "#BE5B3450"
                        : dish.origin === "Uyghur" ? "#7A5C2E50"
                        : "#1C595550"
                      }`,
                      backgroundColor:
                        dish.origin === "Pakistani" ? "#BE5B3408"
                        : dish.origin === "Uyghur" ? "#7A5C2E08"
                        : "#1C595508",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {dish.origin}
                  </span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Inline CTA after menu */}
        <FadeUp delay={0.15}>
          <div
            style={{
              marginTop: "2.5rem",
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
                Like what you see?
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
                Menus are customized for your event. Call or text to discuss.
              </p>
            </div>
            <a
              href="tel:+1XXXXXXXXXX"
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
              Call or Text to Order
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
