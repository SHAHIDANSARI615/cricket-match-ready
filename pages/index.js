export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800 p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">🏏 Danish School Group Cricket Match</h1>
        <p className="text-lg font-medium">📅 7 July 2025 &nbsp; | 🕙 10–12 PM &nbsp; | &nbsp; 📍 Lalbagh Rd, in front of MPEB Office, near keer banglow, Monin Pura, Burhanpur, Mohammadpura, Madhya Pradesh 450331</p>
      </header>

      <section className="grid md:grid-cols-2 gap-8 mb-6 items-center">
        <div className="bg-white shadow-md rounded-2xl p-6 border border-blue-100">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Team A – Muzammil (Captain, Batter)</h2>
          <ul className="list-disc list-inside text-lg space-y-1">
            <li>Wakar (All Rounder)</li>
            <li>Faizan (All Rounder)</li>
            <li>Farhan Lala (Bowler)</li>
            <li>Abdul Shahid (All Rounder)</li>
          </ul>
        </div>

        <div className="text-center text-2xl font-bold text-red-600">VS 🏆</div>

        <div className="bg-white shadow-md rounded-2xl p-6 border border-blue-100">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Team B – Sohail (Captain, All Rounder)</h2>
          <ul className="list-disc list-inside text-lg space-y-1">
            <li>Shahid (All Rounder)</li>
            <li>Zubair (Batter)</li>
            <li>Tehseen (Batter)</li>
            <li>Sohaib (All Rounder)</li>
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
        Created by <strong>Shahid Ahmed Ansari</strong> • Hosted on Vercel
      </footer>
    </main>
  );
}
