import { useState } from "react";
import "./App.css";
import avatarImg from "./assets/avatar.jpg";

const Bitmoji = ({ size = 160 }) => (
  <img
    src={avatarImg}
    alt="Mehara Sahabandu"
    style={{
      width: size,
      height: size,
      objectFit: "cover",
      objectPosition: "center top",
      borderRadius: "50%",
      display: "block",
    }}
  />
);

const _unused = ({ size = 160 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 160 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* ── LAVENDER HOODIE BODY ── */}
    <path
      d="M16 180 Q20 145 44 134 L56 128 L68 136 L80 139 L92 136 L104 128 L116 134 Q140 145 144 180Z"
      fill="#c9b8d8"
    />
    {/* hoodie ribbed hem */}
    <path d="M28 172 Q80 178 132 172 L132 180 Q80 185 28 180Z" fill="#b8a8c8" />
    {/* front kangaroo pocket */}
    <path d="M58 156 Q80 162 102 156 L102 170 Q80 174 58 170Z" fill="#b8a8c8" />
    {/* pocket crease */}
    <path
      d="M80 156 L80 170"
      stroke="#a898b8"
      strokeWidth="1"
      strokeLinecap="round"
    />
    {/* white drawstrings */}
    <path
      d="M72 140 Q70 148 67 162"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.8"
    />
    <path
      d="M88 140 Q90 148 93 162"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.8"
    />
    {/* drawstring tips */}
    <circle cx="66" cy="163" r="2" fill="white" opacity="0.7" />
    <circle cx="94" cy="163" r="2" fill="white" opacity="0.7" />
    {/* hoodie collar */}
    <path
      d="M58 132 Q68 138 80 139 Q92 138 102 132 Q96 128 80 127 Q64 128 58 132Z"
      fill="#b8a8c8"
    />
    {/* sleeve left */}
    <path
      d="M16 180 Q14 160 20 148 Q28 138 44 134 L56 128 Q42 132 34 142 Q24 154 22 170Z"
      fill="#c9b8d8"
    />
    {/* sleeve right */}
    <path
      d="M144 180 Q146 160 140 148 Q132 138 116 134 L104 128 Q118 132 126 142 Q136 154 138 170Z"
      fill="#c9b8d8"
    />

    {/* ── NECK ── */}
    <rect x="67" y="112" width="26" height="20" rx="6" fill="#f0c090" />

    {/* ── FACE - light peach skin ── */}
    <ellipse cx="80" cy="88" rx="37" ry="39" fill="#f5c898" />

    {/* ── DARK WAVY HAIR ── */}
    {/* hair back volume behind face */}
    <path
      d="M43 86 Q43 52 80 47 Q117 52 117 86 Q117 112 112 128 Q106 142 98 145 Q90 149 80 149 Q70 149 62 145 Q54 142 48 128 Q43 112 43 86Z"
      fill="#1a1008"
    />
    {/* left wavy flow */}
    <path
      d="M43 95 Q36 108 37 122 Q38 130 43 132 Q40 122 41 112 Q42 104 43 95Z"
      fill="#1a1008"
    />
    <path
      d="M37 122 Q33 136 36 144 Q40 150 44 147 Q40 140 41 133Z"
      fill="#1a1008"
    />
    {/* right wavy flow */}
    <path
      d="M117 95 Q124 108 123 122 Q122 130 117 132 Q120 122 119 112 Q118 104 117 95Z"
      fill="#1a1008"
    />
    <path
      d="M123 122 Q127 136 124 144 Q120 150 116 147 Q120 140 119 133Z"
      fill="#1a1008"
    />
    {/* wave indentations left */}
    <path
      d="M38 112 Q42 108 46 112 Q50 116 54 112"
      stroke="#0e0804"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M37 128 Q41 124 45 128 Q49 132 53 128"
      stroke="#0e0804"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
    />
    {/* wave indentations right */}
    <path
      d="M122 112 Q118 108 114 112 Q110 116 106 112"
      stroke="#0e0804"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M123 128 Q119 124 115 128 Q111 132 107 128"
      stroke="#0e0804"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
    />
    {/* top hair — covers forehead */}
    <path
      d="M43 86 Q44 54 80 48 Q116 54 117 86 Q113 62 104 56 Q94 48 80 47 Q66 48 56 56 Q47 62 43 86Z"
      fill="#1a1008"
    />
    {/* hair parting / top highlight */}
    <path
      d="M62 52 Q70 48 80 47 Q90 48 98 52"
      stroke="rgba(255,255,255,0.05)"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    {/* small hair strand on forehead */}
    <path
      d="M72 62 Q76 58 80 60"
      stroke="#0e0804"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
    />

    {/* ── EYEBROWS - defined ── */}
    <path
      d="M55 75 Q61 71 68 73"
      stroke="#1a1008"
      strokeWidth="2.4"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M92 73 Q99 71 105 75"
      stroke="#1a1008"
      strokeWidth="2.4"
      strokeLinecap="round"
      fill="none"
    />

    {/* ── GOLD/ORANGE GLASSES (like Snapchat avatar) ── */}
    {/* left lens */}
    <rect
      x="51"
      y="79"
      width="24"
      height="16"
      rx="5"
      stroke="#c8842a"
      strokeWidth="2"
      fill="rgba(200,180,140,0.08)"
    />
    {/* right lens */}
    <rect
      x="85"
      y="79"
      width="24"
      height="16"
      rx="5"
      stroke="#c8842a"
      strokeWidth="2"
      fill="rgba(200,180,140,0.08)"
    />
    {/* bridge */}
    <path
      d="M75 87 Q80 84 85 87"
      stroke="#c8842a"
      strokeWidth="1.8"
      fill="none"
    />
    {/* left arm */}
    <line
      x1="51"
      y1="87"
      x2="44"
      y2="85"
      stroke="#c8842a"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    {/* right arm */}
    <line
      x1="109"
      y1="87"
      x2="116"
      y2="85"
      stroke="#c8842a"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    {/* lens shine */}
    <path
      d="M54 82 Q56 80 59 81"
      stroke="rgba(255,255,255,0.25)"
      strokeWidth="1"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M88 82 Q90 80 93 81"
      stroke="rgba(255,255,255,0.25)"
      strokeWidth="1"
      fill="none"
      strokeLinecap="round"
    />

    {/* ── EYES - big cute ── */}
    <circle cx="63" cy="88" r="5.5" fill="white" />
    <circle cx="97" cy="88" r="5.5" fill="white" />
    <circle cx="63" cy="88" r="3.8" fill="#3a2010" />
    <circle cx="97" cy="88" r="3.8" fill="#3a2010" />
    <circle cx="63" cy="88" r="2" fill="#1a0a04" />
    <circle cx="97" cy="88" r="2" fill="#1a0a04" />
    {/* eye shine */}
    <circle cx="64.8" cy="86.2" r="1.5" fill="white" />
    <circle cx="98.8" cy="86.2" r="1.5" fill="white" />

    {/* ── NOSE ── */}
    <path
      d="M77 100 Q80 104 83 100"
      stroke="#d09060"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
    />

    {/* ── HAPPY OPEN MOUTH (excited like the Snapchat pose) ── */}
    <path
      d="M66 110 Q80 120 94 110 Q90 118 80 120 Q70 118 66 110Z"
      fill="#c04040"
    />
    {/* teeth */}
    <path d="M68 112 Q80 118 92 112" fill="white" />
    <path
      d="M68 112 Q80 118 92 112 Q90 114 80 116 Q70 114 68 112Z"
      fill="white"
    />

    {/* ── BLUSH ── */}
    <ellipse cx="52" cy="102" rx="8" ry="5" fill="rgba(230,110,90,0.22)" />
    <ellipse cx="108" cy="102" rx="8" ry="5" fill="rgba(230,110,90,0.22)" />
  </svg>
);

