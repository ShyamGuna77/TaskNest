import Hero from "@/components/Hero";
import { Companies } from "@/components/Companies";
import BentoGrids from "@/components/BentoGrids";
import Cta from "@/components/Cta";
import LumifyPricing from "@/components/Pricing";
export default function HomePage() {
  return (
    <div>
      <Hero />
      <Companies />
      <BentoGrids />
      <LumifyPricing />
      <Cta />
    </div>
  );
}