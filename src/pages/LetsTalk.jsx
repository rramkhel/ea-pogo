import { Mail, Linkedin, Phone, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LetsTalk() {
  const handlePrintResume = () => {
    document.body.classList.add('print-resume-only');
    window.print();
    document.body.classList.remove('print-resume-only');
  };

  const handlePrintCoverLetter = () => {
    document.body.classList.add('print-cover-letter-only');
    window.print();
    document.body.classList.remove('print-cover-letter-only');
  };
  const strengths = [
    {
      title: "Data-Driven Optimization",
      metrics: [
        "63% conversion boost through A/B testing",
        "25% MAU growth via Amplitude analytics",
        "50%+ weekly active users (exceeded 25% target by 2x)"
      ],
      application: "Live service reviews, KPI management, A/B testing for daily challenges and Club Pogo"
    },
    {
      title: "Platform Operations at Scale",
      metrics: [
        "1M+ content pieces migrated with zero downtime",
        "400K+ users maintained during migration",
        "300K expert contributors quality framework"
      ],
      application: "Managing Pogo's 60+ game library, content pipelines, quality assurance systems"
    },
    {
      title: "Daily Engagement Mechanics",
      metrics: [
        "0% to 50%+ adoption in post-launch optimization",
        "85% user satisfaction through feature iteration",
        "15% retention lift via continuous experimentation"
      ],
      application: "Daily challenges, tournaments, progressive difficulty, achievement systems"
    },
    {
      title: "Cross-Functional Execution",
      metrics: [
        "85% roadmap predictability improvement",
        "3-5 experiments shipped per sprint",
        "Coordinated eng, UX, legal, marketing on tight timelines"
      ],
      application: "Coordinating art, design, engineering, production teams for live service velocity"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-8 py-20">
        {/* Hero Section */}
        <div className="inline-block px-6 py-2 bg-pogo-orange/20 border border-pogo-orange/50 rounded-full text-pogo-orange font-semibold mb-6 text-sm">
          WHY I'M EXCITED ABOUT POGO
        </div>

        <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
          Let's Talk:<br/>
          <span className="bg-gradient-to-r from-pogo-orange to-pogo-yellow bg-clip-text text-transparent">
            Why This Role Excites Me
          </span>
        </h1>

        <p className="text-xl text-gray-300 max-w-3xl mb-16 leading-relaxed">
          The product fundamentals that drive success in EdTech translate directly to live service gaming. Here's what I'd bring to Pogo's Live Service team.
        </p>

        {/* Key Strengths Grid */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-10 mb-16">
          <h2 className="text-2xl text-pogo-yellow mb-8">What I'd Bring to Pogo</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {strengths.map((strength, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-xl font-bold text-pogo-orange mb-3">
                  {strength.title}
                </h3>
                <div className="space-y-2">
                  {strength.metrics.map((metric, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-pogo-teal text-xl flex-shrink-0">✓</span>
                      <span className="text-gray-300">{metric}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-400 text-sm mt-4 pl-7">
                  <span className="text-pogo-yellow font-semibold">Applies to Pogo:</span> {strength.application}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why This Transition Section */}
        <div className="p-10 bg-gradient-to-r from-pogo-orange/10 to-pogo-yellow/10 border border-pogo-orange/30 rounded-xl mb-16">
          <h2 className="text-2xl text-pogo-yellow mb-5">Why This Transition Excites Me</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            I'm energized by the opportunity to apply my product toolkit to a new domain. EdTech and casual gaming share fundamental user motivations—achievement, progression, mastery, and building daily habits that feel rewarding.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            I thrive on diving deep into new spaces—at Chegg, I quickly became the go-to expert on STEM content quality standards and platform operations. I'm particularly excited about learning from your team's 20+ years of gaming expertise while contributing fresh perspectives on experimentation methodologies and behavioral analytics.
          </p>
        </div>

        {/* 90-Day Plan */}
        <h2 className="text-3xl font-bold mb-8 text-white">First 90 Days</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all">
            <div className="text-4xl mb-4">1️⃣</div>
            <h3 className="text-xl font-bold text-pogo-orange mb-4">Month 1: Learn</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-pogo-teal text-lg">✓</span>
                <span className="text-gray-300">Stakeholder interviews with team, designers, engineers, analytics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pogo-teal text-lg">✓</span>
                <span className="text-gray-300">Deep-dive into player data and engagement patterns</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pogo-teal text-lg">✓</span>
                <span className="text-gray-300">Understand what's working and where opportunities exist</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all">
            <div className="text-4xl mb-4">2️⃣</div>
            <h3 className="text-xl font-bold text-pogo-orange mb-4">Month 2: Define</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-pogo-teal text-lg">✓</span>
                <span className="text-gray-300">Refine KPIs for live service content and Club Pogo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pogo-teal text-lg">✓</span>
                <span className="text-gray-300">Build hypotheses around player segmentation and engagement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pogo-teal text-lg">✓</span>
                <span className="text-gray-300">Establish structured experimentation framework</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all">
            <div className="text-4xl mb-4">3️⃣</div>
            <h3 className="text-xl font-bold text-pogo-orange mb-4">Month 3: Deliver</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-pogo-teal text-lg">✓</span>
                <span className="text-gray-300">Launch quick-win A/B tests on daily challenges</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pogo-teal text-lg">✓</span>
                <span className="text-gray-300">Optimize first-time user onboarding flows</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pogo-teal text-lg">✓</span>
                <span className="text-gray-300">Document learnings and establish repeatable playbooks</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-6 text-white">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            I'd love to discuss how I can contribute to Pogo's live service roadmap and learn more about your vision for the next phase of growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="mailto:rachel.ramkhelawan@gmail.com"
              className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-pogo-orange to-pogo-yellow text-white rounded-full text-lg font-bold transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-pogo-orange/50"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/rachel-ramkhelawan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white/10 border border-white/20 text-white rounded-full text-lg font-bold transition-all hover:bg-white/20"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>

          <div className="text-gray-400 space-y-2">
            <p className="flex items-center justify-center gap-2">
              <Phone size={16} />
              780-983-1774
            </p>
            <p>Edmonton, AB • Open to Hybrid Work</p>
          </div>
        </div>

        {/* Back to Portfolio */}
        <div className="text-center print:hidden">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-pogo-teal font-semibold hover:text-pogo-yellow transition-colors"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <button
        onClick={handlePrintResume}
        className="print:hidden fixed bottom-24 right-8 flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-pogo-orange to-pogo-yellow text-white rounded-full shadow-2xl hover:shadow-pogo-orange/50 hover:scale-105 transition-all font-bold group z-50"
      >
        <Download className="w-5 h-5 flex-shrink-0" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-[250ms] whitespace-nowrap">
          Resume
        </span>
      </button>

      <button
        onClick={handlePrintCoverLetter}
        className="print:hidden fixed bottom-8 right-8 flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-pogo-yellow to-pogo-teal text-white rounded-full shadow-2xl hover:shadow-pogo-yellow/50 hover:scale-105 transition-all font-bold group z-50"
      >
        <Download className="w-5 h-5 flex-shrink-0" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-[250ms] whitespace-nowrap">
          Cover Letter
        </span>
      </button>

      {/* Hidden Resume Section for Printing */}
      <div className="resume-section hidden print:block bg-white text-black">
        <div className="max-w-4xl mx-auto">
          {/* Resume Header */}
          <div className="border-b-2 border-pogo-orange pb-4 mb-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Rachel Ramkhelawan</h1>
            <div className="flex flex-wrap gap-3 text-sm text-gray-600">
              <span>Edmonton, AB</span>
              <span>•</span>
              <span>780-983-1774</span>
              <span>•</span>
              <span>rachel.ramkhelawan@gmail.com</span>
              <span>•</span>
              <span>linkedin.com/in/rachel-ramkhelawan</span>
            </div>
          </div>

          {/* Summary */}
          <section className="mb-6">
            <h2 className="text-xl font-bold text-pogo-orange mb-3 uppercase tracking-wide">Lead Product Manager</h2>
            <p className="text-gray-700 leading-relaxed text-sm">
              Product Manager with 8+ years launching data-driven products in high-velocity environments. Launched content platform to 100K+ users in &lt;1 month with 63% conversion boost through A/B testing and behavioral analytics. Expert in continuous product optimization, cross-platform strategy, and turning complex datasets into actionable roadmaps. Proven track record leading cross-functional teams to deliver features that drive daily engagement, retention, and scalable growth.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-6">
            <h2 className="text-xl font-bold text-pogo-orange mb-3 uppercase tracking-wide">Skills & Expertise</h2>
            <div className="space-y-2 text-sm text-gray-700">
              <p><strong>Product Strategy & Execution:</strong> Product Roadmap Development, KPI Definition & Tracking, Continuous Optimization, Retention & Monetization Strategy, A/B Testing & Experimentation, User-Centric Feature Design</p>
              <p><strong>Data-Driven Decision Making:</strong> Behavioral Analytics (Amplitude, Tableau), A/B Test Design & Analysis, Performance Dashboards, Funnel Optimization, User Event Tracking, Data Storytelling for Leadership</p>
              <p><strong>Platform & Scale:</strong> Content Platform Management, Cross-Platform Product Strategy (Web + Mobile), Zero-Downtime Deployments, High-Availability Systems, Subscription & Freemium Monetization</p>
              <p><strong>Technical Proficiency:</strong> Product Operations, Agile/Scrum Methodologies, Quality Assurance, Full-Stack Product Development, Platform Integrations (B2B/B2C/B2E SaaS)</p>
              <p><strong>Cross-Functional Leadership:</strong> Engineering/Design/Marketing Collaboration, Stakeholder Alignment, Executive Communication, User Research & Persona Development</p>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-6">
            <h2 className="text-xl font-bold text-pogo-orange mb-3 uppercase tracking-wide">Professional Experience</h2>

            {/* Sprekta */}
            <div className="mb-5">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="font-bold text-gray-900">AI Product Consultant</h3>
                  <p className="text-gray-700 text-sm">Sprekta Inc., Edmonton, AB</p>
                </div>
                <span className="text-sm text-gray-600 whitespace-nowrap">Nov 2024 – Present</span>
              </div>
              <p className="text-sm text-gray-700 mb-2 italic">
                Built 0-to-1 wellness platform from concept to full-stack prototype, improving user clarity and control by 40%+ in early testing by applying continuous engagement loops and behavioral design principles.
              </p>
              <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-gray-700">
                <li>Defined product vision and experience architecture for autonomous planning tool where users provide minimal input to receive personalized recommendations, reducing friction and cognitive load through smart defaults</li>
                <li>Prototyped full-stack product leveraging modern frameworks and behavioral inference to dynamically adapt user experiences based on real-time inputs and usage patterns</li>
                <li>Applied engagement principles (daily touchpoints, progression mechanics, habit formation) to product design, creating loops that drive consistent daily usage and retention</li>
              </ul>
            </div>

            {/* Chegg */}
            <div className="mb-5">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="font-bold text-gray-900">Product Manager</h3>
                  <p className="text-gray-700 text-sm">Chegg, Inc., Santa Clara, CA</p>
                </div>
                <span className="text-sm text-gray-600 whitespace-nowrap">Feb 2021 – Nov 2024</span>
              </div>
              <p className="text-sm text-gray-700 mb-2 italic">
                Launched content platform to 100K+ users in &lt;1 month, driving 63% conversion boost, 200% signup surge, and 25% monthly active user growth through data-backed optimization and continuous experimentation.
              </p>
              <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-gray-700">
                <li>Drove post-launch adoption from 0% to 50%+ weekly active users by implementing user event tracking, conducting research to identify high-value features, and cross-referencing behavioral data with user feedback to prioritize roadmap improvements that exceeded 25% target by 2x</li>
                <li>Designed and executed continuous experimentation program across onboarding and engagement funnels, shipping 3-5 data-driven improvements per sprint based on Amplitude analytics, A/B test results, and user session analysis, lifting retention 15%</li>
                <li>Orchestrated migration of 1M+ live content pieces with zero downtime for 400K+ users by developing incremental batch strategy, prioritization framework for high-traffic content, and real-time monitoring system, coordinating engineering, QA, and operations teams on tight timeline</li>
                <li>Built compliance framework to manage content quality at scale for 300K expert contributors, creating in-platform assessment tools, subject-specific rubrics, and automated feedback systems that maintained 80+ quality scores across all educational content while accommodating subject-specific edge cases</li>
                <li>Optimized feature adoption and user flows through behavioral data analysis and A/B testing, identifying friction points in onboarding and engagement funnels, running experiments on feature discovery and activation that improved user satisfaction to 85% across user segments</li>
                <li>Coordinated engineering, UX, legal, and marketing teams to ship complex features on aggressive timelines, establishing agile sprint processes, backlog prioritization, and stakeholder communication rhythms that improved roadmap predictability by 85%</li>
                <li>Conducted user interviews, surveys, and session replay analysis to identify friction points, translating qualitative insights into quantitative experiments and prioritized product improvements</li>
              </ul>
            </div>

            {/* Varafy */}
            <div className="mb-5">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="font-bold text-gray-900">Product & Customer Success Manager</h3>
                  <p className="text-gray-700 text-sm">Varafy Corporation, Edmonton, AB</p>
                </div>
                <span className="text-sm text-gray-600 whitespace-nowrap">July 2017 – Feb 2021</span>
              </div>
              <p className="text-sm text-gray-700 mb-2 italic">
                Scaled B2B SaaS platform through to multi-million-dollar acquisition, driving 30% client growth and 20% retention lift by leading agile development and serving as product owner for 50+ enterprise clients.
              </p>
              <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-gray-700">
                <li>Owned product roadmap for custom B2B SaaS platform, translating enterprise client requirements into high-impact features through discovery workshops and stakeholder alignment that drove 30% year-over-year client growth</li>
                <li>Increased retention 20% for major education publishers (Wiley, Oxford University Press) by leading discovery workshops, defining detailed product specifications and acceptance criteria, and managing full product lifecycle from backlog prioritization through QA testing to delivery</li>
                <li>Managed agile development across distributed teams, coordinating sprint planning, estimation, and releases while maintaining comprehensive product documentation for cross-functional stakeholders</li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-xl font-bold text-pogo-orange mb-3 uppercase tracking-wide">Education</h2>
            <div className="text-sm text-gray-700 space-y-2">
              <div>
                <strong>Certificate in Interdisciplinary Leadership Studies</strong><br />
                University of Alberta, Peter Lougheed Leadership College
              </div>
              <div>
                <strong>Bachelor of Science in Engineering</strong><br />
                University of Alberta
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Hidden Cover Letter Section for Printing */}
      <div className="cover-letter-section hidden print:block bg-white text-black">
        <div className="max-w-4xl mx-auto">
          <div className="border-b-2 border-pogo-orange pb-4 mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Cover Letter</h1>
            <p className="text-sm text-gray-600">Lead Product Manager Position - EA Pogo</p>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
            <div className="text-right text-sm text-gray-600 mb-6">
              Rachel Ramkhelawan<br />
              780-983-1774<br />
              rachel.ramkhelawan@gmail.com<br />
              Edmonton, AB
            </div>

            <p className="font-semibold">
              October 16, 2025
            </p>

            <p className="font-semibold">
              Sean Evans, Product Director<br />
              EA Mobile - Pogo<br />
              Electronic Arts
            </p>

            <p>Dear Sean,</p>

            <p>
              I'm Rachel, a PM with 8+ years of experience delivering sticky, engaging experiences to users, and I'm reaching out because I would love to work in Product on Electronic Arts's Pogo team, building snappy, engaging gaming content. I've successfully adapted to many data-based, user-centric challenges (delivering 2x WAU targets of 50%+, increasing user satisfaction to 85%, driving 63% conversion boosts), and have driven many successful features through innovation and team collaboration. I'd love to do this as part of your team at EA!
            </p>

            <h3 className="font-bold text-gray-900 mt-4">Why I'm Excited About This Role</h3>

            <p>
              What draws me to Pogo is the continuous optimization challenge: delivering daily reasons for players to engage, using data to inform roadmap decisions, and balancing fresh content with platform stability. At Chegg, I launched a content platform to 100K+ users and drove adoption from 0% to 50%+ weekly active users (exceeding 25% target by 2x) through behavioral analytics and rapid experimentation.
            </p>

            <p>
              The cross-platform complexity is particularly compelling. I orchestrated the migration of 1M+ live content pieces with zero downtime for 400K+ users, coordinating engineering, QA, and operations teams on tight timelines—I understand maintaining uptime while shipping improvements.
            </p>

            <h3 className="font-bold text-gray-900 mt-4">How My Experience Translates</h3>

            <p>The product fundamentals that drive success in EdTech translate directly to live service gaming:</p>

            <p>
              <strong>Data-Driven Optimization:</strong> I worked in Amplitude daily, utilizing user event tracking, running continuous A/B tests (3-5 per sprint), and translating complex datasets into roadmap priorities—driving 63% conversion boost, 25% MAU growth, and 15% retention lift.
            </p>

            <p>
              <strong>Daily Engagement & Platform Operations:</strong> I designed features to bring users back every day (achievement tracking, progressive difficulty, personalized recommendations) and built a compliance framework for 300K expert contributors with in-platform assessment tools that maintained quality standards at scale.
            </p>

            <p>
              <strong>Cross-Functional Execution & Subscription Optimization:</strong> I coordinated engineering, UX, legal, and marketing teams to ship complex features under tight deadlines (improving roadmap predictability by 85%) while analyzing acquisition costs, lifetime value, and engagement patterns to inform pricing experiments that improved conversion rates.
            </p>

            <h3 className="font-bold text-gray-900 mt-4">Why This Transition Excites Me</h3>

            <p>
              I'm energized by the opportunity to apply my product toolkit to a new domain. EdTech and casual gaming share fundamental user motivations like achievement, progression, mastery, and building daily habits that feel rewarding. I also thrive on diving deep into new spaces: at Chegg, I quickly became the go-to expert on STEM content quality standards and large scale platform operations, domains I had never worked in before.
            </p>

            <p>
              I'm particularly excited about learning from your team's years of gaming expertise. The best product managers combine domain knowledge with transferable PM fundamentals, and I will bring the latter while rapidly building the former alongside your team.
            </p>

            <h3 className="font-bold text-gray-900 mt-4">Let's Connect</h3>

            <p>
              I've actually done a quick exploration and rapid prototype showing some innovative features I think could be useful, both to an internal team for improving data analysis, and to users.
            </p>

            <p>
              I'd love to learn more about Pogo's vision for the next phase of growth. Would you be open to a conversation about how I can contribute to Pogo's live service roadmap?
            </p>

            <p className="mt-6">
              Best regards,
            </p>

            <p className="font-bold">
              Rachel Ramkhelawan<br />
              rachel.ramkhelawan@gmail.com | linkedin.com/in/rachel-ramkhelawan
            </p>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          @page {
            margin: 0.75in;
            size: letter;
          }

          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
            background: white !important;
          }

          /* Hide everything except print sections */
          body > div > div:not(.resume-section):not(.cover-letter-section) {
            display: none !important;
          }

          .resume-section,
          .cover-letter-section {
            display: block !important;
            padding: 0 !important;
          }

          /* Print only resume */
          body.print-resume-only .cover-letter-section {
            display: none !important;
          }

          /* Print only cover letter */
          body.print-cover-letter-only .resume-section {
            display: none !important;
          }

          /* Typography adjustments */
          h1 {
            font-size: 28pt !important;
          }

          h2 {
            font-size: 14pt !important;
          }

          h3 {
            font-size: 12pt !important;
          }

          p, li, div {
            font-size: 10pt !important;
            line-height: 1.4 !important;
          }
        }
      `}</style>
    </div>
  );
}
