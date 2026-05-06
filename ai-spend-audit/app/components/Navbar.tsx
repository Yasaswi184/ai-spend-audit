export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-6 border-b border-zinc-800">

      <h1 className="text-2xl font-bold tracking-tight">
        AuditAI
      </h1>

      <button className="bg-white text-black px-5 py-2 rounded-xl font-medium hover:opacity-90 transition">
        Start Audit
      </button>

    </nav>
  );
}