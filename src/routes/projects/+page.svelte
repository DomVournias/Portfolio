<script>
  import { fade } from 'svelte/transition'
  import { DATA } from '$lib/data/resume'
  import ProjectCard from '$lib/components/portfolio/ProjectCard.svelte'

  const { projects } = DATA
</script>

<svelte:head>
  <title>Projects — {DATA.name}</title>
  <meta name="description" content="Portfolio projects by {DATA.name} — full-stack developer. Marketplaces, web apps, and open-source tools." />
  <meta property="og:title" content="Projects — {DATA.name}" />
  <meta property="og:url" content="{DATA.url}/projects" />
  <meta property="og:image" content="{DATA.url}{DATA.img}" />
  <meta property="og:type" content="profile" />
</svelte:head>

<section class="pb-20">
  <div class="flex min-h-0 flex-col gap-y-4">
    <h2 transition:fade class="text-xl font-bold">Projects</h2>
    <div transition:fade class="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {#each projects as project}
        <ProjectCard
          title={project.title}
          href={project.href}
          description={project.description}
          dates={project.dates}
          tags={project.technologies}
          image={project.image}
          video={project.video}
          links={project.links}
        />
      {/each}
    </div>
  </div>
</section>
