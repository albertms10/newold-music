<script lang="ts">
  import { Button } from "carbon-components-svelte";
  import ChevronLeft16 from "carbon-icons-svelte/lib/ChevronLeft16";
  import { _ } from "svelte-i18n";

  export let title: string = undefined;
  export let goBackRoute: string = undefined;
</script>

<style>
  h1 {
    margin-bottom: 2rem;
  }

  .page-header {
    margin: -2rem -2rem 2rem -2rem;
    padding: 2rem;
    background-color: #fff;
    border-bottom: 1px solid #eee;
  }
</style>

<div class="page-header">
  {#if goBackRoute}
    <Button kind="ghost" icon={ChevronLeft16} size="small" href={goBackRoute}>
      {$_(`routes.${goBackRoute}`)}
    </Button>
  {/if}

  <h1>{title}</h1>

  <slot />
</div>
