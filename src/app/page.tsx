"use client";

import Hero from "@/components/Hero";
import { Companies } from "@/components/Companies";
import BentoGrids from "@/components/BentoGrids";
import Cta from "@/components/Cta";
import Pricing from "@/components/Pricing";
import Accordin from "@/components/Accordin";
import { Testimonials } from "@/components/DemoTestimonal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function HomePage() {
  return (
    <div className="bg-[#F9F9F9]">
      <Navbar />
      <Hero />
      <Companies />
      <BentoGrids />
      <Testimonials />
      <Pricing />
      <Accordin />
      <Cta />
      <Footer />
    </div>
  );
}
