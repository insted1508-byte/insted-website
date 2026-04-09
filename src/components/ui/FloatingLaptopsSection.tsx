"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PromptCard = ({ title, description, children }: { title: string; description: string; children: React.ReactNode; }) => {
  return (
    <section className="floating-laptop-card relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-white/95 shadow-[0_40px_80px_rgba(15,23,42,0.08)]">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center p-8 lg:p-12">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Prompt</p>
          <h3 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h3>
          <p className="max-w-xl text-base leading-7 text-slate-600">{description}</p>
        </div>
        <div className="relative flex items-center justify-center min-h-[300px]">
          {children}
        </div>
      </div>
    </section>
  );
};

const PinkLaptop = () => {
  return (
    <div className="relative h-[260px] w-full max-w-[360px] rounded-[40px] bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 shadow-[0_30px_80px_rgba(236,72,153,0.15)]">
      <div className="absolute inset-0 rounded-[40px] border border-white/60 backdrop-blur-sm" />
      <div className="absolute left-1/2 top-1/2 h-[260px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-[40px] bg-pink-200/70 shadow-[0_18px_40px_rgba(236,72,153,0.18)]" />
      <div className="absolute left-[50%] top-[30%] -translate-x-1/2 flex flex-col items-center justify-center text-center text-white">
        <span className="text-[5rem] font-semibold tracking-[0.02em] leading-none opacity-90">hello</span>
      </div>
      <div className="absolute bottom-8 left-1/2 w-[220px] -translate-x-1/2 rounded-full bg-white/50 px-4 py-2 text-center text-xs uppercase tracking-[0.24em] text-slate-700 blur-sm/20 backdrop-blur-sm">
        Floating MacBook Neo
      </div>
    </div>
  );
};

const YellowLaptop = () => {
  return (
    <div className="relative h-[260px] w-full max-w-[360px] rounded-[40px] bg-gradient-to-br from-yellow-200 via-yellow-300 to-amber-200 shadow-[0_30px_80px_rgba(249,115,22,0.12)]">
      <div className="absolute inset-0 rounded-[40px] border border-white/60 backdrop-blur-sm" />
      <div className="absolute inset-x-6 top-8 h-[170px] rounded-[30px] bg-white/95 shadow-[0_18px_40px_rgba(15,23,42,0.08)]" />
      <div className="absolute left-6 right-6 top-12 h-24 rounded-[24px] bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-orange-400 shadow-[0_14px_35px_rgba(15,23,42,0.18)]" />
      <div className="absolute bottom-10 left-8 right-8 h-24 rounded-[26px] bg-slate-900/95 shadow-[0_12px_25px_rgba(15,23,42,0.15)]" />
      <div className="absolute left-10 top-20 flex h-20 w-24 items-center justify-center rounded-3xl bg-white/90 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
        Screen on
      </div>
      <div className="absolute bottom-8 left-1/2 w-[220px] -translate-x-1/2 rounded-full bg-white/60 px-4 py-2 text-center text-xs uppercase tracking-[0.24em] text-slate-700 blur-sm/20 backdrop-blur-sm">
        Open floating laptop
      </div>
    </div>
  );
};

const DualLaptops = () => {
  return (
    <div className="relative h-[320px] w-full max-w-[420px] overflow-visible">
      <div className="absolute left-1/2 top-10 h-[220px] w-[320px] -translate-x-1/2 rounded-[36px] bg-yellow-200 shadow-[0_30px_60px_rgba(234,179,8,0.2)] blur-sm opacity-40" />
      <div className="absolute left-[10%] top-[18%] h-[220px] w-[260px] rounded-[34px] bg-gradient-to-br from-pink-200 via-pink-300 to-fuchsia-200 shadow-[0_30px_50px_rgba(236,72,153,0.2)] transform rotate-[-12deg] shadow-lg">
        <div className="absolute inset-4 rounded-[28px] bg-white/80" />
        <div className="absolute left-6 top-6 h-12 w-28 rounded-full bg-pink-400/80" />
      </div>
      <div className="absolute right-[4%] top-[32%] h-[240px] w-[280px] rounded-[36px] bg-gradient-to-br from-yellow-200 via-amber-200 to-orange-200 shadow-[0_30px_60px_rgba(234,179,8,0.22)] transform rotate-[14deg] shadow-lg">
        <div className="absolute inset-6 rounded-[28px] bg-white/90" />
        <div className="absolute bottom-10 left-10 h-16 w-20 rounded-2xl bg-slate-900/90" />
      </div>
      <div className="absolute bottom-0 left-1/2 h-2 w-52 -translate-x-1/2 rounded-full bg-slate-900/10 shadow-[0_20px_80px_rgba(15,23,42,0.1)]" />
    </div>
  );
};

