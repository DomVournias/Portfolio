export const prerender = true;

const BASE_URL = 'https://domvournias.dev';
const AUTHOR = 'Dom Vournias';

async function getPublishedPosts() {
	const paths = import.meta.glob('/src/content/*.md', { eager: true });
	return Object.entries(paths)
		.map(([path, file]: [string, any]) => ({
			slug: path.split('/').at(-1)?.replace('.md', '') ?? '',
			title: file.metadata?.title ?? '',
			description: file.metadata?.description ?? '',
			date: file.metadata?.date ?? '',
			published: file.metadata?.published ?? false
		}))
		.filter((p) => p.slug && p.published)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function GET() {
	const posts = await getPublishedPosts();

	const items = posts
		.map(
			({ slug, title, description, date }) => `
    <item>
      <title><![CDATA[${title}]]></title>
      <description><![CDATA[${description}]]></description>
      <link>${BASE_URL}/blog/${slug}</link>
      <guid isPermaLink="true">${BASE_URL}/blog/${slug}</guid>
      <pubDate>${new Date(date).toUTCString()}</pubDate>
      <author>domvournias@gmail.com (${AUTHOR})</author>
    </item>`
		)
		.join('');

	const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${AUTHOR} — Blog</title>
    <description>My thoughts on software development, life, and more.</description>
    <link>${BASE_URL}/blog</link>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <language>en-us</language>
    <managingEditor>domvournias@gmail.com (${AUTHOR})</managingEditor>
    <webMaster>domvournias@gmail.com (${AUTHOR})</webMaster>
    ${items}
  </channel>
</rss>`;

	return new Response(rss, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
}
