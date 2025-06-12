import type { Metadata } from "next";
import { Geist, Geist_Mono, Limelight } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const limeLight = Limelight({
  variable: "--font-limelight", // Changez ici
  subsets: ["latin"],
  weight: "400",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Louis BRUCHE - Fullstack Developer",
  description: "A fullstack developer, I'm currently looking for a work-study position in data for September 2025. I'm open to any other project opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${limeLight.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
