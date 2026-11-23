import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { MODUL_META } from '../src/data/regions';

const SITE_URL = 'https://radpraktik.rindia.my.id';
const STATIC_ROUTES = ['/', '/modul', '/kasus', '/progres', '/tentang'];

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const outPath = path.join(rootDir, 'public', 'sitemap.xml');

const today = new Date().toISOString().slice(0, 10);

const urls = [
  ...STATIC_ROUTES.map((route) => ({
    loc: `${SITE_URL}${route}`,
    priority: route === '/' ? '1.0' : '0.8',
  })),
  ...MODUL_META.map((m) => ({
    loc: `${SITE_URL}/modul/${m.slug}`,
    priority: '0.7',
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, xml, 'utf8');
console.log(`Sitemap generated: ${outPath} (${urls.length} URLs)`);
