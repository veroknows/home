"use client";
import Image from "next/image";
import Link from "next/link";
import { Mail, Github, Menu, X } from "lucide-react";
import { useState } from "react";

export default function ClientHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/veroknows-logo.png" alt="VeroKnows Logo" width={48} height={48} priority className="h-12 w-12 object-contain" unoptimized />
          <span className="text-2xl font-bold tracking-tight text-blue-900">VeroKnows</span>
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-lg font-medium">
          <Link href="/home" className="hover:text-blue-700 transition-colors">Home</Link>
          <Link href="/study-abroad" className="hover:text-blue-700 transition-colors">Study Abroad</Link>
          <Link href="/research-services" className="hover:text-blue-700 transition-colors">Research Services</Link>
          <Link href="/about" className="hover:text-blue-700 transition-colors">About</Link>
        </nav>
        {/* Hamburger for mobile */}
        <button className="md:hidden p-2 rounded hover:bg-blue-100 transition" aria-label="Open menu" onClick={() => setDrawerOpen(true)}>
          <Menu className="w-7 h-7 text-blue-900" />
        </button>
        {/* Drawer overlay */}
        {drawerOpen && (
          <div className="fixed inset-0 z-50 bg-black/40" onClick={() => setDrawerOpen(false)} />
        )}
        {/* Drawer */}
        <div className={`fixed top-0 right-0 z-50 h-full w-64 bg-blue-900 shadow-lg transform transition-transform duration-300 ease-in-out ${drawerOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <div className="flex items-center justify-between px-4 py-4 border-b border-blue-800">
            <span className="text-xl font-bold text-white">Menu</span>
            <button aria-label="Close menu" onClick={() => setDrawerOpen(false)} className="p-2 rounded hover:bg-blue-800 transition">
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
          <nav className="flex flex-col gap-4 p-6 text-lg font-medium bg-blue-900 text-white">
            <Link href="/home" className="hover:text-blue-300 transition-colors" onClick={() => setDrawerOpen(false)}>Home</Link>
            <Link href="/study-abroad" className="hover:text-blue-300 transition-colors" onClick={() => setDrawerOpen(false)}>Study Abroad</Link>
            <Link href="/research-services" className="hover:text-blue-300 transition-colors" onClick={() => setDrawerOpen(false)}>Research Services</Link>
            <Link href="/about" className="hover:text-blue-300 transition-colors" onClick={() => setDrawerOpen(false)}>About</Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 