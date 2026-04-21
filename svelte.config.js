import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';

let highlighterPromise = null;

const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			if (!highlighterPromise) {
				highlighterPromise = createHighlighter({
					themes: ['vesper'],
					langs: ['javascript', 'typescript', 'svelte', 'python', 'bash', 'css', 'html', 'json']
				});
			}
			const highlighter = await highlighterPromise;
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'vesper' }));
			return `{@html \`${html}\` }`;
		}
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter()
	}
};

export default config;
