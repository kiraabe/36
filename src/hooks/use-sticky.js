import { useEffect, useState } from "react";

const useSticky = () => {
  const [sticky, setSticky] = useState(false);

  const stickyHeader = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 200) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", stickyHeader);
      return () => window.removeEventListener("scroll", stickyHeader);
    }
  }, []);

  return {
    sticky,
  };
};

export default useSticky;
