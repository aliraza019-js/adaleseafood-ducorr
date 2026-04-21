"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Snowflake, Anchor } from "lucide-react";

export default function ProductBentoGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="px-8 py-20 max-w-7xl mx-auto" ref={ref}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

        {/* ── Blue Ocean Lobster ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="md:col-span-8 group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
        >
          <div className="grid md:grid-cols-2 min-h-[320px]">
            {/* Image */}
            <div className="relative overflow-hidden h-64 md:h-full">
              <Image
                src="/assets/Lobster+03.jpg"
                alt="Blue Ocean Lobster — Frozen Whole Lobsters"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-[#001e40] text-white text-xs font-black px-4 py-1.5 rounded-full tracking-widest uppercase">
                  Prime Catch
                </span>
              </div>
            </div>
            {/* Text */}
            <div className="p-8 flex flex-col justify-center gap-5">
              <div>
                <h3
                  className="text-3xl font-black tracking-tight text-[#1a1c1e] mb-1"
                  style={{ fontFamily: "Epilogue, sans-serif" }}
                >
                  Blue Ocean Lobster
                </h3>
                <p className="text-[#43474e] text-sm font-semibold mb-4">
                  Frozen Whole Lobsters
                </p>
                <ul className="space-y-1.5 text-[#43474e] text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#001e40] font-bold mt-0.5">•</span>
                    Packed in ~20 kg cartons
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#001e40] font-bold mt-0.5">•</span>
                    Ready for export, individually wrapped
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#001e40] font-bold mt-0.5">•</span>
                    IQF frozen at source, export-grade quality
                  </li>
                </ul>
              </div>
              <div className="flex gap-3 flex-wrap pt-2">
                <Link
                  href="/contact"
                  className="bg-[#001e40] text-white px-7 py-3 rounded-full font-bold hover:bg-[#001229] transition-colors flex items-center gap-2 text-sm"
                >
                  Inquire Now <ArrowRight size={14} />
                </Link>
                <Link
                  href="/contact"
                  className="bg-[#eaeaed] text-[#1a1c1e] px-7 py-3 rounded-full font-bold hover:bg-[#dededf] transition-colors text-sm"
                >
                  Order Wholesale
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Cold Chain Feature ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-4 bg-[#001229] text-white rounded-[2rem] p-8 flex flex-col justify-end relative overflow-hidden min-h-[260px]"
        >
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top right, #4d7db5, transparent)" }} />
          </div>
          <div className="relative z-10">
            <Snowflake size={40} className="mb-6 text-[#c4952a]" />
            <h4
              className="text-2xl font-bold mb-2 text-white"
              style={{ fontFamily: "Epilogue, sans-serif" }}
            >
              Mastery of the Cold Chain
            </h4>
            <p className="text-sm text-white/60 leading-relaxed">
              Precision IQF temperature control from vessel to export. Freshness isn&apos;t promised — it&apos;s engineered.
            </p>
          </div>
        </motion.div>

        {/* ── Bespoke Sourcing ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-4 bg-[#f3f3f6] rounded-[2rem] p-8 flex flex-col gap-6 min-h-[260px]"
        >
          <Anchor size={40} className="text-[#001e40]" />
          <div>
            <h4
              className="text-2xl font-bold mb-2 text-[#1a1c1e]"
              style={{ fontFamily: "Epilogue, sans-serif" }}
            >
              Bespoke Sourcing
            </h4>
            <p className="text-[#43474e] text-sm leading-relaxed">
              We partner directly with artisan fishermen across Somalia&apos;s coastline to bring exclusive catches to your supply chain.
            </p>
          </div>
          <div className="mt-auto pt-6 border-t border-[#c3c6d1]/30">
            <Link href="/contact" className="text-[#001e40] font-bold flex items-center gap-2 group text-sm">
              Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* ── Jallo Tuna Steaks ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-8 group bg-[#eaeaed] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
        >
          <div className="grid md:grid-cols-2 min-h-[320px]">
            {/* Text on left for this card */}
            <div className="p-8 flex flex-col justify-center gap-5 order-2 md:order-1">
              <div>
                <span className="inline-block bg-[#c4952a] text-[#3d2f00] text-xs font-black px-4 py-1.5 rounded-full tracking-widest uppercase mb-3">
                  Export Grade
                </span>
                <h3
                  className="text-3xl font-black tracking-tight text-[#1a1c1e] mb-1"
                  style={{ fontFamily: "Epilogue, sans-serif" }}
                >
                  Jallo Tuna Steaks
                </h3>
                <p className="text-[#43474e] text-sm font-semibold mb-4">
                  Frozen Yellow Fin Tuna Steak
                </p>
                <ul className="space-y-1.5 text-[#43474e] text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#001e40] font-bold mt-0.5">•</span>
                    Each steak is individually vacuum packed
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#001e40] font-bold mt-0.5">•</span>
                    Steaks packed in ~10 kg cartons
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#001e40] font-bold mt-0.5">•</span>
                    Packed in ~10 kg cartons ready for export
                  </li>
                </ul>
              </div>
              <div className="flex gap-3 flex-wrap pt-2">
                <Link
                  href="/contact"
                  className="bg-[#001e40] text-white px-7 py-3 rounded-full font-bold hover:bg-[#001229] transition-colors flex items-center gap-2 text-sm"
                >
                  Inquire Now <ArrowRight size={14} />
                </Link>
                <Link
                  href="/contact"
                  className="bg-white text-[#1a1c1e] px-7 py-3 rounded-full font-bold hover:bg-[#dededf] transition-colors text-sm"
                >
                  Order Wholesale
                </Link>
              </div>
            </div>
            {/* Image */}
            <div className="relative overflow-hidden h-64 md:h-full order-1 md:order-2">
              <Image
                src="/assets/GettyImages-1035953564.jpg"
                alt="Jallo Tuna Steaks — Frozen Yellow Fin Tuna"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
