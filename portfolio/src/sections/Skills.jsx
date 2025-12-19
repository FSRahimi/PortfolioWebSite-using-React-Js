import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

export default function Skills() {
  return (
    <section id="skills" className="bg-zinc-900/40 py-24">
      <SectionTitle
        title="Skills & Expertise"
        subtitle="Technical, teaching, networking, and soft skills"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {/* Frontend Core */}
        <div className="glass p-6 rounded-2xl glow">
          <h3 className="text-lg font-semibold mb-3 text-sky-400">
            Frontend Core Skills
          </h3>
          <ul className="text-sm text-zinc-300 space-y-1">
            <li>• HTML5 (Semantic Markup)</li>
            <li>• CSS3 (Flexbox, Grid)</li>
            <li>• JavaScript (ES6+)</li>
            <li>• Responsive Web Design</li>
          </ul>
        </div>

        {/* React & UI */}
        <div className="glass p-6 rounded-2xl glow">
          <h3 className="text-lg font-semibold mb-3 text-purple-400">
            React & UI Development
          </h3>
          <ul className="text-sm text-zinc-300 space-y-1">
            <li>• React.js</li>
            <li>• Component-Based Architecture</li>
            <li>• State & Props</li>
            <li>• Framer Motion Animations</li>
          </ul>
        </div>

        {/* Styling */}
        <div className="glass p-6 rounded-2xl glow">
          <h3 className="text-lg font-semibold mb-3 text-sky-400">
            Styling & Design
          </h3>
          <ul className="text-sm text-zinc-300 space-y-1">
            <li>• Tailwind CSS</li>
            <li>• Dark UI Design</li>
            <li>• Glassmorphism</li>
            <li>• UI Consistency</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="glass p-6 rounded-2xl glow">
          <h3 className="text-lg font-semibold mb-3 text-purple-400">
            Tools & Workflow
          </h3>
          <ul className="text-sm text-zinc-300 space-y-1">
            <li>• Git & GitHub</li>
            <li>• Vite</li>
            <li>• Debugging & Testing</li>
            <li>• Clean Code Practices</li>
          </ul>
        </div>

        {/* Networking */}
        <div className="glass p-6 rounded-2xl glow">
          <h3 className="text-lg font-semibold mb-3 text-sky-400">
            Basic Networking Knowledge
          </h3>
          <ul className="text-sm text-zinc-300 space-y-1">
            <li>• LAN & WAN</li>
            <li>• IP Addressing</li>
            <li>• Network Devices</li>
            <li>• File & Resource Sharing</li>
          </ul>
        </div>

        {/* Teaching */}
        <div className="glass p-6 rounded-2xl glow">
          <h3 className="text-lg font-semibold mb-3 text-purple-400">
            Teaching & Soft Skills
          </h3>
          <ul className="text-sm text-zinc-300 space-y-1">
            <li>• Computer Teaching Experience</li>
            <li>• Clear Technical Explanation</li>
            <li>• Communication & Teamwork</li>
            <li>• Problem Solving</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
