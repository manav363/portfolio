import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  Database,
  ExternalLink,
  Github,
  Mail,
  Network,
  Send,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import "./styles.css";

const EMAIL_ADDRESS = "manavgarg2326@gmail.com";
const GITHUB_PROFILE_URL = "https://github.com/manav363";

const disciplines = [
  "Quant ML",
  "Backend Systems",
  "AI Apps",
  "Product UI",
  "Architecture",
  "Trading Research",
];

const offerings = [
  {
    title: "Quant and ML research systems",
    icon: TrendingUp,
    detail:
      "Regime detection, walk-forward validation, backtesting, signal evaluation, and NSE-focused trading research.",
  },
  {
    title: "Backend and data infrastructure",
    icon: Database,
    detail:
      "FastAPI services, PostgreSQL, DuckDB, Redis, Docker Compose, API contracts, and reproducible runtime paths.",
  },
  {
    title: "AI product engineering",
    icon: BrainCircuit,
    detail:
      "NLP pipelines, LangChain agents, HuggingFace inference, tool-calling flows, and clean React interfaces.",
  },
];

const experience = [
  {
    number: "01",
    role: "Trading intelligence systems",
    context: "ai_trade, market_regime, intraday research",
    duration: "active track",
  },
  {
    number: "02",
    role: "Full-stack AI applications",
    context: "SentiScope, Personal AI Assistant, APIBlueprint",
    duration: "portfolio track",
  },
  {
    number: "03",
    role: "Product-quality frontend systems",
    context: "Inventory SyncPulse, CineStats, UrbenShop",
    duration: "supporting track",
  },
];

const projects = [
  {
    title: "Market Regime Detection",
    short: "Best quant internship signal",
    type: "Quant / ML Research",
    stack: "Python · FastAPI · Redis · Walk-forward ML · Railway",
    summary:
      "Research pipeline for market regime detection, signal generation, risk-managed backtesting, and lightweight demo surfaces.",
    proof:
      "Walk-forward modeling, explicit OOS predictions, research-style tests, and a clean pipeline shape instead of notebook sprawl.",
    architecture:
      "data -> features -> model -> strategy -> risk -> backtest -> pipeline -> API/dashboard",
    flow: ["Data", "Features", "Model", "Risk", "Backtest"],
    metrics: ["Walk-forward", "OOS", "Risk engine"],
    visualNote: "Regime research console",
    accent: "ink",
    repoUrl: "https://github.com/manav363/market-regime-detection",
  },
  {
    title: "SentiScope",
    short: "Best-tested full-stack AI demo",
    type: "Full-stack NLP App",
    stack:
      "FastAPI · Transformers · Torch · Upstash Redis · React · TypeScript · Docker",
    summary:
      "Sentiment analysis product for pasted text and article URLs with confidence breakdowns and a visual dashboard.",
    proof:
      "Text and URL flows work end to end, backend pytest passes, SSRF protection exists, and requests carry correlation IDs.",
    architecture:
      "React input -> FastAPI scrape/validate -> HuggingFace inference -> Redis cache -> result dashboard",
    flow: ["Text", "URL guard", "Inference", "Cache", "Dashboard"],
    metrics: ["Pytest", "SSRF guard", "Request IDs"],
    visualNote: "Sentiment analysis workspace",
    accent: "lime",
    repoUrl: "https://github.com/manav363/sentiment-dashboard",
  },
  {
    title: "Intraday Trading AI India",
    short: "NSE 500 research console",
    type: "Trading ML Console",
    stack: "Python · yfinance · XGBoost · LightGBM · RandomForest · NewsAPI",
    summary:
      "Single-user Indian equities console for symbol analysis, NSE 500 scanning, backtesting, and news-based risk adjustment.",
    proof:
      "Fold-level Sharpe, max drawdown, Calmar, hit rate, profit factor, event calendar, and temporal sanitation.",
    architecture:
      "CLI -> market data/cache -> features -> ensemble model -> trade decision -> scanner/backtest",
    flow: ["CLI", "OHLCV", "Features", "Signal", "Scanner"],
    metrics: ["NSE 500", "Slippage", "Event calendar"],
    visualNote: "Intraday research terminal",
    accent: "blue",
    repoUrl: "https://github.com/manav363/intraday-trading-ai-india",
  },
  {
    title: "APIBlueprint",
    short: "API design studio",
    type: "Full-stack API Tool",
    stack: "React · Vite · FastAPI · SQLAlchemy · PostgreSQL · Express · Docker",
    summary:
      "Define REST endpoints, generate OpenAPI specs, run dynamic mock routes, and keep docs/export tied to project data.",
    proof:
      "Coherent loop from CRUD data to OpenAPI to mock server to docs, with admin auth and schema-derived example responses.",
    architecture:
      "React editor -> FastAPI CRUD/spec generator -> PostgreSQL -> Express mock server -> docs/export",
    flow: ["Editor", "Schema", "OpenAPI", "Mock", "Export"],
    metrics: ["Auth", "Postgres", "Docker"],
    visualNote: "API design control room",
    accent: "paper",
    repoUrl: "https://github.com/manav363/apiblueprint",
  },
  {
    title: "Inventory SyncPulse",
    short: "Excel-driven ops dashboard",
    type: "Frontend Product App",
    stack: "React · Vite · Tailwind · React Router · Recharts · XLSX",
    summary:
      "Inventory dashboard for stock analysis, conflict detection, and operational visibility from uploaded spreadsheets.",
    proof:
      "Production build passes and the data-ingestion layer handles realistic field inference beyond a generic UI demo.",
    architecture:
      "XLSX upload -> field inference -> inventory context -> analytics views -> charts and conflicts",
    flow: ["XLSX", "Infer", "Context", "Charts", "Conflicts"],
    metrics: ["Build pass", "Recharts", "Field mapping"],
    visualNote: "Operations dashboard",
    accent: "grid",
    repoUrl: "https://github.com/manav363/inventory-system",
  },
  {
    title: "Personal AI Assistant",
    short: "Agent architecture",
    type: "AI / LLM Web App",
    stack: "FastAPI · LangChain · Groq · Tavily · React · Vite",
    summary:
      "Small full-stack assistant with a FastAPI backend, LangChain tool-calling agent, and React chat interface.",
    proof:
      "Frontend lint/build passes, backend imports locally, and the repo demonstrates Groq, Tavily, tool use, and session flow.",
    architecture:
      "React chat -> FastAPI -> LangChain agent -> Groq LLM + Tavily/search tools -> response stream",
    flow: ["Chat", "API", "Agent", "Tools", "Reply"],
    metrics: ["Groq", "Tavily", "Vite"],
    visualNote: "Agent interface",
    accent: "rose",
    repoUrl: "https://github.com/manav363/personal-ai-assistant",
  },
];

