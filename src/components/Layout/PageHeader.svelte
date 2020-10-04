<script lang="ts">
  import { Button } from "carbon-components-svelte";
  import ChevronLeft16 from "carbon-icons-svelte/lib/ChevronLeft16";
  import { _ } from "svelte-i18n";

  export let title: string = undefined;
  export let description: string = undefined;

  export let goBackRoute: string = undefined;
</script>

<style>
  h1 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .back-button .label {
    margin-left: 0.5rem;
  }

  .page-header {
    margin: -2rem -2rem 2rem -2rem;
    padding: 2rem;
    background-color: #fff;
    border-bottom: 1px solid #eee;
  }

  :global(.back-button svg) {
    margin-left: -0.5rem;
  }
</style>

<div class="page-header">
  {#if goBackRoute}
    <div class="back-button">
      <Button kind="ghost" size="small" href={goBackRoute}>
        <svelte:component this={ChevronLeft16} />
        <p class="label">{$_(`routes.${goBackRoute}`)}</p>
      </Button>
    </div>
  {/if}

  <h1>{title}</h1>

  {#if description}
    <p>{description}</p>
  {/if}

  <slot />
</div>
