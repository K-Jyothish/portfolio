import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import BackgroundGlow from "@/components/BackgroundGlow";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jyothish K | Creative Developer",
  description: "M.Tech Scholar, AI & ML Specialist, Creative Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${inter.variable} antialiased bg-[#121212] text-white`}
      >
        <SmoothScroll>
          <Navbar />
          <BackgroundGlow />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
