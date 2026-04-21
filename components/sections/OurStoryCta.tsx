import Image from "next/image";
import Link from "next/link";

export default function OurStoryCta() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src="/assets/GettyImages-1035953564.jpg"
        alt="Adale Seafood — Ocean to world"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#001229]/70 backdrop-blur-[2px]" />
      <div className="relative z-10 text-center px-8">
        <h2
          className="text-5xl lg:text-8xl font-black text-white mb-8 tracking-tighter"
          style={{ fontFamily: "Epilogue, sans-serif" }}
        >
          EXPLORE THE CATCH.
        </h2>
        <Link
          href="/products"
          className="inline-block bg-[#c4952a] text-[#3d2f00] px-12 py-5 rounded-full text-xl font-black hover:bg-[#a87818] hover:text-white transition-all scale-100 hover:scale-105 active:scale-95 shadow-2xl"
        >
          VIEW OUR PRODUCTS
        </Link>
      </div>
    </section>
  );
}
