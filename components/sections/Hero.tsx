"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[921px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/GettyImages-1035953564.jpg"
          alt="Premium Adale Seafood — Indian Ocean harvest"
          fill
          className="object-cover brightness-75"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f9f6f2] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-6xl md:text-8xl font-black text-white leading-tight tracking-tighter mb-6"
            style={{ fontFamily: "Epilogue, sans-serif" }}
          >
            OCEAN.{" "}
            <span className="text-[#c4952a]">SALT.</span>
            <br />
            PURE CATCH.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-xl md:text-2xl text-white/90 font-medium mb-10 max-w-xl leading-relaxed"
          >
            From Somalia&apos;s pristine Indian Ocean coastline to global
            markets — sustainably sourced, IQF-frozen, export-grade premium
            seafood.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/products"
              className="bg-[#001e40] text-white text-lg font-bold px-10 py-4 rounded-full transition-all duration-300 hover:bg-[#001229] shadow-xl"
            >
              Explore Our Products
            </Link>
            <Link
              href="/our-story"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 text-lg font-bold px-10 py-4 rounded-full transition-all duration-300 hover:bg-white/20"
            >
              Our Story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
