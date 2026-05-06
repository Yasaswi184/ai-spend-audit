"use client";

import { useState } from "react";

export default function AuditForm() {

  const [tool, setTool] = useState("");
  const [spend, setSpend] = useState("");
  const [team, setTeam] = useState("");
  const [result, setResult] = useState("");

  const generateAudit = () => {

    const monthlySpend = Number(spend);
    const teamSize = Number(team);

    let recommendation = "";

    if (monthlySpend > 500) {
      recommendation =
        "You are likely overspending. Consider switching to annual pricing or reducing unused seats.";
    } else if (teamSize <= 3 && monthlySpend > 100) {
      recommendation =
        "Your team size is small for the current spend. Cheaper plans may fit your usage.";
    } else {
      recommendation =
        "Your current AI spending looks relatively optimized.";
    }

    setResult(recommendation);
  };

  return (
    <div className="max-w-3xl mx-auto mt-20 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-20">

      <h2 className="text-3xl font-bold mb-6">
        Start Your AI Spend Audit
      </h2>

      <div className="grid gap-6">

        <input
          type="text"
          placeholder="Company Name"
          className="bg-black border border-zinc-700 rounded-xl px-4 py-4 outline-none"
        />

        <select
          value={tool}
          onChange={(e) => setTool(e.target.value)}
          className="bg-black border border-zinc-700 rounded-xl px-4 py-4 outline-none"
        >
          <option value="">Select AI Tool</option>
          <option>ChatGPT</option>
          <option>Claude</option>
          <option>Cursor</option>
          <option>GitHub Copilot</option>
        </select>

        <input
          type="number"
          placeholder="Monthly Spend ($)"
          value={spend}
          onChange={(e) => setSpend(e.target.value)}
          className="bg-black border border-zinc-700 rounded-xl px-4 py-4 outline-none"
        />

        <input
          type="number"
          placeholder="Team Size"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
          className="bg-black border border-zinc-700 rounded-xl px-4 py-4 outline-none"
        />

        <button
          onClick={generateAudit}
          className="bg-white text-black py-4 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Generate Audit
        </button>

        {result && (
          <div className="bg-black border border-zinc-700 rounded-2xl p-6 mt-4">
            <h3 className="text-2xl font-bold mb-3">
              Audit Result
            </h3>

            <p className="text-zinc-300">
              {result}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}