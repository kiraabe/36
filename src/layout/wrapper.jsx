import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
// middleware
gsap.registerPlugin(ScrollTrigger);
// internal
import ScrollToTop from "../hooks/scroll-to-top";
import { animationCreate } from "../utils/utils";
import { DarkModeProvider } from "../context/DarkModeContext";
import useLanguagePersistence from "../hooks/useLanguagePersistence";

const Wrapper = ({ children }) => {
  // Initialize language persistence
  useLanguagePersistence();

  useEffect(() => {
    // animation
    if (typeof window !== "undefined") {
      const timer = setTimeout(() => {
        animationCreate();
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <DarkModeProvider>
      {children}
      <ScrollToTop/>
    </DarkModeProvider>
  );
};

export default Wrapper;
