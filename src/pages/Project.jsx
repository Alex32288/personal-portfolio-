import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import todoListImg from "../assets/Todo list application.png";
import weatherImg from "../assets/weather forecast app.png";
import expenseImg from "../assets/expense tracker.png";
import fileManagerImg from "../assets/file manger.png";
import portfolioImg from "../assets/portfolio website.jpg";
const PRIMARY = "#00b894";
const SECONDARY = "#00d4ff";

const NAV_LINKS = [
   {label: "Home",      to: "/"           },
  { label: "Projects",   to: "/project"   },
  { label: "Experience", to: "/experience" },
];
const PROJECTS = [
  { tags: ["Python", "Flask"], title: "TODO LIST APPLICATION", badge: "Complete",
    desc: "A simple yet powerful todo list application built with Python and Flask. Features include adding, editing, and deleting tasks with persistent storage using SQLite database.",
    image: todoListImg },
  { tags: ["JavaScript", "React"], title: "WEATHER FORECAST APP", badge: "Complete",
    desc: "Real-time weather application built with JavaScript and React. Displays current weather, 5-day forecast, and weather alerts using OpenWeather API.",
    image: weatherImg },
  { tags: ["C#", ".NET"], title: "EXPENSE TRACKER", badge: "Complete",
    desc: "Desktop expense tracker application built with C# and .NET Framework. Track daily expenses, categorize spending, and generate financial reports with data visualization.",
    image: expenseImg },
  { tags: ["C++", "Qt"], title: "FILE MANAGER", badge: "Complete",
    desc: "A lightweight file manager application built with C++ and Qt. Browse directories, manage files, search functionality, and basic file operations.",
    image: fileManagerImg },
  { tags: ["JavaScript", "HTML/CSS"], title: "PORTFOLIO WEBSITE", badge: "Complete",
    desc: "Responsive portfolio website built with vanilla JavaScript, HTML5, and CSS3. Showcase projects, skills, and contact information with smooth animations.",
    image: portfolioImg },
];

const FILTERS = ["All Projects", "Python", "JavaScript", "C#", "C++", "Flask", "React", ".NET", "Qt"];

