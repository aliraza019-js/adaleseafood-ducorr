"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative px-8 py-20 overflow-hidden bg-[#f9f6f2]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:w-1/2 z-10"
        >
          <h1
            className="text-5xl md:text-7xl font-black text-[#1a1c1e] leading-tight mb-6 tracking-tighter"
            style={{ fontFamily: "Epilogue, sans-serif" }}
          >
            Get In{" "}
            <span className="text-[#001e40] italic">Touch</span>
          </h1>
          <p className="text-xl text-[#43474e] max-w-lg mb-8 font-medium leading-relaxed">
            Whether you&apos;re inquiring about our seasonal catch, planning a
            wholesale partnership, or exploring export opportunities — our
            team is ready to connect with you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:w-1/2 relative"
        >
          <div className="aspect-square bg-[#003366] rounded-[2rem] overflow-hidden shadow-2xl rotate-3 scale-95">
            <Image
              src="/assets/Lobster+03.jpg"
              alt="Premium Adale Seafood — Lobster"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 aspect-[4/3] w-64 bg-white rounded-[1rem] p-2 shadow-xl -rotate-6 hidden md:block">
            <div className="relative w-full h-full rounded-[0.75rem] overflow-hidden">
              <Image
                src="/assets/tuna-seared.png"
                alt="Indian Ocean coastline"
                fill
                className="object-cover"
                sizes="256px"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
