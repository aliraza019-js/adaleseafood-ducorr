"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "100%", label: "Sustainably Sourced" },
  { value: "IQF", label: "Quick-Frozen Technology" },
  { value: "2022", label: "Established in Mogadishu" },
  { value: "Global", label: "Export Reach" },
];

export default function Guardians() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-32 bg-[#001229] text-white relative overflow-hidden"
      ref={ref}
    >
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(circle at center, #4d7db5 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-20"
        >
          <h2
            className="text-5xl font-black mb-8 leading-tight text-white"
            style={{ fontFamily: "Epilogue, sans-serif" }}
          >
            Guardians of the Abyssal Blue
          </h2>
          <p className="text-xl text-white/70 font-medium leading-relaxed">
            Our commitment to the Indian Ocean runs as deep as its waters. We
            operate under strict regenerative sourcing guidelines to ensure
            coastal fishing communities and marine ecosystems thrive for
            generations.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="space-y-2"
            >
              <div
                className="text-5xl md:text-6xl font-black text-[#c4952a]"
                style={{ fontFamily: "Epilogue, sans-serif" }}
              >
                {stat.value}
              </div>
              <p className="text-sm font-bold tracking-widest uppercase text-white/50">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
