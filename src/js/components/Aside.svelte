<script>
  import {link} from 'svelte-spa-router'
  import routerNav from '../routes/routerNav'
</script>

{#each routerNav as route}
  {#if route.subtitle}
    <div>{route.subtitle}</div>
  {/if}
  <a class="button bg-theme font-we-500 font-sz-15 mb-4 py-3 px-7 rds-3 d-b txt-dark:v" href={route.url} use:link>{route.name}</a>
{/each}
