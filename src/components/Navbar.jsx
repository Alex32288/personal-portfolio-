import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const PRIMARY = "#00b894";

const THEMES = {
  dark:  { bg: "rgba(10,10,12,0.95)", border: "#1f1f23", text: "#f1f5f9", muted: "#64748b", surface: "#0f0f12" },
  light: { bg: "rgba(247,246,248,0.95)", border: "#e2e8f0", text: "#0f172a", muted: "#64748b", surface: "#f1f5f9" },
};

export default function Navbar({
  logo = { text: "Alex Kiambuthi gichana", icon: "terminal" },
  links = [],
  ctaLabel = "Ready to collaborate",
  ctaIcon = "handshake",
  onCtaClick,
  theme = "dark",
  onThemeToggle,
  avatarSrc = "",
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const t = THEMES[theme] ?? THEMES.dark;
  const isActive = (to) => location.pathname === to;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-weight: normal; font-style: normal;
          font-size: 24px; line-height: 1;
          display: inline-block; white-space: nowrap;
          -webkit-font-smoothing: antialiased;
        }

        /* ── Link styles ── */
        .nb-link {
          text-decoration: none;
          transition: color 0.18s;
          position: relative;
          padding-bottom: 4px;
          white-space: nowrap;
        }
        .nb-link:hover { color: ${PRIMARY} !important; }
        .nb-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px; left: 0; right: 0;
          height: 2px;
          background: ${PRIMARY};
          border-radius: 9999px;
        }

        /* ── Button hover states ── */
        .nb-cta:hover   { opacity: 0.85 !important; }
        .nb-icon:hover  { border-color: ${PRIMARY} !important; color: ${PRIMARY} !important; }

        /* ── Mobile menu link ── */
        .nb-mob-link {
          text-decoration: none;
          display: block;
          border-radius: 8px;
          transition: background 0.15s, color 0.15s;
        }
        .nb-mob-link:hover {
          background: rgba(0,184,148,0.08) !important;
          color: ${PRIMARY} !important;
        }

        /* ── Dropdown animation ── */
        .nb-dropdown { animation: nbDrop 0.2s ease both; }
        @keyframes nbDrop {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ────────────────────────────────────────
           BREAKPOINTS
           > 900px   → full desktop navbar
           600–900px → hamburger, icon-only CTA
           < 600px   → hamburger only, no CTA/theme
        ──────────────────────────────────────── */

        /* Desktop (>900px) */
        @media (min-width: 901px) {
          .nb-desktop   { display: flex !important; }
          .nb-hamburger { display: none !important; }
          .nb-cta-full  { display: flex !important; }
          .nb-cta-icon  { display: none !important; }
          .nb-theme     { display: flex !important; }
        }

        /* Tablet (600–900px) */
        @media (min-width: 600px) and (max-width: 900px) {
          .nb-desktop   { display: none !important; }
          .nb-hamburger { display: flex !important; }
          .nb-cta-full  { display: none !important; }
          .nb-cta-icon  { display: flex !important; }
          .nb-theme     { display: flex !important; }
        }

        /* Mobile (<600px) */
        @media (max-width: 599px) {
          .nb-desktop   { display: none !important; }
          .nb-hamburger { display: flex !important; }
          .nb-cta-full  { display: none !important; }
          .nb-cta-icon  { display: none !important; }
          .nb-theme     { display: none !important; }
        }
      `}</style>

      <header style={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        width: "100%",
        borderBottom: `1px solid ${t.border}`,
        backgroundColor: t.bg,
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        fontFamily: "Inter, sans-serif",
      }}>

        {/* ── Top bar ── */}
        <div style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 20px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}>

          {/* Logo — no dot-splitting, just display name */}
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0, minWidth: 0 }}>
            <div style={{
              width: 34, height: 34,
              backgroundColor: PRIMARY,
              borderRadius: 7,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", flexShrink: 0,
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{logo.icon}</span>
            </div>
            <span style={{
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: t.text,
              fontSize: "clamp(12px, 2vw, 16px)",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "30vw",
            }}>
              {logo.text}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="nb-desktop" style={{ display: "flex", gap: 32, alignItems: "center", flex: 1, justifyContent: "center" }}>
            {links.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className={`nb-link${isActive(to) ? " active" : ""}`}
                style={{ fontSize: 14, fontWeight: isActive(to) ? 700 : 500, color: isActive(to) ? PRIMARY : t.muted }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right-side controls */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>

            {/* Theme toggle — hidden on mobile */}
            {onThemeToggle && (
              <button
                className="nb-icon nb-theme"
                onClick={onThemeToggle}
                title="Toggle theme"
                style={{
                  width: 34, height: 34,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  borderRadius: 8,
                  border: `1px solid ${t.border}`,
                  backgroundColor: "transparent",
                  color: t.muted,
                  cursor: "pointer",
                  fontSize: 16,
                  transition: "all 0.18s",
                  flexShrink: 0,
                }}
              >
                {theme === "dark" ? "☀" : "🌙"}
              </button>
            )}

            {/* Full CTA — desktop only */}
            <button
              className="nb-cta nb-cta-full"
              onClick={onCtaClick}
              style={{
                display: "flex", alignItems: "center", gap: 6,
                padding: "0 16px", height: 38,
                borderRadius: 6,
                backgroundColor: PRIMARY,
                color: "#fff",
                fontSize: 13, fontWeight: 700,
                border: "none", cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "opacity 0.15s",
                flexShrink: 0,
              }}
            >
              {ctaIcon && <span className="material-symbols-outlined" style={{ fontSize: 15 }}>{ctaIcon}</span>}
              {ctaLabel}
            </button>

            {/* Icon-only CTA — tablet only */}
            <button
              className="nb-cta nb-cta-icon"
              onClick={onCtaClick}
              title={ctaLabel}
              style={{
                width: 38, height: 38,
                display: "flex", alignItems: "center", justifyContent: "center",
                borderRadius: 6,
                backgroundColor: PRIMARY,
                color: "#fff",
                border: "none", cursor: "pointer",
                transition: "opacity 0.15s",
                flexShrink: 0,
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                {ctaIcon || "mail"}
              </span>
            </button>

            {/* Avatar */}
            {avatarSrc && (
              <div style={{
                width: 34, height: 34,
                borderRadius: "50%",
                border: `2px solid rgba(0,184,148,0.45)`,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <img src={avatarSrc} alt="avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            )}

            {/* Hamburger — tablet + mobile */}
            <button
              className="nb-hamburger nb-icon"
              onClick={() => setMenuOpen(o => !o)}
              style={{
                width: 34, height: 34,
                display: "flex", alignItems: "center", justifyContent: "center",
                borderRadius: 8,
                border: `1px solid ${t.border}`,
                backgroundColor: "transparent",
                color: t.muted,
                cursor: "pointer",
                transition: "all 0.18s",
                flexShrink: 0,
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                {menuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* ── Mobile / Tablet dropdown ── */}
        {menuOpen && (
          <div
            className="nb-dropdown"
            style={{
              borderTop: `1px solid ${t.border}`,
              backgroundColor: t.surface,
              padding: "10px 16px 16px",
            }}
          >
            {/* Nav links */}
            {links.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className="nb-mob-link"
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: "12px 14px",
                  marginBottom: 2,
                  fontSize: 15,
                  fontWeight: isActive(to) ? 700 : 500,
                  color: isActive(to) ? PRIMARY : t.muted,
                  backgroundColor: isActive(to) ? "rgba(0,184,148,0.08)" : "transparent",
                }}
              >
                {label}
              </Link>
            ))}

            {/* Divider */}
            <div style={{ height: 1, backgroundColor: t.border, margin: "10px 0" }} />

            {/* CTA — full width in dropdown */}
            <button
              onClick={() => { setMenuOpen(false); onCtaClick?.(); }}
              style={{
                width: "100%",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                padding: "12px",
                borderRadius: 8,
                backgroundColor: PRIMARY,
                color: "#fff",
                fontSize: 14, fontWeight: 700,
                border: "none", cursor: "pointer",
              }}
            >
              {ctaIcon && <span className="material-symbols-outlined" style={{ fontSize: 17 }}>{ctaIcon}</span>}
              {ctaLabel}
            </button>

            {/* Theme toggle in dropdown (mobile only) */}
            {onThemeToggle && (
              <button
                onClick={() => { onThemeToggle(); }}
                style={{
                  width: "100%",
                  marginTop: 8,
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  padding: "10px",
                  borderRadius: 8,
                  border: `1px solid ${t.border}`,
                  backgroundColor: "transparent",
                  color: t.muted,
                  fontSize: 14, fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                {theme === "dark" ? "☀  Switch to Light" : "🌙  Switch to Dark"}
              </button>
            )}
          </div>
        )}
      </header>
    </>
  );
}