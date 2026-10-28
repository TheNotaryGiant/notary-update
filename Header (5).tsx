'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto max-w-6xl flex items-center justify-between p-4">
        <Link href="/" className="font-bold text-lg">The Notary Giant</Link>
        <nav className="flex gap-6 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/#services">Services</Link>
          <Link href="/blog" className="text-[#0a1931] font-bold underline">Blog</Link>
          <Link href="/#contact">Book</Link>
          <Link href="/feed.xml" className="text-orange-600">RSS</Link>
        </nav>
      </div>
    </header>
  );
}
