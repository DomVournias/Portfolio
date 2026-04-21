<script>
	import FlickeringGrid from '$lib/components/magic/FlickeringGrid.svelte';
	import Navbar from '$lib/components/portfolio/Navbar.svelte';
	import '../app.css';
	import { ModeWatcher, setMode } from 'mode-watcher';
	import { page } from '$app/stores';
	setMode('dark');
</script>

<svelte:head>
	<link rel="canonical" href={$page.url.href} />
</svelte:head>

<ModeWatcher />
<div class="relative min-h-screen bg-background font-sans antialiased">
	<div
		class="pointer-events-none absolute inset-x-0 top-0 z-0 h-[100px] overflow-hidden"
		style="mask-image: linear-gradient(to bottom, black, transparent); -webkit-mask-image: linear-gradient(to bottom, black, transparent);"
	>
		<FlickeringGrid squareSize={2} gridGap={2} class="h-full w-full" />
	</div>
	<div class="relative z-10 mx-auto max-w-2xl px-6 py-12 sm:py-24">
		<header>
			<Navbar />
		</header>
		<main>
			<slot></slot>
		</main>
	</div>
</div>
