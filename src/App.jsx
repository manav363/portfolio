import { useMemo, useState } from "react";
import { EMAIL_ADDRESS, FORM_ENDPOINT } from "./data.js";
import useScrollReveal from "./hooks/useScrollReveal.js";
import Hero from "./components/Hero.jsx";
import Ribbon from "./components/Ribbon.jsx";
import Offerings from "./components/Offerings.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Credibility from "./components/Credibility.jsx";
import Stats from "./components/Stats.jsx";
import Blog from "./components/Blog.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "./styles.css";

export default function App() {
  useScrollReveal();

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    idea: "",
    focus: "AI/ML internship",
  });
  const [submitStatus, setSubmitStatus] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "visitor"}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Company: ${form.company}`,
        `Focus: ${form.focus}`,
        "",
        form.idea || "Hi Manav, I saw your portfolio and wanted to connect.",
      ].join("\n"),
    );
    return `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
  }, [form]);

  function updateForm(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function submitContact(event) {
    event.preventDefault();

    if (!FORM_ENDPOINT) {
      window.location.href = mailtoHref;
      return;
    }

    setSubmitStatus("Sending...");
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Contact form request failed");
      }

      setSubmitStatus("Sent. I will reply by email.");
      setForm({
        name: "",
        email: "",
        company: "",
        idea: "",
        focus: "AI/ML internship",
      });
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setSubmitStatus("Could not send in-page. Opening an email draft instead.");
      window.location.href = mailtoHref;
    }
  }

  return (
    <main id="main-content">
      <Hero />
      <Ribbon />
      <Offerings />
      <Experience />
      <Projects />
      <Credibility />
      <Stats />
      <Blog />
      <Contact
        form={form}
        mailtoHref={mailtoHref}
        onSubmit={submitContact}
        submitStatus={submitStatus}
        updateForm={updateForm}
      />
      <Footer />
    </main>
  );
}
