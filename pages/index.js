import { useState, useEffect } from "react";

const players = [
  { name: "Muzammil Ahmed (C)", role: "Batter", team: "A" },
  { name: "Wakar Ansari", role: "All Rounder", team: "TBD" },
  { name: "Faizan Akhtar", role: "All Rounder", team: "TBD" },
  { name: "Farhan Lala", role: "Bowler", team: "TBD" },
  { name: "Abdul Shahid", role: "All Rounder", team: "TBD" },
  { name: "Zubair Iqbal (C)", role: "Batter", team: "B" },
  { name: "Shahid Ahmed", role: "All Rounder", team: "TBD" },
  { name: "Tehseen Ansari", role: "Batter", team: "TBD" },
  { name: "Sohaib Ansari", role: "All Rounder", team: "TBD" },
  { name: "Anas Majnu", role: "All Rounder", team: "TBD" },
  { name: "Sufiyan Aao", role: "All Rounder", team: "TBD" },
  { name: "Sohail Ansari", role: "All Rounder", team: "TBD" },
];

export default function HomePage() {
  const [view, setView] = useState("home");
  const [filter, setFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [playerTeams, setPlayerTeams] = useState(players);
  const [timeLeft, setTimeLeft] = useState("");
  const [assigningPlayer, setAssigningPlayer] = useState(null);
  const [isShuffling, setIsShuffling] = useState(false);

  // Countdown Timer Logic
  useEffect(() => {
    const targetTime = new Date();
    targetTime.setHours(23, 0, 0, 0); // 11 PM today
    const updateTimer = () => {
      const now = new Date();
      const diff = targetTime - now;
      if (diff <= 0) {
        setTimeLeft("Match Started!");
        return;
      }
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    };
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleMenuClick = (target) => {
    console.log("Menu clicked, target:", target);
    if (target === "contact") {
      window.location.href = "mailto:sa6426533@gmail.com";
    } else {
      setView(target);
    }
    setMenuOpen(false);
  };

  const assignRandomPlayer = (team) => {
    const unassignedPlayers = playerTeams.filter(
      (player) => player.team === "TBD"
    );
    if (unassignedPlayers.length === 0) return;

    setIsShuffling(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * unassignedPlayers.length);
      const selectedPlayer = unassignedPlayers[randomIndex];
      setAssigningPlayer(selectedPlayer.name);
      setTimeout(() => {
        setPlayerTeams((prev) =>
          prev.map((player) =>
            player.name === selectedPlayer.name ? { ...player, team } : player
          )
        );
        setAssigningPlayer(null);
        setIsShuffling(false);
      }, 1000); // 1-second delay for assignment
    }, 1500); // 1.5-second shuffle animation
  };

  const resetPlayer = (playerName) => {
    setPlayerTeams((prev) =>
      prev.map((player) =>
        player.name === playerName && player.name !== "Muzammil Ahmed (C)" && player.name !== "Zubair Iqbal (C)"
          ? { ...player, team: "TBD" }
          : player
      )
    );
  };

  const filteredPlayers =
    filter === "All"
      ? playerTeams.filter((player) =>
          player.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : playerTeams.filter(
          (player) =>
            player.role === filter &&
            player.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800 p-6">
      <style jsx>{`
        @keyframes slideIn {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes shuffle {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
        .assigning {
          animation: slideIn 0.5s ease-in-out;
          background-color: #e0f7fa;
        }
        .shuffling {
          animation: shuffle 0.3s ease-in-out infinite;
        }
      `}</style>

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
            <p className="text-xl font-semibold text-red-500 mt-4">
              Countdown to Match: {timeLeft}
            </p>
          </header>

          <section className="flex justify-between items-start gap-8 mb-10 min-h-[50vh] max-w-5xl mx-auto">
            <div className="text-center p-6 rounded-xl bg-white border shadow w-96">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4 whitespace-nowrap">
                Team A – Muzammil Ahmed (C)
              </h3>
              <button
                onClick={() => assignRandomPlayer("A")}
                className="px-4 py-2 bg-green-600 text-white rounded-full text-sm font-medium hover:bg-green-700 transition-colors duration-200 mb-4"
                disabled={isShuffling || playerTeams.filter((p) => p.team === "TBD").length === 0}
              >
                {isShuffling ? "Shuffling..." : "Tap to Assign"}
              </button>
              <ul className="text-base space-y-2">
                {playerTeams
                  .filter(
                    (player) => player.team === "A" && player.name !== "Muzammil Ahmed (C)"
                  )
                  .map((player) => (
                    <li
                      key={player.name}
                      className={`flex justify-between items-center whitespace-nowrap ${
                        assigningPlayer === player.name ? "assigning" : ""
                      }`}
                    >
                      <span>{player.name} – {player.role}</span>
                      <button
                        onClick={() => resetPlayer(player.name)}
                        className="text-sm text-red-500 hover:text-red-700"
                      >
                        Reset
                      </button>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="text-4xl font-extrabold text-red-500 mt-10">⚡ VS ⚡</div>

            <div className="text-center p-6 rounded-xl bg-white border shadow w-96">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4 whitespace-nowrap">
                Team B – Zubair Iqbal (C)
              </h3>
              <button
                onClick={() => assignRandomPlayer("B")}
                className="px-4 py-2 bg-green-600 text-white rounded-full text-sm font-medium hover:bg-green-700 transition-colors duration-200 mb-4"
                disabled={isShuffling || playerTeams.filter((p) => p.team === "TBD").length === 0}
              >
                {isShuffling ? "Shuffling..." : "Tap to Assign"}
              </button>
              <ul className="text-base space-y-2">
                {playerTeams
                  .filter(
                    (player) => player.team === "B" && player.name !== "Zubair Iqbal (C)"
                  )
                  .map((player) => (
                    <li
                      key={player.name}
                      className={`flex justify-between items-center whitespace-nowrap ${
                        assigningPlayer === player.name ? "assigning" : ""
                      }`}
                    >
                      <span>{player.name} – {player.role}</span>
                      <button
                        onClick={() => resetPlayer(player.name)}
                        className="text-sm text-red-500 hover:text-red-700"
                      >
                        Reset
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          </section>

          <section className="bg-white shadow-md rounded-2xl p-6 max-w-3xl mx-auto border border-gray-100 mb-10">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              📋 Unassigned Players
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {playerTeams
                .filter((player) => player.team === "TBD")
                .map((player) => (
                  <li
                    key={player.name}
                    className={`p-4 bg-gray-50 border rounded-xl ${
                      isShuffling ? "shuffling" : ""
                    }`}
                  >
                    {player.name} – {player.role}
                  </li>
                ))}
            </ul>
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
          <div className="flex justify-center mb-4">
            <input
              type="text"
              placeholder="Search players..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 border rounded-full text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
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
                <p className="text-sm text-gray-600">Team: {player.team}</p>
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