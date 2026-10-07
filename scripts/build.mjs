/* Generates the crawlable side of the site from public/data.js:
   the plain résumé page, llms.txt, llms-full.txt, sitemap.xml, robots.txt,
   and the JSON-LD block in index.html. Run before every deploy (npm run deploy does). */

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = fileURLToPath(new URL('../public/', import.meta.url));
const ctx = { window: {} };
vm.runInNewContext(readFileSync(root + 'data.js', 'utf8'), ctx);
const { companies, releases } = ctx.window.SITE;

const BASE = 'https://portfolio.arsanylabs.workers.dev';
const PERSON = {
  name: 'Arsany Milad',
  title: 'Senior Fullstack Engineer',
  city: 'Alexandria, Egypt',
  linkedin: 'https://www.linkedin.com/in/arsany-milad',
  github: 'https://github.com/arsanylabs',
  education: 'BSc in Computer Science, Alexandria University',
  summary: 'Senior fullstack engineer in Alexandria, Egypt. I build products end to end, from the database to the demo: TypeScript, Node.js and NestJS, React and React Native, PostgreSQL, Retool, Databricks and AWS. At Stackdrop I am the Retool engineer and product owner for Wayve\'s Fleet Systems & Insights tools, used across the UK, US, Germany and Japan. I also founded Dentica, an Arabic-first dental practice management platform now in closed beta.',
  skills: ['TypeScript', 'Node.js', 'NestJS', 'React', 'React Native', 'Expo', 'Retool', 'PostgreSQL', 'Prisma', 'Supabase', 'Databricks', 'AWS', 'Docker', 'Product ownership']
};
const today = new Date().toISOString().slice(0, 10);

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const credit = (r, k) => (r.credits.find(c => c[0] === k) || [])[1];
const text = t => (t.lyrics || [t.desc]).join(' ').replace(/\s+/g, ' ');
const feat = t => (t.feat ? companies[t.feat].name : null);
const KIND = { album: 'Product', ep: 'Venture', single: 'Project' };

const experience = releases.filter(r => r.kind === 'collab');
const projects = releases.filter(r => r.kind !== 'collab');

/* ---------- résumé page ---------- */
const section = (r, isJob) => {
  const role = credit(r, 'Role');
  const dates = isJob ? (credit(r, 'Dates') || r.year) : (credit(r, 'Status') || r.year);
  const head = isJob ? `${esc(role)}, ${esc(companies[r.with].name)}` : `${esc(r.title)}${role ? ` <span class="k">${esc(role)}</span>` : ''}`;
  const items = r.tracks.map(t =>
    `<li><h4>${esc(t.title)}${feat(t) && feat(t) !== r.title ? ` <span class="k">for ${esc(feat(t))}</span>` : ''}</h4><p>${esc(text(t))}</p></li>`).join('\n');
  return `<article id="${esc(r.id)}">
<h3>${head}</h3>
<p class="meta">${[isJob ? null : KIND[r.kind], dates, credit(r, 'Stack')].filter(Boolean).map(esc).join(' · ')}</p>
<p>${esc(r.blurb)}</p>
<ul>${items}</ul>
<p class="more"><a href="/#${esc(r.id)}">Open ${esc(r.title)} in the player</a></p>
</article>`;
};