const services = [
  {
    icon: "⚙️",
    name: "Site Reliability Engineering",
    desc: "Database monitoring, observability, incident response. Keeping production alive — even at 3AM.",
    wide: false,
  },
  {
    icon: "🌐",
    name: "Full-Stack Development",
    desc: "End-to-end web apps with Node.js, React and MongoDB. Clean APIs, polished interfaces.",
    wide: false,
  },
  {
    icon: "📱",
    name: "Mobile Development",
    desc: "Cross-platform React Native & Expo apps with Firebase backend and smooth native UX.",
    wide: false,
  },
  {
    icon: "🤖",
    name: "AI & Machine Learning",
    desc: "MSc-level: neural networks, SVMs, search algorithms and ML pipelines.",
    wide: false,
  },
  {
    icon: "🛠️",
    name: "DevOps & CI/CD",
    desc: "GitHub Actions, Azure, Docker, Vercel — automated pipelines and zero-downtime deploys.",
    wide: false,
  },
  {
    icon: "📊",
    name: "Internal Tooling & Dashboards",
    desc: "Shift rosters, monitoring bots, Grafana-style dashboards — tools teams actually want to use.",
    wide: true,
  },
];

const projects = [
  {
    emoji: "🧺",
    name: "Smart Laundry Platform",
    desc: "Delivery management with real-time status pipeline, rider assignment and admin dashboard.",
    stack: ["Node.js", "React", "React Native", "MongoDB"],
    cat: "Full-Stack",
  },
  {
    emoji: "📋",
    name: "NotifiU LMS",
    desc: "Job board with student dashboard, bookmarks, provider portal and superadmin approval flow.",
    stack: ["MERN", "TypeScript", "Tailwind v4"],
    cat: "Full-Stack",
  },
  {
    emoji: "🔄",
    name: "OBS Shift Roster",
    desc: "Cycle-based SRE shift manager with live countdown, monthly calendar and notifications.",
    stack: ["React Native", "Firebase", "Expo"],
    cat: "Mobile",
  },
  {
    emoji: "📊",
    name: "Productivity Dashboard",
    desc: "Grafana-inspired tracker with activity grid, streak counter and SVG line charts.",
    stack: ["React", "Firebase", "Firestore"],
    cat: "Full-Stack",
  },
  {
    emoji: "🤖",
    name: "Oracle DB Chatbot",
    desc: "Infrastructure monitoring chatbot for Teams via Azure Functions & Copilot Studio.",
    stack: ["Azure", "Power Automate", "Copilot Studio"],
    cat: "SRE",
  },
  {
    emoji: "💻",
    name: "Terminal Portfolio",
    desc: "Linux terminal-style portfolio with file system navigation and typing animations. Live now.",
    stack: ["React", "Vercel"],
    cat: "Full-Stack",
  },
];

