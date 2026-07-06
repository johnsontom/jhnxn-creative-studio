export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#09090B]">
      <div className="flex flex-col items-center">

        <div className="h-20 w-20 animate-spin rounded-full border-4 border-violet-600 border-t-transparent" />

        <h1 className="mt-8 text-3xl font-bold text-white">
          JHNXN
        </h1>

        <p className="mt-2 tracking-[0.4em] text-zinc-400 uppercase">
          Creative Studio
        </p>

      </div>
    </main>
  );
}