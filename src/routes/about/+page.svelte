<script>
  import { fade } from 'svelte/transition'
  import { DATA } from '$lib/data/resume'

  const { summary } = DATA
</script>

<svelte:head>
  <title>About — {DATA.name}</title>
  <meta name="description" content={DATA.description} />
  <meta property="og:title" content="About — {DATA.name}" />
  <meta property="og:description" content={DATA.description} />
  <meta property="og:url" content="{DATA.url}/about" />
  <meta property="og:image" content="{DATA.url}{DATA.img}" />
  <meta property="og:type" content="profile" />
</svelte:head>

<section class="pb-20">
  <div class="flex min-h-0 flex-col gap-y-4">
    <h2
      transition:fade
      class="text-xl font-bold"
    >
      About
    </h2>
    <div
      transition:fade
      class="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert"
    >
      <p>{summary}</p>
    </div>
  </div>
</section>
