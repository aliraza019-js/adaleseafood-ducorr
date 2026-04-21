import Link from "next/link";
import Image from "next/image";
import { Globe, Waves, Anchor, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-stone-200 bg-stone-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8 py-16 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="space-y-6">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="Adale Seafood Company"
              width={64}
              height={64}
              className="rounded-full object-contain"
            />
          </Link>
          <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
            Somalia&apos;s premier seafood export company. Delivering the finest
            lobster and tuna from the Indian Ocean to global markets since 2022.
          </p>
          <div className="flex gap-4">
            {[Globe, Waves, Anchor].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="bg-stone-200 p-2.5 rounded-full hover:bg-[#001e40] hover:text-white transition-colors text-stone-600"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-bold text-stone-900 text-xs uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Our Story", href: "/our-story" },
                { label: "Products", href: "/products" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-500 hover:text-[#001e40] hover:translate-x-1 transition-all inline-block text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-stone-900 text-xs uppercase tracking-widest">
              Export
            </h4>
            <ul className="space-y-2">
              {["Wholesale", "Sustainability", "Certifications", "Privacy Policy"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-stone-500 hover:text-[#001e40] hover:translate-x-1 transition-all inline-block text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="font-bold text-stone-900 text-xs uppercase tracking-widest">
            Headquarters
          </h4>
          <div className="space-y-3">
            <div className="flex items-start gap-2 text-stone-500 text-sm">
              <MapPin size={15} className="mt-0.5 shrink-0 text-[#001e40]" />
              <span>Hedan, Mogadishu, Somalia</span>
            </div>
            <div className="flex items-center gap-2 text-stone-500 text-sm">
              <Phone size={15} className="shrink-0 text-[#001e40]" />
              <a href="tel:+252614449036" className="hover:text-[#001e40] transition-colors">
                +252 61 444 9036
              </a>
            </div>
            <div className="flex items-center gap-2 text-stone-500 text-sm">
              <Mail size={15} className="shrink-0 text-[#001e40]" />
              <a
                href="mailto:sales@adaleseafood.com"
                className="hover:text-[#001e40] transition-colors"
              >
                sales@adaleseafood.com
              </a>
            </div>
          </div>
          <p className="text-stone-400 text-xs pt-4">
            © {new Date().getFullYear()} Adale Seafood. Premium Coastal Export.
          </p>
        </div>
      </div>
    </footer>
  );
}
