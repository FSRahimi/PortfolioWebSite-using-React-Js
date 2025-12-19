import { motion } from "framer-motion";


export default function Navbar() {
return (
<motion.nav
initial={{ y: -60, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
className="fixed top-0 w-full bg-zinc-900/80 backdrop-blur border-b border-zinc-800 z-50"
>
<div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
<h1 className="text-xl font-bold bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">
  Fatema
</h1>

<div className="space-x-6 text-sm">
<a href="#projects" className="hover:text-sky-400"  transition>Projects</a> 
<a href="#contact" className="hover:text-sky-400"  transition>Contact</a>
</div>
</div>
</motion.nav>
);
}





