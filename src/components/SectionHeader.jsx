export default function SectionHeader({ kicker, title, children }) {
  return (
    <div className="section-header">
      <span className="section-kicker">{kicker}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}
