import { ChevronRight } from "lucide-react";
import { offerings } from "../data.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Offerings() {
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
              {index === 0 && <span className="card-badge">Primary track</span>}
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
