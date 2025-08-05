import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Pages = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to about page as default
    router.push("/about");
  }, [router]);

  return null;
};

export default Pages;
