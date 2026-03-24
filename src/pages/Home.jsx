import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import profilePhoto from "../assets/profile.jpeg";
import CV from "../assets/Alex_Kiambuthi_CV.pdf";
const PRIMARY = "#00b894";

const NAV_LINKS = [
  { label: "Home",      to: "/"           },
  { label: "Projects",       to: "/project"   },
  { label: "Experience", to: "/experience" },
];

const TECH = [
  { icon: "code",      label: "React"      },
  { icon: "code",      label: "JavaScript"    },
  { icon: "code",      label: "Python"     },
  { icon: "code",      label: "C#"        },
  { icon: "code",      label: "C++"        },
  { icon: "terminal",  label: "Flask"    },
  { icon: "terminal",  label: "Node.js"    },
  { icon: "storage",   label: "PostgreSQL" },
  { icon: "storage",   label: "SQLite" },
  { icon: "storage",   label: "MongoDB" },
  { icon: "storage",   label: "Firebase"  },
  { icon: "build",     label: "Git/GitHub" },
];

const CARDS = [
  { 
  icon: "insights",        
  title: "Analytical and results-driven",  
  desc: "A strong passion for numbers and structured thinking. I approach problems analytically, break them down efficiently and build solutions that are both technically sound and business-focused." 
},
{ 
  icon: "code", 
  title: "Backend development expertise",    
  desc: "Experienced in building scalable backend systems using the MERN stack. Comfortable designing APIs, managing databases, implementing CRUD operations, and integrating payments and real-world business logic." 
},
{ 
  icon: "groups",     
  title: "Team collaboration",  
  desc: "Strong communicator with experience working in teams, managing responsibilities and refining projects through peer feedback. I thrive in collaborative environments and contribute beyond just writing code." 
}
];

