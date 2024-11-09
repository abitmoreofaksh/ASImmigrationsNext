"use client";
import About from "@/components/About";
import Accordion from "@/components/Accordion";
import { BackgroundCellCore } from "@/components/Background";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <BackgroundCellCore />
      {/* <Brands /> */}
      <About />
      <Services />
      {/* <Testimonial /> */}
      <Accordion />
      <Footer />
    </div>
  );
}
