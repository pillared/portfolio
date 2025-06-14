import { ReactNode } from "react";
import Header from "@/components/header";
import AnimatedIconsBackground from "@/components/animated-icons-background";

interface LayoutProviderProps {
  children: ReactNode;
}

export default function LayoutProvider({ children }: LayoutProviderProps) {
  return (
    <>
      <AnimatedIconsBackground />
      <Header />
      {children}
    </>
  );
}
