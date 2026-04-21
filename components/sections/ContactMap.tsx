import Image from "next/image";
import { Anchor } from "lucide-react";

export default function ContactMap() {
  return (
    <section className="h-[500px] w-full relative overflow-hidden">
      <div className="absolute inset-0 grayscale contrast-125 opacity-80">
        <Image
          src="/assets/somalia-map.jpg"
          alt="Adale Seafood — Indian Ocean coastline, Mogadishu"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#f9f6f2] via-transparent to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex flex-col items-center">
          <div className="w-16 h-16 bg-[#001e40] rounded-full animate-ping absolute opacity-30" />
          <div className="w-16 h-16 bg-[#001e40] rounded-full flex items-center justify-center relative shadow-2xl">
            <Anchor size={28} className="text-white" />
          </div>
          <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-xl whitespace-nowrap border border-[#001e40]/10">
            <span className="font-black text-[#001e40] uppercase tracking-widest text-sm">
              Adale Main Grill
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
