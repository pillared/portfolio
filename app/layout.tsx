import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import defaultConfigJson from "@/lib/config/default.config.json";
import { ReactNode } from "react";
import LayoutProvider from "./layout-provider";

const roboto = Roboto({
  weight: ["100", "300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: defaultConfigJson.name,
  description: defaultConfigJson.description,
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-icon.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <head>
        <link rel="icon" href="/favicon.ico" />
      </head> */}
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          <div className={roboto.className}>
            <LayoutProvider>{children}</LayoutProvider>
          </div>
          {/* <Toaster /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
