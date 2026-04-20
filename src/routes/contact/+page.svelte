<script>
  import { fade } from 'svelte/transition'
  import { DATA } from '$lib/data/data'

  const { contact } = DATA
</script>

<section class="pb-20">
  <div class="flex min-h-0 flex-col gap-y-6">
    <h2
      transition:fade
      class="text-xl font-bold"
    >
      Contact
    </h2>
    {#each contact as item}
      <div
        transition:fade
        class="border bg-background border-border ring-2 ring-border/20 rounded-xl p-6 max-w-4xl"
      >
        <h3 class="font-semibold leading-none">{item.title}</h3>
        <p class="text-muted-foreground">{item.description}</p>
      </div>
    {/each}
  </div>
</section>
