<script>
  import { fade } from 'svelte/transition'
  import { DATA } from '$lib/data/resume'

  const { contact } = DATA
  const socials = Object.values(contact.social)
</script>

<section class="pb-20">
  <div class="flex min-h-0 flex-col gap-y-4">
    <h2 transition:fade class="text-xl font-bold">Contact</h2>
    <div transition:fade class="flex flex-col gap-y-2 text-muted-foreground">
      <p>
        Feel free to reach out via email at
        <a href="mailto:{contact.email}" class="text-foreground underline underline-offset-2">
          {contact.email}
        </a>
        or connect on any of the platforms below.
      </p>
    </div>
    <div transition:fade class="flex flex-wrap gap-3 mt-2">
      {#each socials.filter(s => s.navbar) as social}
        <a
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-accent transition-colors"
        >
          <img src={social.icon} class="size-4" alt={social.name} />
          {social.name}
        </a>
      {/each}
    </div>
  </div>
</section>
