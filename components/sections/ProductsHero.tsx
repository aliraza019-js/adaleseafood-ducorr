"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductsHero() {
  return (
    <header className="relative px-8 pt-12 pb-24 max-w-7xl mx-auto overflow-hidden">
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 space-y-6"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#c4952a] text-[#3d2f00] text-sm font-bold uppercase tracking-widest">
            Premium Selection
          </span>
          <h1
            className="text-6xl md:text-8xl font-black text-[#1a1c1e] leading-[0.9] tracking-tighter"
            style={{ fontFamily: "Epilogue, sans-serif" }}
          >
            The{" "}
            <span className="text-[#001e40] italic">Ocean&apos;s</span>{" "}
            Finest.
          </h1>
          <p className="text-lg text-[#43474e] max-w-lg leading-relaxed">
            Straight from the cold currents of the Indian Ocean to your
            facility. Sustainably sourced, IQF-frozen, and export-certified
            — Blue Ocean Lobster and Jallo Tuna Steaks.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex-1 relative"
        >
          <div
            className="absolute -top-12 -right-12 w-64 h-64 rounded-full blur-3xl pointer-events-none"
            style={{ backgroundColor: "rgba(196,149,42,0.15)" }}
          />
          {/* Stacked dual image — shows both products */}
          <div className="relative">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 relative z-10 aspect-[4/3]">
              <Image
                src="/assets/Lobster+03.jpg"
                alt="Blue Ocean Lobster — Adale Seafood"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-2/5 aspect-square rounded-[1.5rem] overflow-hidden shadow-xl -rotate-3 z-20 border-4 border-[#f9f6f2]">
              <Image
                src="/assets/GettyImages-1035953564.jpg"
                alt="Jallo Tuna Steaks — Adale Seafood"
                fill
                className="object-cover"
                sizes="20vw"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
