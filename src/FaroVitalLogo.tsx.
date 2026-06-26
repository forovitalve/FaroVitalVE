import React from "react";

interface FaroVitalLogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function FaroVitalLogo({
  className = "",
  showText = true,
  size = "md",
}: FaroVitalLogoProps) {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-24 h-24",
    lg: "w-40 h-40",
    xl: "w-56 h-56",
  };

  const containerSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl",
    xl: "text-5xl",
  };

  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`} id="faro-vital-logo-container">
      {/* SVG replicating the uploaded image perfectly */}
      <div className={`${sizeClasses[size]} relative`} id="logo-svg-wrapper">
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md"
        >
          {/* Deep blue background */}
          <rect width="200" height="200" rx="32" fill="#0d243c" />
          
          {/* Outer light blue rounded border */}
          <rect
            x="24"
            y="24"
            width="152"
            height="152"
            rx="20"
            stroke="#a9d6e5"
            strokeWidth="4"
          />

          {/* Light beams emitted left and right */}
          <polygon
            points="100,75 24,55 24,85"
            fill="#a9d6e5"
            fillOpacity="0.25"
          />
          <polygon
            points="100,75 176,55 176,85"
            fill="#a9d6e5"
            fillOpacity="0.25"
          />

          {/* Ocean Waves at the bottom */}
          <path
            d="M 24,115 C 45,115 50,135 70,135 C 90,135 90,120 100,120 C 110,120 110,135 130,135 C 150,135 155,115 176,115"
            stroke="#a9d6e5"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M 24,130 C 45,130 50,148 70,148 C 90,148 90,135 100,135 C 110,135 110,148 130,148 C 150,148 155,130 176,130"
            stroke="#a9d6e5"
            strokeWidth="4"
            strokeLinecap="round"
            strokeOpacity="0.7"
          />

          {/* Lighthouse structure */}
          {/* Base foundation */}
          <path
            d="M 70,145 L 130,145 L 122,135 L 78,135 Z"
            fill="#0d243c"
            stroke="#a9d6e5"
            strokeWidth="4"
            strokeLinejoin="round"
          />

          {/* Main body (tower) with diagonal stripe */}
          <path
            d="M 82,135 L 88,85 L 112,85 L 118,135 Z"
            fill="#0d243c"
            stroke="#a9d6e5"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          
          {/* Diagonal stripes on the body */}
          <path
            d="M 85,110 L 115,100"
            stroke="#a9d6e5"
            strokeWidth="4"
          />
          <path
            d="M 83.5,122 L 117,112"
            stroke="#a9d6e5"
            strokeWidth="4"
          />

          {/* Gallery Deck/Balcony */}
          <path
            d="M 84,85 L 116,85"
            stroke="#a9d6e5"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Lantern Room (upper glass area) */}
          <rect
            x="91"
            y="65"
            width="18"
            height="20"
            fill="#0d243c"
            stroke="#a9d6e5"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          
          {/* Medical/First Aid Cross inside the lantern room - symbolic for humanitarian aid */}
          <path
            d="M 100,70 L 100,80 M 95,75 L 105,75"
            stroke="#a9d6e5"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Peaked Dome/Roof with a cross ornament on top */}
          <path
            d="M 91,65 L 100,50 L 109,65 Z"
            fill="#0d243c"
            stroke="#a9d6e5"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          
          {/* Tiny Cross on the roof pinnacle */}
          <path
            d="M 100,50 L 100,42 M 97,45 L 103,45"
            stroke="#a9d6e5"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Arched Entrance Door at base */}
          <path
            d="M 94,145 L 94,138 C 94,134.7 96.7,132 100,132 C 103.3,132 106,134.7 106,138 L 106,145"
            fill="#0d243c"
            stroke="#a9d6e5"
            strokeWidth="4"
          />
        </svg>
      </div>

      {showText && (
        <div className="mt-4 flex flex-col items-center" id="logo-text-area">
          <span className={`font-sans font-extrabold tracking-widest text-[#3b82f6] uppercase ${containerSizes[size]}`} id="faro-vital-main-title">
            FARO VITAL
          </span>
          <span className="text-[#3b82f6] font-mono font-bold text-sm tracking-wider self-center opacity-85" id="faro-vital-sub-country">
            VE
          </span>
        </div>
      )}
    </div>
  );
}
