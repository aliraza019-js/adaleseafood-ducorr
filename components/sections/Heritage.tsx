"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Heritage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="heritage" className="py-32 bg-[#f9f6f2]" ref={ref}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl rotate-2 relative z-10">
              <Image
                src="/assets/Our+Story.jpg"
                alt="Adale Seafood — Our Story"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square rounded-[2rem] overflow-hidden shadow-xl -rotate-3 z-20 border-8 border-[#f9f6f2]">
              <Image
                src="/assets/tuna-seared.png"
                alt="Indian Ocean — Adale Seafood sourcing grounds"
                fill
                className="object-cover"
                sizes="30vw"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-8"
          >
            <span className="text-[#001e40] font-bold tracking-widest text-sm uppercase">
              Legacy of the Tides
            </span>
            <h2
              className="text-5xl font-black leading-tight tracking-tight text-[#1a1c1e]"
              style={{ fontFamily: "Epilogue, sans-serif" }}
            >
              Our Heritage
            </h2>
            <p className="text-lg text-[#43474e] leading-relaxed font-medium">
              Born from the sun-drenched shores of the Indian Ocean, Adale
              Seafood was founded on a single conviction — Somalia&apos;s coastal
              waters hold some of the world&apos;s finest marine bounty, and the
              world deserves to taste it.
            </p>
            <p className="text-lg text-[#43474e] leading-relaxed">
              Since 2022, we&apos;ve built a network of skilled local artisan
              fishermen paired with state-of-the-art IQF cold-chain
              infrastructure — ensuring every lobster and tuna fillet that
              leaves our facility meets strict export-grade standards.
            </p>
            <div className="pt-4">
              <Link
                href="/our-story"
                className="flex items-center gap-2 text-[#001e40] font-black group"
              >
                Read the Full Story
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
