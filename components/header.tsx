"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Custom Homes", href: "/custom-home-building-in-maryland" },
  { label: "Additions", href: "/additions" },
  { label: "Garages", href: "/garages" },
  { label: "Remodel", href: "/remodeling" },
  { label: "Projects", href: "/category/projects" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ${scrolled ? "bg-paper/90 backdrop-blur-xl border-b border-line shadow-[0_8px_30px_rgba(20,20,19,0.06)]" : "bg-transparent border-transparent"}`}>
      {/* top contact bar - only when not scrolled, like JT original */}
      <div className={`hidden lg:flex items-center justify-between mx-auto max-w-[1440px] px-6 lg:px-8 py-2 text-[12px] transition-all duration-300 ${scrolled ? "h-0 py-0 overflow-hidden opacity-0" : "h-auto opacity-100 border-b border-white/10"}`}>
        <div className={`flex items-center gap-5 ${scrolled ? "text-ink-60" : "text-white/80"}`}>
          <a href="tel:240-651-4200" className="flex items-center gap-2 hover:opacity-80"> <Phone size={12}/> 240-651-4200</a>
          <a href="mailto:info@jtcustombuilders.com" className="hover:opacity-80">info@jtcustombuilders.com</a>
          <span className="hidden xl:inline opacity-60">Mount Airy, Maryland • MHIC# 134973 • MHBR No. 8115</span>
        </div>
        <div className="flex items-center gap-4 text-white/70">
          <a href="https://www.facebook.com/jtcustombuilders" target="_blank" rel="noreferrer" className="hover:text-white transition-colors text-[11px] tracking-[0.12em] uppercase font-medium">Facebook</a>
          <a href="https://www.instagram.com/jt.builders/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors text-[11px] tracking-[0.12em] uppercase font-medium">Instagram</a>
        </div>
      </div>
      <div className="mx-auto max-w-[1440px] flex items-center justify-between px-6 lg:px-8 h-[64px] lg:h-[68px]">
        <Link href="/" className="flex items-center gap-3">
          {/* JT monogram - sophisticated serif */}
          <div className={`h-9 w-9 flex items-center justify-center rounded-[9px] border text-[13px] font-serif font-medium tracking-[0.08em] transition-colors ${scrolled ? "bg-ink text-paper border-ink" : "bg-white text-ink border-white"}`}>JT</div>
          <div className="leading-none">
            <div className={`font-display text-[17px] tracking-tight leading-none ${scrolled ? "text-ink" : "text-white"}`}>JT Custom Builders</div>
            <div className={`text-[10px] tracking-[0.14em] uppercase font-medium mt-[2px] ${scrolled ? "text-ink-40" : "text-white/60"}`}>Central Maryland</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`text-[13.5px] font-medium tracking-tight hover:opacity-60 transition-opacity ${scrolled ? "text-ink" : "text-white/90"}`}>{l.label}</Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:240-651-4200" className={`hidden xl:inline-flex text-[13px] font-medium ${scrolled ? "text-ink" : "text-white/90"}`}>240-651-4200</a>
          <Link href="/estimate" className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-medium transition-all ${scrolled ? "bg-ink text-paper hover:bg-stone" : "bg-white text-ink hover:bg-white/90"}`}>
            Start the Process <ArrowUpRight size={14} className="opacity-60"/>
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className={`lg:hidden h-9 w-9 grid place-items-center rounded-full border transition-colors ${scrolled ? "border-line text-ink bg-paper" : "border-white/20 text-white bg-white/10 backdrop-blur"}`} aria-label="Menu">
          {open ? <X size={16}/> : <Menu size={16}/>}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-paper">
          <nav className="px-6 py-6 flex flex-col gap-1">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={()=>setOpen(false)} className="py-3 text-[17px] font-medium border-b border-line last:border-0">{l.label}</Link>
            ))}
            <Link href="/estimate" onClick={()=>setOpen(false)} className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-ink text-paper py-4 text-[14px] font-medium">Start the Process <ArrowUpRight size={16}/></Link>
            <div className="mt-6 flex gap-4 text-xs text-ink-60">
              <a href="tel:240-651-4200">240-651-4200</a>
              <a href="mailto:info@jtcustombuilders.com">info@jtcustombuilders.com</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
