import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-24 flex justify-center"
    >
      <div className="w-full max-w-4xl">
        <SectionTitle
          title="About Me"
          subtitle="My background, skills, and teaching experience"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-8 md:p-10 text-center text-zinc-300 leading-relaxed space-y-6 relative overflow-hidden"
        >
          {/* Decorative blur */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>

          <p>
            I am a{" "}
            <span className="text-sky-400 font-medium">
              Computer Science graduate
            </span>{" "}
            and a passionate{" "}
            <span className="text-purple-400 font-medium">
              Frontend Developer
            </span>{" "}
            with a strong interest in building clean, modern, and user-friendly
            web applications.
          </p>

          <p>
            I have solid knowledge of computer fundamentals, web technologies,
            and modern development tools. I enjoy turning ideas into real
            products using{" "}
            <span className="text-sky-400">React</span>,{" "}
            <span className="text-sky-400">Tailwind CSS</span>, and{" "}
            <span className="text-sky-400">JavaScript</span>.
          </p>

          <p>
            In addition to development, I have experience{" "}
            <span className="text-purple-400 font-medium">
              teaching computer skills
            </span>{" "}
            in several organizations. I have taught students basic and advanced
            computer concepts, helped them understand technology, and guided
            them in practical work.
          </p>

          <p>
            Teaching has strengthened my communication skills and patience, and
            it allows me to explain complex technical concepts in a simple and
            clear way.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
