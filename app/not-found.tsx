import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-[#1A1A2E] min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        {/* Steel bar "404" decoration */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <div className="h-16 w-3 bg-[#C9A84C] rounded-full" />
          <div className="text-[12rem] font-extrabold text-white/10 font-stat leading-none select-none tracking-tighter">
            404
          </div>
          <div className="h-16 w-3 bg-[#C9A84C] rounded-full" />
        </div>

        <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-white/60 text-lg leading-relaxed mb-10">
          The page you're looking for doesn't exist or has been moved.
          Even the strongest steel can't bridge this gap — but our homepage can.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="bg-[#C9A84C] text-[#1A1A2E] font-bold px-8 py-4 rounded-xl hover:bg-[#E8D48B] transition-colors text-lg"
          >
            Back to Home
          </Link>
          <Link
            href="/products"
            className="border-2 border-white/20 text-white font-semibold px-7 py-4 rounded-xl hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all text-lg"
          >
            View Products
          </Link>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-white/20 text-sm">
          <div className="h-px w-16 bg-white/20" />
          <span>Premier Bars Limited</span>
          <div className="h-px w-16 bg-white/20" />
        </div>
      </div>
    </main>
  );
}