const CloseupLaptop = () => {
  return (
    <div className="relative h-[260px] w-full max-w-[360px] rounded-[40px] bg-slate-100 shadow-[0_30px_70px_rgba(15,23,42,0.1)]">
      <div className="absolute inset-x-8 top-10 h-[140px] rounded-[34px] bg-slate-900/95 shadow-[0_18px_40px_rgba(15,23,42,0.16)]" />
      <div className="absolute left-12 top-16 h-20 w-[180px] rounded-2xl bg-slate-700/90" />
      <div className="absolute left-12 top-44 grid h-12 w-[220px] grid-cols-10 gap-2">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="rounded-sm bg-slate-300/90" />
        ))}
      </div>
      <div className="absolute bottom-10 left-10 right-10 h-8 rounded-[18px] bg-slate-400/90" />
    </div>
  );
};

export default function FloatingLaptopsSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLDivElement>(".floating-laptop-card");

      cards.forEach((card, index) => {
        const direction = index % 2 === 0 ? -1 : 1;
        gsap.fromTo(
          card,
          { y: 80 * direction, opacity: 0.25, rotate: direction * 6, filter: "blur(8px)" },
          {
            y: 0,
            opacity: 1,
            rotate: 0,
            filter: "blur(0px)",
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 25%",
              scrub: true,
            },
          }
        );
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrapperRef} className="relative bg-[#f8fafc] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Design showcase</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Floating MacBook Neo studio scenes</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
            Four custom-crafted floating laptop compositions, animated gently with scroll-triggered motion for a premium product showcase.
          </p>
        </div>

        <div className="space-y-16">
          <PromptCard
            title="Pink Floating MacBook"
            description="Minimalist studio photograph of a closed, sleek Apple MacBook Neo in soft pastel pink, floating above a blurred surface with the word 'hello' inscribed on the lid."
          >
            <div className="floating-laptop absolute -top-4 left-1/2 w-full max-w-[380px] -translate-x-1/2 transform transition-transform duration-700 hover:-translate-y-2">
              <PinkLaptop />
            </div>
          </PromptCard>

          <PromptCard
            title="Yellow Floating MacBook"
            description="Clean product shot of an open pastel yellow MacBook Neo at a 3/4 angle, screen lit with vibrant graphics on a white studio background."
          >
            <div className="floating-laptop absolute left-1/2 top-0 w-full max-w-[380px] -translate-x-1/2 transform transition-transform duration-700 hover:-translate-y-2">
              <YellowLaptop />
            </div>
          </PromptCard>

          <PromptCard
            title="Multiple Floating Laptops"
            description="A dynamic composition with two rotating pastel laptops: one pink and one yellow, floating together in a clean white void."
          >
            <div className="floating-laptop absolute left-1/2 top-0 w-full max-w-[460px] -translate-x-1/2 transform transition-transform duration-700 hover:-translate-y-2">
              <DualLaptops />
            </div>
          </PromptCard>

          <PromptCard
            title="Close-up Floating Detail"
            description="Close-up shot of an open light gray MacBook Neo floating diagonally, focused on the keyboard and trackpad with a clean white background."
          >
            <div className="floating-laptop absolute left-1/2 top-0 w-full max-w-[380px] -translate-x-1/2 transform transition-transform duration-700 hover:-translate-y-2">
              <CloseupLaptop />
            </div>
          </PromptCard>
        </div>
      </div>
    </section>
  );
}
