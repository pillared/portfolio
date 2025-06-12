import Header from "@/components/header";
import { ThemeModeToggle } from "@/components/theme-mode-toggle";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex w-full justify-end">
        <ThemeModeToggle />
      </div>
    </>
  );
}
