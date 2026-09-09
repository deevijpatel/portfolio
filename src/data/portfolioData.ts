import { 
  ProjectCaseStudy, 
  ProofPoint, 
  ThoughtPrinciple, 
  ExperienceItem, 
  ValueAddArea 
} from '../types';

export const HERO_DATA = {
  name: "DEEVIJ PATEL",
  tagline: "Finance × Strategy × Operations",
  kineticWords: ["Finance.", "Strategy.", "Operations.", "Execution."],
  headline: "I work on problems that sit between numbers, people and execution.",
  supportingCopy: "Finance-trained with experience across financial analysis, CFO Office Services, client management and operations. Currently expanding my business and technology perspective at Masters’ Union.",
  primaryCTA: "View My Work",
  secondaryCTA: "Let's Talk",
  email: "deevij.patel2027@mastersunion.org",
  linkedin: "https://www.linkedin.com/in/deevij-patel/",
  currentStatus: "Available for Founder's Office & Strategy/Ops Roles",
};

export const PROOF_POINTS: ProofPoint[] = [
  {
    value: "$20B+",
    label: "Private Equity AUM Supported",
    sublabel: "Portfolio context across 6+ funds and 50+ SPVs",
    verificationSource: "TresVista CFO Office Services"
  },
  {
    value: "6+",
    label: "Private Equity Funds",
    sublabel: "Comprehensive financial workbook & budget oversight",
    verificationSource: "Institutional PE portfolio"
  },
  {
    value: "50+",
    label: "SPVs & 4 HoldCos",
    sublabel: "Entity-level financial statement & reporting operations",
    verificationSource: "Holding company structures"
  },
  {
    value: "63",
    label: "Firm-Year Observations",
    sublabel: "Empirical econometric panel regression dataset (2014–2022)",
    verificationSource: "Scopus-Indexed YMER Journal (2023)"
  },
  {
    value: "7",
    label: "Indian Oil & Gas Majors",
    sublabel: "Empirical study on green accounting & enterprise profitability",
    verificationSource: "Published Academic Research"
  }
];

