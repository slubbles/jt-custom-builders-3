import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 grid place-items-center rounded-[9px] bg-white text-ink font-serif text-[13px] tracking-[0.08em]">JT</div>
              <div>
                <div className="font-display text-[17px] leading-none">JT Custom Builders</div>
                <div className="text-[10px] tracking-[0.14em] uppercase opacity-50 mt-1">Relationship-focused builder</div>
              </div>
            </div>
            <p className="mt-5 max-w-[360px] text-sm leading-relaxed text-white/60">
              Relationship-focused home builder serving central Maryland. Custom homes, additions, garages &amp; remodeling — crafted with integrity, superior craftsmanship and energy-efficient methods.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { label: "Energy Star", href: "https://www.energystar.gov/" },
                { label: "Maryland Builders", href: "https://www.marylandbuilders.org/" },
                { label: "HERS", href: "https://www.hersindex.com/find-a-resnet-energy-smart-regional-builder/?state=MD" },
                { label: "EPA RRP", href: "https://www.epa.gov/lead/renovation-repair-and-painting-program-firm-certification" },
                { label: "2-10 Warranty", href: "https://www.2-10.com/" },
              ].map((a) => (
                <a key={a.label} href={a.href} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-3 py-1 text-[11px] tracking-wide text-white/70 hover:bg-white hover:text-ink transition-colors">{a.label}</a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.14em] uppercase font-semibold opacity-50">Services</p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li><Link href="/custom-home-building-in-maryland" className="hover:text-white">Custom Homes</Link></li>
              <li><Link href="/additions" className="hover:text-white">Additions</Link></li>
              <li><Link href="/garages" className="hover:text-white">Garages</Link></li>
              <li><Link href="/remodeling" className="hover:text-white">Remodel &amp; Revival Design + Build</Link></li>
              <li><Link href="/category/projects" className="hover:text-white">Projects</Link></li>
            </ul>
            <p className="mt-6 text-[11px] tracking-[0.14em] uppercase font-semibold opacity-50">Areas</p>
            <p className="mt-2 text-sm leading-relaxed text-white/60">Howard, Carroll, Montgomery &amp; Frederick Counties — and throughout Central Maryland. Mount Airy based.</p>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.14em] uppercase font-semibold opacity-50">Contact</p>
            <div className="mt-4 space-y-1 text-sm text-white/70">
              <p>Mount Airy, Maryland</p>
              <a href="tel:240-651-4200" className="block hover:text-white">240-651-4200</a>
              <a href="mailto:info@jtcustombuilders.com" className="block hover:text-white">info@jtcustombuilders.com</a>
              <p className="pt-2 text-xs opacity-50">MHIC# 134973 &nbsp;•&nbsp; MHBR No. 8115</p>
            </div>
            <div className="mt-4 flex gap-4 text-xs">
              <a href="https://www.facebook.com/jtcustombuilders" target="_blank" rel="noreferrer" className="underline decoration-white/20 underline-offset-4 hover:text-white">Facebook</a>
              <a href="https://www.instagram.com/jt.builders/" target="_blank" rel="noreferrer" className="underline decoration-white/20 underline-offset-4 hover:text-white">Instagram</a>
              <a href="https://revivaldesign-build.com/" target="_blank" rel="noreferrer" className="underline decoration-white/20 underline-offset-4 hover:text-white">Revival Design + Build</a>
            </div>
            <Link href="/estimate" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-ink hover:bg-white/90">Start the Process</Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs leading-relaxed text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} JT Custom Builders. All rights reserved. &nbsp; <a href="/privacy-policy" className="hover:text-white/70">Privacy Policy</a> · Site Map</p>
          <p>Website &amp; marketing by Thalia Street Digital · Member NAHB · Maryland Builders Association</p>
        </div>
      </div>
    </footer>
  );
}
