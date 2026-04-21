<script lang="ts">
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { formatDate } from '$lib/utils';
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';
	import { DATA } from '$lib/data/resume';

	export let data;

	$: postUrl = `${DATA.url}/blog/${data.meta.slug ?? ''}`;
	$: ogImage = data.meta.image ? `${DATA.url}${data.meta.image}` : `${DATA.url}${DATA.img}`;
</script>

<svelte:head>
	<title>{data.meta.title} — {DATA.name}</title>
	{#if data.meta.description}
		<meta name="description" content={data.meta.description} />
	{/if}
	<meta name="robots" content="index, follow" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="{data.meta.title} — {DATA.name}" />
	{#if data.meta.description}
		<meta property="og:description" content={data.meta.description} />
	{/if}
	<meta property="og:url" content={postUrl} />
	<meta property="og:site_name" content={DATA.name} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="article:published_time" content={data.meta.date} />
	<meta property="article:author" content={DATA.name} />
	{#if data.meta.categories?.length}
		{#each data.meta.categories as category}
			<meta property="article:tag" content={category} />
		{/each}
	{/if}
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{data.meta.title} — {DATA.name}" />
	{#if data.meta.description}
		<meta name="twitter:description" content={data.meta.description} />
	{/if}
	<meta name="twitter:image" content={ogImage} />
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		"headline": data.meta.title,
		"description": data.meta.description ?? "",
		"datePublished": data.meta.date,
		"dateModified": data.meta.lastModified ?? data.meta.date,
		"url": `${DATA.url}/blog/${data.meta.slug ?? ""}`,
		"image": data.meta.image ? `${DATA.url}${data.meta.image}` : `${DATA.url}${DATA.img}`,
		"author": {
			"@type": "Person",
			"@id": DATA.url + "/#person",
			"name": DATA.name,
			"url": DATA.url
		},
		"publisher": {
			"@type": "Person",
			"name": DATA.name,
			"url": DATA.url
		},
		"keywords": (data.meta.categories ?? []).join(", "),
		"mainEntityOfPage": {
			"@type": "WebPage",
			"@id": `${DATA.url}/blog/${data.meta.slug ?? ""}`
		}
	})}</script>`}
</svelte:head>

<!-- Back link -->
<div class="-mt-6 mb-6">
	<a
		href="/blog"
		class="group inline-flex items-center gap-1 rounded-lg border border-border px-2 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
	>
		<ChevronLeft class="size-3 transition-transform group-hover:-translate-x-px" />
		Back to Blog
	</a>
</div>

<article>
	<!-- Title & date -->
	<div class="mb-6 flex flex-col gap-2">
		<h1 class="title text-3xl font-semibold leading-tight tracking-tighter md:text-4xl">
			{data.meta.title}
		</h1>
		<p class="text-sm text-muted-foreground">{formatDate(data.meta.date)}</p>
	</div>

	<!-- Categories -->
	{#if data.meta.categories?.length}
		<div class="mb-4 flex flex-wrap gap-2">
			{#each data.meta.categories as category}
				<Badge variant="outline" class="rounded-[4px]">{category}</Badge>
			{/each}
		</div>
	{/if}

	<!-- Gradient divider -->
	<div class="my-6 flex w-full items-center">
		<div
			class="h-px flex-1 bg-border"
			style="mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent); -webkit-mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);"
		></div>
	</div>

	<!-- Content -->
	<div
		class="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert prose-headings:text-foreground prose-a:text-accent prose-strong:text-foreground prose-code:text-foreground"
	>
		<svelte:component this={data.content} />
	</div>
</article>

<!-- Prev / Next navigation -->
{#if data.previousPost || data.nextPost}
	<nav class="mt-12 pt-8" aria-label="Blog post navigation">
		<div class="flex flex-col gap-4 sm:flex-row">
			{#if data.previousPost}
				<a
					href="/blog/{data.previousPost.slug}"
					class="group flex flex-1 flex-col gap-1 rounded-lg border border-border p-4 transition-colors hover:bg-accent/10"
				>
					<span class="flex items-center gap-1 text-xs text-muted-foreground">
						<ChevronLeft class="size-3" />
						Previous
					</span>
					<span class="text-sm font-medium transition-colors group-hover:text-foreground">
						{data.previousPost.title}
					</span>
				</a>
			{:else}
				<div class="hidden flex-1 sm:block"></div>
			{/if}

			{#if data.nextPost}
				<a
					href="/blog/{data.nextPost.slug}"
					class="group flex flex-1 flex-col gap-1 rounded-lg border border-border p-4 text-right transition-colors hover:bg-accent/10"
				>
					<span class="flex items-center justify-end gap-1 text-xs text-muted-foreground">
						Next
						<ChevronRight class="size-3" />
					</span>
					<span class="text-sm font-medium transition-colors group-hover:text-foreground">
						{data.nextPost.title}
					</span>
				</a>
			{:else}
				<div class="hidden flex-1 sm:block"></div>
			{/if}
		</div>
	</nav>
{/if}
