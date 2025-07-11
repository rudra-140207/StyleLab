"use client";
import Link from 'next/link';
export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-green-300 text-gray-800">
      <h1 className="text-5xl font-bold mb-4">🧵 StyleLab</h1>
      <p className="text-lg mb-8">Mix and match your perfect outfit using drag-and-drop.</p>
      <Link href="/builder" className="px-6 py-3 bg-green-700 text-white rounded-xl text-lg hover:bg-green-800 transition">
        Start Designing
      </Link>
    </main>
  );
}