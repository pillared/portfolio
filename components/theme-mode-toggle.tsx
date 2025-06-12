"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null; // Avoid rendering toggle until theme is known
  }

  return (
    <Button
      variant="ghost"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="relative mr-2 flex h-8 w-16 items-center rounded-full bg-gray-100 p-1 transition-colors duration-300 dark:bg-gray-700"
      aria-label="Toggle theme"
    >
      {/* The track */}
      <span
        className={`absolute top-1 left-1 h-6 w-6 transform rounded-full bg-white shadow-md transition-transform duration-300 dark:bg-gray-900 ${
          resolvedTheme === "dark" ? "translate-x-8" : "translate-x-0"
        }`}
      />
      {/* Icons on either side */}
      <Sun className="absolute top-2 left-2 h-5 w-5 text-yellow-500" />
      <Moon className="absolute top-2 right-2 h-5 w-5 text-blue-600" />
    </Button>
  );
}
