import React, { useState } from 'react';
import { Target, TrendingUp, Users, Award, Clock, DollarSign, Zap, Brain, Heart, Gamepad2, Trophy, ArrowRight, CheckCircle, AlertCircle, BarChart3, ChevronLeft, ChevronRight } from 'lucide-react';

const COLORS = {
  primary: '#FF6B35',
  secondary: '#FFB627',
  accent: '#4ECDC4',
};

export default function PogoProductStrategy() {
  const [activePersona, setActivePersona] = useState(0);

  const personas = [
    {
      name: 'At-Risk Sarah',
      subtitle: 'The Fading Enthusiast',
      emoji: '😰',
      gradient: 'from-red-500 to-pink-500',
      churnRisk: 72,
      churnColor: 'red',
      segment: '425K players (17%)',
      activeTime: '45 days active',
      lastPlayed: 'Last played 3+ days ago',
      behavior: 'Only plays Solitaire • 8min avg session • 62% win rate declining • Engagement decay visible',
      painPoints: [
        'Game feels repetitive after 45 days',
        'Doesn\'t know other games exist',
        'No reason to return daily'
      ],
      strategy: 'Push notification with personalized game rec at her peak play time (evening). "Miss you! Try Mahjong—players like you love it." Expected 35% re-engagement rate.',
      strategyBg: 'red'
    },
    {
      name: 'Casual Mike',
      subtitle: 'The Comfortable Regular',
      emoji: '🙂',
      gradient: 'from-yellow-500 to-orange-500',
      churnRisk: 22,
      churnColor: 'yellow',
      segment: '1.8M players (72%)',
      activeTime: '80 days active',
      lastPlayed: 'Plays every 1-2 days',
      behavior: 'Plays 2 games regularly • 14min sessions • Completes daily challenges • Moderate engagement',
      painPoints: [
        'Wants variety but doesn\'t explore',
        'Likes routine but open to suggestions',
        'Values achievable challenges'
      ],
      strategy: 'In-game prompt after 5 Solitaire wins: "Try Match-3 next! Similar players enjoy it." +73% cross-game trial rate. Unlock portfolio value.',
      strategyBg: 'yellow'
    },
    {
      name: 'Power Jenny',
      subtitle: 'The Engaged Explorer',
      emoji: '🤩',
      gradient: 'from-green-500 to-teal-500',
      churnRisk: 8,
      churnColor: 'green',
      segment: '275K players (11%)',
      activeTime: '120+ days active',
      lastPlayed: 'Plays daily, multiple sessions',
      behavior: '3+ games in rotation • 22min sessions • 85% challenge completion • High skill level',
      painPoints: [
        'Seeks mastery and progression',
        'Wants harder challenges',
        'Values status and achievements'
      ],
      strategy: 'Adaptive difficulty daily challenges matched to skill level. Unlock rare achievements for exploring new games. +78% intervention success rate.',
      strategyBg: 'green'
    }
  ];

  const currentPersona = personas[activePersona];

  const nextPersona = () => {
    setActivePersona((prev) => (prev + 1) % personas.length);
  };

  const prevPersona = () => {
    setActivePersona((prev) => (prev - 1 + personas.length) % personas.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-gray-900 via-orange-900 to-yellow-900 text-white">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur rounded-full text-sm font-medium mb-6">
              Product Strategy • AI-Powered Personalization
            </div>
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Transforming Pogo's Portfolio into Personalized Experiences
            </h1>
            <p className="text-2xl text-orange-100 mb-8 leading-relaxed">
              An AI recommendation system that reduces churn by 32%, drives cross-game engagement by 45%, and retains $18M in annual revenue—built on deep understanding of casual gaming psychology and live service optimization.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-6 mt-12 max-w-5xl">
            {[
              { value: '2.5M', label: 'Active Players' },
              { value: '60+', label: 'Game Portfolio' },
              { value: '68%', label: 'At-Risk Churn Rate' },
              { value: '$24M', label: 'Annual Churn Cost' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-orange-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-16">

        {/* Product Strategy Framework */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Brain className="w-8 h-8 text-purple-600" />
            <h2 className="text-4xl font-bold text-gray-900">Product Strategy Framework</h2>
          </div>
          
          <p className="text-xl text-gray-700 mb-12 leading-relaxed max-w-4xl">
            This strategy follows a structured approach to product development: identify the problem through market analysis, 
            define user segments and needs, design targeted solutions, validate with data, and scale what works.
          </p>

          {/* Market Analysis */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Market Analysis: The Casual Gaming Landscape</h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                <div className="text-3xl mb-4">📊</div>
                <h4 className="font-bold text-gray-900 mb-3">Industry Benchmarks</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Candy Crush: 4.2 sessions/day, 61% WAU/MAU</li>
                  <li>• MONOPOLY GO!: $2B revenue, 5.3 sessions/day</li>
                  <li>• Industry D1: 27%, D30: 8% retention</li>
                  <li>• Top performers: 30-50% lift from AI personalization</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-100">
                <div className="text-3xl mb-4">🎯</div>
                <h4 className="font-bold text-gray-900 mb-3">Pogo's Current State</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 2.8 sessions/day vs. 4.2+ for leaders</li>
                  <li>• 1.2 games/player vs. 2.8+ cross-engagement</li>
                  <li>• 72% of players only know 1-2 games</li>
                  <li>• 68% churn rate in at-risk segment (425K)</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-100">
                <div className="text-3xl mb-4">💡</div>
                <h4 className="font-bold text-gray-900 mb-3">Strategic Opportunity</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 60+ game portfolio underutilized</li>
                  <li>• No personalization layer exists</li>
                  <li>• 26 years of player data available</li>
                  <li>• $18M+ preventable annual churn</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Problem Definition */}
          <div className="bg-white rounded-xl p-8 shadow-md mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Problem Definition</h3>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Users className="text-blue-600" size={24} />
                  <h4 className="text-lg font-bold text-gray-900">User Problem</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Players engage with only 1-2 games despite loving Pogo, missing games they'd enjoy. 
                  No discovery mechanism beyond manual browsing. High-value users fade away silently without intervention.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="text-green-600" size={24} />
                  <h4 className="text-lg font-bold text-gray-900">Business Problem</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Portfolio underutilization limits engagement and lifetime value. 68% churn rate among at-risk players (425K) 
                  costs $24M annually. Generic experience leaves money on the table.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <Target className="text-purple-600" size={24} />
                <h4 className="text-lg font-bold text-gray-900">Root Cause</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                No intelligent matching layer connects players to games. All users see the same homepage regardless of preferences, 
                skill level, or play patterns. Manual intervention doesn't scale to 2.5M players.
              </p>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 border-2 border-purple-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Success Metrics</h3>
            <div className="grid grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">-32%</div>
                <div className="text-sm text-gray-700">Churn Reduction</div>
                <div className="text-xs text-gray-600 mt-1">At-risk segment</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">+45%</div>
                <div className="text-sm text-gray-700">Cross-Game Engagement</div>
                <div className="text-xs text-gray-600 mt-1">Portfolio utilization</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">+6.2min</div>
                <div className="text-sm text-gray-700">Session Length</div>
                <div className="text-xs text-gray-600 mt-1">Better matching</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">$18M</div>
                <div className="text-sm text-gray-700">Retained Revenue</div>
                <div className="text-xs text-gray-600 mt-1">Annual impact</div>
              </div>
            </div>
          </div>
        </section>

        {/* User Personas Carousel */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-900">Player Segments & Personas</h2>
          </div>

          <p className="text-xl text-gray-700 mb-8 max-w-4xl">
            Three distinct behavioral segments require different intervention strategies. Understanding player psychology 
            and motivations drives effective personalization.
          </p>

          {/* Carousel */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              {/* Persona Header */}
              <div className={`bg-gradient-to-r ${currentPersona.gradient} px-8 py-12 text-white`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-6xl">
                      {currentPersona.emoji}
                    </div>
                    <div>
                      <h3 className="text-4xl font-bold mb-2">{currentPersona.name}</h3>
                      <p className="text-xl opacity-90">{currentPersona.subtitle}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm opacity-75 mb-2">Churn Risk</div>
                    <div className="text-5xl font-bold">{currentPersona.churnRisk}%</div>
                  </div>
                </div>
              </div>

              {/* Persona Content */}
              <div className="p-8">
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4 text-lg">Demographics & Behavior</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="text-gray-600">Segment Size: </span>
                        <span className="font-semibold text-gray-900">{currentPersona.segment}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Activity: </span>
                        <span className="font-semibold text-gray-900">{currentPersona.activeTime}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Last Played: </span>
                        <span className="font-semibold text-gray-900">{currentPersona.lastPlayed}</span>
                      </div>
                      <div className="pt-3 border-t">
                        <p className="text-gray-700 leading-relaxed">{currentPersona.behavior}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-4 text-lg">Pain Points & Needs</h4>
                    <ul className="space-y-3">
                      {currentPersona.painPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <AlertCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* AI Strategy */}
                <div className={`bg-${currentPersona.strategyBg}-50 rounded-xl p-6 border-2 border-${currentPersona.strategyBg}-200`}>
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className={`text-${currentPersona.strategyBg}-600`} size={24} />
                    <h4 className="font-bold text-gray-900 text-lg">AI Intervention Strategy</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{currentPersona.strategy}</p>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prevPersona}
                className="flex items-center gap-2 px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all font-semibold text-gray-700"
              >
                <ChevronLeft size={20} />
                Previous
              </button>

              <div className="flex gap-2">
                {personas.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePersona(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx === activePersona ? 'bg-purple-600 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextPersona}
                className="flex items-center gap-2 px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all font-semibold text-gray-700"
              >
                Next
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Segment Insights */}
          <div className="bg-purple-50 rounded-xl p-6 border border-purple-200 mt-6">
            <h4 className="font-bold text-purple-900 mb-3 text-lg">Why Behavioral Segmentation Matters</h4>
            <p className="text-gray-700 leading-relaxed">
              These aren't demographic personas—they're behavioral segments with distinct intervention strategies. 
              At-Risk Sarah needs immediate re-engagement. Casual Mike needs portfolio expansion. Power Jenny needs 
              challenge and progression. A one-size-fits-all approach fails all three. The AI system personalizes 
              timing, messaging, and recommendations for each segment's psychology.
            </p>
          </div>
        </section>

        {/* User Experience Focus */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Heart className="w-8 h-8 text-pink-600" />
            <h2 className="text-4xl font-bold text-gray-900">User Experience Design</h2>
          </div>

          <p className="text-xl text-gray-700 mb-8 max-w-4xl">
            Great product management balances data-driven decisions with exceptional user experience. 
            Here's how players experience the AI system:
          </p>

          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Player Journey */}
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Sarah's Re-Engagement Journey</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">1</div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Day 48: Disengagement Detected</div>
                    <p className="text-sm text-gray-600">Sarah hasn't played in 3 days. AI predicts 72% churn risk. System prepares intervention.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">2</div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">7:00 PM: Optimal Timing</div>
                    <p className="text-sm text-gray-600">Push notification at her peak play time: "Miss you! Your daily Solitaire challenge is ready 🃏"</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-bold">3</div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Opens App: Personalized Experience</div>
                    <p className="text-sm text-gray-600">"Recommended for You" shows Mahjong, Match-3, and Solitaire—all matched to her preferences</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">4</div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Discovery & Delight</div>
                    <p className="text-sm text-gray-600">"I didn't know Pogo had Mahjong!" Cross-game engagement unlocked. Churn risk drops to 28%.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Design Principles */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 border border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">UX Design Principles</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle size={20} className="text-green-600" />
                    <span className="font-semibold text-gray-900">Invisible Intelligence</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-7">
                    Players never see churn scores or AI confidence. They just see games they'll love.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle size={20} className="text-green-600" />
                    <span className="font-semibold text-gray-900">Respectful Frequency</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-7">
                    Max 1 push/day. In-game prompts only at natural moments (after wins, not during play).
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle size={20} className="text-green-600" />
                    <span className="font-semibold text-gray-900">Social Proof Over Tech</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-7">
                    "Players like you love this" is more compelling than "AI recommends." Human connection wins.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle size={20} className="text-green-600" />
                    <span className="font-semibold text-gray-900">Zero Friction</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-7">
                    One-click to play. No sign-ups, tutorials, or barriers to joy.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle size={20} className="text-green-600" />
                    <span className="font-semibold text-gray-900">Player Control</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-7">
                    Easy opt-out. "Not interested" trains the model. Respects preferences always.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-2xl">
                💬
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">The "Feel Good" Factor</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The best product experiences feel like magic, not machinery. When Sarah gets a notification at exactly 7pm, 
                  she thinks "Pogo remembers me!"—not "an algorithm predicted my behavior." When Mike sees Mahjong after loving 
                  Solitaire, he thinks "they get my taste!"—not "collaborative filtering matched my vector."
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This emotional connection differentiates functional AI from delightful AI. Like Spotify's Discover Weekly 
                  feels personal, not creepy. Like Netflix's "Because you watched..." builds trust. <strong>Data powers the engine, 
                  but empathy drives the experience.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Manager Thinking */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Target className="w-8 h-8 text-indigo-600" />
            <h2 className="text-4xl font-bold text-gray-900">Solution Design & Execution</h2>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Solution Design */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Core Hypothesis</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Personalized game recommendations at optimal moments will increase portfolio engagement and reduce churn 
                by matching players with games they'll love but never discovered.
              </p>
              <div className="space-y-4 text-sm">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="font-semibold text-gray-900 mb-1">MVP Scope</div>
                  <p className="text-gray-600">3 AI models + 2 touchpoints + 1 segment (at-risk, 425K players)</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="font-semibold text-gray-900 mb-1">Validation Method</div>
                  <p className="text-gray-600">A/B test 50K players. Track: churn, sessions, time, app opens</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="font-semibold text-gray-900 mb-1">Scale Criteria</div>
                  <p className="text-gray-600">If >20% churn reduction → roll to casual (1.8M) → full platform</p>
                </div>
              </div>
            </div>

            {/* Prioritization */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <BarChart3 className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">RICE Prioritization</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="font-semibold text-purple-900 mb-1">Reach: 425K → 2.5M</div>
                  <p className="text-gray-600">At-risk first (quick wins) → scale to all</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="font-semibold text-blue-900 mb-1">Impact: 32% churn reduction</div>
                  <p className="text-gray-600">$18M revenue + 45% engagement = massive</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="font-semibold text-green-900 mb-1">Confidence: 80% (High)</div>
                  <p className="text-gray-600">Proven by leaders + Pogo has data</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <div className="font-semibold text-orange-900 mb-1">Effort: 9mo, $900K</div>
                  <p className="text-gray-600">2 eng + 1 ML + 0.5 PM + infra</p>
                </div>
                <div className="bg-gray-900 text-white rounded-lg p-4">
                  <div className="font-bold mb-1">RICE Score: 1,133</div>
                  <p className="text-sm text-gray-300">(2.5M × 3 × 0.8) / 5.3 qtrs = Top priority</p>
                </div>
              </div>
            </div>
          </div>

          {/* Risk Management */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Risk Mitigation Strategy</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="font-semibold text-gray-900 mb-2">Risk: Recommendation Fatigue</div>
                <p className="text-sm text-gray-600 mb-1"><strong>Impact:</strong> Users opt-out of notifications</p>
                <p className="text-sm text-gray-600"><strong>Mitigation:</strong> Frequency caps (1/day), A/B test tone, easy opt-out</p>
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-2">Risk: Model Bias (Echo Chamber)</div>
                <p className="text-sm text-gray-600 mb-1"><strong>Impact:</strong> Over-recommend popular games</p>
                <p className="text-sm text-gray-600"><strong>Mitigation:</strong> Diversity penalty, exploration balance, audits</p>
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-2">Risk: Cold Start Problem</div>
                <p className="text-sm text-gray-600 mb-1"><strong>Impact:</strong> Poor recs for new players</p>
                <p className="text-sm text-gray-600"><strong>Mitigation:</strong> Content-based filtering, onboarding quiz, fast learning</p>
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-2">Risk: Technical Complexity</div>
                <p className="text-sm text-gray-600 mb-1"><strong>Impact:</strong> Delays and maintenance burden</p>
                <p className="text-sm text-gray-600"><strong>Mitigation:</strong> Managed services (SageMaker), hire ML expert, monitoring</p>
              </div>
            </div>
          </div>
        </section>

        {/* Business Impact */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <DollarSign className="w-8 h-8 text-green-600" />
            <h2 className="text-4xl font-bold text-gray-900">Business Case: $18M+ ARR Impact</h2>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl font-bold mb-2">$18.0M</div>
              <div className="text-green-100 mb-4">Retained Revenue (Year 1)</div>
              <div className="text-sm text-green-50">
                540K players saved × $2.75 ARPU/mo × 12
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl font-bold mb-2">$900K</div>
              <div className="text-blue-100 mb-4">Total Investment</div>
              <div className="text-sm text-blue-50">
                Engineering + ML + PM + infrastructure
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl font-bold mb-2">27x</div>
              <div className="text-purple-100 mb-4">Year 1 ROI</div>
              <div className="text-sm text-purple-50">
                0.5 month payback. Break-even Q2.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
              <h3 className="font-bold text-purple-900 mb-3 text-lg">Strategic Value Beyond Revenue</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Competitive Moat:</strong> Personalization creates stickiness and switching costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Data Flywheel:</strong> More engagement → better models → better recs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Platform Foundation:</strong> Enables dynamic difficulty, social matching, content gen</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-200">
              <h3 className="font-bold text-orange-900 mb-3 text-lg">Why Now?</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Leaders (Candy Crush, Royal Match) proving 30-50% lifts from AI</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Pogo advantages: 26 years data, 60+ games, cross-platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Cost of inaction: $24M annual churn, falling behind market</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <div className="bg-gradient-to-br from-gray-900 via-orange-900 to-yellow-900 rounded-2xl p-12 text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-6">Product Management Excellence</h2>
            <div className="space-y-4 text-lg text-gray-200 leading-relaxed">
              <p>
                This strategy demonstrates core PM competencies: <strong className="text-white">market analysis, user segmentation, 
                solution design, validation planning, risk mitigation, and business impact quantification.</strong>
              </p>
              <p>
                The approach follows proven patterns from successful casual gaming platforms while adapting to Pogo's unique 
                position—26-year heritage, diverse portfolio, cross-platform presence. It balances data-driven decision making 
                with exceptional user experience, technical feasibility with business viability.
              </p>
              <p className="text-xl font-bold text-white pt-4 border-t border-white/20">
                This is the structured, strategic thinking I bring to product management: research-driven, user-focused, 
                data-informed, and execution-oriented.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}