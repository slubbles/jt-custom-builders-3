"use client";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { ArrowUpRight, Check, Star, Quote, ChevronDown } from "lucide-react";

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.from(".hero-reveal", { y: 28, opacity: 0, duration: 0.9, stagger: 0.12, ease: "power3.out", delay: 0.15 });
    gsap.from(".hero-card", { y: 16, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.6 });
  }, { scope: ref });

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink">
      {/* bg image */}
      <div className="absolute inset-0">
        <img
          src="https://jtcustombuilders.com/wp-content/uploads/2025/02/JT-Custom-Homes-Maryland-Front-Walk-768x1024.jpg"
          alt="JT Custom Homes Maryland - custom home front walk"
          className="h-full w-full object-cover object-center opacity-[0.58]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/30" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-8 pt-[112px] pb-10 lg:pt-[144px] lg:pb-12">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-end">
          <div className="max-w-[720px]">
            <div className="hero-reveal inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur text-white/90">
              <span className="h-2 w-2 rounded-full bg-[#C9A86A] animate-pulse" />
              <span className="text-[11px] tracking-[0.12em] uppercase font-medium">Central Maryland • Mount Airy</span>
              <span className="hidden sm:inline text-white/40">—</span>
              <span className="hidden sm:inline text-xs text-white/70">Relationship-focused since 2017</span>
            </div>
            <h1 className="hero-reveal font-display text-[44px] sm:text-[56px] lg:text-[78px] leading-[0.92] text-white mt-6">
              Building with <br />
              <span className="font-serif italic font-light text-[#E8D5B0]">excellence.</span>
            </h1>
            <p className="hero-reveal mt-5 max-w-[520px] text-[16px] leading-relaxed text-white/75">
              Relationship-focused home builder serving central Maryland. We pair the personal touch of a local craftsman with the experience of a big builder — quality that lasts generations.
            </p>
            <div className="hero-reveal mt-8 flex flex-wrap items-center gap-3">
              <Link href="/estimate" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-ink hover:bg-white/90 transition-colors">
                Start the Process <ArrowUpRight size={16} className="opacity-60" />
              </Link>
              <Link href="/category/projects" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-medium text-white backdrop-blur hover:bg-white/15 transition-colors">
                View Projects
              </Link>
              <a href="tel:240-651-4200" className="hidden sm:inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
                <span className="h-8 w-8 grid place-items-center rounded-full border border-white/20 bg-white/10"><span className="text-xs">☎</span></span>
                240-651-4200
              </a>
            </div>
            <div className="hero-reveal mt-8 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/10 border border-white/15 px-3 py-1.5 text-[11px] tracking-wide text-white/70 backdrop-blur">Custom Homes</span>
              <span className="rounded-full bg-white/10 border border-white/15 px-3 py-1.5 text-[11px] tracking-wide text-white/70 backdrop-blur">Additions</span>
              <span className="rounded-full bg-white/10 border border-white/15 px-3 py-1.5 text-[11px] tracking-wide text-white/70 backdrop-blur">Garages</span>
              <span className="rounded-full bg-white/10 border border-white/15 px-3 py-1.5 text-[11px] tracking-wide text-white/70 backdrop-blur">Remodel • Revival Design + Build</span>
            </div>
          </div>

          {/* right trust card */}
          <div className="hero-card hidden lg:block">
            <div className="ml-auto max-w-[380px] rounded-[22px] bg-paper p-6 shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
              <div className="flex items-center justify-between">
                <span className="text-[11px] tracking-[0.12em] uppercase font-semibold text-ink-40">Trust &amp; Credentials</span>
                <span className="flex items-center gap-1 text-amber-500 text-xs font-medium"><Star size={12} fill="currentColor" /> 5.0 on Google</span>
              </div>
              <p className="mt-4 font-display text-[18px] leading-tight">“Exceeded all expectations — professionalism, craftsmanship and communication were remarkable.”</p>
              <p className="mt-2 text-xs text-ink-60">Jennifer Rogers • Verified Google Review • 20 reviews</p>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {[
                  { k: "MHIC", v: "134973" },
                  { k: "MHBR", v: "8115" },
                  { k: "Since", v: "2017" },
                ].map((x) => (
                  <div key={x.k} className="rounded-xl bg-cream px-3 py-3 text-center border border-line">
                    <div className="text-[11px] tracking-[0.08em] uppercase font-semibold text-ink-40">{x.k}</div>
                    <div className="text-sm font-medium mt-0.5">{x.v}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {["Energy Star","HERS","EPA RRP","2-10 Warranty","MD Builders"].map((t)=> (
                  <span key={t} className="rounded-full bg-ink text-paper px-2.5 py-1 text-[10px] tracking-wide">{t}</span>
                ))}
              </div>
            </div>
            <p className="mt-3 ml-auto max-w-[380px] text-center text-xs text-white/50">Howard • Carroll • Montgomery • Frederick Counties</p>
          </div>
        </div>

        {/* bottom stats bar */}
        <div className="hero-reveal mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <Stat label="Building since" value="2003" sub="Founder Jimmy Tereyla" />
          <Stat label="Company founded" value="2017" sub="Rooted in trust & quality" />
          <Stat label="Sister company" value="Revival" sub="Design + Build interiors" />
          <Stat label="Warranty" value="2-10 & Energy Star" sub="Homes built to last" />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-white/12 bg-white/[0.06] backdrop-blur px-5 py-4">
      <div className="text-[10px] tracking-[0.12em] uppercase font-semibold text-white/50">{label}</div>
      <div className="font-display text-[18px] text-white mt-1">{value}</div>
      <div className="text-xs text-white/55 mt-0.5">{sub}</div>
    </div>
  );
}

function Elevating() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-8 py-12 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div>
          <span className="chip bg-cream border border-line text-ink">Building with excellence</span>
          <h2 className="font-display text-[32px] lg:text-[44px] leading-[0.98] mt-4">Your trusted custom home builder in Maryland</h2>
          <div className="prose-jt mt-6 max-w-[560px]">
            <p>
              When working with JT Custom Builders, you benefit from the personal touch of a local custom home builder in Maryland with the experience of a big builder. We passionately provide you with high quality craftsmanship and attention to detail while giving our full attention to your questions, concerns, and requests during every phase of the process.
            </p>
            <p className="text-ink font-medium">New homes + remodeling — one team, one standard.</p>
          </div>
          <Link href="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">Our Story <ArrowUpRight size={14} /></Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://jtcustombuilders.com/wp-content/uploads/2025/02/Kitchen-Remodeling-in-Maryland-JT-Custom-Builders.jpg" alt="Kitchen remodeling Maryland" className="h-[240px] w-full object-cover rounded-[18px] lg:h-[300px]" />
          <img src="https://jtcustombuilders.com/wp-content/uploads/2025/02/fl_210.jpg" alt="Award" className="h-[240px] w-full object-cover rounded-[18px] lg:h-[300px] bg-cream p-6" />
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", title: "Discover", desc: "We start with a chat about your vision. Where to build, aesthetic, budget and timeframe — meet you wherever you are.", accent: "bg-[#F1EFE8]" },
    { n: "02", title: "Pre-Construction", desc: "Formalize the relationship. Agreement + pre-construction fee, then dive into planning and details.", accent: "bg-[#EDEBE3]" },
    { n: "03", title: "Plan", desc: "Drawings, primary selections, scope of work and budget. Concept drawings, colors, materials, specs and site design.", accent: "bg-[#F5F3EE]" },
    { n: "04", title: "Finalize Details", desc: "Finalize plans and specifications, sign contract and complete remaining selections.", accent: "bg-[#F1EFE8]" },
    { n: "05", title: "Build", desc: "We make your home dreams a reality — with transparent communication and meticulous site management.", accent: "bg-ink text-paper" },
  ];
  return (
    <section className="bg-cream border-y border-line">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="chip bg-white border border-line text-ink">Our Process</span>
            <h2 className="font-display text-[28px] lg:text-[40px] leading-none mt-3">Building your dream home,<br /><span className="font-serif italic font-light">without the drama.</span></h2>
          </div>
          <p className="max-w-[420px] text-sm leading-relaxed text-ink-60">An unparalleled and unforgettable experience — clarity, efficiency and satisfaction from start to finish.</p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {steps.map((s) => (
            <div key={s.n} className={`rounded-[20px] border border-line p-6 flex flex-col ${s.accent}`}>
              <div className={`text-[12px] tracking-[0.14em] uppercase font-semibold ${s.n==="05" ? "text-white/60" : "text-ink-40"}`}>{s.n}</div>
              <div className={`font-display text-[18px] mt-2 ${s.n==="05" ? "text-white" : "text-ink"}`}>{s.title}</div>
              <p className={`mt-2 text-[13px] leading-relaxed ${s.n==="05" ? "text-white/70" : "text-ink-60"}`}>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/custom-home-building-in-maryland" className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-6 py-3 text-sm font-medium">See Custom Home Process <ArrowUpRight size={14} /></Link>
          <Link href="/estimate" className="inline-flex items-center gap-2 rounded-full bg-white border border-line px-6 py-3 text-sm font-medium">Start the Conversation</Link>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const cards = [
    {
      title: "Custom Homes",
      href: "/custom-home-building-in-maryland",
      img: "https://jtcustombuilders.com/wp-content/uploads/2025/02/JT-Custom-Homes-Maryland-Front-Walk-768x1024.jpg",
      desc: "Transforming spaces, enhancing lives. Build on your lot or find the perfect location — we handle feasibility, design and permits.",
    },
    {
      title: "Additions",
      href: "/additions",
      img: "https://jtcustombuilders.com/wp-content/uploads/elementor/thumbs/JT_Custom_Builders_front-elevation-slight-right-riffhsni458kc9xxfr0s3dli2ooq7bs8zvezbq1z5w.jpg",
      desc: "A seamless extension of your home and lifestyle. Family rooms, kitchens, primary suites — built to look original.",
    },
    {
      title: "Garages",
      href: "/garages",
      img: "https://jtcustombuilders.com/wp-content/uploads/elementor/thumbs/JT-Custom-Builders-exterior-backyard-stamped-concrete-walkout-rifft5jap2samng045rhq0f0hape7nvhk377337pz8.jpg",
      desc: "Beyond storage. Workshops, storage, gym or entertainment — attached or detached, crafted around your needs.",
    },
    {
      title: "Remodel & Revival",
      href: "/remodeling",
      img: "https://jtcustombuilders.com/wp-content/uploads/2025/02/Kitchen-Remodeling-in-Maryland-JT-Custom-Builders.jpg",
      desc: "Sister company Revival Design + Build: kitchens, baths and basements — interiors transformed with the same standard.",
    },
  ];
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-8 py-12 lg:py-16">
      <div className="flex items-end justify-between gap-4">
        <h2 className="font-display text-[28px] lg:text-[40px] leading-none">What we build</h2>
        <Link href="/category/projects" className="hidden md:inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">All projects <ArrowUpRight size={14} /></Link>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <Link key={c.title} href={c.href} className="group overflow-hidden rounded-[20px] border border-line bg-paper flex flex-col hover:shadow-[0_16px_40px_rgba(20,20,19,0.08)] transition-all">
            <div className="h-[220px] overflow-hidden bg-cream">
              {/* use img tag for external JT hosts */}
              <img src={c.img} alt={c.title} className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="font-display text-[18px] leading-none flex items-center gap-2">{c.title} <ArrowUpRight size={14} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" /></div>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-60 flex-1">{c.desc}</p>
              <span className="mt-4 inline-flex text-xs font-semibold tracking-[0.08em] uppercase text-ink">View →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Revival() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-12 lg:py-16 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 backdrop-blur">
            <span className="text-[11px] tracking-[0.12em] uppercase font-semibold opacity-80">Revival Design + Build</span>
            <span className="text-[11px] opacity-50">• Sister company</span>
          </div>
          <h2 className="font-display text-[30px] lg:text-[44px] leading-[0.98] mt-4">Home remodeling, <span className="font-serif italic font-light text-[#E8D5B0]">revived.</span></h2>
          <p className="mt-4 max-w-[520px] text-sm leading-relaxed text-white/70">Through Revival, JT Custom Builders can craft your new custom home, addition, garage, in-law suite and any other “ground-up” construction — and Revival can expertly design and transform your interior spaces: bathrooms, kitchens and basements.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://revivaldesign-build.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-ink">Visit Revival Design + Build <ArrowUpRight size={14} /></a>
            <Link href="/remodeling" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/10">Remodeling Services</Link>
          </div>
          <div className="mt-6 flex gap-6 text-xs text-white/50">
            <span className="flex items-center gap-1.5"><Check size={12} className="text-[#C9A86A]" /> Kitchens</span>
            <span className="flex items-center gap-1.5"><Check size={12} className="text-[#C9A86A]" /> Bathrooms</span>
            <span className="flex items-center gap-1.5"><Check size={12} className="text-[#C9A86A]" /> Basements</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://jtcustombuilders.com/wp-content/uploads/2025/02/kitchen-remodel-before.jpg" alt="Before" className="h-[220px] w-full object-cover rounded-[16px] opacity-80" />
          <img src="https://jtcustombuilders.com/wp-content/uploads/2025/02/kitchen-remodel-after.jpg" alt="After" className="h-[220px] w-full object-cover rounded-[16px]" />
          <div className="col-span-2 rounded-[16px] bg-white/10 border border-white/15 p-5 backdrop-blur">
            <div className="flex gap-3">
              <Quote size={18} className="shrink-0 text-[#C9A86A] mt-0.5" />
              <p className="text-sm leading-relaxed text-white/80">Reviving homes + transforming lives — same JT standard, focused on interiors.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsPreview() {
  const items = [
    { title: "Frederick Farmhouse", cat: "Custom Home", img: "https://jtcustombuilders.com/wp-content/uploads/elementor/thumbs/OConnell-project-JTCB-15-rs3jx66ojrd2hg5mubwz7v118q48kkzrf1vsabothg.jpg" },
    { title: "Hillside Homestead", cat: "Addition", img: "https://jtcustombuilders.com/wp-content/uploads/elementor/thumbs/JT-Custom-Builders-exterior-backyard-stamped-concrete-walkout-rifft5jap2samng045rhq0f0hape7nvhk377337pz8.jpg" },
    { title: "Custom Castle", cat: "Addition", img: "https://jtcustombuilders.com/wp-content/uploads/elementor/thumbs/Grove-project-JTCB-3-rs3j6n6no31qtmotqv40uk0pp8vbc3oh3r2gp70t38.jpg" },
    { title: "Modern Farmhouse", cat: "Custom Home", img: "https://jtcustombuilders.com/wp-content/uploads/2025/02/Failed-Contractor-Addition-Takeover-9.jpeg" },
    { title: "Garage Goals", cat: "Custom Garage", img: "https://jtcustombuilders.com/wp-content/uploads/2025/02/JT-Custom-Homes-Maryland-Front-Walk-768x1024.jpg" },
    { title: "Dual Haven", cat: "Addition", img: "https://jtcustombuilders.com/wp-content/uploads/2025/02/Kitchen-Remodeling-in-Maryland-JT-Custom-Builders.jpg" },
  ];
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-8 py-12 lg:py-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <span className="chip bg-cream border border-line">Selected Projects</span>
          <h2 className="font-display text-[28px] lg:text-[40px] leading-none mt-3">Recent work</h2>
        </div>
        <Link href="/category/projects" className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium hover:bg-cream">View all projects <ArrowUpRight size={14} /></Link>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <Link key={it.title} href="/category/projects" className="group relative overflow-hidden rounded-[18px] bg-ink">
            <img src={it.img} alt={it.title} className="h-[300px] w-full object-cover opacity-90 group-hover:scale-[1.04] transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent opacity-80" />
            <div className="absolute bottom-0 p-5 text-white">
              <div className="text-[11px] tracking-[0.1em] uppercase font-semibold opacity-70">{it.cat}</div>
              <div className="font-display text-[18px] mt-1">{it.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    { name: "Jennifer Rogers", text: "Exceeded all expectations — professionalism and craftsmanship were outstanding. From foundation to finishing touches, precision and care in every aspect.", stars: 5 },
    { name: "Verified Homeowner", text: "They took time to listen to our ideas, provided valuable insights and suggestions that improved the outcome. Punctual, organized and communicative.", stars: 5 },
    { name: "Google Reviewer", text: "Adhered to strict timeline and budget — commitment to customer satisfaction set them apart. Beautifully executed project.", stars: 5 },
  ];
  return (
    <section className="bg-cream border-y border-line">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-white border border-line px-3 py-1.5 text-xs font-medium"><Star size={12} fill="#C9A86A" className="text-[#C9A86A]" /> EXCELLENT</span>
          <span className="text-sm text-ink-60">Based on 20 reviews on Google</span>
          <a href="https://www.google.com/search?q=JT+Custom+Builders+Mount+Airy" target="_blank" rel="noreferrer" className="text-sm font-medium underline decoration-ink/20 underline-offset-4">Read reviews →</a>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-[18px] bg-paper border border-line p-6">
              <div className="flex gap-0.5 text-[#C9A86A]">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={12} fill="currentColor" />)}</div>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-60">“{r.text}”</p>
              <div className="mt-4 text-sm font-medium">{r.name}</div>
              <div className="text-xs text-ink-40">Verified Google Review</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: "Where do you build?", a: "We excel across Central Maryland — Howard, Carroll, Montgomery and Frederick Counties and beyond — based in Mount Airy. We build on your lot and can help with lot feasibility and site evaluation." },
    { q: "What services do you offer?", a: "Custom home building, additions, garages (attached/detached), and remodeling. Interiors are served by our sister company Revival Design + Build — kitchens, baths and basements." },
    { q: "How does the custom home process work?", a: "Discover → Pre-Construction → Plan → Finalize Details → Build. We guide you through drawings, selections, engineering, surveys and permits with transparent communication." },
    { q: "Are you licensed and warranted?", a: "MHIC# 134973, MHBR No. 8115. Energy Star Partner, RESNET HERS, EPA RRP Lead-Safe Certified, 2-10 Home Warranty, members of Maryland Builders (MBIA) and NAHB. Homes built to last." },
  ];
  return (
    <section className="mx-auto max-w-[820px] px-6 lg:px-8 py-12">
      <h2 className="font-display text-[26px] text-center">Frequently asked</h2>
      <div className="mt-8 flex flex-col gap-3">
        {faqs.map((f, i) => (
          <div key={f.q} className="rounded-2xl bg-cream border border-line px-6">
            <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 py-5 text-left text-[14px] font-medium" aria-expanded={open === i}>
              <span>{f.q}</span>
              <ChevronDown size={16} className={`shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
            </button>
            <div className={`grid transition-all ${open === i ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden"><p className="text-[13.5px] leading-relaxed text-ink-60">{f.a}</p></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-6 lg:px-8 pb-8">
      <div className="mx-auto max-w-[1440px] rounded-[24px] bg-ink text-paper px-8 py-10 lg:px-12 lg:py-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div>
          <h2 className="font-display text-[28px] lg:text-[36px] leading-none">Let’s talk about <span className="font-serif italic font-light text-[#E8D5B0]">your project.</span></h2>
          <p className="mt-3 max-w-[520px] text-sm leading-relaxed text-white/65">Complete the form to get started — we’ll answer questions about vision, lot, budget and timeline, and schedule a consultation.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/estimate" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-ink hover:bg-white/90">Start the Process <ArrowUpRight size={16} /></Link>
          <a href="tel:240-651-4200" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-medium text-white backdrop-blur hover:bg-white/15">240-651-4200</a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Elevating />
      <Process />
      <Services />
      <Revival />
      <ProjectsPreview />
      <Reviews />
      <FAQ />
      <CTA />
    </>
  );
}
