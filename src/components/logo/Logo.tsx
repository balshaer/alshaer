import { useState } from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const logoClasses = `bg-[var(--logo-background)] text-[var(--background)] font-bold px-3 py-[2px] text-lg rounded-lg ${
    isHovered
      ? "bg-gradient-to-r from-[var(--gradient-color-1)] to-[var(--gradient-color-2)] text-white hoveredLogo"
      : ""
  }`;

  const nameClasses = `text-[var(--logo-text-color)] font-[600] text-xl ${
    isHovered
      ? "bg-gradient-to-r from-[var(--gradient-color-1)] to-[var(--gradient-color-2)] text-transparent bg-clip-text hoveredLogo"
      : ""
  }`;

  return (
    <div>
      <Link to={"/"}>
        <div
          className="flex items-center justify-start gap-2 cursor-pointer hoveredLogo"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className={logoClasses}>B</span>
          <span className={nameClasses}>Baraa</span>
        </div>
      </Link>
    </div>
  );
}
