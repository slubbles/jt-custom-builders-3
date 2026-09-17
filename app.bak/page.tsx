"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-500 ${scrolled ? "text-ink" : "text-white"}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${scrolled ? "opacity-100 bg-paper/85 backdrop-blur-md border-b border-ink/10" : "opacity-0 bg-paper/85 backdrop-blur-md"}`}
      />
      <div className="relative mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 md:px-10 md:py-7">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Bay Home Club home">
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" aria-hidden>
            <path
              d="M4 26C4 15.5 9.4 7 16 7s12 8.5 12 19h-6.4c0-7.4-2.6-12.6-5.6-12.6S10.4 18.6 10.4 26H4Z"
              fill="currentColor"
            />
          </svg>
          <span className="text-[23px] font-semibold leading-none tracking-tight">Bay Home Club</span>
        </Link>
        <nav className="flex items-center gap-2.5">
          <a
            href="#benefits"
            className="hidden sm:inline-flex rounded-full border border-current/30 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-current/10"
          >
            Benefits
          </a>
          <a
            href="#membership"
            className="group flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300"
            style={{ background: scrolled ? "#282828" : "#fff", color: scrolled ? "#fff" : "#282828" }}
          >
            Get started <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.from(".hero-reveal", {
        y: 24,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.2,
      });
      gsap.from(".hero-glow", {
        opacity: 0,
        scale: 0.92,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.1,
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Warm interior — CSS recreation matching Franklin mottled room */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 68% 38%, #8a5426 0%, #5f3617 32%, #3c2010 56%, #221207 78%, #150c06 100%)",
        }}
      />
      {/* faux window light */}
      <div
        className="hero-glow absolute hidden md:block"
        style={{
          right: "6%",
          top: "13%",
          width: "30vw",
          height: "46vh",
          borderRadius: "18px",
          background:
            "linear-gradient(180deg, rgba(255,205,130,0.62) 0%, rgba(255,170,90,0.32) 62%, rgba(255,150,70,0.10) 100%)",
          filter: "blur(14px)",
        }}
      />
      <div
        className="absolute hidden md:block"
        style={{
          right: "calc(8vw + 2vw)",
          top: "13%",
          width: "30vw",
          height: "46vh",
          backgroundImage:
            "linear-gradient(rgba(20,10,4,0.50) 4px, transparent 4px), linear-gradient(90deg, rgba(20,10,4,0.50) 5px, transparent 5px)",
          backgroundSize: "100% 33%, 33% 100%",
          filter: "blur(0.6px)",
          opacity: 0.9,
        }}
      />
      {/* lamp glow */}
      <div
        className="hero-glow absolute"
        style={{
          left: "13%",
          top: "22%",
          width: "18vw",
          height: "18vw",
          maxWidth: 240,
          maxHeight: 240,
          background: "radial-gradient(circle, rgba(255,196,120,0.85) 0%, rgba(255,150,60,0.28) 52%, transparent 74%)",
          filter: "blur(14px)",
        }}
      />
      {/* lower room geometry */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "44%",
          background: "linear-gradient(180deg, rgba(22,13,7,0) 0%, rgba(26,15,8,0.94) 30%, #170d07 100%)",
        }}
      />
      <div
        className="absolute"
        style={{
          bottom: "30%",
          left: "4%",
          width: "64%",
          height: "20%",
          borderRadius: "30px 80px 0 0",
          background: "linear-gradient(180deg, #35200f 0%, #241409 100%)",
          opacity: 0.96,
        }}
      />
      {/* left dog-bed-ish warm blob */}
      <div
        className="absolute hidden md:block"
        style={{
          bottom: "4%",
          left: "28%",
          width: "48%",
          height: "30%",
          borderRadius: "48% 52% 46% 54% / 62% 58% 42% 38%",
          background: "linear-gradient(160deg, #e2c79c 0%, #c3a271 55%, #96764a 100%)",
          opacity: 0.92,
          filter: "blur(1px)",
        }}
      />
      {/* two blurred vases */}
      <div
        className="absolute hidden md:block"
        style={{
          bottom: "22%",
          left: "42%",
          width: "10vw",
          height: "24vh",
          borderRadius: "46% 54% 40% 60% / 58% 62% 38% 42%",
          background: "linear-gradient(180deg, #d9c9a4 0%, #c2ac82 100%)",
          opacity: 0.48,
          filter: "blur(11px)",
        }}
      />
      <div
        className="absolute hidden md:block"
        style={{
          bottom: "20%",
          left: "50%",
          width: "8vw",
          height: "20vh",
          borderRadius: "54% 46% 42% 58% / 60% 56% 44% 40%",
          background: "linear-gradient(180deg, #9c5230 0%, #7c3d22 100%)",
          opacity: 0.42,
          filter: "blur(12px)",
        }}
      />
      {/* vignette */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 52% at 50% 42%, transparent 28%, rgba(12,7,3,0.52) 74%, rgba(9,5,2,0.86) 100%)" }} />
      <div
        className="absolute inset-x-0 bottom-0 h-[30%]"
        style={{ background: "linear-gradient(180deg, transparent, rgba(10,6,3,0.70) 70%, rgba(8,5,2,0.96) 100%)" }}
      />
      <div
        className="absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Top glass bar */}
      <div className="hero-reveal absolute inset-x-0 top-[84px] z-10 flex justify-center px-4 md:top-[108px]">
        <div className="glass flex flex-col items-stretch divide-y divide-white/15 rounded-3xl text-[13px] text-white/90 sm:flex-row sm:items-center sm:divide-x sm:divide-y-0 overflow-hidden">
          <span className="flex items-center justify-center gap-2 px-5 py-2.5">
            <span className="tracking-[0.12em] text-white/60 text-[11px]">AS FEATURED IN</span>
            <span className="font-serif italic text-[13px]">The Bay Home Journal</span>
            <span aria-hidden>→</span>
          </span>
          <a href="#founder" className="flex items-center justify-center gap-2 px-5 py-2.5 hover:bg-white/5 transition-colors">
            <span className="font-serif italic text-[13px]">A letter from our founder</span>
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <h1 className="hero-reveal font-display text-[13vw] leading-[0.95] sm:text-6xl md:text-7xl lg:text-[84px] max-w-[820px]">
          Home, taken care of.
        </h1>
        <p className="hero-reveal mt-5 max-w-[560px] text-balance text-[16px] leading-relaxed text-white/85 md:text-[18px]">
          One membership to make everyday life at home effortless. Powered by a deep understanding of your home.
        </p>
      </div>

      <div className="hero-reveal absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-3.5 px-4">
        <a
          href="#membership"
          className="glass group flex items-center gap-3 rounded-full py-3 pl-6 pr-3 text-[15px] font-medium text-white shadow-2xl transition-transform duration-300 hover:scale-[1.03]"
        >
          <span aria-hidden className="text-lg leading-none">+</span>
          <span>Find your home to get started</span>
          <span
            className="inline-block h-7 w-7 rounded-full ring-1 ring-white/40"
            style={{ background: "conic-gradient(from 210deg, #acc064, #f0f3a2, #7d8f4d, #acc064)" }}
            aria-hidden
          />
        </a>
        <p className="text-[13px] text-white/75">Currently serving the San Francisco Bay Area</p>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <div className="px-4 md:px-6 pt-16 md:pt-20">
      <section className="mx-auto max-w-[1180px] rounded-[36px] md:rounded-[44px] bg-cream px-6 py-12 md:px-12 lg:px-16 md:py-16">
        <h2 className="text-center font-display text-3xl md:text-[40px] leading-none">How Bay Home Club membership works</h2>
        <div className="mt-12 grid gap-10 text-center md:grid-cols-3 md:gap-8">
          <div className="mx-auto flex max-w-[300px] flex-col items-center">
            <div className="flex h-14 items-center">
              <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden>
                <path d="M5 14 16 5l11 9v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V14Z" fill="#8a6f4d" />
                <path d="M3.5 15.5 16 5l12.5 10.5-1.6 1.9L16 8.6 5.1 17.4l-1.6-1.9Z" fill="#5d4a33" />
                <rect x="13.4" y="19" width="5.2" height="9" rx="0.8" fill="#4a3826" />
                <rect x="8" y="17.5" width="4" height="4" rx="0.6" fill="#e8dfc9" />
                <rect x="20" y="17.5" width="4" height="4" rx="0.6" fill="#e8dfc4" />
              </svg>
            </div>
            <h3 className="mt-4 text-[15px] font-semibold">We understand your home</h3>
            <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink/55">
              We learn and document every item, data point and serial number — so we can take care of your home with
              speed and precision.
            </p>
          </div>
          <div className="mx-auto flex max-w-[300px] flex-col items-center">
            <div className="flex h-14 items-center">
              <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden>
                <rect x="3" y="12" width="26" height="13" rx="2.5" fill="#b23a26" />
                <rect x="3" y="12" width="26" height="4" fill="#932e1e" />
                <path d="M12 12V9.5A2.5 2.5 0 0 1 14.5 7h3A2.5 2.5 0 0 1 20 9.5V12" stroke="#7a2418" strokeWidth="2.4" fill="none" />
                <rect x="14" y="14" width="4" height="4" rx="1" fill="#f3e6c8" />
              </svg>
            </div>
            <h3 className="mt-4 text-[15px] font-semibold">We give you the experts to care for it</h3>
            <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink/55">
              Use our vetted handymen, dedicated concierge and smart-home checkups to keep your home in perfect shape.
            </p>
          </div>
          <div className="mx-auto flex max-w-[300px] flex-col items-center">
            <div className="flex h-14 items-center">
              <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden>
                <circle cx="16" cy="18" r="10" fill="#c9c4b4" />
                <circle cx="16" cy="18" r="10" stroke="#8f8a78" strokeWidth="1.6" fill="#dcd7c6" />
                <path d="M16 12v6l4 2.4" stroke="#4a4638" strokeWidth="2" strokeLinecap="round" fill="none" />
                <rect x="14" y="3.5" width="4" height="3.5" rx="1" fill="#6f6a58" />
                <path d="M24.5 9.5l2-2" stroke="#6f6a58" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="mt-4 text-[15px] font-semibold">We help with the everyday chores</h3>
            <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink/55">
              Hand over the day-to-day small stuff, like returning packages, scheduling your gardener and remembering
              your utility bill.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function TodoBanner() {
  return (
    <div className="flex flex-col items-center gap-y-5 px-6 pb-10 pt-20 text-center md:pt-28 md:pb-14">
      <span className="chip bg-warmchip text-[#8a5a3f]">Handymen + Concierge</span>
      <h2 className="font-display text-[38px] leading-none md:text-[64px]">Your to-do list, done.</h2>
      <p className="max-w-lg text-[15px] leading-relaxed text-ink/60">
        Bay Home Club gives you a team of experts to tackle everyday home projects big and small, and give you your
        time, money, and sanity back.
      </p>
    </div>
  );
}

