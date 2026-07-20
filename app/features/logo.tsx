import React from "react";

interface LogoProps {
  className?: string;
  iconSize?: number;
  textColor?: string;
}

export function VviwaIcon({ className = "", size = 80 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`${className} select-none`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Gear Shape */}
      <g fill="currentColor" className="text-primary">
        {/* Gear Teeth */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 360) / 12;
          return (
            <rect
              key={i}
              x="45"
              y="5"
              width="10"
              height="15"
              rx="2"
              transform={`rotate(${angle} 50 50)`}
            />
          );
        })}
        {/* Gear Outer Ring */}
        <circle cx="50" cy="50" r="40" className="text-primary" />
      </g>

      {/* Inner White Plate */}
      <circle cx="50" cy="50" r="32" fill="#FFFFFF" stroke="currentColor" strokeWidth="1" className="text-primary" />

      {/* Factory Silhouette */}
      <g className="text-primary-navy" fill="currentColor">
        {/* Factory building outline */}
        <path d="M 28 58 L 28 48 L 35 48 L 35 52 L 42 52 L 42 46 L 49 46 L 49 54 L 72 54 L 72 58 Z" />
        
        {/* Smokestack 1 */}
        <path d="M 31 48 L 33 28 L 36 28 L 34 48 Z" />
        {/* Smokestack 2 */}
        <path d="M 38 48 L 40 24 L 43 24 L 41 48 Z" />
        {/* Smokestack 3 */}
        <path d="M 45 48 L 47 26 L 50 26 L 48 48 Z" />

        {/* Smoke Puffs */}
        <path d="M 33 24 Q 31 20 34 18 Q 36 20 35 24 Z" opacity="0.6" />
        <path d="M 40 20 Q 38 16 41 14 Q 43 16 42 20 Z" opacity="0.6" />
        <path d="M 47 22 Q 45 18 48 16 Q 50 18 49 22 Z" opacity="0.6" />
      </g>

      {/* Handshake Silhouette */}
      <g className="text-primary" fill="currentColor">
        {/* Left arm */}
        <path d="M 22 66 C 24 64, 28 62, 33 63 L 36 67 L 24 71 Z" />
        {/* Right arm */}
        <path d="M 78 66 C 76 64, 72 62, 67 63 L 64 67 L 76 71 Z" />
        {/* Left cuff */}
        <rect x="33" y="61" width="3" height="8" rx="0.5" transform="rotate(10 34.5 65)" />
        {/* Right cuff */}
        <rect x="64" y="61" width="3" height="8" rx="0.5" transform="rotate(-10 65.5 65)" />
        {/* Handshake center clasp */}
        <path d="M 37 66 C 41 62, 44 61, 48 64 C 49 65, 50 66, 52 64 C 55 61, 58 63, 62 66 L 58 70 C 55 68, 53 67, 50 69 C 47 67, 45 68, 42 70 Z" />
        {/* Fingers details */}
        <circle cx="47" cy="65" r="1" fill="#FFFFFF" />
        <circle cx="50" cy="66" r="1" fill="#FFFFFF" />
        <circle cx="53" cy="66" r="1" fill="#FFFFFF" />
        <circle cx="45" cy="67" r="0.8" fill="#FFFFFF" />
      </g>

      {/* Banner Ribbon at Bottom */}
      <g>
        <path
          d="M 25 76 Q 50 82 75 76 L 73 83 Q 50 88 27 83 Z"
          fill="currentColor"
          className="text-primary-navy"
        />
        {/* Ribbon folds */}
        <path d="M 25 76 L 27 83 L 21 80 Z" fill="currentColor" className="text-primary" />
        <path d="M 75 76 L 73 83 L 79 80 Z" fill="currentColor" className="text-primary" />
        
        {/* Ribbon Text: VVIWA */}
        <text
          x="50"
          y="83"
          textAnchor="middle"
          fontSize="5.5"
          fontWeight="bold"
          fill="#FFFFFF"
          letterSpacing="1"
        >
          VVIWA
        </text>
      </g>
    </svg>
  );
}

export function LogoHorizontal({ className = "", iconSize = 48, textColor = "text-primary-navy" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <VviwaIcon size={iconSize} />
      <div className="flex flex-col">
        <span className={`text-xl font-bold tracking-wider leading-none uppercase ${textColor}`}>
          VVIWA
        </span>
        <span className="text-[10px] font-semibold tracking-wide text-primary leading-tight uppercase mt-0.5">
          Vichoor Vellivoyal Industries
        </span>
        <span className="text-[9px] font-medium tracking-normal text-text-muted leading-none uppercase">
          Welfare Association
        </span>
      </div>
    </div>
  );
}

export function LogoFullBanner({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center text-center p-4 border border-brand-light bg-white rounded-2xl shadow-sm ${className}`}>
      {/* Top Banner content exactly from the image */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
        <VviwaIcon size={120} className="hover:scale-105 transition-transform duration-300" />
        <div className="flex flex-col text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wider text-primary leading-none uppercase">
            VVIWA
          </h1>
          <h2 className="text-lg md:text-xl font-bold tracking-wide text-primary-navy uppercase mt-2">
            Vichoor Vellivoyal Industries
          </h2>
          <div className="flex items-center justify-center md:justify-start my-2">
            <span className="h-0.5 bg-primary-navy w-12" />
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-secondary uppercase mx-3">
              Welfare Association
            </span>
            <span className="h-0.5 bg-primary-navy w-12" />
          </div>
          <p className="text-[11px] md:text-xs font-semibold tracking-[0.15em] text-text-muted uppercase">
            Together for Industrial Growth and Community Welfare
          </p>
        </div>
      </div>
    </div>
  );
}
