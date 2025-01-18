import React from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

const AcademicSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Academic Experience
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* Current Education */}
          <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <div className="shrink-0">
                <Badge className="px-4 py-2" variant="secondary">
                  2020 - Current
                </Badge>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-primary">
                  Post Graduation
                </h3>
                <p className="text-lg">
                  Post Graduate Diploma in Tool Design & CAD/CAM
                </p>
                <p className="text-muted-foreground">
                  Central Tool Room and Training Center, Bhubaneswar ODISHA
                </p>
              </div>
            </div>
          </Card>

          {/* Graduation */}
          <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <div className="shrink-0">
                <Badge className="px-4 py-2" variant="secondary">
                  2016 - 2020
                </Badge>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-primary">
                  Graduation
                </h3>
                <p className="text-lg">
                  Bachelor's Degree in Mechanical Engineering
                </p>
                <p className="text-muted-foreground">
                  Biju Patnaik University of Technology (BPUT)
                </p>
                <p className="text-muted-foreground">
                  Gandhi Institute For Technology, Bhubaneswar
                </p>
              </div>
            </div>
          </Card>

          {/* Higher Secondary */}
          <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <div className="shrink-0">
                <Badge className="px-4 py-2" variant="secondary">
                  2014 - 2016
                </Badge>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-primary">
                  Higher Secondary
                </h3>
                <p className="text-lg">Higher Secondary Stream in Science</p>
                <p className="text-muted-foreground">
                  Gayatri Junior College, Berhampure, ODISHA
                </p>
              </div>
            </div>
          </Card>

          {/* Matriculation */}
          <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <div className="shrink-0">
                <Badge className="px-4 py-2" variant="secondary">
                  2013 - 2014
                </Badge>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-primary">
                  Matriculation
                </h3>
                <p className="text-muted-foreground">
                  Jagannath Pally High School M.V.-7, Malkangiri, ODISHA
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AcademicSection;
