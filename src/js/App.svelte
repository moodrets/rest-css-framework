<script>
  import Router from 'svelte-spa-router'
  import routes from './routes/index'
  import Header from './components/Header.svelte'
  import Aside from './components/Aside.svelte'
</script>

<Header></Header>
<section class="container mx-a px-4 px-6:lg">
  <div class="case ml-8-neg:lg">
    <aside class="cell cell-12 cell-3:lg pl-8:lg d-n d-b:lg">
      <Aside></Aside>
    </aside>
    <main class="cell cell-12 cell-9:lg pl-8:lg">
      <Router {routes} />
    </main>
  </div>
</section>
