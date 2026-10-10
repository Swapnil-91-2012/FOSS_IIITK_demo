import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "FOSS Club IIIT Kalyani — Build. Contribute. Together.",
  description:
    "FOSS Club IIIT Kalyani is a student-driven community exploring open source, technology and collaborative development.",
  icons: { icon: "/images/foss-logo.png", apple: "/images/foss-logo.png" },
};

export const viewport: Viewport = {
  themeColor: "#050A0A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
