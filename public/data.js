/* Site content. Edit this file to add or change releases; index.html only renders it.

   Release fields
     id        URL slug, e.g. arsany.dev/#dentica
     kind      'album' | 'ep' | 'single' (solo work) or 'collab' (a company)
     with      collabs only: id of the company in `companies`
     current   collabs only: true while you're still working there
     label     optional id of a collab the release came out of ("℗ Stackdrop")
     year      optional, shown in the release header
     tagline   solo releases: one line shown on the Projects card
     role      collabs only: role shown on the Experience card (defaults to the Role credit)
     cover     generated cover art: mark (1-2 letters), two colors, pattern
               (rings | dots | grid | stripes | split), and an optional logo under
               public/logos/ shown instead of the mark (logoTile: true for square
               app icons; otherwise the logo is drawn in white)
     credits   [label, value] pairs shown under the tracklist
     links     [{ label, href }] buttons in the release header

   Track fields
     id        unique within the release
     feat      optional id of a company in `companies`, shown as "feat. Wayve"
     popular   optional rank (1 = top) to list it under Popular on the home page
     dur       track length in seconds (it's a music player, after all)
     lyrics    lines shown in the lyrics view when the track is clicked
               (falls back to desc)

   Company fields
     name      display name
     website   full URL, shown as a "Visit" button (null hides it)
     logo      path under public/, e.g. 'logos/wayve.svg' (null falls back to `mark`)
     logoTile  true when the logo is a square app icon with its own background
               (shown as a rounded tile); otherwise the logo is drawn in white
     logoFlat  true when a tile logo has its own corner shape, so it isn't rounded
     mark      1-2 letters used on the cover when there's no logo */

