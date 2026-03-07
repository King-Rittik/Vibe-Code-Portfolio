import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Keshav Raghav | Senior Software Engineer",
  description:
    "Portfolio of Keshav Raghav — Senior Software Engineer specializing in distributed systems, cloud-native architectures, and building products used by millions.",
  keywords: [
    "software engineer",
    "full-stack developer",
    "react",
    "next.js",
    "portfolio",
    "keshav raghav",
  ],
  openGraph: {
    title: "Keshav Raghav | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in distributed systems and cloud-native architectures.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
