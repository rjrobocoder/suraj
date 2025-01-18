import { projects } from "@/data/content";
import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-32 bg-gradient-to-b from-background via-muted/50 to-background px-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
          <p className="mt-6 text-lg text-muted-foreground text-center max-w-2xl">
            Explore some of my recent work in robotics, 3D printing, and
            mechanical design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-muted/50">
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-primary">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button asChild variant="default" className="w-full">
                  <a href={project.link}>View Project</a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
