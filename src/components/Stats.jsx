import { stats } from "../data.js";

export default function Stats() {
  return (
    <section className="stats" aria-label="Portfolio stats" data-reveal>
      {stats.map((stat) => (
        <div className="stat" key={stat.label}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </section>
  );
}
