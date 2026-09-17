import Link from "next/link";

const projects = [
  { title: "The Hillside Homestead", cat: "Home Addition", img: "https://jtcustombuilders.com/wp-content/uploads/elementor/thumbs/JT-Custom-Builders-exterior-backyard-stamped-concrete-walkout-rifft5jap2samng045rhq0f0hape7nvhk377337pz8.jpg" },
  { title: "Farmhouse Addition", cat: "Home Addition", img: "https://jtcustombuilders.com/wp-content/uploads/elementor/thumbs/Grove-project-JTCB-3-rs3j6n6no31qtmotqv40uk0pp8vbc3oh3r2gp70t38.jpg" },
  { title: "Dual Haven", cat: "Home Addition", img: "https://jtcustombuilders.com/wp-content/uploads/elementor/thumbs/OConnell-project-JTCB-15-rs3jx66ojrd2hg5mubwz7v118q48kkzrf1vsabothg.jpg" },
  { title: "The Custom Castle", cat: "Home Addition", img: "https://jtcustombuilders.com/wp-content/uploads/2025/02/Failed-Contractor-Addition-Takeover-9.jpeg" },
  { title: "The Seamless Expansion", cat: "Home Addition", img: "https://jtcustombuilders.com/wp-content/uploads/2025/02/Kitchen-Remodeling-in-Maryland-JT-Custom-Builders.jpg" },
  { title: "Renewed & Redefined", cat: "Home Addition", img: "https://jtcustombuilders.com/wp-content/uploads/2025/02/JT-Custom-Homes-Maryland-Front-Walk-768x1024.jpg" },
  { title: "Frederick Farmhouse", cat: "Custom Home", img: "https://jtcustombuilders.com/wp-content/uploads/elementor/thumbs/JT_Custom_Builders_front-elevation-slight-right-riffhsni458kc9xxfr0s3dli2ooq7bs8zvezbq1z5w.jpg" },
  { title: "Failed Contractor Addition Takeover", cat: "Home Addition", img: "https://jtcustombuilders.com/wp-content/uploads/2025/02/Failed-Contractor-Addition-Takeover-9.jpeg" },
  { title: "Modern Farmhouse", cat: "Custom Home", img: "https://jtcustombuilders.com/wp-content/uploads/2025/02/Kitchen-Remodeling-in-Maryland-JT-Custom-Builders.jpg" },
  { title: "Home with Heart", cat: "Custom Home", img: "https://jtcustombuilders.com/wp-content/uploads/2025/02/JT-Custom-Homes-Maryland-Front-Walk-768x1024.jpg" },
  { title: "Garage Goals", cat: "Custom Garage", img: "https://jtcustombuilders.com/wp-content/uploads/elementor/thumbs/JT-Custom-Builders-exterior-backyard-stamped-concrete-walkout-rifft5jap2samng045rhq0f0hape7nvhk377337pz8.jpg" },
  { title: "Front Porch Haven", cat: "Custom Home", img: "https://jtcustombuilders.com/wp-content/uploads/elementor/thumbs/Grove-project-JTCB-3-rs3j6n6no31qtmotqv40uk0pp8vbc3oh3r2gp70t38.jpg" },
];

export default function ProjectsPage() {
  return (
    <div className="pt-[72px]">
      <section className="mx-auto max-w-[1440px] px-6 lg:px-8 py-10 lg:py-14">
        <span className="chip bg-cream border border-line">Projects</span>
        <h1 className="font-display text-[40px] lg:text-[56px] leading-none mt-4">JT Custom Builders<br/><span className="font-serif italic font-light">Custom Homes &amp; Home Remodeling Projects</span></h1>
        <p className="mt-4 max-w-[640px] text-sm leading-relaxed text-ink-60">Real project photography from JT — custom homes, additions and garages across Central Maryland. Each project reflects our relationship-driven process and commitment to quality.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="group overflow-hidden rounded-[18px] border border-line bg-paper">
              <div className="h-[280px] overflow-hidden bg-cream">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <div className="text-[11px] tracking-[0.1em] uppercase font-semibold opacity-50">{p.cat}</div>
                  <div className="font-display text-[16px] mt-0.5">{p.title}</div>
                </div>
                <span className="rounded-full border border-line bg-cream px-3 py-1.5 text-xs font-medium">View Project</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[16px] bg-cream border border-line p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <p className="text-sm text-ink-60">Want details on a specific project? Start the process and tell us what you loved.</p>
          <Link href="/estimate" className="shrink-0 inline-flex items-center justify-center rounded-full bg-ink text-paper px-6 py-3 text-sm font-medium">Start the Process</Link>
        </div>
      </section>
    </div>
  );
}
