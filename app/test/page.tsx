"use client";

import React, { useState, useEffect } from "react";
import { useConfigStore } from "@/lib/stores/useConfigStore";
import Image from "next/image";

function repeatIconsToFill(
  icons: string[],
  containerWidth: number,
  iconWidth = 50,
  iconMargin = 16
) {
  if (!icons.length) return [];

  const renderedWidth = iconWidth + iconMargin;

  if (renderedWidth <= 0) return [];

  const copiesNeeded = Math.ceil(
    (2 * containerWidth) / (renderedWidth * icons.length)
  );

  if (isNaN(copiesNeeded) || copiesNeeded < 0) return [];

  return Array.from({ length: copiesNeeded }, () => icons).flat();
}

export default function AnimatedIconsBackground() {
  const { fetchConfig, config } = useConfigStore();

  const [numRows, setNumRows] = useState(0);
  const [repeatingIcons, setRepeatingIcons] = useState<string[]>([]);

  useEffect(() => {
    fetchConfig();

    function updateNumRowsAndIcons() {
      if (!config) return;

      const rowHeight = 60;

      const rows = Math.ceil(window.innerHeight / rowHeight);
      setNumRows(rows);

      const icons = config.skills.technical.flatMap((techSkill) =>
        techSkill.items.map((item) => item.icon)
      );

      if (icons.length === 0) return;

      const iconWidth = 50;
      const iconMargin = 16;

      const repeatedIcons = repeatIconsToFill(
        icons,
        window.innerWidth,
        iconWidth,
        iconMargin
      );

      setRepeatingIcons((repeatingIcons) => repeatedIcons);
    }

    if (config) {
      updateNumRowsAndIcons();

      window.addEventListener("resize", updateNumRowsAndIcons);
      return () => window.removeEventListener("resize", updateNumRowsAndIcons);
    }
  }, [fetchConfig, config]);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
      {[...Array(numRows)].map((_, rowIndex) => (
        <div
          key={rowIndex}
          style={{ transform: `translateX(${(rowIndex * 100) % 300}px)` }}
        >
          <div
            className="animate-slide-left whitespace-nowrap"
            style={{ animationDelay: `-${rowIndex * 10}s` }}
          >
            {repeatingIcons.map((src, index) => (
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