window.SITE = {
  companies: {
    stackdrop: { name: 'Stackdrop', website: 'https://stackdrop.co', logo: 'logos/stackdrop.svg', logoTile: true, logoFlat: true, mark: 'SD' },
    hubrural: { name: 'Hub Rural', website: 'https://www.hubrural.co.uk', logo: 'logos/hubrural.png', logoTile: true, mark: 'HR' },
    spare: { name: 'Spare', website: 'https://www.paywithspare.com', logo: 'logos/spare.png', logoTile: true, mark: 'S' },
    wayve: { name: 'Wayve', website: 'https://wayve.ai', logo: 'logos/wayve.png', logoTile: true, mark: 'W' }
  },

  releases: [
    {
      id: 'dentica', kind: 'album', title: 'Dentica', tagline: 'Arabic-first dental practice management, on web and mobile.',
      cover: { mark: 'D', logo: 'logos/dentica.png', logoTile: true, c1: '#4a4044', c2: '#1f1a17', pattern: 'rings' },
      blurb: 'Dental practice management for Egypt, for solo doctors and clinics, on web and mobile. Arabic-first, with a dental chart drawn as real teeth. I founded it and built it, and it is now in closed beta.',
      credits: [['Role', 'Founder'], ['Status', 'Closed beta'], ['Stack', 'NestJS, Prisma, Postgres (Supabase), Better Auth, Expo, TanStack Query, Turborepo'], ['Market', 'Egypt']],
      links: [],
      tracks: [
        { id: 'web', title: 'Dentica Web', desc: 'The practice management platform in the browser, for solo doctors and clinics.', dur: 214, lyrics: [
          'Dentica Web is the practice management platform in the browser.',
          'Built for solo doctors and for clinics in Egypt.',
          'One product for the doctor working alone',
          'and for the clinic with a team.'
        ], popular: 1 },
        { id: 'chart', title: 'A Chart That Looks Like Teeth', desc: 'The odontogram: real tooth artwork, in 2D and in a 3D jaw view.', dur: 232, popular: 6, lyrics: [
          'A full adult dental chart,',
          'drawn as real teeth, not boxes and letters.',
          'Conditions are painted on the exact tooth and the exact surface.',
          'Caries, fillings, crowns, implants, root canals, missing teeth.',
          'Fourteen conditions, each with its own colour and a three-letter mark,',
          'so colour is never the only signal.',
          'A 3D jaw view beside the 2D chart.',
          'And the chart is append-only:',
          'remove a condition and it stays in the history.',
          'Nothing clinical is ever destroyed.'
        ] },
        { id: 'arabic', title: 'Arabic First', desc: 'English, Modern Standard Arabic and Egyptian Arabic, right to left.', dur: 189, lyrics: [
          'Arabic first, not Arabic also.',
          'English, Modern Standard Arabic,',
          'and Egyptian Arabic as its own language.',
          'The whole interface flips right to left.',
          'Priced in EGP, scheduled on Cairo time.'
        ] },
        { id: 'permissions', title: 'Everyone Sees Their Job', desc: 'Granular permissions in six plain-English bundles, scopable per branch.', dur: 207, lyrics: [
          'Granular permissions,',
          'grouped into six plain-English bundles.',
          'Front desk, clinical, diagnosis and prescribing, billing, treatments, and more.',
          'Each one can be scoped to a single branch.',
          'A receptionist can run the front desk at one branch',
          'and see nothing at another.',
          'Every permission is written for the person ticking the box.'
        ] },
        { id: 'whatsapp', title: 'WhatsApp', desc: 'Appointment reminders queued by the server and sent from staff WhatsApp.', dur: 178, lyrics: [
          'In Egypt, patients live on WhatsApp.',
          'The server queues the appointment reminders.',
          'Staff send them from their own WhatsApp, in one click.',
          'No consent, no message.'
        ] },
        { id: 'library', title: 'Day One', desc: 'A curated treatment library, so no clinic starts from an empty price list.', dur: 164, lyrics: [
          'No clinic should start from an empty database.',
          'Every new account begins with a curated treatment library.',
          'Then makes the price list its own.'
        ] },
        { id: 'data-model', title: '41 Tables', desc: 'The data model: 41 tables, soft deletes and append-only history.', dur: 203, lyrics: [
          'Underneath it all, a 41-table data model.',
          'Soft deletes,',
          'so nothing a clinic records is lost by accident.',
          'Append-only history,',
          'so every change can be traced.'
        ] },
        { id: 'api', title: 'The API', desc: 'NestJS and Prisma on Postgres, hosted on Supabase.', dur: 192, lyrics: [
          'The API is NestJS.',
          'Prisma talks to Postgres.',
          'Postgres lives on Supabase.'
        ] },
        { id: 'auth', title: 'Sign In', desc: 'Authentication with Better Auth.', dur: 168, lyrics: [
          'Who gets in, and as whom.',
          'Sign-in runs on Better Auth.'
        ] },
        { id: 'monorepo', title: 'One Repo', desc: 'Web, mobile and the API in one Turborepo.', dur: 175, lyrics: [
          'Web, mobile and the API.',
          'One Turborepo holds them all.'
        ] },
        { id: 'tests', title: 'Tested at Every Layer', desc: 'Unit, API end-to-end, browser end-to-end, mobile and load tests.', dur: 221, lyrics: [
          'Unit tests with Vitest, for the logic on its own.',
          'API end-to-end tests that run against a real Postgres, not mocks.',
          'They cover sign-in, roles and permissions,',
          'patients, appointments, charting, invoices and payments.',
          'Even two people accepting the same invitation at once.',
          'Playwright drives the web app in a real browser:',
          'onboarding, sessions, invoices, WhatsApp,',
          'every language and accessibility.',
          'Jest for the mobile screens.',
          'And k6 load tests: baseline, stress, a full user journey,',
          'and a breakpoint run to find where it falls over,',
          'watched live in Grafana.'
        ] },
        { id: 'lite', title: 'Dentica Lite', desc: 'The mobile app: same platform, access shaped by permissions.', dur: 196, lyrics: [
          'Dentica Lite is the mobile app.',
          'Built with Expo, on iOS and Android.',
          'Same platform, same API, different access.',
          'It covers the day in the chair and at the front desk:',
          'the schedule, patients, charting, invoices and payments.',
          'What each person can do follows their permissions,',
          'never their job title.',
          'The heavy admin stays on the web.'
        ], popular: 5 }
      ]
    },
    {
      id: 'viorette', kind: 'ep', title: 'Viorette', tagline: 'Silver jewelry brand I cofounded, grown to 300 orders a month.',
      cover: { mark: 'V', logo: 'logos/viorette.png', c1: '#7a3d6e', c2: '#2b1328', pattern: 'dots' },
      blurb: 'Sterling silver jewelry for women in Egypt and the MENA region. A year-long side hustle with my cofounder: we did everything together, from the store and the designs to marketing and shipping, and grew it to 300 orders a month at break-even before I exited.',
      credits: [['Role', 'Cofounder'], ['Run', 'One year, as a side hustle'], ['Peak', '300 orders a month, break-even'], ['Stack', 'WooCommerce, then Shopify, with Bosta for delivery'], ['Market', 'Egypt and MENA']],
      links: [],
      tracks: [
        { id: 'store', title: 'The Store', desc: 'Started on WooCommerce, then moved to Shopify.', dur: 198, lyrics: [
          'Sterling silver jewelry for women in Egypt and MENA.',
          'We started the store on WooCommerce.',
          'Then moved it to Shopify.'
        ], popular: 4 },
        { id: 'designs', title: 'Designs', desc: 'The jewelry designs and the brand look, worked out together.', dur: 186, lyrics: [
          'The jewelry designs and the brand look.',
          'Worked out together, my cofounder and me.'
        ] },
        { id: 'marketing', title: 'Marketing', desc: 'We ran the marketing ourselves.', dur: 171, lyrics: [
          'No agency.',
          'We ran the marketing ourselves.'
        ] },
        { id: 'delivery', title: 'Delivery', desc: 'Shipping orders across Egypt with Bosta.', dur: 159, lyrics: [
          'Orders shipped across Egypt',
          'with Bosta.'
        ] },
        { id: 'scale', title: '300 a Month', desc: 'Grew to 300 orders a month and broke even.', dur: 204, lyrics: [
          'A side hustle, one year long.',
          'We grew it to 300 orders a month.',
          'And it broke even.'
        ] },
        { id: 'exit', title: 'The Exit', desc: 'I exited to found Dentica, a product closer to what I do best.', dur: 142, lyrics: [
          'Then I stepped away.',
          'To found Dentica,',
          'a product closer to what I do best.'
        ] }
      ]
    },
    {
      id: 'retool-bridge', kind: 'single', title: 'Retool Bridge', label: 'stackdrop', tagline: 'Run Retool Apps-as-Code locally, driven over MCP.',
      cover: { mark: 'RB', c1: '#3d4ad6', c2: '#121641', pattern: 'grid' },
      blurb: 'Open source. Runs Retool Apps-as-Code React apps on your own machine, driven over MCP, with each session isolated in its own git worktree and read-only by default.',
      credits: [['Role', 'Author'], ['License', 'Open source'], ['Tests', '~90']],
      links: [],
      tracks: [
        { id: 'bridge', title: 'Retool Bridge', desc: 'Runs Retool Apps-as-Code React apps locally, driven over MCP.', dur: 241, popular: 2, lyrics: [
          'Retool Apps-as-Code,',
          'running on your own machine.',
          'React apps, driven over MCP.',
          'Open source, built at Stackdrop.',
          'Around 90 tests behind it.',
          'Every session gets its own git worktree.',
          'Experiments never touch your checkout.',
          'Read-only by default.',
          'Nothing writes back to Retool',
          'unless you allow it.'
        ] }
      ]
    },
    {
      id: 'marathon-navigator', kind: 'single', title: 'Marathon Navigator', year: 'Live', tagline: 'Bilingual mobile app for charity youth competitions.',
      cover: { mark: 'MN', logo: 'logos/marathon-navigator.svg', logoTile: true, c1: '#ffc00a', c2: '#7a4a00', pattern: 'stripes' },
      blurb: 'A live mobile app for a charity\'s multi-team youth competitions: a live leaderboard, role-restricted score entry, QR attendance that works offline, and tournaments. In English and Arabic with full right-to-left support.',
      credits: [['Role', 'Builder'], ['Stack', 'React Native, Expo, Supabase'], ['Languages', 'English, Arabic (RTL)']],
      links: [],
      tracks: [
        { id: 'app', title: 'Marathon Navigator', desc: 'Live app for charity youth competitions, in English and Arabic.', dur: 207, lyrics: [
          'A live app for a charity\'s youth competitions.',
          'Many teams, one live leaderboard.',
          'Only the right roles can enter scores.',
          'Attendance by QR code,',
          'buffered offline until the signal comes back.',
          'And tournaments.',
          'React Native and Expo on the phone.',
          'Supabase behind it.',
          'English and Arabic.',
          'Full right-to-left layouts.'
        ] }
      ]
    },
    {
      id: 'karouz', kind: 'single', title: 'Karouz', year: 'In progress', tagline: 'A testing platform for a charity program, for hundreds of children.',
      cover: { mark: 'K', c1: '#e0603a', c2: '#4a1a10', pattern: 'rings' },
      blurb: 'In progress. I am working with about 20 managing admins of a charity program to turn how they run it into requirements and a design direction, ahead of launching a testing platform for hundreds of children.',
      credits: [['Role', 'Builder'], ['Status', 'In progress'], ['For', 'Hundreds of children, about 20 admins']],
      links: [],
      tracks: [
        { id: 'discovery', title: 'Karouz', desc: 'Turning how a charity program runs into requirements and a design direction.', dur: 181, lyrics: [
          'About 20 admins run a charity program.',
          'I sit with them',
          'and turn how they run it',
          'into requirements and a design direction.',
          'Next: a testing platform',
          'for hundreds of children.'
        ] }
      ]
    },
    {
      id: 'knowledge-hub', kind: 'single', title: 'Knowledge Hub', tagline: 'Self-hosted, offline RAG assistant for your own documents.',
      cover: { mark: 'KH', c1: '#8a5cf6', c2: '#2a1a5c', pattern: 'dots' },
      blurb: 'A self-hosted RAG knowledge assistant. Upload your own documents and ask them questions in plain language, answered by a local DeepSeek model. Nothing leaves the machine, so it works fully offline.',
      credits: [['Role', 'Author'], ['License', 'Open source'], ['Stack', 'Angular 19, Node.js, Express, FastAPI, PostgreSQL, DeepSeek']],
      links: [{ label: 'GitHub', href: 'https://github.com/arsanylabs/Knowledge-hub' }],
      tracks: [
        { id: 'hub', title: 'Knowledge Hub', desc: 'Self-hosted RAG assistant: ask your own documents questions, answered by a local DeepSeek model.', dur: 226, lyrics: [
          'Bring your own knowledge.',
          'Text files, JSON.',
          'Stored in PostgreSQL with their metadata.',
          'Ask a question in plain language.',
          'FastAPI generates the embeddings.',
          'Retrieval finds the relevant pieces.',
          'A local DeepSeek model writes the answer.',
          'Angular 19 and Material on the front.',
          'Node.js and Express behind it, built domain-driven.',
          'No API keys.',
          'No cloud.',
          'Nothing leaves the machine.',
          'It even runs air-gapped.'
        ] }
      ]
    },
    {
      id: 'stackdrop', kind: 'collab', with: 'stackdrop', title: 'Stackdrop', current: true,
      cover: { mark: 'SD', c1: '#f5a512', c2: '#5c3a06', pattern: 'split' },
      year: 'Apr 2024 – now',
      role: 'Retool engineer & product owner for Wayve',
      blurb: 'Remote-first software house headquartered in Athens. I work as a contractor across several client projects at once. The headline engagement is Wayve, where I am embedded with Fleet Operations as Retool engineer and product owner for the Fleet Systems & Insights portfolio, used across the UK, US, Germany and Japan. Primary engineer on 5+ production apps, on a Retool platform used by 70+ people. Alongside it, I build Hub Rural\'s compliance and CRM platform.',
      credits: [['Role', 'Senior Software Engineer'], ['Terms', 'Contract'], ['Dates', 'Apr 2024 – present'], ['HQ', 'Athens, Greece']],
      links: [],
      tracks: [
        { id: 'product-owner', title: 'Product Owner', feat: 'wayve', desc: 'Embedded with Fleet Operations: from the problem to the rollout to running it live.', dur: 219, lyrics: [
          'Not just tickets in, code out.',
          'Embedded with Wayve\'s Fleet Operations as product owner and builder.',
          'Understand the problem and the people who have it.',
          'Ask about the data, the owners, the permissions and the edge cases',
          'before they turn into production problems.',
          'I lead discovery, requirements and demos,',
          'and I am on every client call.',
          'Wireframes and prototypes to get everyone aligned.',
          'Build it, then launch it, train people on it, and support it live.',
          'Across Fleet Ops, Safety, QA and regional leadership,',
          'in four countries and their time zones.',
          'A junior engineer joined for about three months;',
          'I mentored them on Retool, UI and UX, and talking to clients.',
          'My tools were cited in the business case',
          'for a 24-month Retool extension. It was approved.'
        ] },
        { id: 'shift-dashboard', title: 'Shift Utilization Dashboard', feat: 'wayve', desc: 'Mockups to pilot in 27 days. Replaced Grafana for fleet ops: 30,000+ gaps classified, 600+ reports published.', dur: 236, lyrics: [
          'Shift monitoring used to live in Grafana, Slack, spreadsheets',
          'and vehicle-level views.',
          'Now it lives in one place.',
          'I designed it, validated it with the shift leads, and built it.',
          'From mockups to a pilot in 27 days.',
          'React and TypeScript, on Databricks and Lakebase.',
          'The old numbers drifted three to nine points apart.',
          'Now they reconcile to within about a point.',
          'A timeline of every shift, with gaps classified live',
          'and reviewed right there on the timeline.',
          'Gap review is auditable: suggested reasons, and a full change history.',
          'When a data-drift bug orphaned hundreds of classified gaps,',
          'I found it and repaired them.',
          'Vehicle detail. VSO tracking. Your region picked for you.',
          'Error monitoring that pings Slack before users do.',
          '216 tests behind it.',
          'Rolled out on a fixed date in Japan, Germany, the UK and the US,',
          'with me live in Slack, shipping fixes and feature requests.',
          'It replaced Grafana as fleet ops\' main tool for utilisation.',
          '30+ shift leads, regional leads and field engineers.',
          '30,000+ gaps classified. 600+ reports published.',
          'Then extended for regional leadership with Ops Analytics:',
          'the same single definition of utilisation, with clear lines on who sees what.'
        ], popular: 3 },
        { id: 'annotations-manager', title: 'Annotations Manager', feat: 'wayve', desc: 'Replaced Excel campaign tracking. Prototype in 15 days, production in 29: 18 annotators, 14 campaigns, 30,000+ runs.', dur: 224, lyrics: [
          'Annotation campaigns used to be tracked in Excel.',
          'Now managers do it in one app.',
          'Build a campaign from saved filters, and assign it to a team.',
          'Assign in bulk. Reassign. Track the status.',
          'Data syncs on its own.',
          'A tested prototype in 15 days. Production use in 29.',
          '18 annotators on 14 active campaigns.',
          '30,000+ runs managed.',
          'I took it to production, set up the users,',
          'and became the first point of contact for it.'
        ] },
        { id: 'allocation', title: 'Annotations Queue', feat: 'wayve', desc: 'A focused queue for annotators, prioritised so work cannot be cherry-picked.', dur: 198, lyrics: [
          'A focused queue for each annotator.',
          'Ask for work, and it is assigned automatically.',
          'Conflict guards, so nothing is ever assigned twice.',
          'Work arrives in priority order,',
          'so nobody cherry-picks the easy ones.',
          'Comments on every disengagement.',
          'At local midnight in each geography, the day is swept and flushed.',
          'US, UK, Japan, Germany.'
        ] },
        { id: 'etl', title: 'Annotations Reporting', feat: 'wayve', desc: 'Databricks synced into Lakebase, with daily incremental reporting pipelines. I introduced Lakebase to the team.', dur: 211, lyrics: [
          'Not stopping at the first version.',
          'Databricks syncs into Lakebase.',
          'Annotation data moves back into Delta,',
          'with daily incremental reporting pipelines.',
          'Reporting and QA built on top.',
          'I introduced Lakebase to the team,',
          'to replace analytics databases misused for transactional work.'
        ] },
        { id: 'turnaround', title: 'Not the Annotators', feat: 'wayve', desc: 'A year of turnaround data showed missing tagging, not slow annotators, explained the low completion rate.', dur: 193, lyrics: [
          'I built the platform to capture everything:',
          'assignment logic, comments, blocks and notes.',
          'So there was a year of turnaround data to read.',
          'The completion rate looked low.',
          'It was not slow annotators.',
          'It was missing tagging.',
          'So the team moved to the measure that holds up.'
        ] },
        { id: 'sci', title: 'Safety-Critical Interventions', feat: 'wayve', desc: 'Connects the topline safety numbers to each intervention log and its AV video, across time zones.', dur: 203, lyrics: [
          'Safety numbers at the top.',
          'Click one, and you are in the individual intervention log.',
          'Click again, and you are watching the AV video, right there.',
          'By vehicle. By time bucket. In every time zone. Exportable.',
          'Shipped soon after I joined.',
          'Then vehicle safety operator metrics,',
          'co-delivered with operational excellence, the people team and the shift leads.'
        ] },
        { id: 'escalations', title: 'Escalations, Routed', feat: 'wayve', desc: 'Automated about 350 escalation requests a week, and routed incidents to the people on shift.', dur: 188, lyrics: [
          'About 350 escalation requests a week.',
          'Roughly 50 Slack posts a day, written by hand.',
          'Now they are automated.',
          'And incident.io syncs with ConnectTeam,',
          'so an incident reaches the people on shift,',
          'not everyone.'
        ] },
        { id: 'hubrural', title: 'Compliance & CRM Platform', feat: 'hubrural', desc: 'Retool and Postgres platform for Hub Rural, a UK land agency: AML compliance, a workflow engine, DocuSign and S3.', dur: 228, lyrics: [
          'A compliance and CRM platform',
          'for Hub Rural, a UK land agency.',
          'Retool on Postgres.',
          'AML compliance checks.',
          'A workflow engine for jobs and actions.',
          'S3 for the documents.'
        ] },
        { id: 'hub-docusign', title: 'Signed, Sent, Tracked', feat: 'hubrural', desc: 'DocuSign agreements sent from the platform, with signer status flowing back.', dur: 192, lyrics: [
          'Agreements go out through DocuSign.',
          'Signer status comes back on its own.',
          'When the wrong agreement was going out,',
          'I traced it to the root and fixed it,',
          'so every envelope and every status lands on the right agreement.'
        ] },
        { id: 'hub-recurrence', title: 'Recurrence Engine', feat: 'hubrural', desc: 'A nightly engine that creates recurring actions, safely.', dur: 214, lyrics: [
          'Every night at one, it runs.',
          'It creates the next occurrence of every recurring action.',
          'Two runs can never create the same one twice.',
          'If an insert fails, nothing moves; it tries again tomorrow.',
          'A series that started on the 31st comes back to the 31st.',
          'Every two weeks on Tuesday means every two weeks on Tuesday.'
        ] },
        { id: 'hub-reports', title: 'Monday Morning', feat: 'hubrural', desc: 'Weekly actions, jobs and compliance reports, emailed every Monday at 8.', dur: 176, lyrics: [
          'Monday, eight in the morning.',
          'Every employee gets their actions and their jobs for the week.',
          'The compliance team gets the compliance report.',
          'One query for everyone, then one email each,',
          'in the house style, light mode and dark.'
        ] },
        { id: 'hub-mobile', title: 'Hub Mobile', feat: 'hubrural', desc: 'The platform in the field: jobs, tasks and actions on mobile.', dur: 169, lyrics: [
          'The platform, in the field.',
          'All jobs, job details,',
          'tasks and actions,',
          'from a phone.'
        ] },
        { id: 'retail', title: 'Clienteling Platform', desc: 'A clienteling and retail data platform for a global spirits group: an admin web app and a mobile app for store staff.', dur: 195, lyrics: [
          'A clienteling and retail data platform',
          'for a global spirits group.',
          'An admin web app, and a mobile app for the people on the shop floor.',
          'Retool and Retool Workflows, on Azure SQL Server.',
          'Customers, orders and products from every market\'s Magento store.',
          'I took it over from another engineer,',
          'with very little documentation.'
        ] },
        { id: 'retail-ingestion', title: 'Ingestion, Rebuilt', desc: 'Rebuilt the ingestion from bulk reloads to incremental, idempotent, per-market runs.', dur: 226, lyrics: [
          'The first version reloaded everything, every time.',
          'I rebuilt it to be incremental.',
          'Each run picks up from the last good one, with a day of overlap on purpose,',
          'one market at a time.',
          'Every row gets an ID derived from what it is,',
          'so loading the same data twice never duplicates it.',
          'Retries back off, with jitter.'
        ] },
        { id: 'retail-memory', title: 'Under the Ceiling', desc: 'Kept large order syncs inside Retool\'s memory limit.', dur: 183, lyrics: [
          'The data kept growing.',
          'Retool\'s memory did not.',
          'Orders stream through in batches of a hundred.',
          'Half the concurrency, split by market.',
          'And it stays under the ceiling.'
        ] },
        { id: 'retail-handover', title: 'The Handover', desc: 'The full technical handover to IBM, at the client\'s request.', dur: 174, lyrics: [
          'The client asked for the platform to move to IBM.',
          'So I handed it over, fully.',
          'Onboarding sessions.',
          'Documentation on how Retool runs,',
          'how the app works, and the main workflows,',
          'so their team could take it from there.'
        ] },
        { id: 'healthcare', title: 'Clinic Platform', desc: 'A clinic management platform on a layered Postgres data model with hierarchical access.', dur: 187, lyrics: [
          'A clinic management platform for a healthcare client.',
          'A layered Postgres data model:',
          'clinics, staff, patients, appointments, billing and consent.',
          'Hierarchical access control, so each level sees what it should.',
          'Web and mobile apps, tablet-friendly,',
          'for running the clinic in real time and capturing patient records.'
        ] },
        { id: 'entertainment', title: 'Entertainment & Data Platform', desc: 'Query load times cut about 50%, sign-in moved to Cognito, and a mobile replica in FlutterFlow.', dur: 201, lyrics: [
          'An entertainment and data platform.',
          'A mobile-friendly replica of the web app, built in FlutterFlow,',
          'published on the App Store.',
          'SQL tuned and indexed:',
          'the main web app\'s query load times cut by about half.',
          'Legacy sign-in moved to Amazon Cognito.'
        ] }
      ]
    },
    {
      id: 'spare', kind: 'collab', with: 'spare', title: 'Spare',
      cover: { mark: 'S', c1: '#16b3c9', c2: '#0b3d5c', pattern: 'split' },
      year: 'Sep 2022 – Mar 2024',
      blurb: 'Spare, Schools Made Smarter. My first job, before Stackdrop: building features end to end, from the MySQL schema through the Node.js APIs to the Angular front end.',
      credits: [['Role', 'Software Engineer'], ['Dates', 'Sep 2022 – Mar 2024'], ['Location', 'Remote'], ['Came before', 'Stackdrop']],
      links: [],
      tracks: [
        { id: 'features', title: 'End to End', desc: 'Features from the MySQL schema through Node.js APIs and tests to Angular.', dur: 214, lyrics: [
          'Features, end to end.',
          'The MySQL schema.',
          'The Node.js APIs.',
          'The tests.',
          'The Angular components.'
        ] },
        { id: 'big-deal', title: 'The Big Deal', desc: 'Work that supported closing one of the company\'s largest client deals.', dur: 197, lyrics: [
          'The work that helped close',
          'one of the company\'s largest client deals.'
        ] },
        { id: 'tooling', title: 'Seeders, Biome and Husky', desc: 'Database seeders that cut flaky tests, plus Biome and Husky for consistent linting and formatting.', dur: 168, lyrics: [
          'Database seeders,',
          'and the flaky tests went away.',
          'Biome and Husky,',
          'so linting and formatting are the same for everyone, before every commit.'
        ] }
      ]
    }
  ]
};
