<script>
  import { fade } from 'svelte/transition'
  import { DATA } from '$lib/data/resume'
  import Badge from '$lib/components/ui/badge/badge.svelte'

  const { skills } = DATA
</script>

<svelte:head>
  <title>Skills — {DATA.name}</title>
  <meta name="description" content="Technical skills of {DATA.name}: {DATA.skills.slice(0, 6).join(', ')}, and more." />
  <meta property="og:title" content="Skills — {DATA.name}" />
  <meta property="og:url" content="{DATA.url}/skills" />
  <meta property="og:image" content="{DATA.url}{DATA.img}" />
  <meta property="og:type" content="profile" />
</svelte:head>

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
