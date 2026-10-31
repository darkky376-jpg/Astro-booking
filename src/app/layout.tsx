import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: SITE.name,
  description: SITE.tagline,
};

export const viewport: Viewport = {
  themeColor: "#070b24",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
