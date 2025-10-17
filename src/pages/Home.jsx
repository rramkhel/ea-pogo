import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-8">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="inline-block bg-pogo-orange/15 border border-pogo-orange/40 px-5 py-2 rounded-full text-sm font-semibold text-pogo-orange mb-6 tracking-wide">
          LEAD PRODUCT MANAGER • LIVE SERVICE
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-5 leading-tight">
          Optimizing Pogo's<br />
          <span className="bg-gradient-to-r from-pogo-orange to-pogo-yellow bg-clip-text text-transparent">
            Live Service Performance
          </span>
        </h1>
        <p className="text-xl text-pogo-teal font-medium">Rachel Ramkhelawan</p>
      </section>

      {/* Challenge Section */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-10 mb-16">
        <h2 className="text-2xl text-pogo-yellow mb-4">The Challenge</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Pogo has 60+ games and a 26-year heritage, but most players only engage with 1-2 games.
          This limits portfolio value and increases churn risk in a competitive casual gaming market.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Project 1 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-10 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-pogo-orange/40 hover:shadow-2xl hover:shadow-pogo-orange/30 group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pogo-orange to-pogo-yellow scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          <div className="text-6xl font-black text-pogo-orange/30 mb-3">01</div>
          <h3 className="text-2xl text-pogo-yellow font-bold mb-4">AI Recommendation Engine</h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            A 3-layer AI system that predicts churn risk, matches players to games they'll love,
            and optimizes when to deliver recommendations.
          </p>
          <Link
            to="/ai-recommendations"
            className="inline-flex items-center gap-2 text-pogo-orange font-semibold text-lg hover:text-pogo-yellow transition-colors group/link"
          >
            Explore System
            <span className="group-hover/link:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Project 2 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-10 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-pogo-orange/40 hover:shadow-2xl hover:shadow-pogo-orange/30 group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pogo-orange to-pogo-yellow scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          <div className="text-6xl font-black text-pogo-orange/30 mb-3">02</div>
          <h3 className="text-2xl text-pogo-yellow font-bold mb-4">Live Service Dashboard</h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            Analytics showing key metrics (DAU/MAU, retention, monetization), competitive benchmarks,
            and strategic recommendations with projected impact.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 text-pogo-orange font-semibold text-lg hover:text-pogo-yellow transition-colors group/link"
          >
            View Dashboard
            <span className="group-hover/link:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>

      {/* Approach Section */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-10 mb-16">
        <h2 className="text-2xl text-pogo-yellow mb-6">The Approach</h2>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="flex items-start gap-3">
            <span className="text-pogo-teal text-xl flex-shrink-0">✓</span>
            <span className="text-gray-300">
              Researched 5 top competitors (Candy Crush, Royal Match, MONOPOLY GO!, Gardenscapes)
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-pogo-teal text-xl flex-shrink-0">✓</span>
            <span className="text-gray-300">
              Analyzed player feedback from Reddit, forums, and app reviews
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-pogo-teal text-xl flex-shrink-0">✓</span>
            <span className="text-gray-300">
              Applied IMRU framework to prioritize features by impact and feasibility
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-pogo-teal text-xl flex-shrink-0">✓</span>
            <span className="text-gray-300">
              Projected business impact using industry benchmarks and data
            </span>
          </div>
        </div>
      </div>

      {/* Demonstrates Section */}
      <div className="text-center mb-16 p-10 bg-gradient-to-r from-pogo-orange/10 to-pogo-yellow/10 border border-pogo-orange/30 rounded-xl">
        <h2 className="text-xl text-pogo-yellow mb-5">What This Demonstrates</h2>
        <p className="text-xl text-gray-300 leading-relaxed">
          Data competency • Strategic thinking • Casual gaming knowledge • Clear communication
        </p>
      </div>

      {/* CTA Section */}
      <div className="text-center mb-20">
        <Link
          to="/strategy"
          className="inline-block px-10 py-4 bg-gradient-to-r from-pogo-orange to-pogo-yellow text-white rounded-full text-lg font-bold transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-pogo-orange/50"
        >
          Let's Discuss Pogo's Roadmap
        </Link>
      </div>
    </div>
  );
}
