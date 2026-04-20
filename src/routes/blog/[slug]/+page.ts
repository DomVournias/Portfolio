import { error } from '@sveltejs/kit';

export const prerender = true;

export async function entries() {
	const paths = import.meta.glob('/src/content/*.md');
	return Object.keys(paths).map((path) => ({
		slug: path.split('/').at(-1)?.replace('.md', '') ?? ''
	}));
}

export async function load({ params }) {
	console.log(params, 'Params');
	try {
		const post = await import(`../../../content/${params.slug}.md`);
		// console.log(post, 'Post');
		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		error(404, `Could not find ${params.slug}`);
	}
}
