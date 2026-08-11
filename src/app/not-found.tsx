import Link from "next/link";

export default function NotFound() {
  return (
    <div className="fixed inset-0 w-screen h-screen bg-[#09090b] flex items-center justify-center z-50">
      <Link
        href="/"
        className="text-8xl font-black text-[#f8fafc] tracking-tighter hover:opacity-70 transition-opacity select-none cursor-pointer"
      >
        404
      </Link>
    </div>
  );
}
