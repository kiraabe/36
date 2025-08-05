export const animationCreate = () => {
  if (typeof window !== "undefined") {
    try {
      window.WOW = require("wowjs");
      new WOW.WOW({ live: false }).init();
    } catch (error) {
      console.warn("WOW.js initialization failed:", error);
    }
  }
};
