import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

export default function CustomHomesPage() {
  return (
    <div className="pt-[72px]">
      {/* hero */}
      <section className="mx-auto max-w-[1440px] px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
          <div>
            <span className="chip bg-cream border border-line">Services • Custom Homes</span>
            <h1 className="font-display text-[40px] lg:text-[56px] leading-[0.95] mt-4">
              Custom Home Building<br /><span className="font-serif italic font-light">Transforming spaces,</span><br />enhancing lives
            </h1>
            <p className="mt-5 max-w-[560px] text-[15px] leading-relaxed text-ink-60">
              Building your new dream home, or even thinking about it can be exciting, stressful, and daunting. We at JT Custom Builders <em>LOVE</em> building homes and use this passion to provide you with an unparalleled and unforgettable experience. We’ve streamlined our process to ensure clarity, efficiency, and satisfaction from start to finish.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/estimate" className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-6 py-3 text-sm font-medium">Start the Process <ArrowUpRight size={14}/></Link>
              <a href="tel:240-651-4200" className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-medium">240-651-4200</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-[20px] border border-line bg-cream">
            <img src="https://jtcustombuilders.com/wp-content/uploads/2025/02/JT-Custom-Homes-Maryland-Front-Walk-768x1024.jpg" alt="Custom home front walk" className="h-[520px] w-full object-cover" />
            <div className="p-5 flex gap-2 text-[11px]">
              <span className="rounded-full bg-ink text-paper px-3 py-1">Build on your lot</span>
              <span className="rounded-full bg-white border border-line px-3 py-1">Lot feasibility help</span>
              <span className="rounded-full bg-white border border-line px-3 py-1">Permits handled</span>
            </div>
          </div>
        </div>
      </section>

      {/* process detail */}
      <section className="bg-cream border-y border-line">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-10 lg:py-14">
          <span className="chip bg-white border border-line">Our Process for Custom Home Building in Maryland</span>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[18px] bg-paper border border-line p-7">
              <h3 className="font-display text-[18px]">Pre-Construction: Initial Consultation &amp; Lot Selection</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-60">Understanding your vision — land/lot options, whether building on your own lot or needing consultation on land feasibility, plus architectural tastes, budget and timeline. Meet you wherever you are in the process.</p>
              <div className="mt-4 space-y-2 text-sm">
                <p className="flex gap-2"><Check size={14} className="mt-0.5 text-[#C9A86A]"/> Building on your own lot — we conduct a “buildability” evaluation.</p>
                <p className="flex gap-2"><Check size={14} className="mt-0.5 text-[#C9A86A]"/> Still searching — we provide guidance to find the perfect location.</p>
              </div>
            </div>
            <div className="rounded-[18px] bg-paper border border-line p-7">
              <h3 className="font-display text-[18px]">Prior To Construction — Design Phase</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-60">Every detail counts. We guide you through design without an in-house architect, but with full commitment to customization and quality — coordinating drawings, engineering and site design.</p>
              <ul className="mt-3 space-y-2 text-[13px] text-ink-60 list-disc pl-5">
                <li>Concept drawings from architect/engineer</li>
                <li>Concept color and material design</li>
                <li>Specifications &amp; selections</li>
                <li>Site design (if needed)</li>
              </ul>
            </div>
            <div className="rounded-[18px] bg-paper border border-line p-7">
              <h3 className="font-display text-[18px]">Structural Material &amp; Specification Selection</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-60">Years of performance insights inform our structural materials — proven for durability and appeal, with upgrades or specific brands you prefer. Structural integrity never compromised, personal style distinctly reflected.</p>
              <h4 className="mt-4 text-xs tracking-[0.12em] uppercase font-semibold opacity-50">Collaborative specification</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-60">Hardwood to eco-friendly finishes — kitchens to bath fixtures — tailored to your taste and lifestyle.</p>
            </div>
            <div className="rounded-[18px] bg-paper border border-line p-7">
              <h3 className="font-display text-[18px]">Finalizing Details</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-60">Detailed review of all chosen materials and finishes. Adjust hues, trim, fixtures — ensure every detail to your satisfaction before construction begins.</p>
              <h4 className="mt-4 text-xs tracking-[0.12em] uppercase font-semibold opacity-50">Engineering, Surveying &amp; Permits</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-60">We coordinate engineers and surveyors, assess soil and boundaries, and handle all permit applications with local authorities — compliant, feasible, and suited to your land.</p>
            </div>
          </div>
          <div className="mt-8 rounded-[18px] bg-ink text-paper p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="font-display text-[20px]">The Build Phase</h3>
              <p className="mt-2 max-w-[560px] text-sm leading-relaxed text-white/65">Quality checks and walkthroughs before handover. Final tweaks, comprehensive warranty (2-10), and keys in hand — a home built to last.</p>
            </div>
            <Link href="/estimate" className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-ink">Start the Process <ArrowUpRight size={14}/></Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 lg:px-8 py-10">
        <h2 className="font-display text-[24px]">What to expect</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <Link href="/additions" className="rounded-[16px] border border-line bg-cream p-6 hover:bg-white transition-colors">Additions →<p className="text-xs text-ink-60 mt-1">Seamless extensions.</p></Link>
          <Link href="/garages" className="rounded-[16px] border border-line bg-cream p-6 hover:bg-white transition-colors">Garages →<p className="text-xs text-ink-60 mt-1">Beyond storage.</p></Link>
          <Link href="/remodeling" className="rounded-[16px] border border-line bg-cream p-6 hover:bg-white transition-colors">Remodeling →<p className="text-xs text-ink-60 mt-1">Via Revival Design + Build.</p></Link>
        </div>
      </section>
    </div>
  );
}
