"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: "lobster",
    name: "Blue Ocean Lobster",
    subtitle: "Frozen Whole Lobsters",
    badge: "PRIME CATCH",
    badgeBg: "bg-[#001e40]",
    badgeText: "text-white",
    specs: [
      "Packed in ~20 kg cartons",
      "IQF frozen at source",
      "Ready for export",
    ],
    image: "/assets/Lobster+03.jpg",
    imageAlt: "Blue Ocean Lobster — Adale Seafood",
  },
  {
    id: "tuna",
    name: "Jallo Tuna Steaks",
    subtitle: "Frozen Yellow Fin Tuna Steak",
    badge: "EXPORT GRADE",
    badgeBg: "bg-[#c4952a]",
    badgeText: "text-[#3d2f00]",
    specs: [
      "Individually vacuum packed",
      "Steaks packed in ~10 kg cartons",
      "Ready for export",
    ],
    image: "/assets/GettyImages-1035953564.jpg",
    imageAlt: "Jallo Tuna Steaks — Frozen Yellow Fin Tuna",
  },
];

export default function SeasonalHarvest() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 bg-[#f3f3f6]" ref={ref}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-[#001e40] font-bold tracking-widest text-sm uppercase">
              Sustainably Sourced
            </span>
            <h2
              className="text-5xl font-black tracking-tight mt-2 text-[#1a1c1e]"
              style={{ fontFamily: "Epilogue, sans-serif" }}
            >
              Seasonal Harvest
            </h2>
          </div>
          <Link
            href="/products"
            className="hidden md:flex items-center gap-2 text-[#001e40] font-bold hover:gap-3 transition-all"
          >
            View All Products
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative overflow-hidden h-72 md:h-full min-h-[280px]">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 25vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`${product.badgeBg} ${product.badgeText} px-4 py-1.5 rounded-full text-xs font-black tracking-tighter`}
                    >
                      {product.badge}
                    </span>
                  </div>
                </div>
                {/* Text */}
                <div className="p-7 flex flex-col justify-center gap-4">
                  <div>
                    <h3
                      className="text-2xl font-black text-[#1a1c1e] leading-tight"
                      style={{ fontFamily: "Epilogue, sans-serif" }}
                    >
                      {product.name}
                    </h3>
                    <p className="text-[#43474e] text-sm font-semibold mt-0.5">
                      {product.subtitle}
                    </p>
                  </div>
                  <ul className="space-y-1.5">
                    {product.specs.map((spec) => (
                      <li key={spec} className="flex items-start gap-2 text-sm text-[#43474e]">
                        <span className="text-[#001e40] font-bold mt-0.5 shrink-0">•</span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/products"
                    className="bg-[#001e40] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#001229] transition-colors text-center mt-1"
                  >
                    Inquire Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
