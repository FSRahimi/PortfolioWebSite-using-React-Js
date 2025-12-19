export default function SectionTitle({ title, subtitle }) {
return (
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
{title}</h2>
<p className="text-zinc-400 max-w-xl mx-auto">{subtitle}</p>
</div>
);
}