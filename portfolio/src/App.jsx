
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './components/Footer'


export default function App() {
return (
<div className="bg-zinc-950 text-zinc-100 font-sans">
<Navbar />
<Hero />
<About />
<Skills />
<Projects />
<Contact />
<Footer />
</div>
)
}


