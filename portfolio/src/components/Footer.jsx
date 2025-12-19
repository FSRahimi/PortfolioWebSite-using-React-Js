export default function Footer() {
  return (
    <footer className="relative bg-black py-12 px-6 overflow-hidden">
      {/* Decorative blur circles */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>

      {/* Glass container */}
      <div className="relative bg-zinc-900/40 backdrop-blur-md rounded-3xl p-6 text-center text-zinc-400 max-w-4xl mx-auto w-full">
        © {new Date().getFullYear()} Fatema Rahimi
      </div>
    </footer>
  );
}
