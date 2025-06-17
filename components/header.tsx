import { Navigation } from "@/components/navigation";
import { ThemeModeToggle } from "@/components/theme-mode-toggle";

export default async function Header() {
  return (
    <div className="justify-items top-0 left-0 z-50 m-6 flex items-center px-6">
      <Navigation />
      <ThemeModeToggle />
    </div>
  );
}
