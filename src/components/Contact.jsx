import { Send } from "lucide-react";
import { EMAIL_ADDRESS, FORM_ENDPOINT } from "../data.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Contact({ form, mailtoHref, onSubmit, submitStatus, updateForm }) {
  return (
    <section className="section contact" id="contact" data-reveal>
      <SectionHeader kicker="Say hi" title="Tell me about your idea.">
        Have a role, project, internship, or AI system worth discussing? Reach out and I will get back to you.
      </SectionHeader>
      <form className="contact-form" action={FORM_ENDPOINT || mailtoHref} onSubmit={onSubmit}>
        <label>
          Name
          <input name="name" value={form.name} onChange={updateForm} placeholder="Hello..." />
        </label>
        <label>
          Email
          <input name="email" type="email" value={form.email} onChange={updateForm} placeholder="Where can I reply?" />
        </label>
        <label className="wide">
          Company name
          <input name="company" value={form.company} onChange={updateForm} placeholder="Your company or website" />
        </label>
        <label className="wide">
          What is your project?
          <textarea
            name="idea"
            value={form.idea}
            onChange={updateForm}
            placeholder="Tell me what you are building, hiring for, or exploring."
          />
        </label>
        <div className="focus-list" aria-label="Project focus">
          {["AI/ML internship", "Trading system", "Backend", "AI product", "Frontend UI"].map((item) => (
            <label className="chip" key={item}>
              <input type="radio" name="focus" value={item} checked={form.focus === item} onChange={updateForm} />
              <span>{item}</span>
            </label>
          ))}
        </div>
        <button className="button primary submit-button" type="submit">
          {FORM_ENDPOINT ? "Send message" : "Get in touch"} <Send aria-hidden="true" />
        </button>
        <p className="form-note">
          {submitStatus ||
            (FORM_ENDPOINT
              ? "This sends in-page — no email client needed."
              : "This opens a mail draft to " + EMAIL_ADDRESS + ".")}
        </p>
      </form>
    </section>
  );
}
