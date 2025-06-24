import { useState } from "react";
import Image from "next/image";

const players = [
  { name: "Muzammil (C)", role: "Batter", team: "A" },
  { name: "Wakar", role: "All Rounder", team: "A" },
  { name: "Faizan", role: "All Rounder", team: "A" },
  { name: "Farhan Lala", role: "Bowler", team: "A" },
  { name: "Abdul Shahid", role: "All Rounder", team: "A" },
  { name: "Sohail (C)", role: "All Rounder", team: "B" },
  { name: "Shahid", role: "All Rounder", team: "B" },
  { name: "Zubair", role: "Batter", team: "B" },
  { name: "Tehseen", role: "Batter", team: "B" },
  { name: "Sohaib", role: "All Rounder", team: "B" },
];

export default function Home() {
  const [view, setView] = useState("home");
  const [filter, setFilter] = useState("All");

  const filteredPlayers =
    filter === "All"
      ? players
      : players.filter((player) => player.role === filter);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800 p-6">
      {/* Navigation */}
      <nav className="flex justify-between items-center mb-6 relative">
        <h1 className="text-xl font-bold text-blue-700">🏏 DSG Match</h1>
        <div className="relative group">
          <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            ☰ Menu
          </button>
          <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow text-sm hidden group-hover:block">
            <button
              onClick={() => setView("home")}
              className="block w-full px-4 py-2 hover:bg-blue-50 text-left"
            >
              Home
            </button>
            <button
              onClick={() => setView("players")}
              className="block w-full px-4 py-2 hover:bg-blue-50 text-left"
            >
              Players
            </button>
          </div>
        </div>
      </nav>

      {view === "home" ? (
        <>
          <header className="text-center mb-10">
            <h2 className="text-4xl font-bold text-blue-700 mb-2">
              Danish School Group Cricket Match
            </h2>
            <p className="text-lg font-medium">
              📅 7 July 2025 &nbsp; | &nbsp; 🕒 10:00 AM – 12:00 PM
            </p>
            <p className="text-sm text-gray-600">
              📍 Lalbagh Rd, in front of MPEB Office, near Keer Banglow,
              Mohammadpura, Burhanpur
            </p>
          </header>

          <section className="flex justify-center items-center gap-4 mb-10">
            <div className="text-center p-4 rounded-xl bg-white border shadow w-64">
              <Image
                src="/team-a-logo.png"
                alt="Team A Logo"
                width={64}
                height={64}
                className="mx-auto mb-2"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Team A – Muzammil (C)
              </h3>
              <ul className="text-sm space-y-1">
                <li>Wakar – All Rounder</li>
                <li>Faizan – All Rounder</li>
                <li>Farhan Lala – Bowler</li>
                <li>Abdul Shahid – All Rounder</li>
              </ul>
            </div>

            <div className="text-3xl font-extrabold text-red-500">⚡ VS ⚡</div>

            <div className="text-center p-4 rounded-xl bg-white border shadow w-64">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Team B – Sohail (C)
              </h3>
              <ul className="text-sm space-y-1">
                <li>Shahid – All Rounder</li>
                <li>Zubair – Batter</li>
                <li>Tehseen – Batter</li>
                <li>Sohaib – All Rounder</li>
              </ul>
            </div>
          </section>

          <section className="bg-white shadow-md rounded-2xl p-6 max-w-3xl mx-auto border border-gray-100">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">📋 Match Rules</h2>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>
                <strong>Net Catches:</strong> Catches taken off the nets will be considered valid.
              </li>
              <li>
                <strong>Bowling Restrictions:</strong> Each team will have 3 bowlers. A maximum of 2 overs can be bowled by any 3 bowlers.
              </li>
            </ul>
          </section>
        </>
      ) : (
        <section>
          <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">
            🧢 Player List
          </h2>
          <div className="flex justify-center gap-4 mb-4">
            {["All", "Batter", "Bowler", "All Rounder"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-3 py-1 rounded-full border text-sm font-medium ${
                  filter === type
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {filteredPlayers.map((player, index) => (
              <li
                key={index}
                className="p-4 bg-white border rounded-xl shadow-sm text-center"
              >
                <p className="text-lg font-semibold">{player.name}</p>
                <p className="text-sm text-gray-600">{player.role}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <footer className="text-center text-sm text-gray-500 mt-12">
        Created By Shahid Ahmed Ansari
      </footer>
    </main>
  );
}