export default function Projects() {
  const [filter, setFilter] = useState("All Projects");
  const [theme, setTheme]   = useState("dark");
  const [imageIndices, setImageIndices] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndices(prevIndices => {
        const newIndices = { ...prevIndices };
        PROJECTS.forEach(project => {
          if (project.images && project.images.length > 1) {
            const currentIdx = newIndices[project.title] || 0;
            newIndices[project.title] = (currentIdx + 1) % project.images.length;
          }
        });
        return newIndices;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const dark    = theme === "dark";
  const bg      = dark ? "#090b12" : "#f4f7ff";
  const surface = dark ? "rgba(17,21,32,0.8)" : "rgba(255,255,255,0.82)";
  const border  = dark ? "rgba(0,184,148,0.24)" : "rgba(0,184,148,0.2)";
  const text    = dark ? "#eef2ff" : "#0f172a";
  const muted   = dark ? "#9aa7bd" : "#61708a";
  const bgGradient = dark
    ? "linear-gradient(135deg, #090b12 0%, #0f1020 50%, #0a1128 100%)"
    : "linear-gradient(135deg, #eef4ff 0%, #f8fbff 50%, #eef2ff 100%)";

  const displayed = filter === "All Projects" ? PROJECTS : PROJECTS.filter(p => p.tags.includes(filter));

  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: bgGradient, color: text, minHeight: "100vh", width: "100%", position: "relative", overflow: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .material-symbols-outlined { font-family:'Material Symbols Outlined'; font-weight:normal; font-style:normal; font-size:24px; line-height:1; display:inline-block; white-space:nowrap; -webkit-font-smoothing:antialiased; }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root { width: 100%; min-height: 100vh; }
        @keyframes ping { 75%,100%{transform:scale(2);opacity:0} }
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-12px); } 100% { transform: translateY(0px); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulseGlow { 0%,100% { box-shadow: 0 0 0 0 rgba(18,194,255,0.2); } 50% { box-shadow: 0 0 0 10px rgba(18,194,255,0); } }
        @keyframes shimmer { 0% { transform: translateX(-130%); } 100% { transform: translateX(140%); } }
        .bg-orb { position: absolute; border-radius: 9999px; filter: blur(48px); pointer-events: none; z-index: 0; }
        .proj-card { transition: transform 0.3s ease, border-color 0.25s ease, box-shadow 0.25s ease; backdrop-filter: blur(10px); animation: fadeUp 0.55s ease both; }
        .proj-card:hover { transform: translateY(-6px) scale(1.01); border-color: ${PRIMARY} !important; box-shadow: 0 16px 34px rgba(10, 14, 28, 0.22); }
        .proj-card:hover .card-title { color: ${PRIMARY}; }
        .proj-card .media { transition: transform 0.45s ease; }
        .proj-card:hover .media { transform: scale(1.06); }
        .filter-btn:hover { border-color: ${PRIMARY} !important; color: ${PRIMARY} !important; transform: translateY(-1px); }
        .footer-a { text-decoration: none; transition: color 0.18s; }
        .footer-a:hover { color: ${PRIMARY} !important; }
        .hero-chip { animation: pulseGlow 2.6s infinite; }
        .hero-title-accent { background: linear-gradient(120deg, ${PRIMARY}, ${SECONDARY}); -webkit-background-clip: text; background-clip: text; color: transparent; }
        .shimmer { position: relative; overflow: hidden; }
        .shimmer::after { content: ""; position: absolute; top: 0; left: 0; width: 45%; height: 100%; background: linear-gradient(110deg, transparent, rgba(255,255,255,0.24), transparent); animation: shimmer 2.8s infinite; }
      `}</style>

      <div
        className="bg-orb"
        style={{ width: 260, height: 260, top: -70, right: -90, background: "rgba(0,184,148,0.28)", animation: "float 6s ease-in-out infinite" }}
      />
      <div
        className="bg-orb"
        style={{ width: 210, height: 210, bottom: 120, left: -80, background: "rgba(18,194,255,0.22)", animation: "float 7.5s ease-in-out infinite" }}
      />

      <Navbar
        logo={{ text:"ALEX KIAMBUTHI GICHANA", icon: "terminal" }}
        links={NAV_LINKS}
        ctaLabel="Ready to collaborate"
        ctaIcon="handshake"
        theme={theme}
        onThemeToggle={() => setTheme(t => t === "dark" ? "light" : "dark")}
      />

      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: 44, background: surface, border: `1px solid ${border}`, borderRadius: 18, padding: "26px 24px" }}>
          <div style={{ maxWidth: 600 }}>
            <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, letterSpacing: "-0.04em", marginBottom: 12 }}>Featured <span className="hero-title-accent">Projects</span></h1>
            <p style={{ fontSize: 16, color: muted, lineHeight: 1.72 }}>Projects that reflect my passion for backend engineering, structured problem-solving, and building systems that align with real business needs.</p>
          </div>
          <div className="hero-chip" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 600, color: muted, backgroundColor: dark ? "rgba(13,18,30,0.85)" : "rgba(255,255,255,0.85)", padding: "8px 16px", borderRadius: 9999, border: `1px solid ${border}`, whiteSpace: "nowrap" }}>
            <span style={{ position: "relative", display: "inline-flex", width: 8, height: 8 }}>
              <span style={{ position: "absolute", inset: 0, borderRadius: "50%", backgroundColor: "#10b981", animation: "ping 1.4s infinite" }} />
              <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#10b981", display: "inline-block" }} />
            </span>
            Available for new opportunities
          </div>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36 }}>
          {FILTERS.map(f => (
            <button key={f} className="filter-btn" onClick={() => setFilter(f)}
              style={{ padding: "8px 18px", fontSize: 13, fontWeight: 600, borderRadius: 9999, border: `1px solid ${f === filter ? PRIMARY : border}`, background: f === filter ? `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})` : surface, color: f === filter ? "#fff" : muted, cursor: "pointer", transition: "all 0.2s", boxShadow: f === filter ? "0 10px 24px rgba(0,184,148,0.28)" : "none" }}>
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 24 }}>
          {displayed.map(({ tags, title, desc, image, images, badge, live, github, mediaType }, idx) => {
            const hasMultipleImages = images && images.length > 1;
            const currentImageIndex = imageIndices[title] || 0;
            const currentImage = images ? images[currentImageIndex] : image;
            return (
            <div key={title} className="proj-card"
              style={{ display: "flex", flexDirection: "column", backgroundColor: surface, borderRadius: 16, border: `1px solid ${border}`, overflow: "hidden", animationDelay: `${idx * 90}ms` }}>
              <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                {mediaType === "video" ? (
                  <video
                    src={image}
                    className="media"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <img src={currentImage} alt={title} className="media" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                )}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.24), transparent 60%)", pointerEvents: "none" }} />
                {badge && <span style={{ position: "absolute", top: 10, right: 10, backgroundColor: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)", color: "#fff", fontSize: 9, fontWeight: 700, padding: "4px 8px", borderRadius: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>{badge}</span>}
                {hasMultipleImages && (
                  <div style={{ position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 6 }}>
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setImageIndices({ ...imageIndices, [title]: idx })}
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          border: "none",
                          backgroundColor: idx === currentImageIndex ? PRIMARY : "rgba(255,255,255,0.5)",
                          cursor: "pointer",
                          transition: "all 0.2s"
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
              <div style={{ padding: 22, flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
                  {tags.map(t => <span key={t} style={{ fontSize: 9, fontWeight: 700, padding: "3px 8px", borderRadius: 4, backgroundColor: "rgba(0,184,148,0.1)", color: PRIMARY, border: "1px solid rgba(0,184,148,0.25)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t}</span>)}
                </div>
                <h3 className="card-title" style={{ fontSize: 17, fontWeight: 700, color: text, marginBottom: 8, transition: "color 0.18s" }}>{title}</h3>
                <p style={{ fontSize: 13, color: muted, lineHeight: 1.7, flex: 1 }}>{desc}</p>
                <div style={{ marginTop: 18, paddingTop: 18, borderTop: `1px solid ${border}`, display: "flex", gap: 10 }}>
                  {live && (
    <a
      href={live}
      target="_blank"
      rel="noopener noreferrer"
      style={{ flex: 1, textDecoration: "none" }}
    >
      <button className="shimmer"
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          fontSize: 13,
          fontWeight: 700,
          padding: "9px",
          borderRadius: 7,
          background: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
          color: "#fff",
          border: "none",
          cursor: "pointer"
        }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: 15 }}>
          open_in_new
        </span>
        Live Demo
      </button>
    </a>
  )}

  {github && (
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <button
        style={{
          padding: "9px 11px",
          borderRadius: 7,
          border: `1px solid ${border}`,
          backgroundColor: "transparent",
          color: muted,
          cursor: "pointer",
          display: "flex",
          alignItems: "center"
        }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
          code
        </span>
      </button>
    </a>
  )}
                </div>
              </div>
            </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: 60, textAlign: "center" }}>
          <p style={{ color: muted, marginBottom: 18, fontSize: 15 }}>Want to see more technical explorations?</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <button onClick={() => navigate("/experience")}
              style={{ display: "flex", alignItems: "center", gap: 8, padding: "11px 26px", borderRadius: 8, background: `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`, color: "#fff", fontWeight: 700, border: "none", cursor: "pointer", fontSize: 14, boxShadow: "0 10px 28px rgba(0,184,148,0.3)" }}>
              View Experience <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </main>

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