import {
  ArrowUpRight,
  BrainCircuit,
  Check,
  Database,
  Download,
  ExternalLink,
  FileText,
  TrendingUp,
} from "lucide-react";
import { RESUME_URL } from "../data.js";

export default function Hero() {
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
          <a
            href={RESUME_URL}
            download="Manav_Garg_Resume.pdf"
            aria-label="Download résumé"
          >
            <FileText aria-hidden="true" style={{ width: 13, height: 13, marginRight: 4, verticalAlign: "middle" }} />
            Résumé
          </a>
        </div>
      </nav>

      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Hello! I am</p>
          <div className="availability-badge" aria-label="Availability status">
            <span />
            Open to internships · Summer 2026
          </div>
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
            <a
              className="button ghost"
              href="/RESUME.pdf"
              download="Manav_Garg_Resume.pdf"
              aria-label="Download résumé"
            >
              Résumé <Download aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="system-portrait" aria-label="Abstract AI and quant systems portrait">
          <div className="signal-cloud signal-one" />
          <div className="signal-cloud signal-two" />
          <div className="system-status" aria-hidden="true">
            <span>Live</span>
            <strong>Signal OS</strong>
          </div>
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
                <div className="terminal-scan" aria-hidden="true" />
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
