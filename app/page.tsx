import Hero from "@/components/sections/Hero";
import Heritage from "@/components/sections/Heritage";
import SeasonalHarvest from "@/components/sections/SeasonalHarvest";
import Guardians from "@/components/sections/Guardians";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <Heritage />
      <SeasonalHarvest />
      <Guardians />
      <Newsletter />
    </div>
  );
}
