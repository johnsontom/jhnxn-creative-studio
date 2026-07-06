import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#09090B] px-6 text-center">
      <h1 className="text-7xl font-bold text-violet-500">
        404
      </h1>

      <h2 className="mt-6 text-3xl font-bold text-white">
        Page Not Found
      </h2>

      <p className="mt-4 max-w-md text-zinc-400">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-10 rounded-full bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-500"
      >
        Back Home
      </Link>
    </main>
  );
}