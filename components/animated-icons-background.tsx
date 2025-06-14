"use client";

import React, { useState, useEffect } from "react";
import { useConfigStore } from "@/lib/stores/useConfigStore";
import Image from "next/image";

export default function AnimatedIconsBackground() {
  const { fetchConfig, config } = useConfigStore();

  const [numRows, setNumRows] = useState(0);
  const [icons, setIcons] = useState<string[]>([]);

  useEffect(() => {
    fetchConfig();

    function update() {
      if (!config) return;

      const rowHeight = 64;
      const rows = Math.ceil(window.innerHeight / rowHeight);
      setNumRows(rows);

      // Extract icons
      const extractedIcons = config.skills.technical.flatMap((techSkill) =>
        techSkill.items.map((item) => item.icon)
      );

      setIcons(extractedIcons);
    }

    if (config) {
      update();
      window.addEventListener("resize", update);
      return () => window.removeEventListener("resize", update);
    }
  }, [fetchConfig, config]);

  // Duplicate icons exactly twice for seamless loop
  const iconsDoubled = [...icons, ...icons];

  // Calculate total width for animated container:
  // Each icon width + marginRight (50 + 16 = 66px)
  // Total width = 66px * icons.length * 2 (because doubled)
  const iconWidthWithMargin = 50 + 16;
  const totalWidth = icons.length * iconWidthWithMargin * 2;

  return (
    <div className="pointer-events-none absolute inset-0 z-0 select-none">
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