export const SELECTED_PROJECTS: ProjectCaseStudy[] = [
  {
    id: "receiptwise",
    number: "01",
    title: "ReceiptWise",
    subtitle: "Expense Management & Receipt Digitization Hub",
    companyOrProduct: "Independent Build",
    category: "Product / Builder",
    positioning: "A personal project exploring a finance-related problem through a digital product.",
    cardCopy: "Exploring a finance problem through product and technology.",
    websiteUrl: "https://receiptwise-expense-hub.ai.studio",
    tags: ["Product Thinking", "Finance Tech", "UX Architecture", "System Design"],
    stats: [
      { label: "Core Focus", value: "Workflow Friction", context: "Addressing manual expense tracking bottlenecks" },
      { label: "Architecture", value: "Full Stack App", context: "Clean ledger reconciliation & expense categorization" },
      { label: "Status", value: "Live Demo", context: "Interactive prototype accessible online" }
    ],
    sections: {
      overview: "ReceiptWise is a personal software project developed to explore how small businesses and individual operators handle receipt tracking, expense classification, and audit readiness without cumbersome enterprise software.",
      problem: "Expense management is traditionally fragmented: physical receipts fade, email invoices get lost, manual entry creates human error, and categorization is often delayed until tax filing season, creating major visibility gaps in cash management.",
      role: "Conceived, designed, and developed the product prototype end-to-end. Made core product architecture decisions, drafted the database structure, designed the user journey, and built the categorization logic.",
      approach: [
        "Mapped the end-user workflow from transaction occurrence to accounting reconciliation.",
        "Engineered an intuitive single-screen interface prioritizing zero-friction capture and automated classification previews.",
        "Built modular expense tagging allowing dynamic filtering across cost centers and tax deductible categories.",
        "Implemented instant financial summaries that bridge raw transaction records with actionable monthly burn rates."
      ],
      output: [
        "Functional, web-accessible prototype hosted on Google AI Studio infrastructure.",
        "Standardized expense schema with category mapping and receipt status tracking.",
        "Clean, responsive interface allowing rapid entry and high-contrast analytical summaries."
      ],
      learned: [
        "Product design requires ruthless prioritization: feature simplicity wins over bloated secondary functionality.",
        "Handling edge cases in categorization requires clear rule hierarchies and fallback mechanisms.",
        "Small friction points in intake drastically reduce compliance in tracking financial records."
      ],
      evidence: {
        verifiedMetrics: [
          { label: "Deployment", value: "Google Cloud Platform", note: "Hosted and accessible online" },
          { label: "Interface", value: "Responsive Web SPA", note: "Optimized for mobile and desktop input" }
        ],
        documentsOrLinks: [
          { title: "Live Product Application", url: "https://receiptwise-expense-hub.ai.studio", note: "Explore the live working interface" }
        ]
      }
    },
    interactiveType: "receiptwise"
  },
  {
    id: "tresvista",
    number: "02",
    title: "TresVista — CFO Office Services",
    subtitle: "Private Equity Portfolio Financial Operations",
    companyOrProduct: "TresVista",
    category: "Finance / Analytics",
    positioning: "Supporting complex financial operations across a $20B+ AUM private equity portfolio.",
    cardCopy: "Complex financial operations across $20B+ AUM, 6+ funds, 4 HoldCos, and 50+ SPVs.",
    tags: ["Financial Modeling", "CFO Office", "PE Operations", "Workbook Analysis"],
    stats: [
      { label: "Portfolio AUM Supported", value: "$20B+", context: "Supported complex financial operations across institutional funds" },
      { label: "Fund Structures", value: "6+ Funds", context: "Multi-entity fund hierarchy" },
      { label: "Entities Managed", value: "50+ SPVs", context: "Special Purpose Vehicles & 4 Holding Companies" }
    ],
    sections: {
      overview: "Served as Financial Analyst II within the CFO Office Services team at TresVista, supporting complex financial operations for institutional private equity clients managing multi-billion dollar portfolios.",
      problem: "Multi-tiered private equity fund structures (spanning holding companies, dozens of SPVs, and multiple capital calls) generate enormous operational complexity. Timely executive decisions depend on error-free financial reconciliations, strict accounting cadence, and institutional-grade analytical discipline.",
      role: "Financial Analyst II responsible for ongoing financial workbook analysis, budgeting schedules, financial statement evaluations, and core CFO Office operational workflows.",
      approach: [
        "Conducted detailed workbook and financial statement analyses across funds, holding companies, and individual SPV levels.",
        "Formulated and reconciled periodic operational budgets, tracking variances against actual capital expenditures.",
        "Executed systematic review processes to verify intercompany balances, fee allocations, and cash positioning.",
        "Partnered with senior management to streamline reporting templates, reducing reconciliation cycle times."
      ],
      output: [
        "Standardized financial analysis workbooks deployed across 6+ active PE funds.",
        "Budget-vs-actual variance schedules facilitating executive decision-making.",
        "Documented process improvements for entity-level statement consolidations."
      ],
      learned: [
        "Extreme analytical discipline: in institutional finance, a single formula inconsistency can cascade through multi-tier consolidations.",
        "Process ownership is critical when coordinating data dependencies across 50+ legal entities.",
        "Financial data is only valuable when transformed into structured, transparent insights for executive decision-makers."
      ],
      evidence: {
        verifiedMetrics: [
          { label: "Portfolio Scale", value: "$20B+ AUM", note: "Institutional private equity mandate" },
          { label: "HoldCos", value: "4 Holding Entities", note: "Intermediate corporate holding structures" },
          { label: "SPVs", value: "50+ Entities", note: "Special Purpose Vehicles reconciled" }
        ],
        documentsOrLinks: [
          { title: "Role Verification", note: "Financial Analyst II — CFO Office Services (2023–2025)" }
        ]
      }
    },
    interactiveType: "tresvista"
  },
  {
    id: "32bytes",
    number: "03",
    title: "32bytes — Operations & Execution",
    subtitle: "Client Servicing, Project Delivery & Process Systems",
    companyOrProduct: "32bytes",
    category: "Operations / Client Management",
    positioning: "Turning client requirements into coordinated execution.",
    cardCopy: "Turning client requirements into coordinated execution across diverse stakeholder groups.",
    tags: ["Client Servicing", "Project Execution", "Process Improvement", "Stakeholder Alignment"],
    stats: [
      { label: "Framework", value: "Challenge → Execution", context: "Standardized delivery consistency" },
      { label: "Discipline", value: "Operations & Servicing", context: "Cross-functional stakeholder coordination" },
      { label: "Focus", value: "Process Ownership", context: "Data-driven delivery optimization" }
    ],
    sections: {
      overview: "Operated as Executive — Operations & Client Servicing at 32bytes, bridging external client demands with internal operational delivery teams to drive reliable project execution.",
      problem: "Client engagements frequently suffer from scope drift, misaligned expectations between technical teams and commercial stakeholders, and ad-hoc communication channels that jeopardize turnaround timelines.",
      role: "Executive managing end-to-end client communications, project milestone tracking, operational coordination, and process standardizations.",
      approach: [
        "Challenge: Rapidly translate high-level client briefs into granular work breakdowns while managing concurrent project timelines.",
        "Approach: Established standardized scoping templates, clear milestone checkpoints, and transparent status dashboards.",
        "Execution: Coordinated daily delivery cycles, eliminated inter-departmental handoff delays, and instituted proactive client check-ins.",
        "Learning: Systematic communication cadences prevent 90% of operational friction before it impacts timelines."
      ],
      output: [
        "Repeatable client onboarding and milestone tracking system.",
        "Structured communication protocols ensuring accountability across client and delivery teams.",
        "Operational retrospective logs that systematically eliminated recurring delivery bottlenecks."
      ],
      learned: [
        "Execution speed depends fundamentally on clarity of communication and unambiguous accountability.",
        "Clients value predictable, transparent progress updates just as much as final deliverable quality.",
        "Operational improvements stick when they reduce friction for the team doing the daily work."
      ],
      evidence: {
        verifiedMetrics: [
          { label: "Timeline", value: "2025–2026", note: "Executive — Operations & Client Servicing" },
          { label: "Domain", value: "Operations & Delivery", note: "Cross-functional team coordination" }
        ],
        documentsOrLinks: [
          { title: "Role Verification", note: "Executive — Operations & Client Servicing (32bytes)" }
        ]
      }
    },
    interactiveType: "32bytes"
  },
  {
    id: "research",
    number: "04",
    title: "Empirical Research: Environmental Accounting",
    subtitle: "The Impact of Environmental Accounting on Profitability: Indian Crude Oil Industry",
    companyOrProduct: "YMER Scopus Journals (May 2023)",
    category: "Research / Finance",
    positioning: "Published empirical research studying green accounting and financial performance across Indian oil & gas majors.",
    cardCopy: "Published empirical study on green accounting & enterprise profitability across 63 firm-year observations.",
    tags: ["Empirical Finance", "Panel Regression", "Scopus Published", "EViews 9.0"],
    stats: [
      { label: "Observations", value: "63 Firm-Years", context: "Panel data spanning 2014 to 2022" },
      { label: "Companies Studied", value: "7 Oil & Gas Majors", context: "Comprehensive Indian crude oil sector analysis" },
      { label: "Journal Index", value: "Scopus YMER", context: "Published peer-reviewed journal — May 2023" }
    ],
    sections: {
      overview: "Authored and published empirical research titled 'The Impact of Environmental Accounting on the Profitability of Indian Crude Oil Industry: An Empirical Study' in YMER (Scopus-indexed journal) in May 2023, co-authored with Dr. Anubha Srivastava.",
      problem: "Does corporate investment into environmental/green accounting practices generate tangible returns in bottom-line financial profitability, or is it primarily a regulatory compliance cost?",
      role: "Co-author responsible for data extraction from annual corporate filings, econometric modeling, statistical tests (normality, Hausman, panel regression in EViews 9.0), and interpretation of analytical findings.",
      approach: [
        "Question: Investigate whether environmental disclosure scores systematically correlate with or drive Return on Assets (ROA) and Return on Capital Employed (ROCE).",
        "Data: Assembled 63 firm-year observations across 7 major Indian crude oil and natural gas corporations covering the 2014–2022 fiscal periods.",
        "Method: Conducted diagnostic tests (Jarque-Bera normality tests, Hausman specification test) to select between Fixed Effects and Random Effects models.",
        "Analysis: Executed Ordinary Least Squares (OLS) and panel regression models utilizing EViews 9.0 software.",
        "Finding: Observed positive raw correlation coefficients between environmental accounting disclosures and both ROA and ROCE; however, rigorous panel regression revealed no statistically significant causal impact on either profitability metric.",
        "Takeaway: Environmental accounting currently operates as a vital compliance/reputational asset rather than an immediate driver of short-term enterprise profitability."
      ],
      output: [
        "Peer-reviewed academic paper published in YMER Scopus-indexed journal (May 2023).",
        "Empirical econometric panel regression dataset and model specification files.",
        "Rigorous quantitative evidence separating correlation assumptions from statistical reality."
      ],
      learned: [
        "Data discipline: Positive correlations frequently dissolve under rigorous econometric control variables.",
        "Independent inquiry: Academic research requires formulating clear hypotheses and letting the empirical data speak without bias.",
        "Connecting macro principles (ESG/Green Accounting) to concrete corporate balance sheets."
      ],
      evidence: {
        verifiedMetrics: [
          { label: "Publication", value: "YMER Journal (May 2023)", note: "Scopus-indexed publication" },
          { label: "Data Span", value: "2014–2022 (9 Years)", note: "7 major Indian oil & gas enterprises" },
          { label: "Sample Size", value: "63 Firm-Year Records", note: "Empirical panel data" }
        ],
        documentsOrLinks: [
          { 
            title: "Published Academic Paper", 
            note: "Co-authors: Dr. Anubha Srivastava & Deevij Patel (YMER Scopus Journals, May 2023)" 
          }
        ]
      }
    },
    interactiveType: "research"
  }
];

