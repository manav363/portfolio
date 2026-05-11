import { Sparkles } from "lucide-react";

export default function Credibility() {
  return (
    <section className="credibility" data-reveal>
      <span className="section-kicker">Engineering philosophy</span>
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
