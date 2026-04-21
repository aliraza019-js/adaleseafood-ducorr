"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/our-story" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white/80 backdrop-blur-md shadow-sm"
      }`}
    >
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="Adale Seafood Company"
            width={52}
            height={52}
            className="rounded-full object-contain"
            loading="eager"
          />
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-bold tracking-tight transition-all duration-300 hover:opacity-80 ${
                isActive(link.href)
                  ? "text-[#001e40] border-b-2 border-[#001e40] pb-0.5"
                  : "text-stone-600 hover:text-stone-900"
              }`}
              style={{ fontFamily: "Epilogue, sans-serif" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden md:inline-block bg-[#001e40] text-white px-6 py-2.5 rounded-full font-bold transition-all duration-300 hover:bg-[#001229] hover:scale-95 active:scale-90 text-sm"
        >
          Get in Touch
        </Link>

        <button
          className="md:hidden p-2 text-stone-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-stone-100 px-8 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block font-bold text-lg tracking-tight transition-colors ${
                isActive(link.href) ? "text-[#001e40]" : "text-stone-700"
              }`}
              style={{ fontFamily: "Epilogue, sans-serif" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center bg-[#001e40] text-white px-6 py-3 rounded-full font-bold mt-4"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
}
