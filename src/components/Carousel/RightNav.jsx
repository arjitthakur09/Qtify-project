import React from "react";

const RightNav = ({ onClick }) => {
  return (
    <svg
      className="swiper-button-next"  // 🟢 Important Swiper selector
      onClick={onClick}
      width="24"
      height="24"
      style={{ cursor: "pointer" }}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 6L15 12L9 18"
        stroke="#34C94B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RightNav;
