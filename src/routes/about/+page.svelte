<script>
  import { fade } from 'svelte/transition'
  import { DATA } from '$lib/data/data'

  const { summary } = DATA
</script>

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
