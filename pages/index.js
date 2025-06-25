import { useState } from "react";
import Image from "next/image";

const players = [
  { name: "Muzammil Ahmed (C)", role: "Batter", team: "A" },
  { name: "Wakar Ansari", role: "All Rounder", team: "A" },
  { name: "Faizan Akhtar", role: "All Rounder", team: "A" },
  { name: "Farhan Lala", role: "Bowler", team: "A" },
  { name: "Abdul Shahid", role: "All Rounder", team: "A" },
  { name: "Sohail Ansari (C)", role: "All Rounder", team: "B" },
  { name: "Shahid Ahmed", role: "All Rounder", team: "B" },
  { name: "Zubair Iqbal", role: "Batter", team: "B" },
  { name: "Tehseen Ansari", role: "Batter", team: "B" },
  { name: "Sohaib Ansari", role: "All Rounder", team: "B" },
];

export default function HomePage() {
  const [view, setView] = useState("home");
  const [filter, setFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = (target) => {
    console.log("Menu clicked, target:", target); // Debugging
    if (target === "contact") {
      window.location.href = "mailto:sa6426533@gmail.com";
    } else {
      setView(target);
    }
    setMenuOpen(false);
  };

  const filteredPlayers =
    filter === "All"
      ? players
      : players.filter((player) => player.role === filter);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800 p-6">
      {/* Navbar */}
      <nav className="flex justify-between items-center mb-6 relative">
        <h1 className="text-xl font-bold text-blue-700">🏏 DSG Match</h1>
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            ☰ Menu
          </button>
          <div
            className={`absolute right-0 mt-2 w-32 bg-white border rounded shadow text-sm transform transition-all duration-300 ease-in-out origin-top-right ${
              menuOpen
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-[-10px] pointer-events-none"
            }`}
          >
            <button
              onClick={() => handleMenuClick("home")}
              className="block w-full px-4 py-2 hover:bg-blue-50 text-left transition-colors duration-150"
            >
              Home
            </button>
            <button
              onClick={() => handleMenuClick("players")}
              className="block w-full px-4 py-2 hover:bg-blue-50 text-left transition-colors duration-150"
            >
              Players
            </button>
            <button
              onClick={() => handleMenuClick("contact")}
              className="block w-full px-4 py-2 hover:bg-blue-50 text-left transition-colors duration-150"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Page Views */}
      {view === "home" && (
        <>
          <header className="text-center mb-10">
            <h2 className="text-4xl font-bold text-blue-700 mb-2">
              Danish School Group Cricket Match
            </h2>
            <p className="text-lg font-medium">
              📅 7 July 2025 | 🕒 10:00 AM – 12:00 PM
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
                className="mx-auto mb-2 object-contain"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Team A – Muzammil Ahmed (C)
              </h3>
              <ul className="text-sm space-y-1">
                <li>Wakar Ansari – All Rounder</li>
                <li>Faizan Akhtar – All Rounder</li>
                <li>Farhan Lala – Bowler</li>
                <li>Abdul Shahid – All Rounder</li>
              </ul>
            </div>

            <div className="text-3xl font-extrabold text-red-500">⚡ VS ⚡</div>

            <div className="text-center p-4 rounded-xl bg-white border shadow w-64">
              <Image
                src="/team-b-logo.png"
                alt="Team B Logo"
                width={64}
                height={64}
                className="mx-auto mb-2 object-contain"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Team B – Sohail Ansari (C)
              </h3>
              <ul className="text-sm space-y-1">
                <li>Shahid Ahmed – All Rounder</li>
                <li>Zubair Iqbal – Batter</li>
                <li>Tehseen Ansari – Batter</li>
                <li>Sohaib Ansari – All Rounder</li>
              </ul>
            </div>
          </section>

          <section className="bg-white shadow-md rounded-2xl p-6 max-w-3xl mx-auto border border-gray-100">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              📋 Match Rules
            </h2>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>
                <strong>Net Catches:</strong> Catches taken off the nets will be
                considered valid.
              </li>
              <li>
                <strong>Bowling Restrictions:</strong> Each team will have 3
                bowlers. A maximum of 2 overs can be bowled by any 3 bowlers.
              </li>
            </ul>
          </section>
        </>
      )}

      {view === "players" && (
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