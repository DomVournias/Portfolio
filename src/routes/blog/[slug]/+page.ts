import { error } from '@sveltejs/kit';
import type { Post } from '$lib/types';

export const prerender = true;

export async function entries() {
	const paths = import.meta.glob('/src/content/*.md');
	return Object.keys(paths).map((path) => ({
		slug: path.split('/').at(-1)?.replace('.md', '') ?? ''
	}));
}

export async function load({ params }) {
	try {
		const post = await import(`../../../content/${params.slug}.md`);

		// Build sorted post list for prev/next navigation
		const paths = import.meta.glob('/src/content/*.md', { eager: true });
		const allPosts = Object.entries(paths)
			.map(([path, file]: [string, any]) => {
				const slug = path.split('/').at(-1)?.replace('.md', '') ?? '';
				return {
					slug,
					title: (file.metadata as Post).title,
					date: (file.metadata as Post).date,
					published: (file.metadata as Post).published
				};
			})
			.filter((p) => p.slug && p.published)
			.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

		const currentIndex = allPosts.findIndex((p) => p.slug === params.slug);
		const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
		const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

		return {
			content: post.default,
			meta: { ...post.metadata, slug: params.slug },
			previousPost,
			nextPost
		};
	} catch {
		error(404, `Could not find ${params.slug}`);
	}
}
