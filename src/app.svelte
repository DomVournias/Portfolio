<script>
  import { Router, Route } from '@sveltejs/kit'
  import Home from './routes/+page.svelte'
  import About from './routes/about/+page.svelte'
  import Work from './routes/work/+page.svelte'
  import Skills from './routes/skills/+page.svelte'
  import Projects from './routes/projects/+page.svelte'
  import Contact from './routes/contact/+page.svelte'
</script>

<Router>
  <Route path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/work" component={Work} />
  <Route path="/skills" component={Skills} />
  <Route path="/projects" component={Projects} />
  <Route path="/contact" component={Contact} />
</Router>
