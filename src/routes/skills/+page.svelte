<script>
  import { fade } from 'svelte/transition'
  import { DATA } from '$lib/data/resume'
  import Badge from '$lib/components/ui/badge/badge.svelte'

  const { skills } = DATA
</script>

<section class="pb-20">
  <div class="flex min-h-0 flex-col gap-y-4">
    <h2 transition:fade class="text-xl font-bold">Skills</h2>
    <div transition:fade class="flex flex-wrap gap-2">
      {#each skills as skill}
        <Badge variant="secondary">{skill}</Badge>
      {/each}
    </div>
  </div>
</section>
