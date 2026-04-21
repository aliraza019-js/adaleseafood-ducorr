import ProductsHero from "@/components/sections/ProductsHero";
import ProductBentoGrid from "@/components/sections/ProductBentoGrid";
import Newsletter from "@/components/sections/Newsletter";

export default function ProductsPage() {
  return (
    <div className="pt-24 pb-20 bg-[#f9f6f2]">
      <ProductsHero />
      <ProductBentoGrid />
      <Newsletter />
    </div>
  );
}
