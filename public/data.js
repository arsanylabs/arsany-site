/* Site content. Edit this file to add or change releases; index.html only renders it.

   Release fields
     id        URL slug, e.g. arsany.dev/#dentica
     kind      'album' | 'ep' | 'single' (solo work) or 'collab' (a company)
     with      collabs only: the company name
     current   collabs only: true while you're still working there
     label     optional id of a collab the release came out of ("℗ Stackdrop")
     year      optional, shown in the release header
     cover     generated cover art: mark (1-2 letters), two colors, pattern
               (rings | dots | grid | stripes | split)
     credits   [label, value] pairs shown under the tracklist
     links     [{ label, href }] buttons in the release header

   Track fields
     id        unique within the release
     feat      optional featured artist, e.g. a client: "feat. Wayve"
     popular   optional rank (1 = top) to list it under Popular on the home page
     dur       track length in seconds (it's a music player, after all) */

window.SITE = {
  releases: [
    {
      id: 'dentica', kind: 'album', title: 'Dentica',
      cover: { mark: 'D', c1: '#19b06a', c2: '#0a4a33', pattern: 'rings' },
      blurb: 'Dental practice management for Egypt, for solo doctors and clinics, on web and mobile.',
      credits: [['Role', 'Creator'], ['Platforms', 'Web + mobile'], ['Market', 'Egypt']],
      links: [],
      tracks: [
        { id: 'web', title: 'Dentica Web', desc: 'The practice management platform in the browser, for solo doctors and clinics.', dur: 214, popular: 1 },
        { id: 'mobile', title: 'Dentica Mobile', desc: 'The same platform on mobile.', dur: 196 },
        { id: 'lite', title: 'Dentica Lite', desc: 'A lighter companion app made only for doctors.', dur: 187, popular: 5 }
      ]
    },
    {
      id: 'viorette', kind: 'ep', title: 'Viorette',
      cover: { mark: 'V', c1: '#a9a2bd', c2: '#3f3a55', pattern: 'dots' },
      blurb: 'Sterling silver jewelry for women in Egypt and the MENA region. I ran the store, the marketing and the tech, then exited.',
      credits: [['Role', 'Ran it, then exited'], ['Category', 'E-commerce brand'], ['Market', 'Egypt and MENA']],
      links: [],
      tracks: [
        { id: 'store', title: 'The Store', desc: 'Sterling silver jewelry for women in Egypt and the MENA region.', dur: 198, popular: 4 },
        { id: 'marketing', title: 'Marketing', desc: 'I ran the marketing myself.', dur: 171 },
        { id: 'tech', title: 'The Tech', desc: 'I built and ran the tech behind the store.', dur: 183 },
        { id: 'exit', title: 'The Exit', desc: 'I exited the brand.', dur: 142 }
      ]
    },
    {
      id: 'retool-runner', kind: 'single', title: 'Retool React Local Runner', label: 'stackdrop',
      cover: { mark: 'R', c1: '#3d4ad6', c2: '#121641', pattern: 'grid' },
      blurb: 'Runs Retool Apps-as-Code React apps on your own machine, driven over MCP. Open source, built at Stackdrop.',
      credits: [['Role', 'Author'], ['License', 'Open source']],
      links: [],
      tracks: [
        { id: 'runner', title: 'Retool React Local Runner', desc: 'Runs Retool Apps-as-Code React apps on your own machine, driven over MCP.', dur: 241, popular: 2 }
      ]
    },
    {
      id: 'ab-optimizer', kind: 'single', title: 'AB-Optimizer',
      cover: { mark: 'AB', c1: '#d9962a', c2: '#6e2f0e', pattern: 'stripes' },
      blurb: 'A conversion rate optimization SaaS I worked on with a partner.',
      credits: [['Role', 'Co-builder'], ['Category', 'Conversion optimization SaaS']],
      links: [],
      tracks: [
        { id: 'ab', title: 'AB-Optimizer', desc: 'A conversion rate optimization SaaS, built with a partner.', dur: 176 }
      ]
    },
    {
      id: 'stackdrop', kind: 'collab', with: 'Stackdrop', title: 'Stackdrop', current: true,
      cover: { mark: 'SD', c1: '#0f7a50', c2: '#0a3a52', pattern: 'split' },
      blurb: 'Remote-first software house headquartered in Athens, with most of the engineers in Egypt. I work as an independent contractor across several client projects at once, including an embedded engagement with Wayve.',
      credits: [['Role', 'Senior Fullstack Engineer'], ['Terms', 'Independent contractor'], ['HQ', 'Athens, Greece']],
      links: [],
      tracks: [
        { id: 'wayve-eng', title: 'Embedded Engineering', feat: 'Wayve', desc: 'Embedded in the team at Wayve, an autonomous driving AI company.', dur: 223 },
        { id: 'wayve-po', title: 'Product Owner', feat: 'Wayve', desc: 'Covering the product owner role on the Wayve engagement, alongside the engineering.', dur: 205, popular: 3 },
        { id: 'builds', title: 'Client Builds', desc: 'Building across several client projects at once.', dur: 232 },
        { id: 'calls', title: 'Client Calls', desc: 'Talking to clients directly about scope and what they need next.', dur: 164 },
        { id: 'demos', title: 'Demos', desc: 'Demoing the work back to clients.', dur: 151 },
        { id: 'retool', title: 'Retool Apps and Tooling', desc: 'Retool apps and the tooling around them, including the Local Runner.', dur: 209 }
      ]
    }
  ]
};
