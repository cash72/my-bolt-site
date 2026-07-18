import type { Guide } from './types';

export const GUIDES: Guide[] = [
  {
    slug: 'how-to-choose-lawn-care-software',
    category: 'buying-guide',
    title: 'How to Choose Lawn Care & Landscaping Software',
    description:
      'A practical framework for picking business software — crew size, maintenance vs install, integrations, and budget. Compare Jobber, LMN, Housecall Pro, and more before you sign an annual contract.',
    readMinutes: 10,
    ctaPath: '/compare/jobber-vs-housecall-pro-landscaping',
    ctaLabel: 'Jobber vs Housecall Pro',
    relatedToolSlugs: ['jobber', 'lmn', 'housecall-pro'],
    relatedGuideSlugs: [
      'solo-landscaper-software-checklist',
      'landscaping-software-pricing-guide',
      'field-service-software-evaluation-checklist',
    ],
    sections: [
      {
        heading: 'Start with your workflow, not the feature list',
        paragraphs: [
          'Maintenance-heavy lawn routes need routing and recurring billing. Design-build shops need estimating and job costing. Matching software to how you actually make money prevents expensive mismatches six months in.',
          'Write down your top three job types — recurring mowing, bed maintenance, hardscape install, snow, treatments — and score each vendor against those workflows first. Feature checklists come second.',
        ],
        bullets: [
          'Solo / 2–5 crew maintenance → [Jobber](/tools/jobber), [FieldPulse](/tools/fieldpulse), or [Housecall Pro](/tools/housecall-pro)',
          'Install + maintenance → [LMN](/tools/lmn) or [SingleOps](/tools/singleops)',
          'Treatment routes → [GorillaDesk](/tools/gorilladesk)',
          'Large multi-crew ops → [Aspire](/tools/aspire)',
        ],
      },
      {
        heading: 'Non-negotiable integrations',
        paragraphs: [
          'QuickBooks (or Xero), card payments, and a usable crew mobile app are table stakes. Verify each before signing annual contracts — a pretty demo does not replace a working QuickBooks sync.',
          'Ask vendors for a sandbox trial with your real chart of accounts. Test one invoice, one payment, and one crew clock-in before you import 200 clients.',
        ],
        bullets: [
          'Accounting sync: QuickBooks Online is the industry default',
          'Payments: native processing vs Stripe/Square add-on',
          'Mobile: offline mode matters in rural routes with weak cell signal',
          'Maps: route optimization quality varies widely at the $50/mo tier',
        ],
      },
      {
        heading: 'Crew size and growth path',
        paragraphs: [
          'Solo operators should optimize for speed — quotes in the truck, invoices same day, routes on a phone. Growing to 3–5 crews means dispatch boards, role permissions, and per-user pricing that scales predictably.',
          'If you plan to add an estimator or office manager within 12 months, pick software with real office roles now. Switching at 8 crew members is painful.',
          'See our [solo landscaper checklist](/guides/solo-landscaper-software-checklist) and [pricing guide](/guides/landscaping-software-pricing-guide) for tier-by-tier costs.',
        ],
      },
      {
        heading: 'Demo day scorecard',
        paragraphs: [
          'Run the same scenario in every demo: create a recurring mowing client, schedule 4 weekly visits, dispatch to a crew phone, complete the job, invoice with card payment, and confirm QuickBooks sync.',
          'Score each step 1–5. Any step below 3 is a red flag. Compare head-to-head in our [Jobber vs Housecall Pro](/compare/jobber-vs-housecall-pro-landscaping) and [LMN vs Jobber](/compare/lmn-vs-jobber-landscaping) guides.',
        ],
        bullets: [
          'Time to first quote under 15 minutes?',
          'Crew app usable with gloves and sunlight glare?',
          'Recurring billing handles seasonal pauses?',
          'Support response under 24 hours on billing issues?',
        ],
      },
      {
        heading: 'When to choose landscape-specific vs generic FSM',
        paragraphs: [
          'Generic field service tools (Jobber, Housecall Pro) win on polish and price for residential maintenance. Landscape-specific platforms (LMN, Aspire, SingleOps) win when estimating, job costing, and enhancement divisions drive profit.',
          'If more than 30% of revenue is install or design-build, evaluate [when to upgrade to LMN](/guides/when-to-upgrade-to-lmn) before locking into a maintenance-first stack.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How much should a small landscaper spend on software?',
        answer:
          'Most solos and small crews land between $40–$120/mo total. Enterprise tools like LMN or Aspire cost more but pay off at scale with 6+ crew and install estimating complexity.',
      },
      {
        question: 'Should I pick software before hiring my first employee?',
        answer:
          'Yes — choose a platform that supports 2–5 users without a painful migration. Jobber and Housecall Pro both scale from solo to small crew; verify per-user pricing on the tier you need at 5 users.',
      },
      {
        question: 'Can I use spreadsheets instead of software?',
        answer:
          'Spreadsheets work under ~30 recurring clients. Past that, missed invoices, route chaos, and payroll disputes cost more than $50/mo in software. Migrate before peak season, not during it.',
      },
    ],
  },
  {
    slug: 'landscaping-software-pricing-guide',
    category: 'pricing',
    title: 'Landscaping Software Pricing Guide (2026)',
    description:
      'What lawn care and landscape business software actually costs — per-user tiers, hidden fees, payment processing, and total monthly spend by crew size.',
    readMinutes: 9,
    relatedToolSlugs: ['jobber', 'housecall-pro', 'lmn', 'fieldpulse'],
    relatedGuideSlugs: ['how-to-choose-lawn-care-software', 'solo-landscaper-software-checklist'],
    sections: [
      {
        heading: 'Typical monthly ranges by crew size',
        paragraphs: [
          'Solo operators: $39–$79/mo on entry tiers (FieldPulse, Jobber Core, Housecall Pro Basic). Small crews (3–5): $120–$250/mo once per-user fees stack. Mid-size maintenance (6–15): $250–$600/mo. Enterprise landscape (15+ with estimating): $400–$1,200+/mo.',
          'These are software subscription costs only — add 2.5–3.5% payment processing on card volume if you use native merchant services.',
        ],
        bullets: [
          'Solo: $40–$80/mo all-in software',
          '3–5 crew: $120–$250/mo',
          '6–15 crew: $250–$600/mo',
          'Install-heavy with LMN/Aspire: $200–$1,000+/mo',
        ],
      },
      {
        heading: 'Per-user vs flat pricing',
        paragraphs: [
          'Jobber and Housecall Pro charge per office/field user on higher tiers. LMN and Aspire often price by company size modules. FieldPulse stays flat per account on lower tiers — attractive for solos testing software.',
          'Model your cost at 12-month headcount, not today. Adding two crew leaders in spring can double your bill on per-seat plans.',
        ],
      },
      {
        heading: 'Hidden costs to ask about',
        paragraphs: [
          'SMS fees, marketing add-ons, QuickBooks sync on lower tiers, GPS tracking surcharges, and onboarding/training packages. Get a written quote for your exact user count and modules.',
          'Annual prepay discounts (10–20%) are common — but only commit after a 30-day live trial on real routes.',
        ],
        bullets: [
          'Payment processing: compare native rates vs your existing processor',
          'SMS reminders: per-message fees add up past 500 clients',
          'Data migration: some vendors charge for onboarding help',
          'API or Zapier access: may require top tier',
        ],
      },
      {
        heading: 'ROI math for owner-operators',
        paragraphs: [
          'If software saves 3 hours/week of admin ($45/hr owner time), that is ~$540/mo in labor value. Faster invoicing often cuts days-sales-outstanding by a week — real cash flow impact.',
          'Use our [software evaluation checklist](/guides/field-service-software-evaluation-checklist) to justify the spend against measurable outcomes, not feature envy.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is free landscaping software worth it?',
        answer:
          'Free tiers cap clients, users, or features quickly. Fine for testing; not for 50+ recurring accounts. Budget at least $49/mo for a production-ready stack.',
      },
      {
        question: 'Why is LMN so much more expensive than Jobber?',
        answer:
          'LMN includes estimating, budgeting, job costing, and industry-specific workflows Jobber does not target. You pay for depth on install and commercial landscape, not mowing routes alone.',
      },
      {
        question: 'Can I negotiate landscaping software pricing?',
        answer:
          'Annual contracts and multi-year deals are negotiable, especially at 10+ users. Solos rarely get custom pricing — use published tiers and seasonal promos instead.',
      },
    ],
  },
  {
    slug: 'when-to-upgrade-to-lmn',
    category: 'comparison',
    title: 'When to Upgrade from Jobber to LMN',
    description:
      'Signs your landscape company has outgrown maintenance-first software — estimating complexity, job costing needs, and the real cost of switching.',
    readMinutes: 9,
    ctaPath: '/compare/lmn-vs-jobber-landscaping',
    ctaLabel: 'LMN vs Jobber',
    relatedToolSlugs: ['lmn', 'jobber', 'singleops'],
    relatedGuideSlugs: ['design-build-estimating-software-landscape', 'migrating-landscape-business-software'],
    sections: [
      {
        heading: 'Clear signals you need LMN',
        paragraphs: [
          'Your estimator lives in Excel with separate labor, material, and subcontractor tabs. You cannot answer “did we make money on that patio job?” until QuickBooks closes the month.',
          'You run snow, maintenance, and install as separate profit centers but one software treats everything as flat-price visits.',
        ],
        bullets: [
          'Install revenue exceeds 30% of total sales',
          'Proposals need detailed line-item labor and material budgets',
          'You bid commercial maintenance with real job costing',
          'Multiple divisions need separate P&L visibility',
        ],
      },
      {
        heading: 'What Jobber still does better',
        paragraphs: [
          'Jobber wins on speed, mobile UX, and price for pure maintenance. If 80% of revenue is recurring mowing and bed work, LMN’s learning curve may not pay back.',
          'Read our full [LMN vs Jobber comparison](/compare/lmn-vs-jobber-landscaping) before assuming upgrade is mandatory.',
        ],
      },
      {
        heading: 'Migration timing',
        paragraphs: [
          'Switch in the off-season — November through February for most northern markets. Avoid mid-spring when routes peak and estimators are slammed.',
          'Plan 4–8 weeks: data export, chart of accounts mapping, estimator training, and parallel run on one division before full cutover. See [migration guide](/guides/migrating-landscape-business-software).',
        ],
      },
      {
        heading: 'Alternatives between Jobber and LMN',
        paragraphs: [
          '[SingleOps](/tools/singleops) targets design-build with strong proposals at a lower entry than LMN. [Aspire](/tools/aspire) fits large multi-branch operations. Evaluate all three if install is growing but crew count is under 15.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I run Jobber and LMN together?',
        answer:
          'Some companies use LMN for estimating and Jobber for maintenance routing — but dual systems create double entry. Prefer one platform unless divisions are truly separate legal entities.',
      },
      {
        question: 'How long does LMN take to learn?',
        answer:
          'Estimators typically need 2–4 weeks daily use before faster than spreadsheets. Budget vendor training hours and an internal champion who owns the chart of templates.',
      },
      {
        question: 'Is LMN worth it for a 3-person install crew?',
        answer:
          'If average install tickets exceed $5,000 and you track budget vs actual, often yes. If installs are small upsells on maintenance routes, Jobber plus a spreadsheet may suffice another year.',
      },
    ],
  },
  {
    slug: 'route-optimization-lawn-care-software',
    category: 'operations',
    title: 'Route Optimization Software for Lawn Care',
    description:
      'How recurring route software saves fuel and crew hours — density, day grouping, GPS tracking, and which platforms handle high-volume mowing routes best.',
    readMinutes: 8,
    relatedToolSlugs: ['service-autopilot', 'jobber', 'gorilladesk', 'housecall-pro'],
    relatedGuideSlugs: ['recurring-billing-lawn-care-software', 'how-to-choose-lawn-care-software'],
    sections: [
      {
        heading: 'What route optimization actually means',
        paragraphs: [
          'At minimum: grouping clients by day and geography, driving order on a map, and minimizing backtracking. Advanced: auto-rebalancing when you add a new stop mid-week or a crew calls out.',
          '50 lawns/week spread randomly costs 2–4 extra driving hours vs a dense Tuesday/Thursday split. That is $50–$120/week in fuel and labor at typical rates.',
        ],
      },
      {
        heading: 'Platform strengths',
        paragraphs: [
          '[Service Autopilot](/tools/service-autopilot) leads on automation for high-volume recurring routes — rules-based scheduling and renewal workflows.',
          '[Jobber](/tools/jobber) balances route maps with modern UX for small and mid crews. [GorillaDesk](/tools/gorilladesk) adds treatment-stop sequencing for lawn care chemical routes.',
          'See our [best route software picks](/best/best-lawn-care-route-software) for side-by-side notes.',
        ],
        bullets: [
          'Drag-and-drop route reorder on mobile',
          'One-click “optimize route” vs manual only',
          'Handles rain delays and skip-a-week billing',
          'GPS proof-of-service for commercial contracts',
        ],
      },
      {
        heading: 'Setting up routes in week one',
        paragraphs: [
          'Import clients with correct addresses — bad geocoding wastes more time than weak algorithms. Assign service frequency (weekly, biweekly, 10-day) before optimizing order.',
          'Cluster new sales into existing days instead of opening new route days until density justifies it.',
        ],
      },
      {
        heading: 'Measuring improvement',
        paragraphs: [
          'Track drive time per crew per day before and after software. Target 10–15% reduction in month one. Pair route tools with [recurring billing setup](/guides/recurring-billing-lawn-care-software) so schedule changes sync to invoices automatically.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does Google Maps replace route software?',
        answer:
          'Maps helps one driver today — not recurring client lists, visit history, or automatic rescheduling when a property skips service. FSM software owns the customer record; maps are navigation only.',
      },
      {
        question: 'How many lawns justify route software?',
        answer:
          'Past 25–30 recurring stops, manual route planning breaks down. Most platforms pay for themselves by 40 accounts when you include faster invoicing.',
      },
      {
        question: 'Can route software handle snow and mowing?',
        answer:
          'Yes — use separate route templates or job types. LMN and Service Autopilot handle hybrid snow/landscape shops well; verify seasonal pause billing for summer mowing vs winter plowing.',
      },
    ],
  },
  {
    slug: 'quickbooks-integration-landscape-software',
    category: 'operations',
    title: 'QuickBooks Integration for Landscape Companies',
    description:
      'How FSM-to-QuickBooks sync works, common failure points, and what to verify before choosing Jobber, Housecall Pro, LMN, or Aspire.',
    readMinutes: 8,
    relatedToolSlugs: ['jobber', 'housecall-pro', 'lmn', 'aspire'],
    relatedGuideSlugs: ['recurring-billing-lawn-care-software', 'how-to-choose-lawn-care-software'],
    sections: [
      {
        heading: 'What should sync automatically',
        paragraphs: [
          'Clients, invoices, payments, and service items should flow without double entry. Best setups also map tax codes and income accounts by service type — maintenance vs install vs snow.',
          'Payroll may stay in QuickBooks or Gusto — confirm whether crew time exports as labor costs or just hours.',
        ],
        bullets: [
          'Customer create/update both directions',
          'Invoice push on job completion',
          'Payment reconciliation with deposit accounts',
          'Product/service item mapping for P&L detail',
        ],
      },
      {
        heading: 'Integration quality by platform',
        paragraphs: [
          '[Jobber](/tools/jobber) and [Housecall Pro](/tools/housecall-pro) offer solid QuickBooks Online sync on mid tiers — verify on your plan level before purchase.',
          '[LMN](/tools/lmn) and [Aspire](/tools/aspire) sync deeper job costing data — critical when your accountant asks for WIP and earned revenue by job.',
        ],
      },
      {
        heading: 'Testing before go-live',
        paragraphs: [
          'Create a test customer, complete a $1 job, invoice, take a test payment, and confirm the deposit hits the right QuickBooks account. Break the test on purpose — delete a line item — and see if sync recovers.',
          'Document your chart of accounts mapping in a shared sheet your bookkeeper approves.',
        ],
      },
      {
        heading: 'When sync is not enough',
        paragraphs: [
          'Multi-entity holdings, franchise structures, or heavy inventory may need QuickBooks Advanced or an ERP bridge. At that scale, involve your CPA in software selection — not just the owner’s demo preference.',
        ],
      },
    ],
    faqs: [
      {
        question: 'QuickBooks Desktop or Online for landscapers?',
        answer:
          'Online integrates with modern FSM tools natively. Desktop requires middleware and breaks more often — migrate to QBO if your software stack is cloud-first.',
      },
      {
        question: 'Why do invoices duplicate in QuickBooks?',
        answer:
          'Usually mismatched sync settings or manual invoices created in both systems. Pick one system as invoice source of truth — almost always the FSM platform.',
      },
      {
        question: 'Does two-way sync matter?',
        answer:
          'One-way FSM → QuickBooks is fine for most small crews. Two-way helps when office staff edit customer records in QuickBooks and need changes in the field app.',
      },
    ],
  },
  {
    slug: 'mobile-app-landscape-crew-management',
    category: 'operations',
    title: 'Mobile Apps for Landscape Crew Management',
    description:
      'What crews need in the field — job details, photos, clock-in, offline mode, and how to pick software your team will actually use.',
    readMinutes: 8,
    relatedToolSlugs: ['jobber', 'fieldpulse', 'housecall-pro', 'lmn'],
    relatedGuideSlugs: ['route-optimization-lawn-care-software', 'field-service-software-evaluation-checklist'],
    sections: [
      {
        heading: 'Crew app essentials',
        paragraphs: [
          'Today’s route list, gate codes, service notes, before/after photos, and one-tap job complete. If any step needs more than 3 taps, adoption dies.',
          'Spanish language support and large touch targets matter for mixed crews working in gloves and bright sun.',
        ],
        bullets: [
          'Offline access to today’s schedule',
          'Photo upload with automatic job attachment',
          'Time tracking or clock-in per job',
          'Chemical application logging (if treatments)',
        ],
      },
      {
        heading: 'Owner vs crew permissions',
        paragraphs: [
          'Crew leads need edit notes and add upsells; mowers may only need view-and-complete. Test permission roles before rollout — owners hate oversharing pricing with field staff.',
        ],
      },
      {
        heading: 'Rollout that sticks',
        paragraphs: [
          'Pilot with your best crew lead for two weeks. Fix friction before company-wide launch. Pair the app with a simple paper backup card for week one so routes do not stop if someone forgets a password.',
          'Compare mobile UX in our [Jobber vs Housecall Pro](/compare/jobber-vs-housecall-pro-landscaping) review — both invest heavily in crew apps.',
        ],
      },
      {
        heading: 'Devices and data plans',
        paragraphs: [
          'Company phones vs BYOD affects GPS tracking policies. Budget rugged cases and car chargers — dead phones are the #1 field software failure mode.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do crews resist mobile apps?',
        answer:
          'They resist slow, confusing apps — not phones. Choose software with a clean crew view, train on one workflow, and stop accepting paper tickets except as backup.',
      },
      {
        question: 'Is offline mode necessary?',
        answer:
          'Yes for rural routes and large commercial properties with weak signal. Test offline in your actual service area, not just the vendor’s demo video.',
      },
      {
        question: 'Should I buy tablets for every truck?',
        answer:
          'Phones suffice for most maintenance crews. Tablets help design-build foremen reviewing plans — separate use case from mowing route apps.',
      },
    ],
  },
  {
    slug: 'recurring-billing-lawn-care-software',
    category: 'operations',
    title: 'Recurring Billing Setup for Lawn Care Companies',
    description:
      'Automate monthly mowing invoices, seasonal pauses, card-on-file, and failed payment recovery — without angering residential clients.',
    readMinutes: 8,
    relatedToolSlugs: ['housecall-pro', 'jobber', 'service-autopilot', 'gorilladesk'],
    relatedGuideSlugs: ['route-optimization-lawn-care-software', 'quickbooks-integration-landscape-software'],
    sections: [
      {
        heading: 'Recurring contract models',
        paragraphs: [
          'Flat monthly billing (28-day cycles) vs per-visit billing after service. Monthly smooths cash flow; per-visit matches actual skips during drought or vacation.',
          'Document skip policies in writing before auto-charging cards — disputes spike when clients expect pause weeks without calling.',
        ],
        bullets: [
          'Monthly flat rate — best for dense residential routes',
          'Per-visit auto-invoice — best when skip frequency is high',
          'Seasonal contracts — spring start, winter pause dates preset',
          'Commercial per-occurrence with PO numbers',
        ],
      },
      {
        heading: 'Card-on-file best practices',
        paragraphs: [
          '[Housecall Pro](/tools/housecall-pro) emphasizes payments natively; [Jobber](/tools/jobber) integrates processors cleanly. Collect cards at signup with explicit authorization language.',
          'Retry failed cards automatically on day 3 and day 7 — then call. Silent failures cost thousands in unbilled summer revenue.',
        ],
      },
      {
        heading: 'Syncing visits to invoices',
        paragraphs: [
          'Recurring schedules should generate visit instances crew complete in the field, then invoice rules fire. If billing is decoupled from completion, you invoice properties you never mowed.',
          'Pair billing setup with [QuickBooks integration](/guides/quickbooks-integration-landscape-software) so deposits reconcile nightly.',
        ],
      },
      {
        heading: 'Seasonal pauses and proration',
        paragraphs: [
          'Set winter pause dates for snow-only or dormant turf markets. Configure proration for mid-month starts — new clients hate full-month charges for half service.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Should lawn care bill monthly or per cut?',
        answer:
          'Monthly improves cash flow and reduces admin. Per cut is fairer when service frequency changes often. Many companies offer monthly with written skip credits.',
      },
      {
        question: 'How do I handle failed autopay?',
        answer:
          'Automated retry, SMS notice, then service hold after 14 days past due. Enforce consistently — selective enforcement trains non-payment.',
      },
      {
        question: 'Do clients prefer autopay?',
        answer:
          'Most residential clients prefer autopay if you explain it clearly at signup. Offer manual invoice as a premium “pay by check” option if needed.',
      },
    ],
  },
  {
    slug: 'design-build-estimating-software-landscape',
    category: 'buying-guide',
    title: 'Design-Build Estimating Software for Landscapers',
    description:
      'Proposal templates, labor budgets, material catalogs, and job costing — how LMN, SingleOps, and Aspire compare for install-heavy companies.',
    readMinutes: 9,
    relatedToolSlugs: ['lmn', 'singleops', 'aspire'],
    relatedGuideSlugs: ['when-to-upgrade-to-lmn', 'landscaping-software-pricing-guide'],
    sections: [
      {
        heading: 'Beyond line-item quotes',
        paragraphs: [
          'Install estimating needs labor hours by task, material quantities with waste factors, equipment charges, and subcontractor placeholders. Maintenance quotes are flat; install estimates are structured takeoffs.',
          'If your proposals are still Word docs with guessed totals, you are leaving margin on the table.',
        ],
      },
      {
        heading: 'Platform fit',
        paragraphs: [
          '[LMN](/tools/lmn) is the industry reference for landscape estimating and budgeting. [SingleOps](/tools/singleops) offers strong proposals with a gentler learning curve for mid-size design-build.',
          '[Aspire](/tools/aspire) scales to multi-branch operations with complex approval workflows.',
        ],
        bullets: [
          'Template libraries for patios, plantings, irrigation',
          'Budget vs actual job costing post-closeout',
          'Versioned proposals with change orders',
          'Integration to purchasing and vendor invoices',
        ],
      },
      {
        heading: 'Estimator workflow',
        paragraphs: [
          'Site visit photos → template pick → quantity adjust → labor crew-day calc → margin overlay → client-facing PDF. Software should cut proposal time 30–50% vs spreadsheets at maturity.',
          'Read [when to upgrade to LMN](/guides/when-to-upgrade-to-lmn) if you are hitting spreadsheet limits on install volume.',
        ],
      },
      {
        heading: 'Selling the upgrade internally',
        paragraphs: [
          'Show owners the cost of one underbid patio — often $2,000–$5,000 — vs $200/mo software. Estimators become the internal champion when templates save them Sunday nights.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can Jobber handle landscape install estimates?',
        answer:
          'Jobber handles basic line-item quotes fine for small upsells. Complex install takeoffs with labor budgets need LMN, SingleOps, or Aspire.',
      },
      {
        question: 'How long to build estimate templates?',
        answer:
          'Start with your three most common jobs — planting bed, patio, drainage. Budget 2–3 days per template in the first month, then reuse.',
      },
      {
        question: 'Do clients care about software-branded proposals?',
        answer:
          'Clients care about clarity, photos, and timeline — not the tool. Professional PDFs with detailed scope reduce change-order disputes.',
      },
    ],
  },
  {
    slug: 'lawn-treatment-chemical-tracking',
    category: 'operations',
    title: 'Lawn Treatment & Chemical Tracking Software',
    description:
      'Pesticide application records, property measurements, routing by treatment type, and compliance — why treatment companies choose GorillaDesk and similar tools.',
    readMinutes: 8,
    relatedToolSlugs: ['gorilladesk', 'service-autopilot', 'jobber'],
    relatedGuideSlugs: ['route-optimization-lawn-care-software', 'mobile-app-landscape-crew-management'],
    sections: [
      {
        heading: 'Why generic FSM falls short',
        paragraphs: [
          'Treatment routes need product rates per 1,000 sq ft, weather hold rules, re-entry intervals, and state-specific application logs. Mowing software treats every visit the same.',
          'Regulatory audits ask for date, product, rate, applicator license, and property square footage — not just “job complete.”',
        ],
      },
      {
        heading: 'GorillaDesk and alternatives',
        paragraphs: [
          '[GorillaDesk](/tools/gorilladesk) is built for lawn treatment and pest routes — chemical inventory, measurement tools, and compliance reporting.',
          '[Service Autopilot](/tools/service-autopilot) handles high-volume treatment automation. [Jobber](/tools/jobber) works only for light fertilization upsells without strict compliance needs.',
        ],
        bullets: [
          'Product catalog with EPA numbers',
          'Automatic sq ft from property maps',
          'Wind/speed weather notes on application',
          'Customer post-service instructions via email',
        ],
      },
      {
        heading: 'Measurement accuracy',
        paragraphs: [
          'Bad square footage equals wrong product rates — legal and financial risk. Integrate measurement tools or import from aerial sources; verify on first visit.',
        ],
      },
      {
        heading: 'Upselling maintenance bundles',
        paragraphs: [
          'Treatment companies often add mowing or aeration. Ensure your platform can bill different service lines without duplicate customer records — or use QuickBooks classes for reporting.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is chemical tracking required by law?',
        answer:
          'Most states require commercial applicators to maintain application records for years. Software beats paper when inspectors request property history.',
      },
      {
        question: 'Can GorillaDesk handle mowing too?',
        answer:
          'Yes for basic mowing routes, but its strength is treatments. Hybrid shops should demo both treatment logging and maintenance scheduling before committing.',
      },
      {
        question: 'Do I need GPS for every spray event?',
        answer:
          'GPS proof helps disputes; regulatory requirements vary by state. Log applicator, product, rate, and time at minimum.',
      },
    ],
  },
  {
    slug: 'solo-landscaper-software-checklist',
    category: 'buying-guide',
    title: 'Solo Landscaper Software Checklist',
    description:
      'The 12 features a one-person lawn or landscape business actually needs — and affordable picks that do not require a full office staff to configure.',
    readMinutes: 8,
    ctaPath: '/best/best-software-solo-landscaper',
    ctaLabel: 'Best software for solos',
    relatedToolSlugs: ['jobber', 'fieldpulse', 'housecall-pro', 'gorilladesk'],
    relatedGuideSlugs: ['how-to-choose-lawn-care-software', 'landscaping-software-pricing-guide'],
    sections: [
      {
        heading: 'Must-have features for solos',
        paragraphs: [
          'Fast quotes on phone, recurring visit scheduling, one-tap invoices, card payments, and QuickBooks export. Skip enterprise modules until you hire office help.',
        ],
        bullets: [
          'Client texting and automated reminders',
          'Route map for today’s stops',
          'Photo attachments on jobs',
          'Simple P&L via QuickBooks sync',
          'Online booking or request form (optional but high ROI)',
        ],
      },
      {
        heading: 'Best picks for 2026',
        paragraphs: [
          'See our full [best software for solo landscapers](/best/best-software-solo-landscaper) page. [Jobber](/tools/jobber) leads on polish. [FieldPulse](/tools/fieldpulse) on budget entry. [Housecall Pro](/tools/housecall-pro) if payments day one matter most.',
        ],
      },
      {
        heading: 'What solos should skip',
        paragraphs: [
          'Multi-crew dispatch boards, job costing dashboards, and chemical compliance suites — unless your solo business is actually treatment-focused. Do not pay for [LMN](/tools/lmn) until you have an estimator who is not you.',
        ],
      },
      {
        heading: '30-day solo rollout plan',
        paragraphs: [
          'Week 1: import top 20 clients and set recurring schedules. Week 2: enable card payments and test one invoice to QuickBooks. Week 3: move all new quotes into software only. Week 4: migrate remaining clients and turn off spreadsheet invoicing.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the cheapest software for a solo landscaper?',
        answer:
          'FieldPulse and similar entry tiers start under $40/mo. Jobber Core is ~$49/mo — often worth the extra polish if you quote daily.',
      },
      {
        question: 'Do I need software as a solo if I use QuickBooks?',
        answer:
          'QuickBooks invoices but does not schedule routes, store gate codes, or send “on my way” texts. FSM software is the operational layer QuickBooks is not.',
      },
      {
        question: 'When should a solo hire office help vs buy better software?',
        answer:
          'Past 60–80 recurring clients, part-time office help plus mid-tier software beats hero-mode owner admin. Software first if cash is tight.',
      },
    ],
  },
  {
    slug: 'migrating-landscape-business-software',
    category: 'operations',
    title: 'Migrating Your Landscape Business to New Software',
    description:
      'Step-by-step data migration — clients, schedules, pricing, and how to run parallel systems without losing a spring season.',
    readMinutes: 9,
    relatedToolSlugs: ['jobber', 'lmn', 'housecall-pro'],
    relatedGuideSlugs: ['when-to-upgrade-to-lmn', 'field-service-software-evaluation-checklist'],
    sections: [
      {
        heading: 'Migration timeline overview',
        paragraphs: [
          'Plan 4–8 weeks for mid-size databases (200–1,000 clients). Export customers, service schedules, pricing, and open AR from the old system. Clean duplicates before import — garbage in means angry clients out.',
        ],
        bullets: [
          'Week 1–2: export and clean data',
          'Week 3: pilot division or route in new system',
          'Week 4–5: train crew and office',
          'Week 6: full cutover, read-only old system',
        ],
      },
      {
        heading: 'What migrates cleanly vs manually',
        paragraphs: [
          'Customer contact info and billing addresses migrate well. Historical job notes and custom fields often break — budget manual cleanup. Open invoices may need parallel collection in old system until paid.',
        ],
      },
      {
        heading: 'Common failure modes',
        paragraphs: [
          'Cutting over opening day of spring rush. Training only the owner, not crew leads. Keeping two live billing systems without rules about which is authoritative.',
          'If upgrading from Jobber to [LMN](/tools/lmn), read [when to upgrade](/guides/when-to-upgrade-to-lmn) for division-specific timing.',
        ],
      },
      {
        heading: 'Client communication',
        paragraphs: [
          'Email clients about new payment links and portal changes. One clear notice beats confused autopay failures. Update card-on-file authorization forms if processor changes.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Will vendors migrate data for me?',
        answer:
          'Many offer paid onboarding packages. DIY CSV import works for under 150 clients if you are spreadsheet-comfortable. Pay for help if AR history must be perfect.',
      },
      {
        question: 'Can I migrate mid-season?',
        answer:
          'Possible but risky. If forced, migrate one service line at a time — e.g., maintenance first, install proposals later.',
      },
      {
        question: 'How do I avoid losing recurring schedules?',
        answer:
          'Export next 60 days of visits explicitly. Verify visit count matches in new system before crew uses mobile app live.',
      },
    ],
  },
  {
    slug: 'field-service-software-evaluation-checklist',
    category: 'buying-guide',
    title: 'Field Service Software Evaluation Checklist',
    description:
      'Printable scorecard for landscaping software demos — weighted criteria, red flags, and how to compare vendors objectively.',
    readMinutes: 8,
    relatedToolSlugs: ['jobber', 'housecall-pro', 'lmn', 'service-autopilot'],
    relatedGuideSlugs: ['how-to-choose-lawn-care-software', 'landscaping-software-pricing-guide'],
    sections: [
      {
        heading: 'Weighted scoring categories',
        paragraphs: [
          'Score each vendor 1–5 on: routing (20%), mobile crew app (20%), invoicing/payments (20%), estimating fit (15%), QuickBooks sync (15%), support/onboarding (10%). Multiply by weight for a total out of 5.',
        ],
        bullets: [
          'Routing: recurring schedules, map optimize, skip handling',
          'Mobile: offline, photos, speed',
          'Billing: autopay, retries, taxes',
          'Estimating: templates, margins, change orders',
          'Accounting: QBO sync depth, deposit mapping',
        ],
      },
      {
        heading: 'Red flags in demos',
        paragraphs: [
          '“That’s on the roadmap” for QuickBooks or autopay. Cannot show crew view on a real phone. Pricing requires a sales call with no public tiers. No export path for your data if you leave.',
        ],
      },
      {
        heading: 'Reference calls that matter',
        paragraphs: [
          'Ask vendors for a reference with similar crew size and service mix — not just their biggest enterprise logo. Ask that reference what broke in year one.',
          'Cross-check picks in our [Jobber alternatives](/alternatives/jobber-alternatives-landscaping) and [Housecall Pro alternatives](/alternatives/housecall-pro-alternatives) lists.',
        ],
      },
      {
        heading: 'Final decision rule',
        paragraphs: [
          'If two vendors tie within 0.3 points, pick the one your crew lead prefers mobile UX on. Adoption beats theoretical features. Start with [how to choose lawn care software](/guides/how-to-choose-lawn-care-software) for workflow fit before scoring.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How many vendors should I demo?',
        answer:
          'Three is ideal — one maintenance-focused (Jobber), one payments-heavy (Housecall Pro), one landscape-specific (LMN or SingleOps) if install matters.',
      },
      {
        question: 'Should I involve my crew lead in demos?',
        answer:
          'Yes for the final two finalists. Crew rejection is the hidden cost of owner-only software purchases.',
      },
      {
        question: 'How long should a trial run?',
        answer:
          'Minimum 14 days with real clients and real routes. Vendor sandboxes lie; your Tuesday route does not.',
      },
    ],
  },
{
    slug: 'snow-removal-billing-software',
    category: 'operations',
    title: 'Snow Removal Billing Software: Per-Push, Seasonal & Event Invoicing',
    description:
      'How landscape and snow contractors automate per-push billing, seasonal contracts, salt logs, and QuickBooks sync — without double-entering every storm.',
    readMinutes: 9,
    relatedToolSlugs: ['lmn', 'aspire', 'service-autopilot', 'jobber'],
    relatedGuideSlugs: ['recurring-billing-lawn-care-software', 'quickbooks-integration-landscape-software', 'how-to-choose-lawn-care-software'],
    sections: [
      {
        heading: 'Snow billing models that break spreadsheets',
        paragraphs: [
          'Per-push, per-inch tiers, seasonal flat rates, and time-and-materials salt runs rarely fit one invoice template. Software should trigger billing from completed visits — not a Sunday night CSV export after every storm.',
          'Hybrid shops running summer maintenance and winter snow need separate contract types in one customer record. See [recurring billing for lawn care](/guides/recurring-billing-lawn-care-software) for shared autopay patterns that carry into snow season.',
        ],
        bullets: [
          'Per-push auto-invoice on job complete',
          'Seasonal contract with included pushes + overage rates',
          'Multi-property commercial with site-specific pricing',
          'Salt/material pass-through line items',
        ],
      },
      {
        heading: 'Platform fit for snow-heavy contractors',
        paragraphs: [
          '[LMN](/tools/lmn) and [Aspire](/tools/aspire) handle commercial snow with division-level reporting — strong when plow and landscape share one P&L. [Service Autopilot](/tools/service-autopilot) automates high-volume residential per-push billing.',
          '[Jobber](/tools/jobber) works for smaller mixed shops if you configure visit-based invoicing and storm-day dispatch — verify per-event billing in a live trial before peak season.',
        ],
      },
      {
        heading: 'Storm-day workflow and QuickBooks',
        paragraphs: [
          'Crew completes push in mobile app → GPS timestamp and photos attach → invoice rules fire by contract type → deposit syncs to QuickBooks overnight. Breaks happen when snow visits are logged but billing rules still reference summer mowing cycles.',
          'Test one fake storm in November: dispatch, complete, invoice, payment, QBO deposit. Full sync checklist in [QuickBooks integration for landscape companies](/guides/quickbooks-integration-landscape-software).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can Jobber handle snow removal billing?',
        answer:
          'Yes for per-visit and seasonal contracts at smaller scale. Commercial multi-site snow with complex tiers often needs LMN or Aspire.',
      },
      {
        question: 'How do I bill per-inch snowfall automatically?',
        answer:
          'Few platforms measure inches automatically — most owners select tier in office or crew picks tier in app after service. Define tiers in contract templates before first storm.',
      },
      {
        question: 'Should snow and mowing use separate software?',
        answer:
          'One system is ideal if billing models coexist cleanly. Dual systems create double entry unless divisions are truly separate entities.',
      },
    ],
  },
  {
    slug: 'job-costing-landscape-install-projects',
    category: 'operations',
    title: 'Job Costing for Landscape Install Projects',
    description:
      'Track budget vs actual on patios, plantings, and hardscape — labor, materials, subs, and when maintenance-first software stops answering “did we make money?”',
    readMinutes: 10,
    relatedToolSlugs: ['lmn', 'singleops', 'aspire'],
    relatedGuideSlugs: ['design-build-estimating-software-landscape', 'when-to-upgrade-to-lmn', 'quickbooks-integration-landscape-software'],
    sections: [
      {
        heading: 'Why job costing matters on install work',
        paragraphs: [
          'Maintenance profit is route density. Install profit is estimate accuracy — labor overruns, material waste, and missed sub costs erode margin one job at a time. If you cannot see budget vs actual until month-end QuickBooks, you are flying blind on active jobs.',
          'Start with structured estimates — [design-build estimating software](/guides/design-build-estimating-software-landscape) — then carry the same budget into field time and purchasing.',
        ],
        bullets: [
          'Labor hours budgeted vs crew time clocked',
          'Materials estimated vs vendor invoices received',
          'Subcontractor PO vs actual bill',
          'Change orders tracked against original margin',
        ],
      },
      {
        heading: 'Software that closes the loop',
        paragraphs: [
          '[LMN](/tools/lmn) is the reference for landscape job costing — estimate templates become job budgets, foreman time feeds earned revenue. [SingleOps](/tools/singleops) offers strong proposal-to-job tracking for mid-size design-build.',
          '[Aspire](/tools/aspire) scales job costing across branches. Maintenance tools like Jobber handle basic line-item quotes but rarely answer WIP questions — see [when to upgrade to LMN](/guides/when-to-upgrade-to-lmn).',
        ],
      },
      {
        heading: 'Weekly job review habit',
        paragraphs: [
          'Every Friday: open active install jobs, compare % complete to % budget consumed. Flag jobs over 110% on labor before closeout surprises. Sync earned revenue to QuickBooks via [QuickBooks integration](/guides/quickbooks-integration-landscape-software) so your CPA sees WIP, not just cash deposits.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I job cost in spreadsheets?',
        answer:
          'Works under ~10 concurrent installs if someone updates daily. Past that, stale spreadsheets hide overruns until the job is unprofitable and closed.',
      },
      {
        question: 'When is LMN worth it for job costing alone?',
        answer:
          'When average install tickets exceed $5,000 and you track labor, materials, and subs separately. One underbid patio often costs more than a year of software.',
      },
      {
        question: 'Does job costing require foremen to clock time?',
        answer:
          'Yes — garbage in, garbage out. Mobile clock-in per job or phase is non-negotiable. Pair with [mobile apps for crew management](/guides/mobile-app-landscape-crew-management) rollout best practices.',
      },
    ],
  },
  {
    slug: 'customer-portal-lawn-care-software',
    category: 'buying-guide',
    title: 'Customer Portals for Lawn Care & Landscape Companies',
    description:
      'What client portals should offer — pay invoices, approve quotes, request service, and view visit history — and which FSM platforms deliver without a custom website.',
    readMinutes: 8,
    relatedToolSlugs: ['jobber', 'housecall-pro', 'service-autopilot', 'lmn'],
    relatedGuideSlugs: ['how-to-choose-lawn-care-software', 'recurring-billing-lawn-care-software', 'solo-landscaper-software-checklist'],
    sections: [
      {
        heading: 'What clients actually use portals for',
        paragraphs: [
          'Residential clients want pay-by-link, card update, and service history — not a full project dashboard. Commercial clients may need PO entry, multi-site billing, and photo proof exports.',
          'A good portal reduces “did you mow yesterday?” calls and speeds quote approvals. Tie portal payments to [recurring billing setup](/guides/recurring-billing-lawn-care-software) so autopay failures self-serve.',
        ],
        bullets: [
          'View/pay open invoices and stored cards',
          'Approve or decline quotes digitally',
          'Request add-on service or report issue',
          'Download visit photos and service dates',
        ],
      },
      {
        heading: 'Portal quality by platform',
        paragraphs: [
          '[Housecall Pro](/tools/housecall-pro) emphasizes consumer-friendly pay links and financing — strong for residential maintenance. [Jobber](/tools/jobber) offers clean client hubs with quote approval on mid tiers.',
          '[Service Autopilot](/tools/service-autopilot) automates portal emails for high-volume routes. [LMN](/tools/lmn) portals skew toward commercial and design-build with document sharing — evaluate if residential UX matters more.',
        ],
      },
      {
        heading: 'Rollout without confusing existing clients',
        paragraphs: [
          'Email one clear announcement: new payment link, same services, optional password setup. Run portal-only autopay for new signups first; migrate legacy check payers slowly.',
          'Solos launching portals for the first time should verify mobile UX on a client’s phone — see [solo landscaper software checklist](/guides/solo-landscaper-software-checklist). Score portal flows in your [software evaluation checklist](/guides/field-service-software-evaluation-checklist) demo script.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do lawn care clients use portals or just pay email links?',
        answer:
          'Most residential clients click pay links without logging in. Portals matter more for quote approval, service history, and commercial accounts with multiple authorized payers.',
      },
      {
        question: 'Is a customer portal included or an add-on?',
        answer:
          'Varies by vendor and tier. Jobber and Housecall Pro include client hubs on common plans; confirm quote-approval and card-update features on your exact subscription before signing.',
      },
      {
        question: 'Can I replace my website with a software portal?',
        answer:
          'Portals complement marketing sites — they are not SEO landing pages. Keep your public site for leads; use the portal for authenticated clients only.',
      },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export const GUIDE_SLUGS = GUIDES.map((g) => g.slug);
