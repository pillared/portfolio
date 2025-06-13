import { Navigation } from "@/components/navigation";
import { ThemeModeToggle } from "@/components/theme-mode-toggle";

export default async function Header() {
  return (
    <div className="justify-items mr-6 ml-4 flex items-center">
      <Navigation />
      <ThemeModeToggle />
    </div>
  );
}
