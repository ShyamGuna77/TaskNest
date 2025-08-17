import Hero from "@/components/Hero";
import { Companies } from "@/components/Companies";
import BentoGrids from "@/components/BentoGrids";
import Cta from "@/components/Cta";
import LumifyPricing from "@/components/Pricing";
import Accordin from "@/components/Accordin";
export default function HomePage() {
  return (
    <div>
      <Hero />
      <Companies />
      <BentoGrids />
      <LumifyPricing />
      <Accordin />
      <Cta />
    </div>
  );
}