export default function Home() {
  const [theme, setTheme] = useState("dark");
  const navigate = useNavigate();

  const dark    = theme === "dark";
  const bg      = dark ? "#0a0a0c" : "#f7f6f8";
  const surface = dark ? "#131316" : "#ffffff";
  const border  = dark ? "#1f1f23" : "#e2e8f0";
  const text    = dark ? "#f1f5f9" : "#0f172a";
  const muted   = dark ? "#64748b" : "#64748b";

  return (
    <div style={{ fontFamily: "Inter, sans-serif", backgroundColor: bg, color: text, minHeight: "100vh", display: "flex", flexDirection: "column", width: "100%" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .material-symbols-outlined { font-family:'Material Symbols Outlined'; font-weight:normal; font-style:normal; font-size:24px; line-height:1; display:inline-block; white-space:nowrap; -webkit-font-smoothing:antialiased; }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root { width: 100%; min-height: 100vh; }

        @keyframes gpulse   { 0%,100%{opacity:1} 50%{opacity:.4} }
        @keyframes floatImg { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-10px)} }
        @keyframes ringPing { 0%{transform:scale(1);opacity:0.6} 100%{transform:scale(1.12);opacity:0} }

        .cta-primary { transition: box-shadow 0.2s; }
        .cta-primary:hover { box-shadow: 0 0 28px rgba(0,184,148,0.45); }
        .cta-secondary:hover { background: rgba(0,184,148,0.06) !important; }
        .tech-chip { opacity: 0.55; transition: opacity 0.2s; }
        .tech-chip:hover { opacity: 1; }
        .phi-card { transition: border-color 0.2s, transform 0.2s; }
        .phi-card:hover { border-color: rgba(0,184,148,0.5) !important; transform: translateY(-2px); }
        .footer-a { transition: color 0.18s; text-decoration: none; }
        .footer-a:hover { color: ${PRIMARY} !important; }
        .profile-img { animation: floatImg 5s ease-in-out infinite; }
        .profile-ring { animation: ringPing 2.5s ease-out infinite; }

        @media (max-width: 768px) {
          .hero-layout { flex-direction: column !important; text-align: center !important; }
          .hero-text { align-items: center !important; }
          .hero-ctas { justify-content: center !important; }
          .profile-wrap { margin: 0 auto 32px !important; }
        }
      `}</style>

      {/* Ambient glow */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(0,184,148,0.1) 0%, transparent 70%)", zIndex: 0 }} />

      <Navbar
        logo={{ text: "ALEX KIAMBUTHI GICHANA", icon: "terminal" }}
        links={NAV_LINKS}
        ctaLabel="Ready to collaborate"
        ctaIcon="handshake"
        theme={theme}
        onThemeToggle={() => setTheme(t => t === "dark" ? "light" : "dark")}
        avatarSrc={profilePhoto}
      />

      {/* ── Hero ── */}
      <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 10, padding: "80px 40px 60px" }}>
        <div style={{ maxWidth: 1100, width: "100%" }}>

          {/* Two-column: text left, photo right */}
          <div className="hero-layout" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 64, marginBottom: 80 }}>

            {/* ── Left: text content ── */}
            <div className="hero-text" style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>

              {/* Badge */}
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 14px", borderRadius: 9999, border: "1px solid rgba(0,184,148,0.25)", backgroundColor: "rgba(0,184,148,0.06)", color: PRIMARY, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 28 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: PRIMARY, display: "inline-block", animation: "gpulse 2s infinite" }} />
                Open for collaborations and opportunities
              </div>

              {/* Headline */}
              <h1 style={{ fontSize: "clamp(34px, 5vw, 64px)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 1.08, color: text, marginBottom: 22 }}>
                Full-Stack Developer Creating  <br />
                 elegant solutions across {" "}
                <span style={{ color: PRIMARY }}>multiple languages</span><br />
               and platforms.
              </h1>

              {/* Subtitle */}
              <p style={{ fontSize: "clamp(14px, 1.5vw, 17px)", color: muted, maxWidth: 520, lineHeight: 1.78, marginBottom: 40 }}>
                Information Technology professional with a strong foundation in software engineering and machine learning. Passionate about advancing secure computing systems. Experienced in contributing to research-driven projects, developing scalable backend systems and communicating technical insights effectively.

              </p>

              {/* CTAs */}
              <div className="hero-ctas" style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
                <a
  href="/project"
  className="cta-primary"
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "0 30px",
    height: 52,
    borderRadius: 6,
    backgroundColor: PRIMARY,
    color: "#fff",
    fontWeight: 700,
    fontSize: 16,
    textDecoration: "none"
  }}
>
  <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
    folder_open
  </span>
  View Work
</a>
                <a
   href={CV} download
  className="cta-secondary"
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "0 30px",
    height: 52,
    borderRadius: 6,
    border: `2px solid ${border}`,
    backgroundColor: "transparent",
    color: text,
    fontWeight: 700,
    fontSize: 16,
    textDecoration: "none",
    cursor: "pointer"
  }}
>
  <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
    description
  </span>
  Download CV
</a>
              </div>
            </div>

            {/* ── Right: profile photo ── */}
            <div className="profile-wrap" style={{ flexShrink: 0, position: "relative", width: 320, height: 320 }}>

              {/* Outer decorative pulsing ring */}
              <div className="profile-ring" style={{ position: "absolute", inset: -12, borderRadius: "50%", border: "2px solid rgba(0,184,148,0.35)" }} />

              {/* Static ring */}
              <div style={{ position: "absolute", inset: -6, borderRadius: "50%", border: "1px solid rgba(0,184,148,0.18)" }} />

              {/* Glow blob behind image */}
              <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "radial-gradient(circle at center, rgba(0,184,148,0.25) 0%, transparent 70%)", filter: "blur(20px)" }} />

              {/* Photo */}
              <img
                src={profilePhoto}
                alt="Profile"
                className="profile-img"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "top",
                  border: `3px solid rgba(0,184,148,0.5)`,
                  position: "relative",
                  zIndex: 1,
                  boxShadow: "0 0 40px rgba(0,184,148,0.28), 0 20px 60px rgba(0,0,0,0.4)",
                }}
              />

              {/* Status badge on photo */}
              <div style={{ position: "absolute", bottom: 16, right: 8, zIndex: 2, display: "flex", alignItems: "center", gap: 6, backgroundColor: dark ? "#131316" : "#fff", border: `1px solid ${border}`, borderRadius: 9999, padding: "6px 12px", fontSize: 11, fontWeight: 700, color: text, boxShadow: "0 4px 12px rgba(0,0,0,0.3)" }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: "#10b981", display: "inline-block", animation: "gpulse 2s infinite" }} />
                Open to work
              </div>
            </div>
          </div>

          {/* Tech strip */}
          <div style={{ borderTop: `1px solid ${border}`, paddingTop: 40 }}>
            <p style={{ fontSize: 10, fontWeight: 700, color: muted, textTransform: "uppercase", letterSpacing: "0.22em", marginBottom: 24, textAlign: "center" }}>Core Technical Stack</p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px 36px" }}>
              {TECH.map(({ icon, label }) => (
                <div key={label} className="tech-chip" style={{ display: "flex", alignItems: "center", gap: 7, color: text }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{icon}</span>
                  <span style={{ fontWeight: 700, fontSize: 14 }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* ── Philosophy cards ── */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px 80px", width: "100%", position: "relative", zIndex: 10 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 22 }}>
          {CARDS.map(({ icon, title, desc }) => (
            <div key={title} className="phi-card"
              style={{ padding: 32, borderRadius: 10, backgroundColor: surface, border: `1px solid ${border}` }}>
              <div style={{ width: 46, height: 46, borderRadius: 8, backgroundColor: "rgba(0,184,148,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: PRIMARY, marginBottom: 20 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 22 }}>{icon}</span>
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: text, marginBottom: 10 }}>{title}</h3>
              <p style={{ fontSize: 14, color: muted, lineHeight: 1.72 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ borderTop: `1px solid ${border}`, padding: "32px 40px", backgroundColor: dark ? "rgba(19,19,22,0.6)" : "#f1f5f9", position: "relative", zIndex: 10 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <p style={{ fontSize: 13, color: muted }}>© 2026 Alex Kiambuthi gichana. All rights reserved.</p>
         <div style={{ display: "flex", gap: 24 }}>
  {[
    { 
      icon: "mail", 
      label: "Email", 
      href: "mailto:kiambuthialex3@gmail.com" 
    }
  ].map(({ icon, label, href }) => (
    <a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="footer-a"
      style={{
        color: muted,
        display: "flex",
        alignItems: "center",
        gap: 5,
        fontSize: 13,
        textDecoration: "none"
      }}
    >
      <span
        className="material-symbols-outlined"
        style={{ fontSize: 16 }}
      >
        {icon}
      </span>
      {label}
    </a>
  ))}
</div>
        </div>
      </footer>
    </div>
  );
}