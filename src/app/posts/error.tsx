'use client'

import Link from "next/link";

export default function ErrorPage() {

  return (
    <div className="flex items-center justify-center h-screen bg-zinc-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-5">
            <Link href="/">Refresh</Link></h1>
        <p className="text-zinc-700">An error occurred while fetching the page.</p>
      </div>
    </div>
  );
}
