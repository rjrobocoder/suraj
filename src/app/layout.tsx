import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suraj Biswas - Mechanical Engineer | Innovator | Problem Solver",
  description: "Suraj Biswas is a passionate Mechanical Engineer with a specialization in advanced tool design and quality assurance. With a strong foundation in Injection Moulding, Press Tools, and Jig & Fixture design, he excels in problem-solving and driving innovation in engineering. Through his career, Suraj has honed his technical expertise and continuously seeks opportunities to reinvent, recreate, and build meaningful connections. Explore his journey and work as he combines curiosity, technical skills, and creativity to shape the future of engineering and design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
