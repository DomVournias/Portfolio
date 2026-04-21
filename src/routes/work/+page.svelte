<script>
  import { fade } from 'svelte/transition'
  import { DATA } from '$lib/data/resume'
  import ResumeCard from '$lib/components/portfolio/ResumeCard.svelte'

  const { work } = DATA
</script>

<svelte:head>
  <title>Work Experience — {DATA.name}</title>
  <meta name="description" content="Professional work history of {DATA.name}, full-stack developer with 7+ years of experience." />
  <meta property="og:title" content="Work Experience — {DATA.name}" />
  <meta property="og:url" content="{DATA.url}/work" />
  <meta property="og:image" content="{DATA.url}{DATA.img}" />
  <meta property="og:type" content="profile" />
</svelte:head>

<section class="pb-20">
  <div class="flex min-h-0 flex-col gap-y-3">
    <h2 transition:fade class="text-xl font-bold">Work Experience</h2>
    {#each work as item}
      <div transition:fade>
        <ResumeCard
          logoUrl={item.logoUrl}
          company={item.company}
          title={item.title}
          href={item.href}
          badges={item.badges}
          description={item.description}
          start={item.start}
          end={item.end}
        />
      </div>
    {/each}
  </div>
</section>
