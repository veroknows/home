import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import "@fontsource/inter/index.css";
import { Mail, Github } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VeroKnows | Data-Driven & AI-Powered Education Consulting",
  description: "VeroKnows is a high-end education consulting company specializing in data-driven and AI-powered matching.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`font-inter bg-white text-gray-900 antialiased min-h-screen flex flex-col`}>
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm">
          <div className="container mx-auto flex items-center justify-between py-3 px-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/veroknows-logo.png" alt="VeroKnows Logo" width={48} height={48} priority className="h-12 w-12 object-contain" />
              <span className="text-2xl font-bold tracking-tight text-blue-900">VeroKnows</span>
            </Link>
            <nav className="flex gap-6 text-lg font-medium">
              <Link href="/home" className="hover:text-blue-700 transition-colors">Home</Link>
              <Link href="/study-abroad" className="hover:text-blue-700 transition-colors">Study Abroad</Link>
              <Link href="/research-services" className="hover:text-blue-700 transition-colors">Research Services</Link>
              <Link href="/about" className="hover:text-blue-700 transition-colors">About</Link>
            </nav>
          </div>
        </header>
        <main className="flex-1 flex flex-col">{children}</main>
        <footer className="bg-blue-700 border-t border-blue-800 py-8 mt-8 text-white">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4 text-sm">
            <div className="text-base tracking-wide">© 2025 VeroKnows LLC</div>
            <div className="flex gap-6 text-base font-medium">
              <Link href="/home" className="hover:underline">Home</Link>
              <Link href="/study-abroad" className="hover:underline">Study Abroad</Link>
              <Link href="/research-services" className="hover:underline">Research Services</Link>
              <Link href="/about" className="hover:underline">About</Link>
            </div>
            <div className="flex gap-5 items-center">
              <a href="https://github.com/veroknows" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-300 transition"><Github className="w-6 h-6" /></a>
              <a href="mailto:info@veroknows.com" aria-label="Email" className="hover:text-blue-300 transition"><Mail className="w-6 h-6" /></a>
              <a href="https://www.xiaohongshu.com/user/profile/5a1e8558e8ac2b6655ed152c" target="_blank" rel="noopener noreferrer" aria-label="Rednote" className="hover:text-blue-300 transition">
                <Image src="/rednote-qr.png" alt="Rednote QR" width={24} height={24} className="w-6 h-6 rounded bg-white p-0.5" />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
