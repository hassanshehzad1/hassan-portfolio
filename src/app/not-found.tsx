'use client';

import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-8">Page not found</p>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors"
        >
          <span>Go Home</span>
        </Link>
      </div>
    </div>
  );
}
