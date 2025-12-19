import SectionTitle from "../components/SectionTitle";


export default function Contact() {
return (
<section id="contact" className="bg-zinc-900/40 py-24">
<SectionTitle
title="Contact"
subtitle="Let's work together"
/>


<div className="text-center">
<p className="text-zinc-400 mb-6">Email me at:</p>
<a
href="mailto:your@email.com"
className="text-sky-400 font-medium"
>
your@email.com
</a>
</div>
</section>
);
}