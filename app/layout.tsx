import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/app/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const iranYekan = localFont({
  src: [
    {
      path: "./../public/fonts/woff/iranyekanwebthin.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "./../public/fonts/woff/iranyekanweblight.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./../public/fonts/woff/iranyekanwebregular.woff",
      weight: "normal",
      style: "normal",
    },
    {
      path: "./../public/fonts/woff/iranyekanwebmedium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./../public/fonts/woff/iranyekanwebbold.woff",
      weight: "bold",
      style: "normal",
    },
    {
      path: "./../public/fonts/woff/iranyekanwebextrabold.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "./../public/fonts/woff/iranyekanwebblack.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-iran-yekan",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fabric Store",
  description: "A fabric store with dark and light mode",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${iranYekan.variable} antialiased text-foreground transition-colors duration-300 min-h-screen`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}