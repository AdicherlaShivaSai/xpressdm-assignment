import "./globals.css";
import ConditionalNavbar from "@/components/ConditionalNavbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative min-h-screen">
        {/* GLOBAL BACKGROUND */}
        <ThemeProvider>

          {/* BACKGROUND */}
          <div
            className="
            fixed inset-0 -z-10
            bg-[url('/Bg_image.png')]
            bg-cover
            bg-center
            bg-no-repeat
            transition-all
            dark:brightness-[0.25]
            dark:contrast-125
            
            "
          />

        <ConditionalNavbar />

        <main className="flex-1">{children}</main>

        </ThemeProvider>

        <Footer />
      </body>
    </html>
  );
}
