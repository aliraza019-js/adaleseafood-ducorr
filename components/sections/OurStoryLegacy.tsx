"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function OurStoryLegacy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#f3f3f6] px-8 py-24 lg:py-40" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Staggered image grid */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="relative mt-12 rounded-[1rem] overflow-hidden h-64 shadow-lg">
                <Image
                  src="/assets/tuna-seared.png"
                  alt="Indian Ocean coastal heritage"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              <div className="relative rounded-[1rem] overflow-hidden h-80 shadow-lg">
                <Image
                  src="/assets/Lobster+03.jpg"
                  alt="Prime catch — Blue Ocean Lobster"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-full lg:w-1/2 order-1 lg:order-2"
          >
            <h2
              className="text-4xl lg:text-5xl font-black text-[#1a1c1e] mb-8 tracking-tight"
              style={{ fontFamily: "Epilogue, sans-serif" }}
            >
              A Legacy of <br />
              <span className="text-[#755b00]">The Indian Ocean</span>
            </h2>
            <p className="text-lg text-[#43474e] mb-6 leading-relaxed">
              Since our founding in 2022, Adale Seafood has navigated the
              rich, teeming currents of Somalia&apos;s Indian Ocean coastline. What
              began as a simple commitment to quality has evolved into a
              full-scale export operation trusted by buyers worldwide.
            </p>
            <p className="text-lg text-[#43474e] mb-8 leading-relaxed">
              We honour traditional artisan fishing methods — hand-selected
              catches by local fishermen who know these waters intimately —
              and combine them with IQF technology that preserves the
              ocean&apos;s freshness from boat to destination.
            </p>
            <div className="p-8 bg-white rounded-[1rem] border-l-4 border-[#001e40] italic text-xl text-[#1a1c1e] shadow-sm">
              &ldquo;The ocean doesn&apos;t just give us seafood — it gives us a story
              worth sharing with the world.&rdquo;
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