const skills = [
  {
    cat: "Languages",
    tags: ["JavaScript", "TypeScript", "Java", "Python", "C", "C++", "PHP"],
  },
  {
    cat: "Frontend",
    tags: [
      "React",
      "React Native",
      "Vite",
      "Tailwind CSS",
      "Expo",
      "Bootstrap",
    ],
  },
  {
    cat: "Backend & DB",
    tags: [
      "Node.js",
      "Express",
      "Spring Boot",
      "MongoDB",
      "MySQL",
      "Oracle",
      "Firebase",
    ],
  },
  {
    cat: "DevOps",
    tags: ["GitHub Actions", "Grafana", "Docker", "Azure", "Vercel", "Linux"],
  },
];

const ticker = [
  "Site Reliability Engineer",
  "Software Engineer",
  "React Developer",
  "MERN Stack",
  "React Native",
  "Spring Boot",
  "Open to Opportunities",
  "MSc Artificial Intelligence",
  "Firebase",
  "TypeScript",
  "Node.js",
];
const filters = ["All", "Full-Stack", "Mobile", "SRE"];

export default function App() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <>
      <nav>
        <span className="nav-logo">Mehara.</span>
        <ul className="nav-center">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
        </ul>
        <a href="#contact" className="nav-btn">
          Contact me →
        </a>
      </nav>

      <section className="hero">
        <div className="hero-left">
          <div className="hero-available">
            <span className="avail-dot" /> Available for opportunities
          </div>
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Mehara Sahabandu</h1>
          <div className="hero-tags">
            {[
              "SRE @ IFS",
              "MSc AI @ SLIIT",
              "Colombo, LK",
              "Software Engineer",
            ].map((t) => (
              <span key={t} className="hero-tag">
                {t}
              </span>
            ))}
          </div>
          <p className="hero-desc">
            As a passionate software engineer, I build scalable systems and
            beautiful interfaces. From database monitoring at IFS to full-stack
            apps and mobile — I love turning complex problems into clean,
            reliable solutions.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-fill">
              View my work →
            </a>
            <a href="#contact" className="btn-line">
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="avatar-card">
            <Bitmoji size={210} />
          </div>
          <div className="hero-right-stats">
            {[
              ["3+", "Years"],
              ["10+", "Projects"],
              ["5", "Stacks"],
              ["∞", "Tabs"],
            ].map(([n, l]) => (
              <div key={l} className="mini-stat">
                <div className="mini-stat-n">{n}</div>
                <div className="mini-stat-l">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="ticker">
        <div className="ticker-track">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="t-item">
              {t}
              <span className="t-dot" />
            </span>
          ))}
        </div>
      </div>

      <div className="wrap" id="services">
        <p className="s-label">01 — services</p>
        <h2 className="s-title">What I do</h2>
        <div className="bento">
          {services.map((s) => (
            <div key={s.name} className={`bento-cell${s.wide ? " wide" : ""}`}>
              <div className="bento-icon">{s.icon}</div>
              <div className="bento-name">{s.name}</div>
              <p className="bento-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="wrap" id="projects">
        <p className="s-label">02 — projects</p>
        <h2 className="s-title">Things I've built</h2>
        <div className="proj-filters">
          {filters.map((f) => (
            <button
              key={f}
              className={`pf${active === f ? " on" : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="proj-grid">
          {filtered.map((p) => (
            <div key={p.name} className="pcard">
              <div className="pcard-thumb">
                {p.emoji}
                <span className="pcard-thumb-label">{p.cat}</span>
              </div>
              <div className="pcard-body">
                <div className="pcard-stack">
                  {p.stack.map((t) => (
                    <span key={t} className="pstack">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="pcard-name">{p.name}</div>
                <p className="pcard-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="wrap" id="about">
        <p className="s-label">03 — about me</p>
        <h2 className="s-title">The human behind the code</h2>
        <div className="about-grid">
          <div className="about-left">
            <div className="about-avatar">
              <Bitmoji size={185} />
            </div>
            <div className="about-chips">
              {[
                "SRE @ IFS",
                "MSc AI @ SLIIT",
                "Colombo 🇱🇰",
                "Open to Work ✦",
              ].map((c) => (
                <span key={c} className="achip">
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div className="about-right">
            <p>
              I'm <strong>Mehara Sahabandu</strong>, a software engineer based
              in Colombo, Sri Lanka. I work as a{" "}
              <strong>Site Reliability Engineer at IFS</strong> on the
              Observability team — monitoring Oracle databases and keeping
              production systems healthy.
            </p>
            <p>
              I love the full stack — React UIs, Node.js APIs, and React Native
              mobile apps. I'm also pursuing an{" "}
              <strong>MSc in Artificial Intelligence at SLIIT</strong>,
              exploring ML pipelines, search algorithms and neural networks.
            </p>
            <p>
              When I'm not shipping features, I'm debugging something in prod
              like it's <strong>totally fine 🔥</strong> — or building another
              tool nobody asked for but everyone ends up using.
            </p>
            <div className="about-numbers">
              {[
                ["3+", "Years coding"],
                ["10+", "Projects built"],
                ["5+", "Tech stacks"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="anum-n">{n}</div>
                  <div className="anum-l">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="wrap" id="skills">
        <p className="s-label">04 — skills</p>
        <h2 className="s-title">What I work with</h2>
        <div className="skills-wrap">
          {skills.map((s) => (
            <div key={s.cat} className="skill-row">
              <span className="skill-cat">{s.cat}</span>
              <div className="skill-tags">
                {s.tags.map((t) => (
                  <span key={t} className="stag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="contact-outer" id="contact">
        <p className="s-label" style={{ textAlign: "center" }}>
          05 — contact
        </p>
        <div className="contact-box">
          <div className="contact-big">Let's talk.</div>
          <div className="contact-title">Open to opportunities</div>
          <p className="contact-sub">
            Whether it's a role, a collaboration, or just a tech chat — I'd love
            to hear from you.
          </p>
          <div className="contact-btns">
            <a href="mailto:sahabandumehara@gmail.com" className="cbtn">
              ✉ Email me
            </a>
            <a
              href="https://linkedin.com/in/mehara-sahabandu"
              target="_blank"
              rel="noreferrer"
              className="cbtn"
            >
              ↗ LinkedIn
            </a>
            <a
              href="https://github.com/MeharaSahabandu"
              target="_blank"
              rel="noreferrer"
              className="cbtn"
            >
              ↗ GitHub
            </a>
            <a
              href="https://about-mehara.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="cbtn"
            >
              ↗ Terminal
            </a>
          </div>
        </div>
      </div>

      <footer>
        designed &amp; built by mehara sahabandu — {new Date().getFullYear()}
      </footer>
    </>
  );
}
