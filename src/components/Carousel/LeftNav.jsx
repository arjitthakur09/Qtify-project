import React from "react";

const LeftNav = ({ onClick }) => {
  return (
    <svg
      className="swiper-button-prev"  // <-- Important for Swiper to detect it
      onClick={onClick}
      width="24"
      height="24"
      style={{ cursor: "pointer" }}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15 18L9 12L15 6"
        stroke="#34C94B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LeftNav;
