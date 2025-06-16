import React from "react";

interface ChevronIconProps {
  className?: string;
  direction?: "left" | "right";
}

const ChevronIcon: React.FC<ChevronIconProps> = ({
  className = "",
  direction = "right",
}) => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 63 99"
      focusable="false"
      className={`block fill-current ${className} ${direction === "left" ? "scale-x-[-1] scale-y-[-1]" : ""}`}
    >
      <path d="M59.8 57.6l-38 38c-10.7 10.8-29.4-7-18.3-18l28-28L3.5 21C-8 9.5 12.2-6.5 21.7 3l38 38c4.4 5 4.4 12.3 0 16.6z" />
    </svg>
  );
};

export default ChevronIcon;
