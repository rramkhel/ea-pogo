import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Brain, Users, Target, TrendingUp, DollarSign, Zap, Award, Clock, CheckCircle, ArrowRight, BarChart3 } from 'lucide-react';

export default function PogoPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title
    {
      title: "AI-Powered Game Recommendations for Pogo",
      content: (
        <div className="text-center py-16">
          <div className="mb-8">
            <div className="inline-block px-6 py-3 bg-orange-100 text-orange-700 rounded-full text-lg font-semibold mb-8">
              Product Strategy Presentation
            </div>
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Transforming Pogo's Portfolio</h1>
          <p className="text-3xl text-gray-600 mb-12">Into Personalized Player Experiences</p>
          
          <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl border-2 border-red-200">
              <div className="text-5xl mb-4">-32%</div>
              <p className="text-lg font-semibold text-gray-900">Churn Reduction</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border-2 border-blue-200">
              <div className="text-5xl mb-4">+45%</div>
              <p className="text-lg font-semibold text-gray-900">Cross-Game Engagement</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl border-2 border-green-200">
              <div className="text-5xl mb-4">$18M</div>
              <p className="text-lg font-semibold text-gray-900">Retained Revenue (ARR)</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 2: The Problem
    {
      title: "The Problem: Portfolio Blindness",
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Pogo has a discovery problem, not a content problem</h2>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-10 h-10 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">User Problem</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-1">!</div>
                  <p className="text-lg text-gray-700">72% of players engage with only 1-2 games despite 60+ available</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-1">!</div>
                  <p className="text-lg text-gray-700">"I only play Solitaire. Didn't know Pogo had Mahjong"</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-1">!</div>
                  <p className="text-lg text-gray-700">Players fade away silently—no intervention</p>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <DollarSign className="w-10 h-10 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">Business Problem</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-1">$</div>
                  <p className="text-lg text-gray-700">68% churn rate among at-risk segment (425K players)</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-1">$</div>
                  <p className="text-lg text-gray-700">$24M annual preventable churn</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-1">$</div>
                  <p className="text-lg text-gray-700">Portfolio underutilization limits LTV</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 rounded-xl p-8 border-2 border-purple-200">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">Root Cause</h3>
            <p className="text-xl text-gray-700">
              No intelligent matching layer connects players to games. All 2.5M users see the same homepage 
              regardless of preferences, skill level, or play patterns.
            </p>
          </div>
        </div>
      )
    },

    // Slide 3: Market Context
    {
      title: "Market Context: What Winners Are Doing",
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Top casual games win on AI personalization, not just gameplay</h2>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border-2 border-green-200">
              <div className="text-4xl mb-4">🍬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Candy Crush</h3>
              <div className="space-y-2 text-sm text-gray-700 mb-4">
                <p>• 4.2 sessions/day</p>
                <p>• 61% WAU/MAU ratio</p>
                <p>• $430M monthly revenue</p>
              </div>
              <div className="bg-green-50 rounded-lg p-3 text-xs text-gray-700">
                <strong>Strategy:</strong> ML-powered difficulty adjustment, personalized booster recommendations
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-purple-200">
              <div className="text-4xl mb-4">🎲</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">MONOPOLY GO!</h3>
              <div className="space-y-2 text-sm text-gray-700 mb-4">
                <p>• 5.3 sessions/day</p>
                <p>• 52% WAU/MAU ratio</p>
                <p>• $2B+ annual revenue</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 text-xs text-gray-700">
                <strong>Strategy:</strong> Hyper-personalized events, friend recommendations, time-limited challenges
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
              <div className="text-4xl mb-4">👑</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Royal Match</h3>
              <div className="space-y-2 text-sm text-gray-700 mb-4">
                <p>• 3.8 sessions/day</p>
                <p>• 55% WAU/MAU ratio</p>
                <p>• $340M monthly revenue</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-xs text-gray-700">
                <strong>Strategy:</strong> Personalized daily challenges, adaptive progression systems
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
              <h3 className="text-xl font-bold text-red-900 mb-4">Pogo's Current State</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 2.8 sessions/day (vs 4.2+ leaders)</li>
                <li>• 1.2 games/player (vs 2.8+ cross-engagement)</li>
                <li>• No personalization layer</li>
                <li>• Generic experience for all users</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <h3 className="text-xl font-bold text-green-900 mb-4">Pogo's Advantages</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 60+ game portfolio (variety)</li>
                <li>• 26 years of player data</li>
                <li>• Cross-platform presence</li>
                <li>• Heritage brand trust</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // Slide 4: Player Personas
    {
      title: "Three Player Segments, Three Strategies",
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white rounded-xl overflow-hidden border-2 border-red-200">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 px-6 py-8 text-white text-center">
                <div className="text-5xl mb-3">😰</div>
                <h3 className="text-2xl font-bold mb-2">At-Risk Sarah</h3>
                <p className="text-red-100">The Fading Enthusiast</p>
                <div className="text-4xl font-bold mt-4">72%</div>
                <div className="text-sm">Churn Risk</div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <div className="font-semibold text-gray-900 mb-2">425K players (17%)</div>
                  <p className="text-sm text-gray-600">Last played 3+ days ago • Only knows 1 game • Engagement declining</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <div className="font-semibold text-red-900 mb-2 text-sm">AI Strategy</div>
                  <p className="text-xs text-gray-700">
                    Push notification at peak play time: "Miss you! Try Mahjong—players like you love it."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border-2 border-yellow-200">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-8 text-white text-center">
                <div className="text-5xl mb-3">🙂</div>
                <h3 className="text-2xl font-bold mb-2">Casual Mike</h3>
                <p className="text-yellow-100">The Comfortable Regular</p>
                <div className="text-4xl font-bold mt-4">22%</div>
                <div className="text-sm">Churn Risk</div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <div className="font-semibold text-gray-900 mb-2">1.8M players (72%)</div>
                  <p className="text-sm text-gray-600">Plays every 1-2 days • 2 games regularly • Open to suggestions</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                  <div className="font-semibold text-yellow-900 mb-2 text-sm">AI Strategy</div>
                  <p className="text-xs text-gray-700">
                    In-game prompt after 5 wins: "Try Match-3 next! Similar players enjoy it." +73% trial rate.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border-2 border-green-200">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 px-6 py-8 text-white text-center">
                <div className="text-5xl mb-3">🤩</div>
                <h3 className="text-2xl font-bold mb-2">Power Jenny</h3>
                <p className="text-green-100">The Engaged Explorer</p>
                <div className="text-4xl font-bold mt-4">8%</div>
                <div className="text-sm">Churn Risk</div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <div className="font-semibold text-gray-900 mb-2">275K players (11%)</div>
                  <p className="text-sm text-gray-600">Plays daily • 3+ games • Seeks mastery & challenges</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <div className="font-semibold text-green-900 mb-2 text-sm">AI Strategy</div>
                  <p className="text-xs text-gray-700">
                    Adaptive difficulty challenges matched to skill. Rare achievements for exploration. +78% success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-xl p-8 border-2 border-purple-200">
            <h3 className="text-xl font-bold text-purple-900 mb-4">Why Behavioral Segmentation Matters</h3>
            <p className="text-lg text-gray-700">
              One-size-fits-all fails all three segments. Sarah needs immediate re-engagement. Mike needs gentle 
              portfolio expansion. Jenny needs challenge and progression. The AI system personalizes timing, messaging, 
              and recommendations for each segment's unique psychology and behavior patterns.
            </p>
          </div>
        </div>
      )
    },

    // Slide 5: The Solution
    {
      title: "The Solution: Three-Layer AI System",
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-500 to-blue-500 text-white rounded-2xl p-8">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">Churn Prevention</h3>
              <p className="text-purple-100 mb-6">
                ML model predicts 7-14 day churn risk. Triggers personalized interventions before disengagement.
              </p>
              <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-sm">
                <strong>Tech:</strong> Gradient Boosted Trees, 89% accuracy, behavioral signals analysis
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-green-500 text-white rounded-2xl p-8">
              <div className="text-5xl mb-4">🎲</div>
              <h3 className="text-2xl font-bold mb-4">Smart Matching</h3>
              <p className="text-blue-100 mb-6">
                Collaborative filtering + content-based recommendations. Suggests games based on play patterns.
              </p>
              <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-sm">
                <strong>Tech:</strong> Hybrid recommender system, 82% confidence, similarity algorithms
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-yellow-500 text-white rounded-2xl p-8">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4">Optimal Timing</h3>
              <p className="text-green-100 mb-6">
                Reinforcement learning optimizes when/how to deliver recommendations for maximum engagement.
              </p>
              <div className="bg-white/20 backdrop-blur rounded-lg p-4 text-sm">
                <strong>Tech:</strong> Thompson Sampling, 78% open rate, time-of-day analysis
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How Players Experience It</h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-xl mx-auto mb-3">1</div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Opens App</p>
                <p className="text-xs text-gray-600">"Recommended for You" carousel with 3 AI-selected games</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mx-auto mb-3">2</div>
                <p className="text-sm font-semibold text-gray-900 mb-2">After 5 Wins</p>
                <p className="text-xs text-gray-600">In-game prompt: "Try Mahjong! Players like you love it"</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl mx-auto mb-3">3</div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Inactive 3+ Days</p>
                <p className="text-xs text-gray-600">Push at peak time: "Your daily challenge is ready!"</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-bold text-xl mx-auto mb-3">4</div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Background</p>
                <p className="text-xs text-gray-600">System learns, refines, personalizes continuously</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 6: UX Principles
    {
      title: "User Experience Design Principles",
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 border-2 border-pink-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Data powers the engine, empathy drives the experience</h2>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="text-green-600" size={28} />
                  <h3 className="text-xl font-bold text-gray-900">Invisible Intelligence</h3>
                </div>
                <p className="text-gray-700">
                  Players never see churn scores or AI confidence levels. They just see games they'll love. 
                  The magic is invisible.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="text-green-600" size={28} />
                  <h3 className="text-xl font-bold text-gray-900">Respectful Frequency</h3>
                </div>
                <p className="text-gray-700">
                  Max 1 push notification per day. In-game prompts only at natural moments (after wins, not during games). 
                  Easy opt-out respects preferences.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="text-green-600" size={28} />
                  <h3 className="text-xl font-bold text-gray-900">Social Proof Over Tech</h3>
                </div>
                <p className="text-gray-700">
                  "Players like you love this game" is more compelling than "AI recommends this." 
                  Human connection beats algorithmic authority.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border-2 border-purple-200">
              <h3 className="text-2xl font-bold text-purple-900 mb-6">The "Feel Good" Factor</h3>
              <p className="text-lg text-gray-700 mb-6">
                The best product experiences feel like magic, not machinery.
              </p>
              <div className="space-y-4 text-gray-700">
                <p>
                  When Sarah gets a notification at exactly 7pm, she thinks <strong>"Pogo remembers me!"</strong>—not 
                  "an algorithm predicted my behavior."
                </p>
                <p>
                  When Mike sees Mahjong recommended after loving Solitaire, he thinks <strong>"they get my taste!"</strong>—not 
                  "collaborative filtering matched my vector."
                </p>
                <p className="text-xl font-bold text-purple-900 pt-4 border-t border-purple-200">
                  This emotional connection is what turns functional AI into delightful AI.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 7: PM Thinking
    {
      title: "Product Manager Approach",
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-10 h-10 text-purple-600" />
                <h3 className="text-2xl font-bold text-gray-900">RICE Prioritization</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="font-bold text-purple-900 mb-2">Reach: 425K → 2.5M</div>
                  <p className="text-sm text-gray-700">At-risk segment first for quick wins, then scale to all players</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="font-bold text-blue-900 mb-2">Impact: 32% churn reduction</div>
                  <p className="text-sm text-gray-700">$18M retained revenue + 45% engagement lift = massive business impact</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="font-bold text-green-900 mb-2">Confidence: 80% (High)</div>
                  <p className="text-sm text-gray-700">Proven by market leaders (Candy Crush, MONOPOLY GO!) + Pogo has player data</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <div className="font-bold text-orange-900 mb-2">Effort: 9 months, $900K</div>
                  <p className="text-sm text-gray-700">2 engineers + 1 ML engineer + 0.5 PM/design + infrastructure</p>
                </div>
                <div className="bg-gray-900 text-white rounded-lg p-4">
                  <div className="font-bold text-xl mb-1">RICE Score: 1,133</div>
                  <p className="text-sm text-gray-300">(2.5M × 3 × 0.8) / 5.3 quarters</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="w-10 h-10 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">MVP Validation Plan</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="font-bold text-gray-900 mb-3">Core Hypothesis</div>
                  <p className="text-gray-700">
                    Personalized game recommendations at optimal moments will increase portfolio engagement and 
                    reduce churn by matching players with games they'll love but never discovered.
                  </p>
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-3">MVP Scope</div>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• 3 AI models (churn, matching, timing)</li>
                    <li>• 2 touchpoints (push, in-game prompts)</li>
                    <li>• 1 segment (at-risk, 425K players)</li>
                  </ul>
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-3">A/B Test Structure</div>
                  <p className="text-gray-700 text-sm">
                    50K at-risk players. Control = current experience. Variant = AI recommendations. 
                    Track: churn rate, cross-game sessions, session length, app opens.
                  </p>
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-3">Success Criteria</div>
                  <p className="text-gray-700 text-sm">
                    If &gt;20% churn reduction → roll to casual segment (1.8M) → full platform.
                    Add advanced features: daily challenges, friend recs, cross-game progression.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8 border-2 border-red-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Risk Mitigation Strategy</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="font-semibold text-gray-900 mb-2">Risk: Recommendation Fatigue</div>
                <p className="text-sm text-gray-600"><strong>Mitigation:</strong> Frequency caps (1/day), A/B test messaging tone, easy opt-out</p>
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-2">Risk: Model Bias (Echo Chamber)</div>
                <p className="text-sm text-gray-600"><strong>Mitigation:</strong> Diversity penalty in ranking, exploration vs exploitation balance</p>
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-2">Risk: Cold Start Problem</div>
                <p className="text-sm text-gray-600"><strong>Mitigation:</strong> Content-based filtering for new players, onboarding quiz</p>
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-2">Risk: Technical Complexity</div>
                <p className="text-sm text-gray-600"><strong>Mitigation:</strong> Use managed services (SageMaker), hire ML specialist, monitoring alerts</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 8: Business Impact
    {
      title: "Business Case: $18M+ ARR Impact",
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-2xl p-10 shadow-2xl">
              <div className="text-6xl font-bold mb-4">$18.0M</div>
              <div className="text-2xl mb-4">Retained Revenue</div>
              <div className="text-green-100">
                540K players saved from churn × $2.75 ARPU/mo × 12 months
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-2xl p-10 shadow-2xl">
              <div className="text-6xl font-bold mb-4">$900K</div>
              <div className="text-2xl mb-4">Investment</div>
              <div className="text-blue-100">
                Engineering + ML + PM + infrastructure for 9-month build
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl p-10 shadow-2xl">
              <div className="text-6xl font-bold mb-4">27x</div>
              <div className="text-2xl mb-4">Year 1 ROI</div>
              <div className="text-purple-100">
                0.5 month payback period. Break-even in Q2 rollout.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Revenue Breakdown</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-gray-900">At-Risk Retention</div>
                    <div className="text-sm text-gray-600">425K × 68% churn × 32% reduction</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">$10.5M</div>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-gray-900">Casual ARPU Lift</div>
                    <div className="text-sm text-gray-600">1.8M × $0.35 lift × 12 months</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">$7.6M</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border-2 border-purple-200">
                <h3 className="font-bold text-purple-900 mb-3 text-lg">Strategic Value Beyond Revenue</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Competitive Moat:</strong> Personalization creates stickiness and switching costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Data Flywheel:</strong> More engagement → better models → better recs → more engagement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Platform Foundation:</strong> Enables dynamic difficulty, social matching, content generation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border-2 border-orange-200">
                <h3 className="font-bold text-orange-900 mb-3 text-lg">Why Now?</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight size={16} className="text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Competitors proving 30-50% engagement lifts from AI personalization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight size={16} className="text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Pogo has unique advantages: 26 years data, 60+ games, cross-platform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight size={16} className="text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Cost of inaction: $24M annual churn, falling further behind market leaders</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 9: Next Steps
    {
      title: "If I Joined Tomorrow",
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border-2 border-purple-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">First 90 Days: Validate, Prototype, Launch</h2>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-2xl mb-6">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Weeks 1-4: Validate</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">User interviews with churned players to confirm pain points</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Analytics deep-dive: What behaviors predict churn?</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Competitive analysis: How do Candy Crush, MONOPOLY GO! personalize?</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Technical feasibility: What data exists? Model complexity?</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl mb-6">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Weeks 5-8: Prototype</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Build churn prediction model on historical data (offline)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Create basic recommendation algorithm (collaborative filtering)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Design A/B test structure and success metrics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Get stakeholder alignment on MVP scope</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-2xl mb-6">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Weeks 9-12: Launch MVP</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">A/B test with 50K at-risk players (control vs AI recs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Track: churn rate, sessions, cross-game engagement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Qualitative feedback: User surveys, interviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">If &gt;20% churn reduction → build full rollout plan</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Key Assumptions to Validate</h3>
            <div className="grid grid-cols-2 gap-6">
              <ul className="space-y-2 text-gray-300">
                <li>• Players want game recommendations (not just homepage curation)</li>
                <li>• Churn risk can be predicted 7-14 days in advance</li>
                <li>• Push notifications at optimal times increase re-engagement</li>
              </ul>
              <ul className="space-y-2 text-gray-300">
                <li>• Cross-game recommendations increase portfolio engagement</li>
                <li>• Similar-player matching (collaborative filtering) works for casual games</li>
                <li>• Pogo has sufficient player data to train accurate models</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // Final Slide
    {
      title: "This Is Product Management",
      content: (
        <div className="text-center py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              From Research to Revenue
            </h2>
            
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-12 mb-12">
              <p className="text-2xl text-gray-800 italic leading-relaxed">
                "This strategy demonstrates what I bring as a Lead PM: market analysis, user segmentation, 
                solution design, validation planning, risk mitigation, and business impact quantification—all 
                balanced with exceptional user experience and technical feasibility."
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 border-2 border-purple-200">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Research-Driven</h3>
                <p className="text-gray-700">Deep market analysis, competitive intelligence, user behavior patterns</p>
              </div>
              <div className="bg-white rounded-xl p-8 border-2 border-blue-200">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">User-Focused</h3>
                <p className="text-gray-700">Behavioral personas, journey mapping, emotional design principles</p>
              </div>
              <div className="bg-white rounded-xl p-8 border-2 border-green-200">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data-Informed</h3>
                <p className="text-gray-700">RICE prioritization, A/B testing, success metrics, ROI modeling</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 via-orange-900 to-yellow-900 rounded-2xl p-12 text-white">
              <p className="text-3xl font-bold mb-6">
                Ready to transform Pogo into a modern, intelligent entertainment platform.
              </p>
              <p className="text-xl text-gray-300">
                Let's discuss how this strategy fits into Pogo's roadmap and what we'd prioritize together.
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-8 py-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Pogo AI Game Recommender</h1>
            <p className="text-orange-100 text-sm">Interview Presentation</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-orange-100">Slide {currentSlide + 1} of {slides.length}</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-7xl">
          {/* Slide Container */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Slide Header */}
            {slides[currentSlide].title && (
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-12 py-8">
                <h2 className="text-4xl font-bold">{slides[currentSlide].title}</h2>
                {slides[currentSlide].subtitle && (
                  <p className="text-xl text-gray-300 mt-2">{slides[currentSlide].subtitle}</p>
                )}
              </div>
            )}
            
            {/* Slide Content */}
            <div className="p-12 min-h-[600px]">
              {slides[currentSlide].content}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                currentSlide === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 shadow-md hover:shadow-lg'
              }`}
            >
              <ChevronLeft size={20} />
              Previous
            </button>

            <div className="flex gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentSlide
                      ? 'bg-orange-500 w-12'
                      : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                currentSlide === slides.length - 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-orange-500 text-white shadow-md hover:shadow-lg'
              }`}
            >
              Next
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}