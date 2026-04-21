export const prerender = true;

const BASE_URL = 'https://domvournias.dev';

const staticRoutes = [
	{ path: '/', priority: '1.0', changefreq: 'weekly' },
	{ path: '/blog', priority: '0.8', changefreq: 'weekly' }
];

async function getPublishedPosts() {
	const paths = import.meta.glob('/src/content/*.md', { eager: true });
	return Object.entries(paths)
		.map(([path, file]: [string, any]) => ({
			slug: path.split('/').at(-1)?.replace('.md', '') ?? '',
			date: file.metadata?.date ?? '',
			published: file.metadata?.published ?? false
		}))
		.filter((p) => p.slug && p.published)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function GET() {
	const posts = await getPublishedPosts();

	const staticEntries = staticRoutes
		.map(
			({ path, priority, changefreq }) => `
  <url>
    <loc>${BASE_URL}${path}</loc>
    <priority>${priority}</priority>
    <changefreq>${changefreq}</changefreq>
  </url>`
		)
		.join('');

	const postEntries = posts
		.map(
			({ slug, date }) => `
  <url>
    <loc>${BASE_URL}/blog/${slug}</loc>
    <lastmod>${date}</lastmod>
    <priority>0.8</priority>
    <changefreq>monthly</changefreq>
  </url>`
		)
		.join('');

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticEntries}
${postEntries}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
}
