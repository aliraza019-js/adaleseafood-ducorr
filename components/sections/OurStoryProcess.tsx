"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Snowflake, Anchor, Wind } from "lucide-react";

export default function OurStoryProcess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="px-8 py-24 lg:py-40 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2
            className="text-4xl lg:text-6xl font-black text-[#1a1c1e] mb-4"
            style={{ fontFamily: "Epilogue, sans-serif" }}
          >
            Export Excellence
          </h2>
          <p className="text-[#43474e] max-w-2xl mx-auto text-lg">
            Every shipment is a statement of quality. From ocean depth to
            export pallet — precision runs through every step.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Wide image card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-8 bg-[#f3f3f6] rounded-[2rem] overflow-hidden group"
          >
            <div className="relative h-96 overflow-hidden">
              <Image
                src="/assets/pexels-ketut-subiyanto-4349791.jpg"
                alt="Adale Seafood — Export quality tuna"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div>
                  <h3
                    className="text-2xl font-bold text-white mb-2"
                    style={{ fontFamily: "Epilogue, sans-serif" }}
                  >
                    The IQF Difference
                  </h3>
                  <p className="text-white/80 max-w-md">
                    Individual Quick Freezing locks in ocean-fresh quality the
                    moment the catch is landed — preserving texture, flavour,
                    and nutritional integrity for global markets.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature: Direct Sourcing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4 bg-[#001e40] text-white p-10 rounded-[2rem] flex flex-col justify-center"
          >
            <Anchor size={40} className="mb-6 text-[#c4952a]" />
            <h3
              className="text-2xl font-black mb-4 uppercase"
              style={{ fontFamily: "Epilogue, sans-serif" }}
            >
              Direct Sourcing
            </h3>
            <p className="opacity-80 leading-relaxed text-sm">
              We work hand-in-hand with artisan fishermen across Somalia&apos;s
              coastline. Every catch is hand-selected at dawn — freshness
              isn&apos;t a goal; it&apos;s our minimum standard.
            </p>
          </motion.div>

          {/* Feature: Export Certified */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-4 bg-[#755b00] text-white p-10 rounded-[2rem] flex flex-col justify-center"
          >
            <Snowflake size={40} className="mb-6 opacity-90" />
            <h3
              className="text-2xl font-black mb-4 uppercase"
              style={{ fontFamily: "Epilogue, sans-serif" }}
            >
              Export Certified
            </h3>
            <p className="opacity-80 leading-relaxed text-sm">
              HACCP-compliant facilities and international export certifications
              ensure every shipment meets the highest standards for EU, GCC,
              and global markets.
            </p>
          </motion.div>

          {/* Wide: Processing facility */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-8 bg-[#eaeaed] rounded-[2rem] p-10 flex items-center gap-10"
          >
            <div className="flex-1">
              <h3
                className="text-3xl font-black text-[#1a1c1e] mb-4 tracking-tight"
                style={{ fontFamily: "Epilogue, sans-serif" }}
              >
                The Mogadishu Facility
              </h3>
              <p className="text-[#43474e] leading-relaxed">
                Our state-of-the-art processing centre in Hedan, Mogadishu is
                designed around cold-chain integrity — from landing to packing.
                Every product leaves our facility precisely temperature-controlled,
                labelled, and ready for international shipment.
              </p>
            </div>
            <div className="hidden lg:flex w-48 h-48 rounded-full overflow-hidden border-8 border-white shrink-0">
              <div className="relative w-full h-full">
                <Image
                  src="/assets/tuna-seared.png"
                  alt="Mogadishu coastline — Adale Seafood facility"
                  fill
                  className="object-cover"
                  sizes="192px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
