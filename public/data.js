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
      blurb: 'Dental practice management for Egypt, for solo doctors and clinics, on web and mobile. I founded it and I am building the MVP: a 41-table data model with soft deletes and append-only history, covered by 53 test files.',
      credits: [['Role', 'Founder'], ['Status', 'MVP in progress'], ['Stack', 'NestJS, Prisma, Postgres (Supabase), Better Auth, Expo, TanStack Query, Turborepo'], ['Market', 'Egypt']],
      links: [],
      tracks: [
        { id: 'web', title: 'Dentica Web', desc: 'The practice management platform in the browser, for solo doctors and clinics.', dur: 214, popular: 1 },
        { id: 'mobile', title: 'Dentica Mobile', desc: 'The same platform on mobile.', dur: 196 },
        { id: 'lite', title: 'Dentica Lite', desc: 'A lighter companion app made only for doctors.', dur: 187, popular: 5 }
      ]
    },
    {
      id: 'viorette', kind: 'ep', title: 'Viorette',
      cover: { mark: 'V', logo: 'logos/viorette.png', c1: '#7a3d6e', c2: '#2b1328', pattern: 'dots' },
      blurb: 'Sterling silver jewelry for women in Egypt and the MENA region. A year-long side hustle with my cofounder: we did everything together, from the store and the designs to marketing and shipping, and grew it to 300 orders a month at break-even before I exited.',
      credits: [['Role', 'Cofounder'], ['Run', 'One year, as a side hustle'], ['Peak', '300 orders a month, break-even'], ['Stack', 'WooCommerce, then Shopify, with Bosta for delivery'], ['Market', 'Egypt and MENA']],
      links: [],
      tracks: [
        { id: 'store', title: 'The Store', desc: 'Started on WooCommerce, then moved to Shopify.', dur: 198, popular: 4 },
        { id: 'designs', title: 'Designs', desc: 'The jewelry designs and the brand look, worked out together.', dur: 186 },
        { id: 'marketing', title: 'Marketing', desc: 'We ran the marketing ourselves.', dur: 171 },
        { id: 'delivery', title: 'Delivery', desc: 'Shipping orders across Egypt with Bosta.', dur: 159 },
        { id: 'scale', title: '300 a Month', desc: 'Grew to 300 orders a month and broke even.', dur: 204 },
        { id: 'exit', title: 'The Exit', desc: 'I exited to found Dentica, a product closer to what I do best.', dur: 142 }
      ]
    },
    {
      id: 'retool-bridge', kind: 'single', title: 'Retool Bridge', label: 'stackdrop',
      cover: { mark: 'RB', c1: '#3d4ad6', c2: '#121641', pattern: 'grid' },
      blurb: 'Open source. Runs Retool Apps-as-Code React apps on your own machine, driven over MCP, with each session isolated in its own git worktree and read-only by default.',
      credits: [['Role', 'Author'], ['License', 'Open source'], ['Tests', '~90']],
      links: [],
      tracks: [
        { id: 'bridge', title: 'Retool Bridge', desc: 'Runs Retool Apps-as-Code React apps locally, driven over MCP.', dur: 241, popular: 2 },
        { id: 'worktrees', title: 'Worktree Isolation', desc: 'Every session gets its own git worktree, so experiments never touch your checkout.', dur: 188 },
        { id: 'readonly', title: 'Read-Only by Default', desc: 'Nothing writes back to Retool unless you explicitly allow it.', dur: 162 }
      ]
    },
    {
      id: 'marathon-navigator', kind: 'single', title: 'Marathon Navigator', year: 'Live',
      cover: { mark: 'MN', c1: '#e2524a', c2: '#4a1414', pattern: 'stripes' },
      blurb: 'A live mobile app for charity youth competitions, in English and Arabic with full right-to-left support.',
      credits: [['Role', 'Builder'], ['Stack', 'React Native, Expo, Supabase'], ['Languages', 'English, Arabic (RTL)']],
      links: [],
      tracks: [
        { id: 'app', title: 'Marathon Navigator', desc: 'Live app for running charity youth competitions, built with React Native, Expo and Supabase.', dur: 207 },
        { id: 'rtl', title: 'Right to Left', desc: 'Full English and Arabic support, including RTL layouts.', dur: 174 }
      ]
    },
    {
      id: 'knowledge-hub', kind: 'single', title: 'Knowledge Hub',
      cover: { mark: 'KH', c1: '#8a5cf6', c2: '#2a1a5c', pattern: 'dots' },
      blurb: 'A self-hosted RAG knowledge assistant. Upload your own documents and ask them questions in plain language, answered by a local DeepSeek model. Nothing leaves the machine, so it works fully offline.',
      credits: [['Role', 'Author'], ['License', 'Open source'], ['Stack', 'Angular 19, Node.js, Express, FastAPI, PostgreSQL, DeepSeek']],
      links: [{ label: 'GitHub', href: 'https://github.com/arsanylabs/Knowledge-hub' }],
      tracks: [
        { id: 'upload', title: 'Upload Knowledge', desc: 'Bring your own text and JSON files as the knowledge base.', dur: 176 },
        { id: 'ask', title: 'Ask in Plain Language', desc: 'Retrieval over local embeddings, answered by a locally hosted DeepSeek model.', dur: 213 },
        { id: 'local', title: 'Fully Local', desc: 'No API keys and no cloud. Private by design, and it runs air-gapped.', dur: 158 }
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
        { id: 'shift-dashboard', title: 'Shift Utilization Dashboard', feat: 'wayve', desc: 'Replaced Grafana. 216 tests, and it reconciles to within about a point where the old numbers drifted 3 to 9 points apart.', dur: 236, popular: 3 },
        { id: 'shift-clock', title: 'Shift Utilisation Clock', feat: 'wayve', desc: 'A kiosk view of shift utilisation for the floor.', dur: 172 },
        { id: 'gap-review', title: 'Gap Review', feat: 'wayve', desc: 'A workflow for reviewing and explaining gaps in utilisation.', dur: 181 },
        { id: 'annotation', title: 'Annotation Platform', feat: 'wayve', desc: 'The platform the annotation work runs on.', dur: 224 },
        { id: 'allocation', title: 'Allocation Engine', feat: 'wayve', desc: 'A list-based engine for allocating work.', dur: 198 },
        { id: 'etl', title: 'Annotations Reporting ETL', feat: 'wayve', desc: 'Moves annotation data from Lakebase into Delta for reporting. I introduced Lakebase to the team.', dur: 211 },
        { id: 'sci', title: 'Safety-Critical Interventions', feat: 'wayve', desc: 'A dashboard for safety-critical interventions.', dur: 203 },
        { id: 'hubrural', title: 'Compliance & CRM Platform', feat: 'hubrural', desc: 'Retool and Postgres platform for Hub Rural, a UK land agency: AML compliance, a workflow engine, DocuSign and S3.', dur: 228 },
        { id: 'retail', title: 'Retail Data Platform', desc: 'Data platform for a global spirits group.', dur: 195 },
        { id: 'healthcare', title: 'Healthcare Platform', desc: 'A platform for a healthcare client.', dur: 187 },
        { id: 'entertainment', title: 'Entertainment & Data Platform', desc: 'Cut load times by about half and moved auth to Cognito.', dur: 201 }
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
        { id: 'features', title: 'End to End', desc: 'Features from the MySQL schema through Node.js APIs to Angular.', dur: 214 },
        { id: 'big-deal', title: 'The Big Deal', desc: 'Engineering work supporting one of the largest client deals.', dur: 197 },
        { id: 'tooling', title: 'Seeders, Biome and Husky', desc: 'Database seeders plus Biome and Husky for a cleaner, faster dev loop.', dur: 168 }
      ]
    }
  ]
};
