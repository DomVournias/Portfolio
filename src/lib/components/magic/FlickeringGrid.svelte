<script lang="ts">
	import { onMount } from 'svelte';
	import { cn } from '$lib/utils';

	export let squareSize: number = 4;
	export let gridGap: number = 6;
	export let flickerChance: number = 0.3;
	export let color: string | undefined = undefined;
	export let maxOpacity: number = 0.3;

	let className = '';
	export { className as class };

	let canvasEl: HTMLCanvasElement;
	let containerEl: HTMLDivElement;

	onMount(() => {
		let animFrameId: number;
		let isInView = false;
		let cols = 0,
			rows = 0;
		let squares: Float32Array;
		let rgba = '';

		const resolveColor = () => {
			const colorToUse = color ?? 'var(--foreground)';
			if (colorToUse.startsWith('var(')) {
				const tmp = document.createElement('div');
				tmp.style.color = colorToUse;
				tmp.style.position = 'absolute';
				tmp.style.visibility = 'hidden';
				document.body.appendChild(tmp);
				const computed = getComputedStyle(tmp).color;
				document.body.removeChild(tmp);
				return computed;
			}
			return colorToUse;
		};

		const toRGBA = (colorStr: string) => {
			const c = document.createElement('canvas');
			c.width = c.height = 1;
			const ctx = c.getContext('2d')!;
			ctx.fillStyle = colorStr;
			ctx.fillRect(0, 0, 1, 1);
			const [r, g, b] = Array.from(ctx.getImageData(0, 0, 1, 1).data);
			return `rgba(${r}, ${g}, ${b},`;
		};

		const setup = () => {
			const dpr = window.devicePixelRatio || 1;
			const w = containerEl.clientWidth;
			const h = containerEl.clientHeight;
			canvasEl.width = w * dpr;
			canvasEl.height = h * dpr;
			canvasEl.style.width = `${w}px`;
			canvasEl.style.height = `${h}px`;
			cols = Math.floor(w / (squareSize + gridGap));
			rows = Math.floor(h / (squareSize + gridGap));
			squares = new Float32Array(cols * rows);
			for (let i = 0; i < squares.length; i++) squares[i] = Math.random() * maxOpacity;
			return dpr;
		};

		rgba = toRGBA(resolveColor());
		let dpr = setup();

		let lastTime = 0;
		const animate = (time: number) => {
			if (!isInView) return;
			const delta = (time - lastTime) / 1000;
			lastTime = time;

			for (let i = 0; i < squares.length; i++) {
				if (Math.random() < flickerChance * delta) squares[i] = Math.random() * maxOpacity;
			}

			const ctx = canvasEl.getContext('2d')!;
			ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
			for (let i = 0; i < cols; i++) {
				for (let j = 0; j < rows; j++) {
					ctx.fillStyle = `${rgba}${squares[i * rows + j]})`;
					ctx.fillRect(
						i * (squareSize + gridGap) * dpr,
						j * (squareSize + gridGap) * dpr,
						squareSize * dpr,
						squareSize * dpr
					);
				}
			}
			animFrameId = requestAnimationFrame(animate);
		};

		const ro = new ResizeObserver(() => {
			dpr = setup();
		});
		ro.observe(containerEl);

		const io = new IntersectionObserver(
			([entry]) => {
				isInView = entry.isIntersecting;
				if (isInView) animFrameId = requestAnimationFrame(animate);
			},
			{ threshold: 0 }
		);
		io.observe(canvasEl);

		const mo = new MutationObserver(() => {
			rgba = toRGBA(resolveColor());
		});
		mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

		return () => {
			cancelAnimationFrame(animFrameId);
			ro.disconnect();
			io.disconnect();
			mo.disconnect();
		};
	});
</script>

<div bind:this={containerEl} class={cn('h-full w-full', className)} {...$$restProps}>
	<canvas bind:this={canvasEl} class="pointer-events-none" />
</div>
