"use client";

import { useEffect, useState } from "react";
import { NavDock } from "./NavDock";

export default function MagicDock() {
  const [showNavDock, setShowNavDock] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavDock(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavDock
      className={`transition-opacity duration-300 ${
        showNavDock ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    />
  );
}
