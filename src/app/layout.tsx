import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import "@fontsource/inter/index.css";
import ClientHeader from "./ClientHeader";
import { Mail, Github } from "lucide-react";

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
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e3a8a" />
      </head>
      <body className={`font-inter bg-white text-gray-900 antialiased min-h-screen flex flex-col`}>
        <ClientHeader />
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
                <Image src="/rednote-qr.png" alt="Rednote QR" width={24} height={24} className="w-6 h-6 rounded bg-white p-0.5" unoptimized />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
