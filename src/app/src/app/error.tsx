"use client";

export default function Error() {
  return (
    <main
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-black
      text-white
      "
    >
      <div
        className="
        p-8
        rounded-3xl
        border
        border-red-500/20
        bg-red-500/5
        "
      >
        Failed to connect to Supabase.
      </div>
    </main>
  );
}