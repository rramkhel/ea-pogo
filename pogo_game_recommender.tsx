import React, { useState } from 'react';
import { Brain, TrendingUp, Clock, Target, Zap, Users, Award, ChevronRight, Sparkles, BarChart3, RefreshCw, Activity, AlertTriangle, CheckCircle, PieChart, Layout, User, Settings } from 'lucide-react';

const COLORS = {
  primary: '#FF6B35',
  secondary: '#FFB627',
  accent: '#4ECDC4',
  dark: '#2D3142',
};

// Sample games in the portfolio
const GAMES = [
  {
    id: 'solitaire',
    name: 'Classic Solitaire',
    genre: 'Card',
    avgSession: 12,
    retention: 45,
    difficulty: 'Medium',
    icon: '🃏'
  },
  {
    id: 'mahjong',
    name: 'Mahjong Dimensions',
    genre: 'Puzzle',
    avgSession: 18,
    retention: 38,
    difficulty: 'Hard',
    icon: '🀄'
  },
  {
    id: 'match3',
    name: 'Jewel Match',
    genre: 'Match-3',
    avgSession: 15,
    retention: 42,
    difficulty: 'Easy',
    icon: '💎'
  }
];

// Segment definitions
const SEGMENTS = {
  atRisk: {
    name: 'At-Risk Players',
    count: 425000,
    percentage: 17,
    churnRate: 68,
    avgDaysSincePlay: 4.2,
    color: '#EF4444',
    interventionSuccess: 32
  },
  casual: {
    name: 'Casual Players',
    count: 1800000,
    percentage: 72,
    churnRate: 22,
    avgDaysSincePlay: 1.8,
    color: '#F59E0B',
    interventionSuccess: 58
  },
  power: {
    name: 'Power Users',
    count: 275000,
    percentage: 11,
    churnRate: 8,
    avgDaysSincePlay: 0.3,
    color: '#10B981',
    interventionSuccess: 78
  }
};

