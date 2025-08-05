import React from "react";

const FlexibleSchedulingIcon = () => {
  return (
    <>
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="8"
          y="12"
          width="48"
          height="44"
          rx="4"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M16 8V16M48 8V16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8 24H56"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="20"
          cy="36"
          r="2"
          fill="currentColor"
        />
        <circle
          cx="32"
          cy="36"
          r="2"
          fill="currentColor"
        />
        <circle
          cx="44"
          cy="36"
          r="2"
          fill="currentColor"
        />
        <circle
          cx="20"
          cy="44"
          r="2"
          fill="currentColor"
        />
        <path
          d="M28 44L32 48L40 40"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default FlexibleSchedulingIcon;
