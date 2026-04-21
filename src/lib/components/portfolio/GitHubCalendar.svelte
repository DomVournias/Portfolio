<script lang="ts">
	import ActivityCalendarWidget from 'activity-calendar-widget/svelte';
	import { mode } from 'mode-watcher';
	import { onMount } from 'svelte';

	export let total: number = 0;
	export let contributions: { date: string; count: number }[] = [];

	$: levelColorMode = $mode === 'dark' ? 'dark' : 'light';

	$: data = contributions.map((c) => ({
		date: c.date,
		activities: Array(c.count).fill({})
	}));

	let containerEl: HTMLDivElement;
	let widgetEl: HTMLDivElement;
	let scale = 1;
	let naturalHeight = 0;

	onMount(() => {
		const update = () => {
			if (!containerEl || !widgetEl) return;
			const available = containerEl.offsetWidth;
			const naturalWidth = widgetEl.scrollWidth;
			naturalHeight = widgetEl.scrollHeight;
			scale = available > 0 && naturalWidth > 0 ? Math.min(1, available / naturalWidth) : 1;
		};
		const ro = new ResizeObserver(update);
		ro.observe(containerEl);
		update();
		return () => ro.disconnect();
	});
</script>

{#if contributions.length === 0}
	<div
		class="flex h-28 w-full items-center justify-center rounded-md bg-muted text-xs text-muted-foreground"
	>
		No activity data available
	</div>
{:else}
	<div class="flex flex-col gap-2">
		<div
			bind:this={containerEl}
			class="w-full overflow-hidden"
			style="height: {naturalHeight * scale}px"
		>
			<div bind:this={widgetEl} style="transform-origin: top left; transform: scale({scale});">
				<ActivityCalendarWidget
					{data}
					daysToRender={365}
					{levelColorMode}
					showSummary={false}
					showLevels={false}
					showTooltip={true}
					showWeekdayLabels={false}
					showMonthLabels={true}
				/>
			</div>
		</div>
		<span class="text-xs text-muted-foreground">
			{total.toLocaleString()} contributions in the last year
		</span>
	</div>
{/if}