export const HOW_I_THINK: ThoughtPrinciple[] = [
  {
    number: "01",
    title: "Understand the Problem",
    statement: "Before solving something, understand what actually needs to be solved.",
    elaboration: "Most organizational waste comes from solving the wrong problem with high efficiency. I start by asking: What is the underlying constraint? Who is impacted? What does success look like in concrete terms?"
  },
  {
    number: "02",
    title: "Follow the Data",
    statement: "Use evidence to separate assumptions from reality.",
    elaboration: "Narratives and intuitions are hypotheses, not conclusions. Whether analyzing $20B+ portfolio structures or econometric regressions, I look for verifiable numbers to pressure-test beliefs."
  },
  {
    number: "03",
    title: "Structure the Ambiguous",
    statement: "Break large, unclear problems into smaller, actionable questions.",
    elaboration: "In Founder’s Office or early-stage environments, mandates rarely come neatly packaged. My instinct is to decompose nebulous objectives into mutually exclusive, actionable workstreams."
  },
  {
    number: "04",
    title: "Move to Execution",
    statement: "A good analysis matters only when it helps someone make a better decision or take action.",
    elaboration: "Insight without delivery is vanity. The objective is always pragmatic momentum: clear communications, structured processes, and measurable business outcomes."
  }
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    id: "masters-union",
    organization: "Masters’ Union",
    role: "Postgraduate Programme — Technology & Business Management",
    period: "2026 – 2027",
    type: "education",
    summary: "Currently pursuing Technology & Business Management at Masters’ Union, expanding my perspective across business, technology and problem-solving.",
    bulletPoints: [
      "Expanding perspectives across modern technology, strategic management, and venture building.",
      "Bridging financial rigor with contemporary digital product development.",
      "Engaged in hands-on industry challenges and cross-functional business execution."
    ],
    badge: "Current Chapter"
  },
  {
    id: "32bytes",
    organization: "32bytes",
    role: "Executive — Operations & Client Servicing",
    period: "2025 – 2026",
    type: "experience",
    summary: "Client management, project execution, stakeholder coordination and process improvement.",
    bulletPoints: [
      "Managed client communications and coordinated multi-stakeholder project milestones.",
      "Standardized operational workflows to improve delivery consistency and turnaround speed.",
      "Identified and resolved delivery bottlenecks through structured operational retrospectives."
    ]
  },
  {
    id: "tresvista",
    organization: "TresVista",
    role: "Financial Analyst II — CFO Office Services",
    period: "2023 – 2025",
    type: "experience",
    summary: "Financial analysis and CFO Office Services supporting a $20B+ AUM private equity portfolio.",
    bulletPoints: [
      "Supported financial analysis, budgeting, and workbook reconciliation across 6+ funds and 50+ SPVs.",
      "Analyzed financial statements and intercompany structures for institutional private equity clients.",
      "Implemented process improvements that enhanced reporting accuracy and operational turnaround."
    ]
  }
];

