import React from "react";
import { Card } from "../ui/card";
import { ContactForm } from "../contact-form";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-center">Get in Touch</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
          <p className="mt-6 text-lg text-muted-foreground text-center max-w-2xl">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info Card */}
          <div className="space-y-6 order-2 md:order-1">
            <Card className="p-8 border-primary/20 bg-gradient-to-br from-background to-muted/30">
              <h3 className="text-2xl font-semibold mb-8 text-primary text-center">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-muted-foreground hover:text-primary transition-colors duration-300 group cursor-pointer">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Email
                    </p>
                    <p className="text-base">contact@example.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-muted-foreground hover:text-primary transition-colors duration-300 group cursor-pointer">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Phone
                    </p>
                    <p className="text-base">+1 (234) 567-8900</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-muted-foreground hover:text-primary transition-colors duration-300 group cursor-pointer">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Location
                    </p>
                    <p className="text-base">Bhubaneswar, India</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form Card */}
          <div className="relative order-1 md:order-2">
            <Card className="p-8 backdrop-blur-sm bg-background/90">
              <ContactForm />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
