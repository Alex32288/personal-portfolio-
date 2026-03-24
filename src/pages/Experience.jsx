import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import profilePhoto from "../assets/profile.jpeg";


const PRIMARY = "#00b894";

const NAV_LINKS = [
  { label: "Home",       to: "/"           },
  { label: "Projects",   to: "/project"    },
  { label: "Experience", to: "/experience" },
];

const EDUCATION = [
  {
    title: "Cisco Network Certification", 
    company: "Cisco Networking Academy", icon: "verified_user", active: true,
    bullets: [
      "Comprehensive training in network fundamentals and advanced routing protocols",
      "Hands-on experience with Cisco equipment and network configuration",
      "Proficiency in networking concepts, security, and data transmission",
    ],
  },
];

const FEATURED_PROJECTS = [
  { title: "TODO LIST APPLICATION", tech: "Python, Flask", desc: "Task management with SQLite database" },
  { title: "WEATHER FORECAST APP", tech: "JavaScript, React", desc: "Real-time weather with API integration" },
  { title: "EXPENSE TRACKER", tech: "C#, .NET", desc: "Desktop app with financial reports" },
  { title: "FILE MANAGER", tech: "C++, Qt", desc: "Lightweight file browser with search" },
  { title: "PORTFOLIO WEBSITE", tech: "JavaScript, HTML/CSS", desc: "Responsive portfolio with animations" },
];

const SKILL_GROUPS = [
  { icon: "desktop_windows", label: "Frontend", skills: ["React.js", "JavaScript", "HTML/CSS", "TypeScript"] },
  { icon: "storage",         label: "Backend",  skills: ["Python", "Flask", "C#", ".NET", "C++", "Qt", "Node.js", "Express"] },
  { icon: "database",        label: "Databases", skills: ["SQLite", "PostgreSQL", "MongoDB", "Firebase"] },
  { icon: "build",           label: "Tools",    skills: ["Git", "Visual Studio"] },
];



