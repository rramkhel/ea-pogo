import BackButton from '../components/BackButton';

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <BackButton />

      <div className="text-center mb-16">
        <h1 className="text-5xl font-black mb-6">
          <span className="bg-gradient-to-r from-pogo-orange to-pogo-yellow bg-clip-text text-transparent">
            Live Service Dashboard
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Real-time analytics, competitive benchmarks, and strategic recommendations for Pogo's live service optimization.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <div className="text-sm text-gray-400 mb-2">Daily Active Users</div>
          <div className="text-4xl font-bold text-pogo-orange mb-1">2.5M</div>
          <div className="text-sm text-green-400">+12% vs last month</div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <div className="text-sm text-gray-400 mb-2">DAU/MAU Ratio</div>
          <div className="text-4xl font-bold text-pogo-yellow mb-1">42%</div>
          <div className="text-sm text-gray-400">Industry avg: 25%</div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <div className="text-sm text-gray-400 mb-2">D7 Retention</div>
          <div className="text-4xl font-bold text-pogo-teal mb-1">35%</div>
          <div className="text-sm text-yellow-400">Target: 40%</div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <div className="text-sm text-gray-400 mb-2">ARPU</div>
          <div className="text-4xl font-bold text-green-400 mb-1">$2.75</div>
          <div className="text-sm text-gray-400">Per month</div>
        </div>
      </div>

      {/* Competitive Benchmarks */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-pogo-yellow mb-6">Competitive Benchmarks</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
            <div>
              <div className="font-semibold text-white">Candy Crush</div>
              <div className="text-sm text-gray-400">4.2 sessions/day • 61% WAU/MAU</div>
            </div>
            <div className="text-green-400 font-bold">Industry Leader</div>
          </div>
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
            <div>
              <div className="font-semibold text-white">MONOPOLY GO!</div>
              <div className="text-sm text-gray-400">5.3 sessions/day • 52% WAU/MAU</div>
            </div>
            <div className="text-green-400 font-bold">High Performer</div>
          </div>
          <div className="flex items-center justify-between p-4 bg-pogo-orange/10 border border-pogo-orange/30 rounded-lg">
            <div>
              <div className="font-semibold text-white">Pogo</div>
              <div className="text-sm text-gray-400">2.8 sessions/day • 42% WAU/MAU</div>
            </div>
            <div className="text-yellow-400 font-bold">Opportunity for Growth</div>
          </div>
        </div>
      </div>

      {/* Strategic Recommendations */}
      <div className="bg-gradient-to-r from-pogo-orange/10 to-pogo-yellow/10 border border-pogo-orange/30 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-pogo-yellow mb-6">Strategic Recommendations</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-lg p-6">
            <div className="text-lg font-bold text-white mb-3">1. AI Recommendation Engine</div>
            <p className="text-gray-300 mb-4">
              Implement personalized game recommendations to increase portfolio engagement by 45%
              and reduce churn by 32%.
            </p>
            <div className="text-sm text-pogo-orange font-semibold">Projected Impact: $18M ARR</div>
          </div>
          <div className="bg-white/5 rounded-lg p-6">
            <div className="text-lg font-bold text-white mb-3">2. Cross-Game Progression</div>
            <p className="text-gray-300 mb-4">
              Create unified progression system across games to increase daily sessions from 2.8
              to 4.0+.
            </p>
            <div className="text-sm text-pogo-orange font-semibold">Projected Impact: +43% engagement</div>
          </div>
          <div className="bg-white/5 rounded-lg p-6">
            <div className="text-lg font-bold text-white mb-3">3. Daily Challenge System</div>
            <p className="text-gray-300 mb-4">
              Launch personalized daily challenges to improve D7 retention from 35% to 45%.
            </p>
            <div className="text-sm text-pogo-orange font-semibold">Projected Impact: +10pp retention</div>
          </div>
          <div className="bg-white/5 rounded-lg p-6">
            <div className="text-lg font-bold text-white mb-3">4. Social Features Enhancement</div>
            <p className="text-gray-300 mb-4">
              Add friend recommendations and leaderboards to increase viral coefficient and
              organic growth.
            </p>
            <div className="text-sm text-pogo-orange font-semibold">Projected Impact: +25% K-factor</div>
          </div>
        </div>
      </div>
    </div>
  );
}
