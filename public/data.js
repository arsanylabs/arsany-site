/* Site content. Edit this file to add or change releases; index.html only renders it.

   Release fields
     id        URL slug, e.g. arsany.dev/#dentica
     kind      'album' | 'ep' | 'single' (solo work) or 'collab' (a company)
     with      collabs only: id of the company in `companies`
     current   collabs only: true while you're still working there
     label     optional id of a collab the release came out of ("℗ Stackdrop")
     year      optional, shown in the release header
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
     mark      1-2 letters used on the cover when there's no logo */

window.SITE = {
  companies: {
    stackdrop: { name: 'Stackdrop', website: 'https://stackdrop.co', logo: 'logos/stackdrop.png', logoTile: true, mark: 'SD' },
    hubrural: { name: 'Hub Rural', website: 'https://www.hubrural.co.uk', logo: 'logos/hubrural.png', logoTile: true, mark: 'HR' },
    spare: { name: 'Spare', website: 'https://www.paywithspare.com', logo: 'logos/spare.png', logoTile: true, mark: 'S' },
    wayve: { name: 'Wayve', website: 'https://wayve.ai', logo: 'logos/wayve.png', logoTile: true, mark: 'W' }
  },

  releases: [
    {
      id: 'dentica', kind: 'album', title: 'Dentica',
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
      id: 'viorette', kind: 'ep', title: 'Viorette',
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
      id: 'retool-bridge', kind: 'single', title: 'Retool Bridge', label: 'stackdrop',
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
      id: 'marathon-navigator', kind: 'single', title: 'Marathon Navigator', year: 'Live',
      cover: { mark: 'MN', logo: 'logos/marathon-navigator.svg', logoTile: true, c1: '#ffc00a', c2: '#7a4a00', pattern: 'stripes' },
      blurb: 'A live mobile app for charity youth competitions, in English and Arabic with full right-to-left support.',
      credits: [['Role', 'Builder'], ['Stack', 'React Native, Expo, Supabase'], ['Languages', 'English, Arabic (RTL)']],
      links: [],
      tracks: [
        { id: 'app', title: 'Marathon Navigator', desc: 'Live app for charity youth competitions, in English and Arabic.', dur: 207, lyrics: [
          'A live app for charity youth competitions.',
          'React Native and Expo on the phone.',
          'Supabase behind it.',
          'English and Arabic.',
          'Full right-to-left layouts.'
        ] }
      ]
    },
    {
      id: 'knowledge-hub', kind: 'single', title: 'Knowledge Hub',
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
      blurb: 'Remote-first software house headquartered in Athens. I work as a contractor across several client projects at once. The headline engagement is Wayve, where I am the Retool engineer and product owner for the Fleet Systems & Insights portfolio: 5+ apps used across the UK, US, Germany and Japan.',
      credits: [['Role', 'Senior Software Engineer'], ['Terms', 'Contract'], ['Dates', 'Apr 2024 – present'], ['HQ', 'Athens, Greece']],
      links: [],
      tracks: [
        { id: 'shift-dashboard', title: 'Shift Utilization Dashboard', feat: 'wayve', desc: 'Replaced Grafana. 216 tests, and it reconciles to within about a point where the old numbers drifted 3 to 9 points apart.', dur: 236, lyrics: [
          'Shift utilization for Wayve\'s fleet.',
          'It replaced Grafana.',
          'The old numbers drifted three to nine points apart.',
          'Now they reconcile to within about a point.',
          '216 tests behind it.'
        ], popular: 3 },
        { id: 'shift-clock', title: 'Shift Utilisation Clock', feat: 'wayve', desc: 'A kiosk view of shift utilisation for the floor.', dur: 172, lyrics: [
          'Shift utilisation,',
          'on a kiosk.',
          'One of 5+ apps in the Fleet Systems & Insights portfolio,',
          'used across the UK, US, Germany and Japan.'
        ] },
        { id: 'gap-review', title: 'Gap Review', feat: 'wayve', desc: 'A workflow for reviewing and explaining gaps in utilisation.', dur: 181, lyrics: [
          'A workflow for reviewing utilisation gaps.',
          'Find the gap.',
          'Explain it.'
        ] },
        { id: 'annotation', title: 'Annotation Platform', feat: 'wayve', desc: 'The platform the annotation work runs on.', dur: 224, lyrics: [
          'The platform',
          'Wayve\'s annotation work runs on.'
        ] },
        { id: 'allocation', title: 'Allocation Engine', feat: 'wayve', desc: 'A list-based engine for allocating work.', dur: 198, lyrics: [
          'A list-based engine',
          'for allocating the work.'
        ] },
        { id: 'etl', title: 'Annotations Reporting ETL', feat: 'wayve', desc: 'Moves annotation data from Lakebase into Delta for reporting. I introduced Lakebase to the team.', dur: 211, lyrics: [
          'Annotation data,',
          'from Lakebase into Delta.',
          'Reporting built on top.',
          'I introduced Lakebase to the team.'
        ] },
        { id: 'sci', title: 'Safety-Critical Interventions', feat: 'wayve', desc: 'A dashboard for safety-critical interventions.', dur: 203, lyrics: [
          'Safety-critical interventions,',
          'on one dashboard.'
        ] },
        { id: 'hubrural', title: 'Compliance & CRM Platform', feat: 'hubrural', desc: 'Retool and Postgres platform for Hub Rural, a UK land agency: AML compliance, a workflow engine, DocuSign and S3.', dur: 228, lyrics: [
          'A compliance and CRM platform',
          'for Hub Rural, a UK land agency.',
          'Retool on Postgres.',
          'AML compliance checks.',
          'A workflow engine.',
          'DocuSign for signatures.',
          'S3 for the documents.'
        ] },
        { id: 'retail', title: 'Retail Data Platform', desc: 'Data platform for a global spirits group.', dur: 195, lyrics: [
          'A data platform',
          'for a global spirits group.'
        ] },
        { id: 'healthcare', title: 'Healthcare Platform', desc: 'A platform for a healthcare client.', dur: 187, lyrics: [
          'A platform',
          'for a healthcare client.'
        ] },
        { id: 'entertainment', title: 'Entertainment & Data Platform', desc: 'Cut load times by about half and moved auth to Cognito.', dur: 201, lyrics: [
          'An entertainment and data platform.',
          'Load times cut by about half.',
          'Sign-in moved to Amazon Cognito.'
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
        { id: 'features', title: 'End to End', desc: 'Features from the MySQL schema through Node.js APIs to Angular.', dur: 214, lyrics: [
          'Features, end to end.',
          'The MySQL schema.',
          'The Node.js APIs.',
          'The Angular front end.'
        ] },
        { id: 'big-deal', title: 'The Big Deal', desc: 'Engineering work supporting one of the largest client deals.', dur: 197, lyrics: [
          'The engineering behind',
          'one of the largest client deals.'
        ] },
        { id: 'tooling', title: 'Seeders, Biome and Husky', desc: 'Database seeders plus Biome and Husky for a cleaner, faster dev loop.', dur: 168, lyrics: [
          'Database seeders.',
          'Biome and Husky,',
          'so the checks run before every commit.'
        ] }
      ]
    }
  ]
};
