import SectionTitle from "../components/SectionTitle";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "Afghan Proverbs API",
    description:
      "A RESTful API that provides Afghan proverbs with meanings, designed for educational and cultural applications.",
    tech: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/FSRahimi/Afghan-Proverbs-API",
    demo: "#",
  },
  {
    name: "Portfolio Website",
    description:
      "A modern and responsive personal portfolio showcasing my projects, skills, and experience.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/FSRahimi/PortfolioWebSite",
    demo: "#",
  },
  {
    name: "Vue.js Bug Tracker",
    description:
      "A bug tracking application for reporting and managing issues in Vue.js projects.",
    tech: ["Vue.js", "JavaScript", "HTML", "CSS"],
    github: "#",
    demo: "#",
  },
  {
    name: "Frontend Practice Project",
    description:
      "A frontend-focused project built to practice UI design, responsiveness, and clean code structure.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-24 overflow-hidden"
    >
      <SectionTitle
        title="Projects"
        subtitle="Some of my recent work"
      />

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="glass rounded-3xl p-8 backdrop-blur-md hover:-translate-y-1 hover:shadow-xl transition"
          >
            {/* Project Title Badge */}
            <span className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full bg-sky-400/10 text-sky-400">
              {p.name}
            </span>

            <p className="text-zinc-300 mb-4">
              {p.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {p.tech.map((t, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 rounded-full bg-purple-400/10 text-purple-400"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition text-sm"
              >
                <FaGithub /> GitHub
              </a>

              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-400 text-black hover:bg-sky-500 transition text-sm"
              >
                <FaExternalLinkAlt /> Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
