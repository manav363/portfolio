import { ArrowUpRight, Network } from "lucide-react";
import { projects } from "../data.js";
import SectionHeader from "./SectionHeader.jsx";

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
          View repo <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
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