const resume = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${PERSON.name} · Résumé · ${PERSON.title}</title>
<meta name="description" content="${esc(PERSON.summary)}">
<link rel="canonical" href="${BASE}/resume">
<meta property="og:type" content="profile">
<meta property="og:title" content="${PERSON.name} · Résumé">
<meta property="og:description" content="${esc(PERSON.summary)}">
<meta property="og:url" content="${BASE}/resume">
<meta property="og:image" content="${BASE}/img/og.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="627">
<meta name="twitter:card" content="summary_large_image">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;600;800&display=swap">
<script type="application/ld+json">${JSON.stringify(jsonld('/resume'))}</script>
<style>
:root{--bg:#070908;--fg:#e9efeb;--mut:#9fb0a6;--acc:#3fe08a;--line:#1e2a24;color-scheme:dark}
@media (prefers-color-scheme:light){:root{--bg:#fbfcfb;--fg:#0f1712;--mut:#55665c;--acc:#0f7a43;--line:#dfe7e2;color-scheme:light}}
body{margin:0;background:var(--bg);color:var(--fg);font:16px/1.6 Figtree,system-ui,sans-serif}
main{max-width:760px;margin:0 auto;padding:48px 20px 80px}
h1{font-size:44px;line-height:1.05;margin:0 0 6px;font-weight:800}
h2{font-size:14px;letter-spacing:.12em;text-transform:uppercase;color:var(--acc);margin:48px 0 8px}
h3{font-size:22px;margin:32px 0 2px}
h4{font-size:16px;margin:0}
.k,.meta{color:var(--mut);font-weight:400}
.meta{margin:0 0 10px;font-size:14px}
ul{padding:0;list-style:none;display:grid;gap:14px;margin:16px 0}
li{border-left:2px solid var(--line);padding-left:14px}
li p{margin:2px 0 0;color:var(--mut)}
a{color:var(--acc)}
.top{display:flex;flex-wrap:wrap;gap:8px 16px;font-size:15px}
.more{font-size:14px}
</style>
</head>
<body>
<main>
<header>
<h1>${PERSON.name}</h1>
<p><strong>${PERSON.title}</strong> · ${PERSON.city}</p>
<p>${esc(PERSON.summary)}</p>
<p class="top"><a href="${PERSON.linkedin}">LinkedIn</a><a href="${PERSON.github}">GitHub</a><a href="/">Interactive portfolio</a></p>
</header>
<h2>Experience</h2>
${experience.map(r => section(r, true)).join('\n')}
<h2>Projects</h2>
${projects.map(r => section(r, false)).join('\n')}
<h2>Education</h2>
<p>${PERSON.education}</p>
<h2>Skills</h2>
<p>${PERSON.skills.join(', ')}</p>
<h2>Languages</h2>
<p>English, Arabic (Egyptian)</p>
</main>
</body>
</html>
`;
writeFileSync(root + 'resume.html', resume);

/* ---------- llms.txt / llms-full.txt ---------- */
const mdRelease = (r, isJob) => {
  const lines = [`### ${isJob ? `${credit(r, 'Role')}, ${companies[r.with].name}` : r.title} (${isJob ? credit(r, 'Dates') || r.year : credit(r, 'Status') || r.year || KIND[r.kind]})`, '', r.blurb, ''];
  if (credit(r, 'Stack')) lines.push(`Stack: ${credit(r, 'Stack')}`, '');
  r.tracks.forEach(t => lines.push(`- **${t.title}**${feat(t) && feat(t) !== r.title ? ` (for ${feat(t)})` : ''}: ${text(t)}`));
  lines.push('');
  return lines.join('\n');
};
const llmsHead = `# ${PERSON.name}

> ${PERSON.summary}

- Location: ${PERSON.city}
- Role: ${PERSON.title}
- Education: ${PERSON.education}
- Skills: ${PERSON.skills.join(', ')}
- LinkedIn: ${PERSON.linkedin}
- GitHub: ${PERSON.github}
`;
writeFileSync(root + 'llms.txt', `${llmsHead}
## Pages

- [Résumé](${BASE}/resume): full work history and projects as plain HTML
- [Full text](${BASE}/llms-full.txt): everything on the site as Markdown
- [Interactive portfolio](${BASE}/): the same content as a music-player style site

## Experience

${experience.map(r => `- ${credit(r, 'Role')}, ${companies[r.with].name} (${credit(r, 'Dates') || r.year}): ${r.blurb}`).join('\n')}

## Projects

${projects.map(r => `- ${r.title}: ${r.blurb}`).join('\n')}
`);
writeFileSync(root + 'llms-full.txt', `${llmsHead}
## Experience

${experience.map(r => mdRelease(r, true)).join('\n')}
## Projects

${projects.map(r => mdRelease(r, false)).join('\n')}`);

/* ---------- sitemap / robots ---------- */
writeFileSync(root + 'sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${['/', '/resume', '/llms.txt', '/llms-full.txt'].map(p => `  <url><loc>${BASE}${p}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`);
writeFileSync(root + 'robots.txt', `User-agent: *
Allow: /

Sitemap: ${BASE}/sitemap.xml
`);

/* ---------- JSON-LD in index.html ---------- */
function jsonld(path) {
  const person = {
    '@type': 'Person', '@id': BASE + '/#person',
    name: PERSON.name, alternateName: 'Arsany', jobTitle: PERSON.title,
    description: PERSON.summary, url: BASE + '/', image: BASE + '/img/arsany.jpg',
    address: { '@type': 'PostalAddress', addressLocality: 'Alexandria', addressCountry: 'EG' },
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Alexandria University' },
    worksFor: { '@type': 'Organization', name: 'Stackdrop', url: companies.stackdrop.website },
    knowsAbout: PERSON.skills, knowsLanguage: ['en', 'ar'],
    sameAs: [PERSON.linkedin, PERSON.github],
    founder: undefined
  };
  delete person.founder;
  const work = projects.map(r => ({
    '@type': r.kind === 'album' ? 'SoftwareApplication' : 'CreativeWork',
    name: r.title, description: r.blurb, url: `${BASE}/#${r.id}`,
    ...(r.kind === 'album' ? { applicationCategory: 'BusinessApplication' } : {}),
    creator: { '@id': BASE + '/#person' }
  }));
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'ProfilePage', '@id': BASE + path, url: BASE + path, name: `${PERSON.name} · ${PERSON.title}`, dateModified: today, mainEntity: { '@id': BASE + '/#person' } },
      person,
      { '@type': 'WebSite', '@id': BASE + '/#site', url: BASE + '/', name: PERSON.name, inLanguage: 'en' },
      ...work
    ]
  };
}
const idx = root + 'index.html';
const html = readFileSync(idx, 'utf8');
const block = `<!-- seo:jsonld (generated by scripts/build.mjs) -->\n<script type="application/ld+json">${JSON.stringify(jsonld('/'))}</script>\n<!-- /seo:jsonld -->`;
const re = /<!-- seo:jsonld[\s\S]*?<!-- \/seo:jsonld -->/;
if (!re.test(html)) throw new Error('index.html is missing the <!-- seo:jsonld --> markers');
writeFileSync(idx, html.replace(re, block));

console.log(`built resume.html, llms.txt, llms-full.txt, sitemap.xml, robots.txt, JSON-LD (${releases.length} releases)`);
