import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";

const projects = [
  { title: "Weather App", demo: "#", github: "#" },
  { title: "Seda App", demo: "#", github: "#" },
  { title: "Computer-Store", demo: "#", github: "#" },
  { title: "Blog Platform", demo: "#", github: "#" },
  { title: "E-commerce Site", demo: "#", github: "#" },
  { title: "Portfolio Website", demo: "#", github: "#" },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <SectionTitle title="Projects" subtitle="Some of my recent work" />

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="glass p-6 rounded-2xl transition hover:-translate-y-2 hover:shadow-xl glow cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-3 text-sky-400">
              {project.title}
            </h3>
            <p className="text-zinc-400 text-sm mb-4">
              Click links to view project
            </p>
            <div className="flex justify-center gap-4 text-sm">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:underline"
              >
                Live
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:underline"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