export const FOUNDERS_OFFICE_FIT: ValueAddArea[] = [
  {
    id: "strategy",
    title: "Strategy",
    shortDesc: "Research, problem structuring and decision support.",
    points: [
      "Translating ambiguous founder visions into structured, research-backed hypotheses.",
      "Competitive landscaping, strategic analysis, and clear executive memos.",
      "Synthesizing qualitative customer signals and market dynamics into decision-ready frameworks."
    ],
    icon: "Compass"
  },
  {
    id: "finance",
    title: "Finance",
    shortDesc: "Financial analysis, business performance and quantitative thinking.",
    points: [
      "Institutional-grade financial workbook analysis, budgeting, and variance tracking.",
      "Unit economics modeling, burn rate forecasting, and working capital analysis.",
      "Separating vanity metrics from cash reality to protect runway and margins."
    ],
    icon: "BarChart3"
  },
  {
    id: "operations",
    title: "Operations",
    shortDesc: "Project execution, coordination and process improvement.",
    points: [
      "Aligning cross-functional stakeholders across engineering, product, and business lines.",
      "Building repeatable operational SOPs, delivery cadences, and review mechanisms.",
      "Diagnosing execution bottlenecks and turning fire-fighting into reliable systems."
    ],
    icon: "Cpu"
  },
  {
    id: "business-expansion",
    title: "Business Expansion",
    shortDesc: "Market research, opportunity analysis and execution support.",
    points: [
      "Sizing emerging addressable markets and evaluating go-to-market channels.",
      "Supporting new geography or product launch logistics and partner negotiations.",
      "Preparing comprehensive business cases and operational readiness checklists."
    ],
    icon: "TrendingUp"
  },
  {
    id: "building",
    title: "Building",
    shortDesc: "Turning ideas into tangible digital experiments and products.",
    points: [
      "Rapidly prototyping digital ideas (e.g., ReceiptWise) to validate user workflows.",
      "Fluent working with modern technology tools, APIs, and product management concepts.",
      "High agency bias for action: testing concepts with real code and functional MVPs."
    ],
    icon: "Layers"
  }
];

export const ABOUT_NARRATIVE = {
  quote: "I like solving business problems where finance, strategy and execution meet.",
  paragraphs: [
    "I started with finance, but my interests have always extended beyond spreadsheets.",
    "My professional experience has taken me through financial analysis and CFO Office Services supporting institutional private equity portfolios, followed by client-facing operations and project execution.",
    "Alongside work, I have explored research and product building — from publishing peer-reviewed empirical research on environmental accounting to building digital tools like ReceiptWise.",
    "Today, I’m interested in roles where the problem isn't neatly defined and where I can move between analysis, strategy and execution."
  ],
  traits: [
    { title: "Analytical Discipline", desc: "Trained on institutional private equity standards where accuracy is non-negotiable." },
    { title: "Operator Mentality", desc: "Comfortable rolling up sleeves to coordinate cross-functional delivery." },
    { title: "Builder Initiative", desc: "Proactively turns ideas into working prototypes and published insights." }
  ]
};
