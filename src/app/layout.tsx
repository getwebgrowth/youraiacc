import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig, productData } from "@/config/product";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `Buy Google Gemini Pro - $25 for 18 Months | ${siteConfig.name}`,
  description: siteConfig.description,
  keywords: [
    "buy Gemini Pro",
    "Google Gemini Pro subscription",
    "Gemini Pro 18 months",
    "Google AI Pro account",
    "cheap Gemini Pro",
    "Gemini Pro discount",
    "Google One 5TB",
    "Veo video generation",
    "Nano Banana 2",
    "AI subscription deal",
    "official Google account",
    "Gemini Pro price",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `Buy Google Gemini Pro - $25 for 18 Months | ${siteConfig.name}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Buy Google Gemini Pro - $25 for 18 Months | ${siteConfig.name}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased bg-white text-neutral-900`}
      >
        {children}
      </body>
    </html>
  );
}
