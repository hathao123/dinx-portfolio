import { Footer, Header } from "@/blocks/Home/components";
import type { Metadata } from "next";
import { Eczar, Work_Sans } from "next/font/google";
import "./globals.css";

const eczar = Eczar({
  variable: "--font-eczar",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Blogs",
  description: "A collection of my blogs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${workSans.variable} ${eczar.variable} antialiased bg-background`}
      >
        <Header />
        <div className="w-full container">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
