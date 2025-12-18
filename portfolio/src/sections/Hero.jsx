export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold">Fatema Rahimi</h1>
      <p className="mt-4 text-xl text-sky-400">Frontend Developer</p>
      <p className="mt-6 max-w-xl text-gray-400">
        I build modern, responsive, and user‑friendly web applications.
      </p>
      <div className="mt-8 flex gap-4">
        <a href="#projects" className="bg-sky-500 px-6 py-3 rounded-xl">Projects</a>
        <a href="/cv.pdf" className="border border-sky-500 px-6 py-3 rounded-xl">Download CV</a>
      </div>
    </section>
  )
}