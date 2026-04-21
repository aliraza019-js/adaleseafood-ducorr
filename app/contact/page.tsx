import ContactHero from "@/components/sections/ContactHero";
import ContactBento from "@/components/sections/ContactBento";
import ContactMap from "@/components/sections/ContactMap";
import ImageStrip from "@/components/sections/ImageStrip";

export default function ContactPage() {
  return (
    <div className="pt-24">
      <ContactHero />
      <ContactBento />
      <ContactMap />
      <ImageStrip />
    </div>
  );
}