export default function Experience() {
  const [theme, setTheme] = useState("dark");
  const navigate = useNavigate();

  const dark    = theme === "dark";
  const bg      = dark ? "#110d1a" : "#f7f6f8";
  const surface = dark ? "#1a1525" : "#ffffff";
  const border  = dark ? "rgba(0,184,148,0.14)" : "#e2e8f0";
  const text    = dark ? "#f1f5f9" : "#0f172a";
  const muted   = dark ? "#64748b" : "#64748b";
  const subtle  = dark ? "#1e293b" : "#f1f5f9";

  return (
    <div style={{ fontFamily: "Inter, sans-serif", backgroundColor: bg, color: text, minHeight: "100vh", display: "flex", flexDirection: "column", width: "100%" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .material-symbols-outlined { font-family:'Material Symbols Outlined'; font-weight:normal; font-style:normal; font-size:24px; line-height:1; display:inline-block; white-space:nowrap; -webkit-font-smoothing:antialiased; }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root { width: 100%; min-height: 100vh; }
        .exp-scroll::-webkit-scrollbar { width: 4px; }
        .exp-scroll::-webkit-scrollbar-thumb { background: rgba(0,184,148,0.25); border-radius: 6px; }
        .skill-tag { transition: border-color 0.18s, color 0.18s; cursor: default; }
        .skill-tag:hover { border-color: ${PRIMARY} !important; color: ${PRIMARY} !important; }
        .cta-outline { transition: all 0.18s; }
        .cta-outline:hover { background: ${PRIMARY} !important; color: #fff !important; }
        .footer-a { text-decoration: none; transition: color 0.18s; }
        .footer-a:hover { color: ${PRIMARY} !important; }
        .timeline-item:last-child { padding-bottom: 0; }
      `}</style>

      <Navbar
        logo={{ text: "ALEX KIAMBUTHI GICHANA", icon: "terminal" }}
        links={NAV_LINKS}
        ctaLabel="Ready to collaborate"
        ctaIcon="handshake"
        theme={theme}
        onThemeToggle={() => setTheme(t => t === "dark" ? "light" : "dark")}
        avatarSrc={profilePhoto}
      />

      <main className="exp-scroll" style={{ flex: 1, overflowY: "auto", padding: "56px 24px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Page Header */}
          <div style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, letterSpacing: "-0.04em", marginBottom: 14 }}>
              Experience & <span style={{ color: PRIMARY }}>Skills</span>
            </h2>
            <p style={{ fontSize: 17, color: muted, maxWidth: 560, lineHeight: 1.75 }}>
             Software developer and emerging ML & AI engineer with experience in scalable Full-stack systems & ML applications. Combines strong technical execution with leadership in mentorship initiatives.
            </p>
          </div>

          {/* Two-column layout: Timeline | Skills */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>

            {/* ── Timeline ── */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 32 }}>
                <span style={{ width: 28, height: 2, backgroundColor: PRIMARY, display: "block", borderRadius: 9999 }} />
                <h3 style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.22em", color: PRIMARY }}>Education & Certifications</h3>
              </div>

              <div style={{ position: "relative", borderLeft: `2px solid ${border}`, marginLeft: 8 }}>
                {EDUCATION.map(({ title, period, company, icon, active, bullets, text: bodyText }) => (
                  <div key={title} className="timeline-item" style={{ position: "relative", paddingLeft: 28, paddingBottom: 40 }}>
                    {/* Dot */}
                    <div style={{ position: "absolute", left: -8, top: 5, width: 14, height: 14, borderRadius: "50%", backgroundColor: active ? PRIMARY : "rgba(0,184,148,0.3)", border: `3px solid ${bg}`, transition: "background 0.2s" }} />

                    {/* Title + period */}
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 6, marginBottom: 6 }}>
                      <h4 style={{ fontSize: 16, fontWeight: 700, color: text }}>{title}</h4>
                      {period && (
                        <span style={{ fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 9999, backgroundColor: active ? "rgba(0,184,148,0.12)" : subtle, color: active ? PRIMARY : muted, border: active ? "1px solid rgba(0,184,148,0.22)" : "none" }}>
                          {period}
                        </span>
                      )}
                    </div>

                    {/* Company */}
                    <p style={{ fontSize: 13, fontWeight: 600, color: "#a5b4c8", marginBottom: 12, display: "flex", alignItems: "center", gap: 5 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 13, color: PRIMARY }}>{icon}</span>
                      {company}
                    </p>

                    {/* Bullets or text */}
                    {bullets ? (
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                        {bullets.map(b => (
                          <li key={b} style={{ display: "flex", gap: 8, fontSize: 13, color: muted, lineHeight: 1.65 }}>
                            <span style={{ color: PRIMARY, fontSize: 8, marginTop: 5, flexShrink: 0 }}>●</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p style={{ fontSize: 13, color: muted, lineHeight: 1.65 }}>{bodyText}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* ── Skills ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 28, height: 2, backgroundColor: PRIMARY, display: "block", borderRadius: 9999 }} />
                <h3 style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.22em", color: PRIMARY }}>Technical Proficiency</h3>
              </div>

              {/* Featured Projects */}
              <div style={{ backgroundColor: "rgba(0,184,148,0.06)", padding: 24, borderRadius: 12, border: `1px solid rgba(0,184,148,0.12)` }}>
                <p style={{ fontSize: 9, fontWeight: 800, color: PRIMARY, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 18 }}>Featured Projects</p>
                {FEATURED_PROJECTS.map(({ title, tech, desc }) => (
                  <div key={title} style={{ marginBottom: 16, paddingBottom: 16, borderBottom: `1px solid ${border}` }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                      <h5 style={{ fontSize: 13, fontWeight: 700, color: text, maxWidth: "70%" }}>{title}</h5>
                    </div>
                    <p style={{ fontSize: 11, color: PRIMARY, fontWeight: 600, marginBottom: 4 }}>{tech}</p>
                    <p style={{ fontSize: 12, color: muted, lineHeight: 1.5 }}>{desc}</p>
                  </div>
                ))}
              </div>

              {/* Skill tag groups */}
              {SKILL_GROUPS.map(({ icon, label, skills }) => (
                <div key={label}>
                  <p style={{ fontSize: 10, fontWeight: 700, color: muted, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 10, display: "flex", alignItems: "center", gap: 6 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 13 }}>{icon}</span>
                    {label}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                    {skills.map(s => (
                      <span key={s} className="skill-tag"
                        style={{ padding: "6px 12px", fontSize: 12, fontWeight: 500, borderRadius: 6, backgroundColor: surface, border: `1px solid ${border}`, color: muted }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Banner */}
          <div style={{ marginTop: 64, padding: 32, borderRadius: 14, background: `linear-gradient(120deg, rgba(0,184,148,0.18) 0%, transparent 100%)`, border: `1px solid rgba(0,184,148,0.15)`, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
            <div>
              <h4 style={{ fontSize: 20, fontWeight: 700, color: text, marginBottom: 6 }}>Want to see my code in action?</h4>
              <p style={{ color: muted, fontSize: 14 }}>Explore my portfolio of architectural designs and full-stack projects.</p>
            </div>
            <button className="cta-outline" onClick={() => navigate("/project")}
              style={{ padding: "12px 24px", borderRadius: 8, border: `2px solid ${PRIMARY}`, color: PRIMARY, backgroundColor: "transparent", fontWeight: 700, cursor: "pointer", fontSize: 14, whiteSpace: "nowrap" }}>
              View Projects Catalog
            </button>
          </div>

          {/* Footer */}
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
      </main>
    </div>
  );
}