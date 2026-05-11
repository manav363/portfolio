import { Github, Mail, FileText, ShieldCheck, BriefcaseBusiness, Code2 } from "lucide-react";
import { GITHUB_PROFILE_URL, EMAIL_ADDRESS, RESUME_URL } from "../data.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="socials" aria-label="Public links">
        <a href={GITHUB_PROFILE_URL} aria-label="Manav Garg GitHub" target="_blank" rel="noreferrer">
          <Github aria-hidden="true" /> GitHub
        </a>
        <a href={`mailto:${EMAIL_ADDRESS}`} aria-label="Email Manav Garg">
          <Mail aria-hidden="true" /> Email
        </a>
        <a
          href={RESUME_URL}
          download="Manav_Garg_Resume.pdf"
          aria-label="Download résumé"
        >
          <FileText aria-hidden="true" /> Résumé
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