export default function PogoGameRecommender() {
  const [activeView, setActiveView] = useState('pm'); // 'pm', 'player', or 'system'
  const [selectedSegment, setSelectedSegment] = useState('atRisk');
  const [selectedTest, setSelectedTest] = useState('test1');

  // PM Dashboard View
  const PMDashboard = () => {
    const segment = SEGMENTS[selectedSegment];

    const abTests = {
      test1: {
        name: 'Churn Prevention: Push Notifications',
        status: 'Active',
        hypothesis: 'Sending personalized game recommendations via push when players are inactive 3+ days reduces churn by 25%',
        audience: 'At-Risk Players (72+ churn score)',
        sample: 50000,
        duration: '14 days',
        results: {
          control: { returned: 2150, churnRate: 71 },
          variant: { returned: 3480, churnRate: 48 }
        },
        winningVariant: 'variant',
        confidence: 98,
        impact: '-32% churn rate'
      },
      test2: {
        name: 'Cross-Game Discovery: In-Game Prompts',
        status: 'Active',
        hypothesis: 'Showing "Try Mahjong" prompt after 5 Solitaire wins increases portfolio diversity by 40%',
        audience: 'Casual Players (Single-game players)',
        sample: 75000,
        duration: '21 days',
        results: {
          control: { tried: 1890, diversity: 22 },
          variant: { tried: 4725, diversity: 38 }
        },
        winningVariant: 'variant',
        confidence: 95,
        impact: '+73% cross-game trial'
      }
    };

    const test = abTests[selectedTest];

    const interventions = [
      {
        type: 'Push Notification',
        trigger: 'Inactive 3+ days',
        message: '"Miss you! Your daily Solitaire challenge is ready"',
        deployed: 48500,
        opened: 15520,
        converted: 8736,
        effectiveness: 18
      },
      {
        type: 'Email Campaign',
        trigger: 'Inactive 7+ days',
        message: '"Come back! We have new games you\'ll love"',
        deployed: 32100,
        opened: 8345,
        converted: 3271,
        effectiveness: 10
      },
      {
        type: 'In-Game Prompt',
        trigger: 'After 5 wins same game',
        message: '"Players like you also enjoy [Game Name]"',
        deployed: 125000,
        opened: 87500,
        converted: 28875,
        effectiveness: 23
      },
      {
        type: 'Daily Challenge',
        trigger: 'Low variety score',
        message: 'Custom challenge in unexplored game',
        deployed: 67800,
        opened: 42325,
        converted: 19246,
        effectiveness: 28
      }
    ];

    const cohortData = [
      { week: 'Week 1', atRisk: 82, casual: 94, power: 98 },
      { week: 'Week 2', atRisk: 61, casual: 86, power: 96 },
      { week: 'Week 3', atRisk: 43, casual: 78, power: 94 },
      { week: 'Week 4', atRisk: 28, casual: 71, power: 92 }
    ];

    return (
      <div className="space-y-6">
        {/* Segment Overview */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Player Segments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(SEGMENTS).map(([key, seg]) => (
              <button
                key={key}
                onClick={() => setSelectedSegment(key)}
                className={`text-left p-6 rounded-xl transition-all ${
                  selectedSegment === key
                    ? 'bg-white shadow-lg ring-2'
                    : 'bg-white shadow-md hover:shadow-lg'
                }`}
                style={selectedSegment === key ? { ringColor: seg.color } : {}}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm font-medium text-gray-600">{seg.name}</div>
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: seg.color }}
                  />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {(seg.count / 1000000).toFixed(1)}M
                </div>
                <div className="text-sm text-gray-500 mb-3">{seg.percentage}% of total players</div>
                <div className="pt-3 border-t space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Churn Risk</span>
                    <span className="font-semibold" style={{ color: seg.color }}>{seg.churnRate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Avg Days Since Play</span>
                    <span className="font-semibold">{seg.avgDaysSincePlay}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Intervention Success</span>
                    <span className="font-semibold text-green-600">{seg.interventionSuccess}%</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Active A/B Tests */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Active A/B Tests</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedTest('test1')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedTest === 'test1'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Test #1
              </button>
              <button
                onClick={() => setSelectedTest('test2')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedTest === 'test2'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Test #2
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 mb-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{test.name}</h3>
                <div className="flex items-center gap-3 text-sm">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                    {test.status}
                  </span>
                  <span className="text-gray-600">{test.sample.toLocaleString()} players</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-600">{test.duration}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-green-600">{test.confidence}%</div>
                <div className="text-xs text-gray-600">Confidence</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 mb-4">
              <div className="text-sm font-semibold text-gray-700 mb-2">Hypothesis</div>
              <p className="text-gray-600">{test.hypothesis}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4">
                <div className="text-sm font-semibold text-gray-700 mb-3">Control Group</div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Returned</span>
                    <span className="font-semibold">{test.results.control.returned.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Churn Rate</span>
                    <span className="font-semibold text-red-600">{test.results.control.churnRate}%</span>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4">
                <div className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  Variant (Winner)
                  <CheckCircle size={16} className="text-green-600" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Returned</span>
                    <span className="font-semibold text-green-600">{test.results.variant.returned.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Churn Rate</span>
                    <span className="font-semibold text-green-600">{test.results.variant.churnRate}%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t flex items-center justify-between">
              <div className="text-sm text-gray-700">
                <span className="font-semibold">Impact:</span> {test.impact}
              </div>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition-all">
                Deploy to All {SEGMENTS[selectedSegment].name}
              </button>
            </div>
          </div>
        </div>

        {/* Intervention Performance */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Intervention Performance (Last 30 Days)</h2>
          <div className="space-y-3">
            {interventions.map((int, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="font-semibold text-gray-800">{int.type}</div>
                    <div className="text-sm text-gray-600">{int.message}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-600">{int.effectiveness}%</div>
                    <div className="text-xs text-gray-600">Conversion Rate</div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4 text-sm">
                  <div>
                    <div className="text-gray-600">Deployed</div>
                    <div className="font-semibold">{int.deployed.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Opened</div>
                    <div className="font-semibold">{int.opened.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Converted</div>
                    <div className="font-semibold text-green-600">{int.converted.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Trigger</div>
                    <div className="font-semibold text-xs">{int.trigger}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Impact Metrics */}
        <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-8 text-white shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Projected Business Impact (Annual)</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="text-4xl font-bold mb-2">540K</div>
              <div className="text-purple-100 text-sm mb-1">Players Saved from Churn</div>
              <div className="text-xs text-purple-200">-32% churn rate improvement</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">+$18M</div>
              <div className="text-purple-100 text-sm mb-1">Retained Revenue (ARR)</div>
              <div className="text-xs text-purple-200">540K players × $2.75 ARPU/mo</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">+45%</div>
              <div className="text-purple-100 text-sm mb-1">Cross-Game Engagement</div>
              <div className="text-xs text-purple-200">Portfolio diversity increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">+6.2min</div>
              <div className="text-purple-100 text-sm mb-1">Avg Session Length</div>
              <div className="text-xs text-purple-200">Better player-game matching</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // AI System Architecture View
  const SystemView = () => {
    const systemMetrics = {
      playersAnalyzed: 2500000,
      signalsProcessed: 125000000,
      interventionsTriggered: 89500,
      modelsRunning: 7,
      avgLatency: 42,
      accuracy: 87
    };

    const aiModels = [
      {
        name: 'Churn Prediction Model',
        type: 'Gradient Boosted Trees',
        purpose: 'Predicts 7-14 day churn risk',
        inputs: 'Last play date, session frequency, win rate, game variety, engagement decay',
        output: 'Churn probability score (0-100)',
        accuracy: 89,
        retraining: 'Weekly',
        threshold: '72+ = High Risk intervention'
      },
      {
        name: 'Game-Player Matching Model',
        type: 'Collaborative Filtering + Content-Based',
        purpose: 'Recommends optimal next game',
        inputs: 'Play history, skill level, time of day, similar player patterns, game attributes',
        output: 'Top 3 games with confidence scores',
        accuracy: 82,
        retraining: 'Daily',
        threshold: '75%+ confidence = Show recommendation'
      },
      {
        name: 'Skill Assessment Model',
        type: 'Neural Network',
        purpose: 'Evaluates player skill in real-time',
        inputs: 'Win rate, time per move, game completion rate, difficulty progression',
        output: 'Skill percentile (1-99)',
        accuracy: 91,
        retraining: 'Continuous (online learning)',
        threshold: 'Adjusts difficulty when skill changes ±15%'
      },
      {
        name: 'Intervention Timing Model',
        type: 'Reinforcement Learning',
        purpose: 'Optimizes when to send notifications',
        inputs: 'Historical open rates, time of day, day of week, player timezone, app state',
        output: 'Optimal send time + channel',
        accuracy: 78,
        retraining: 'A/B test feedback loop',
        threshold: 'Send only if >65% predicted open rate'
      }
    ];

    const dataFlowSteps = [
      {
        step: 1,
        name: 'Data Collection',
        description: 'Real-time event streaming from games',
        components: ['Game clients', 'Event API', 'Kafka streams'],
        frequency: 'Real-time (milliseconds)',
        volume: '~5M events/hour'
      },
      {
        step: 2,
        name: 'Feature Engineering',
        description: 'Transform raw events into ML features',
        components: ['Feature store', 'Aggregation pipelines', 'Time-window calculations'],
        frequency: 'Hourly batch + real-time',
        volume: '50+ features per player'
      },
      {
        step: 3,
        name: 'Model Inference',
        description: 'Score players and generate recommendations',
        components: ['Model serving layer', 'Batch prediction', 'Real-time API'],
        frequency: 'Hourly for segments, on-demand for individuals',
        volume: '2.5M predictions/hour'
      },
      {
        step: 4,
        name: 'Decision Engine',
        description: 'Apply business rules and trigger actions',
        components: ['Rules engine', 'Intervention scheduler', 'A/B test framework'],
        frequency: 'Continuous',
        volume: '~90K interventions/day'
      },
      {
        step: 5,
        name: 'Action Execution',
        description: 'Deploy interventions across channels',
        components: ['Push notification service', 'Email service', 'In-app messaging'],
        frequency: 'Real-time',
        volume: 'Multi-channel delivery'
      },
      {
        step: 6,
        name: 'Feedback Loop',
        description: 'Measure outcomes and retrain models',
        components: ['A/B test results', 'Model performance tracking', 'Retraining pipeline'],
        frequency: 'Daily/Weekly',
        volume: 'Continuous improvement'
      }
    ];

    const techStack = {
      dataIngestion: ['Apache Kafka', 'AWS Kinesis', 'Event API Gateway'],
      storage: ['PostgreSQL (player profiles)', 'Redis (real-time features)', 'S3 (historical data)', 'Feature Store (Feast/Tecton)'],
      mlFrameworks: ['Python/Scikit-learn', 'XGBoost', 'TensorFlow', 'PyTorch'],
      serving: ['AWS SageMaker', 'TensorFlow Serving', 'Redis for caching'],
      orchestration: ['Apache Airflow', 'Kubernetes', 'Docker'],
      monitoring: ['Datadog', 'Grafana', 'MLflow for model tracking']
    };

    return (
      <div className="space-y-6">
        {/* System Health Dashboard */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 text-white shadow-lg">
          <h2 className="text-2xl font-bold mb-6">AI System Health (Real-Time)</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">{(systemMetrics.playersAnalyzed / 1000000).toFixed(1)}M</div>
              <div className="text-sm text-gray-400 mt-1">Players Analyzed</div>
              <div className="text-xs text-gray-500">Last hour</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">{(systemMetrics.signalsProcessed / 1000000).toFixed(0)}M</div>
              <div className="text-sm text-gray-400 mt-1">Signals Processed</div>
              <div className="text-xs text-gray-500">Last hour</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">{systemMetrics.interventionsTriggered.toLocaleString()}</div>
              <div className="text-sm text-gray-400 mt-1">Interventions</div>
              <div className="text-xs text-gray-500">Today</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">{systemMetrics.modelsRunning}</div>
              <div className="text-sm text-gray-400 mt-1">Active Models</div>
              <div className="text-xs text-green-400">● All healthy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">{systemMetrics.avgLatency}ms</div>
              <div className="text-sm text-gray-400 mt-1">Avg Latency</div>
              <div className="text-xs text-gray-500">p95: 120ms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">{systemMetrics.accuracy}%</div>
              <div className="text-sm text-gray-400 mt-1">System Accuracy</div>
              <div className="text-xs text-gray-500">Weighted avg</div>
            </div>
          </div>
        </div>

        {/* AI Models */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">AI Model Architecture</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {aiModels.map((model, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{model.name}</h3>
                    <div className="text-sm text-gray-600">{model.type}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{model.accuracy}%</div>
                    <div className="text-xs text-gray-500">Accuracy</div>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-semibold text-gray-700 mb-1">Purpose</div>
                    <p className="text-gray-600">{model.purpose}</p>
                  </div>
                  
                  <div>
                    <div className="font-semibold text-gray-700 mb-1">Key Inputs</div>
                    <p className="text-gray-600">{model.inputs}</p>
                  </div>

                  <div>
                    <div className="font-semibold text-gray-700 mb-1">Output</div>
                    <p className="text-gray-600">{model.output}</p>
                  </div>

                  <div className="pt-3 border-t flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-500">Retraining</div>
                      <div className="font-medium text-gray-700">{model.retraining}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">Decision Threshold</div>
                      <div className="font-medium text-gray-700 text-xs">{model.threshold}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Flow Pipeline */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">End-to-End Data Flow</h2>
          <div className="space-y-4">
            {dataFlowSteps.map((flow, idx) => (
              <div key={idx} className="relative">
                {idx < dataFlowSteps.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-purple-500 to-blue-500" />
                )}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                    {flow.step}
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-gray-800">{flow.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{flow.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">Frequency</div>
                        <div className="text-sm font-semibold text-purple-600">{flow.frequency}</div>
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {flow.components.map((comp, i) => (
                        <span key={i} className="px-2 py-1 bg-white text-gray-700 rounded text-xs font-medium shadow-sm">
                          {comp}
                        </span>
                      ))}
                    </div>
                    <div className="mt-2 text-xs text-gray-500">
                      <strong>Scale:</strong> {flow.volume}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Stack */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(techStack).map(([category, tools]) => (
              <div key={category}>
                <h3 className="font-bold text-gray-800 mb-3 capitalize">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <div className="space-y-2">
                  {tools.map((tool, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-purple-500 rounded-full" />
                      <span className="text-gray-700">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Design Decisions */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border-2 border-purple-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Architectural Decisions</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-bold text-gray-800 mb-2">1. Batch + Real-Time Hybrid</h3>
              <p className="text-sm text-gray-700">
                <strong>Decision:</strong> Use hourly batch processing for segment-level predictions, real-time API for individual player requests.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                <strong>Rationale:</strong> Balances cost efficiency (batch) with responsiveness (real-time). 95% of interventions can wait 1 hour, 5% need instant response.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h3 className="font-bold text-gray-800 mb-2">2. Feature Store for Consistency</h3>
              <p className="text-sm text-gray-700">
                <strong>Decision:</strong> Centralized feature store (Feast/Tecton) for training and serving features.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                <strong>Rationale:</strong> Prevents train-serve skew, enables feature reuse across models, provides point-in-time correctness for historical data.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h3 className="font-bold text-gray-800 mb-2">3. Multi-Armed Bandit for A/B Testing</h3>
              <p className="text-sm text-gray-700">
                <strong>Decision:</strong> Thompson Sampling for dynamic intervention allocation rather than fixed 50/50 splits.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                <strong>Rationale:</strong> Automatically shifts traffic to winning variants faster, reducing opportunity cost of poor interventions.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h3 className="font-bold text-gray-800 mb-2">4. Continuous Model Monitoring</h3>
              <p className="text-sm text-gray-700">
                <strong>Decision:</strong> Track prediction distribution drift, feature drift, and outcome metrics in real-time.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                <strong>Rationale:</strong> Catch model degradation early (seasonal changes, game updates, player behavior shifts). Auto-trigger retraining when accuracy drops >5%.
              </p>
            </div>
          </div>
        </div>

        {/* Scalability Notes */}
        <div className="bg-gradient-to-r from-orange-500 to-yellow-400 rounded-xl p-6 text-white shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Scaling to 10M+ Players</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="font-bold mb-2">🔄 Horizontal Scaling</div>
              <p className="text-sm text-orange-100">
                Stateless services behind load balancers. Add inference nodes as traffic grows. Partition Kafka topics by player segments.
              </p>
            </div>
            <div>
              <div className="font-bold mb-2">⚡ Caching Strategy</div>
              <p className="text-sm text-orange-100">
                Redis caches predictions for 1 hour. Pre-compute recommendations for likely-active players during off-peak hours.
              </p>
            </div>
            <div>
              <div className="font-bold mb-2">📊 Sampling for Analysis</div>
              <p className="text-sm text-orange-100">
                Full tracking for 10% sample, aggregated metrics for rest. Reduces storage costs while maintaining statistical power.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const PlayerView = () => {
    const playerName = "Sarah";
    const currentTime = new Date().getHours();
    const timeOfDay = currentTime < 12 ? 'morning' : currentTime < 17 ? 'afternoon' : 'evening';

    const recommendations = [
      {
        game: GAMES[0],
        reason: 'Your Daily Favorite',
        subtitle: 'You play best in the evening!',
        confidence: 'Perfect match',
        badge: 'Daily Challenge Ready',
        stats: '58% win rate • 34 games played'
      },
      {
        game: GAMES[2],
        reason: 'Quick & Fun',
        subtitle: 'Players like you love this game',
        confidence: 'High match',
        badge: 'New to You',
        stats: 'Easy difficulty • 10 min sessions'
      },
      {
        game: GAMES[1],
        reason: 'Challenge Yourself',
        subtitle: 'Ready for something harder?',
        confidence: 'Good match',
        badge: 'Brain Teaser',
        stats: 'Medium difficulty • 18 min sessions'
      }
    ];

    return (
      <div className="space-y-6">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-orange-500 to-yellow-400 rounded-xl p-8 text-white shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-4xl">
              👋
            </div>
            <div>
              <h1 className="text-3xl font-bold">Good {timeOfDay}, {playerName}!</h1>
              <p className="text-orange-100">We picked some games you'll love</p>
            </div>
          </div>
        </div>

        {/* Recommended for You */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Recommended for You</h2>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Sparkles size={16} className="text-purple-600" />
              <span>Powered by AI</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendations.map((rec, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden group cursor-pointer">
                <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-8 text-white relative">
                  <div className="absolute top-3 right-3 px-3 py-1 bg-white bg-opacity-20 backdrop-blur rounded-full text-xs font-semibold">
                    {rec.badge}
                  </div>
                  <div className="text-6xl mb-4">{rec.game.icon}</div>
                  <div className="text-2xl font-bold">{rec.game.name}</div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <div className="font-semibold text-gray-800 mb-1">{rec.reason}</div>
                    <div className="text-sm text-gray-600">{rec.subtitle}</div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <Target size={14} className="text-purple-600" />
                      <span className="font-medium text-purple-600">{rec.confidence}</span>
                    </div>
                    <div className="text-xs text-gray-500">{rec.stats}</div>
                  </div>
                  <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-lg font-semibold hover:shadow-lg transition-all group-hover:scale-105">
                    Play Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Your Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Award className="text-purple-600" size={20} />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">7</div>
                <div className="text-sm text-gray-600">Day Streak</div>
              </div>
            </div>
            <div className="text-xs text-green-600 font-semibold">Keep it going! 🔥</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Target className="text-blue-600" size={20} />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">62%</div>
                <div className="text-sm text-gray-600">Win Rate</div>
              </div>
            </div>
            <div className="text-xs text-gray-500">+4% this week</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Clock className="text-green-600" size={20} />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">45</div>
                <div className="text-sm text-gray-600">Games Played</div>
              </div>
            </div>
            <div className="text-xs text-gray-500">This month</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="text-orange-600" size={20} />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">12min</div>
                <div className="text-sm text-gray-600">Avg Session</div>
              </div>
            </div>
            <div className="text-xs text-gray-500">Your best time</div>
          </div>
        </div>

        {/* Because You Played */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Because you played Classic Solitaire...</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Spider Solitaire', 'FreeCell', 'Pyramid Solitaire', 'TriPeaks'].map((game, idx) => (
              <div key={idx} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all cursor-pointer">
                <div className="text-4xl mb-2">🃏</div>
                <div className="text-sm font-semibold text-gray-800">{game}</div>
                <div className="text-xs text-gray-600 mt-1">Try it!</div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Challenge */}
        <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Your Daily Challenge</h3>
              <p className="text-green-100 mb-4">Complete today's Solitaire challenge for bonus points!</p>
              <button className="px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:shadow-lg transition-all">
                Start Challenge
              </button>
            </div>
            <div className="text-6xl">🏆</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with View Toggle */}
        <div className="bg-gradient-to-r from-orange-500 to-yellow-400 rounded-xl p-6 mb-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center">
                <Brain size={32} style={{ color: COLORS.primary }} />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Pogo AI Game Recommender</h1>
                <p className="text-orange-100">Multi-view recommendation system</p>
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex gap-2 bg-white bg-opacity-20 backdrop-blur rounded-lg p-1">
              <button
                onClick={() => setActiveView('pm')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  activeView === 'pm'
                    ? 'bg-white text-orange-600 shadow-md'
                    : 'text-white hover:bg-white hover:bg-opacity-10'
                }`}
              >
                <BarChart3 size={18} />
                PM Dashboard
              </button>
              <button
                onClick={() => setActiveView('player')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  activeView === 'player'
                    ? 'bg-white text-orange-600 shadow-md'
                    : 'text-white hover:bg-white hover:bg-opacity-10'
                }`}
              >
                <User size={18} />
                Player View
              </button>
              <button
                onClick={() => setActiveView('system')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  activeView === 'system'
                    ? 'bg-white text-orange-600 shadow-md'
                    : 'text-white hover:bg-white hover:bg-opacity-10'
                }`}
              >
                <Settings size={18} />
                AI System
              </button>
            </div>
          </div>
        </div>

        {/* Render Active View */}
        {activeView === 'pm' ? <PMDashboard /> : activeView === 'player' ? <PlayerView /> : <SystemView />}

        {/* System Architecture Note - Only show on non-system views */}
        {activeView !== 'system' && (
          <div className="bg-white rounded-xl p-6 shadow-md mt-6">
            <div className="flex items-start gap-4">
              <Settings size={24} className="text-gray-400 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Want to see how it works under the hood?</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Click the "AI System" tab above to explore the complete technical architecture, ML models, data pipelines, and scaling strategy.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}