export default function Error() {
  return (
    <>
      <main className="p-4">
        <div className="bg-background text-foreground flex min-h-screen flex-col items-center p-4 text-center">
          <h1 className="text-[4rem] leading-none font-bold text-green-600">
            Hi!
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">
            This page is currently a WIP. Please come back soon... :)
          </p>
        </div>
      </main>
    </>
  );
}
