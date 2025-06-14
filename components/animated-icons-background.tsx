"use client";

import React, { useState, useEffect } from "react";
import { useConfigStore } from "@/lib/stores/useConfigStore";
import Image from "next/image";

export default function AnimatedIconsBackground() {
  // Select only what you need
  const config = useConfigStore((state) => state.config);

  // Memoize icon extraction
  const icons = React.useMemo(() => {
    if (!config) return [];

    return config.skills.technical.flatMap((techSkill) =>
      techSkill.items.map((item) => item.icon)
    );
  }, [config]);

  // Calculate number of rows just once or on resize
  const [numRows, setNumRows] = React.useState(0);

  React.useEffect(() => {
    function updateNumRows() {
      setNumRows(Math.ceil(window.innerHeight / 64)); // rowHeight = 64
    }

    updateNumRows();
    window.addEventListener("resize", updateNumRows);
    return () => window.removeEventListener("resize", updateNumRows);
  }, []);

  // Combine icons
  const iconsDoubled = React.useMemo(() => [...icons, ...icons], [icons]);

  // Calculate total width for the animation
  const iconWidthWithMargin = 50 + 16;
  const totalWidth = icons.length * iconWidthWithMargin * 2;

  return (
    <div className="pointer-events-none absolute inset-0 z-0 h-screen select-none">
      {[...Array(numRows)].map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="overflow-hidden"
          style={{
            paddingLeft: `${(rowIndex * 100) % 300}px`,
            height: 64,
            whiteSpace: "nowrap",
          }}
        >
          <div
            className="animate-slide-left"
            style={{
              animationDelay: `-${rowIndex * 10}s`,
              width: `${totalWidth}px`,
              display: "inline-block",
            }}
          >
            {iconsDoubled.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt="icon"
                width={50}
                height={50}
                className="mr-4 inline-block opacity-5 transition-opacity duration-300 ease-in-out hover:opacity-50"
                priority={false}
                unoptimized={true}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
