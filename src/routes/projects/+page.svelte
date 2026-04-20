<script>
  import { fade } from 'svelte/transition'
  import { DATA } from '$lib/data/resume'
  import ProjectCard from '$lib/components/portfolio/ProjectCard.svelte'

  const { projects } = DATA
</script>

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
