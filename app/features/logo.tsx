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
     <image
        href="/favicon.png"
        x="0"
        y="0"
        width="100"
        height="100"
      />
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
        {/* <span className="text-[10px] font-semibold tracking-wide text-primary leading-tight uppercase mt-0.5">
          Owners Welfare Association
        </span> */}
        <span className="text-[9px] font-medium tracking-normal text-text-muted leading-none uppercase">
         Owners Welfare Association
        </span>
        <span className="text-[8px] pt-1 font-medium tracking-normal text-text-muted leading-none uppercase">
          Reg.No: 90/2025
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
            Vichoor Vellivoyal Industries Owners
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
