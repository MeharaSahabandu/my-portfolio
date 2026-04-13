import "./App.css";

const skills = [
  {
    label: "Languages",
    tags: ["JavaScript", "TypeScript", "Java", "Python", "C", "C++", "PHP"],
  },
  {
    label: "Frontend",
    tags: ["React", "React Native", "Vite", "Tailwind CSS", "Expo"],
  },
  {
    label: "Backend & DB",
    tags: ["Node.js", "Express", "Spring Boot", "MongoDB", "MySQL", "Firebase"],
  },
  {
    label: "DevOps",
    tags: ["GitHub Actions", "Grafana", "Docker", "Azure", "Vercel"],
  },
];

const projects = [
  {
    num: "01",
    emoji: "🧺",
    name: "Smart Laundry Platform",
    desc: "Full-stack delivery management with real-time status pipeline and rider assignment.",
    stack: ["Node.js", "React", "React Native", "MongoDB"],
  },
  {
    num: "02",
    emoji: "📋",
    name: "NotifiU LMS",
    desc: "Job application module with provider dashboard, student board and superadmin flow.",
    stack: ["MERN", "TypeScript", "Tailwind"],
  },
  {
    num: "03",
    emoji: "🔄",
    name: "OBS Shift Roster",
    desc: "Cycle-based SRE shift manager with live countdown, calendar and push notifications.",
    stack: ["React Native", "Firebase", "Expo"],
  },
  {
    num: "04",
    emoji: "📊",
    name: "Productivity Dashboard",
    desc: "Grafana-inspired personal tracker with activity grid, streak counter and SVG charts.",
    stack: ["React", "Firebase", "Firestore"],
  },
  {
    num: "05",
    emoji: "🤖",
    name: "Oracle DB Chatbot",
    desc: "Infrastructure monitoring chatbot for Microsoft Teams using Oracle DB metrics.",
    stack: ["Azure", "Power Automate", "Copilot Studio"],
  },
  {
    num: "06",
    emoji: "💻",
    name: "Terminal Portfolio",
    desc: "Linux terminal-style portfolio with real file system navigation and typing animations.",
    stack: ["React", "Vercel"],
  },
];

const tickerItems = [
  "Site Reliability Engineer",
  "Software Engineer",
  "React Developer",
  "React Native",
  "Node.js",
  "Spring Boot",
  "Open to Opportunities",
  "MERN Stack",
  "MSc AI",
  "Firebase",
  "TypeScript",
];

export default function App() {
  return (
    <>
      {/* floating stars */}
      {["✦", "✶", "✦", "✹", "✦"].map((s, i) => (
        <span key={i} className="star">
          {s}
        </span>
      ))}

      {/* nav */}
      <nav>
        <span className="nav-logo">mehara.dev</span>
        <ul className="nav-links">
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#skills">skills</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </nav>

      {/* hero */}
      <section className="hero">
        <div className="hero-badge">
          <span className="hero-badge-dot" /> available for opportunities
        </div>
        <h1 className="hero-name">
          Mehara
          <span className="hero-name-italic">Sahabandu.</span>
        </h1>
        <p className="hero-role">
          Site Reliability Engineer | Software Engineer<span>_</span>
        </p>
        <p className="hero-desc">
          Building systems that don't break at 3AM. Full-stack engineer, SRE at
          IFS, and MSc AI student at SLIIT — turning coffee into
          production-grade code since 2022.
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn btn-primary">
            view work →
          </a>
          <a href="#contact" className="btn btn-outline">
            say hello
          </a>
        </div>
      </section>

      {/* ticker */}
      <div className="ticker">
        <div className="ticker-inner">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="ticker-item">
              {item} <span className="ticker-dot" />
            </span>
          ))}
        </div>
      </div>

      {/* about */}
      <section id="about">
        <p className="section-label">01 — about</p>
        <h2 className="section-title">
          Who I <em>am</em>
        </h2>
        <div className="about-layout">
          <div className="about-text">
            <p>
              I'm a <strong>software engineer</strong> based in Colombo, Sri
              Lanka, currently working as a{" "}
              <strong>Site Reliability Engineer at IFS</strong> on the
              Observability team — monitoring databases and keeping production
              systems alive.
            </p>
            <p>
              I love the full stack — from crafting clean UIs in React to
              designing REST APIs in Node.js and Spring Boot. I also build React
              Native mobile apps and have a thing for developer tooling and
              internal dashboards.
            </p>
            <p>
              When I'm not shipping features, I'm studying for my{" "}
              <strong>MSc in Artificial Intelligence</strong> at SLIIT —
              exploring ML pipelines and neural networks. Also probably
              debugging something at an unreasonable hour.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-cell">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years coding</span>
            </div>
            <div className="stat-cell">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects built</span>
            </div>
            <div className="stat-cell">
              <span className="stat-number">5</span>
              <span className="stat-label">Languages</span>
            </div>
            <div className="stat-cell">
              <span className="stat-number">∞</span>
              <span className="stat-label">Tabs open</span>
            </div>
          </div>
        </div>
      </section>

      {/* skills */}
      <section id="skills">
        <p className="section-label">02 — skills</p>
        <h2 className="section-title">
          What I <em>know</em>
        </h2>
        <div className="skills-list">
          {skills.map((g) => (
            <div className="skill-row" key={g.label}>
              <span className="skill-row-label">{g.label}</span>
              <div className="skill-tags">
                {g.tags.map((t) => (
                  <span className="skill-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* projects */}
      <section id="projects">
        <p className="section-label">03 — projects</p>
        <h2 className="section-title">
          Things I've <em>built</em>
        </h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <div className="proj-card" key={p.num}>
              <span className="proj-arrow">↗</span>
              <div className="proj-num">{p.num}</div>
              <span className="proj-emoji">{p.emoji}</span>
              <div className="proj-name">{p.name}</div>
              <div className="proj-desc">{p.desc}</div>
              <div className="proj-stack">
                {p.stack.map((t) => (
                  <span className="proj-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* contact */}
      <section id="contact">
        <p className="section-label">04 — contact</p>
        <h2 className="section-title">
          Let's <em>talk</em>
        </h2>
        <div className="contact-wrap">
          <div className="contact-big">hello!</div>
          <div className="contact-title">Open to opportunities</div>
          <p className="contact-sub">
            Whether it's a role, a collab, or just a tech chat — my inbox is
            always open.
          </p>
          <div className="contact-links">
            <a href="mailto:sahabandumehara@gmail.com" className="contact-link">
              ✉ email
            </a>
            <a
              href="https://linkedin.com/in/mehara-sahabandu"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              ↗ linkedin
            </a>
            <a
              href="https://github.com/MeharaSahabandu"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              ↗ github
            </a>
            <a
              href="https://about-mehara.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              ↗ terminal
            </a>
          </div>
        </div>
      </section>

      <footer>
        designed & built by mehara sahabandu — {new Date().getFullYear()}
      </footer>
    </>
  );
}
