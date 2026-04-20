<script>
  import { fade } from 'svelte/transition'
  import { DATA } from '$lib/data/data'

  const { name, description } = DATA
</script>

<main class="min-h-dvh flex flex-col gap-14 relative">
  <section id="hero">
    <div class="mx-auto w-full max-w-2xl space-y-8">
      <div class="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
        <div class="gap-2 flex flex-col order-2 md:order-1">
          <h1
            transition:fade={{ delay: 0 }}
            class="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
          >
            Hi, I'm {name.split(' ')[0]}
          </h1>
          <p
            transition:fade={{ delay: 100 }}
            class="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  </section>
</main>
