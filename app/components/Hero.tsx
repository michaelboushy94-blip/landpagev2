"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 30,
      duration: 1.5,
      ease: "power4.out",
    });
  }, []);

  return (
    <section className="flex flex-col min-h-screen pt-20 relative items-center justify-center overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#141615] via-transparent to-[#141615] z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#141615] via-transparent to-[#141615] z-10 pointer-events-none" />
      
      <div ref={heroRef} className="z-20 text-center max-w-5xl px-6 relative">
        <div className="inline-flex gap-3 bg-white/5 border-white/10 border rounded-full mb-8 py-1.5 px-4 backdrop-blur-sm items-center">
          <span className="text-[10px] text-blue-400 uppercase tracking-[0.2em] font-bold">
            Talent Endorsement Infrastructure
          </span>
        </div>

        <h1 className="md:text-7xl text-5xl font-bold tracking-tight text-white mb-8 uppercase leading-[0.95]">
          The Operating System <br />
          for Elite Talent <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-gray-500">
            Representation.
          </span>
        </h1>

        <p className="md:text-xl text-lg text-gray-400 max-w-2xl mx-auto mb-10">
          Digitized Contracts. Automated Deliverables. Valuation Intelligence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-blue-400 text-white px-10 py-4 font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-sm">
            Book a Demo
          </button>
          <button className="px-10 py-4 border border-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-all rounded-sm">
            Features
          </button>
        </div>
      </div>
    </section>
  );
}
