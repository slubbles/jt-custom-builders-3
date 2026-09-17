import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

export default function AdditionsPage() {
  return (
    <div className="pt-[72px]">
      <section className="mx-auto max-w-[1440px] px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
          <div>
            <span className="chip bg-cream border border-line">Services • Additions</span>
            <h1 className="font-display text-[40px] lg:text-[56px] leading-[0.95] mt-4">A seamless extension <br/><span className="font-serif italic font-light">of your home</span><br/>and lifestyle</h1>
            <p className="mt-5 max-w-[560px] text-[15px] leading-relaxed text-ink-60">
              Is your home feeling a little too cozy? Dreaming of a larger kitchen, sun-drenched family room, or luxurious master suite? JT Custom Builders creates custom additions that increase living space and enhance quality of life — perfectly complementing your existing home and reflecting your unique style.
            </p>
            <div className="mt-6 rounded-[16px] bg-cream border border-line p-5">
              <h3 className="text-xs tracking-[0.12em] uppercase font-semibold opacity-50">Why Choose JT Custom Builders</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-60">
                <li className="flex gap-2"><Check size={14} className="mt-0.5 text-[#C9A86A] shrink-0"/> Relationship-driven — partner from consultation through final walkthrough.</li>
                <li className="flex gap-2"><Check size={14} className="mt-0.5 text-[#C9A86A] shrink-0"/> Tailored designs that seamlessly integrate — unwavering quality and skilled craftsmen.</li>
                <li className="flex gap-2"><Check size={14} className="mt-0.5 text-[#C9A86A] shrink-0"/> Transparent estimates, consistent updates, permits to finishing — stress-free.</li>
                <li className="flex gap-2"><Check size={14} className="mt-0.5 text-[#C9A86A] shrink-0"/> Local expertise in codes and regulations — integrity and excellence across Maryland.</li>
              </ul>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/estimate" className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-6 py-3 text-sm font-medium">Start the Process <ArrowUpRight size={14}/></Link>
              <Link href="/category/projects" className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-medium">View addition projects</Link>
            </div>
          </div>
          <img src="https://jtcustombuilders.com/wp-content/uploads/2025/02/Failed-Contractor-Addition-Takeover-9.jpeg" alt="Addition" className="h-[520px] w-full object-cover rounded-[20px] border border-line" />
        </div>
      </section>

      <section className="bg-cream border-y border-line">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-10">
          <h2 className="font-display text-[22px]">Featured Additions</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {["Hillside Homestead","Farmhouse Addition","Dual Haven","Custom Castle","Seamless Expansion","Renewed & Redefined","Failed Contractor Takeover"].map((t) => (
              <Link key={t} href="/category/projects" className="rounded-[16px] bg-paper border border-line p-6 hover:shadow-[0_8px_24px_rgba(20,20,19,0.06)] transition-shadow">
                <div className="text-[11px] tracking-[0.1em] uppercase font-semibold opacity-50">Home Addition</div>
                <div className="font-display text-[16px] mt-1">{t}</div>
                <span className="mt-3 inline-flex text-xs font-medium">View Project →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
