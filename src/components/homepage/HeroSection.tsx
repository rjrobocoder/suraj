"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <iframe
          src="https://my.spline.design/nexbotrobotcharacterconcept-f440db359fa4d7029c5645faabda18a3/"
          style={{ border: 0 }}
          width="100%"
          height="100%"
          title="3D Robot Model"
        />
      </div>
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 [text-shadow:_0_1px_12px_rgb(0_0_0_/_40%)]">
          Suraj Biswas
        </h1>
        <p className="text-xl md:text-2xl mb-8 [text-shadow:_0_1px_8px_rgb(0_0_0_/_40%)]">
          Mechanical Engineer | Robotics Researcher
        </p>
        <Button asChild size="lg">
          <Link href="#contact">Get in Touch</Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
