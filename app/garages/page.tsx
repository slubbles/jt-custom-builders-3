import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

export default function GaragesPage() {
  return (
    <div className="pt-[72px]">
      <section className="mx-auto max-w-[1440px] px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
          <div>
            <span className="chip bg-cream border border-line">Services • Garages</span>
            <h1 className="font-display text-[40px] lg:text-[56px] leading-[0.95] mt-4">Beyond storage<br/><span className="font-serif italic font-light">custom garages</span><br/>built around your needs</h1>
            <p className="mt-5 max-w-[560px] text-[15px] leading-relaxed text-ink-60">
              A garage is more than a place to park your car — it&apos;s a workshop, storage solution, and space for your passions. We build garages that are functional and beautiful, complementing your home and lifestyle. Attached or detached, we craft around your needs.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {["Spacious storage for vehicles & equipment","Dedicated workshop for hobbies","Home gym / office / entertainment","Stylish curb appeal — attached or detached"].map((t)=> (
                <div key={t} className="flex gap-2 rounded-xl bg-cream border border-line p-3 leading-snug"><Check size={14} className="mt-0.5 text-[#C9A86A] shrink-0"/>{t}</div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/estimate" className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-6 py-3 text-sm font-medium">Start the Process <ArrowUpRight size={14}/></Link>
              <Link href="/category/projects" className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-medium">View garage projects</Link>
            </div>
          </div>
          <div className="space-y-4">
            <img src="https://jtcustombuilders.com/wp-content/uploads/elementor/thumbs/JT-Custom-Builders-exterior-backyard-stamped-concrete-walkout-rifft5jap2samng045rhq0f0hape7nvhk377337pz8.jpg" alt="Garage and exterior" className="h-[340px] w-full object-cover rounded-[20px] border border-line" />
            <div className="rounded-[16px] bg-cream border border-line p-5">
              <div className="text-xs tracking-[0.12em] uppercase font-semibold opacity-50">Featured</div>
              <div className="font-display text-[16px] mt-1">Garage Goals — Custom Garage</div>
              <p className="text-sm text-ink-60 mt-1">A garage built to flex with your life — storage, workshop and style in one.</p>
              <Link href="/category/projects" className="mt-3 inline-flex text-sm font-medium">View Project →</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <p className="text-sm leading-relaxed text-white/70 max-w-[560px]">From concept to final touches — we work closely with you to create a garage that perfectly complements your home.</p>
          <Link href="/estimate" className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-ink">Start the Process <ArrowUpRight size={14}/></Link>
        </div>
      </section>
    </div>
  );
}