const stats = [
  { value: "08", label: "portfolio projects mapped" },
  { value: "06", label: "lead projects shown" },
  { value: "03", label: "core tracks: quant, backend, AI" },
  { value: "2026", label: "internship-ready target" },
];

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    idea: "",
    focus: "AI/ML internship",
  });

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "visitor"}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Company: ${form.company}`,
        `Focus: ${form.focus}`,
        "",
        form.idea || "Hi Manav, I saw your portfolio and wanted to connect.",
      ].join("\n"),
    );
    return `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
  }, [form]);

  function updateForm(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  return (
    <main>
      <Hero />
      <Ribbon />
      <Offerings />
      <Experience />
      <Projects />
      <Credibility />
      <Stats />
      <Contact form={form} mailtoHref={mailtoHref} updateForm={updateForm} />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Manav Garg home">
          it's me
        </a>
        <div className="nav-links">
          <a href="#offerings">Offer</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Hello! I am</p>
          <h1>
            Manav Garg
            <span>AI/Quant Engineer</span>
          </h1>
          <p className="lede">
            CS AI engineer at Newton School of Technology, Delhi. I build
            intelligent systems across trading engines, ML pipelines,
            AI-assisted backends, and product-quality frontends.
          </p>
          <ul className="hero-checks" aria-label="Portfolio strengths">
            <li>
              <Check aria-hidden="true" /> Failure-mode first engineering
            </li>
            <li>
              <Check aria-hidden="true" /> Reproducible ML and backend systems
            </li>
            <li>
              <Check aria-hidden="true" /> Product interfaces that feel real
            </li>
          </ul>
          <div className="hero-actions">
            <a className="button primary" href="#contact">
              Let's talk <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="button ghost" href="#projects">
              View work <ExternalLink aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="system-portrait" aria-label="Abstract AI and quant systems portrait">
          <div className="signal-cloud signal-one" />
          <div className="signal-cloud signal-two" />
          <div className="portrait-panel">
            <div className="orbital orbital-a" />
            <div className="orbital orbital-b" />
            <div className="face-code">
              <div className="node node-a">
                <BrainCircuit aria-hidden="true" />
              </div>
              <div className="node node-b">
                <TrendingUp aria-hidden="true" />
              </div>
              <div className="node node-c">
                <Database aria-hidden="true" />
              </div>
              <div className="terminal-card">
                <div className="terminal-heading">
                  <span>Signal lab</span>
                  <strong>3 live tracks</strong>
                </div>
                <div className="terminal-metrics" aria-label="Hero system metrics">
                  <span>
                    <b>ML</b>
                    <small>Regime models</small>
                  </span>
                  <span>
                    <b>API</b>
                    <small>FastAPI systems</small>
                  </span>
                  <span>
                    <b>UI</b>
                    <small>Product demos</small>
                  </span>
                </div>
                <div className="terminal-flow" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>
              <div className="chart-bars" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
          <div className="hello-badge">Hello</div>
        </div>
      </div>
    </section>
  );
}