function KitchenTaskCloud() {
  const lines = [
    ["hang drapes", "mount tv", "fix squeaky hinge", "hang drapes", "mount tv"],
    ["clean the chandelier", "descale the coffee machine", "clean the chandelier", "schedule landscaper"],
    ["re-caulk shower", "replace air filter", "re-caulk shower", "touch up paint"],
    ["schedule landscaper", "hang drapes", "service HVAC", "schedule landscaper"],
  ];
  return (
    <section className="relative h-[360px] w-full overflow-hidden md:h-[500px]">
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,#e6d9bf 0%,#d5c3a0 42%,#b8a583 100%)" }}>
        {/* kitchen window glow */}
        <div
          className="absolute right-[5%] top-[6%] h-[62%] w-[34%] opacity-90 hidden md:block"
          style={{
            background: "radial-gradient(ellipse at center, rgba(255,252,238,0.96), rgba(255,240,200,0.45) 58%, transparent 78%)",
            filter: "blur(10px)",
          }}
        />
        <div
          className="absolute right-[9%] top-[10%] h-[54%] w-[24%] hidden md:block"
          style={{ border: "10px solid rgba(247,242,226,0.92)", borderRadius: 6, filter: "blur(0.6px)" }}
        />
        {/* cabinets */}
        <div className="absolute left-[3%] top-[8%] hidden md:flex gap-4">
          <div className="h-[118px] w-[148px] rounded-lg border border-[#b8a888] bg-[#efe5cd] shadow-[0_10px_24px_rgba(90,70,40,0.15)]" />
          <div className="h-[118px] w-[148px] rounded-lg border border-[#b8a888] bg-[#efe5cd] shadow-[0_10px_24px_rgba(90,70,40,0.15)]" />
          <div className="h-[118px] w-[148px] rounded-lg border border-[#b8a888] bg-[#efe5cd] shadow-[0_10px_24px_rgba(90,70,40,0.15)]" />
        </div>
        <div className="absolute inset-x-0 bottom-[24%] h-[22px] bg-[#f7f1de] shadow-[0_-4px_14px_rgba(80,60,30,0.2)]" />
        <div className="absolute inset-x-0 bottom-0 h-[24%] bg-gradient-to-b from-[#a08a66] to-[#8a7554]" />
        {/* handles */}
        <div className="absolute inset-x-[4%] bottom-[3%] hidden md:flex justify-between">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-[48px] md:h-[56px] w-[14%] rounded-md border border-[#8f7d5f] bg-[#bda888]/80" />
          ))}
        </div>
        <div className="absolute inset-x-[6%] bottom-[11%] hidden md:flex justify-between">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-[5px] w-[40px] rounded-full bg-[#6f5d3c]" />
          ))}
        </div>
        {/* person */}
        <div className="absolute right-[26%] top-[40%] hidden md:block">
          <div className="mx-auto h-10 w-6 rounded-b-xl rounded-t-md bg-[#cfc2a4]" />
          <div className="mx-auto -mt-12 h-12 w-12 rounded-full opacity-90" style={{ background: "radial-gradient(circle at 40% 40%, #d98a6a, #a85338 70%)" }} />
        </div>
        {/* plant blobs */}
        <div
          className="absolute -left-10 bottom-[-30px] h-[200px] w-[200px] rounded-full opacity-95 hidden md:block"
          style={{ background: "radial-gradient(circle at 35% 30%, #44602f, #2d4622 70%)", filter: "blur(10px)" }}
        />
        <div
          className="absolute left-[18%] bottom-[16%] h-[96px] w-[96px] rounded-full opacity-85 hidden md:block"
          style={{ background: "radial-gradient(circle at 40% 30%, #4c6a34, #345026 75%)", filter: "blur(12px)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(96,66,24,0.18), rgba(66,46,18,0.30))" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 55% 45%, transparent 38%, rgba(56,38,16,0.35) 100%)" }} />
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-1 select-none py-6">
        {lines.map((row, i) => (
          <div key={i} className="flex whitespace-nowrap">
            {row.map((t, j) => (
              <span
                key={j}
                className="task-cloud-line whitespace-nowrap px-3 md:px-4 font-display text-xl md:text-4xl text-white"
                style={{
                  textShadow: "0 2px 10px rgba(50,32,8,0.55)",
                  opacity: i === 1 ? 0.95 - j * 0.12 : 0.72 - j * 0.08,
                  filter: "blur(0.5px)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        ))}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <span className="font-display text-xl md:text-4xl text-white" style={{ textShadow: "0 2px 14px rgba(40,25,5,0.6)" }}>
            and{" "}
          </span>
          <span className="rounded-full bg-[#fdfbf4] px-5 py-2 md:px-7 md:py-2.5 text-center font-display text-xl md:text-4xl text-ink shadow-2xl">
            500 more!
          </span>
        </div>
      </div>
    </section>
  );
}

function HandymenConcierge() {
  return (
    <>
      <section id="benefits" className="mx-auto grid max-w-[1180px] items-center gap-10 px-6 py-14 md:grid-cols-2 md:px-10 md:py-20">
        <div>
          <h2 className="font-display text-4xl leading-[1.08] md:text-[52px]">Expert handymen, on the house.</h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink/70">
            Your membership includes <strong className="font-semibold text-ink">1.5 hours of handyman time every month</strong> — and
            rolls over when you don&apos;t use it. Handymen are in-house, extensively vetted, and available when others aren&apos;t —
            early mornings, late evenings, and weekends.
          </p>
          <a href="#membership" className="arrow-link mt-7 text-[15px]">
            Explore Handymen <span aria-hidden>→</span>
          </a>
        </div>
        <div>
          <div className="relative h-[400px] md:h-[440px] rounded-[36px] bg-cream p-6 md:p-8 overflow-hidden">
            <span className="chip mx-auto bg-sunchip text-[#7d5316] flex w-fit">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                <circle cx="12" cy="13" r="8" />
                <path d="M12 9v4l2.5 2M9 2h6" strokeLinecap="round" />
              </svg>
              1h 30m credits
            </span>
            <div className="relative mt-8 h-[300px] mx-auto max-w-[320px]">
              <div
                className="floaty absolute flex w-[300px] items-center gap-3 rounded-2xl bg-white p-3 pr-6 shadow-[0_18px_40px_rgba(60,50,30,0.16)] left-0 md:left-4 top-0 z-10"
                style={{ "--tilt": "-4deg" } as React.CSSProperties}
              >
                <div className="h-11 w-11 shrink-0 rounded-lg" style={{ background: "linear-gradient(135deg,#3b3b3b,#191919)" }} />
                <span className="text-[14.5px] font-medium">Replace Shades Batteries</span>
              </div>
              <div
                className="floaty absolute flex w-[300px] items-center gap-3 rounded-2xl bg-white p-3 pr-6 shadow-[0_18px_40px_rgba(60,50,30,0.16)] left-2 md:left-10 top-[92px] z-20"
                style={{ "--tilt": "2.5deg", animationDelay: "0.6s" } as React.CSSProperties}
              >
                <div className="h-11 w-11 shrink-0 rounded-lg" style={{ background: "linear-gradient(135deg,#cde4c2,#9cc48a)" }} />
                <span className="text-[14.5px] font-medium">Install New Flood Sensor</span>
              </div>
              <div
                className="floaty absolute flex w-[300px] items-center gap-3 rounded-2xl bg-white p-3 pr-6 shadow-[0_18px_40px_rgba(60,50,30,0.16)] left-0 top-[184px] z-30"
                style={{ "--tilt": "-1.5deg", animationDelay: "1.2s" } as React.CSSProperties}
              >
                <div className="h-11 w-11 shrink-0 rounded-lg" style={{ background: "linear-gradient(135deg,#e7d9bd,#cbb894)" }} />
                <span className="text-[14.5px] font-medium">Patch Drywall in Hall</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1180px] items-center gap-10 px-6 py-14 md:grid-cols-2 md:px-10 md:py-20">
        <div className="md:order-2">
          <h2 className="font-display text-4xl leading-[1.08] md:text-[52px]">A full-service concierge for your home.</h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink/70">
            Unlimited use of experts — equipped with deep knowledge of your home — to take any task or project from
            start to finish, including vendor research, negotiation, scheduling, and payments.
          </p>
          <a href="#membership" className="arrow-link mt-7 text-[15px]">
            Explore Concierge <span aria-hidden>→</span>
          </a>
        </div>
        <div className="md:order-1">
          <div className="relative rounded-[36px] bg-cream p-6 md:p-8">
            <div className="flex flex-col gap-4">
              <div className="max-w-[78%] rounded-[18px] rounded-bl-[6px] bg-white px-4 py-3.5 text-[14px] leading-snug shadow-[0_8px_24px_rgba(60,50,30,0.08)]">
                Paint Kid&apos;s Bedroom
                <div className="mt-2 flex gap-2">
                  <span className="rounded-full bg-ink px-3 py-1 text-xs font-medium text-white">Benjamin Moore OC-17</span>
                  <span className="rounded-full border border-ink/15 px-3 py-1 text-xs">Eggshell</span>
                </div>
              </div>
              <div className="max-w-[78%] self-end rounded-[18px] rounded-br-[6px] bg-ink px-4 py-3.5 text-[14px] leading-snug text-white">
                Got it — scheduling our painter for Thursday. I&apos;ll handle the color match.
              </div>
              <div className="max-w-[78%] rounded-[18px] rounded-bl-[6px] bg-white px-4 py-3.5 text-[14px] leading-snug shadow-[0_8px_24px_rgba(60,50,30,0.08)]">
                My laundry washer is showing error &apos;OE&apos;. what do I do?
              </div>
              <div className="max-w-[78%] self-end rounded-[18px] rounded-br-[6px] bg-ink px-4 py-3.5 text-[14px] leading-snug text-white">
                That&apos;s the drain filter — I&apos;ve pulled your LG model specs &amp; booked a tech for tomorrow 9am.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Autopilot() {
  const items = [
    { title: "Keep your bedroom refresh on schedule", icon: "bed" },
    { title: "Keep your washer maintenance on schedule", icon: "washer" },
    { title: "Keep your deck cleaning on schedule", icon: "deck" },
    { title: "Keep your kitchen tune up on schedule", icon: "kitchen" },
    { title: "Keep your smoke detector check on schedule", icon: "smoke" },
  ];
  return (
    <section className="overflow-hidden py-10 md:py-14">
      <div className="mx-auto max-w-[1180px] px-6 md:px-10 text-center">
        <h2 className="font-display text-[34px] leading-none md:text-[52px]">Never think about maintenance again.</h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-ink/60">
          One-tap subscriptions to care plans made specifically for your home. Bay Home Club handles scheduling, vendors,
          and parts — so you avoid costly repairs down the road.
        </p>
      </div>
      <div className="mt-10 flex gap-4 overflow-x-auto no-scrollbar px-6 md:px-10 pb-4 snap-x">
        <div className="shrink-0 w-6 md:w-[calc((100vw-1180px)/2)]" />
        {items.map((it) => (
          <div
            key={it.title}
            className="shrink-0 w-[300px] md:w-[340px] snap-start rounded-[28px] bg-cream p-6 flex flex-col gap-6"
          >
            <div className="h-[140px] rounded-2xl bg-white border border-ink/5 flex items-center justify-center overflow-hidden">
              {it.icon === "bed" && (
                <svg width="120" height="80" viewBox="0 0 120 80" aria-hidden>
                  <rect x="10" y="36" width="100" height="28" rx="6" fill="#c9a26b" />
                  <rect x="18" y="22" width="64" height="28" rx="6" fill="#e7d9bd" />
                  <circle cx="92" cy="18" r="10" fill="#f0e6b8" />
                </svg>
              )}
              {it.icon === "washer" && (
                <svg width="80" height="80" viewBox="0 0 80 80" aria-hidden>
                  <rect x="14" y="10" width="52" height="60" rx="8" fill="#d9c7a8" />
                  <circle cx="40" cy="42" r="20" fill="#fff" stroke="#b8a888" strokeWidth="2" />
                  <circle cx="40" cy="42" r="12" fill="#cfe3f5" opacity="0.9" />
                </svg>
              )}
              {it.icon === "deck" && (
                <svg width="120" height="60" viewBox="0 0 120 60" aria-hidden>
                  <rect x="6" y="28" width="108" height="8" rx="3" fill="#8a6f4d" />
                  <rect x="10" y="38" width="100" height="14" rx="3" fill="#c9a26b" />
                  <path d="M20 28V12M40 28V12M60 28V12M80 28V12M100 28V12" stroke="#6b5438" strokeWidth="2" />
                </svg>
              )}
              {it.icon === "kitchen" && (
                <svg width="100" height="80" viewBox="0 0 100 80" aria-hidden>
                  <rect x="12" y="14" width="76" height="46" rx="6" fill="#efe5cd" stroke="#b8a888" />
                  <rect x="20" y="24" width="60" height="28" rx="4" fill="#d9c7a8" />
                  <circle cx="74" cy="24" r="3" fill="#8a6f4d" />
                </svg>
              )}
              {it.icon === "smoke" && (
                <svg width="80" height="80" viewBox="0 0 80 80" aria-hidden>
                  <circle cx="40" cy="40" r="28" fill="#e8e0c8" />
                  <circle cx="40" cy="40" r="18" fill="#fff" />
                  <circle cx="40" cy="40" r="4" fill="#c23a3a" />
                </svg>
              )}
            </div>
            <p className="text-[14px] leading-snug font-medium">{it.title} so your home stays at its best.</p>
            <span className="text-xs tracking-wide text-ink/50">AUTOPILOT • INCLUDED</span>
          </div>
        ))}
        <div className="shrink-0 w-6" />
      </div>
      <div className="mx-auto max-w-[1180px] px-6 md:px-10 mt-2">
        <a href="#membership" className="arrow-link text-[15px]">
          Explore Autopilot <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}

function EverydayChores() {
  return (
    <section className="mx-auto max-w-[1180px] px-6 py-12 md:px-10 md:py-16">
      <div className="text-center">
        <h2 className="font-display text-4xl md:text-[52px] leading-none">And for the everyday chores.</h2>
      </div>
      <div className="mx-auto mt-10 grid max-w-[900px] gap-5 md:grid-cols-2">
        <div className="relative flex h-[210px] md:h-[230px] flex-col rounded-[28px] bg-cream p-7 transition-transform duration-500 hover:-translate-y-1 overflow-hidden">
          <p className="text-sm text-ink/50">Packages</p>
          <p className="mt-1.5 max-w-[250px] text-[15px] font-medium leading-snug">
            Weekly package and donation pickups, included in membership
          </p>
          <div className="absolute bottom-5 right-6">
            <svg width="64" height="52" viewBox="0 0 72 60" aria-hidden>
              <rect x="8" y="26" width="26" height="22" rx="2" fill="#c9a26b" />
              <path d="M8 26l13-8 26 0-13 8H8Z" fill="#e0bd85" />
              <path d="M34 26l13-8v22l-13 8V26Z" fill="#a97f4c" />
              <rect x="30" y="38" width="26" height="18" rx="2" fill="#b28a55" />
              <path d="M30 38l11-7 24 0-11 7H30Z" fill="#d4ad76" />
              <path d="M54 38l11-7v18l-11 7V38Z" fill="#9c7443" />
            </svg>
          </div>
        </div>
        <div className="relative flex h-[210px] md:h-[230px] flex-col rounded-[28px] bg-cream p-7 transition-transform duration-500 hover:-translate-y-1 overflow-hidden">
          <p className="text-sm text-ink/50">Recurring Vendors</p>
          <p className="mt-1.5 max-w-[260px] text-[15px] font-medium leading-snug">Schedule and pay your regular cleaners, gardeners, and more</p>
          <div className="absolute bottom-5 right-6">
            <svg width="56" height="64" viewBox="0 0 64 72" aria-hidden>
              <path d="M32 34C20 26 18 12 26 6c4 8 8 12 6 20" fill="#5d7a3f" />
              <path d="M32 34c8-10 20-10 24-4-6 6-16 8-24 4Z" fill="#6f8c4a" />
              <path d="M32 36c-6 4-16 2-20-4 8-2 16 0 20 4Z" fill="#4c6634" />
              <path d="M22 40h20l-3 26h-14L22 40Z" fill="#b3703f" />
              <rect x="20" y="36" width="24" height="6" rx="2" fill="#c9814c" />
            </svg>
          </div>
        </div>
        <div className="relative flex h-[210px] md:h-[230px] flex-col rounded-[28px] bg-cream p-7 transition-transform duration-500 hover:-translate-y-1 overflow-hidden">
          <p className="text-sm text-ink/50">Utilities</p>
          <p className="mt-1.5 max-w-[260px] text-[15px] font-medium leading-snug">Monitor your electric, gas, water, and sanitation use — all in one place</p>
          <div className="absolute bottom-5 right-6">
            <svg width="60" height="68" viewBox="0 0 60 72" aria-hidden>
              <rect x="12" y="6" width="36" height="60" rx="6" fill="#7d8a6d" />
              <rect x="16" y="12" width="24" height="16" rx="2" fill="#e8ead9" />
              <text x="24" y="19" fontSize="9" fill="#4c5840" fontFamily="monospace">
                042
              </text>
              <circle cx="24" cy="32" r="2" fill="#5d6a4d" />
              <circle cx="36" cy="32" r="2" fill="#5d6a4d" />
              <rect x="18" y="40" width="24" height="18" rx="3" fill="#9aa886" />
            </svg>
          </div>
        </div>
        <div className="relative flex h-[210px] md:h-[230px] flex-col rounded-[28px] bg-cream p-7 transition-transform duration-500 hover:-translate-y-1 overflow-hidden">
          <p className="text-sm text-ink/50">Property Taxes</p>
          <p className="mt-1.5 max-w-[260px] text-[15px] font-medium leading-snug">Track your home&apos;s assessed value over time, and never miss a tax bill</p>
          <div className="absolute bottom-5 right-6">
            <svg width="64" height="58" viewBox="0 0 70 64" aria-hidden>
              <path d="M12 18c14-8 32-8 46 0-14 6-32 6-46 0Z" fill="#d9d4c4" />
              <path d="M12 28c14-8 32-8 46 0-14 6-32 6-46 0Z" fill="#e4dfcf" />
              <path d="M12 38c14-8 32-8 46 0-14 6-32 6-46 0Z" fill="#efeadb" />
              <path d="M14 14c12-6 30-6 42 0" stroke="#b3ac97" strokeWidth="1.6" fill="none" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

function DeepUnderstanding() {
  return (
    <section className="mx-auto max-w-[1180px] px-6 py-10 md:px-10 md:py-16">
      <div className="flex flex-col items-center gap-y-4 text-center">
        <span className="chip bg-mist text-[#6f7a3e]">Home Inventory</span>
        <h2 className="max-w-3xl font-display text-4xl leading-[1.08] md:text-[52px]">Enabled by a deep understanding of your home.</h2>
        <p className="max-w-[560px] text-[15px] leading-relaxed text-ink/60">
          From a full 3D model of your home, to its appliances and paint colors, we capture the details that matter to
          answer any concierge question, equip your handymen, and run maintenance seamlessly in the background.
        </p>
        <a href="#membership" className="mt-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-medium transition-colors hover:bg-ink hover:text-white">
          Explore Home Inventory
        </a>
      </div>
      <div className="mt-10 flex justify-center">
        <svg viewBox="0 0 420 300" className="mx-auto w-full max-w-[460px]" aria-hidden>
          <ellipse cx="210" cy="238" rx="190" ry="52" fill="#8aa668" />
          <ellipse cx="210" cy="244" rx="190" ry="46" fill="#7d9a5c" />
          {/* trees */}
          <g transform="translate(70 120)"><rect x="-4" y="26" width="8" height="16" fill="#6b4a2f" /><path d="M0-34 22 8H-22L0-34Z" fill="#3e5c33" /><path d="M0-16 27 26H-27L0-16Z" fill="#476638" /></g>
          <g transform="translate(110 96) scale(0.8)"><rect x="-4" y="26" width="8" height="16" fill="#6b4a2f" /><path d="M0-34 22 8H-22L0-34Z" fill="#3e5c33" /><path d="M0-16 27 26H-27L0-16Z" fill="#476638" /></g>
          <g transform="translate(330 100) scale(0.85)"><rect x="-4" y="26" width="8" height="16" fill="#6b4a2f" /><path d="M0-34 22 8H-22L0-34Z" fill="#3e5c33" /><path d="M0-16 27 26H-27L0-16Z" fill="#476638" /></g>
          <g transform="translate(360 130)"><rect x="-4" y="26" width="8" height="16" fill="#6b4a2f" /><path d="M0-34 22 8H-22L0-34Z" fill="#3e5c33" /><path d="M0-16 27 26H-27L0-16Z" fill="#476638" /></g>
          <g transform="translate(300 78) scale(0.7)"><rect x="-4" y="26" width="8" height="16" fill="#6b4a2f" /><path d="M0-34 22 8H-22L0-34Z" fill="#3e5c33" /><path d="M0-16 27 26H-27L0-16Z" fill="#476638" /></g>
          {/* house */}
          <rect x="150" y="150" width="120" height="80" rx="4" fill="#c8a87a" />
          <rect x="150" y="150" width="120" height="80" rx="4" fill="none" stroke="#8a6f4d" strokeWidth="1.2" />
          <path d="M140 156L210 112 280 156" fill="#b89a6f" stroke="#7a6140" strokeWidth="1.4" strokeLinejoin="round" />
          <rect x="170" y="170" width="28" height="28" rx="2" fill="#efe5cd" stroke="#8a6f4d" />
          <rect x="204" y="170" width="28" height="28" rx="2" fill="#efe5cd" stroke="#8a6f4d" />
          <rect x="188" y="198" width="22" height="32" rx="1" fill="#4a3826" />
          <circle cx="206" cy="214" r="2" fill="#c9a26b" />
          {/* windows detail */}
          <line x1="184" y1="184" x2="184" y2="198" stroke="#b8a888" strokeWidth="1" />
          <line x1="170" y1="184" x2="198" y2="184" stroke="#b8a888" strokeWidth="1" />
          <line x1="218" y1="184" x2="218" y2="198" stroke="#b8a888" strokeWidth="1" />
          <line x1="204" y1="184" x2="232" y2="184" stroke="#b8a888" strokeWidth="1" />
        </svg>
      </div>
    </section>
  );
}

function MembershipPricing() {
  return (
    <section id="membership" className="mx-auto max-w-[1180px] px-6 py-10 md:px-10 md:py-16">
      <div className="text-center">
        <h2 className="font-display text-5xl md:text-[60px] leading-none">All for $199/month.</h2>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-ink/60">
          One straightforward plan. No long-term commitments, no hidden fees — and no vendor kickbacks, ever.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-[1.25fr_1fr]">
        <div className="rounded-[32px] bg-cream p-8 md:p-10 flex flex-col">
          <p className="text-sm text-ink/50">Membership</p>
          <p className="mt-2 font-display text-5xl leading-none">$199<span className="text-2xl text-ink/50">/mo</span></p>
          <p className="mt-3 text-sm text-ink/60">Billed monthly. Cancel anytime.</p>
          <ul className="mt-6 space-y-3 text-[14px] leading-snug">
            <li className="flex gap-2.5"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-ink shrink-0" />1.5 hours of handyman time every month (rolls over)</li>
            <li className="flex gap-2.5"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-ink shrink-0" />Unlimited concierge requests</li>
            <li className="flex gap-2.5"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-ink shrink-0" />Smart-home checkups &amp; autopilot care plans</li>
            <li className="flex gap-2.5"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-ink shrink-0" />Full home inventory &amp; 3D model</li>
          </ul>
          <a href="#contact" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.02]">
            Get started <span>→</span>
          </a>
          <p className="mt-3 text-center text-xs text-ink/50">Currently serving the San Francisco Bay Area</p>
        </div>

        <div className="grid gap-4 content-start">
          {[
            { k: "Concierge", v: "Your home experts, ready when you need them" },
            { k: "Packages", v: "Weekly package and donation pickups, on us" },
            { k: "Handymen", v: "1.5 hours on us, every month" },
            { k: "Recurring Vendors", v: "Schedule and pay regular vendors" },
            { k: "Autopilot", v: "One-tap subscribe to custom care plans" },
            { k: "Utilities", v: "Usage and cost, all in one place" },
            { k: "Home Inventory", v: "Your whole home, understood" },
            { k: "Property Taxes", v: "Monitor home value and never miss a payment" },
          ].map((f) => (
            <div key={f.k} className="flex items-start gap-4 rounded-2xl bg-cream px-5 py-4">
              <span className="mt-0.5 h-9 w-9 shrink-0 rounded-full bg-white border border-ink/10 flex items-center justify-center text-ink/70">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                  <path d="M5 12l5 5L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <p className="text-[14px] font-semibold leading-none">{f.k}</p>
                <p className="mt-1 text-[13px] leading-snug text-ink/55">{f.v}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-white hover:bg-black transition-colors">
          Get started <span>→</span>
        </a>
        <a href="mailto:maya@bayhome.example" className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3.5 text-sm font-medium hover:bg-ink/5 transition-colors">
          Chat with us
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
            <path d="M4 6h16v10H9l-5 4V6Z" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="mx-auto grid max-w-[820px] gap-5 px-6 pb-10 md:grid-cols-2 md:px-10">
      <div className="flex h-full min-h-[220px] flex-col rounded-[28px] bg-cream p-7">
        <span className="mb-auto">
          <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden>
            <path d="M4 11 12 4l8 7v8a1 1 0 0 1-1 1h-5v-5h-4v5H5a1 1 0 0 1-1-1v-8Z" fill="#3e5878" />
            <path d="M3 11.8 12 4l9 7.8-1.3 1.5L12 6.6l-7.7 6.8L3 11.8Z" fill="#2d4159" />
          </svg>
        </span>
        <p className="mt-10 text-[15px] leading-snug">
          <strong className="font-semibold">A business model aligned with you.</strong>{" "}
          <span className="text-ink/55">No vendor kickbacks, no ads. We work for you, the homeowner.</span>
        </p>
        <a href="#" className="mt-3 text-sm font-medium underline-offset-4 hover:underline">
          Learn more
        </a>
      </div>
      <div className="flex h-full min-h-[220px] flex-col rounded-[28px] bg-cream p-7">
        <span className="mb-auto">
          <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden>
            <rect x="5" y="10" width="14" height="10" rx="2" fill="#3e5878" />
            <path d="M8 10V7.5a4 4 0 0 1 8 0V10" stroke="#2d4159" strokeWidth="2.2" fill="none" />
            <circle cx="12" cy="15" r="1.6" fill="#d7e3f0" />
          </svg>
        </span>
        <p className="mt-10 text-[15px] leading-snug">
          <strong className="font-semibold">Your home data belongs to you.</strong>{" "}
          <span className="text-ink/55">You trust us with your most treasured asset. We work to safeguard its data every day.</span>
        </p>
        <a href="#" className="mt-3 text-sm font-medium underline-offset-4 hover:underline">
          Learn more
        </a>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    {
      q: "What is Bay Home Club and where is it available?",
      a: "Bay Home Club is a home membership that makes everyday life at home effortless — vetted handymen, a dedicated concierge, and smart-home checkups under one monthly plan. We currently serve homeowners across the San Francisco Bay Area.",
    },
    {
      q: "What's included in membership?",
      a: "Membership includes a dedicated concierge, 1.5 hours of handyman time every month (rolls over), one-tap Autopilot care plans, a complete home inventory, weekly package pickups, recurring vendor scheduling, utility tracking, and property-tax monitoring.",
    },
    {
      q: "How does pricing work? Are there contracts, vendor costs, or hidden fees?",
      a: "Membership is a flat $199/month. No long-term commitments, no strings attached — and no vendor kickbacks, because we work for you, the homeowner. Handyman time beyond the included 1.5h is billed transparently at member rates.",
    },
    {
      q: "How is Bay Home Club different from a handyman service?",
      a: "A handyman service sends whoever is available. Bay Home Club pairs vetted in-house experts with a deep, documented understanding of your home — so every visit starts with full context and ends with the job done right.",
    },
  ];
  return (
    <section className="mx-auto max-w-[820px] px-6 pb-16 md:px-10">
      <div className="flex flex-col gap-3">
        {faqs.map((f, i) => (
          <div key={f.q} className="rounded-2xl bg-cream px-6">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left text-[15px] font-medium"
              aria-expanded={open === i}
            >
              <span>{f.q}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                aria-hidden
              >
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <p className="text-[14px] leading-relaxed text-ink/65">{f.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [email, setEmail] = useState("");
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const r = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "cta" }),
      });
      if (!r.ok) throw new Error("fail");
      setStatus("ok");
      setEmail("");
    } catch {
      setStatus("err");
    }
  }
  return (
    <section id="contact" className="px-4 md:px-6 pb-6">
      <div className="mx-auto max-w-[1180px] rounded-[32px] bg-ink px-8 py-12 md:px-12 md:py-16 text-center text-white">
        <h2 className="font-display text-3xl leading-none md:text-[44px] max-w-2xl mx-auto">
          One membership to make everyday life at home effortless, so you can spend more time doing what you love. Welcome home.
        </h2>
        <form onSubmit={submit} className="mx-auto mt-8 flex max-w-[440px] gap-2">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            type="email"
            required
            className="flex-1 rounded-full bg-white/10 border border-white/20 px-5 py-3 text-sm placeholder:text-white/50 focus:outline-none focus:border-white/40"
          />
          <button
            disabled={status === "loading"}
            className="shrink-0 rounded-full bg-white px-6 py-3 text-sm font-medium text-ink hover:bg-white/90 disabled:opacity-60 transition-colors"
          >
            {status === "loading" ? "Sending…" : "Get started"}
          </button>
        </form>
        {status === "ok" && <p className="mt-3 text-sm text-white/80">Thanks — we&apos;ll be in touch shortly.</p>}
        {status === "err" && <p className="mt-3 text-sm text-red-300">Something went wrong. Try again or email maya@bayhome.example.</p>}
        <p className="mt-3 text-xs text-white/50">Currently serving the San Francisco Bay Area</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-10 px-6 py-12 md:flex-row md:justify-between md:px-10">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <svg viewBox="0 0 32 32" fill="none" className="h-6 w-6" aria-hidden>
              <path d="M4 26C4 15.5 9.4 7 16 7s12 8.5 12 19h-6.4c0-7.4-2.6-12.6-5.6-12.6S10.4 18.6 10.4 26H4Z" fill="currentColor" />
            </svg>
            <span className="text-[18px] font-semibold tracking-tight">Bay Home Club</span>
          </div>
          <p className="mt-3 text-[13.5px] leading-relaxed text-ink/60">
            Membership home care for busy Bay Area homeowners — vetted handymen, concierge, and smart-home checkups under one
            monthly plan.
          </p>
          <p className="mt-4 text-xs text-ink/40">© {new Date().getFullYear()} Bay Home Club. All rights reserved.</p>
        </div>
        <div className="flex gap-12 md:gap-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-ink/50 uppercase">Benefits</p>
            <ul className="mt-3 space-y-2 text-sm text-ink/70">
              <li>
                <a href="#benefits" className="hover:text-ink">
                  Handymen
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-ink">
                  Concierge
                </a>
              </li>
              <li>
                <a href="#membership" className="hover:text-ink">
                  Home Inventory
                </a>
              </li>
              <li>
                <a href="#membership" className="hover:text-ink">
                  Autopilot
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-ink/50 uppercase">More</p>
            <ul className="mt-3 space-y-2 text-sm text-ink/70">
              <li>
                <a href="#" className="hover:text-ink">
                  A letter from our founder
                </a>
              </li>
              <li>
                <a href="mailto:maya@bayhome.example" className="hover:text-ink">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-ink">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-ink">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main id="top" className="w-full">
      <Header />
      <Hero />
      <HowItWorks />
      <TodoBanner />
      <KitchenTaskCloud />
      <HandymenConcierge />
      <Autopilot />
      <EverydayChores />
      <DeepUnderstanding />
      <MembershipPricing />
      <Trust />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
