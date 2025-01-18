import React from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { skills } from "@/data/content";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-muted/50 to-background "
    >
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-center">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-[1fr,1.5fr] gap-12 items-center">
          <div className="relative">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/mr-suraj-biswas.jpg"
                alt="Mr. Suraj Biswas"
                fill
                className="object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border-2 border-primary rounded-2xl"></div>
          </div>

          <div className="space-y-8">
            <div className="prose prose-lg">
              <p className="text-xl leading-relaxed">
                Skilled Researcher passionate about advancements in Robotics
                with 3 years of academic research experience. Highly motivated
                individual committed to intensive analysis and creative problem
                solving.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Technical Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant={"secondary"}
                    className="px-4 py-2 text-sm font-medium hover:scale-105 transition-transform"
                  >
                    {skill.name}
                    <span className="ml-2 opacity-75">• {skill.level}</span>
                  </Badge>
                ))}
              </div>
            </div>

            <Button className="mt-6" size="lg">
              <a href="#projects">View My Work</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
