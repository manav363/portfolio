import { disciplines } from "../data.js";

export default function Ribbon() {
  return (
    <section className="ribbon" aria-label="Disciplines" data-reveal>
      {disciplines.map((item) => (
        <a href={item.href} key={item.label}>
          {item.label}
        </a>
      ))}
    </section>
  );
}
