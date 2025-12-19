import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const sections = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Section highlighting on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      sections.forEach((s) => {
        const el = document.querySelector(s.href);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPos >= top && scrollPos <= bottom) {
            setActiveSection(s.href.slice(1));
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-zinc-900/40 backdrop-blur-md border-b border-zinc-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">
          Fatema
        </h1>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-6 text-sm">
          {sections.map((s) => (
            <a
              key={s.name}
              href={s.href}
              className={`transition-colors duration-200 ${
                activeSection === s.href.slice(1)
                  ? "text-sky-400 font-semibold"
                  : "text-zinc-200 hover:text-sky-400"
              }`}
            >
              {s.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-xl text-zinc-200"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-900/60 backdrop-blur-md border-t border-zinc-800">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {sections.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  className="text-zinc-200 hover:text-sky-400 text-lg transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