function Ribbon() {
  return (
    <section className="ribbon" aria-label="Disciplines">
      {disciplines.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </section>
  );
}

function SectionHeader({ kicker, title, children }) {
  return (
    <div className="section-header">
      <span className="section-kicker">{kicker}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function Offerings() {
  return (
    <section className="section offerings" id="offerings">
      <SectionHeader kicker="What I am offering" title="Systems that connect AI to real decisions.">
        Not a stack list. The work is about architecture, proof, and making the demo tell the truth.
      </SectionHeader>
      <div className="offering-grid">
        {offerings.map((item, index) => {
          const Icon = item.icon;
          return (
            <article className={index === 0 ? "offering-card active" : "offering-card"} key={item.title}>
              <Icon aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <a href="#projects">
                Explore proof <ChevronRight aria-hidden="true" />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section experience" id="experience">
      <SectionHeader kicker="Experience" title="The portfolio is built around three serious tracks." />
      <div className="experience-list">
        {experience.map((item) => (
          <article className="experience-row" key={item.number}>
            <span>{item.number}</span>
            <div>
              <h3>{item.role}</h3>
              <p>{item.context}</p>
            </div>
            <strong>{item.duration}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section projects" id="projects">
      <SectionHeader kicker="Case study" title="Selected systems from the portfolio.">
        Ranked by signal strength for an AI/ML engineering internship, with quant and production discipline up front.
      </SectionHeader>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.title} />
        ))}
      </div>
      <div className="fundamentals">
        <span>Frontend fundamentals also covered:</span>
        <strong>CineStats</strong>
        <strong>UrbenShop</strong>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;
  return (
    <article className={`project-card ${isEven ? "left" : "right"}`}>
      <div className={`project-visual ${project.accent}`}>
        <ProjectMockup project={project} />
      </div>
      <div className="project-copy">
        <span className="pill">{project.short}</span>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <dl>
          <div>
            <dt>Stack</dt>
            <dd>{project.stack}</dd>
          </div>
          <div>
            <dt>Strongest proof</dt>
            <dd>{project.proof}</dd>
          </div>
        </dl>
        <a href={project.repoUrl} target="_blank" rel="noreferrer">
          See details <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

function ProjectMockup({ project }) {
  return (
    <div className="mockup">
      <div className="visual-top">
        <span>{project.type}</span>
        <Network aria-hidden="true" />
      </div>
      <div className="mockup-window">
        <div className="window-bar" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="mockup-body">
          <div className="mockup-title">
            <span>{project.visualNote}</span>
            <strong>{project.title}</strong>
          </div>
          <div className="flow-track" aria-label={`${project.title} architecture flow`}>
            {project.flow.map((step) => (
              <span key={step}>{step}</span>
            ))}
          </div>
          <div className="metric-grid">
            {project.metrics.map((metric) => (
              <span key={metric}>{metric}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Credibility() {
  return (
    <section className="credibility">
      <span className="section-kicker">Client feedback</span>
      <blockquote>
        "I think in failure modes before features, document architecture before code,
        and treat reproducibility as a first-class requirement."
      </blockquote>
      <div className="quote-meta">
        <div>
          <strong>Manav Garg</strong>
          <span>CS AI Engineer · Newton School of Technology</span>
        </div>
        <div className="quote-mark">
          <Sparkles aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats" aria-label="Portfolio stats">
      {stats.map((stat) => (
        <div className="stat" key={stat.label}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </section>
  );
}

function Contact({ form, mailtoHref, updateForm }) {
  return (
    <section className="section contact" id="contact">
      <SectionHeader kicker="Say hi" title="Tell me about your idea.">
        Have a role, project, internship, or AI system worth discussing? Reach out and I will get back to you.
      </SectionHeader>
      <form className="contact-form" action={mailtoHref}>
        <label>
          Name
          <input name="name" value={form.name} onChange={updateForm} placeholder="Hello..." />
        </label>
        <label>
          Email
          <input name="email" type="email" value={form.email} onChange={updateForm} placeholder="Where can I reply?" />
        </label>
        <label className="wide">
          Company name
          <input name="company" value={form.company} onChange={updateForm} placeholder="Your company or website" />
        </label>
        <label className="wide">
          What is your project?
          <textarea
            name="idea"
            value={form.idea}
            onChange={updateForm}
            placeholder="Tell me what you are building, hiring for, or exploring."
          />
        </label>
        <div className="focus-list" aria-label="Project focus">
          {["AI/ML internship", "Trading system", "Backend", "AI product", "Frontend UI"].map((item) => (
            <label className="chip" key={item}>
              <input
                type="radio"
                name="focus"
                value={item}
                checked={form.focus === item}
                onChange={updateForm}
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
        <a className="button primary submit-button" href={mailtoHref}>
          Get in touch <Send aria-hidden="true" />
        </a>
        <p className="form-note">This opens a mail draft to {EMAIL_ADDRESS}.</p>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="socials" aria-label="Public links">
        <a href={GITHUB_PROFILE_URL} aria-label="Manav Garg GitHub" target="_blank" rel="noreferrer">
          <Github aria-hidden="true" /> GitHub
        </a>
        <a href={`mailto:${EMAIL_ADDRESS}`} aria-label="Email Manav Garg">
          <Mail aria-hidden="true" /> Email
        </a>
      </div>
      <p>Portfolio system for Manav Garg · 2026</p>
      <div className="footer-icons" aria-hidden="true">
        <ShieldCheck />
        <BriefcaseBusiness />
        <Code2 />
      </div>
    </footer>
  );
}

createRoot(document.getElementById("root")).render(<App />);
