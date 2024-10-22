"use client";
import About from "@/components/About";
import { BackgroundCellCore } from "@/components/Background";
import Brands from "@/components/Brands";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <BackgroundCellCore />
      <Brands />
      <About />
      <Services />
      <Testimonial />
    </div>
  );
}
