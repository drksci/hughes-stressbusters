import type { Metadata } from "next";
import { RootProvider } from "fumadocs-ui/provider/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hughes Stress Busters",
  description: "A light-hearted card game for the moments that need a reset.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><RootProvider theme={{ enabled: false }} search={{ enabled: false }}>{children}</RootProvider></body>
    </html>
  );
}
