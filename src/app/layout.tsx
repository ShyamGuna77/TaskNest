import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TaskNest - AI-Powered HR Management Platform",
  description:
    "A modern HR SaaS platform powered by artificial intelligence, bringing clarity, efficiency, and insight to your people management.",
  keywords:
    "HR management, AI-powered, SaaS, employee management, task management, productivity",
  authors: [{ name: "TaskNest Team" }],
  openGraph: {
    title: "TaskNest - AI-Powered HR Management Platform",
    description:
      "A modern HR SaaS platform powered by artificial intelligence, bringing clarity, efficiency, and insight to your people management.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F9F9F9]`}
      >
        {children}
      </body>
    </html>
  );
}
