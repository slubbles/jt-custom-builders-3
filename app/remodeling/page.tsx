import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function RemodelingPage() {
  return (
    <div className="pt-[72px]">
      <section className="mx-auto max-w-[1440px] px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
          <div>
            <span className="chip bg-cream border border-line">Services • Remodeling • Revival Design + Build</span>
            <h1 className="font-display text-[40px] lg:text-[54px] leading-[0.95] mt-4">Custom home remodeling<br/><span className="font-serif italic font-light">Revival Design + Build</span></h1>
            <p className="text-sm tracking-[0.08em] uppercase font-semibold opacity-50 mt-2">A JT Custom Builders Sister Company — Reviving homes + transforming lives</p>
            <p className="mt-5 max-w-[560px] text-[15px] leading-relaxed text-ink-60">
              With the launch of Revival Design + Build, we serve all customers — dreaming of a new home, an addition, or a remodeled interior space. Two distinct focuses and processes, one common vision.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://revivaldesign-build.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-6 py-3 text-sm font-medium">Visit Revival Design + Build <ArrowUpRight size={14}/></a>
              <Link href="/estimate" className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-medium">Start Remodel</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://jtcustombuilders.com/wp-content/uploads/2025/02/kitchen-remodel-before.jpg" alt="Before" className="h-[300px] w-full object-cover rounded-[16px] border border-line" />
            <img src="https://jtcustombuilders.com/wp-content/uploads/2025/02/kitchen-remodel-after.jpg" alt="After" className="h-[300px] w-full object-cover rounded-[16px] border border-line" />
            <img src="https://jtcustombuilders.com/wp-content/uploads/2025/02/Kitchen-Remodeling-in-Maryland-JT-Custom-Builders.jpg" alt="Kitchen" className="col-span-2 h-[220px] w-full object-cover rounded-[16px] border border-line" />
          </div>
        </div>
      </section>

      <section className="bg-cream border-y border-line">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { title: "Kitchen Renovations", desc: "Expert design and transformation — modern, functional kitchens built around how you live." },
              { title: "Bathroom Renovations", desc: "Spa-like baths, timeless tile and fixtures — refreshed with the same JT craftsmanship." },
              { title: "Basement Renovations", desc: "Expand livable space below grade — family rooms, suites and entertainment, done right." },
            ].map((c)=> (
              <div key={c.title} className="rounded-[18px] bg-paper border border-line p-7">
                <div className="font-display text-[18px]">{c.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-ink-60">{c.desc}</p>
                <a href="https://revivaldesign-build.com/" target="_blank" rel="noreferrer" className="mt-4 inline-flex text-xs font-semibold tracking-[0.08em] uppercase">Learn more →</a>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[18px] bg-paper border border-line p-6">
            <h3 className="font-display text-[18px]">Our process applies to remodels too</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-60">Through JT, ground-up construction; through Revival, interior transformation — both with transparent communication, meticulous budget management and permits to finishing handled.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
