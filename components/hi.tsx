"use client";

import { useConfigStore } from "@/lib/stores/useConfigStore"; // path to your Zustand store
import React, { useState, useEffect } from "react";
import Image from "next/image";

export function Hi() {
  const { fetchConfig, config } = useConfigStore();
  const [currentDistinguisherIndex, setCurrentDistinguisherIndex] = useState(0);

  useEffect(() => {
    fetchConfig();
  }, [fetchConfig]);

  useEffect(() => {
    if (!config.distinguishers || config.distinguishers.length === 0) return;

    console.info("here");
    const interval = setInterval(() => {
      setCurrentDistinguisherIndex(
        (prevIndex) => (prevIndex + 1) % config.distinguishers.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [config?.distinguishers]);

  const currentDistinguisher =
    config.distinguishers && config.distinguishers.length > 0
      ? config.distinguishers[currentDistinguisherIndex]
      : "";

  return (
    <section className="align-items m-8 flex items-center justify-between">
      <div className="ml-16">
        <h1 className="text-6xl font-semibold">Hello,</h1>
        <h2 className="text-2xl font-semibold">My name is {config.name}</h2>
        <h3 className="text-2xl font-semibold">
          I am{" "}
          <span
            className="translate-y-0 transform transition-all duration-500 ease-in-out"
            key={currentDistinguisherIndex}
          >
            {currentDistinguisher}
          </span>
          {"."}
        </h3>
      </div>
      <div className="mr-16">
        {/* Insert picture here */}
        <Image
          src="/globe.svg"
          width={16}
          height={16}
          alt="Profile"
          className="rounded-full shadow-lg"
        />
      </div>
    </section>
  );
}
