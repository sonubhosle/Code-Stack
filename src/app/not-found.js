"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-emerald-500 tracking-widest">404</h1>
        <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <button className="mt-5">
          <a
            className="relative inline-block text-sm font-medium text-emerald-500 group active:text-emerald-500 focus:outline-none focus:ring"
            onClick={() => router.push('/')}
          >
            <span
              className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-emerald-500 group-hover:translate-y-0 group-hover:translate-x-0"
            ></span>

            <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
              Go Home
            </span>
          </a>
        </button>
      </div>
    </div>
  );
}
