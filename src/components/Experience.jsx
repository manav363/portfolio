import { experience } from "../data.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Experience() {
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
