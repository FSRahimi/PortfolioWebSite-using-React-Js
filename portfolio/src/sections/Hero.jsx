import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";


export default function Hero() { 
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      
      {/* Background glow blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-sky-500/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Frontend 
            <span className="block bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">
               Developer
            </span>
          </h1>

          <p className="text-zinc-400 max-w-xl">
            I build modern, responsive, and animated web applications
            with clean UI and great user experience.
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            
            {/* Animated ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 to-purple-500 blur-md animate-pulse"></div>

            {/* Image */}
            <img
              src={profileImg}
              alt="Fatema Rahimi"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-zinc-900"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
