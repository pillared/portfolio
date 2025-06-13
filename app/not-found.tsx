import Header from "@/components/header";

export default function Error() {
  return (
    <>
      <Header />
      <main className="p-4">
        <div className="bg-background text-foreground flex min-h-screen flex-col items-center p-4 text-center">
          <h1 className="text-[10rem] leading-none font-bold text-red-600">
            404
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">Page not found</p>
        </div>
      </main>
    </>
  );
}
