
import CV from "../assets/Fatema_Rahimi_CV.pdf?url";

import CoverLetter from "../assets/Fatema_CoverLetter.pdf"


export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-24 flex justify-center overflow-hidden"
    >
      <div className="w-full max-w-4xl relative">
        <h2 className="text-3xl font-bold mb-4 text-zinc-100 text-center">
          About Me
        </h2>
        <p className="text-zinc-400 mb-8 text-center">
          My background, skills, and teaching experience
        </p>

        <div className="glass rounded-3xl p-8 md:p-10 text-zinc-100 backdrop-blur-md relative space-y-6">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>

          <p>
            I am a <span className="text-sky-400 font-medium">Computer Science graduate</span> and a passionate <span className="text-purple-400 font-medium">Frontend Developer</span> with a strong interest in building clean, modern, and user-friendly web applications.
          </p>

          <p>
            I have solid knowledge of computer fundamentals, web technologies, and modern development tools. I enjoy turning ideas into real products using <span className="text-sky-400">React</span>, <span className="text-sky-400">Tailwind CSS</span>, and <span className="text-sky-400">JavaScript</span>.
          </p>

          <p>
            In addition to development, I have experience <span className="text-purple-400 font-medium">teaching computer skills</span> in several organizations, helping students understand technology and guiding them in practical work.
          </p>

          {/* CV and Cover Letter Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <a
              href= {CV}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-sky-400 text-black font-medium rounded-xl hover:bg-purple-500 transition"
            >
              My CV
            </a>

            <a
              href={CoverLetter}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-sky-400 text-black font-medium rounded-xl hover:bg-purple-500 transition"
            >
              My Cover Letter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
