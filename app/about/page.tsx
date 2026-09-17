import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-[72px]">
      <section className="mx-auto max-w-[1440px] px-6 lg:px-8 py-10 lg:py-14">
        <span className="chip bg-cream border border-line">About Us</span>
        <h1 className="font-display text-[40px] lg:text-[56px] leading-[0.95] mt-4">JT Custom Builders<br/><span className="font-serif italic font-light">in Maryland</span></h1>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { year: "2003", title: "The Beginning", desc: "Founder Jimmy Tereyla started his career in the homebuilding industry." },
            { year: "2017", title: "Company Foundation", desc: "JT Custom Builders launched — rooted in trust, relationships and dedication to quality." },
            { year: "—", title: "Expansion", desc: "Enter sister company Revival Design + Build: Reviving Homes + Transforming Lives." },
          ].map((c)=> (
            <div key={c.title} className="rounded-[18px] bg-cream border border-line p-6">
              <div className="text-[11px] tracking-[0.12em] uppercase font-semibold opacity-50">{c.year}</div>
              <div className="font-display text-[18px] mt-1">{c.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-ink-60">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream border-y border-line">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-10 lg:py-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
          <div>
            <h2 className="font-display text-[28px] lg:text-[36px] leading-none">Building with excellence<br/><span className="font-serif italic font-light">for every custom home</span></h2>
            <div className="prose-jt mt-5">
              <p>JT Custom Builders was founded in 2017 based on a dream that New Home Construction should be enjoyable, collaborative, and of the highest quality. Low quality work and less-than-reputable contractors have infiltrated the homebuilding industry and JT Custom Builders is on a mission to change that and “right the ship” one home and one customer at a time.</p>
              <p>With decades of experience in Custom Home Building and Remodeling, JT Custom Builders is passionate about high-quality craftsmanship and the personal attention given to your questions, concerns, and requests during every phase of the process.</p>
            </div>
            <div className="mt-8 rounded-[18px] bg-paper border border-line p-6">
              <div className="text-xs tracking-[0.12em] uppercase font-semibold opacity-50">A message from Founder, Jimmy Tereyla</div>
              <h3 className="font-display text-[18px] mt-2">The JT Custom Builders Story</h3>
              <div className="prose-jt mt-3">
                <p>From a young age, I knew I wanted to build. My childhood was spent sketching home designs and dreaming of becoming an architect and builder. In 2003, I stepped into the home building industry, eager to bring quality craftsmanship to the homes I worked on. But over time, I became disheartened by the standards I saw — cut corners, subpar materials, and a lack of true commitment to homeowners. I knew there had to be a better way.</p>
                <p>That belief led me to start JT Custom Builders. We are more than just contractors — we are partners in creating homes that stand the test of time. Our approach is rooted in serving our customers by building trust, establishing relationships, and being dedicated to quality.</p>
                <p>We work closely with homeowners, trade partners, and employees to ensure every project is built with integrity, superior craftsmanship, and energy-efficient methods that result in homes built to last.</p>
                <p>At our core, what we build is much more than just a structure. These homes become the backdrop for life’s most cherished moments — holidays with family, children growing up, and the comfort of a safe place to call home. That reality is something we never take for granted.</p>
                <p>Whether constructing a new custom home or completing a renovation, we approach every project with the same care as if it were our own. We don’t just build houses; we create relationships and homes that truly matter. We truly LOVE what we do and look forward to serving you.</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <img src="https://jtcustombuilders.com/wp-content/uploads/2025/02/JTCustomBuilders-truck.jpg" alt="JT Custom Builders truck" className="h-[360px] w-full object-cover rounded-[20px] border border-line" />
            <img src="https://jtcustombuilders.com/wp-content/uploads/2025/02/JTCustomBuilders-signi-957x1024.jpg" alt="JT sign" className="h-[420px] w-full object-cover rounded-[20px] border border-line" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 lg:px-8 py-10 lg:py-14">
        <h2 className="font-display text-[26px]">Meet our team</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Jimmy Tereyla — President & Owner",
            "Amber Cole — Office Manager & Project Coordinator",
            "Connor Alves — Project Manager",
            "Caleb Buchman — Project Manager",
            "Stan Munday — Lead Carpenter",
            "Colin Waddington — Assistant Project Manager",
            "Colby Myers — Assistant Lead Carpenter",
            "Ignacio Penafiel — Painter",
            "Stacey Ramage — Designer & Selections Coordinator",
            "Brian Sharpe — Pre-Construction Manager",
            "Joy Semelsberger — Bookkeeper",
          ].map((m)=> (
            <div key={m} className="rounded-[16px] bg-paper border border-line px-5 py-4 text-sm font-medium">{m}</div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/estimate" className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-6 py-3 text-sm font-medium">Start the Process <ArrowUpRight size={14}/></Link>
          <a href="https://www.facebook.com/jtcustombuilders" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-medium">Facebook</a>
          <a href="https://www.instagram.com/jt.builders/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-medium">Instagram</a>
        </div>
      </section>
    </div>
  );
}
