<script lang="ts">
	import type { PageData } from './$types';
	import BlurFade from '$lib/components/magic/BlurFade.svelte';
	import FlickeringGrid from '$lib/components/magic/FlickeringGrid.svelte';
	import GitHubCalendar from '$lib/components/portfolio/GitHubCalendar.svelte';

	export let data: PageData;
	import HackathonCard from '$lib/components/portfolio/HackathonCard.svelte';
	import ProjectCard from '$lib/components/portfolio/ProjectCard.svelte';
	import ResumeCard from '$lib/components/portfolio/ResumeCard.svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { DATA } from '$lib/data/resume';
	import { marked } from 'marked';

	let BLUR_FADE_DELAY = 0.04;
</script>

<svelte:head>
	<title>{DATA.name}</title>
	<meta name="description" content={DATA.description} />
	<meta property="og:title" content={DATA.name} />
	<meta property="og:description" content={DATA.description} />
	<meta property="og:url" content={DATA.url} />
	<meta property="og:site_name" content={DATA.name} />
	<meta property="og:image" content="{DATA.url}{DATA.img}" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta name="robots" content="index, follow" />
	<meta
		name="googlebot"
		content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
	/>
	<meta name="twitter:title" content={DATA.name} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="{DATA.url}{DATA.img}" />
	<meta name="twitter:description" content={DATA.description} />
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "ProfilePage",
		"mainEntity": {
			"@type": "Person",
			"@id": DATA.url + "/#person",
			"name": DATA.name,
			"url": DATA.url,
			"image": DATA.url + DATA.img,
			"jobTitle": "Full-Stack Developer",
			"description": DATA.description,
			"sameAs": [
				"https://github.com/DomVournias",
				"https://gr.linkedin.com/in/domvournias",
				"https://twitter.com/domvournias"
			]
		}
	})}</script>`}
</svelte:head>

<main class="flex min-h-[100dvh] flex-col space-y-10">
	<!-- Hero Section -->
	<section id="hero">
		<div class="mx-auto w-full max-w-2xl space-y-8">
			<div class="flex flex-col gap-y-6 md:flex-row md:justify-between md:gap-2">
				<div class="order-2 flex flex-col gap-2 md:order-1">
					<BlurFade
						delay={BLUR_FADE_DELAY}
						class="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
						yOffset={8}
					>
						Hi, I'm <span class="text-accent">{DATA.name.split(' ')[0]}</span>
					</BlurFade>
					<BlurFade
						class="max-w-[600px] text-muted-foreground md:text-lg lg:text-xl"
						delay={BLUR_FADE_DELAY * 2}
					>
						{DATA.description}
					</BlurFade>
				</div>
				<BlurFade delay={BLUR_FADE_DELAY} class="order-1 md:order-2">
					<Avatar.Root class="size-24 rounded-full border shadow-lg ring-4 ring-muted md:size-32">
						<Avatar.Image alt={DATA.name} src={DATA.avatarUrl} />
						<Avatar.Fallback>{DATA.initials}</Avatar.Fallback>
					</Avatar.Root>
				</BlurFade>
			</div>
		</div>
	</section>

	<!-- About Section -->
	<section id="about">
		<BlurFade delay={BLUR_FADE_DELAY}>
			<h2 class="text-xl font-bold">About</h2>
		</BlurFade>
		<BlurFade delay={BLUR_FADE_DELAY * 1.4}>
			<div
				class="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert"
			>
				{@html marked(DATA.summary)}
			</div>
		</BlurFade>
	</section>

	<!-- GitHub Activity Section -->
	<section id="github-activity">
		<div class="flex min-h-0 flex-col gap-y-3">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h2 class="text-xl font-bold">GitHub Activity</h2>
			</BlurFade>
			<BlurFade delay={BLUR_FADE_DELAY * 1.2}>
				<GitHubCalendar total={data.githubActivity.total} contributions={data.githubActivity.contributions} />
			</BlurFade>
		</div>
	</section>

	<!-- Work Experience Section -->
	<section id="work">
		<div class="flex min-h-0 flex-col gap-y-3">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h2 class="text-xl font-bold">Work Experience</h2>
			</BlurFade>
			{#each DATA.work as work, id}
				<BlurFade delay={BLUR_FADE_DELAY * 1.2 + id * 0.05}>
					<ResumeCard {...work} />
				</BlurFade>
			{/each}
		</div>
	</section>

	<!-- Education Section -->
	<section id="education">
		<div class="flex min-h-0 flex-col gap-y-3">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h2 class="text-xl font-bold">Education</h2>
			</BlurFade>
			{#each DATA.education as edu, id}
				<BlurFade delay={BLUR_FADE_DELAY * 1.2 + id * 0.05}>
					<ResumeCard
						href={edu.href}
						logoUrl={edu.logoUrl}
						company={edu.school}
						title={edu.degree}
						start={edu.start}
						end={edu.end}
					/>
				</BlurFade>
			{/each}
		</div>
	</section>

	<!-- Skills Section -->
	<section id="skills">
		<div class="flex min-h-0 flex-col gap-y-3">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h2 class="text-xl font-bold">Skills</h2>
			</BlurFade>
			<div class="flex flex-wrap gap-1">
				{#each DATA.skills as skill, id}
					<BlurFade delay={BLUR_FADE_DELAY * id + 0.002}>
						<Badge>{skill}</Badge>
					</BlurFade>
				{/each}
			</div>
		</div>
	</section>

	<!-- Projects Section -->
	<section id="projects">
		<div class="w-full space-y-12 py-12">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<div class="flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<div class="flex w-full items-center">
							<div
								class="h-px flex-1 bg-gradient-to-r from-transparent from-5% via-border via-95% to-transparent"
							></div>
							<div class="z-10 rounded-xl border bg-primary px-4 py-1">
								<span class="text-sm font-medium text-background">My Projects</span>
							</div>
							<div
								class="h-px flex-1 bg-gradient-to-l from-transparent from-5% via-border via-95% to-transparent"
							></div>
						</div>
						<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
							Check out my latest work
						</h2>
						<p
							class="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							I've worked on a variety of projects, from marketplaces to desktop apps. Here are a
							few of my favorites.
						</p>
					</div>
				</div>
			</BlurFade>
			<div class="mx-auto grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
				{#each DATA.projects as project, id}
					<BlurFade delay={BLUR_FADE_DELAY * 1.5 + id * 0.05}>
						<ProjectCard
							href={project.href}
							title={project.title}
							description={project.description}
							dates={project.dates}
							tags={project.technologies}
							image={project.image}
							video={project.video}
							links={project.links}
						/>
					</BlurFade>
				{/each}
			</div>
		</div>
	</section>

	<!-- Hackathons Section (shown only if entries exist) -->
	{#if DATA.hackathons.length > 0}
		<section id="hackathons">
			<div class="w-full space-y-12 py-12">
				<BlurFade delay={BLUR_FADE_DELAY}>
					<div class="flex flex-col items-center justify-center space-y-4 text-center">
						<div class="space-y-2">
							<div class="flex w-full items-center">
								<div class="h-px flex-1 bg-gradient-to-r from-transparent from-5% via-border via-95% to-transparent"></div>
								<div class="z-10 rounded-xl border bg-primary px-4 py-1">
									<span class="text-sm font-medium text-background">Hackathons</span>
								</div>
								<div class="h-px flex-1 bg-gradient-to-l from-transparent from-5% via-border via-95% to-transparent"></div>
							</div>
							<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">I like building things</h2>
						</div>
					</div>
				</BlurFade>
				<BlurFade delay={BLUR_FADE_DELAY * 2}>
					<ul class="mb-4 ml-4 divide-y divide-dashed border-l">
						{#each DATA.hackathons as project}
							<BlurFade delay={BLUR_FADE_DELAY}>
								<HackathonCard {...project} />
							</BlurFade>
						{/each}
					</ul>
				</BlurFade>
			</div>
		</section>
	{/if}

	<!-- Contact Section -->
	<section id="contact">
		<div class="w-full py-12">
			<BlurFade delay={BLUR_FADE_DELAY * 2}>
				<div class="relative rounded-xl border p-10">
					<div
						class="absolute -top-4 left-1/2 z-10 -translate-x-1/2 rounded-xl border bg-primary px-4 py-1"
					>
						<span class="text-sm font-medium text-background">Contact</span>
					</div>
					<div class="absolute inset-0 overflow-hidden rounded-xl" style="height: 50%;">
						<FlickeringGrid
							squareSize={2}
							gridGap={2}
							class="h-full w-full"
							style="mask-image: linear-gradient(to bottom, black, transparent); -webkit-mask-image: linear-gradient(to bottom, black, transparent);"
						/>
					</div>
					<div class="relative flex flex-col items-center gap-4 text-center">
						<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
						<p class="mx-auto max-w-lg text-balance text-muted-foreground">
							Want to chat? Just shoot me a DM
							<a
								href={DATA.contact.social.X.url}
								target="_blank"
								rel="noopener noreferrer"
								class="text-accent underline-offset-4 hover:underline"
							>
								with a direct question on X (Twitter)
							</a>
							and I'll respond whenever I can. I will ignore all soliciting.
						</p>
					</div>
				</div>
			</BlurFade>
		</div>
	</section>
</main>
