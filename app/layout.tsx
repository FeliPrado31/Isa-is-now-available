import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Countdown Timer - Isa Availability",
  description:
    "A countdown timer application built with Next.js and TypeScript, following Hexagonal Architecture principles. Track the availability of Isa with real-time countdown updates.",
  keywords: [
    "Next.js",
    "TypeScript",
    "Hexagonal Architecture",
    "Countdown Timer",
    "React",
    "Web Development",
  ],
  authors: [{ name: "Feli", url: "https://github.com/feliprado31" }],
  creator: "Feli",
  publisher: "Your Company",
  openGraph: {
    title: "Countdown Timer - Isa Availability",
    description:
      "Track the availability of Isa with our real-time countdown timer. Built with Next.js and TypeScript, following Hexagonal Architecture principles.",
    url: "https://github.com/feliprado31",
    siteName: "Your Website",
    images: [
      {
        url: "https://github.com/feliprado31/og-image.png",
        width: 800,
        height: 600,
        alt: "Countdown Timer - Isa Availability",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Countdown Timer - Isa Availability",
    description:
      "Track the availability of Isa with our real-time countdown timer. Built with Next.js and TypeScript, following Hexagonal Architecture principles.",
    creator: "@yourtwitterhandle",
    images: ["https://github.com/feliprado31/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
