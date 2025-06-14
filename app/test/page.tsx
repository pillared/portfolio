"use client";
import React, { useEffect } from "react";
import { useConfigStore } from "@/lib/stores/useConfigStore";
import Image from "next/image";
// Repeat for looping

export default function AnimatedIconsBackground() {
  const { fetchConfig, config } = useConfigStore();

  useEffect(() => {
    fetchConfig();
  }, [fetchConfig]);

  const icons = config.skills.technical.flatMap((techSkill) =>
    techSkill.items.map((item) => item.icon)
  );

  const repeatedIcons = [...icons, ...icons, ...icons, ...icons];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {[0, 1, 2].map((shift, rowIndex) => (
        <div
          key={rowIndex}
          className="animate-slide-left whitespace-nowrap"
          style={{ animationDelay: `-${shift * 10}s` }}
        >
          {repeatedIcons.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt="icon"
              width={50}
              height={50}
              className="mr-4 inline-block"
              priority={false}
              unoptimized={true} // optional, if icons are external URLs
            />
          ))}
        </div>
      ))}
    </div>
  );
}
