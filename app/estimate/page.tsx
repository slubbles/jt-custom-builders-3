"use client";
import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

export default function EstimatePage() {
  const [status, setStatus] = useState<"idle"|"loading"|"ok"|"err">("idle");
  const [form, setForm] = useState({ name:"", email:"", phone:"", location:"", message:"", source:"Website" });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const r = await fetch("/api/submit", { method:"POST", headers:{ "Content-Type":"application/json"}, body: JSON.stringify({...form, page:"estimate"})});
      if(!r.ok) throw new Error("fail");
      setStatus("ok");
      setForm({ name:"", email:"", phone:"", location:"", message:"", source:"Website"});
    } catch { setStatus("err"); }
  }

  return (
    <div className="pt-[72px]">
      <section className="mx-auto max-w-[1440px] px-6 lg:px-8 py-10 lg:py-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
        <div>
          <span className="chip bg-cream border border-line">Start the Process</span>
          <h1 className="font-display text-[40px] lg:text-[56px] leading-[0.95] mt-4">Let’s talk about <br/><span className="font-serif italic font-light">your project</span></h1>
          <p className="mt-4 max-w-[520px] text-sm leading-relaxed text-ink-60">Complete the form to get started. Tell us about your vision — where to build, aesthetic, budget and timeframe — and we’ll answer questions and schedule a consultation.</p>

          <form onSubmit={submit} className="mt-8 rounded-[20px] border border-line bg-cream p-6 grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5 text-sm font-medium">Name<input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Jane Doe" className="rounded-full border border-line bg-white px-4 py-3 text-sm outline-none focus:border-ink/20" /></label>
              <label className="grid gap-1.5 text-sm font-medium">Phone<input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} placeholder="240-651-4200" className="rounded-full border border-line bg-white px-4 py-3 text-sm outline-none focus:border-ink/20" /></label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5 text-sm font-medium">Email<input required type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="info@jtcustombuilders.com" className="rounded-full border border-line bg-white px-4 py-3 text-sm outline-none focus:border-ink/20" /></label>
              <label className="grid gap-1.5 text-sm font-medium">Location<input value={form.location} onChange={e=>setForm({...form, location:e.target.value})} placeholder="Mount Airy, MD" className="rounded-full border border-line bg-white px-4 py-3 text-sm outline-none focus:border-ink/20" /></label>
            </div>
            <label className="grid gap-1.5 text-sm font-medium">Describe Your Project<textarea required value={form.message} onChange={e=>setForm({...form, message:e.target.value})} placeholder="Custom home, addition, garage, or remodel — tell us about lot, style, timeline..." rows={4} className="rounded-[18px] border border-line bg-white px-4 py-3 text-sm outline-none focus:border-ink/20 resize-none" /></label>
            <label className="grid gap-1.5 text-sm font-medium">How did you hear about us?<input value={form.source} onChange={e=>setForm({...form, source:e.target.value})} placeholder="Google, referral, Instagram..." className="rounded-full border border-line bg-white px-4 py-3 text-sm outline-none focus:border-ink/20" /></label>
            <button disabled={status==="loading"} className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper hover:bg-stone disabled:opacity-60">
              {status==="loading" ? "Sending..." : "Submit"} <ArrowUpRight size={14}/>
            </button>
            {status==="ok" && <p className="text-sm text-green-700 flex items-center gap-2"><Check size={14}/> Thanks — we’ll be in touch shortly. Prefer phone? Call 240-651-4200.</p>}
            {status==="err" && <p className="text-sm text-red-600">Something went wrong. Try again or email info@jtcustombuilders.com.</p>}
            <p className="text-xs text-ink-40">Read our FAQs below. We respect your privacy — no spam.</p>
          </form>
        </div>

        <div className="space-y-4">
          <div className="rounded-[20px] border border-line bg-paper p-7">
            <h3 className="font-display text-[18px]">Areas We Serve</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-60">We excel across Maryland — check where we typically work, but are not limited to:</p>
            <ul className="mt-4 grid gap-3 text-sm">
              <li className="rounded-xl bg-cream border border-line p-4"><span className="font-medium">Howard County:</span> <span className="text-ink-60">Suburban comfort meets lively communities.</span></li>
              <li className="rounded-xl bg-cream border border-line p-4"><span className="font-medium">Carroll County:</span> <span className="text-ink-60">Countryside and modernity.</span></li>
              <li className="rounded-xl bg-cream border border-line p-4"><span className="font-medium">Montgomery County:</span> <span className="text-ink-60">Bustling, perfect for families.</span></li>
              <li className="rounded-xl bg-cream border border-line p-4"><span className="font-medium">Frederick County:</span> <span className="text-ink-60">Historical charm and new opportunities.</span></li>
            </ul>
            <p className="mt-4 text-sm font-medium">In each region, we turn your dream home into reality. Let’s make something beautiful together.</p>
          </div>
          <div className="rounded-[20px] bg-ink text-paper p-7">
            <div className="text-xs tracking-[0.12em] uppercase font-semibold opacity-50">Contact directly</div>
            <a href="tel:240-651-4200" className="mt-2 block font-display text-[22px]">240-651-4200</a>
            <a href="mailto:info@jtcustombuilders.com" className="text-sm text-white/70 hover:text-white">info@jtcustombuilders.com</a>
            <p className="mt-3 text-xs text-white/50">Mount Airy, Maryland • MHIC# 134973 • MHBR No. 8115</p>
            <div className="mt-4 flex gap-2">
              <a href="https://www.facebook.com/jtcustombuilders" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-3 py-1.5 text-xs hover:bg-white hover:text-ink">Facebook</a>
              <a href="https://www.instagram.com/jt.builders/" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-3 py-1.5 text-xs hover:bg-white hover:text-ink">Instagram</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
