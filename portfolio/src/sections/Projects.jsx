
const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React showcasing projects and skills.",
    tech: ["React", "Vite", "Tailwind"],
    github: "https://github.com/USERNAME/portfolio",
    live: "https://your-portfolio.netlify.app",
  },
  {
    title: "Todo App",
    description: "CRUD todo app with local storage and responsive UI.",
    tech: ["React", "CSS"],
    github: "https://github.com/USERNAME/todo-app",
    live: "https://todo-app.vercel.app",
  },
  {
    title: "Landing Page",
    description: "Modern landing page with responsive layout and animations.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/USERNAME/landing-page",
    live: "https://landing-page.netlify.app",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-slate-800 rounded-2xl p-6 shadow-lg flex flex-col">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span key={i} className="text-sm bg-slate-700 px-3 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-auto flex gap-4">
              <a
                href={project.github}
                target="_blank"
                className="text-sky-400 hover:underline"
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                className="text-sky-400 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}