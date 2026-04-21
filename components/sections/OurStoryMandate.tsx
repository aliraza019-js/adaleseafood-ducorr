"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Leaf, Anchor, Users } from "lucide-react";

const cards = [
  {
    icon: Leaf,
    title: "Sustainable Fishing",
    body: "We operate exclusively within certified sustainable fishing zones and seasonal rotation cycles to protect Somalia's critical marine ecosystems.",
  },
  {
    icon: Anchor,
    title: "Zero Bycatch",
    body: "Purpose-built selective harvesting techniques and ethical gear ensure our operations produce minimal bycatch — protecting ocean biodiversity.",
  },
  {
    icon: Users,
    title: "Community Partnership",
    body: "A portion of every export goes back into coastal fisherman training, equipment upgrades, and local community development programmes.",
  },
];

export default function OurStoryMandate() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#001229] text-white px-8 py-24 lg:py-40" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Headline column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-1"
          >
            <h2
              className="text-4xl lg:text-5xl font-black mb-8 leading-tight"
              style={{ fontFamily: "Epilogue, sans-serif" }}
            >
              The Blue <br />
              <span className="text-[#c4952a]">Mandate</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Sustainability isn&apos;t a buzzword; it&apos;s our survival. We operate
              under a strict code of ocean ethics to ensure the Indian Ocean
              remains vibrant for generations to come.
            </p>
            <button className="flex items-center gap-2 text-[#c4952a] font-bold hover:gap-4 transition-all text-sm">
              Read Our Impact Report <ArrowRight size={16} />
            </button>
          </motion.div>

          {/* Cards */}
          <div className="lg:col-span-2 grid md:grid-cols-3 gap-6">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                className="bg-[#002040] p-8 rounded-[2rem] hover:bg-[#003366] transition-colors group"
              >
                <div className="w-14 h-14 bg-[#c4952a]/20 rounded-full flex items-center justify-center mb-6 text-[#c4952a] group-hover:bg-[#c4952a] group-hover:text-[#3d2f00] transition-all">
                  <card.icon size={24} />
                </div>
                <h4
                  className="text-xl font-bold mb-3 text-white"
                  style={{ fontFamily: "Epilogue, sans-serif" }}
                >
                  {card.title}
                </h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  {card.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
