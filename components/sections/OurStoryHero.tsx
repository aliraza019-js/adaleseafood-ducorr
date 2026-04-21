"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurStoryHero() {
  return (
    <section className="relative px-8 py-20 lg:py-32 overflow-hidden bg-[#f9f6f2]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="z-10"
        >
          <span className="inline-block py-1 px-4 bg-[#003366] text-white rounded-full text-sm font-bold tracking-widest uppercase mb-6">
            Our Core
          </span>
          <h1
            className="text-5xl lg:text-7xl font-black text-[#1a1c1e] leading-tight mb-8"
            style={{ fontFamily: "Epilogue, sans-serif" }}
          >
            The Soul of the{" "}
            <span className="text-[#001e40] italic">Abyssal Deep</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#43474e] leading-relaxed mb-10 max-w-xl">
            In the vast, churning heart of the Indian Ocean, nature crafts its
            finest masterpieces. Adale Seafood was born from a deep reverence
            for Somalia&apos;s untamed coastal waters and the rugged spirits who
            harvest its bounty — honouring both ocean and community.
          </p>
          <div className="flex gap-4">
            <div className="w-16 h-1 bg-[#001e40] rounded-full" />
            <div className="w-8 h-1 bg-[#c4952a] rounded-full" />
          </div>
        </motion.div>

        {/* Organic-clipped image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div
            className="absolute -top-12 -left-12 w-64 h-64 rounded-full blur-3xl pointer-events-none"
            style={{ backgroundColor: "rgba(196,149,42,0.15)" }}
          />
          <div
            className="relative z-10 w-full h-[500px] overflow-hidden shadow-2xl"
            style={{ borderRadius: "3rem 1rem 3rem 1rem" }}
          >
            <Image
              src="/assets/Our+Story.jpg"
              alt="Adale Seafood — The heart of our story"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
