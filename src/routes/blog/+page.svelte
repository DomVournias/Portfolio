<script lang="ts">
	import { formatDate } from '$lib/utils';
	import BlurFade from '$lib/components/magic/BlurFade.svelte';
	import { ChevronRight } from 'lucide-svelte';
	import { DATA } from '$lib/data/resume';

	export let data;
	let BLUR_FADE_DELAY = 0.04;

	const pageTitle = `Blog — ${DATA.name}`;
	const pageDescription = 'My thoughts on software development, life, and more.';
	const pageUrl = `${DATA.url}/blog`;
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:url" content={pageUrl} />
	<meta property="og:site_name" content={DATA.name} />
	<meta property="og:image" content="{DATA.url}{DATA.img}" />
	<meta property="og:type" content="website" />
	<meta name="robots" content="index, follow" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={pageDescription} />
	<meta name="twitter:image" content="{DATA.url}{DATA.img}" />
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "Blog",
		"name": `${DATA.name} — Blog`,
		"description": pageDescription,
		"url": pageUrl,
		"author": {
			"@type": "Person",
			"@id": DATA.url + "/#person",
			"name": DATA.name,
			"url": DATA.url
		},
		"blogPost": data.posts.map((p) => ({
			"@type": "BlogPosting",
			"headline": p.title,
			"description": p.description,
			"url": `${DATA.url}/blog/${p.slug}`,
			"datePublished": p.date
		}))
	})}</script>`}
</svelte:head>

<section id="blog">
	<BlurFade delay={BLUR_FADE_DELAY}>
		<h1 class="mb-2 text-2xl font-semibold tracking-tight">
			Blog
			<span
				class="ml-1 rounded-md border border-border bg-card px-2 py-1 text-sm text-muted-foreground"
			>
				{data.posts.length}
				{data.posts.length === 1 ? 'post' : 'posts'}
			</span>
		</h1>
		<p class="mb-8 text-sm text-muted-foreground">
			My thoughts on software development, life, and more.
		</p>
	</BlurFade>

	{#if data.posts.length > 0}
		<BlurFade delay={BLUR_FADE_DELAY * 2}>
			<div class="flex flex-col gap-5">
				{#each data.posts as post, id}
					<BlurFade delay={BLUR_FADE_DELAY * 3 + id * 0.05}>
						<a
							href="/blog/{post.slug}"
							class="group flex cursor-pointer items-start gap-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
						>
							<span
								class="mt-[5px] font-mono text-xs font-medium tabular-nums text-muted-foreground"
							>
								{String(id + 1).padStart(2, '0')}.
							</span>
							<div class="flex flex-1 flex-col gap-y-1">
								<h2 class="text-lg font-medium tracking-tight">
									<span class="transition-colors group-hover:text-foreground">
										{post.title}
										<ChevronRight
											class="mb-px ml-1 inline-block size-4 -translate-x-2 stroke-[3] text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
											aria-hidden="true"
										/>
									</span>
								</h2>
								<p class="text-xs text-muted-foreground">
									{formatDate(post.date)}
								</p>
							</div>
						</a>
					</BlurFade>
				{/each}
			</div>
		</BlurFade>
	{:else}
		<BlurFade delay={BLUR_FADE_DELAY * 2}>
			<div class="flex flex-col items-center justify-center rounded-xl border border-border px-4 py-12">
				<p class="text-center text-muted-foreground">No blog posts yet. Check back soon!</p>
			</div>
		</BlurFade>
	{/if}
</section>
