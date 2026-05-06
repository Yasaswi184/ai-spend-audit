import Navbar from "./components/Navbar";
import AuditForm from "./components/AuditForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="flex flex-col items-center justify-center text-center px-6 py-32">

        <div className="mb-6">
          <span className="px-4 py-2 rounded-full border border-zinc-700 text-sm text-zinc-300">
            AI Spend Optimization Platform
          </span>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold max-w-5xl leading-tight">
          Stop Overpaying
          <span className="text-zinc-500"> for AI Tools</span>
        </h1>

        <p className="mt-8 text-zinc-400 text-xl max-w-2xl leading-relaxed">
          Analyze your AI stack, detect wasted spend,
          and discover cheaper alternatives instantly.
        </p>

        <div className="mt-10 flex items-center gap-5">

          <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:opacity-90 transition">
            Start Free Audit
          </button>

          <button className="border border-zinc-700 px-8 py-4 rounded-2xl hover:bg-zinc-900 transition">
            View Demo
          </button>

        </div>

      </section>

      <AuditForm />

    </main>
  );
}