
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800 p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">🏏 Friendly Cricket Match</h1>
        <p className="text-lg font-medium">📅 7 July 2025 &nbsp; | &nbsp; 📍 Sports Turf, Behind Yummy Momos</p>
      </header>

      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white shadow-md rounded-2xl p-6 border border-blue-100">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Team A – Muzammil (C)</h2>
          <ul className="list-disc list-inside text-lg space-y-1">
            <li>Wakar</li>
            <li>Faizan</li>
            <li>Farhan Lala</li>
            <li>Abdul Shahid</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 border border-blue-100">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Team B – Sohail (C)</h2>
          <ul className="list-disc list-inside text-lg space-y-1">
            <li>Shahid</li>
            <li>Zubair</li>
            <li>Tehseen</li>
            <li>Sohaib</li>
          </ul>
        </div>
      </section>

      <section className="bg-white shadow-md rounded-2xl p-6 max-w-3xl mx-auto border border-gray-100 mb-12">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">📋 Match Rules</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li><strong>Net Catches:</strong> Catches taken off the nets will be considered valid.</li>
          <li><strong>Bowling Restrictions:</strong> Each team will have 3 bowlers. A maximum of 2 overs can be bowled by any 3 bowlers.</li>
        </ul>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-10">
        Made with ❤️ for the Match • Hosted on Vercel
      </footer>
    </main>
  );
}
