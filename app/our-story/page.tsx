import OurStoryHero from "@/components/sections/OurStoryHero";
import OurStoryLegacy from "@/components/sections/OurStoryLegacy";
import OurStoryProcess from "@/components/sections/OurStoryProcess";
import OurStoryMandate from "@/components/sections/OurStoryMandate";
import OurStoryCta from "@/components/sections/OurStoryCta";

export const metadata = {
  title: "Our Story | Adale Seafood",
  description:
    "Born from Somalia's Indian Ocean shores — discover the story, the people, and the mission behind Adale Seafood.",
};

export default function OurStoryPage() {
  return (
    <div className="pt-24">
      <OurStoryHero />
      <OurStoryLegacy />
      <OurStoryProcess />
      <OurStoryMandate />
      <OurStoryCta />
    </div>
  );
}
