import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const contacts = [
    { icon: <FaEnvelope />, name: "Email", link: "mailto:fatemarahimi996@email.com", color: "text-sky-400" },
    { icon: <FaLinkedin />, name: "LinkedIn", link: "https://www.linkedin.com/in/fatema-rahimi-296a95234", color: "text-blue-600" },
    { icon: <FaGithub />, name: "GitHub", link: "https://github.com/FSRahimi", color: "text-gray-400" },
    { icon: <FaTwitter />, name: "X", link: "https://twitter.com/@fatema_sama", color: "text-blue-400" },
  ];

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24 flex justify-center overflow-hidden">
      <div className="w-full max-w-4xl relative">
        <h2 className="text-3xl font-bold mb-4 text-sky-400  text-center ">Contact</h2>
        <p className="text-zinc-400 mb-8 text-center">I’m happy to connect. Reach me here:</p>

        <div className="glass rounded-3xl p-8 md:p-10 backdrop-blur-md text-center text-zinc-100 relative space-y-8">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>

          <div className="flex flex-wrap justify-center gap-6 mt-4">
            {contacts.map((c, i) => (
              <a
                key={i}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-6 py-4 bg-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800/70 rounded-xl transition transform hover:-translate-y-1 hover:scale-105 shadow-md ${c.color}`}
              >
                <span className="text-2xl">{c.icon}</span>
                <span className="font-medium">{c.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
