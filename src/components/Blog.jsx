import { ArrowUpRight } from "lucide-react";
import { articles } from "../data.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Blog() {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="section blog" id="blog" data-reveal>
      <SectionHeader kicker="Writing" title="Notes on building real systems.">
        Technical write-ups on ML pipelines, backend patterns, and engineering
        decisions behind the portfolio projects.
      </SectionHeader>
      <div className="blog-grid">
        {articles.map((article, index) => (
          <a
            href={article.url}
            target="_blank"
            rel="noreferrer"
            className="blog-card"
            key={article.title}
            data-reveal
            data-reveal-delay={index}
          >
            <div className="blog-card-top">
              <span className="blog-tag">{article.tag}</span>
              <span className="blog-date">{article.date}</span>
            </div>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <span className="blog-link">
              Read article <ArrowUpRight aria-hidden="true" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
