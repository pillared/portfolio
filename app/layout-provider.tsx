import { ReactNode } from "react";

interface LayoutProviderProps {
  children: ReactNode;
}

export default function LayoutProvider({ children }: LayoutProviderProps) {
  return <>{children}</>;
}
