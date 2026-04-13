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
      borderRadius: "20px",
      display: "block",
    }}
  />
);

const services = [
  {
    icon: "⚙️",
    name: "Site Reliability Engineering",
    desc: "keeping prod alive at 3AM so you don't have to. databases, observability, incident response — it's giving dependable.",
    wide: false,
  },
  {
    icon: "🌐",
    name: "Full-Stack Development",
    desc: "frontend to backend, no cap. Node.js, React, MongoDB — clean code, clean UI, clean vibes.",
    wide: false,
  },
  {
    icon: "📱",
    name: "Mobile Development",
    desc: "React Native apps that actually feel native. Firebase backend, smooth UX, works on both iOS and Android fr.",
    wide: false,
  },
  {
    icon: "🤖",
    name: "AI & Machine Learning",
    desc: "MSc brain unlocked 🧠 neural nets, SVMs, search algorithms — lowkey obsessed with this stuff.",
    wide: false,
  },
  {
    icon: "🛠️",
    name: "DevOps & CI/CD",
    desc: "GitHub Actions, Docker, Azure, Vercel. push to main and let the pipeline cook 🍳",
    wide: false,
  },
  {
    icon: "📊",
    name: "Internal Tools & Dashboards",
    desc: "shift rosters, monitoring bots, dashboards — building tools that actually slap and people want to use.",
    wide: true,
  },
];

const projects = [
  {
    emoji: "🧺",
    name: "Smart Laundry Platform",
    desc: "built a whole delivery module — riders, status pipeline, admin dash. it was giving startup energy ngl.",
    stack: ["Node.js", "React", "React Native", "MongoDB"],
    cat: "Full-Stack",
  },
  {
    emoji: "📋",
    name: "NotifiU LMS",
    desc: "job board for students with bookmarks, provider portal, superadmin approval. full send on the MERN stack.",
    stack: ["MERN", "TypeScript", "Tailwind v4"],
    cat: "Full-Stack",
  },
  {
    emoji: "🔄",
    name: "OBS Shift Roster",
    desc: "built this for my SRE team bc the old roster was not it. live countdown, calendar, notifications 🔔",
    stack: ["React Native", "Firebase", "Expo"],
    cat: "Mobile",
  },
  {
    emoji: "📊",
    name: "Productivity Dashboard",
    desc: "my personal obsession. GitHub-style activity grid, streak counter, wake-up tracker. very main character.",
    stack: ["React", "Firebase", "Firestore"],
    cat: "Full-Stack",
  },
  {
    emoji: "🤖",
    name: "Oracle DB Chatbot",
    desc: "made a chatbot for Teams that monitors Oracle DBs via Azure. management loved it, I cried a little. 😭",
    stack: ["Azure", "Power Automate", "Copilot Studio"],
    cat: "SRE",
  },
  {
    emoji: "💻",
    name: "Terminal Portfolio",
    desc: "a whole Linux terminal simulation as a portfolio. type 'help', navigate files, vibe. live rn 👇",
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

const filters = ["All", "Full-Stack", "Mobile", "SRE"];

export default function App() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <>
      <nav>
        <ul className="nav-center">
          <li>
            <a href="#services">what i do</a>
          </li>
          <li>
            <a href="#projects">my work</a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#skills">skills</a>
          </li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-left">
          <h1 className="hero-name">Mehara Sahabandu</h1>
          <div className="hero-typing">
            <span className="typing-prefix">currently </span>
            <span className="typing-text" id="typingText"></span>
            <span className="typing-cursor">|</span>
          </div>
          <div className="hero-tags">
            {[
              "Site Reliability Engineer at IFS 🔧",
              "Software Engineering Graduate - SLIIT 📚",
            ].map((t) => (
              <span key={t} className="hero-tag">
                {t}
              </span>
            ))}
          </div>
          <p className="hero-desc">
            software engineer by day, debugging mysteries by night. I build
            things that actually work — full-stack apps, mobile, SRE stuff.
            currently at IFS keeping prod alive and at SLIIT learning AI because
            why not 💀
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
        </div>
      </section>

      <script
        dangerouslySetInnerHTML={{
          __html: `
        (function() {
          const words = ["building stuff that doesn't break","debugging at 3AM (it's fine)","shipping features no one asked for","an SRE @ IFS 💼","a React girlie 💅","learning AI (it's giving smart)","a full-stack dev fr","on my MSc grind 📚"];
          let wi = 0, ci = 0, deleting = false;
          const el = document.getElementById('typingText');
          function type() {
            if (!el) return;
            const word = words[wi];
            if (!deleting) {
              el.textContent = word.slice(0, ci + 1);
              ci++;
              if (ci === word.length) { deleting = true; setTimeout(type, 1800); return; }
            } else {
              el.textContent = word.slice(0, ci - 1);
              ci--;
              if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
            }
            setTimeout(type, deleting ? 60 : 90);
          }
          setTimeout(type, 600);
        })();
      `,
        }}
      />

      <div className="wrap" id="services">
        <h2 className="s-title">my services, bestie</h2>
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
        <h2 className="s-title">stuff i built 🛠️</h2>
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
        <h2 className="s-title">who even is she 👀</h2>
        <div className="about-grid">
          <div className="about-left">
            <div className="about-avatar">
              <Bitmoji size={185} />
            </div>
          </div>
          <div className="about-right">
            <p>
              hey, I'm <strong>Mehara</strong> — a software engineer from
              Colombo, Sri Lanka 🇱🇰. currently doing SRE things at{" "}
              <strong>IFS</strong>, keeping Oracle databases alive and
              production healthy (no pressure lol).
            </p>
            <p>
              I'm a full-stack girlie at heart — React, Node.js, React Native,
              you name it. also doing an <strong>MSc in AI at SLIIT</strong>{" "}
              because apparently one grind wasn't enough 😭
            </p>
            <p>
              when I'm not pushing to main, I'm building random tools for
              myself, hyper-fixating on a new tech stack, or explaining why the
              bug is <strong>definitely not my fault 🔥</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="wrap" id="skills">
        <h2 className="s-title">things i actually know </h2>
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
        <div className="contact-box">
          <div className="contact-big">hiii 👋</div>
          <div className="contact-title">let's collab or just chat</div>
          <p className="contact-sub">
            got a cool project? a job offer? or just wanna talk tech? drop me a
            message, I don't bite 🙂
          </p>
          <div className="contact-btns">
            <a href="mailto:sahabandumehara@gmail.com" className="cbtn">
              ✉ email me
            </a>
            <a
              href="https://linkedin.com/in/mehara-sahabandu"
              target="_blank"
              rel="noreferrer"
              className="cbtn"
            >
              ↗ linkedin
            </a>
            <a
              href="https://github.com/MeharaSahabandu"
              target="_blank"
              rel="noreferrer"
              className="cbtn"
            >
              ↗ github
            </a>
            <a
              href="https://about-mehara.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="cbtn"
            >
              ↗ terminal portfolio
            </a>
          </div>
        </div>
      </div>

      <footer>
        made with chaos and coffee by mehara — {new Date().getFullYear()} ☕
      </footer>
    </>
  );
}
