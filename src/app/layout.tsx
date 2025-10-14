import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.vorcastudio.com"),
  title: "Vorca Studio — Web Portfolio",
  description:
    "View the Vorca Studio web portfolio: selected web projects and case studies.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vorca Studio — Web Portfolio",
    description:
      "View the Vorca Studio web portfolio: selected web projects and case studies.",
    url: "https://portfolio.vorcastudio.com",
    siteName: "Vorca Studio Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vorca Studio — Web Portfolio",
    description:
      "View the Vorca Studio web portfolio: selected web projects and case studies.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="relative min-h-screen">
          <div className="pointer-events-none absolute inset-0 bg-orca-depth" />
          <Nav />
          <main className="relative">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
