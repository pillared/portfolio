import { ReactNode } from "react";
import Header from "@/components/header";

interface LayoutProviderProps {
  children: ReactNode;
}

export default function LayoutProvider({ children }: LayoutProviderProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
